import logo from './logo.svg';
import './App.css';
import Message from "./components/Message";
import Profile from './components/Profile';
import Counter from "./components/Counter";

function App() {
  return (
    <section className="App">
      {/* <Hello/> */}
      {/* <Message content="This is a class component prop"/> */}
      <Profile name="Dreday" lastName="Duncan">
        <p>This is my first attempt at creating children.</p>
      </Profile>
  
      <Counter></Counter>

    </section>
  );
}

export default App;
