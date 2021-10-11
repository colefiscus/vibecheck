import React from 'react';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import GlobalStyles from './GlobalStyles';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/contact" component={Contact}></Route>
      </Switch>
      <Footer />
      <GlobalStyles />
    </div>
  );
}

export default App;
