import React from 'react';
import Form from '@/components/Form';
import printHelloWorld from '@/scripts/script';

export default function App() {
  printHelloWorld();
  return (
    <>
      <Form />
    </>
  );
}
