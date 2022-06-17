import React from "react";
import "./Blog.css";

export default function Blog() {
  return (
    <div className="container mt-5 mb-5" id="blogs">
      <h1
        className="header text-center h1 fw-bold"
        data-aos="fade-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
      >
        My Blogs
      </h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div
            className="card card-group"
            data-aos="fade-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
          >
            <div className="card-body text-center">
              <h5 className="card-title fw-bold">গিটহাব ফাইন্ডার পর্ব-১</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                গিটহাব ফাইন্ডার কি ?
              </h6>
              <p className="card-text mb-3 ">
                তো কোনো কথা হবে না আজকে জাস্ট আমরা সিম্পল জাভাস্ক্রিপ্ট দিয়ে
                গিটহাব ফাইন্ডার বানাবো । এটা আসলে কি ?
              </p>
              <a
                href="https://whoafridi.github.io/github_part1/"
                target="_blank" rel="noreferrer"
                className="blog-btn mb-3 "
              >
                Read full
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div
            className="card card-group"
            data-aos="fade-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
          >
            <div className="card-body text-center">
              <h5 className="card-title fw-bold">
                Aiva Labs এ আমার ইন্টারভিউ প্রসেস
              </h5>
              <h6 className="card-subtitle mb-2 text-muted">
                আমার ইন্টারভিউ প্রসেস
              </h6>
              <p className="card-text mb-3 ">
                আজকে আমি আপনাদের সবার সাথে Aiva Labs Inc. এ ফ্রন্ট-এন্ড ডেভেলপার
                হিসেবে আমার ইন্টারভিউ এক্সপেরিয়েন্স শেয়ার করব।
              </p>
              <a
                href="https://whoafridi.github.io/interview_aiva_labs/"
                target="_blank" rel="noreferrer"
                className="blog-btn mb-3 "
              >
                Read full
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div
            className="card card-group"
            data-aos="fade-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
          >
            <div className="card-body text-center">
              <h5 className="card-title fw-bold">পাইথন দিয়ে একটুখানি গেম</h5>
              <h6 className="card-subtitle mb-2 text-muted">গেম কি ?</h6>
              <p className="card-text mb-3 ">
                এই পর্বে আমরা পাইথন দিয়ে একটি গেম তৈরি করার চেষ্টা করব । আপনারা
                অনেকেই হয়তো এই গেমটির সাথে পরিচিত ।
              </p>
              <a
                href="https://whoafridi.github.io/game/"
                target="_blank" rel="noreferrer"
                className="blog-btn mb-3 "
              >
                Read full
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div
            className="card card-group"
            data-aos="fade-down"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
          >
            <div className="card-body text-center">
              <h5 className="card-title fw-bold">NAT কি ? খায় না মাথায় দেয়</h5>
              <h6 className="card-subtitle mb-2 text-muted">NAT কি ?</h6>
              <p className="card-text mb-3 ">
                NAT ওরফে নেটওয়ার্ক এড্রেস ট্রান্সলেশন । নাম শুনেই বুঝা যাচ্ছে
                এটি ট্রান্সলেট করে । কি ট্রান্সলেট করে ?{" "}
              </p>
              <a
                href="https://whoafridi.github.io/nat/"
                target="_blank" rel="noreferrer"
                className="blog-btn mb-3  "
              >
                Read full
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div
            className="card card-group"
            data-aos="fade-down"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
          >
            <div className="card-body text-center">
              <h5 className="card-title fw-bold">ইনস্টল ছাড়াই পাইথন</h5>
              <h6 className="card-subtitle mb-2 text-muted"> পাইথন</h6>
              <p className="card-text mb-3 ">
                শিরোনাম দেখে বুঝে ফেলেছেন আজকে আমরা কোন কিছু install করা ছাড়াই
                পাইথন দিয়ে প্রোগ্রামিং শিখব ।
              </p>
              <a
                href="https://whoafridi.github.io/py/"
                target="_blank" rel="noreferrer"
                className="blog-btn mb-3  "
              >
                Read full
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div
            className="card card-group"
            data-aos="fade-down"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
          >
            <div className="card-body text-center">
              <h5 className="card-title fw-bold">পাইথনের সাথে ডাটাবেজ</h5>
              <h6 className="card-subtitle mb-2 text-muted"> ডাটাবেজ</h6>
              <p className="card-text mb-3 ">
                আজকে আমরা পাইথন দিয়ে কিভাবে ডাটাবেজ এর সাথে কানেক্ট করা যায়।
              </p>
              <a
                href="https://whoafridi.github.io/db/"
                target="_blank" rel="noreferrer"
                className="blog-btn mb-3  "
              >
                Read full
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
