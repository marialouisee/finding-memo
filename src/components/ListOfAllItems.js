import React, { useState, useRef } from 'react'
import Button from '../styledComponents/Button'
import {Container} from '../styledComponents/Container'

const ListOfAllItems = (props) => {
    const {list, edItem, doItem, complItem, delItem}  = props
    const [editedMemo, setEditedMemo] = useState('')

    
// #####  edit a memo item
    const editItem = (item) => {
        edItem(item)   
    }
    const doneEditItem = (item) => {
        doItem(editedMemo, item)
    }

// #####  line through a memo item
    const completedItem =(item)=>{
        complItem(item)
    }

// ##### delete a memo item
    const deleteItem = (value)=> {
        delItem(value)
    }

    return (
        <Container>
           <div className='lighterBg'>

           {
                list.map((item) => {
                    
                    return <div className="memoItem"  key={item.id} >
                                {item.edit === true? 
                                    (<input type='text' onChange={(e)=> setEditedMemo(e.target.value)} placeholder={item.text}/>) 
                                    : (<div id={item.id} style={{textDecoration: item.completed? "line-through": ""}}>{item.text}</div>)
                                }
                                
                                { !item.edit?
                                    <Button onClick={() => editItem(item.id)}>edit </Button> :
                                    <Button onClick={() => doneEditItem(item.id)}>edited</Button> 
                                }
                                
                                <Button onClick={() => completedItem(item.id)}>{!item.completed? "done": "notdone" }</Button>
                                
                                <Button onClick={() => deleteItem(item.id)}>delete</Button>

                            </div>
                })
            }
           </div>
            
        </Container>
    )
}

export default ListOfAllItems
