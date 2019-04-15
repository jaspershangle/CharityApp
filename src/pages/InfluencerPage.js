import React, { Component } from "react";
import UserAPI from '../api/UserAPI';
import DonationAPI from '../api/DonationAPI';
import { Container, Row, Col } from 'reactstrap';
import InfluencerList from '../components/InfluencerList/InfluencerList';


class InfluencerPage extends Component {
  state = {
    influencers: [],
    donations: []
  }

  async componentDidMount() {
    try {
      const res = await UserAPI.fetchUsers()
      this.setState({
        influencers:res
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
        <Container style={{backgroundColor: '#f1f1f1'}}>
          <Row>
            <Col>
              <InfluencerList influencers={this.state.influencers} donations={this.state.donations} />
            </Col>
          </Row>
        </Container>
        
      </div>
    );
  }
}

export default InfluencerPage;