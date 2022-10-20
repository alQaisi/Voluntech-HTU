import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Options from "../../assets/particlesjs-config.json";
import DarkOptions from "../../assets/particlesjs-dark-config.json";
import { useSelector } from "react-redux";
import { selectColorMode } from "../../store/ui/ui.selectors";

function ParticlesContainer(){
    const colorMode=useSelector(selectColorMode);
    async function particlesInit(main){
        await loadFull(main);
    }
    function particlesLoaded(container){
        // console.log(container);
    }
    return(
        <Particles className="particles" id="tsparticles" options={colorMode==="dark"?DarkOptions:Options} init={particlesInit} loaded={particlesLoaded}/>
    );
}
export default ParticlesContainer;