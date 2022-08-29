import { Textarea } from "./textarea.styles";

function TextArea({name,label,placeholder,maxLength,onChange,...otherprops}){
    return(
        <Textarea name={name} aria-label={label} placeholder={placeholder} maxLength={maxLength} {...otherprops} onChange={onChange}/>
    );
}
export default TextArea;