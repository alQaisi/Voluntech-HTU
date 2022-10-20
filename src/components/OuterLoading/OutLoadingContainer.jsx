import OuterLoading from "./OuterLoading.component";
import { useSelector } from "react-redux";
import { selectOuterLoadingType } from "../../store/user/user.selector";

function OutLoadingContainer(){
    const OuterLoadingType=useSelector(selectOuterLoadingType);
    return(
        <>{OuterLoadingType?<OuterLoading type={OuterLoadingType}/>:<></>}</>
    );
}
export default OutLoadingContainer;