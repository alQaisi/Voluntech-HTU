import { useState,useEffect,useContext } from 'react';
import { Container } from './AvatarUpload.styles';
import { Input } from '../';
import { UserContext } from "../../context/user.context";

function AvatarUpload({onChange,bigSize=false,defaultImage}){
    const {setImageUrl,user}=useContext(UserContext);
    const [image,setImage]=useState(null);
    const [imageURL,setURL]=useState("https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Breezeicons-actions-22-im-user.svg/1200px-Breezeicons-actions-22-im-user.svg.png");
    useEffect(function changeImage(){
        if(!image)
            return;
        setURL(URL.createObjectURL(image));
        setImageUrl(user,URL.createObjectURL(image));
        // eslint-disable-next-line
    },[image]);
    function onImageChange(evt){
        if (evt.target.files[0]){
            const file = evt.target.files[0];
            const fileExt = file.name.split('.').pop();
            const fileName = `${Math.random()}.${fileExt}`;
            const filePath = `${fileName}`;
            onChange(filePath,file);
            setImage(evt.target.files[0]);
        }
    }
    return(
        <Container>
            <img src={defaultImage || imageURL} alt="avatar" className={bigSize?"big":""}/>
            <Input id="avatar_upload" type="file" name="avatar" accept="image/*" onChange={onImageChange}/>
            <label htmlFor="avatar_upload">Choose file</label>
        </Container>
    )
};
export default AvatarUpload;