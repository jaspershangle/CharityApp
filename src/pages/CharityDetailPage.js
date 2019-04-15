import React, { Component } from "react";
import { Container, Row, Col, Card, CardTitle, CardText, Button } from 'reactstrap';
import CharityAPI from '../api/CharityAPI';
import DonationAPI from '../api/DonationAPI';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router'


class CharityDetailPage extends Component {
  state = {
    charity: '',
    donations: []
  }

  getDonationSumForCharity(id) {
    let sum = 0
    this.props.donations.forEach(function(donation) {
      if(id === donation.charity) {
        sum += Number(donation.amount)
      }
    })
    return sum
  }

  async componentDidMount() {
    try {
      const res = await CharityAPI.fetchCharityByID(this.props.match.params.id)
      console.log(res)
      this.setState({
        charity:res
      });
    } catch (e) {
      console.log(e);
    }
    try {
      const res = await DonationAPI.fetchDonations()
      this.setState({
        donations:res
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Card body>
              <CardTitle><h3>{this.state.charity.name}</h3></CardTitle>
              <CardText><em>{this.state.charity.description}</em></CardText>
              <CardText>{this.state.charity.bio}</CardText>
              <Row>
                <Col><Link to='/'><Button color="success">Back to List</Button></Link></Col>
                <Col><Link to={`/DeleteCharity/${this.state.charity.id}`}><Button color="danger">Delete</Button></Link></Col>
              </Row>
            </Card>
          </Row>
        </Container>
        
      </div>
    );
  }
}

export default CharityDetailPage;