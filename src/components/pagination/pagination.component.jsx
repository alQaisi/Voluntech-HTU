import { Container,Next,Previous,PageNumber } from "./pagination.styles";
import { withPagination } from "../withPagination/withPagination.component";
import { Fragment,useEffect } from "react";
function Pagination({items,...hocProps}){
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
            <Container>
                <Previous title="Previous" onClick={PreviousPageHandle}/>
                <PageNumber>Page {pageNumber} of {pages}</PageNumber>
                <Next title="Next" onClick={NextPageHandle}/>
            </Container>
        </Fragment>
    );
}
export default withPagination(Pagination);