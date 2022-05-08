import React from "react";
import PageBanner from "../components/layout/PageBanner";
import Layout from "../components/layout/Layout";
import ReCaptcha from "react-google-recaptcha";

const AddListing = () => {
  return (
    <Layout>
      <PageBanner title={"Add Listing"} pageName={"Listing"} />
      <section className="add-listing pt-120 pb-120">
        <div className="container">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="add-listing-form details-listing-form mb-60 wow fadeInUp">
                  <h4 className="title">Business Information</h4>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form_group">
                        <input
                          type="text"
                          className="form_control"
                          placeholder="Business Name *"
                          name="name"
                          required=""
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form_group">
                        <input
                          type="email"
                          className="form_control"
                          placeholder="Business Email"
                          name="email"
                        />
                      </div>
                    </div>
                    <div className="add-listing-form upload-listing-form col-lg-12">
                      <div>Business Logo:</div>
                      <div className="form_group file-input-one">
                        <input type="file" name="Image" />
                        <div className="upload-content">
                          <div className="upload-title-icon d-flex align-items-center justify-content-center">
                            <img
                              src="/assets/images/elements/input-1.png"
                              alt="Image"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form_group">
                        <input
                          type="text"
                          className="form_control"
                          placeholder="Address *"
                          name="address"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form_group">
                        <input
                          type="text"
                          className="form_control"
                          placeholder="Phone"
                          name="phone"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form_group">
                        <input
                          type="url"
                          className="form_control"
                          placeholder="Website"
                          name="website"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form_group">
                        <input
                          type="text"
                          className="form_control"
                          placeholder="Tagline"
                          name="tagline"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form_group">
                        <textarea
                          className="form_control"
                          placeholder="Description"
                          name="discription"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form_group d-flex justify-content-around">
                        <div className="single-checkbox d-flex">
                          <input
                            type="radio"
                            id="check1"
                            name="radio"
                            defaultChecked=""
                          />
                          <label htmlFor="check1">
                            <span>Brand</span>
                          </label>
                        </div>
                        <div className="single-checkbox d-flex">
                          <input type="radio" id="check2" name="radio" />
                          <label htmlFor="check2">
                            <span>Services</span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form_group">
                        <input
                          type="email"
                          className="form_control"
                          placeholder="Contact Email *"
                          name="contact_email"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form_group">
                        <select className="wide form_control">
                          <option selected disabled value={"Services"}>
                            Services
                          </option>
                          <option value={1}>Hardwood</option>
                          <option value={2}>Laminate</option>
                          <option value={3}>Vinyl</option>
                          <option value={4}>Tile</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="add-listing-form map-form mb-60 wow fadeInUp">
                  <div className="map-box">
                    <iframe src="https://maps.google.com/maps?q=new%20york&t=&z=13&ie=UTF8&iwloc=&output=embed" />
                  </div>
                </div>
                <div className="add-listing-form timing-listing-form mb-60 wow fadeInUp">
                  <h4 className="title">Opening Hours</h4>
                  <div className="row">
                    <div className="col-lg-12">
                      <div
                        className="timeing-list"
                        style={{
                          display: "flex",
                          justifyContent: "space-around",
                        }}
                      >
                        <h5>Monday</h5>
                        <input
                          type="text"
                          className="time form_control"
                          placeholder="08 am - 05 pm"
                        ></input>
                      </div>
                      <div
                        className="timeing-list"
                        style={{
                          display: "flex",
                          justifyContent: "space-around",
                        }}
                      >
                        <h5>Tuesday</h5>
                        <input
                          type="text"
                          className="time form_control"
                          placeholder="08 am - 05 pm"
                        ></input>
                      </div>
                      <div
                        className="timeing-list"
                        style={{
                          display: "flex",
                          justifyContent: "space-around",
                        }}
                      >
                        <h5>Wednesday</h5>
                        <input
                          type="text"
                          className="time form_control"
                          placeholder="08 am - 05 pm"
                        ></input>
                      </div>
                      <div
                        className="timeing-list"
                        style={{
                          display: "flex",
                          justifyContent: "space-around",
                        }}
                      >
                        <h5>Thursday</h5>
                        <input
                          type="text"
                          className="time form_control"
                          placeholder="08 am - 05 pm"
                        ></input>
                      </div>
                      <div
                        className="timeing-list"
                        style={{
                          display: "flex",
                          justifyContent: "space-around",
                        }}
                      >
                        <h5>Friday</h5>
                        <input
                          type="text"
                          className="time form_control"
                          placeholder="08 am - 05 pm"
                        ></input>
                      </div>
                      <div
                        className="timeing-list"
                        style={{
                          display: "flex",
                          justifyContent: "space-around",
                        }}
                      >
                        <h5>Saturday</h5>
                        <input
                          type="text"
                          className="time form_control"
                          placeholder="08 am - 05 pm"
                        ></input>
                      </div>
                      <div
                        className="timeing-list"
                        style={{
                          display: "flex",
                          justifyContent: "space-around",
                        }}
                      >
                        <h5>Sunday</h5>
                        <input
                          type="text"
                          className="time form_control"
                          placeholder="08 am - 05 pm"
                        ></input>
                      </div>
                    </div>
                  </div>
                </div>
                <ReCaptcha
                  sitekey="6Lczec8fAAAAAOFUUm1Wko55wnpUqYKyqewCHlcl"
                  // onChange={handleVerifyRecaptcha}
                  theme="dark"
                />
                <div className="mt-5 button text-center">
                  <button className="main-btn icon-btn">Submit Listing</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
};
export default AddListing;
