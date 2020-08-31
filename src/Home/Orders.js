import React from 'react';
import { DetailsList } from '@fluentui/react';



const Addlist = [
    {
     List:"regular register new account",
     Customer:"43334",
     Status:"Processing",
     Data:"27/3/2020",
     Total:"56,00",
    },
    {
      List:"regular register new account",
      Customer:"43334",
      Status:"Processing",
      Data:"27/3/2020",
      Total:"40,00",
    },
    {
        List:"regular register new account",
        Customer:"43334",
        Status:"Processing",
        Data:"27/3/2020",
        Total:"40,00",
      
      },
      {
        List:"regular register new account",
        Customer:"43334",
        Status:"Processing",
        Data:"27/3/2020",
        Total:"40,00",
      
      },
      {
        List:"regular register new account",
        Customer:"43334",
        Status:"Processing",
        Data:"27/3/2020",
        Total:"40,00",
      
      }
]

const columns = [
    { key: 'column1', name: 'Order Id', fieldName: 'List',},
    { key: 'column1', name: 'Customer', fieldName: 'Customer',},
    { key: 'column1', name: 'Status', fieldName: 'Status',},
    { key: 'column1', name: 'Data Addedd', fieldName: 'Data',},
    { key: 'column1', name: 'Total', fieldName: 'Total',},
    
  ]

function Orders() {
    return (
        <div>
            <div className="r12">
                <h3>Sales order</h3>

                <DetailsList
                    items={Addlist}
                    columns={columns}
                    selectionMode={0}
                        />


            </div>
        </div>
    )
}

export default Orders
