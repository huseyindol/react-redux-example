import React, { Component } from 'react';
import { Checkbox, List, Icon } from 'semantic-ui-react';

class ListComponent extends Component {

  handleDone = (e) => {
    let divItem = e.target.closest('div.item').attributes.rel.value;
    this.props.onTodoDone(divItem)
  }

  handleRemove = (e) => {
    let divItem = e.target.closest('div.item').attributes.rel.value;
    this.props.onTodoRemove(divItem)
  }

  render() {
    const todoList = this.props.todoList.todo.map(res => {
      return (
        <List.Item key={res.id} rel={res.id}>
          <List.Content floated='left'>
            <Checkbox onClick={this.handleDone} checked={res.done ? true : false} />
          </List.Content >
          <List.Content as={res.done ? 'strike' : 'span'}>{res.name}</List.Content>
          <List.Content floated='right'>
            <Icon onClick={this.handleRemove} name="trash" color={res.remove ? 'blue' : 'grey'} />
          </List.Content >
        </List.Item >
      )
    })

    return (
      <div style={{ marginTop: '0.5em' }}>
        <List divided verticalAlign='middle' size='huge' className="todoList">
          {todoList.length > 0 ? todoList : 'yapılacak bişey kalmadı.'}
        </List>
      </div>
    )
  }
}

export default ListComponent;