import { Container } from './companies.styles';
import { useEffect,Children } from "react";
import { CompanyCard, Input, Select, WithLoading } from "../../components";
import Pagination from '../../components/pagination/pagination.component';
import useDocumentTitle from '../../utils/useDocumentTitle';
import { useSelector,useDispatch } from "react-redux";
import { getfilterdCompanies,getCompanies,getCompaniesStatus } from "../../store/companies/companies.selectors";
import { getCompaniesAsync,resetCompanies,setCompaniesType,setCompaniesSearchtext } from "../../store/companies/companies.actions";
import { selectColorMode } from "../../store/ui/ui.selectors";

function Companies(){
    const dispatch=useDispatch();
    const colorMode=useSelector(selectColorMode);
    const { typeFilter,isError }=useSelector(getCompaniesStatus);
    const companies=useSelector(getCompanies);
    const filteredCompanies=Children.toArray(useSelector(getfilterdCompanies)
                    .map(company=><CompanyCard colorMode={colorMode} {...company}/>));
    useDocumentTitle("Companies");

    function onTypeChange({target}){
        const inputElem=target;
        dispatch(setCompaniesType(inputElem.value));
    }

    function onSearchFieldChange({target}){
        const {value}=target;
        dispatch(setCompaniesSearchtext(value.toLowerCase()));
    } 

    useEffect(()=>{
        let cleanUp=false;
        !cleanUp && dispatch(getCompaniesAsync());
        return ()=>{
            cleanUp=true
            dispatch(resetCompanies());
        };
    },[dispatch]);

    return(
        <WithLoading status={companies===undefined} colorMode={colorMode} error={isError}>
            <Container className={colorMode}>
                <Input colorMode={colorMode} name="companyName" type="search" label="search by company name" placeholder="Search for companies" onChange={onSearchFieldChange}/>
                <Select colorMode={colorMode} label="company type" value={typeFilter} onChange={onTypeChange}>
                    <option>All types</option>
                    <option>NGO</option>
                    <option>Government</option>
                    <option>Religious</option>
                </Select>
                <Pagination items={filteredCompanies} pageSize={5}/>
            </Container>
        </WithLoading>
    );
}
export default Companies;
