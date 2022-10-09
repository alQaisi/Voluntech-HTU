import { useReducer,useEffect,useMemo,createContext } from "react";
import { getProfiles } from "../utils/supabase.utils";

const defaultSkills={All:true,Data:false,Design:false,Hardware:false,Mobile:false,Websites:false};

const INITIAL_STATE={
    technologists:[],
    isError:false,
    skillFilter:defaultSkills,
    cityFilter:"All Cities",
}

const TechnologistsReducer=function(state=INITIAL_STATE,action){
    const { type, payload }=action;
    switch(type){
        case "SET_TECHNOLOGISTS":
            return { ...state, technologists:payload };
        case "SET_IS_ERROR_TECHNOLOGISTS":
            return { ...state, isError:payload };
        case "SET_TECHNOLOGISIT_CITY":
            return { ...state, cityFilter:payload };
        case "SET_SKILLS_FILTER":
            return { ...state, skillFilter:payload };
        default:
            return state;
    }
}

export const TechnologistsContext=createContext({});

function TechnologistsProvider({children}){

    const [ { technologists, isError, skillFilter, cityFilter }, dispatch ]=useReducer(TechnologistsReducer,INITIAL_STATE);

    const memoizedSkillFilter=useMemo(()=>(function filterBySkill(){
        const skills=Object.keys(skillFilter).filter(skill=>skillFilter[skill]);
        return technologists
                .filter(technologist=>skillFilter.All?true:filterSkills(technologist.data.skills,skills));
    })(),[skillFilter,technologists]);

    const FilterdProfiles=memoizedSkillFilter
                .filter(technologist=>cityFilter==="All Cities"?true:technologist.data.city===cityFilter);
    function onSkillChange({target}){
        const inputElem=target;
        const newSkillFilter={...skillFilter,All:false,[inputElem.name]:inputElem.checked};
        switch(true){
            case inputElem.name==="All" && inputElem.checked:
            case Object.values(newSkillFilter).slice(1).reduce((acc,item)=>acc && item,true):
            case !Object.values(newSkillFilter).slice(0).reduce((acc,item)=>acc || item):
                return dispatch({type:"SET_SKILLS_FILTER",payload:defaultSkills});
            default:
                break;
        }
        dispatch({type:"SET_SKILLS_FILTER",payload:newSkillFilter});
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
        dispatch({type:"SET_TECHNOLOGISIT_CITY",payload:inputElem.value});
    }
    async function getTechnologists(){
        try{
            const data=await getProfiles("user");
            dispatch({type:"SET_TECHNOLOGISTS",payload:data.reverse()});
        }catch(err){
            dispatch({type:"SET_IS_ERROR_TECHNOLOGISTS",payload:true});
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