import React, { Component } from 'react';
import { connect } from "react-redux";
import { Container, Header, Button } from 'semantic-ui-react';

import ListComponent from "../todo/List";
import FormComponent from "../todo/Form";

import { onTodoSubmit, onTodoDone, onTodoRemove } from "../../actions/todoActions";

class TodoPage extends Component {

  state = {
    todolist: this.props.todoReducers,
    status: ''
  }

  todoAll = () => {
    this.setState({
      todolist: this.props.todoReducers,
      status: 'todoAll'
    })
  }
  todoNow = () => {
    let todoItem = this.props.todoReducers.todo.filter(res => res.done === false && res.remove === false)
    this.setState({
      todolist: {
        todo: todoItem
      },
      status: 'todoNow'
    })
  }
  todoApply = () => {
    let todoItem = this.props.todoReducers.todo.filter(res => res.done === true && res.remove === false)
    this.setState({
      todolist: {
        todo: todoItem
      },
      status: 'todoApply'
    })
  }
  todoRemove = () => {
    let todoItem = this.props.todoReducers.todo.filter(res => res.remove === true)
    this.setState({
      todolist: {
        todo: todoItem
      },
      status: 'todoRemove'
    })
  }

  componentWillMount() {
    this.todoNow()
  }


  render() {
    const { todolist, status } = this.state;

    return (
      <Container text style={{ marginTop: '7em' }}>
        <Header as='h1'>Yapılacaklar Sayfası</Header>
        <nav className="todoButtons">
          <Button content='tümü' color={status === 'todoAll' ? 'blue' : 'grey'} onClick={this.todoAll} active={status === 'todoAll' ? true : false} />
          <Button content='yapılacaklar' color={status === 'todoNow' ? 'blue' : 'grey'} onClick={this.todoNow} active={status === 'todoNow' ? true : false} />
          <Button content='tamamlananlar' color={status === 'todoApply' ? 'blue' : 'grey'} onClick={this.todoApply} active={status === 'todoApply' ? true : false} />
          <Button content='silinenler' color={status === 'todoRemove' ? 'blue' : 'grey'} onClick={this.todoRemove} active={status === 'todoRemove' ? true : false} />
        </nav>
        <FormComponent onTodoSubmit={this.props.onTodoSubmit} todoList={todolist} />
        <ListComponent todoList={todolist} onTodoDone={this.props.onTodoDone} onTodoRemove={this.props.onTodoRemove} status={status} />
      </Container>
    )
  }
}

const mapStatoToProps = (state, props) => {
  return {
    todoReducers: state.todoReducers
  }
}

const mapDispatchToProps = {
  onTodoSubmit,
  onTodoDone,
  onTodoRemove
}

export default connect(mapStatoToProps, mapDispatchToProps)(TodoPage);