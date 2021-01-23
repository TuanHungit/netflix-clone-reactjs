import React from 'react';
import { useContent } from '../hooks';
export default function Browse() {
  const { films } = useContent('films');
  console.log(films);
  return (
    <>
      <p>Hello from the browse!</p>
    </>
  );
}
