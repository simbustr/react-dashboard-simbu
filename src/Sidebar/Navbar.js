import React from "react";
import './Nav.css';
import logo from '../logo.png';
import 'office-ui-fabric-react/dist/css/fabric.css';
import Home from '../Home/index';
import Catalog from "../Catalog/Catalogbody";
import Dashboard from "../Dashboard/Dashbody";
import Filters from "../Filters/Filtersbody";
import Extension from '../Extension/Extensionbody';
import Addfilters from '../Filters/Addfilters'
import { FontIcon } from 'office-ui-fabric-react/lib/Icon';
import { mergeStyles } from 'office-ui-fabric-react/lib/Styling';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Topbar from '../header/Topbar';
import {
  initializeIcons
} from "office-ui-fabric-react"

initializeIcons();


const iconClass = mergeStyles({
  
  color:'#28a8ea',
  
});


export default function App() {
  return (
    <Router>
      <div>
      <div className="ms-Grid" dir="ltr">
        <div className="ms-Grid-row">
        <div className="ms-Grid-col ms-md2 m12">

        <div className="log-wrp">
           <img src={logo}/>
        </div>

        <div className="leftwrp">
        <nav>
          <ul>
            <li>
              <Link to="/e"> <FontIcon iconName="GoToDashboard" className={iconClass} /> Products</Link>
            </li>  
            <li>
              <Link to="/a"> <FontIcon iconName="ProductCatalog" className={iconClass} /> Catalog</Link>
            </li>
            <li>
              <Link to="/b"> <FontIcon iconName="FilterSolid" className={iconClass} /> Filters</Link>
            </li>
            <li>
              <Link to="/c"> <FontIcon iconName="ExternalTFVC" className={iconClass} /> Extension</Link>
            </li>
            <li>
              <Link to="/"> <FontIcon iconName="WebAppBuilderFragmentCreate" className={iconClass} /> Page Builder</Link>
            </li>
            <li>
              <Link to="/"> <FontIcon iconName="Design" className={iconClass} /> Design</Link>
            </li>
            <li>
              <Link to="/"> <FontIcon iconName="VSTSAltLogo1" className={iconClass} /> Sales</Link>
            </li>
            <li>
              <Link to="/"> <FontIcon iconName="ProductCatalog" className={iconClass} /> Customer</Link>
            </li>
           
          </ul>
        </nav>
        </div>
        </div>

        <div className="ms-Grid-col ms-md10 m13">

        <div className="appwrp">
          <Topbar/>
        </div>

        

        <div className="rightwrp">


          
       <Switch>
          <Route path="/a">
            <Catalog />
          </Route>
          <Route path="/b">
            <Filters />
          </Route>
          <Route path="/c">
              <Extension />
          </Route>
          <Route path="/d">
              <Addfilters />
          </Route>
          <Route path="/e">
            <Dashboard />
          </Route> 
          <Route path="/">
            <Home />
          </Route> 
        </Switch>
        </div>
        </div>

        </div>
        </div>
      </div>
    </Router>
  );
}

