import React from "react";
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';


class CharityList extends React.Component{
  
  getDonationSumForCharity(id) {
    let sum = 0
    this.props.donations.forEach(function(donation) {
      if(id === donation.charity) {
        sum += Number(donation.amount)
      }
    })
    return sum
  }
  createCharityList() {
    return this.props.charities.map(( charity, index ) =>         
      <Row>
        <Col><Link to={`/Charity/${charity.id}`}>
            {charity.name}
          </Link></Col>
        <Col>${this.getDonationSumForCharity(charity.id)}</Col>
      </Row>
      )
    }

  render(){
    return (
      <Container>
        <Row>
          <h2>Charities:</h2>
        </Row>
        <Row><Col><h4>Charity</h4></Col><Col><h4>Amount Raised</h4></Col></Row>
        { this.createCharityList() }
      </Container>
    );
  }   
}
export default CharityList;