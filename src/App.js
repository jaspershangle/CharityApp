import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import CharityPage from './pages/CharityPage.js';
import CharityDetailPage from './pages/CharityDetailPage.js';
import DonationPage from './pages/DonationPage.js';
import InfluencerPage from './pages/InfluencerPage.js';
import Header from './components/Header';
import NavBar from './components/NavBar/NavBar';
import AddCharity from './components/AddCharity/AddCharity';
import DeleteCharity from './components/DeleteCharity/DeleteCharity';
import { Container, Row, Col } from 'reactstrap';


class App extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
            {/* Title of Website - spans entire width of page */}
              <Header />
            </Col>
          </Row>
          <Row>
            <Col>
            {/* Nav menu - spans the entire width of page */}
              <NavBar />
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
            {/* Top left box - Usually going to be Charities List */}
              <BrowserRouter>
                <div>
                  <Route exact path="/" component={CharityPage} />
                  <Route exact path="/Charity/:id" component={CharityDetailPage} />
                  <Route exact path="/Influencer/:id" component={CharityPage} />
                  <Route exact path="/AddCharity" component={AddCharity} />
                  <Route exact path="/DeleteCharity/:id" component={DeleteCharity} />
                </div>
              </BrowserRouter>
            </Col>
            <Col>
            {/* Top right box - Charity Details and add/delete charities */}
              <BrowserRouter>
                <div>
                {/* <Route exact path="/Charity/:id" component={CharityDetailPage} /> */}
                <Route exact path="/Charity/add" component={AddCharity} />
                {/* <Route exact path="/Charity/:id/update" component={CharityDetailPage} /> */}
                </div>
              </BrowserRouter>
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
            {/* Bottom left - Usually Influencer List */}
              <BrowserRouter>
                <div>
                  <Route exact path="/" component={InfluencerPage} />
                  <Route exact path="/Charity/:id" component={InfluencerPage} />
                  <Route exact path="/Influencer/:id" component={InfluencerPage} />
                </div>
              </BrowserRouter>
            </Col>
            <Col>
            {/* Bottom right - influencer details, add, and delete  */}
              <BrowserRouter>
                <div>
                {/* <Route exact path="/" component={CharityPage} />
                <Route exact path="/Charity" component={CharityPage} /> */}
                </div>
              </BrowserRouter>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default App;