import { Container } from './companies.styles';
import { useContext,Children } from "react";
import { CompaniesContext } from '../../context/Companies.context';
import { CompanyCard, Input, Select, WithLoading } from "../../components";
import Pagination from '../../components/pagination/pagination.component';
import useDocumentTitle from '../../utils/useDocumentTitle';

function Companies(){
    const {companies,typeFilter,onTypeChange,searchFilter,onSearchFieldChange,isError}=useContext(CompaniesContext);
    const filteredCompanies=Children.toArray(companies
                    .filter(company=>company.data.cName.toLowerCase().includes(searchFilter))
                    .filter(company=>typeFilter==="All types"?true:company.data.cType===typeFilter)
                    .map(company=><CompanyCard {...company}/>));
    useDocumentTitle("Companies");
    return(
        <WithLoading status={!companies.length>0} error={isError}>
            <Container>
                <Input name="companyName" type="search" label="search by company name" placeholder="Search for companies" onChange={onSearchFieldChange}/>
                <Select label="company type" value={typeFilter} onChange={onTypeChange}>
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
