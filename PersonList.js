import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    persons: []
  };

  componentDidMount() {
    axios
      .get(`http://c2p-api.gogames.co/api/v1/game`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization:
            'Bearer 1q4DGh1lAvh22uoIMYKAo2GmaAwGH98CJ04vzSeTF6aE997t9mVgB0tWUB7a'
        }
      })
      .then(res => {
        console.log(res);
        this.setState({ persons: res.data });
      });
  }
  render() {
    return <ul>hello</ul>;
  }
}

