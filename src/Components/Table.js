import { useEffect, useState } from "react";
import TableRows from "./TableRows";

function Table() {
    
    const [ data, setData] = useState([])

   useEffect(()=> {
    fetch ("http://127.0.0.1:3002/transactions")
     .then(res => res.json())
      .then(data => setData(data))
      }, [])
    
    return (

        <table className="table">
            <thead>
                    <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Date</th>
                    <th scope="col">Description</th>
                    <th scope="col">Category</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Action</th>
                    </tr>
            </thead>
        
            <tbody> 

                {
                    data.map((iteam) => {
                        return (
                            <TableRows 
                            key={iteam.id}
                            id={iteam.id}
                            date={iteam.date}
                            description={iteam.description}
                            category={iteam.category}
                            amount={iteam.amount}
                            />
                        )
                        



                    })
                }
                
            
            </tbody>
        
        </table>
            )
}

export default Table;