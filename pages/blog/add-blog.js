import React from "react";
import Link from "next/link";
import Layout from "../../components/layout/Layout";

const AddBlog = () => {
  return (
    <Layout>
      <div className="container">
        <form onSubmit={(e) => e.preventDefault()}>
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
            <div className="m-3 w-100">
              <label htmlFor="image" className="form-label m-3">
                Blog Image:{" "}
              </label>
              <div className="add-listing-form upload-listing-form form_group file-input-one">
                <input type="file" name="blogImage" id="image" />
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
              <div className="m-3 form-check">
                <input
                  type="checkbox"
                  id="check1"
                  name="checkbox"
                  className="form-check-input"
                  defaultChecked=""
                />
                <label className="form-check-label" htmlFor="check1">
                  <span>I accept Terms of Service of this website</span>
                </label>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="form-group my-5">
                <button className="main-btn">Submit Blog</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default AddBlog;
