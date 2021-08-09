import './App.scss';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndUp from './pages/sign-in-and-up/sign-in-and-up.component';

import Header from './components/header/header.component';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/signin' component={SignInAndUp} />
        <Route exact path='/' component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
