import React from 'react';
import { DetailsList } from '@fluentui/react';
import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';
import 'office-ui-fabric-react/dist/css/fabric.css';
import {PrimaryButton,Button,IconButton} from 'office-ui-fabric-react';
import { Checkbox } from 'office-ui-fabric-react/lib/Checkbox';
import Thumline from '../thum.JPG';
import './Dash.css';
import { FontIcon } from 'office-ui-fabric-react/lib/Icon'; 
import {initializeIcons} from "office-ui-fabric-react"

initializeIcons();

const classNames = mergeStyleSets({
  table: {
    margin: 'auto',
    
  }
});
const plus = { iconName: 'EditSolid12' };

const operations = [
  {
    Check:<Checkbox />,
    Image:<img src={Thumline} className="thumimg"/>,
    from: '3D Tempered Glass Screen  ',
    to: 'C5 5000 mAh Power Bank',
    amount: '$1 510',
    date: 'In Stock',
    Quantity:"45",
    Status:"Enabled",
    Action: <IconButton iconProps={plus} className="prim"/>,
    EnableFeed:<Checkbox />
  },
  {
    Check:<Checkbox />,
    Image:<img src={Thumline} className="thumimg"/>,
    from: 'Fingers C5 5000 mAh Power Bank (Blue)  ',
    to: 'Inspire HR Band',
    amount: '$1 010',
    date: 'In Stock',
    Quantity:"45",
    Status:"Disable",
    Action: <IconButton iconProps={plus} className="prim"/>,
    EnableFeed:<Checkbox />
  },
  {
    Check:<Checkbox />,
    Image:<img src={Thumline} className="thumimg"/>,
    from: 'Amazon Echo Show 10 (Black) ',
    to: 'Versa 2 Smart Watch',
    amount: '$1 350',
    date: 'Out of Stock',
    Quantity:"45",
    Status:"Enabled",
    Action: <IconButton iconProps={plus} className="prim"/>,
    EnableFeed:<Checkbox />
  },
  {
    Check:<Checkbox />,
    Image:<img src={Thumline} className="thumimg"/>,
    from: 'Fitbit Versa 2 Smartwatch (Black/Carbon) ',
    to: 'Trifold Pouch For Samsung T295',
    amount: '$1 900',
    date: 'Out of Stock',
    Quantity:"45",
    Status:"Enabled",
    Action: <IconButton iconProps={plus} className="prim"/>,
    EnableFeed:<Checkbox />
  },
  {
    Check:<Checkbox />,
    Image:<img src={Thumline} className="thumimg"/>,
    from: 'Garmin Forerunner 35 Smartwatch (Black) ',
    to: 'Forerunner 35 Smartwatch',
    amount: '$6 350',
    date: 'Out of Stock',
    Quantity:"45",
    Status:"Disable",
    Action: <IconButton iconProps={plus} className="prim"/>,
    EnableFeed:<Checkbox />
  }
]

const columns = [
  { key: 'column1', name: 'Check', fieldName: 'Check',minWidth: 50,},
  { key: 'column2', name: 'Image', fieldName: 'Image',minWidth: 100,},
  { key: 'column3', name: 'Product Name', fieldName: 'from',minWidth: 100,},
  { key: 'column4', name: 'Model', fieldName: 'to',minWidth: 100,},
  { key: 'column5', name: 'Price', fieldName: 'amount',minWidth: 50,},
  { key: 'column6', name: 'Quantity', fieldName: 'Quantity',minWidth: 50,},
  { key: 'column7', name: 'Stock Status', fieldName: 'date',minWidth: 100,},
  { key: 'column8', name: 'Status', fieldName: 'Status',minWidth: 100,},
  { key: 'column9', name: 'Action', fieldName: 'Action',minWidth: 70,},
  { key: 'column10', name: 'Enable Feed', fieldName: 'EnableFeed',minWidth: 100,},
]

const OperationsTable = () => {
  return (
    <div data-is-scrollable={true}>
      <div>
        <DetailsList
          items={operations}
          columns={columns}
          selectionMode={0}
        />
      </div>
    </div>
  );
};




export default OperationsTable;