import { useState,useEffect,createContext } from "react";
import { getProfiles } from "../utils/supabase.utils";

export const CompaniesContext=createContext({});

function CompaniesProvider({children}){

    const [companies,setCompanies]=useState([]);
    const [isError,setIsError]=useState(false);

    const [typeFilter,setTypeFilter]=useState("All types");
    const [searchFilter,setSearchFilter]=useState("");

    function onTypeChange({target}){
        const inputElem=target;
        setTypeFilter(inputElem.value);
    }

    function onSearchFieldChange({target}){
        const {value}=target;
        setSearchFilter(value.toLowerCase());
    } 

    async function getCompanies(){
        try{
            const data=await getProfiles("company");
            setCompanies(data.reverse());
        }catch(err){
            setIsError(true);
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