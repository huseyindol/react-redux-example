import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

class FormComponent extends Component {

  state = {
    name: '',
    done: false,
    remove: false
  }

  handleChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  handleSubmit = (e) => {
    this.props.onTodoSubmit(this.state)
    this.setState({
      name: ''
    })
  }
  render() {
    return (
      <div style={{ marginTop: '2em' }}>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <input id="todo" placeholder="Yapılacak Girin" onChange={this.handleChange} value={this.state.name} />
          </Form.Field>
        </Form>
      </div>
    )
  }
}


export default FormComponent;