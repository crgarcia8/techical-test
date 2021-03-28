import { Box } from '@material-ui/core';
import Paper from '@material-ui/core/Paper/index';
import { connect } from 'react-redux';
import AddTodo from './AddTodo/AddTodo';
import { Header } from './Header/Header';
import Item from './Item/Item';
import './Todo.css';

export const Todo = (props) => {
  const getItems = () => props.items.map(element => <Item id={element.id} name={element.name} complete={element.complete} />);

  return (
    <div className="Todo">
      <Paper className="container" elevation={3}>
        <Header />
        {getItems()}
        <AddTodo />
      </Paper>
    </div>
  );
}

const mapStateToProps = (state) => ({
  items: state.items
})
export default connect(mapStateToProps)(Todo);