import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar/Navbar';
import Body from './component/Body/Body';
import Under from './component/Under/Under';
import Footer from './component/Footer/Footer';

function App() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className='lg:mx-4 xl:mx-12 bg-slate-200'>
        <Body />
        <Under />
      </div>
      <Footer />
    </div>
  );
}

export default App;
