import React from 'react'
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { Card} from '@uifabric/react-cards';
import Addlist from './Addtable'; 
import './Filter.css';
import {PrimaryButton,Button,IconButton} from 'office-ui-fabric-react';

const plus = { iconName: 'EditSolid12' };
function Addfilters() {
    return (
        <div>
            <Breadcrumbs/>

            <div className="setadd">
                <div className="sethead">
                    <h4> <IconButton iconProps={plus} /> Add Filters</h4>
                </div>


                <div className="filtergroup">
                    <Card className="cardStyles">
                    <div className="filtersearch">
                    <div className="ms-Grid" dir="ltr">
                    <div className="ms-Grid-row">
                    <div className="ms-Grid-col ms-md12">
                    <div className="lab2">
                    <label>Filter Group Name</label>
                    <TextField className="in1"/>
                    </div>
                    </div>
                    <div className="ms-Grid-col ms-md12">
                    <div className="lab3">
                    <label>Sort Order</label>
                    <TextField className="in1"/>
                    </div>
                    
                    </div>
                    </div>
                    </div>
                    </div>
                    </Card>
                </div>

               <div className="filterlist">
                   <Addlist/>
               </div>

            </div>    


        </div>
    )
}

export default Addfilters
