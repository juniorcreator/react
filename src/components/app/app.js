import React, { Component } from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import AddForm from '../app-add-form';
import './app.css';

export default class App extends Component {
  maxId = 100;
  state = {
    todoData: [
      this.createElement('Drink coffee'),
      this.createElement('Make Awesome App'),
      this.createElement('Have a lunch'),
    ],
  };
  createElement(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++
    }
  };
  deleteItem = (item) => {
    this.setState(({todoData}) => {
      const idItem = todoData.findIndex((el) => el.id === item);
      const newArr = [
        ...todoData.slice(0, idItem),
        ...todoData.slice(idItem+1)
      ];
      return {
        todoData: newArr
      }
    })
  };
  addItem = (text) => {
    const newObj = this.createElement(text);
    this.setState(({todoData})=> {
      const newArr = [
        ...todoData, newObj
      ];
      return {
        todoData: newArr
      }
    });

  };
  onToggleImortant = (id) => {
    console.log('important', id);
  };
  onToggledone = (id) => {
    console.log('done', id);
  };


  render() {
    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <TodoList
          onToggleImortant={this.onToggleImortant}
          onToggledone={this.onToggledone}
          onDeleted={this.deleteItem}
          todos={this.state.todoData} />
        <AddForm onAddItem={this.addItem} />
      </div>
    );
  }
};
