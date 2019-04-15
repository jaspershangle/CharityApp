import React from "react";
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';


class InfluencerList extends React.Component{
  
  getDonationSumForInfluencer(id) {
    let sum = 0
    this.props.donations.forEach(function(donation) {
      if(id === donation.influencer) {
        sum += Number(donation.amount)
      }
    })
    return sum
  }
  createInfluencerList() {
    return this.props.influencers.map(( influencer, index ) => {        
      if(this.getDonationSumForInfluencer(influencer.id) > 0){
        return <Row>
          <Col><Link to={`/influencer/${influencer.id}`}>
              {influencer.username}
            </Link></Col>
          <Col>${this.getDonationSumForInfluencer(influencer.id)}</Col>
        </Row>
      }}
      )
    }

  render(){
    return (
      <Container>
        <Row>
          <h2>Influencers:</h2>
        </Row>
        <Row><Col><h4>Influencer</h4></Col><Col><h4>Amount Raised</h4></Col></Row>
        { this.createInfluencerList() }
      </Container>
    );
  }   
}
export default InfluencerList;