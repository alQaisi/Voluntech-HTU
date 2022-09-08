import { Container,CloseIcon } from "./notification.styles";
function Notification({notification,closeNotification}){
    
    if(!notification?.message)
        return <></>;

    const {type,message}=notification;
    return(
        <Container notificationType={type}>
            <CloseIcon onClick={closeNotification}/>
            <p>{message}</p>
        </Container>
    );
}
export default Notification;