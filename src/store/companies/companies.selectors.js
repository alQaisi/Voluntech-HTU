import { createSelector } from "reselect";

export function getCompaniesStatus(state){
    return state.companies;
}

export function getCompaniesFunction(state){
    return state.companies.companies;
}

export const getCompanies=createSelector(
    [getCompaniesFunction],
    function(companies){
        return companies;
    }
);

export function getfilterdCompanies(state){
    const { companies,typeFilter,searchFilter }=state.companies;
    if(!companies)
        return [];
    return companies
        .filter(company=>company.data.cName.toLowerCase().includes(searchFilter))
        .filter(company=>typeFilter==="All types"?true:company.data.cType===typeFilter)
}