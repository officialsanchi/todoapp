import logo from './logo.svg';
import './App.css';
import { Routes } from './routes';
import { useRoutes } from 'react-router-dom';

function App() {
  return  useRoutes(Routes)
}

export default App;
