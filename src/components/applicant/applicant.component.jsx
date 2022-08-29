import { Fragment, useState } from "react";
import { useNavigate } from "react-router";
import { Container, Avatar, Title, Notes, ToggleNotes, UserIcon, ActivityIcon, DeleteIcon, ApproveIcon, Link, Date, Status } from "./applicant.styles";

function Applicant({actData,deleteCallBack,approveCallBack}){
    const {id,uid,aid,title,data,status}=actData;
    const navigate=useNavigate();
    const [textSize,setTextSize]=useState("small");
    function toggleTextSize(){
        return textSize==="small"?setTextSize("large"):setTextSize("small");
    }
    return (
        <Container className={deleteCallBack?"extend":""}>
            <div className="first-line">
                <Avatar src={`https://nrhsumqatauurhjsswzq.supabase.co/storage/v1/object/public/avatars/${data.userImage}`} alt="user avatar" />
                <Title>{title}</Title>
            </div>
            <Notes>
                {
                    data.notes.length>100?
                    <Fragment>
                        {textSize==="small"?data.notes.slice(0,90)+"...":data.notes}
                        <ToggleNotes onClick={toggleTextSize}>{textSize==="small"?"See More":"See Less"}</ToggleNotes>
                    </Fragment>
                    :data.notes
                }
            </Notes>
            <Date>{`${data.startDate} - ${data.endDate}`}</Date>
            <Status>{status}</Status>
            <div className="second-line">
                <Link onClick={()=>navigate(`/profiles/${uid}`)}><UserIcon/> User profile</Link>
                <Link onClick={()=>navigate(`/activity/${aid}`)}><ActivityIcon/> Activity page</Link>
            </div>
            { deleteCallBack && <DeleteIcon onClick={deleteCallBack} data-id={id}/> }
            { (approveCallBack && status==="pending") &&  <ApproveIcon onClick={approveCallBack} data-id={uid}/>}
        </Container>
    );
}
export default Applicant;