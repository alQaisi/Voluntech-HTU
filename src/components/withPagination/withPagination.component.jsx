import { useEffect, useState } from "react"
export const withPagination=(Component)=>(props)=>{
    const [currentPage,setCurrentPage]=useState(0);
    const {items,pageSize}=props;
    function NextPageHandle(){
        const newPage=currentPage+pageSize;
        if(items[newPage])
            setCurrentPage(newPage);
    }
    function PreviousPageHandle(){
        const newPage=currentPage-pageSize;
        if(newPage>=0)
            setCurrentPage(newPage);
    }
    useEffect(()=>{
        setCurrentPage(0);
    },[items]);
    const hocProps={pageSize,currentPage,NextPageHandle,PreviousPageHandle};
    return(
        <Component items={items} {...hocProps}/>
    );
}