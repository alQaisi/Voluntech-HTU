import { useState,useEffect,createContext, useMemo } from "react";
import { getProfiles } from "../utils/supabase.utils";

export const TechnologistsContext=createContext({});

function TechnologistsProvider({children}){

    const [technologists,setTechnologists]=useState([]);
    const [isError,setIsError]=useState(false);

    const defaultSkills={All:true,Data:false,Design:false,Hardware:false,Mobile:false,Websites:false};
    const [skillFilter,setSkillFilter]=useState(defaultSkills);
    const [cityFilter,setCityFilter]=useState("All Cities");

    const memoizedSkillFilter=useMemo(()=>(function filterBySkill(){
        const skills=Object.keys(skillFilter).filter(skill=>skillFilter[skill]);
        return technologists
                .filter(technologist=>skillFilter.All?true:filterSkills(technologist.data.skills,skills));
    })(),[skillFilter,technologists]);

    const FilterdProfiles=memoizedSkillFilter
                .filter(technologist=>cityFilter==="All Cities"?true:technologist.data.city===cityFilter);
    function onSkillChange({target}){
        const inputElem=target;
        if(inputElem.name==="All")
            return inputElem.checked?setSkillFilter(defaultSkills):null;
        const newSkillFilter={...skillFilter,All:false,[inputElem.name]:inputElem.checked};
        if (Object.values(newSkillFilter).slice(1).reduce((acc,item)=>acc && item,true))
            return setSkillFilter(defaultSkills);
        if (!Object.values(newSkillFilter).slice(0).reduce((acc,item)=>acc || item))
            return setSkillFilter(defaultSkills);
        setSkillFilter(newSkillFilter);
    }
    function filterSkills(userSkills,selectedSkills){
        for(let i=0;i<selectedSkills.length;i++){
            if(userSkills.includes(selectedSkills[i]))
                return true;
        }
        return false;
    }

    function onCityChange({target}){
        const inputElem=target;
        setCityFilter(inputElem.value);
    }
    async function getTechnologists(){
        try{
            const data=await getProfiles("user");
            setTechnologists(data.reverse());
        }catch(err){
            setIsError(true);
        }
    }
    useEffect(()=>{
        let cleanUp=false;
        !cleanUp && getTechnologists();
        return ()=>cleanUp=true;
    },[]);

    const value={FilterdProfiles,technologists,onSkillChange,onCityChange,isError,cityFilter,skillFilter,filterSkills};
    return(
        <TechnologistsContext.Provider value={value}>{children}</TechnologistsContext.Provider>
    );
}
export default TechnologistsProvider;