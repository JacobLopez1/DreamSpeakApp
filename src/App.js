import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import Calendar from './pages/Calendar';
import Profile from './pages/Profile';
import Stats from './pages/Stats';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<HomePage active="home"/>} />
          <Route path="/home" element={<HomePage active="home"/>} />
          <Route path="/calendar" element={<Calendar active="calendar"/>} />
          <Route path="/stats" element={<Stats active="stats"/>} />
          <Route path="/profile" element={<Profile active="profile"/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
