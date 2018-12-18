import React, {Component} from 'react';
import './app-add-form.css';

export default class AddForm extends Component {

  render() {
    const  { onAddItem } = this.props;
    return (
      <div className='app-add-form'>
        <button
          onClick={() => {onAddItem('some text')}}
          className='btn btn-outline-secondary'>Add item</button>
      </div>
    )
  };
}