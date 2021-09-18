import React from "react";
const TodoItem =(props)=>{
    const {items,deletItem}=props;
    let length=items.length;
    const ListItems= length ?(items.map(item=>{
        return(
            <div key={item.id}>
                <span className='name'>{item.name}</span>
                <span className='age'>{item.age}</span>
                <span className=' action icon'  onClick={()=>deletItem(item.id)}>&times;</span>
            </div>
            
        )
    })):(
        <p>there is no items to show</p>
    )

    return(
        <div className='List-items'>
        
            <span className='name title'>Name</span>
            <span className='age title'>Age</span>
            <span className='action title'>Action</span>
            {ListItems}
        </div>
    )
}

export default TodoItem