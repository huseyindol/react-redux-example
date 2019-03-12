import React, { Component } from 'react';
import { Container, Header } from 'semantic-ui-react';
import { connect } from "react-redux";
import { fetchUsers } from "../../actions/typicodeActions";
import ListComponent from "../tyipcode/list";

class TypicodePage extends Component {

  componentWillMount() {
    this.props.fetchUsers();
  }

  render(){
    console.log(this.props.typicodeReducers);
    return(
      <Container text style={{ marginTop: '7em' }}>
        <Header as='h1'>Typicode Page</Header>
        <ListComponent users={this.props.typicodeReducers.users} />
      </Container>
    )
  }
}

const mapStateToProps = (state,props) => {
  return {
    typicodeReducers: state.typicodeReducers
  }
}

const mapDispatchToProps = {
  fetchUsers
}

export default connect(mapStateToProps, mapDispatchToProps)(TypicodePage);