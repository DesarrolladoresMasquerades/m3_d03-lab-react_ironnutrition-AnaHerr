import {Input} from 'antd';
import {useState} from 'react';

export default function Search(props){

   const [searchData, setSearchData] = useState("")

    function handleDataChange(event){
        
        setSearchData(event.target.value);
    
     props.checkFood(event.target.value)
    }


    return(
        <div className="SearchFood">
          <form >
              <label>Search Food:</label>   
                  <Input name="search" value={searchData} type="text" onChange={handleDataChange} />
          </form>
        </div>
      );
}