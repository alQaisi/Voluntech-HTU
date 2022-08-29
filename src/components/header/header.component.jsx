import { Outlet,useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../context/user.context';
import { UserMenuContext } from '../../context/UserMenu.context';
import UserMenu from '../userMenu/userMenu.component';
import { Hero,Logo,AppBar,UserNav,ProfileTitle,Avatar,MenuIcon,CloseMenuIcon} from './header.styles';
import Link from '../link/link.component';
import AppMenu from '../AppMenu/AppMenu.component';

function Header(){
    const {menuStatus,toggleMenu}=useContext(UserMenuContext);
    const {user,imageUrl,signOut}=useContext(UserContext);
    
    const defaultImag="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Breezeicons-actions-22-im-user.svg/1200px-Breezeicons-actions-22-im-user.svg.png";
    const userImage=user && `https://nrhsumqatauurhjsswzq.supabase.co/storage/v1/object/public/avatars/${user.user_metadata.imagePath}`

    const navigate=useNavigate();
    return(
        <>
            <AppBar>
                <Logo onClick={()=>navigate("/")}/>
                <UserNav>
                    <Link onClick={signOut} className="navLink" to='/'>Sign Out</Link>
                    <Link type="navlink" className="navLink" to='/settings'>Settings</Link>
                    <Link type="navlink" className="navLink" to='/dashboard'>Dashboard</Link>
                    <Avatar src={imageUrl || userImage || defaultImag} alt="avatar" onClick={()=>navigate(`/profiles/${user.id}`)}/>
                    <ProfileTitle>Go to your profile</ProfileTitle>
                    {
                        menuStatus
                        ?<><CloseMenuIcon onClick={toggleMenu}/><UserMenu signOut={signOut}/></>
                        :<MenuIcon onClick={toggleMenu}/>
                    }
                </UserNav>
            </AppBar>
            <Hero>
                <AppMenu/>
            </Hero>
            <Outlet/>
        </>
    )
}
export default Header;