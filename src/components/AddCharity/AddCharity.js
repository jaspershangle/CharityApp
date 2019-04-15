import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import CharityAPI from '../../api/CharityAPI';
import { Redirect } from 'react-router'


class AddCharity extends Component {
  state = {
      successfulSubmit: false
  }


  handleSubmit(e) {
    e.preventDefault()
    const charityObject = {
      name: e.target.elements[0].value,
      description: e.target.elements[1].value,
      bio: e.target.elements[2].value,
      website: e.target.elements[3].value,
      owner: e.target.elements[4].value
    }
    CharityAPI.addCharity(charityObject)
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
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="name" className="mr-sm-2">Name</Label>
          <Input type="text" name="name" />
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="description" className="mr-sm-2">Description</Label>
          <Input type="text" name="description" />
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="bio" className="mr-sm-2">Bio</Label>
          <Input type="textarea" name="bio" />
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="website" className="mr-sm-2">Website</Label>
          <Input type="url" name="website" />
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="owner" className="mr-sm-2">Bio</Label>
          <Input type="text" name="owner" />
        </FormGroup>
        <Button>Submit</Button>
      </Form> }
    </div>
    );
  }
}

export default AddCharity;