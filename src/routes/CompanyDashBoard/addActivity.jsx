import { AddWorkCont,CloseIcon } from "../userDashboard/userDashboard.styles";
import { Input, TextArea, Select, DatePicker } from "../../components";
import Cities from '../../assets/cities.json';
import "react-datepicker/dist/react-datepicker.css";
import { useState,useEffect } from "react";

function AddActivity({toggleAddActivity,addActivity,colorMode}){
    const [dateRange,setDateRange]=useState([null,null]);
    const [startDate,endDate]=dateRange;
    const [newActivity,setNewActivity]=useState({title:"",description:"",city:"",skill:"",startDate:"",endDate:"",number:0});
    const options=["Select City"].concat(Cities).map((city,index)=><option value={city} key={index}>{city}</option>);
    function handleInputChange({target}){
        const inputElem=target;
        setNewActivity({...newActivity,[inputElem.name]:inputElem.value});
    }
    function handleCityChange(evt){
        const inputElem=evt.target;
        setNewActivity({...newActivity,city:inputElem.value});
    }
    function handleSkillChange(evt){
        const inputElem=evt.target;
        setNewActivity({...newActivity,skill:inputElem.value});
    }
    useEffect(()=>{
        const formatedSD=startDate?.toLocaleDateString();
        const formatedED=endDate?.toLocaleDateString();
        setNewActivity({...newActivity,startDate:formatedSD,endDate:formatedED});
        //eslint-disable-next-line
    },[startDate,endDate]);
    function onSubmit(evt){
        evt.preventDefault();
        addActivity(newActivity);
    }
    return(
        <AddWorkCont className={colorMode}>
            <form onSubmit={onSubmit}>
                <CloseIcon onClick={toggleAddActivity}/>
                <Input colorMode={colorMode}  type="text" name="title" label="title" placeholder="Activity Title" onChange={handleInputChange} required/>
                <TextArea colorMode={colorMode} name="description" placeholder="Type a breif description about the activity (350 characters max)" label="description" maxLength="350" required onChange={handleInputChange}/>
                <Input colorMode={colorMode} type="number" name="number" label="Required Number" placeholder="Technologists Number" min="1" onChange={handleInputChange} required/>
                <Select colorMode={colorMode} label={"City"} value={newActivity.city} onChange={handleCityChange}>{options}</Select>
                <br/>
                <Select colorMode={colorMode} label={"Category"} value={newActivity.skill} onChange={handleSkillChange}>
                    <option>Select Category</option>
                    <option>Data</option>
                    <option>Design</option>
                    <option>Hardware</option>
                    <option>Mobile</option>
                    <option>Websites</option>
                </Select>
                <DatePicker
                    className="datePicker"
                    placeholderText="Select Date"
                    minDate={new Date()}
                    selectsRange={true}
                    startDate={startDate}
                    endDate={endDate}
                    onChange={(update) => {
                    setDateRange(update);
                    }}
                    required
                    withPortal
                />
                <Input colorMode={colorMode} type="submit" label="submit" value={"submit"}/>
            </form>
        </AddWorkCont>
    );
}
export default AddActivity;