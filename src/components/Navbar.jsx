import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg'; // Your custom SVG/PNG

export default function Navbar() {
  return (
    <nav style={{ display: 'flex', gap: '20px', padding: '10px', background: '#f0f0f0' }}>
      <Link to="/">
        <img src={logo} alt="Logo" width="50" />
      </Link>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/services">Services</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}