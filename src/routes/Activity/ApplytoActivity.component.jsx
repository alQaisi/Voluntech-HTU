import { ApplyContainer } from "./Activity.styles";
import { CloseIcon } from "../userDashboard/userDashboard.styles";
import Input from "../../components/input/Input.component";
import TextArea from '../../components/TextArea/textarea.component';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState,useEffect } from "react";

function ApplyToActivity({toggleApply,applyToActivity}){
    useEffect(()=>{
        window.scrollTo({
            top: 0,
            left: 100,
            behavior: 'smooth'
        });
    },[]);
    const [dateRange,setDateRange]=useState([null,null]);
    const [startDate,endDate]=dateRange;
    const [data,setDate]=useState({notes:"",startDate,endDate});
    
    function handleInputChange({target}){
        setDate({...data,notes:target.value});
    }
    function onSubmit(evt){
        evt.preventDefault();
        applyToActivity(data);
        toggleApply();
    }
    useEffect(()=>{
        const formatedSD=startDate?.toLocaleDateString();
        const formatedED=endDate?.toLocaleDateString();
        setDate({...data,startDate:formatedSD,endDate:formatedED});
        //eslint-disable-next-line
    },[startDate,endDate]);
    return(
        <ApplyContainer>
            <form onSubmit={onSubmit}>
                <CloseIcon onClick={toggleApply}/>
                <TextArea name="notes" placeholder="Why are you interested in this activity? (350 characters max)" label="description" maxLength="350" required onChange={handleInputChange}/>
                <DatePicker
                    className="datePicker"
                    placeholderText="Select Available Date"
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
                <Input type="submit" label="submit"/>
            </form>
        </ApplyContainer>
    );
}
export default ApplyToActivity;