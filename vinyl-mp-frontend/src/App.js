import './App.css';
import Footer from './components/Footer.js'
import RecordPage from './containers/RecordPage.js'
import {
    Switch,
    Route
} from "react-router-dom"
import NavBar from "./containers/NavBar"
import NotFound from "./components/NotFound"
import Main from "./pages/main/Main"
import Login from "./containers/Login"
import Cart from "./containers/Cart"


function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
          <Route exact path="/" component={RecordPage} />
          <Route component={NotFound} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/cart" component={Cart} />
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;



















