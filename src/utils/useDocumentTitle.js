import { useEffect } from "react";

function useDocumentTitle(title,prevailOnUnmount=false){
    useEffect(()=>{
        document.title=title;
    },[title]);
    useEffect(()=>()=>{
        if(!prevailOnUnmount){
            document.title="Voluntech";
        }
        //eslint-disable-next-line
    },[]);
}
export default useDocumentTitle;

