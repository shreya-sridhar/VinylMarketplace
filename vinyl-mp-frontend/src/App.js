import './App.css'
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

import Search from "./pages/search/Search";
import AlbumsToSell from "./containers/AlbumsToSell";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
          <Route exact path="/record" component={RecordPage} />
          <Route exact path="/" component={Main} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/sell" component={AlbumsToSell} />
          <Route component={NotFound} />
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;



















