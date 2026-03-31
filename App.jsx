import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/home';
import Taskpage from './pages/task';
import Navbar from './component/navbar';
import Taskprofile from './pages/taskprofile';
function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes> 
        <Route path='/' element={<Homepage />} />
        <Route path='/Task' element={<Taskpage />} />
        <Route path='/Task/:id' element={<Taskprofile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
