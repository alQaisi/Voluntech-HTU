import { Skill as SkillItem } from "./skill.styles";

function Skill({children,onClick}){
    return(
        <SkillItem onClick={onClick}>{children}</SkillItem>
    );
}
export default Skill;