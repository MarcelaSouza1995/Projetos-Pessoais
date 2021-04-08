import './App.css';
import { Switch, Route } from "react-router-dom";
import Login from './Pages/Login.jsx';
import Wallet from './Pages/Wallet.jsx';
import NotFound from './Pages/NotFound.jsx';
import Store from './Data/Store.js'


function App() {
  return (
    <Store>
      <Switch>
        <Route path="/carteira" component={ Wallet } />
        <Route exact path="/" component={ Login} />
        <Route path="*" component={ NotFound } />
      </Switch>
    </Store>
  );
}

export default App;
