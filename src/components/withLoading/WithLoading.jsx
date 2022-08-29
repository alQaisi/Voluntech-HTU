import InnerLoading from "../InnerLoading/InnerLoading.component";
import InnerError from "../InnerError/InnerError.component";
function WithLoading({children,status,error}){
    if(error)
        return <InnerError/>;
    if(status)
        return <InnerLoading/>;
    return(children);
}
export default WithLoading;