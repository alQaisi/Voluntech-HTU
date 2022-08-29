import { useState,useEffect,createContext } from "react";
import { getActivites as getActivitesHelper } from "../utils/supabase.utils";

export const ActivitesContext=createContext({});

function ActivitesProvider({children}){
    const [activities,setActivites]=useState([]);
    const [isError,setIsError]=useState(false);
    const [categoryFilter,setCategoryFilter]=useState("All Category");
    const [cityFilter,setCityFilter]=useState("All Cities");
    const [searchFilter,setSearchFilter]=useState("");
    function onCategoryChange({target}){
        const inputElem=target;
        setCategoryFilter(inputElem.value);
    }
    function onCityChange({target}){
        const inputElem=target;
        setCityFilter(inputElem.value);
    }
    function onSearchFieldChange({target}){
        const {value}=target;
        setSearchFilter(value.toLowerCase());
    } 
    async function getActivites(){
        try{
            const data=await getActivitesHelper("company");
            setActivites(data.reverse());
        }catch(err){
            setIsError(true);
        }
    }
    useEffect(()=>{
        let cleanUp=false;
        !cleanUp && getActivites();
        return ()=>cleanUp=true;
    },[]);
    const value={activities,cityFilter,onCityChange,setCityFilter,setSearchFilter,categoryFilter,onCategoryChange,onSearchFieldChange,searchFilter,isError};
    return(
        <ActivitesContext.Provider value={value}>{children}</ActivitesContext.Provider>
    );
}
export default ActivitesProvider;
