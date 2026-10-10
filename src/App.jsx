import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import LocationsPage from './pages/LocationsPage';
import LocationDetailPage from './pages/LocationDetailPage';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout><Home /></MainLayout>} />
        <Route path="/services/" element={<MainLayout><ServicesPage /></MainLayout>} />
        <Route path="/services/:slug/" element={<MainLayout><ServiceDetailPage /></MainLayout>} />
        <Route path="/locations/" element={<MainLayout><LocationsPage /></MainLayout>} />
        <Route path="/locations/:slug/" element={<MainLayout><LocationDetailPage /></MainLayout>} />
        <Route path="/about/" element={<MainLayout><About /></MainLayout>} />
        <Route path="/contact/" element={<MainLayout><Contact /></MainLayout>} />
        <Route path="*" element={<MainLayout><NotFound /></MainLayout>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
