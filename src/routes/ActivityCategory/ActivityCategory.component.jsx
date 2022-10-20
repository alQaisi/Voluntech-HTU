import { Container } from '../Activities/activities.styles';
import { useEffect,Children } from "react";
import { useParams,useNavigate } from 'react-router-dom';
import { Activity, Input, Select, WithLoading } from "../../components";
import Pagination from '../../components/pagination/pagination.component';
import useDocumentTitle from '../../utils/useDocumentTitle';
import Cities from '../../assets/cities.json';
import { selectColorMode } from "../../store/ui/ui.selectors";
import { setActivitiesCategory,resetActivitiesFilter,setActivitiesCity,setActivitiesSearchtext } from "../../store/activities/activities.actions";
import { selectActivitiesStatus,selectFilterdActivities,selectActivities } from "../../store/activities/activities.selectors";
import { useSelector,useDispatch } from "react-redux";

function ActivityCategory(){
    const dispatch=useDispatch();
    let { category }=useParams();
    const categories=["data","design","mobile","websites","hardware"];
    const colorMode=useSelector(selectColorMode);
    const activities=useSelector(selectActivities);
    const options=Children.toArray(["All Cities"].concat(Cities).map(city=><option value={city}>{city}</option>));
    const { cityFilter,isError }=useSelector(selectActivitiesStatus);
    const activitiesArr=Children.toArray(useSelector(selectFilterdActivities).map(activity=><Activity colorMode={colorMode} activityData={activity}/>));
    
    useDocumentTitle(category);
    const navigate=useNavigate();

    useEffect(()=>{
        dispatch(setActivitiesCategory(category.toLowerCase()));
        if(categories.includes(category.toLowerCase())){
            const categoryName=category[0].toUpperCase()+category.slice(1);
            dispatch(setActivitiesCategory(categoryName));
        }
        else
            navigate("/404");
        return ()=>dispatch(resetActivitiesFilter());
        //eslint-disable-next-line
    },[category,dispatch])
    
    function onCityChange({target}){
        const inputElem=target;
        dispatch(setActivitiesCity(inputElem.value));
    }
    function onSearchFieldChange({target}){
        const {value}=target;
        dispatch(setActivitiesSearchtext(value.toLowerCase()));
    } 
    
    return(
        <WithLoading colorMode={colorMode} status={activities===undefined} error={isError}>
            <Container className={colorMode}>
            <h1 className="category">{category.toUpperCase()}</h1>
            <span className="navigate" onClick={()=>navigate("/activities")}>see all activities</span>
                <Input colorMode={colorMode} name="activity title" type="search" label="search by activity title" placeholder="Search for activities" onChange={onSearchFieldChange}/>
                <Select colorMode={colorMode} label="City" value={cityFilter} onChange={onCityChange}>{options}</Select>
                <Pagination items={activitiesArr} pageSize={5}/>
            </Container>
        </WithLoading>
    );
}
export default ActivityCategory;
