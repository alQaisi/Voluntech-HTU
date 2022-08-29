import { Suspense, lazy, Fragment } from 'react';
import { Routes,Route } from "react-router-dom";
import Error from "./components/Error/Error.component";
import OutLoadingContainer from "./components/OuterLoading/OutLoadingContainer";
const Page404=lazy(()=>import("./routes/404/Page"));
const AppHeader=lazy(()=>import("./ContextComponentSelectors/AppHeader.component"));
const Home=lazy(()=>import("./routes/home/home.component"));
const AppSignUp=lazy(()=>import("./ContextComponentSelectors/AppSignUp.component"));
const AppSignIn=lazy(()=>import("./ContextComponentSelectors/AppSignIn.component"));
const AppProfile=lazy(()=>import("./ContextComponentSelectors/AppProfile.component"));
const UserUpdateProfile=lazy(()=>import('./ContextComponentSelectors/UserUpdateProfile.jsx'));
const AppTechno=lazy(()=>import("./ContextComponentSelectors/AppTechno.component"));
const AppCompanies=lazy(()=>import("./ContextComponentSelectors/AppCompanies.component"));
const AppActivities=lazy(()=>import("./ContextComponentSelectors/AppActivities.component"));
const Dashboard=lazy(()=>import("./routes/dashboard/dashboard.component"));
const AppActivity=lazy(()=>import("./ContextComponentSelectors/AppActivity.component"));
const Manage=lazy(()=>import("./routes/Manage/Manage.component"));
function App() {
  return (
    <Fragment>
      <Suspense fallback={<Fragment></Fragment>}>
        <Routes>
          <Route path="/" element={<AppHeader/>}>
            <Route index element={<Home/>}/>
            <Route path="dashboard" element={<Dashboard/>}/>
            <Route path="settings" element={<UserUpdateProfile/>}/>
            <Route path="companies" element={<AppCompanies/>}/>
            <Route path="technologists" element={<AppTechno/>}/>
            <Route path="activities/*" element={<AppActivities/>}/>
            <Route path="profiles/:userId" element={<AppProfile/>}/>
            <Route path="activity/:actId" element={<AppActivity/>}/>
            <Route path="manage/:actId" element={<Manage/>}/>
          </Route>
          <Route path="signin/*" element={<AppSignIn/>}/>
          <Route path="signup/*" element={<AppSignUp/>}/>
          <Route path="*" element={<Page404/>}/>
        </Routes>
      </Suspense>
      <Error/>
      <OutLoadingContainer/>
    </Fragment>
  );
}

export default App;
