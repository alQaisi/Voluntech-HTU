import { Outlet,useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { Fragment } from 'react';
import { Hero,Logo,AppBar,UserNav,ProfileTitle,Avatar,MenuIcon,CloseMenuIcon,LightModeIcon,DarkModeIcon } from './header.styles';
import { Link, AppMenu, Footer, Notification, UserMenu } from "../";
import { signOut,setNotification } from "../../store/user/user.actions";
import { toggleMenu,toggleColorMode } from "../../store/ui/ui.actions";
import { selectUserStore } from "../../store/user/user.selector";
import { selectUiState } from "../../store/ui/ui.selectors";
import { resetCompanyActivities } from "../../store/company-dashboard/companyDashboard.actions";

function Header(){
    const dispatch=useDispatch();
    const { menuStatus,colorMode }=useSelector(selectUiState);
    const {user,imageUrl,notification}=useSelector(selectUserStore);
    
    const defaultImag="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Breezeicons-actions-22-im-user.svg/1200px-Breezeicons-actions-22-im-user.svg.png";
    const userImage=user && `https://nrhsumqatauurhjsswzq.supabase.co/storage/v1/object/public/avatars/${user.user_metadata.imagePath}`
    const navigate=useNavigate();

    function onColorIconClick(){
        const newColorMode=colorMode!=="dark"?"dark":"light";
        dispatch(toggleColorMode(newColorMode));
    }

    function signOutHandler(){
        user.user_metadata.type==="company" && dispatch(resetCompanyActivities());
        signOut();
    }

    return(
        <Fragment>
            <AppBar className={colorMode}>
                <Logo onClick={()=>navigate("/")}/>
                <UserNav>
                    <Link onClick={signOutHandler} className="navLink" to='/'>Sign Out</Link>
                    <Link type="navlink" className="navLink" to='/settings'>Settings</Link>
                    <Link type="navlink" className="navLink" to='/dashboard'>Dashboard</Link>
                    <Avatar src={imageUrl || userImage || defaultImag} alt="avatar" onClick={()=>navigate(`/profiles/${user.id}`)}/>
                    <ProfileTitle>Go to your profile</ProfileTitle>
                    { colorMode!=="dark"?<LightModeIcon onClick={onColorIconClick}/>:<DarkModeIcon onClick={onColorIconClick}/> }
                    {
                        menuStatus
                        ?<><CloseMenuIcon onClick={()=>dispatch(toggleMenu(menuStatus))}/><UserMenu colorMode={colorMode} signOut={signOut} menuStatus={menuStatus} toggleMenu={toggleMenu} /></>
                        :<MenuIcon onClick={()=>dispatch(toggleMenu(menuStatus))}/>
                    }
                </UserNav>
            </AppBar>
            <Hero className={colorMode}>
                <AppMenu colorMode={colorMode}/>
            </Hero>
            <Outlet/>
            <Notification notification={notification} closeNotification={()=>dispatch(setNotification())}/>
            <Footer colorMode={colorMode}/>
        </Fragment>
    )
}
export default Header;