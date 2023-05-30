import logo from './logo.svg';
import Navbar from './Navbar';
import Home from './Home';
import { Routes , Route } from 'react-router-dom';
// import Creat from './Creat';
import Creat from './CreatReducer';
import Blogdetails from './Blogdetails';
import NotFound from './NotFoundPage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />}/>
          {/* <Route path="/create" element={<Creat/>}/> */}
          <Route path="/creatReducer" element={<Creat/>}/>
          <Route path="/blogs/:id" element={<Blogdetails/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </div>

    </div>
  );
}

export default App;
