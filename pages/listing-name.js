import { useRouter } from 'next/router'
import React from "react";
import PageBanner from "../components/layout/PageBanner";
import Layout from "../components/layout/Layout";
import ReCaptcha from "react-google-recaptcha";

import { getSlug } from "../components/utils";
import http from "../components/http";
import { fetchAPI } from '../lib/api';

const AddListing = () => {
  const router = useRouter()
  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const address = e.target.address.value;
    const phone = e.target.phone.value;
    const website = e.target.website.value;
    const tagline = e.target.tagline.value;
    const description = e.target.description.value;
    const contact_email = e.target.contact_email.value;
    const image = e.target.Image.files[0];
    const slug = getSlug(name)
    const service = document.querySelector(
      'input[name="radio"]:checked'
    ).value;

    const serviceRes = await fetchAPI('/services', {
      filters: {
        name: service,
      },
      populate: "*",
    });
    
    let imageID = ""
    const formData = new FormData();
    formData.append("files", image);
    await http.post('/api/upload', formData)
      .then(response => {
        imageID = response.data[0].id
      })
      .catch(error => {
        console.log(error);
      })

    await http.post('/api/businesses',{
      "data": {
        "name": name,
        "email": email,
        "address": address,
        "phone_number": phone,
        "website": website,
        "tagline": tagline,
        "description": description,
        "contact_email": contact_email,
        "slug": slug,
        "business_logo": imageID,
        "services": [serviceRes.data[0],],
      }
    })

    router.push('/')
  }

  return (
    <Layout>
      <section className="add-listing pt-120 pb-120">
        <div className="container">
          <form onSubmit={handleSubmit}>
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
                          required
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
                          name="description"
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
                            value="Brand"
                            defaultChecked=""
                          />
                          <label htmlFor="check1">
                            <span>Brand</span>
                          </label>
                        </div>
                        <div className="single-checkbox d-flex">
                          <input type="radio" id="check2" name="radio" value="Hardwood" />
                          <label htmlFor="check2">
                            <span>Hardwood</span>
                          </label>
                        </div>
                        <div className="single-checkbox d-flex">
                          <input type="radio" id="check3" name="radio" value="Laminate" />
                          <label htmlFor="check3">
                            <span>Laminate</span>
                          </label>
                        </div>
                        <div className="single-checkbox d-flex">
                          <input type="radio" id="check4" name="radio" value="Vinyl" />
                          <label htmlFor="check4">
                            <span>Vinyl</span>
                          </label>
                        </div>
                        <div className="single-checkbox d-flex">
                          <input type="radio" id="check5" name="radio" value="Tile" />
                          <label htmlFor="check5">
                            <span>Tile</span>
                          </label>
                        </div>
                        <div className="single-checkbox d-flex">
                          <input type="radio" id="check6" name="radio" value="Carpet" />
                          <label htmlFor="check6">
                            <span>Carpet</span>
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
                  sitekey="6LfPitYfAAAAAPUGdaJjX2aUcA5iJ_eC7NaP2zcp"
                  // onChange={handleVerifyRecaptcha}
                  theme="dark"
                />
                <div className="mt-5 button text-center">
                  <input type="submit" value="Submit Listing" className="main-btn icon-btn" />
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
