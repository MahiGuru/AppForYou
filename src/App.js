import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './App.css';
import { Layout } from "./layout/Layout";


class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Button color="danger">Danger!</Button>
        </Layout>

      </div>
    );
  }
}

export default App;
