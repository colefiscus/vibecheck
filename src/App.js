import React from 'react';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Views/Home';
import Contact from './Views/Contact';
import Faqs from './Views/Faqs';
import Profile from './Views/Profile';
import GlobalStyles from './GlobalStyles';
import { Switch, Route } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

function App() {

  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return (
      <h2>Currently Loading.....</h2>
    )
  }

  return (
    <>
      <Header isAuthenticated={isAuthenticated} />
      <Switch>
        <Route exact path="/" render={() => {
          return <Home  user={user}
                        isAuthenticated={isAuthenticated} />
        }} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/faqs" component={Faqs} />
        <Route exact path="/profile" render={() => {
          return <Profile user={user}
                          isAuthenticated={isAuthenticated} /> 
          }} 
        />
        
      </Switch>
      <Footer />
      <GlobalStyles />
    </>
  );
}

export default App;
