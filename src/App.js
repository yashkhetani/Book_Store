import './App.css';
import User from "./User";
import Greet from './Components/Greet';
import Welcome from './Components/Welcome';

function App() {
      const userName="Yash";
      const userId="10";
  return (
    <div className="App">
    <Welcome/>
      {/* App Component
      <User a={userName} userId={userId}/>
      <Greet name="Yash">
      <p>Thia is a children.</p>
      </Greet>
      <Greet name="Meet">
      <button>Action</button>
      </Greet>
      <Welcome name="Yash" /> */}
      </div>
  );
}

export default App;
