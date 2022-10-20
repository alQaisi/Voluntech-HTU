import { Container,Next,Previous,PageNumber } from "./pagination.styles";
import { withPagination } from "../withPagination/withPagination.component";
import { Fragment,useEffect } from "react";
import { selectColorMode } from "../../store/ui/ui.selectors";
import { useSelector } from "react-redux";

function Pagination({items,...hocProps}){
    const colorMode=useSelector(selectColorMode);
    const {pageSize,currentPage,NextPageHandle,PreviousPageHandle}=hocProps;
    const Items=items.slice(currentPage,currentPage+pageSize);
    useEffect(()=>{
        window.scrollTo({top:210, left: 0, behavior: 'smooth'});
    },[currentPage]);
    const pages=Math.ceil(items.length/pageSize);
    const pageNumber=(currentPage/pageSize)+1;
    return(
        <Fragment>
            {Items}
            <Container className={colorMode}>
                <Previous title="Previous" onClick={PreviousPageHandle}/>
                <PageNumber>Page {pageNumber} of {pages}</PageNumber>
                <Next title="Next" onClick={NextPageHandle}/>
            </Container>
        </Fragment>
    );
}
export default withPagination(Pagination);