import { createSelector } from "reselect";

function getTechnologistsFunction(state){
    const { technologists }=state.technologists;
    return technologists;
}

export const getTechnologists=createSelector(
    [getTechnologistsFunction],
    function (technologists){
        return technologists;
    }
);

function filterSkills(userSkills,selectedSkills){
    for(let i=0;i<selectedSkills.length;i++){
        if(userSkills.includes(selectedSkills[i]))
            return true;
    }
    return false;
}

const getSkillsFilterdTechnologists=createSelector(
    [getTechnologists,getSkillsFilter],
    function (technologists,skillFilter){
        if(!technologists)
            return [];
        const skills=Object.keys(skillFilter).filter(skill=>skillFilter[skill]);
        return technologists
                .filter(technologist=>skillFilter.All?true:filterSkills(technologist.data.skills,skills));
    }
);

export const getFillteredTechnologists=createSelector(
    [getSkillsFilterdTechnologists,getCityFillter],
    function(technologists,cityFilter){
        return technologists.filter(technologist=>cityFilter==="All Cities"?true:technologist.data.city===cityFilter);
    }
);

export function getSkillsFilter(state){
    return state.technologists.skillFilter;
}

function getCityFillter(state){
    return state.technologists.cityFilter;
}


export function getTechnologistsStatus(state){
    const { skillFilter,cityFilter,isError }=state.technologists;
    return { skillFilter,cityFilter,isError }; 
}