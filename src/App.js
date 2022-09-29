import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar/Navbar';
import Body from './component/Body/Body';
import Under from './component/Under/Under';

function App() {
  return (
    <div className='container mx-auto bg-slate-200'>
      <Navbar />
      <Body />
      <Under />
    </div>
  );
}

export default App;
