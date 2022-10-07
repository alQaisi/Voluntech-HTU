import { useContext,Children } from "react";
import { Container } from './technologists.styles';
import { TechnologistsContext } from "../../context/Technologists.context";
import Pagination from "../../components/pagination/pagination.component";
import useDocumentTitle from "../../utils/useDocumentTitle";
import { ProfileCard, Filter, WithLoading } from "../../components";

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