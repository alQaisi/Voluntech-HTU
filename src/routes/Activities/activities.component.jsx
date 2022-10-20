import { Container } from './activities.styles';
import { Children } from "react";
import { Activity, Input, Select, WithLoading } from "../../components";
import Pagination from '../../components/pagination/pagination.component';
import useDocumentTitle from '../../utils/useDocumentTitle';
import Cities from '../../assets/cities.json';
import { useSelector,useDispatch } from "react-redux";
import { selectActivitiesStatus,selectFilterdActivities,selectActivities } from "../../store/activities/activities.selectors";
import { setActivitiesCategory,setActivitiesCity,setActivitiesSearchtext } from "../../store/activities/activities.actions";
import { selectColorMode } from "../../store/ui/ui.selectors";

function Activities(){
    const dispatch=useDispatch();
    const colorMode=useSelector(selectColorMode);
    const options=Children.toArray(["All Cities"].concat(Cities).map(city=><option value={city}>{city}</option>));
    const activities=useSelector(selectActivities);
    const { categoryFilter,cityFilter,isError }=useSelector(selectActivitiesStatus);
    const activitiesArr=Children.toArray(useSelector(selectFilterdActivities).map(activity=><Activity colorMode={colorMode} activityData={activity}/>));

    useDocumentTitle("Activities");

    function onCategoryChange({target}){
        const inputElem=target;
        dispatch(setActivitiesCategory(inputElem.value));
    }
    function onCityChange({target}){
        const inputElem=target;
        dispatch(setActivitiesCity(inputElem.value));
    }
    function onSearchFieldChange({target}){
        const {value}=target;
        dispatch(setActivitiesSearchtext(value.toLowerCase()));
    } 
    
    return(
        <WithLoading status={activities===undefined} colorMode={colorMode} error={isError}>
            <Container className={colorMode}>
                <Input colorMode={colorMode} name="activity title" type="search" label="search by activity title" placeholder="Search for activities" onChange={onSearchFieldChange}/>
                <Select colorMode={colorMode} label="company type" value={categoryFilter} onChange={onCategoryChange}>
                    <option>All Category</option>
                    <option>Data</option>
                    <option>Design</option>
                    <option>Hardware</option>
                    <option>Mobile</option>
                    <option>Websites</option>
                </Select>
                <Select colorMode={colorMode} label="City" value={cityFilter} onChange={onCityChange}>{options}</Select>
                <Pagination items={activitiesArr} pageSize={5}/>
            </Container>
        </WithLoading>
    );
}
export default Activities;
