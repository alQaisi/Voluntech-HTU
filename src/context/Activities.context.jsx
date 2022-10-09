import { useReducer,useEffect,createContext } from "react";
import { getActivites as getActivitesHelper } from "../utils/supabase.utils";

const INITIAL_STATE={
    activities:[],
    isError:false,
    categoryFilter:"All Category",
    cityFilter:"All Cities",
    searchFilter:""
};

const ActivitiesReducer=function(state=INITIAL_STATE,action){
    const { type, payload }=action;
    switch(type){
        case "SET_ACTIVITIES":
            return { ...state, activities:payload };
        case "SET_IS_ERROR_ACTIVITIES":
            return { ...state, isError:payload };
        case "SET_ACTIVITIES_CITY":
            return { ...state, cityFilter:payload };
        case "SET_ACTIVITIES_CATEGORY":
            return { ...state, categoryFilter:payload };
        case "SET_ACTIVITIES_SEARCH_TEXT":
            return { ...state, searchFilter:payload };
        default:
            return state;
    }
}

export const ActivitesContext=createContext({});

function ActivitesProvider({children}){
    
    const [ { activities, isError, categoryFilter, cityFilter, searchFilter } , dispatch ]=useReducer(ActivitiesReducer,INITIAL_STATE)

    function onCategoryChange({target}){
        const inputElem=target;
        dispatch({type:"SET_ACTIVITIES_CATEGORY",payload:inputElem.value});
    }
    function onCityChange({target}){
        const inputElem=target;
        dispatch({type:"SET_ACTIVITIES_CITY",payload:inputElem.value});
    }
    function onSearchFieldChange({target}){
        const {value}=target;
        dispatch({type:"SET_ACTIVITIES_SEARCH_TEXT",payload:value.toLowerCase()});
    } 
    async function getActivites(){
        try{
            const data=await getActivitesHelper("company");
            dispatch({type:"SET_ACTIVITIES",payload:data.reverse()});
        }catch(err){
            dispatch({type:"SET_IS_ERROR_ACTIVITIES",payload:true});
        }            
    }
    useEffect(()=>{
        let cleanUp=false;
        !cleanUp && getActivites();
        return ()=>cleanUp=true;
    },[]);
    const value={activities,cityFilter,onCityChange,categoryFilter,onCategoryChange,onSearchFieldChange,searchFilter,isError};
    return(
        <ActivitesContext.Provider value={value}>{children}</ActivitesContext.Provider>
    );
}
export default ActivitesProvider;
