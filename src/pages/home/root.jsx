import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { Home } from '.';
import { Validation } from '../validationPage/validation';

// import StoreProvider from 'components/Store/Provider';
// import RoutesPrivate from 'components/Routes/Private/Private';
import Home from './Home/Home';
import  Validation  from '../validationPage/validation';
import  Menu  from '../../componentes/menu/menu';

// const PagesRoot = () => (
//   <Router>
//     <StoreProvider>
//       <Switch>
//         <Route path="/Validation" component={Validation} />
//         <RoutesPrivate path="/" component={Menu} />
//       </Switch>
//     </StoreProvider>
//   </Router>
// )


// export default PagesRoot;
import {history} from '../history'

const Routes = () => (
  <Router history = {history}>
    <StoreProvider>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/Validation" component={Validation}/>
        <Route path="/Menu" component={Menu}/>


      </Switch>
    </StoreProvider>
  </Router>
)


export default Routes;