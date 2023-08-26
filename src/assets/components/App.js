

import '../css/App.css'
import AddMeeting from '../pages/AddMeeting';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import PostMeeting from '../pages/PostMeeting';
import UpcomingMeeting from '../pages/UpcomingMeeting';
import Nav from './Nav';
import { Route,Routes } from 'react-router-dom';
function App() {
  return (
    <div className="">
      <Nav/>
      <Routes>
      <Route path='/' element={<Home/>}/>
        <Route path='/upcoming-meeting' element={<UpcomingMeeting/>}/>
        <Route path='/post-meeting' element={<PostMeeting/>}/>
        <Route path='/add-meeting' element={<AddMeeting/>}/>
        <Route path='*' element={<NotFound/>}/>
       
      </Routes>
    </div>
  );
}

export default App;
