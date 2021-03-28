import { Button, TextField } from '@material-ui/core'
import { connect } from 'react-redux'
import React, { useState } from 'react'
import { addTodo } from '../../Redux/Actions/actions';

export const AddTodo = (props) => {
    const [value, setValue] = useState("");

    const handleAdd = () => {
        props.addTodo(value);
        setValue("");
    }
    return (
        <div>
            <TextField
                autoFocus
                id="standard-basic"
                label="Add Item"
                value={value}
                autoComplete="off"
                onChange={(e) => setValue(e.target.value)}
            />
            <Button
                variant="contained"
                color="primary"
                onClick={() => handleAdd()}>Add</Button>
        </div>
    )
}

const mapStateToProps = (state) => ({
    items: state.items
})
const mapDispatchToProps = {
    addTodo
}
export default connect(mapStateToProps, mapDispatchToProps)(AddTodo)
