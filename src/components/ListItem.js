import React, {useRef} from 'react'
import Button from '../styledComponents/Button'

const ListItem = ({toList}) => {

    const input = useRef('')

    const setListFunction =(e)=> {
        e.preventDefault();
        toList(input.current.value)
        input.current.value = ""
    }

    const clearLocasStorage =()=> {
        window.localStorage.clear()
    }

    

    return (
            <form>
                <input type="text"  ref={input} />
                <Button primary type="submit" onClick={setListFunction}>add a Memo</Button>
                <Button onClick={clearLocasStorage}>delete ALL</Button>
            </form>
    
    )
}

export default ListItem
