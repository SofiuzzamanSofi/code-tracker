import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar/Navbar';
import Body from './component/Body/Body';
import Under from './component/Under/Under';
import Footer from './component/Footer/Footer';

function App() {
  return (
    <div className='container mx-auto bg-slate-200'>
      <Navbar />
      <Body />
      <Under />
      <Footer />
    </div>
  );
}

export default App;
