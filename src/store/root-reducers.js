import { combineReducers } from "redux";
import { userReducer } from "./user/user.reducer";
import { UserSignInReducer } from "./signin/signin.reducer";
import { UiReducer } from "./ui/ui.reducer";
import { UserSignUpReducer } from "./user-signup/user-signup.reducer";
import { UserUpdateReducer } from "./userUpdate/userUpdate.reducer";
import { CompanySignUpReducer } from "./company-signup/company-signup.reducer";
import { ProfileReducer } from "./profile/profile.reducer";
import { UserDashboardReducer } from "./userDashboard/userDashboard.reducer";
import { ActivityReducer } from "./activity/activity.reducer";
import { CompanyDashboardReducer } from "./company-dashboard/companyDashboard.reducer";
import { ActivitiesReducer } from "./activities/activities.reducer";
import { CompaniesReducer } from "./companies/companies.reducer";
import { TechnologistsReducer } from "./Technologists/Technologists.reducer";

export const rootReducers=combineReducers({
    user:userReducer,
    signin:UserSignInReducer,
    userSignup:UserSignUpReducer,
    userUpdate:UserUpdateReducer,
    companySignUp:CompanySignUpReducer,
    profile:ProfileReducer,
    userDashboard:UserDashboardReducer,
    activity:ActivityReducer,
    companyDashboard:CompanyDashboardReducer,
    activities:ActivitiesReducer,
    companies:CompaniesReducer,
    technologists:TechnologistsReducer,
    ui:UiReducer
});