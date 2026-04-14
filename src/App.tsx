import { Outlet } from 'react-router';
import './App.css';
import Header from './components/header/Header';

function App() {
  return (
    <div id="app">
      <Header/>

      <Outlet />
    </div>
  );
}

export default App;
