import { Route, Routes } from 'react-router-dom';
import Home from './components/home/home';
import Login from './components/login/login';
import Dashboard from './components/dashboard/dashboard';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
  );
}

export default App;
