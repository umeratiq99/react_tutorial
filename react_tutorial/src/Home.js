const Home = () => {
    let n;
    const handleclick=()=>{
       n=prompt("Hello Ninjas");
       alert("My name is "+ n);
    }
    const handleclick2=(name)=>{
        alert("My name is "+ name);
    }
    return (
        <div className="home>">
            <h2>Your Stop for Quick Notes</h2>
            <button onClick={handleclick}>Click me</button>
            <button onClick={()=>{ handleclick2(n)}}>Click me again</button>
        </div>
    );
}

export default Home;