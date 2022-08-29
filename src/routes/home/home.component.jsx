import { HomeCont,MainHeading,MainText,GridMenu,GridItem } from './home.styles';
import { Children } from 'react';
import mobile from '../../assets/mobile.jpg';
import websites from '../../assets/websites.jpg';
import hardware from '../../assets/hardware.jpg';
import data from '../../assets/data.jpg';
import design from '../../assets/design.jpg';
import { useNavigate } from "react-router-dom";
function Home(){
    let navigate = useNavigate();
    function handleClick(evt){
        const path=`/activities/${evt.target.dataset.page}`
        navigate(path);
    }
    const categories={mobile,websites,hardware,data,design};
    const items=Children.toArray(Object.keys(categories).map(category=>(
        <GridItem data-page={category} className={category} onClick={handleClick}>
            <img  src={categories[category]} alt={category} />
            <div className="itemOverlay">
                <h2>{category}</h2>
            </div>
        </GridItem>
    )));
    return(
        <HomeCont>
            <MainHeading>Are you a technical specialist?</MainHeading>
            <MainText>Volunteer in some activities to gain more experience and help develop the community.</MainText>
            <GridMenu>
                {items}
            </GridMenu>
        </HomeCont>
    );
}
export default Home;