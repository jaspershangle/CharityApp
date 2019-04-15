import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class CampaignTeaser extends Component {

  render() {
    
    return (
      <div>
        <Link to={`/campaigns/${this.props.id}`}> {this.props.campaign.name}  </Link>
        <p>{ this.props.campaign.description }</p>
      </div>
    )
  }
}

export default CampaignTeaser;