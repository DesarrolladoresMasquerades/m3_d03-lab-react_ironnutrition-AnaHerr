import {Input} from 'antd';
import {useState} from 'react';

export default function AddFoodForm(props){

    const [formData, setFormData] = useState({
     name: "",
     image: "",
     calories: 0,
     servings: 0   
    })

   
    function handleDataChange(event){
        const inputName = event.target.name
        const value = event.target.value
     

    console.log("inputName: ", inputName)
    setFormData(formData=> Object.assign({}, formData, {[inputName]: value})) 
    }
  
    function handleSubmit(event){
        event.preventDefault()
        
        props.addFood(formData)// We send the state up to the nearest parent
        
        setFormData({
            name: "",
            image: "",
            calories: 0,
            servings: 0 
        })
      }

    return(
      <div className="AddFood">
      <h4>Add Food Entry</h4>
        <form onSubmit={handleSubmit}>
            <label>Name:</label>   
                <Input name="name" value={formData.name} type="text" onChange={handleDataChange} />

            <label>Image URL:</label>  
                <Input name="image" value={formData.image} type="text" onChange={handleDataChange}/>

            <label>Calories:</label>  
                <Input name="calories" value={formData.calories} type="number" onChange={handleDataChange}/>

            <label>Servings:</label>  
                <Input name="servings" value={formData.servings} type="number" onChange={handleDataChange}/>
                <button type="submit" onClick={handleSubmit}>Add a Food</button>
        </form>
      </div>
    );
}