import React from 'react'
import { DetailsList } from '@fluentui/react';
import 'office-ui-fabric-react/dist/css/fabric.css';
import {PrimaryButton,Button,IconButton} from 'office-ui-fabric-react';

const plus = { iconName: 'EditSolid12' };




const operations = [
    {
      from: 'CAPACITY',
      to: '3',
      Action: <IconButton iconProps={plus} onClick={event =>  window.location.href='/d'} className="prim"/>,
      
    },
    {
      from: 'CLASS ',
      to: '4',
      Action: <IconButton iconProps={plus} onClick={event =>  window.location.href='/d'} className="prim"/>,
     
    },
    {
        from: 'CPU / Processor',
        to: '23',
        Action: <IconButton iconProps={plus} onClick={event =>  window.location.href='/d'} className="prim"/>,
      
    },
    {
        from: 'DESIGN',
        to: '0',
        Action: <IconButton iconProps={plus} onClick={event =>  window.location.href='/d'} className="prim"/>,
        
      },
      {
        from: 'External Storage',
        to: '4',
        Action: <IconButton iconProps={plus} onClick={event =>  window.location.href='/d'} className="prim"/>,
       
      },
      {
          from: 'Features ',
          to: '23',
          Action: <IconButton iconProps={plus} onClick={event =>  window.location.href='/d'} className="prim"/>,
        
      },
      {
        from: 'Form Factor',
        to: '3',
        Action: <IconButton iconProps={plus} className="prim"/>,
        
      },
      {
        from: 'FUNCTIONALITY',
        to: '4',
        Action: <IconButton iconProps={plus} className="prim"/>,
       
      },
      {
          from: 'Internal Storage',
          to: '23',
          Action: <IconButton iconProps={plus} className="prim"/>,
        
      },
      {
        from: 'MAH',
        to: '3',
        Action: <IconButton iconProps={plus} className="prim"/>,
        
      },
      {
        from: 'MIC Option',
        to: '4',
        Action: <IconButton iconProps={plus} className="prim"/>,
       
      },
      {
          from: 'Mobile -Filter',
          to: '23',
          Action: <IconButton iconProps={plus} className="prim"/>,
        
      }
   
  ]
  
  const columns = [
    { key: 'column1', name: 'Categoies Name', fieldName: 'from'},
    { key: 'column2', name: 'Sort Order', fieldName: 'to' },
    { key: 'column3', name: 'Action', fieldName: 'Action'},
  ]





function Filtertable() {
    return (
        <div>
            <DetailsList
          items={operations}
          columns={columns}
          selectionMode={0}
             />
        </div>
    )
}

export default Filtertable
