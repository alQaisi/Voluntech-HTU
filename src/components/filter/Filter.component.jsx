import CheckBox from "../CheckBox/CheckBox.component";
import Select from "../Select/Select.component";
import Cities from '../../assets/cities.json';
import { Container } from "./Filter.styles";

function Filter({selectedSkills,selectedCity,onSkillChange,onCityChange}){
    const options=["All Cities"].concat(Cities).map((city,index)=><option value={city} key={index}>{city}</option>);
    const skills=["All","Data","Design","Hardware","Mobile","Websites"].map((skill,index)=><CheckBox key={index} label={skill} name={skill} value={skill} checked={selectedSkills[skill]} onChange={onSkillChange}/>);
    return(
        <Container>
            {skills}
            <Select label={"City"} value={selectedCity} onChange={onCityChange}>{options}</Select>
        </Container>
    );
}
export default Filter;