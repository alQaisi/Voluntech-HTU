import { Container } from '../Activities/activities.styles';
import { useEffect,useContext,Children } from "react";
import { useParams,useNavigate } from 'react-router-dom';
import { ActivitesContext } from '../../context/Activities.context';
import { Activity, Input, Select, WithLoading } from "../../components";
import Pagination from '../../components/pagination/pagination.component';
import useDocumentTitle from '../../utils/useDocumentTitle';
import Cities from '../../assets/cities.json';

function ActivityCategory(){
    const Categories=["data","design","hardware","mobile","websites"];
    let { category }=useParams();
    useDocumentTitle(category);
    const navigate=useNavigate();
    useEffect(()=>{
        if(!Categories.includes(category?.toLocaleLowerCase()))
            navigate("/404");
        return ()=>{
            setCityFilter("All Cities");
            setSearchFilter("");
        }
        //eslint-disable-next-line
    },[category])
    
    const options=Children.toArray(["All Cities"].concat(Cities).map(city=><option value={city}>{city}</option>));
    const { activities,cityFilter,onCityChange,setCityFilter,setSearchFilter,onSearchFieldChange,searchFilter,isError }=useContext(ActivitesContext);
    const filterdActivities=Children.toArray(activities
        .filter(activity=>activity.data.title.toLowerCase().includes(searchFilter))
        .filter(activity=>activity.data.skill.toLowerCase()===category)
        .filter(activity=>cityFilter==="All Cities"?true:activity.data.city===cityFilter)
        .map(activity=><Activity activityData={activity} />));
    return(
        <WithLoading status={!activities.length>0} error={isError}>
            <Container>
            <h1 className="category">{category.toUpperCase()}</h1>
            <span className="navigate" onClick={()=>navigate("/activities")}>see all activities</span>
                <Input name="activity title" type="search" label="search by activity title" placeholder="Search for activities" onChange={onSearchFieldChange}/>
                <Select label="City" value={cityFilter} onChange={onCityChange}>{options}</Select>
                <Pagination items={filterdActivities} pageSize={5}/>
            </Container>
        </WithLoading>
    );
}
export default ActivityCategory;
