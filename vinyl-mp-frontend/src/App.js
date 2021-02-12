import logo from './logo.svg';
import './App.css';
import {
    Switch,
    Route
} from "react-router-dom"
import NavBar from "./containers/NavBar"
import NotFound from "./components/NotFound"
import Main from "./pages/main/Main";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
          <Route exact path="/" component={Main} />
          <Route component={NotFound} />
      </Switch>
      {/*<Footer />*/}
    </div>
  );
}

export default App;
