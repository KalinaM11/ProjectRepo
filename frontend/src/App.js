import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import NewMessageForm from './components/NewMessageForm';
import './App.css';
import DisplayAllMessages from './components/displayAllMessages';

function App() {
  return (
    <Router>
      <nav> 
        <Link to="/create-message">Create Message</Link>
        <Link to="/">Home</Link>
      </nav>

      <Routes> 
        <Route path="/create-message" element={<NewMessageForm />} />
        <Route path="/" element={<DisplayAllMessages />} />
      </Routes>
    </Router>
  );
}

export default App;
