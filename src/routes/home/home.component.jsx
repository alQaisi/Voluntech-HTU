import { HomeCont,SpaceFill,MainHeading,MainText,GridMenu,GridItem } from './home.styles';
import { Children } from 'react';
import { mobile, websites, hardware, data, design } from "../../assets";
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { selectColorMode } from "../../store/ui/ui.selectors";

function Home(){
    const colorMode=useSelector(selectColorMode);
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
        <HomeCont className={colorMode}>
            <SpaceFill/>
            <MainHeading>Are you a technical specialist?</MainHeading>
            <MainText>Volunteer in some activities to gain more experience and help develop the community.</MainText>
            <GridMenu>
                {items}
            </GridMenu>
        </HomeCont>
    );
}
export default Home;