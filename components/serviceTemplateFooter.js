import React, { useEffect, useState } from "react";
import { toCamelCase } from "./utils";
import { Accordion } from "react-bootstrap";

const ServiceTemplateFooter = () => {
  const [state, setState] = useState("");
  const [location, setLocation] = useState("");
  const [service, setService] = useState("");
  const [accordionActive, setAccordionActive] = useState("");
  const setAccordion = (value) => (value === accordionActive ? "" : value),
    activeAccordion = (value) => (value === accordionActive ? true : false);

  useEffect(() => {
    const url = document.location.toString().split("/");
    let state = url[url.length - 3];
    if (state.includes("%")) {
      let stateItems = state.split("%20");
      state = toCamelCase(stateItems[0]) + " " + toCamelCase(stateItems[1]);
      setState(state);
    } else {
      setState(toCamelCase(state));
    }
    setLocation(toCamelCase(url[url.length - 2]));
    const service = url[url.length - 1];
    let serviceItems = service.split("-");
    let serviceUrl = "";
    for (let i = 0; i < serviceItems.length; i++) {
      serviceUrl += toCamelCase(serviceItems[i]) + " ";
    }
    setService(serviceUrl);
  });
  return (
    <section className="hero-area listing-details-wrapper">
      <p className="mx-5 mb-2">
        Find local {service} in {location} ready to serve you.
        Browse the best contractors near you, read reviews and learn more about
        who’s available
      </p>
      <div className="listing-faq-box mb-50 wow fadeInUp h5">
        {/* <h4 className="title">Asked Question</h4> */}
        <Accordion className="faq-accordian mx-5" defaultActiveKey="">
          <div className="card">
            <Accordion.Toggle
              as="a"
              className="card-header"
              eventKey="collapse"
              onClick={() => setAccordionActive("collapse")}
              aria-expanded={activeAccordion("collapse")}
            >
              <h3>Why Choose {service} in {location}?</h3>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="collapse">
              <div className="card-body">
                <p>
                  Flooring Metaverse has collected all of the top {service} in
                  one place so you can find the best services for your needs.
                </p>
                <p>
                  {location} has many flooring professionals that are ready to
                  serve you and complete your project to your satisfaction and
                  needs. If you are unsure you can read reviews to make your
                  decision
                </p>
              </div>
            </Accordion.Collapse>
          </div>
        </Accordion>
      </div>
    </section>
  );
};

export default ServiceTemplateFooter;
