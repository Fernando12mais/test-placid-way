import { Accordion as ReactAccordion } from "react-bootstrap";

import "./accordion.css";

export default function Accordion() {
  return (
    <ReactAccordion className="w-100">
      <ReactAccordion.Item eventKey="0">
        <ReactAccordion.Header>Accomodation</ReactAccordion.Header>
        <ReactAccordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </ReactAccordion.Body>
      </ReactAccordion.Item>
      <ReactAccordion.Item eventKey="1">
        <ReactAccordion.Header>Program</ReactAccordion.Header>
        <ReactAccordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </ReactAccordion.Body>
      </ReactAccordion.Item>
    </ReactAccordion>
  );
}
