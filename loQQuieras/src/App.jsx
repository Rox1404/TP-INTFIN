import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Principal } from './componentes/Principal';
import { Login } from './componentes/Login';
import { Registro } from './componentes/Registro';
import { Navbar } from './componentes/Navbar';
import './App.css';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Principal />} />
                <Route path="/principal" element={<Principal />} />
                <Route path="/login" element={<Login />} />
                <Route path="/registro" element={<Registro />} />
            </Routes>
        </Router>
    );
}
// implementar

export default App;
