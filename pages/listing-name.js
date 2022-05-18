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
  const [category, setCategory] = useState([])
  console.log(category)

  const handleCategory = async (e) => {
    // e.preventDefault();
    if (e.target.checked) {
      setCategory([...category, e.target.value])
    }
    else {
      setCategory([...category.filter(categoryItem => categoryItem !== e.target.value)])
    }
  }

  const previewImage = (e) => {
    e.preventDefault();
    var output = document.getElementById('blah');
    output.style.display = 'block';
    output.src = URL.createObjectURL(e.target.files[0]);
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
    const serviceItems = document.querySelectorAll(
      'input[name="checkbox"]:checked'
    );
    const categoryItems = document.querySelectorAll(
      'input[name="category"]:checked'
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

    const serviceRes = []
    for (let i = 0; i < serviceItems.length; i++) {
      await fetchAPI("/services", {
        filters: {
          name: serviceItems[i].value,
        }
      })
        .then((response) => {
          serviceRes.push(response.data[0])
        })
        .catch((error) => {
          console.log(error)
        })
    }

    // const serviceRes = await fetchAPI('/services', {
    //   filters: {
    //     name: service,
    //   },
    //   populate: "*",
    // });
    
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
        "services": serviceRes,
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
                    <div className="add-listing-form col-lg-12 pt-1">
                      <div>Business Logo:</div>
                      <div className="form_group file-input-one">
                        <input type="file" name="Image" id="imgInp" onChange={previewImage} />
                        <img id="blah" src="#" alt=" " style={{display: "none"}} />
                        {/* <div className="upload-content">
                          <div className="upload-title-icon d-flex align-items-center justify-content-center">
                            {file.length == 0 &&
                              <img
                                src="/assets/images/elements/input-1.png"
                                alt="Image"
                              />
                            }
                            {file.length != 0 && 
                              <img id="blah" src="#" alt="preview image" />
                            }
                          </div>
                        </div> */}
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
                          <input type="checkbox" id="check2" name="checkbox" value="Hardwood" onChange={handleCategory} />
                          <label htmlFor="check2">
                            <span>Hardwood</span>
                          </label>
                        </div>
                        <div className="single-checkbox d-flex">
                          <input type="checkbox" id="check3" name="checkbox" value="Laminate" onChange={handleCategory} />
                          <label htmlFor="check3">
                            <span>Laminate</span>
                          </label>
                        </div>
                        <div className="single-checkbox d-flex">
                          <input type="checkbox" id="check4" name="checkbox" value="Vinyl" onChange={handleCategory} />
                          <label htmlFor="check4">
                            <span>Vinyl</span>
                          </label>
                        </div>
                        <div className="single-checkbox d-flex">
                          <input type="checkbox" id="check5" name="checkbox" value="Tile" onChange={handleCategory} />
                          <label htmlFor="check5">
                            <span>Tile</span>
                          </label>
                        </div>
                        <div className="single-checkbox d-flex">
                          <input type="checkbox" id="check6" name="checkbox" value="Carpet" onChange={handleCategory} />
                          <label htmlFor="check6">
                            <span>Carpet</span>
                          </label>
                        </div>
                      </div>
                    </div>
                    {category.indexOf("Hardwood") != -1 && <div className="col-lg-12">
                      <p>Service Category for Hardwood</p><hr />
                      <div className="form_group d-flex justify-content-around">
                        <div className="single-checkbox d-flex">
                          <input
                            type="checkbox"
                            id="hardwood1"
                            name="category"
                            value="Hardwood Floor Refinishing"
                          />
                          <label htmlFor="hardwood1">
                            <span>Hardwood Floor Refinishing</span>
                          </label>
                        </div>
                        <div className="single-checkbox d-flex">
                          <input type="checkbox" id="hardwood2" name="category" value="Hardwood Floor Installation" />
                          <label htmlFor="hardwood2">
                            <span>Hardwood Floor Installation</span>
                          </label>
                        </div>
                        <div className="single-checkbox d-flex">
                          <input type="checkbox" id="hardwood3" name="category" value="Hardwood Floor Repair" />
                          <label htmlFor="hardwood3">
                            <span>Hardwood Floor Repair</span>
                          </label>
                        </div>
                        <div className="single-checkbox d-flex">
                          <input type="checkbox" id="hardwood4" name="category" value="Hardwood Floor Cleaning" />
                          <label htmlFor="hardwood4">
                            <span>Hardwood Floor Cleaning</span>
                          </label>
                        </div>
                        <div className="single-checkbox d-flex">
                          <input type="checkbox" id="hardwood5" name="category" value="Hardwood Floor Store" />
                          <label htmlFor="hardwood5">
                            <span>Hardwood Floor Store</span>
                          </label>
                        </div>
                      </div>
                    </div>}
                    {category.indexOf("Laminate") != -1 && <div className="col-lg-12">
                      <p>Service Category for Laminate</p><hr />
                      <div className="form_group d-flex justify-content-around">
                        <div className="single-checkbox d-flex">
                          <input
                            type="checkbox"
                            id="laminate1"
                            name="category"
                            value="Laminate Flooring Installation"
                          />
                          <label htmlFor="laminate1">
                            <span>Laminate Flooring Installation</span>
                          </label>
                        </div>
                        <div className="single-checkbox d-flex">
                          <input type="checkbox" id="laminate2" name="category" value="Laminate Flooring Store" />
                          <label htmlFor="laminate2">
                            <span>Laminate Flooring Store</span>
                          </label>
                        </div>
                        <div className="single-checkbox d-flex">
                          <input type="checkbox" id="laminate3" name="category" value="Laminate Floor Repair" />
                          <label htmlFor="laminate3">
                            <span>Laminate Floor Repair</span>
                          </label>
                        </div>
                      </div>
                    </div>}
                    {category.indexOf("Vinyl") != -1 && <div className="col-lg-12">
                      <p>Service Category for Vinyl</p><hr />
                      <div className="form_group d-flex justify-content-around">
                        <div className="single-checkbox d-flex">
                          <input
                            type="checkbox"
                            id="vinyl1"
                            name="category"
                            value="Vinyl Flooring Store"
                          />
                          <label htmlFor="vinyl1">
                            <span>Vinyl Flooring Store</span>
                          </label>
                        </div>
                        <div className="single-checkbox d-flex">
                          <input type="checkbox" id="vinyl2" name="category" value="Vinyl Flooring Installation" />
                          <label htmlFor="vinyl2">
                            <span>Vinyl Floor Installation</span>
                          </label>
                        </div>
                        <div className="single-checkbox d-flex">
                          <input type="checkbox" id="vinyl3" name="category" value="Vinyl Flooring Repair" />
                          <label htmlFor="vinyl3">
                            <span>Vinyl Floor Repair</span>
                          </label>
                        </div>
                        <div className="single-checkbox d-flex">
                          <input type="checkbox" id="vinyl4" name="category" value="Vinyl Deck Repair" />
                          <label htmlFor="vinyl4">
                            <span>Vinyl Deck Repair</span>
                          </label>
                        </div>
                        <div className="single-checkbox d-flex">
                          <input type="checkbox" id="vinyl5" name="category" value="Vinyl Decking Installation" />
                          <label htmlFor="vinyl5">
                            <span>Vinyl Decking Installation</span>
                          </label>
                        </div>
                      </div>
                    </div>}
                    {category.indexOf("Tile") != -1 && <div className="col-lg-12">
                      <p>Service Category for Tile</p><hr />
                      <div className="form_group d-flex justify-content-around">
                        <div className="single-checkbox d-flex">
                          <input
                            type="checkbox"
                            id="tile1"
                            name="category"
                            value="Tile Store"
                          />
                          <label htmlFor="tile1">
                            <span>Tile Store</span>
                          </label>
                        </div>
                        <div className="single-checkbox d-flex">
                          <input type="checkbox" id="tile2" name="category" value="Vinyl Flooring Installation" />
                          <label htmlFor="tile2">
                            <span>Tile Installer</span>
                          </label>
                        </div>
                      </div>
                    </div>}
                    {category.indexOf("Carpet") != -1 && <div className="col-lg-12">
                      <p>Service Category for Carpet</p><hr />
                      <div className="form_group d-flex justify-content-around">
                        <div className="single-checkbox d-flex">
                          <input
                            type="checkbox"
                            id="carpet1"
                            name="category"
                            value="Carpet Cleaning"
                          />
                          <label htmlFor="carpet1">
                            <span>Carpet Cleaning</span>
                          </label>
                        </div>
                        <div className="single-checkbox d-flex">
                          <input type="checkbox" id="carpet2" name="category" value="Carpet Installer" />
                          <label htmlFor="carpet2">
                            <span>Carpet Installer</span>
                          </label>
                        </div>
                        <div className="single-checkbox d-flex">
                          <input type="checkbox" id="carpet3" name="category" value="Carpet Repair" />
                          <label htmlFor="carpet3">
                            <span>Carpet Repair</span>
                          </label>
                        </div>
                        <div className="single-checkbox d-flex">
                          <input type="checkbox" id="carpet4" name="category" value="Carpet Store" />
                          <label htmlFor="carpet4">
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
                {/* <div className="add-listing-form map-form mb-60 wow fadeInUp">
                  <div className="map-box">
                    <iframe src="https://maps.google.com/maps?q=new%20york&t=&z=13&ie=UTF8&iwloc=&output=embed" />
                  </div>
                </div> */}
                <div className="add-listing-form timing-listing-form mb-60 wow fadeInUp">
                  <h4 className="title">Opening Hours</h4>
                  <div className="row">
                    <div className="col-lg-12">
                      <div
                        className="timeing-list"
                        style={{
                          display: "flex",
                          justifyContent: "space-evenly",
                        }}
                      >
                        <h5 className="col-lg-3">Monday</h5>
                        <div className="col-lg-5">
                          <label htmlFor="MondayOpen">Open Time:</label>
                          <input type="time" id="MondayOpen" name="MondayOpen" className="time form_control" defaultValue="08:00" />
                        </div>
                        <div className="col-lg-5">
                          <label htmlFor="MondayClose">Close Time:</label>
                          <input type="time" id="MondayClose" name="MondayClose" className="time form_control" defaultValue="17:00" />
                        </div>
                      </div>
                      <div
                        className="timeing-list"
                        style={{
                          display: "flex",
                          justifyContent: "space-evenly",
                        }}
                      >
                        <h5 className="col-lg-3">Tuesday</h5>
                        <div className="col-lg-5">
                          <label htmlFor="TuesdayOpen">Open Time:</label>
                          <input type="time" id="TuesdayOpen" name="TuesdayOpen" className="time form_control" defaultValue="08:00" />
                        </div>
                        <div className="col-lg-5">
                          <label htmlFor="TuesdayClose">Close Time:</label>
                          <input type="time" id="TuesdayClose" name="TuesdayClose" className="time form_control" defaultValue="17:00" />
                        </div>
                      </div>
                      <div
                        className="timeing-list"
                        style={{
                          display: "flex",
                          justifyContent: "space-evenly",
                        }}
                      >
                        <h5 className="col-lg-3">Wednesday</h5>
                        <div className="col-lg-5">
                          <label htmlFor="WednesdayOpen">Open Time:</label>
                          <input type="time" id="WednesdayOpen" name="WednesdayOpen" className="time form_control" defaultValue="08:00" />
                        </div>
                        <div className="col-lg-5">
                          <label htmlFor="WednesdayClose">Close Time:</label>
                          <input type="time" id="WednesdayClose" name="WednesdayClose" className="time form_control" defaultValue="17:00" />
                        </div>
                      </div>
                      <div
                        className="timeing-list"
                        style={{
                          display: "flex",
                          justifyContent: "space-evenly",
                        }}
                      >
                        <h5 className="col-lg-3">Thursday</h5>
                        <div className="col-lg-5">
                          <label htmlFor="ThursdayOpen">Open Time:</label>
                          <input type="time" id="ThursdayOpen" name="ThursdayOpen" className="time form_control" defaultValue="08:00" />
                        </div>
                        <div className="col-lg-5">
                          <label htmlFor="ThursdayClose">Close Time:</label>
                          <input type="time" id="ThursdayClose" name="ThursdayClose" className="time form_control" defaultValue="17:00" />
                        </div>
                      </div>
                      <div
                        className="timeing-list"
                        style={{
                          display: "flex",
                          justifyContent: "space-evenly",
                        }}
                      >
                        <h5 className="col-lg-3">Friday</h5>
                        <div className="col-lg-5">
                          <label htmlFor="FridayOpen">Open Time:</label>
                          <input type="time" id="FridayOpen" name="FridayOpen" className="time form_control" defaultValue="08:00" />
                        </div>
                        <div className="col-lg-5">
                          <label htmlFor="FridayClose">Close Time:</label>
                          <input type="time" id="FridayClose" name="FridayClose" className="time form_control" defaultValue="17:00" />
                        </div>
                      </div>
                      <div
                        className="timeing-list"
                        style={{
                          display: "flex",
                          justifyContent: "space-evenly",
                        }}
                      >
                        <h5 className="col-lg-3">Saturday</h5>
                        <div className="col-lg-5">
                          <label htmlFor="SaturdayOpen">Open Time:</label>
                          <input type="time" id="SaturdayOpen" name="SaturdayOpen" className="time form_control" defaultValue="08:00" />
                        </div>
                        <div className="col-lg-5">
                          <label htmlFor="SaturdayClose">Close Time:</label>
                          <input type="time" id="SaturdayClose" name="SaturdayClose" className="time form_control" defaultValue="17:00" />
                        </div>
                      </div>
                      <div
                        className="timeing-list"
                        style={{
                          display: "flex",
                          justifyContent: "space-evenly",
                        }}
                      >
                        <h5 className="col-lg-3">Sunday</h5>
                        <div className="col-lg-5">
                          <label htmlFor="SundayOpen">Open Time:</label>
                          <input type="time" id="SundayOpen" name="SundayOpen" className="time form_control" defaultValue="08:00" />
                        </div>
                        <div className="col-lg-5">
                          <label htmlFor="SundayClose">Close Time:</label>
                          <input type="time" id="SundayClose" name="SundayClose" className="time form_control" defaultValue="17:00" />
                        </div>
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
