import { AddWorkCont,CloseIcon } from "./userDashboard.styles";
import { Input, DatePicker } from "../../components";
import "react-datepicker/dist/react-datepicker.css";
import { useState,useEffect } from "react";
function AddWork({toggleAddWork,updateWorkExperience,workExp}){
    const [dateRange,setDateRange]=useState([null,null]);
    const [startDate,endDate]=dateRange;
    
    const [newWork,setNewWork]=useState({cName:"",title:"",country:"",city:"",startDate:"",endDate:""});
    function handleInputChange({target}){
        const inputElem=target;
        setNewWork({...newWork,[inputElem.name]:inputElem.value});
    }
    function onSubmit(evt){
        evt.preventDefault();
        toggleAddWork(false);
        updateWorkExperience([...workExp,newWork]);
    }
    useEffect(()=>{
        const formatedSD=startDate?.toLocaleDateString();
        const formatedED=endDate?.toLocaleDateString();
        setNewWork({...newWork,startDate:formatedSD,endDate:formatedED});
        //eslint-disable-next-line
    },[startDate,endDate])
    return(
        <AddWorkCont>
            <form onSubmit={onSubmit}>
                <CloseIcon onClick={()=>toggleAddWork(false)}/>
                <Input type="text" name="cName" label="company name" placeholder="Company Name" onChange={handleInputChange} required/>
                <Input type="text" name="title" label="Job title" placeholder="Job title" onChange={handleInputChange} required/>
                <Input type="text" name="country" label="Country" placeholder="Country" onChange={handleInputChange} required/>
                <Input type="text" name="city" label="City" placeholder="City" onChange={handleInputChange} required/>
                <DatePicker
                    className="datePicker"
                    placeholderText="Select Date"
                    selectsRange={true}
                    maxDate={new Date()}
                    startDate={startDate}
                    endDate={endDate}
                    onChange={(update) => {
                    setDateRange(update);
                    }}
                    required
                    withPortal
                />
                <Input type="submit" label="submit"/>
            </form>
        </AddWorkCont>
    );
}
export default AddWork;