import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar/Navbar';
import Body from './component/Body/Body';

function App() {
  return (
    <div className='container mx-auto bg-white'>
      <Navbar />
      <Body />
    </div>
  );
}

export default App;
