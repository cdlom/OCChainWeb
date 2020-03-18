import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import importedComponent from 'react-imported-component';
import Loading from '../pages/loading';

const AsyncHome = importedComponent(() => import('../pages/home'), { LoadingComponent: Loading });
const AsyncTech = importedComponent(() => import('../pages/technology'), { LoadingComponent: Loading });
const AsyncCO = importedComponent(() => import('../pages/consulting'), { LoadingComponent: Loading });
const AsyncAS = importedComponent(() => import('../pages/assestment'), { LoadingComponent: Loading });
const AsyncSC = importedComponent(() => import('../pages/smartcontracts'), { LoadingComponent: Loading });
const AsyncDA = importedComponent(() => import('../pages/dapps'), { LoadingComponent: Loading });
const AsyncCase = importedComponent(() => import('../pages/casestudies'), { LoadingComponent: Loading });
const AsyncContact = importedComponent(() => import('../pages/QuieroColaborar'), { LoadingComponent: Loading });


const AsyncNoMatch = importedComponent(() => import('../pages/nomatch'), { LoadingComponent: Loading });



const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={AsyncHome} />
        <Route path="/technology" component={AsyncTech} />
        <Route path="/consulting" component={AsyncCO} />
        <Route path="/assestment" component={AsyncAS} />
        <Route path="/smartcontracts" component={AsyncSC} />
        <Route path="/dapps" component={AsyncDA} />
        <Route path="/casestudies" component={AsyncCase} />
        <Route exact path="/QuieroColaborar" component={AsyncContact} />
        

        <Route component={AsyncNoMatch} />
        


      </Switch>
    </Router>
  );
};

export default Routes;
