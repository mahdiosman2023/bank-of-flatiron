function Form( {date, description, category, amount, onChange, onSubmit}) {
    return (<form onSubmit={onSubmit}>
        <div className="mb-3">
            <label htmlFor="date" className="form-label">Date</label>
            <input type="date" className="form-control" id="date" value={date} onChange={onChange}/>
        </div>

        <div className="mb-3">
            <label htmlFor="description" className="form-label">Enter Description</label>
            <input type="text" className="form-control" id="description" value={description} onChange={onChange}/>
        </div>

        <div className="mb-3">
            <label htmlFor="category" className="form-label">Enter Category</label>
            <input type="text" className="form-control" id="category" value={category} onChange={onChange}/>
        </div>

        <div className="mb-3">
            <label htmlFor="amount" className="form-label">Enter Amount</label>
            <input type="number" className="form-control" id="amount" value={amount} onChange={onChange}/>
        </div>

       
       
       
       
       
       
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
        
        
    )}

            
        
       

    

        

    


export default Form;