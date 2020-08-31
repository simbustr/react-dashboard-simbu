import React from 'react'
import { DetailsList } from '@fluentui/react';
import { TextField, ITextFieldStyles } from 'office-ui-fabric-react/lib/TextField';
import {PrimaryButton,Button,IconButton} from 'office-ui-fabric-react';

const plus = { iconName: 'SkypeMinus' };

const Addlist = [
    {
     Name:<TextField placeholder="2GB"/> ,
     filed:<TextField placeholder="0"/> ,
     Action: <IconButton iconProps={plus} className="dang"/>,
    },
    {
    Name:<TextField placeholder="2GB"/> ,
    filed:<TextField placeholder="0"/> ,
    Action: <IconButton iconProps={plus} className="dang"/>,
    },
    {
    Name:<TextField placeholder="2GB"/> ,
    filed:<TextField placeholder="0"/> ,
    Action: <IconButton iconProps={plus} className="dang"/>,
    },
    {
    Name:<TextField placeholder="2GB"/> ,
    filed:<TextField placeholder="0"/> ,
    Action: <IconButton iconProps={plus} className="dang"/>,
    },
    {
    Name:<TextField placeholder="2GB"/> ,
    filed:<TextField placeholder="0"/> ,
    Action: <IconButton iconProps={plus} className="dang"/>,
    },
    {
    Name:<TextField placeholder="2GB"/> ,
    filed:<TextField placeholder="0"/> ,
    Action: <IconButton iconProps={plus} className="dang"/>,
    },
    {
    Name:<TextField placeholder="2GB"/> ,
    filed:<TextField placeholder="0"/> ,
    Action: <IconButton iconProps={plus} className="dang"/>,
    },
    {
    Name:<TextField placeholder="2GB"/> ,
    filed:<TextField placeholder="0"/> ,
    Action: <IconButton iconProps={plus} className="dang"/>,
    },

]


const columns = [
    { key: 'column1', name: 'File Name', fieldName: 'Name',},
    { key: 'column2', name: 'Sort Order', fieldName: 'filed', },
    { key: 'column3', name: 'Action', fieldName: 'Action',},
  ]



function Addtable() {
    return (
        <div>
             <DetailsList
          items={Addlist}
          columns={columns}
          selectionMode={0}
             />


            
        </div>
    )
}

export default Addtable
