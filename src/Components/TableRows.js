import { useState } from "react";
import { Form } from "react-bootstrap";

function TableRows({id, date, description, category, amount}) {

    const BASE_URL = "http://127.0.0.1:3002/transactions"
    
    
    const [showForm, setShowForm] = useState (false)

    const [formData, setFormData] = useState ({
        
        date,
        description,
        category,
        amount
    })

    const toggleForm = () => {
        setShowForm(!showForm)
    }

    const changeData = (e) => {
        e.preventDefault()
        const name = e.target.id
        const value = e.target.value
        setFormData({
        ...formData , [name] : value
        })
    }

    const updateData = () => {
        fetch(`${BASE_URL}/transactions/${id}`, {
            method : "PATCH",
            headers : {
                "Content-Type" : "apllication/json"
            },
            body : JSON.stringify(formData)
        })
        .then(res => res.json())
        .then((data) => 
        {
            console.log(data)
            toggleForm() 
        })
        .catch(error => console.log(error))
        
    }

   

    const handleDelete = () => {
        fetch(`${BASE_URL}/transactions/${id}`, {
            method : "DELETE",
            headers : {
                "Content-Type" : "apllication/json"
            },
        })
        .then(res => res.json())
        .then(data => console.log(data))

    }
    

    return (
    
    <tr>
        <th scope="row">{id}</th>
        <td>{date}</td>
        <td>{description}</td>
        <td>{category}</td>
        <td>{amount}</td>
        <td>
            <button className="btn btn-success m-1"  onClick= {updateData}>Update</button> 
            {
            showForm ?  (<form onSubmit={updateData}>
                <div className="mb-3">
                    <label htmlFor="date" className="form-label">Date</label>
                    <input type="date" className="form-control" id="date" value={formData.date} onChange={changeData}/>
                </div>
        
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Enter Description</label>
                    <input type="text" className="form-control" id="description" value={formData.description} onChange={changeData}/>
                </div>
        
                <div className="mb-3">
                    <label htmlFor="category" className="form-label">Enter Category</label>
                    <input type="text" className="form-control" id="category" value={formData.category} onChange={changeData}/>
                </div>
        
                <div className="mb-3">
                    <label htmlFor="amount" className="form-label">Enter Amount</label>
                    <input type="number" className="form-control" id="amount" value={formData.amount} onChange={changeData}/>
                </div>
        
               
               
               
               
               
               
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>) : null
            
        }

                
            
            <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
        </td>
    </tr>
    
   
        
  )
}

export default TableRows;