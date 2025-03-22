// App.js
import './App.css';
import Body from './Body';
import Header from './Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import User from './User';
import Comments from './Comments';
import Login from './Login';
import Usequery from './Usequery';

function App() {
  return (
    <div>
      <Usequery />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<><Header /><Body /></>} />
          <Route path='/user/:userid' element={<User />} />
          <Route path='/comments' element={<Comments />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
