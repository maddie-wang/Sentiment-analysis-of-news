import React, { Component } from 'react';
import axios from 'axios';

export default class StudentEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      imageUrl: '',
      gpa: 2.5
    };
  }

  componentDidMount = async () => {};

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = async event => {
    event.preventDefault();
    await axios.post('/api/students', this.state);
  };

  render() {
    const info = this.props.info;
    return (
      <div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="one column" />
              <p className="three columns">Student first name:</p>
              <input
                type="text"
                name="firstName"
                className="five columns"
                value={this.state.firstName}
                onChange={this.handleChange}
              />
            </div>
            <div className="row">
              <div className="one column" />
              <p className="three columns">Student last name:</p>
              <input
                type="text"
                name="lastName"
                className="five columns"
                value={this.state.lastName}
                onChange={this.handleChange}
              />
            </div>
            <div className="row">
              <div className="one column" />
              <p className="three columns">Email:</p>
              <input
                type="text"
                name="email"
                className="five columns"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </div>
            <div className="row">
              <div className="one column" />
              <p className="three columns">GPA:</p>
              <input
                type="text"
                name="gpa"
                className="five columns"
                value={this.state.gpa}
                onChange={this.handleChange}
              />
            </div>
            <div className="row">
              <div className="one column" />
              <p className="three columns">Image URL:</p>
              <input
                type="text"
                name="imageUrl"
                className="five columns"
                value={this.state.imageUrl}
                onChange={this.handleChange}
              />
            </div>
            <div className="row">
              <p className="three column" />
              <button className="three columns">Submit Changes</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
