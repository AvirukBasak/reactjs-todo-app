import React from 'react';
import Form from '@/components/Form';
import printHelloWorld from '@/scripts/script';

export default class App extends React.Component {
  render() {
    printHelloWorld();
    return (
      <Form />
    );
  }
}
