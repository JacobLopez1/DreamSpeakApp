import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import Calendar from './pages/Calendar';
import Guides from './pages/Guides';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<HomePage active="home"/>} />
          <Route path="/home" element={<HomePage active="home"/>} />
          <Route path="/calendar" element={<Calendar active="calendar"/>} />
          <Route path="/guides" element={<Guides active="guides"/>} />
          <Route path="/profile" element={<Profile active="profile"/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
