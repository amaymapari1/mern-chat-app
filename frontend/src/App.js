import "./App.css";
import { Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ChatPage from "./Pages/ChatPage";

function App() {
  return (
    <div className="App">
      <Route path="/" component={HomePage} exact /> {/*home page*/}
      <Route path="/chats" component={ChatPage} /> {/*chats page*/}
    </div>
  );
}

export default App;
