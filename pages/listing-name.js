import { useRouter } from 'next/router'
import React, { useState } from "react";
import PageBanner from "../components/layout/PageBanner";
import Layout from "../components/layout/Layout";
import ReCaptcha from "react-google-recaptcha";

import { getSlug } from "../components/utils";
import http from "../components/http";
import { fetchAPI } from '../lib/api';

const AddListing = () => {
  const router = useRouter()
  const [category, setCategory] = useState("")

  const handleCategory = async (e) => {
    // e.preventDefault();
    setCategory(e.target.value)
  }

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
    const city = e.target.city.value;
    const service = document.querySelector(
      'input[name="radio"]:checked'
    ).value;
    const categoryItems = document.querySelectorAll(
      'input[type="checkbox"]:checked'
    );
    console.log(categoryItems)

    const categoryRes = []
    for (let i = 0; i < categoryItems.length; i++) {
      await fetchAPI("/service-categories", {
        filters: {
          name: categoryItems[i].value,
        }
      })
        .then((response) => {
          categoryRes.push(response.data[0])
        })
        .catch((error) => {
          console.log(error)
        })
    }

    const serviceRes = await fetchAPI('/services', {
      filters: {
        name: service,
      },
      populate: "*",
    });
    
    const cityRes = await fetchAPI('/canada-cities', {
      filters: {
        city_ascii: city
      }
    })

    if (cityRes.data[0] == "" || cityRes.data[0] == undefined) {
      alert("Please select a city correctly")
    }

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
        "canada_city": cityRes.data[0],
        "service_categories": categoryRes,
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
                        {/* <div className="single-checkbox d-flex">
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
                        </div> */}
                        <div className="single-checkbox d-flex">
                          <input type="radio" id="check2" name="radio" value="Hardwood" onChange={handleCategory} />
                          <label htmlFor="check2">
                            <span>Hardwood</span>
                          </label>
                        </div>
                        <div className="single-checkbox d-flex">
                          <input type="radio" id="check3" name="radio" value="Laminate" onChange={handleCategory} />
                          <label htmlFor="check3">
                            <span>Laminate</span>
                          </label>
                        </div>
                        <div className="single-checkbox d-flex">
                          <input type="radio" id="check4" name="radio" value="Vinyl" onChange={handleCategory} />
                          <label htmlFor="check4">
                            <span>Vinyl</span>
                          </label>
                        </div>
                        <div className="single-checkbox d-flex">
                          <input type="radio" id="check5" name="radio" value="Tile" onChange={handleCategory} />
                          <label htmlFor="check5">
                            <span>Tile</span>
                          </label>
                        </div>
                        <div className="single-checkbox d-flex">
                          <input type="radio" id="check6" name="radio" value="Carpet" onChange={handleCategory} />
                          <label htmlFor="check6">
                            <span>Carpet</span>
                          </label>
                        </div>
                      </div>
                    </div>
                    {category == "Hardwood" && <div className="col-lg-12">
                      <p>Service Category</p><hr />
                      <div className="form_group d-flex justify-content-around">
                        <div className="single-checkbox d-flex">
                          <input
                            type="checkbox"
                            id="category1"
                            name="category"
                            value="Hardwood Floor Refinishing"
                            // defaultChecked=""
                          />
                          <label htmlFor="category1">
                            <span>Hardwood Floor Refinishing</span>
                          </label>
                        </div>
                        <div className="single-checkbox d-flex">
                          <input type="checkbox" id="category2" name="category" value="Hardwood Floor Installation" />
                          <label htmlFor="category2">
                            <span>Hardwood Floor Installation</span>
                          </label>
                        </div>
                        <div className="single-checkbox d-flex">
                          <input type="checkbox" id="category3" name="category" value="Hardwood Floor Repair" />
                          <label htmlFor="category3">
                            <span>Hardwood Floor Repair</span>
                          </label>
                        </div>
                        <div className="single-checkbox d-flex">
                          <input type="checkbox" id="category4" name="category" value="Hardwood Floor Cleaning" />
                          <label htmlFor="category4">
                            <span>Hardwood Floor Cleaning</span>
                          </label>
                        </div>
                        <div className="single-checkbox d-flex">
                          <input type="checkbox" id="category5" name="category" value="Hardwood Floor Store" />
                          <label htmlFor="category5">
                            <span>Hardwood Floor Store</span>
                          </label>
                        </div>
                      </div>
                    </div>}
                    {category == "Laminate" && <div className="col-lg-12">
                      <p>Service Category</p><hr />
                      <div className="form_group d-flex justify-content-around">
                        <div className="single-checkbox d-flex">
                          <input
                            type="checkbox"
                            id="category1"
                            name="category"
                            value="Laminate Flooring Installation"
                          />
                          <label htmlFor="category1">
                            <span>Laminate Flooring Installation</span>
                          </label>
                        </div>
                        <div className="single-checkbox d-flex">
                          <input type="checkbox" id="category2" name="category" value="Laminate Flooring Store" />
                          <label htmlFor="category2">
                            <span>Laminate Flooring Store</span>
                          </label>
                        </div>
                        <div className="single-checkbox d-flex">
                          <input type="checkbox" id="category3" name="category" value="Laminate Floor Repair" />
                          <label htmlFor="category3">
                            <span>Laminate Floor Repair</span>
                          </label>
                        </div>
                      </div>
                    </div>}
                    {category == "Vinyl" && <div className="col-lg-12">
                      <p>Service Category</p><hr />
                      <div className="form_group d-flex justify-content-around">
                        <div className="single-checkbox d-flex">
                          <input
                            type="checkbox"
                            id="category1"
                            name="category"
                            value="Vinyl Flooring Store"
                          />
                          <label htmlFor="category1">
                            <span>Vinyl Flooring Store</span>
                          </label>
                        </div>
                        <div className="single-checkbox d-flex">
                          <input type="checkbox" id="category2" name="category" value="Vinyl Flooring Installation" />
                          <label htmlFor="category2">
                            <span>Vinyl Floor Installation</span>
                          </label>
                        </div>
                        <div className="single-checkbox d-flex">
                          <input type="checkbox" id="category3" name="category" value="Vinyl Flooring Repair" />
                          <label htmlFor="category3">
                            <span>Vinyl Floor Repair</span>
                          </label>
                        </div>
                        <div className="single-checkbox d-flex">
                          <input type="checkbox" id="category4" name="category" value="Vinyl Deck Repair" />
                          <label htmlFor="category4">
                            <span>Vinyl Deck Repair</span>
                          </label>
                        </div>
                        <div className="single-checkbox d-flex">
                          <input type="checkbox" id="category5" name="category" value="Vinyl Decking Installation" />
                          <label htmlFor="category5">
                            <span>Vinyl Decking Installation</span>
                          </label>
                        </div>
                      </div>
                    </div>}
                    {category == "Tile" && <div className="col-lg-12">
                      <p>Service Category</p><hr />
                      <div className="form_group d-flex justify-content-around">
                        <div className="single-checkbox d-flex">
                          <input
                            type="checkbox"
                            id="category1"
                            name="category"
                            value="Tile Store"
                          />
                          <label htmlFor="category1">
                            <span>Tile Store</span>
                          </label>
                        </div>
                        <div className="single-checkbox d-flex">
                          <input type="checkbox" id="category2" name="category" value="Vinyl Flooring Installation" />
                          <label htmlFor="category2">
                            <span>Tile Installer</span>
                          </label>
                        </div>
                      </div>
                    </div>}
                    {category == "Carpet" && <div className="col-lg-12">
                      <p>Service Category</p><hr />
                      <div className="form_group d-flex justify-content-around">
                        <div className="single-checkbox d-flex">
                          <input
                            type="checkbox"
                            id="category1"
                            name="category"
                            value="Carpet Cleaning"
                          />
                          <label htmlFor="category1">
                            <span>Carpet Cleaning</span>
                          </label>
                        </div>
                        <div className="single-checkbox d-flex">
                          <input type="checkbox" id="category2" name="category" value="Carpet Installer" />
                          <label htmlFor="category2">
                            <span>Carpet Installer</span>
                          </label>
                        </div>
                        <div className="single-checkbox d-flex">
                          <input type="checkbox" id="category3" name="category" value="Carpet Repair" />
                          <label htmlFor="category3">
                            <span>Carpet Repair</span>
                          </label>
                        </div>
                        <div className="single-checkbox d-flex">
                          <input type="checkbox" id="category5" name="category" value="Carpet Store" />
                          <label htmlFor="category5">
                            <span>Carpet Store</span>
                          </label>
                        </div>
                      </div>
                    </div>}
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
                        <input
                          type="text"
                          className="form_control"
                          placeholder="City *"
                          name="city"
                          required
                        />
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
