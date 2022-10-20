import { Skill as SkillItem } from "./skill.styles";

function Skill({children,colorMode,onClick}){
    return(
        <SkillItem className={colorMode} onClick={onClick}>{children}</SkillItem>
    );
}
export default Skill;