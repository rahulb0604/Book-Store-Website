import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import AddBooks from './pages/AddBooks';
import Books from './pages/Books';
import Home from './pages/Home';
import Updatebook from './pages/Updatebook';
import DeleteBook from './pages/Deletebook';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route  path="/books" element={<Books />} />
        <Route  path="/addbooks" element={<AddBooks />} />
        <Route  path="/updatebook" element={<Updatebook />} />
        <Route path="/deletebook" element={<DeleteBook />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
