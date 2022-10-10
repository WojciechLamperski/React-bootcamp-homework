import './App.css';
import { Header } from './components/Header';
import { Content } from './components/Content';
import { Sidebar } from './components/Sidebar';
import { Footer } from './components/Footer';
import reactLogo from '../src/logo.svg';


function App() {
  return (
    <div className="app">
      < Header title="Header" logosrc={reactLogo} />
      <div className='wrapper'>
        < Sidebar />
        < Content />
      </div>
      < Footer />
    </div>
  );
}

export default App;

    

