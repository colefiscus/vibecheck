import React from 'react';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Views/Home';
import Contact from './Views/Contact';
import Faqs from './Views/Faqs';
import GlobalStyles from './GlobalStyles';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/contact" component={Contact}></Route>
        <Route exact path="/faqs" component={Faqs}></Route>
      </Switch>
      <Footer />
      <GlobalStyles />
    </div>
  );
}

export default App;
