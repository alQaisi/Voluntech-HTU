import { NormalLoader,WhiteLoder } from "./Loader.styles";

function Loader({loaderType}){
    return(
        loaderType==="white"?<WhiteLoder/>:<NormalLoader/>
    );
}
export default Loader;