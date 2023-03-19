import './App.css';
import Header from './component/Header';
import TinderCards from './component/TinderCards';

function App() {
  return (
    <div className="App">
      {/* <h1>Lets learn MERN stack Tinder clone</h1> */}

      <Header/>
      <TinderCards/>
      {/* <SwipeButtons/> */}
    </div>
  );
}

export default App;
