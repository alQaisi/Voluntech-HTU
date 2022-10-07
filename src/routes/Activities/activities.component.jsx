import { Container } from './activities.styles';
import { useContext,Children } from "react";
import { ActivitesContext } from '../../context/Activities.context';
import { Activity, Input, Select, WithLoading } from "../../components";
import Pagination from '../../components/pagination/pagination.component';
import useDocumentTitle from '../../utils/useDocumentTitle';
import Cities from '../../assets/cities.json';

function Activities(){
    const options=Children.toArray(["All Cities"].concat(Cities).map(city=><option value={city}>{city}</option>));
    const { activities,cityFilter,onCityChange,categoryFilter,onCategoryChange,onSearchFieldChange,searchFilter,isError }=useContext(ActivitesContext);
    const filterdActivities=Children.toArray(activities
        .filter(activity=>activity.data.title.toLowerCase().includes(searchFilter))
        .filter(activity=>categoryFilter==="All Category"?true:activity.data.skill===categoryFilter)
        .filter(activity=>cityFilter==="All Cities"?true:activity.data.city===cityFilter)
        .map(activity=><Activity activityData={activity} />));
    useDocumentTitle("Activities");
    return(
        <WithLoading status={!activities.length>0} error={isError}>
            <Container>
                <Input name="activity title" type="search" label="search by activity title" placeholder="Search for activities" onChange={onSearchFieldChange}/>
                <Select label="company type" value={categoryFilter} onChange={onCategoryChange}>
                    <option>All Category</option>
                    <option>Data</option>
                    <option>Design</option>
                    <option>Hardware</option>
                    <option>Mobile</option>
                    <option>Websites</option>
                </Select>
                <Select label="City" value={cityFilter} onChange={onCityChange}>{options}</Select>
                <Pagination items={filterdActivities} pageSize={5}/>
            </Container>
        </WithLoading>
    );
}
export default Activities;
