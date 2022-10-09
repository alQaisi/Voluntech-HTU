import { useReducer,useEffect,createContext } from "react";
import { getProfiles } from "../utils/supabase.utils";

const INITIAL_STATE={
    companies:[],
    isError:false,
    typeFilter:"All types",
    searchFilter:""
}

const CompaniesReducer=function(state=INITIAL_STATE,action){
    const { type, payload }=action;
    switch(type){
        case "SET_COMPANIES":
            return { ...state,companies:payload };
        case "SET_IS_ERROR_COMPANIES":
            return { ...state,isError:payload };
        case "SET_COMPANIES_TYPE":
            return { ...state, typeFilter:payload };
        case "SET_COMPANIES_SEARCH_TEXT":
            return { ...state,searchFilter:payload };
        default:
            return state;
    }
}

export const CompaniesContext=createContext({});

function CompaniesProvider({children}){

    const [ { companies, isError, typeFilter, searchFilter } , dispatch ]=useReducer(CompaniesReducer,INITIAL_STATE);

    function onTypeChange({target}){
        const inputElem=target;
        dispatch({type:"SET_COMPANIES_TYPE",payload:inputElem.value});
    }

    function onSearchFieldChange({target}){
        const {value}=target;
        dispatch({type:"SET_COMPANIES_SEARCH_TEXT",payload:value.toLowerCase()});
    } 

    async function getCompanies(){
        try{
            const data=await getProfiles("company");
            dispatch({type:"SET_COMPANIES",payload:data.reverse()});
        }catch(err){
            dispatch({type:"SET_IS_ERROR_COMPANIES",payload:true});
        }
    }

    useEffect(()=>{
        let cleanUp=false;
        !cleanUp && getCompanies();
        return ()=>cleanUp=true;
    },[]);

    const value={companies,typeFilter,onTypeChange,onSearchFieldChange,searchFilter,isError};
    return(
        <CompaniesContext.Provider value={value}>{children}</CompaniesContext.Provider>
    );
}
export default CompaniesProvider;