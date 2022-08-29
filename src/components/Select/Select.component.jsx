import { CustomSelect } from "./Select.styles";

function Select({children,label,value,onChange}){
    return(
        <CustomSelect value={value} aria-label={label} onChange={onChange}>
            {children}
        </CustomSelect>
    );
}
export default Select;