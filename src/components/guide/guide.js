import React from 'react';
import { Container } from "react-bootstrap";

const Guide = () => {
  return (
    <Container fluid="md" maxWidth="sm">
      <h1>Guide: How to Use </h1>
      <section className="guide-wrapper">
        <div>
          <section className="guide-left red">
            <h2>Purpose</h2>
          </section>
          <section className="guide-right"></section>
        </div>
              <div>
          <section className="guide-left yellow">
            <h2>Questions API</h2>
          </section>
          <section className="guide-right"></section>
        </div>
        <div>
          <section className="guide-left green">
            <h2>Results</h2>
          </section>
          <section className="guide-right"></section>
        </div>
        <div>
          <section className="guide-left blue"></section>
          <section className="guide-right"></section>
        </div>
        <div>
          <section className="guide-left purple"></section>
          <section className="guide-right"></section>
        </div>
      </section>
    </Container>
  )
}

export default Guide;