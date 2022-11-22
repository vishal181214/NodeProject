import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import './App.css';
import {Home} from './components/Home'
import Food from './components/Food'
import Fitness from './components/Fitness'
import Hollywood from './components/Hollywood'
import Technology from './components/Technology'
import Bollywood from './components/Bollywood'
import {HomeImageOne} from './components/HomeImageOne'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path="/Bollywood" element={<Bollywood/>}></Route>
          <Route path='/Technology' element={<Technology/>}></Route>
          <Route path='/Hollywood' element={<Hollywood/>}></Route>
          <Route path='/Fitness' element={<Fitness/>}></Route>
          <Route path='/Food' element={<Food/>}></Route>
          <Route path='/HomeImageOne' element={<HomeImageOne/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
