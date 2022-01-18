import React, { Component } from 'react';
import parse from 'html-react-parser'
import axios from 'axios';

class Image extends Component {
  state = { source: null };


  //var url = `<iframe src="https://www.google.com/maps/embed?pb=!1m24!1m12!1m3!1d50641.80418958072!2d126.97090128302513!3d37.505258531058615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m9!3e6!4m3!3m2!1d37.495331199999995!2d126.9892345!4m3!3m2!1d37.4959773!2d127.0268687!5e0!3m2!1sen!2skr!4v1642444149833!5m2!1sen!2skr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`;

  componentDidMount() {
    axios
      .post(
        'http://localhost:5000/',
        { responseType: 'blob' ,
          withCredentials: false,
        },
      )
      .then(response => {
      const myBlob = response.data;
      // console.log(myBlob);
      var objectURL = window.URL.createObjectURL(new Blob([response.data]));
      console.log(objectURL);
      this.setState({ source : objectURL});
      });
  }

  render() {
    return <img src= {this.state.source} alt="profile"/>;
    }
}

export default Image;