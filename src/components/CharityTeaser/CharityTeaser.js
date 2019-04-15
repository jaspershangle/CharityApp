import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DonationAPI   from '../../api/DonationAPI'


class CharityTeaser extends Component {
  
  getDonationSumForCharity(id) {
    let sum = 0
    this.props.donations.forEach(function(donation) {
      if(id === donation.charity) {
        sum += Number(donation.amount)
      }
    })
    return sum
  }
  render() {
    return (
      <Row>
        <Col>
          <Link to={`/charity/${this.props.charity.id}`}>
            {this.props.charity.name}
          </Link>
        </Col>
        <Col>${this.getDonationSumForCharity(this.props.charity.id)}</Col>
      </Row>
    )
  }
}

export default CharityTeaser;