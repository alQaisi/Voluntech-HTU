import {InputItem} from './input.style'
function Input({type,name,label,placeholder,onChange,colorMode,...otherprops}){
    return(
        <InputItem className={colorMode} type={type} name={name}  aria-label={label} placeholder={placeholder} onChange={onChange} {...otherprops}/>
    );
}
export default Input;