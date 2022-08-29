import {InputItem} from './input.style'
function Input({type,name,label,placeholder,onChange,...otherprops}){
    return(
        <InputItem type={type} name={name}  aria-label={label} placeholder={placeholder} onChange={onChange} {...otherprops}/>
    );
}
export default Input;