import InnerLoading from "../InnerLoading/InnerLoading.component";
import InnerError from "../InnerError/InnerError.component";
function WithLoading({children,status,error,colorMode}){
    if(error)
        return <InnerError colorMode={colorMode}/>;
    if(status)
        return <InnerLoading colorMode={colorMode}/>;
    return(children);
}
export default WithLoading;