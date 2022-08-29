import { Checkmark,CheckBoxCont } from "./CheckBox.styles";
import Input from "../input/Input.component";

function CheckBox({label,name,value,checked,onChange}){
    const inputElement= checked!==undefined
                        ?<Input label={label} value={value} id={label} name={name} checked={checked!==undefined && checked} type="checkbox" onChange={onChange}/>
                        :<Input label={label} value={value} id={label} name={name} type="checkbox" onChange={onChange}/>
    return(
        
        <CheckBoxCont>
            {value}
            {inputElement}
            <Checkmark/>
        </CheckBoxCont>
    )
};
export default CheckBox;