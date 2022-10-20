const INITIAL_STATE={
    activities:undefined,
    isError:false,
    categoryFilter:"All Category",
    cityFilter:"All Cities",
    searchFilter:""
};

export const ActivitiesReducer=function(state=INITIAL_STATE,action){
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
        case "RESET_ACTIVITIES_FILTER":
            return { ...state, searchFilter:"",cityFilter:"All Cities",categoryFilter:"All Category" };
        case "RESET_ACTIVITIES":
            return INITIAL_STATE;
        default:
            return state;
    }
}