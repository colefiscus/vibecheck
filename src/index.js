import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

const router =  <Auth0Provider
                  domain="dev-kyroorm8.us.auth0.com"
                  clientId="jcj9edbcKafI6Xy2Uy3Uhi2Tvm5dF2n4"
                  redirectUri={window.location.origin}
                >
                  <BrowserRouter>
                    <App />
                  </BrowserRouter>
                </Auth0Provider>;

ReactDOM.render( router, document.getElementById('root'));

serviceWorkerRegistration.unregister();
