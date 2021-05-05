import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import GroupedRecords from "../../containers/GroupedRecords";
import music5 from "../../assets/music5.mp4";

const API = "https://calm-ravine-36992.herokuapp.com";

class Main extends React.Component {
  state = {
    popularRecords: [],
    expensiveRecords: [],
  };

  componentDidMount() {
    fetch(API + `/records-popular`)
      .then((resp) => resp.json())
      .then((data) => this.setState({ popularRecords: data }));
    fetch(API + `/records-expensive`)
      .then((resp) => resp.json())
      .then((data) => this.setState({ expensiveRecords: data }));
  }

  render() {
    return (
      <div>
        <div class="section" style={{ textAlign: "center" }}>
          <h2>
            Welcome To Vinyl Store
            {/*<br></br>*/}
            {/*<p style={{fontSize: "xx-large", textAlign: "center"}}>One stop for shopping and selling records</p>*/}
          </h2>
          <div class="video-container">
            <div class="color-overlay"></div>
            <video width="100%" autoPlay loop muted>
              <source src={music5} type="video/mp4"></source>
            </video>
          </div>
        </div>
        <div className="container">
          {/*<Messages user={this.props.user}/>*/}
          <GroupedRecords
            key={1}
            title={"The most popular Records"}
            records={this.state.popularRecords}
          />
          <GroupedRecords
            key={2}
            title={"The most expensive Records"}
            records={this.state.expensiveRecords}
          />
        </div>
      </div>
    );
  }
}

export default Main;
