import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import CharityAPI from '../../api/CharityAPI';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';

class AddCharity extends Component {
  state = {
      successfulSubmit: false
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log(this.props.match.id)
    CharityAPI.deleteCharity(this.props.match.params.id)
      .then((response) => { 
          console.log(response)
          this.setState({
            successfulSubmit: true
          })
      })
  }
  render() {
    return (
      <div>
        { this.state.successfulSubmit ? <Redirect to="/" /> :
          <Form onSubmit={(e) => {this.handleSubmit(e)}}>
            <Label>Are you sure you want to delete?</Label>
            <Link to='/'><Button>Back to List</Button></Link>
            <Button>Delete</Button>
          </Form> }
      </div>
    );
  }
}

export default AddCharity;