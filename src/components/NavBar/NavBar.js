import React from "react";
import "./NavBar.css";


class NavBar extends React.Component{
    render(){
        return (
          <div className="topnav">
            <a href="/">Home</a>
            {/* <a href="/Campaign">Campaign</a> */}
            {/* <a href="/Charity">Charities</a> */}
            {/* <a href="/Sponser">Sponser</a> */}
            {/* <a href="/Influencer">Influencers</a> */}
            <a href="/Donate">Donate</a>
          </div>
      );
    }   
}
export default NavBar;