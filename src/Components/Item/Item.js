import { Avatar, IconButton, List, ListItem, ListItemAvatar, ListItemIcon, ListItemSecondaryAction, ListItemText } from '@material-ui/core';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import React from 'react'
import { connect } from 'react-redux';
import { completeItem, removeItem } from '../../Redux/Actions/actions';

export const Item = (props) => {
    const handleClick = (value) => {
        props.completeItem(value);
    }
    const handleDelete = (value) => {
        props.removeItem(value);
    }

    return (
        <div>
            <List dense={false} key={props.id}>
                <ListItem>
                    <ListItemAvatar style={{ cursor: 'pointer' }} onClick={() => handleClick(props.id)}>
                        <CheckBoxIcon color={props.complete ? 'primary' : 'action'} />
                    </ListItemAvatar>
                    <ListItemText primary={props.name} />
                    <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="delete" onClick={() => { handleDelete(props.id) }}>
                            <DeleteIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            </List>
        </div>
    )
}

const mapStateToProps = (state) => ({
    items: state.items
})
const mapDispatchToProps = {
    completeItem,
    removeItem
}
export default connect(mapStateToProps, mapDispatchToProps)(Item)
