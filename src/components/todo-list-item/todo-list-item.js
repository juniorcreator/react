import React, {Component} from 'react';
import './todo-list-item.css';


export default class TodoListItem extends Component {
  constructor() {
    super();
    this.state = {
      done: false,
      important: false,
    }
  }

  onLabelClick = () => {
    this.setState(({done}) => {
      return {
        done: !done,
      }
    });
  };

  onMarkImportant = () => {
    this.setState(({important}) => {
      return {
        important: !important,
      }
    });
  };

  render() {

  const  { label, onDeleted, onToggleImortant, onToggledone } = this.props;

  let classNames = 'todo-list-item';

  return (
    <span className={classNames}>
      <span
        className="todo-list-item-label"
        onClick={onToggledone}
        >
        {label}
      </span>

      <button type="button"
              className="btn btn-outline-success btn-sm float-right" onClick={onToggleImortant}>
        <i className="fa fa-exclamation" />
      </button>

      <button type="button"
              onClick={onDeleted}
              className="btn btn-outline-danger btn-sm float-right">
        <i className="fa fa-trash-o" />
      </button>
    </span>
  );
  }
}
