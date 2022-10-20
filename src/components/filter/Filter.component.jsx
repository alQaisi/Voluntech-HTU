import { CheckBox, Select } from "../";
import Cities from '../../assets/cities.json';
import { Container } from "./Filter.styles";

function Filter({selectedSkills,selectedCity,onSkillChange,onCityChange,colorMode}){
    const options=["All Cities"].concat(Cities).map((city,index)=><option value={city} key={index}>{city}</option>);
    const skills=["All","Data","Design","Hardware","Mobile","Websites"].map((skill,index)=><CheckBox key={index} label={skill} name={skill} value={skill} checked={selectedSkills[skill]} colorMode={colorMode} onChange={onSkillChange}/>);
    return(
        <Container>
            {skills}
            <Select colorMode={colorMode} label={"City"} value={selectedCity} onChange={onCityChange}>{options}</Select>
        </Container>
    );
}
export default Filter;