import { Container, CompanyName, Title, Info, Half1, Half2,Delete } from "./workExperience.styles";
import { Fragment } from "react";
function WorkExperience({id,companyName,city,country,title,startDate,endDate,deleteCallback}){
    return(
        <Container>
            <Half2/>
            <Half1>
                <CompanyName>{companyName}</CompanyName>
                <Title>{title}</Title>
                <Info>{startDate +" - "+ (endDate || "Present")}</Info>
                <Info>{city+", "+country}</Info>
                {
                    deleteCallback?
                    <Delete data-id={id} onClick={deleteCallback}/>
                    :<Fragment/>
                }
            </Half1>
        </Container>
    );
}
export default WorkExperience;