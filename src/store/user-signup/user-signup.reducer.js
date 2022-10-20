import Cities from '../../assets/cities.json';

export const skills={
    "Mobile":false,
    "Hardware":false,
    "Data":false,
    "Design":false,
    "Websites":false,
};

export const initialUserValues={
    fName:"",lName:"",password:"",email:"",phone:"",website:"",
    city:Cities[0],description:"",skills:[],imagePath:null,imageFile:null,type:"user"
};

const INITIAL_STATE={
    skillsObject:skills,
    userValues:initialUserValues,
};

export const UserSignUpReducer=function(state=INITIAL_STATE,action){
    const { type,payload }=action;
    switch(type){
        case "SET_USER_SIGNUP_VALUES":
            return { ...state,userValues:payload };
        case "SET_USER_SIGNUP_SKILLS":
            return { ...state,...payload };
        case "RESET_USER_SIGNUP_DATA":
            return { ...payload };
        default:
            return state;
    }
};