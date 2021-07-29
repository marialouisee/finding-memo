import React, {useState} from 'react'
import Button from '../styledComponents/Button'

const ListItem = ({toList}) => {

    const [currInput, setCurrInput] = useState('')
    
    const setListFunction =(e)=> {
        console.log(currInput)
        e.preventDefault();
        currInput === ""? alert("pleaze, no empty memos..."): toList(currInput)
        setCurrInput('')
    }

    const clearLocasStorage =()=> {
        window.localStorage.clear()
    }

    
    return (
            <form>
                <input type="text" onChange={(e) => setCurrInput(e.target.value)} value={currInput} />
                <Button primary type="submit" onClick={setListFunction}>add a Memo</Button>
                <Button onClick={clearLocasStorage}>delete ALL</Button>
            </form>
    
    )
}

export default ListItem
