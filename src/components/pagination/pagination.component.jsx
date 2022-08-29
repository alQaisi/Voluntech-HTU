import { Container,Next,Previous } from "./pagination.styles";
import { withPagination } from "../withPagination/withPagination.component";
import { Fragment,useEffect } from "react";
function Pagination({items,...hocProps}){
    const {pageSize,currentPage,NextPageHandle,PreviousPageHandle}=hocProps;
    const Items=items.slice(currentPage,currentPage+pageSize);
    useEffect(()=>{
        window.scrollTo({top:210, left: 0, behavior: 'smooth'});
    },[currentPage]);
    return(
        <Fragment>
            {Items}
            <Container>
                <Previous onClick={PreviousPageHandle}/>
                <Next onClick={NextPageHandle}/>
            </Container>
        </Fragment>
    );
}
export default withPagination(Pagination);