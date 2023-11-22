import { Route, Routes } from 'react-router-dom';
import Home from './components/home/home';
import Login from './components/login/login';
import Dashboard from './components/dashboard/dashboard';
import Create from './components/create/create';
import Read from './components/read/read';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create" element={<Create />} />
        <Route path="/read" element={<Read />} />
      </Routes>
  );
}

export default App;
