import Link from "next/link";
import React from "react";
import PageBanner from "../../components/PageBanner";
import Layout from "../../components/layout/Layout";

const BlogDetails = () => {
  return (
    <Layout>
      <PageBanner
        title={"Blog Single"}
        background={"mailOutsSecondary.77351a10.png"}
      />
      <section className="blog-area pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-details-wrapper mb-30 wow fadeInUp">
                <div className="blog-post-item">
                  <div className="post-thumbnail">
                    <img
                      src="/assets/images/blog/blog-single-1.jpg"
                      alt="Blog Image"
                    />
                  </div>
                  <div className="entry-content">
                    <div className="post-meta">
                      <ul>
                        <li>
                          <span>
                            <i className="ti-bookmark-alt" />
                            <a href="#">Tours &amp; Travel</a>
                          </span>
                        </li>
                        <li>
                          <span>
                            <i className="ti-comments-smiley" />
                            <a href="#">0 Comment</a>
                          </span>
                        </li>
                        <li>
                          <span>
                            <i className="ti-id-badge" />
                            <a href="#">By admin</a>
                          </span>
                        </li>
                        <li>
                          <span>
                            <i className="ti-calendar" />
                            <a href="#">02 Sep, 2021</a>
                          </span>
                        </li>
                      </ul>
                    </div>
                    <h3 className="title">Duis nonumer socios gem mattis</h3>
                    <p>
                      Penatibus cursus Luctus taciti nibheren congue
                      sollicitudin placerat an tempus turpis magnis tempus inte
                      vivamus rhoncus roin habitasse diam mattis vivamus per.
                      Neque nibh purus, donec taciti donec parturient Nec neque
                      facilisi etiam nibh urna taciti tortor auctor ullamcorper
                      ridiculus hendrerit duis accumsan iaculis elit per gravida
                      vel gravida magnis pretium hac litora eu molestie aptent.
                      Eget mollis vehicula cursus ate netus iaculis vel praesent
                      aliquam malesuada faucibus in{" "}
                      <span className="highlight">condimentum</span> egestas
                      vivamus quisque condimen tum purus dapibus accumsan fames
                      nisi dapibus ultrices velit urna. Enim fats etiam
                      elementum ipsum sem netus dapibus molestie dictum aenean.
                      Montes ridiculus bibendum malesuada cras nisi nibh
                      porttitor site facilisi lacinia consequat integer sed
                      mattis nec ultricies vulputate velit congue pede nceptos
                      elit vulputat metus suspendisse faller the sociology
                      nullam.
                    </p>
                    <p>
                      pretium hac litora eu{" "}
                      <span className="highlight">molestie</span> aptent. Eget
                      mollis vehicula cursus ated netus iaculis vel praesent
                      aliquam malesuada faucibus in condimentum egestas vivamus
                      quisque condimen drutum purus dapibus accumsan fames nisi
                      dapibus ultrices velit urna. Enim fats etiam elementum
                      ipsum sem netus dapibus fallen molestie dictum aenean.
                      Montes ridiculus{" "}
                      <span className="highlight">bibendum</span> malesuada cras
                      nis nibh porttitor site facilisi lacinia consequat integer
                      sed mattis nec ultricies vulputate velit congue pede
                      nceptos elit vulputat{" "}
                    </p>
                    <h4>Traveling is the spice of life</h4>
                    <p>
                      Suspendisse malesuada felis diam arcu sed velit nisi
                      auctor dolor tempor phasellus varius nisl elit donece
                      malesuada suscipit ide natoque commodo dictumst facilisi
                      risus vehicula iaculis dolor ener ligula bibendum
                      Dignissim, nunc vulputate. Fringilla porta conubia neque
                      eros lacinia hymenaeos dictumst placerat sed cum vivamus
                      tellus consequat magnis dis auctor hymenaeos turpis et
                      metus orci aliquet fermentum tincidunt parturient eget
                      montes convallis nunc lacus feugiat nonummy
                    </p>
                    <blockquote className="fioxen-blockquote text-center">
                      <img src="/assets/images/quote-1.png" alt="quote" />
                      <h5>
                        Eleifend metus commodo taciti purus dictum porttitor
                        etiam condimen blandit lacus libero tristique donec
                        ornarehac{" "}
                      </h5>
                      <h6>Emelie Marchent</h6>
                    </blockquote>
                    <p>
                      Malesuada felis diam arcu sed velit nisi auctor an dolor
                      tempor phasellus varius nisl elit donece malesuada
                      suscipit ide natoque commodo dictumst facilisi risus
                      vehicula iaculis dolor ener to ligula bibendum digniss
                      imergen from the nunc vulputate fringilla porta conubia
                      neque eros lacinia hymenaeos dictumst placerat sed cum
                      vivamus tellus consequat magnis dis auctor hymenaeos
                      turpis et metus orci th aliquet fermentum tincidunt
                      parturient eget montes convallis nunc lacus feugiat
                      nonummy sociis phasellus etiam auctor inte justo semper
                      volutpat mi morbi ornare ultrices vehicula augue
                      parturient placerat{" "}
                    </p>
                    <h4>We make dreams come true!</h4>
                    <p>
                      Ligula bibendum digniss imergen from the nunc vulputate
                      fringilla porta conubia neque eros lacinia hymenaeos
                      dictumst placerat sed cum vivamus tellus consequat magnis
                      dis auctor hymenaeos turpis et metus orci th aliquet
                      fermentum tincidunt parturient eget montes convallis nunc
                      lacus feugiat nonummy sociis phasellus etiam auctor inte
                      justo semper volutpat mi morbi ornare
                    </p>
                    <div className="content-img">
                      <img
                        src="/assets/images/blog/blog-single-2.jpg"
                        alt="Blog Image"
                      />
                    </div>
                    <p>
                      Consequat magnis dis auctor hymenaeos turpis et metus orci
                      th aliquet fermentum tincidunt parturient eget montes
                      convallis nunc lacus feugiat nonummy sociis phasellus
                      etiam auctor inte justo semper voluter pat mi morbi ornare
                      nunc{" "}
                    </p>
                    <ul className="list">
                      <li className="item">
                        Class Lorem convallis nibh quam te enim consectetuer
                        nunc nisi interdum mollis risu per ultricies nulla
                        nostra tortor primis libero elementum nunc pede enim
                      </li>
                      <li className="item">
                        Nnunc nisi interdum mollis risu per ultricies nulla
                        nostra tortor primis libero elementum nunc pede
                      </li>
                      <li className="item">
                        Adipiscing mattis dis risus rutrum feugiat maecenas nunc
                        nullam congue pe placerat potenti hendreri felis odio ad
                        dignissim posuere.
                      </li>
                    </ul>
                    <div className="post-tag">
                      <a href="#">Feature</a>
                      <a href="#">Tourism</a>
                      <a href="#">Job &amp; Feed</a>
                      <a href="#">Musemus</a>
                    </div>
                  </div>
                </div>
                <div className="post-navigation">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="prev-post post-nav-item">
                        <Link href="/blog/blog-post">
                          <a className="btn-link">Previous Post</a>
                        </Link>
                        <h5>
                          <Link href="/blog/blog-post">
                            <a>Felis feugiat tellus puruse dui lectus nisi</a>
                          </Link>
                        </h5>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="next-post post-nav-item">
                        <Link href="/blog/blog-post">
                          <a className="btn-link">Next Post</a>
                        </Link>
                        <h5>
                          <Link href="/blog/blog-post">
                            <a>dapibus luctus do gravida feugiat fermtum</a>
                          </Link>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="comments-area">
                  <h4 className="comments-title mb-35">Comment (2)</h4>
                  <ul className="comments-list">
                    <li className="comment">
                      <div className="comment-avatar">
                        <img
                          src="/assets/images/blog/comment-avatar-1.jpg"
                          alt="comment author one"
                        />
                      </div>
                      <div className="comment-wrap">
                        <div className="comment-author-content">
                          <span className="author-name">
                            Moriana Steve
                            <span className="date">Sep 02, 2021</span>
                          </span>
                          <p>
                            Musutrum orci montes hac at neque mollis taciti
                            parturient vehicula interdum verra cubilia ipsum
                            duis amet nullam sit ut ornare mattis urna.{" "}
                          </p>
                          <a href="#comment-respond" className="reply">
                            <i className="ti-share-alt" />
                            Reply
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="comment">
                      <div className="comment-avatar">
                        <img
                          src="/assets/images/blog/comment-avatar-2.jpg"
                          alt="comment author two"
                        />
                      </div>
                      <div className="comment-wrap">
                        <div className="comment-author-content">
                          <span className="author-name">
                            Richard Coleum
                            <span className="date">Sep 02, 2021</span>
                          </span>
                          <p>
                            Musutrum orci montes hac at neque mollis taciti
                            parturient vehicula interdum verra cubilia ipsum
                            duis amet nullam sit ut ornare mattis urna.{" "}
                          </p>
                          <a href="#comment-respond" className="reply">
                            <i className="ti-share-alt" /> Reply
                          </a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="comments-respond">
                  <h4 className="comments-heading mb-20">Write a Review</h4>
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="form_group">
                          <textarea
                            className="form_control"
                            name="message"
                            placeholder="Write Message"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form_group">
                          <input
                            type="text"
                            className="form_control"
                            placeholder="Full Name"
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
                            placeholder="Type your email"
                            name="email"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form_checkbox">
                          <div className="single-checkbox d-flex">
                            <input
                              type="checkbox"
                              id="check1"
                              name="checkbox"
                              defaultChecked=""
                            />
                            <label htmlFor="check1">
                              <span>
                                Save my name, email, and website in this browser
                                for the next time i comment.
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form_group">
                          <button className="main-btn">Submit Review</button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="sidebar-widget-area">
                <div className="widget search-widget mb-30 wow fadeInUp">
                  <h4 className="widget-title">Search</h4>
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="form_group">
                      <input
                        type="email"
                        className="form_control"
                        placeholder="Search..."
                        name="email"
                        required=""
                      />
                      <i className="ti-location-arrow" />
                    </div>
                  </form>
                </div>
                <div className="widget categories-widget mb-30 wow fadeInUp">
                  <h4 className="widget-title">Categories</h4>
                  <ul className="categories-nav">
                    <li>
                      <a href="#">
                        Restaurant <span>(10)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Museums <span>(12)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Business <span>(05)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Tour &amp; Travel <span>(10)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Uncategory <span>(03)</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="widget recent-post-widget mb-30 wow fadeInUp">
                  <h4 className="widget-title">Popular Post</h4>
                  <ul className="recent-post-list">
                    <li className="post-thumbnail-content">
                      <img
                        src="/assets/images/elements/thumb-1.jpg"
                        className="img-fluid"
                        alt=""
                      />
                      <div className="post-title-date">
                        <span className="posted-on">
                          <i className="ti-calendar" />
                          <a href="#">02 Sep - 2021</a>
                        </span>
                        <h6>
                          <Link href="/blog/blog-post">
                            <a>Inceptos pharetra accusan tusto scelerisque</a>
                          </Link>
                        </h6>
                      </div>
                    </li>
                    <li className="post-thumbnail-content">
                      <img
                        src="/assets/images/elements/thumb-2.jpg"
                        className="img-fluid"
                        alt=""
                      />
                      <div className="post-title-date">
                        <span className="posted-on">
                          <i className="ti-calendar" />
                          <a href="#">02 Sep - 2021</a>
                        </span>
                        <h6>
                          <Link href="/blog/blog-post">
                            <a>Inceptos pharetra accusan tusto scelerisque</a>
                          </Link>
                        </h6>
                      </div>
                    </li>
                    <li className="post-thumbnail-content">
                      <img
                        src="/assets/images/elements/thumb-3.jpg"
                        className="img-fluid"
                        alt=""
                      />
                      <div className="post-title-date">
                        <span className="posted-on">
                          <i className="ti-calendar" />
                          <a href="#">02 Sep - 2021</a>
                        </span>
                        <h6>
                          <Link href="/blog/blog-post">
                            <a>Inceptos pharetra accusan tusto scelerisque</a>
                          </Link>
                        </h6>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="widget add-widget mb-30 wow fadeInUp">
                  <div className="add-img-box">
                    <img
                      src="/assets/images/elements/add-1.jpg"
                      alt="Add Image"
                    />
                  </div>
                </div>
                <div className="widget tag-cloud-widget mb-30 wow fadeInUp">
                  <h4 className="widget-title">Popular Tag</h4>
                  <a href="#">Decor</a>
                  <a href="#">Love</a>
                  <a href="#">Trendy</a>
                  <a href="#">Interior</a>
                  <a href="#">Architect</a>
                  <a href="#">Feature</a>
                  <a href="#">Modern</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default BlogDetails;
