import React, { Component } from "react";
import { Header, Icon, List } from "semantic-ui-react";
import "./App.css";
import axios from "axios";

class App extends Component {
  state = {
    values: [],
  };

  componentDidMount() {
    axios.get("http://localhost:5000/api/values").then((response) => {
      this.setState({
        values: response.data,
      });
    });
  }

  render() {
    const { values } = this.state;
    return (
      <div>
        <Header as='h2'>
          <Icon name='users' />
          <Header.Content>Reactivities</Header.Content>
        </Header>
        <List>
          {values.map((value: any) => (
            <List.Item key={value.id}>{value.name}</List.Item>
          ))}
        </List>
      </div>
    );
  }
}

export default App;
