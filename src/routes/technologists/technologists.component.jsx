import { useEffect,Children } from "react";
import { useDispatch,useSelector } from "react-redux";
import { getTechnologists,getFillteredTechnologists,getTechnologistsStatus } from "../../store/Technologists/Technologists.selectors";
import { getTechnologistsAsync,resetTechnologists,setTechnologistsCity,setTechnologistsSkills } from "../../store/Technologists/Technologists.actions";
import { Container } from './technologists.styles';
import Pagination from "../../components/pagination/pagination.component";
import useDocumentTitle from "../../utils/useDocumentTitle";
import { ProfileCard, Filter, WithLoading } from "../../components";
import { defaultSkills } from "../../store/Technologists/Technologists.reducer";
import { selectColorMode } from "../../store/ui/ui.selectors";

function Technologists(){
    const dispatch=useDispatch();
    const technologists=useSelector(getTechnologists);
    const colorMode=useSelector(selectColorMode);
    const { isError,cityFilter,skillFilter }=useSelector(getTechnologistsStatus);
    const profiles=Children.toArray(useSelector(getFillteredTechnologists).map(technologist=><ProfileCard {...technologist} colorMode={colorMode} />));
    useDocumentTitle("Technologists");
    function onCityChange({target}){
        const inputElem=target;
        dispatch(setTechnologistsCity(inputElem.value));
    }
    function onSkillChange({target}){
        const inputElem=target;
        const newSkillFilter={...skillFilter,All:false,[inputElem.name]:inputElem.checked};
        switch(true){
            case inputElem.name==="All" && inputElem.checked:
            case Object.values(newSkillFilter).slice(1).reduce((acc,item)=>acc && item,true):
            case !Object.values(newSkillFilter).slice(0).reduce((acc,item)=>acc || item):
                return dispatch(setTechnologistsSkills(defaultSkills));
            default:
                break;
        }
        dispatch(setTechnologistsSkills(newSkillFilter));
    }
    useEffect(()=>{
        let cleanUp=false;
        !cleanUp && dispatch(getTechnologistsAsync());
        return ()=>{
            cleanUp=true;
            dispatch(resetTechnologists());
        };
    },[dispatch]);

    return(
        <WithLoading colorMode={colorMode} status={technologists===undefined} error={isError}>
            <Container className={colorMode}>
                <Filter colorMode={colorMode} selectedSkills={skillFilter} selectedCity={cityFilter} onSkillChange={onSkillChange} onCityChange={onCityChange}/>
                <Pagination items={profiles} pageSize={5}/>
            </Container>
        </WithLoading>
    );
}
export default Technologists;