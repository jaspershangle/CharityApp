import React from "react";
import { Container, Row } from 'reactstrap';

class CampaignList extends React.Component{
  
  createCampaignList() {
    return this.props.campaigns.map(( campaign, index ) =>         
      <Row>{campaign.name}</Row>
      )
    }

  render(){
    return (
      <Container>
        <Row>
          <h2>Top Campaigns:</h2>
        </Row>
        { console.log(this.props.campaigns) }
      </Container>
    );
  }   
}
export default CampaignList;