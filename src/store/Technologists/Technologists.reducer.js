export const defaultSkills={All:true,Data:false,Design:false,Hardware:false,Mobile:false,Websites:false};

const INITIAL_STATE={
    technologists:undefined,
    isError:false,
    skillFilter:defaultSkills,
    cityFilter:"All Cities",
}

export const TechnologistsReducer=function(state=INITIAL_STATE,action){
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
        case "RESET_TECHNOLOGISTS":
            return INITIAL_STATE;
        default:
            return state;
    }
}