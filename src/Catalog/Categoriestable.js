import React from 'react'
import { DetailsList } from '@fluentui/react';
import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';
import 'office-ui-fabric-react/dist/css/fabric.css';
import {PrimaryButton,Button,IconButton} from 'office-ui-fabric-react';
const plus = { iconName: 'EditSolid12' };


const operations = [
    {
      from: 'Accessories',
      to: '3',
      Action: <IconButton iconProps={plus} className="prim"/>,
      
    },
    {
      from: 'Accessories  >  Apple Accessories ',
      to: '4',
      Action: <IconButton iconProps={plus} className="prim"/>,
     
    },
    {
        from: 'Accessories  >  Apple Accessories  >  Apple Airpods ',
        to: '23',
        Action: <IconButton iconProps={plus} className="prim"/>,
      
    },
    {
        from: 'Accessories  >  Apple Accessories  >  Apple Connector',
        to: '0',
        Action: <IconButton iconProps={plus} className="prim"/>,
        
      },
      {
        from: 'Accessories  >  Apple Accessories  >  Apple Earpods ',
        to: '4',
        Action: <IconButton iconProps={plus} className="prim"/>,
       
      },
      {
          from: 'Accessories  >  Apple Accessories  >  Apple HomePod ',
          to: '23',
          Action: <IconButton iconProps={plus} className="prim"/>,
        
      },
      {
        from: 'Accessories  >  Apple Accessories  >  Apple Watch',
        to: '3',
        Action: <IconButton iconProps={plus} className="prim"/>,
        
      },
      {
        from: 'Accessories  >  Apple Accessories  >  Apple Watch Accessories',
        to: '4',
        Action: <IconButton iconProps={plus} className="prim"/>,
       
      },
      {
          from: 'Accessories  >  Apple Accessories  >  Apple Watch Accessories  >  Cables',
          to: '23',
          Action: <IconButton iconProps={plus} className="prim"/>,
        
      },
      {
        from: 'Accessories  >  Apple Accessories  >  iPad Accessories',
        to: '3',
        Action: <IconButton iconProps={plus} className="prim"/>,
        
      },
      {
        from: 'Accessories  >  Apple Accessories  >  iPad Accessories  >  Apple Pencil',
        to: '4',
        Action: <IconButton iconProps={plus} className="prim"/>,
       
      },
      {
          from: 'Accessories  >  Apple Accessories  >  iPad Accessories  >  iPad Keyboards',
          to: '23',
          Action: <IconButton iconProps={plus} className="prim"/>,
        
      }
   
  ]
  
  const columns = [
    { key: 'column1', name: 'Categoies Name', fieldName: 'from'},
    { key: 'column2', name: 'Sort Order', fieldName: 'to' },
    { key: 'column3', name: 'Action', fieldName: 'Action'},
  ]




function Categoriestable() {
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

export default Categoriestable
