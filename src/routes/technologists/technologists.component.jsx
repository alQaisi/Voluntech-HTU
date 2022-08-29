import { useContext,Children } from "react";
import { Container } from './technologists.styles';
import ProfileCard from '../../components/ProfileCard/profilecard.component';
import { TechnologistsContext } from "../../context/Technologists.context";
import Filter from '../../components/filter/Filter.component';
import Pagination from "../../components/pagination/pagination.component";
import useDocumentTitle from "../../utils/useDocumentTitle";
import WithLoading from '../../components/withLoading/WithLoading';

function Technologists(){
    const {FilterdProfiles,isError,technologists,cityFilter,skillFilter,onSkillChange,onCityChange}=useContext(TechnologistsContext);
    const profiles=Children.toArray(FilterdProfiles.map(technologist=><ProfileCard {...technologist}/>));
    useDocumentTitle("Technologists");
    return(
        <WithLoading status={!technologists.length>0} error={isError}>
            <Container>
                <Filter selectedSkills={skillFilter} selectedCity={cityFilter} onSkillChange={onSkillChange} onCityChange={onCityChange}/>
                <Pagination items={profiles} pageSize={5}/>
            </Container>
        </WithLoading>
    );
}
export default Technologists;