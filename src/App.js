import { useState } from 'react';
import './App.css';
import Form from './Components/Form';
import Table from './Components/Table';

function App() {

  const BASE_URL = "http://127.0.0.1:3002/transactions"

  const [formData, setFormData] = useState({

    date:"",
    description:"",
    category:"",
    amount:""
  })

  const getData = (e) => {
    e.preventDefault()
    setFormData({
      ...formData,
      [e.target.id] : e.target.value
    })
  }

  const handleSubmit = (e) =>  {
    e.preventDefault()
    fetch(`${BASE_URL}/transactins` , {
      method: "POST",
      headers: {
        "Contanct-Type" : "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(data => setFormData(data))
    .catch(error => console.error(error))
  }
  
  return (
    <div className='container mt-4'>
      <h1 className='text-center'>FlatIron Bank</h1>
      <h2 className='text-center'>Detailed Daily Transactions Form</h2>
      <Form 
      date={formData.date} 
      description={formData.description} 
      category={formData.category} 
      amount={formData.amount} 
      onChange={getData}
      onsubmit={handleSubmit}
      />
      
      <h3 className='text-center'>Transactions Info Table</h3>
      <Table />
    
    </div>
   
  );





}





export default App; 