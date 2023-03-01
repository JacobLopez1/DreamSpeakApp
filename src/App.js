import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import Calendar from './pages/Calendar';
import Profile from './pages/Profile';
import Stats from './pages/Stats';
import Settings from './pages/Settings';
import Search from './pages/Search';
import Record from './pages/Record';
import ViewEntry from './pages/ViewEntry';
import EditEntry from './pages/EditEntry';

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
          <Route path="/settings" element={<Settings />} />
          <Route path="/search" element={<Search />} />
          <Route path="/record" element={<Record />} />
          <Route path="/viewEntry/:id"
            element={<ViewEntry/>} />
          <Route path="/editEntry/:id"
            element={<EditEntry/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
