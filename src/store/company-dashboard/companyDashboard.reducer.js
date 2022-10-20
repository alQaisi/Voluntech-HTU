const INITIAL_STATE={
    activities:undefined
}

export const CompanyDashboardReducer=function(state=INITIAL_STATE,action){
    const { type, payload }=action;
    switch(type){
        case "SET_COMPANY_ACTIVITIES":
            return { ...state, activities:payload };
        case "RESET_COMPANY_DASHBOARD":
            return { activities:undefined };
        default:
            return state;
    }
}