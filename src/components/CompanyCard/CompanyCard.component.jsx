import { CardLink,Container,CardHeader,CountryAvatar,Info } from "./CompanyCard.styles";
import { Skill } from "../";

function CompanyCard({id,data,colorMode}){
    const {cName,cType,email,imagePath,phone}=data;
    return(
        <CardLink to={`/profiles/${id}`} target="_blank" rel="noopener noreferrer">
            <Container className={colorMode}>
                <CardHeader>
                    <div className="overlay"/>
                    <CountryAvatar src={`https://nrhsumqatauurhjsswzq.supabase.co/storage/v1/object/public/avatars/${imagePath}`} alt="Company Logo"/>
                </CardHeader>
                <Info>
                    <h2>{cName}</h2>
                    <h5>+962{phone.slice(1)}</h5>
                    <h5>{email}</h5>
                    <Skill colorMode={colorMode}>{cType}</Skill>
                </Info>
            </Container>
        </CardLink>
    );
}
export default CompanyCard;