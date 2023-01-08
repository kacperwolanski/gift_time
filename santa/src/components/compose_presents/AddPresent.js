import React, { Fragment, useState } from "react";
import new_presents_obj from "../../useful_functions/new_presents_obj";
const AddPresent = (props) =>
{
    const [newPresentName, setNewPresentName] = useState("");
    let user_presents = props.user_presents
  
    async function new_presents_list()
    {  
        let new_presents = new_presents_obj(user_presents, newPresentName)
       
        try {         
            const body =  new_presents;  
           
            const response = await fetch(`http://localhost:5000/santa_users/`+props.user_id+`/user_presents`, 
            {
                method:'PUT',
                headers: {"Content-Type" : "application/json"},
                body: JSON.stringify(body)
            });
           window.location = "/" 
        } 
        catch (error) {console.log(error)}       
    }   
    
    return(
        <div id='new-presents-adder'>

            <header className="text-center mt-5">Add new present</header>
            <form className="d-flex mt-5" >
                <input
                type="text"
                className="form-control"
                value={newPresentName}
                onChange={e => setNewPresentName(e.target.value)}
                />
                <button type = "button" onClick={ () => {new_presents_list()}} className="btn btn-success">Add</button>
               
            </form>     
        </div>
   
    );
};

export default AddPresent;