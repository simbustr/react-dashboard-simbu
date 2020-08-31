import React from 'react';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import CardsSection from './CardsSection';
import './chart.css';
import Saleschart from './Sales';
import Map from './Worldmap';
import Recentactive from './Recent';
import Salesorder from './Orders'

function index() {
    return (
        <div>
            <Breadcrumbs/>


            <div className="setadd">
            <CardsSection />
            
                     
            <div className="mapwrp">
            <div className="ms-Grid" dir="ltr">
            <div className="ms-Grid-row"> 
               
               <div className="ms-Grid-col ms-lg6">
                   <Map/>
               </div>  
               <div className="ms-Grid-col ms-lg6">
                   <Saleschart/>
               </div>
               </div>
            </div>
            </div> 


            <div className="activewrp">
                <div className="ms-Grid" dir="ltr">
                <div className="ms-Grid-row">
                <div className="ms-Grid-col ms-lg4">
                  <Recentactive/>
                </div>  
                <div className="ms-Grid-col ms-lg8">
                   <Salesorder/>
                </div>
                </div>
                </div>
            </div>



            </div>    

        </div>
    )
}

export default index
