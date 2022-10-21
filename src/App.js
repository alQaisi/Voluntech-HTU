import { Suspense, lazy, Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Routes,Route } from "react-router-dom";
import { selectUserType } from "./store/user/user.selector";
import Error from "./components/Error/Error.component";
import OutLoadingContainer from "./components/OuterLoading/OutLoadingContainer";
const Page404=lazy(()=>import("./routes/404/Page"));
const Header=lazy(()=>import("./WrappedComponents/Header-Wrapped"));
const Home=lazy(()=>import("./routes/home/home.component"));
const SignUp=lazy(()=>import("./WrappedComponents/Signup-Wrapped"));
const Signin=lazy(()=>import("./WrappedComponents/Signin-Wrapped"));
const Profile=lazy(()=>import("./routes/profile/profile.component"));
const Settings=lazy(()=>import('./routes/settings/settings.component'));
const Technologists=lazy(()=>import("./routes/technologists/technologists.component"));
const Companies=lazy(()=>import("./routes/companies/companies.component"));
const Activities=lazy(()=>import("./WrappedComponents/App-Activities.jsx"));
const UserDashboard=lazy(()=>import("./routes/userDashboard/userDashboardRoute"));
const CompanyDashboard=lazy(()=>import("./routes/CompanyDashBoard/CompanyDashBoard.component"));
const Activity=lazy(()=>import("./routes/Activity/Activity.component"));
const Manage=lazy(()=>import("./routes/Manage/Manage.component"));
function App() {
  const userType=useSelector(selectUserType);
  return (
    <Fragment>
      <Suspense fallback={<Fragment></Fragment>}>
        <Routes>
          <Route path="/" element={<Header/>}>
            <Route index element={<Home/>}/>
            {
              userType==="user"
              ?<Route path="dashboard/*" element={<UserDashboard/>}/>
              :<Route path="dashboard/" element={<CompanyDashboard/>}/>
            }
            <Route path="settings" element={<Settings/>}/>
            <Route path="companies" element={<Companies/>}/>
            <Route path="technologists" element={<Technologists/>}/>
            <Route path="activities/*" element={<Activities/>}/>
            <Route path="profiles/:userId" element={<Profile/>}/>
            <Route path="activity/:actId" element={<Activity/>}/>
            <Route path="manage/:actId" element={<Manage/>}/>
          </Route>
          <Route path="signin/*" element={<Signin/>}/>
          <Route path="signup/*" element={<SignUp/>}/>
          <Route path="*" element={<Page404/>}/>
        </Routes>
      </Suspense>
      <Error/>
      <OutLoadingContainer/>
    </Fragment>
  );
}

export default App;
