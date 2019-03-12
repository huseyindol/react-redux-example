import React, { Component } from 'react';
import { List, Input } from 'semantic-ui-react';

class ListComponent extends Component {
  state = {
    filterText: ''
  }

  handleChange = (e) => {
    this.setState({
      filterText: e.target.value
    })
  }
  render() {
    const userFilter = this.props.users.filter(res => {
      return res.name.toLowerCase().indexOf(this.state.filterText.toLowerCase()) !== -1
    })
    const userList = userFilter.map(res => {
      return (
        <List.Item key={res.id} rel={res.id}>
          <List.Content floated='left'>{res.id}</List.Content>
          <List.Content>{res.name}</List.Content>
        </List.Item >
      )
    })
    return (
      <div style={{ marginTop: '0.5em' }}>
        <Input id="users" placeholder="Kişilerde Ara.." onChange={this.handleChange} value={this.state.filterText} />

        <List divided verticalAlign='middle' size='huge' className="userList">
          {userList.length > 0 ? userList : 'listelenecek user bulunamadı.'}
        </List>
      </div>
    )
  }
}

export default ListComponent;