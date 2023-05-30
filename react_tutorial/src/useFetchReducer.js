import { useState, useEffect, useReducer } from "react";
const useFetch = (url) => {
    const abortCont = new AbortController();
    // const [data, setData] = useState(null);
    // const [pending, setPending] = useState(true);
    // const [error, setError] = useState(null);
    
    const initialState = { data : '' , pending : true, error: ''}
    const handleReducer= (state , action)=>{
        switch(action.type){
            case "fetchStart":
                return{
                    pending : true,
                    error : '',
                    data : '',
                };
            case "fetchSuccess":
                return{
                    pending : false,
                    error : '',
                    data : action.payload
                };
            case "fetchError":
                return{
                    pending : false,
                    error : action.payload,
                    data : ''
                };
            default:
                return state;
        }
    }
    
    const [state , dispatch]=useReducer(handleReducer , initialState );

    useEffect(() => {
        setTimeout(() => {
            fetch(url, { signal: abortCont.signal })
            .then((res) => {
                if (!res.ok) {
                    throw Error("Cannot Fetch the Data");
                }
                return res.json();
            })
            .then((data) => {
                dispatch({type:"fetchSuccess", payload : data});
            }).catch((err) => {
                if (err.name === "AbortError") { console.log("Fetch Aborted"); }
                else {
                    dispatch({type:"fetchError", payload : err.message});
                }
            });
            
        },300);
        return () => abortCont.abort();}, [url])
    return { data : state.data, pending : state.pending, error : state.error }
}
export default useFetch 