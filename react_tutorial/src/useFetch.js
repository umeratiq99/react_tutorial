import { useState, useEffect } from "react";
const useFetch = (url) => {
    const abortCont = new AbortController();
    const [data, setData] = useState(null);
    const [pending, setPending] = useState(true);
    const [error, setError] = useState(null);
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
                setData(data);
                setPending(false)
            }).catch((err) => {
                if (err.name === "AbortError") { console.log("Fetch Aborted"); }
                else {
                    setError(err.message);
                    setPending(false);
                }
            });
            
        },300);
        return () => abortCont.abort();}, [url])
    return { data, pending, error }
}
export default useFetch 