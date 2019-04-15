import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';
import CharityList from '../components/CharityList/CharityList';
import CharityAPI from '../api/CharityAPI';
import DonationAPI from '../api/DonationAPI'

class HomePage extends Component {
  state = {
    charities: [],
    donations: []
  }

  async componentDidMount() {
    try {
      const res = await CharityAPI.fetchCharities()
      this.setState({
        charities:res
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
              <CharityList charities={this.state.charities} donations={this.state.donations} />
            </Col>
          </Row>
        </Container>
        
      </div>
    );
  }
}

export default HomePage;