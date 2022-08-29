import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Options from "../../assets/particlesjs-config.json";

function ParticlesContainer(){
    async function particlesInit(main){
        await loadFull(main);
    }
    function particlesLoaded(container){
        // console.log(container);
    }
    return(
        <Particles className="particles" id="tsparticles" options={Options} init={particlesInit} loaded={particlesLoaded}/>
    );
}
export default ParticlesContainer;