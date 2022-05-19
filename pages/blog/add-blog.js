import { useRouter } from "next/router";
import React from "react";

import Layout from "../../components/layout/Layout";
import { fetchAPI } from "../../lib/api";
import { getSlug } from "../../components/utils";
import http from "../../components/http";

const AddBlog = () => {
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const content = e.target.content.value;
    const description = e.target.summary.value;
    const image = e.target.blogImage.files[0];
    const category = document.querySelector(
      'input[name="radio"]:checked'
    ).value;
    const slug = getSlug(title)
    const categoryRes = await fetchAPI("/categories", {
      filters: {
        name: category,
      },
      populate: "*",
    });
    const authorRes = await fetchAPI("/writers", {
      filters: {
        name: "David Doe",
      },
    });

    var imageID = ""
    let file = new FormData();
    file.append("files", image)
    await http.post('/api/upload',file)
      .then((response) => {
        imageID = response.data[0].id
      })
      .catch((error) => {
        console.log(error);
      })

    await http.post("/api/articles", {
        "data": {
            "title": title,
            "description": description,
            "content": content,
            "slug": slug,
            "image": imageID,
            "writer": authorRes.data[0],
            "category": categoryRes.data[0],
          }
    });

    router.push("/blog/blog-category");
  };
  return (
    <Layout>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-lg-12">
              <div className="form-group">
                <label htmlFor="title" className="form-label m-3">
                  Title:{" "}
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter the title"
                  name="title"
                  id="title"
                  required
                />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="form-group">
                <label htmlFor="content" className="form-label m-3">
                  Content:{" "}
                </label>
                <textarea
                  className="form-control"
                  name="content"
                  id="content"
                  rows={9}
                  placeholder="Write Content"
                />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="form-group">
                <label htmlFor="summary" className="form-label m-3">
                  Summary:{" "}
                </label>
                <textarea
                  className="form-control"
                  name="summary"
                  id="summary"
                  rows={3}
                  placeholder="Write Summary about your blog"
                />
              </div>
            </div>
            <div className="m-3 w-100">
              <label htmlFor="image" className="form-label m-3">
                Blog Image:{" "}
              </label>
              <div className="add-listing-form upload-listing-form form_group file-input-one">
                <input type="file" name="blogImage" id="blogImage" />
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
            <div className="col-lg-12">
              <div className="form_group d-flex justify-content-around">
                <div className="single-checkbox d-flex">
                  <input
                    type="radio"
                    id="check1"
                    name="radio"
                    value="news"
                    defaultChecked=""
                  />
                  <label htmlFor="check1">
                    <span>news</span>
                  </label>
                </div>
                <div className="single-checkbox d-flex">
                  <input type="radio" id="check2" name="radio" value="tech" />
                  <label htmlFor="check2">
                    <span>tech</span>
                  </label>
                </div>
                <div className="single-checkbox d-flex">
                  <input type="radio" id="check3" name="radio" value="food" />
                  <label htmlFor="check3">
                    <span>food</span>
                  </label>
                </div>
                <div className="single-checkbox d-flex">
                  <input type="radio" id="check4" name="radio" value="nature" />
                  <label htmlFor="check4">
                    <span>nature</span>
                  </label>
                </div>
                <div className="single-checkbox d-flex">
                  <input type="radio" id="check5" name="radio" value="story" />
                  <label htmlFor="check5">
                    <span>story</span>
                  </label>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="m-3 form-check">
                <input
                  type="checkbox"
                  id="term_service"
                  name="checkbox"
                  className="form-check-input"
                  defaultChecked=""
                />
                <label className="form-check-label" htmlFor="term_service">
                  <span>I accept Terms of Service of this website</span>
                </label>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="form-group my-5">
                <input
                  type="submit"
                  value="Submit Blog"
                  className="main-btn"
                  style={{ border: "none" }}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default AddBlog;
