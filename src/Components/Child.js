import React, { useEffect } from "react";

const Child = ({itemsArray, setItemsArray}) => {



     function removeItem(id){
        
         setItemsArray(itemsArray.filter(item => item.id != id))


     }


    //  useEffect(()=>{
    //      console.log("UseEffect", "Changed")
    //  },[itemsArray])

    //  lets gerate a sample array of items
    // [
    //     {id: 1, itemName: "item1", itemPrice: 100},
    //     {id: 2, itemName: "item2", itemPrice: 200},
    //     
    //    {id: 4, itemName: "item3", itemPrice: 300},
    //   {id: 5, itemName: "item3", itemPrice: 300},
    //   {id: 6, itemName: "item3", itemPrice: 300},
    
    // ]
        



    return(
        <div>
            <h1>Child Component</h1>
            <ul>
                {itemsArray.length > 0 && (
                    itemsArray.map((item, index)=>(
                         <li key={item.id}> 
                             <span> {item.itemName} - {item.itemPrice} </span>
                             <button onClick={()=>removeItem(item.id)}> Remove </button>
                         </li>
                    ))
                )}
            </ul>
        </div>
    )
}

export default Child;