import { CustomSelect } from "./Select.styles";

function Select({children,label,value,onChange,colorMode}){
    return(
        <CustomSelect className={colorMode} value={value} aria-label={label} onChange={onChange}>
            {children}
        </CustomSelect>
    );
}
export default Select;