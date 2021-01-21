import React from 'react';
import { Accordion, OptForm } from '../components';

import faqsData from '../fixtures/faqs.json';
export default () => {
  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions.</Accordion.Title>
      <Accordion.Frame />
      {faqsData.map((item) => (
        <Accordion.Item key={item.id}>
          <Accordion.Header>{item.header}</Accordion.Header>
          <Accordion.Body>{item.body}</Accordion.Body>
        </Accordion.Item>
      ))}
      <Accordion.Frame />
      <OptForm>
        <OptForm.Text>
          Ready to watch? Enter your email to create or restart your membership.
        </OptForm.Text>
        <OptForm.Break />
        <OptForm.Input placeholder="Email adress" />
        <OptForm.Button>Get started</OptForm.Button>
      </OptForm>
    </Accordion>
  );
};
