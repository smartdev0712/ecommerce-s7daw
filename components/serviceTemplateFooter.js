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
      <p className="mx-5 mb-2" style={{ fontSize: "18px" }}>
        Find local {service} in {location} ready for hire. Browse the best
        flooring contractors and services near you, read reviews and learn more
        about who’s available.
      </p>
      <div className="listing-faq-box mb-50 wow fadeInUp h5">
        <Accordion className="faq-accordian mx-5" defaultActiveKey="">
          <div className="card">
            <Accordion.Toggle
              as="a"
              className="card-header"
              eventKey="collapseOne"
              onClick={() => setAccordionActive("collapseOne")}
              aria-expanded={activeAccordion("collapseOne")}
            >
              <h3>
                Why Choose {service} in {location}?
              </h3>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="collapseOne">
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
          <div className="card">
            <Accordion.Toggle
              as="a"
              className="card-header"
              eventKey="collapseTwo"
              onClick={() => setAccordionActive("collapseTwo")}
              aria-expanded={activeAccordion("collapseTwo")}
            >
              <h3>
                What is the typical cost for {location} {service}?
              </h3>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="collapseTwo">
              <div className="card-body">
                <p>
                  The cost varies by the type of job, but your typical {service}{" "}
                  will cost [x] per hour or [x] per job in {location}.
                </p>
              </div>
            </Accordion.Collapse>
          </div>
          <div className="card">
            <Accordion.Toggle
              as="a"
              className="card-header"
              eventKey="collapseThree"
              onClick={() => setAccordionActive("collapseThree")}
              aria-expanded={activeAccordion("collapseThree")}
            >
              <h3>
                Who is the best {service} in {location}?
              </h3>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="collapseThree">
              <div className="card-body">
                <p>
                  Based on reviews, the best {service} in {location} is [#1
                  rated service], with [review count] reviews with an average
                  rating of [avg review rating for business].
                </p>
              </div>
            </Accordion.Collapse>
          </div>
          <div className="card">
            <Accordion.Toggle
              as="a"
              className="card-header"
              eventKey="collapseFour"
              onClick={() => setAccordionActive("collapseFour")}
              aria-expanded={activeAccordion("collapseFour")}
            >
              <h3>
                What’s the availability of {location} {service} services?
              </h3>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="collapseFour">
              <div className="card-body">
                <p>
                  Based on the companies we have listed, {service} in {location}{" "}
                  is available from [first opening day, first opening hours] to
                  [last open day, close hour]. This is among all services,
                  please check the individual hours on the business profile.
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
