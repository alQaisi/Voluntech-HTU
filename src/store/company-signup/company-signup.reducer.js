export const initialCompanyValues={
    cName:"",password:"",email:"",phone:"",website:"",
    description:"",cType:"NGO",imageFile:null,imagePath:null,type:"company"
};

const INITIAL_STATE={
    companyValues:initialCompanyValues
};

export const CompanySignUpReducer=function(state=INITIAL_STATE,action){
    const { type, payload }=action;
    switch(type){
        case "SET_COMPANY_VALUES":
            return {...state,companyValues:{...state.companyValues,...payload}}
        case "RESET_COMPANY_VALUES":
            return { ...state,companyValues:payload };
        default:
            return state;
    } 
}