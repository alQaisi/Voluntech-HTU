import OuterLoading from "./OuterLoading.component";
import { useContext } from "react";
import { UserContext } from "../../context/user.context";

function OutLoadingContainer(){
    const {OuterLoadingType}=useContext(UserContext); 
    return(
        <>{OuterLoadingType?<OuterLoading type={OuterLoadingType}/>:<></>}</>
    );
}
export default OutLoadingContainer;