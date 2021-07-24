import React, { Component } from 'react';
import axios from 'axios';

class Fib extends Component {
  state = {
    seenIndexes: [],
    values: {},
    index: '',
  };

  componentDidMount() {
    this.fetchValues();
    this.fetchIndexes();
  }

  async fetchValues() {
    const values = await axios.get('/api/values/current');
    this.setState({ values: values.data });
  }

  async fetchIndexes() {
    const seenIndexes = await axios.get('/api/values/all');
    this.setState({
      seenIndexes: seenIndexes.data,
    });
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    await axios.post('/api/values', {
      index: this.state.index,
    });
    this.setState({ index: '' });
  };

  renderSeenIndexes() {
    return this.state.seenIndexes.map(({ number }) => number).join(', ');
  }

  renderValues() {
    const entries = [];

    for (let key in this.state.values) {
      entries.push(
        <div key={key}>
          For index {key} I calculated {this.state.values[key]}
        </div>,
      );
    }

    return entries;
  }

  render() {
    console.log('Fib component loaded');

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h3>Calculate the n-th Fibonacci number</h3>
          <label style={{ fontSize: '1.5em' }}>n = </label>
          <input
            value={this.state.index}
            onChange={(event) => this.setState({ index: event.target.value })}
            style={{ width: '1.2em', height: '1.5em', fontSize: '1.5em' }}
          />
          <span> </span>
          <button style={{ height: '2em', fontSize: '1em' }}>Submit</button>
        </form>

        <h3>Indexes I have seen:</h3>
        {this.renderSeenIndexes()}

        <h3>Calculated Values:</h3>
        {this.renderValues()}
      </div>
    );
  }
}

export default Fib;
