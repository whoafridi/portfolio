import React from "react";
import "./Blog.css";

export default function Blog() {
  return (
    <div class="container mt-5 mb-5" id="blogs">
      <h1
        class="header text-center h1 fw-bold"
        data-aos="fade-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
      >
        My Blogs
      </h1>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
          <div class="card card-group" 
            data-aos="fade-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
        >
            <div class="card-body text-center">
              <h5 class="card-title fw-bold">গিটহাব ফাইন্ডার পর্ব-১</h5>
              <h6 class="card-subtitle mb-2 text-muted">
                গিটহাব ফাইন্ডার কি ?
              </h6>
              <p class="card-text">
                তো কোনো কথা হবে না আজকে জাস্ট আমরা সিম্পল জাভাস্ক্রিপ্ট দিয়ে
                গিটহাব ফাইন্ডার বানাবো । এটা আসলে কি ?
              </p>
              <a
                href="https://whoafridi.github.io/github_part1/"
                target="_blank"
                class="btn btn-dark"
              >
                Read full
              </a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card card-group" 
            data-aos="fade-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
          >
            <div class="card-body text-center">
              <h5 class="card-title fw-bold">পাইথন দিয়ে একটুখানি গেম</h5>
              <h6 class="card-subtitle mb-2 text-muted">গেম কি ?</h6>
              <p class="card-text">
                এই পর্বে আমরা পাইথন দিয়ে একটি গেম তৈরি করার চেষ্টা করব । আপনারা
                অনেকেই হয়তো এই গেমটির সাথে পরিচিত ।
              </p>
              <a
                href="https://whoafridi.github.io/game/"
                target="_blank"
                class="btn btn-dark"
              >
                Read full
              </a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card card-group" 
            data-aos="fade-down"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
          >
            <div class="card-body text-center">
              <h5 class="card-title fw-bold">NAT কি ? খায় না মাথায় দেয়</h5>
              <h6 class="card-subtitle mb-2 text-muted">NAT কি ?</h6>
              <p class="card-text">
                NAT ওরফে নেটওয়ার্ক এড্রেস ট্রান্সলেশন । নাম শুনেই বুঝা যাচ্ছে
                এটি ট্রান্সলেট করে । কি ট্রান্সলেট করে ?{" "}
              </p>
              <a
                href="https://whoafridi.github.io/nat/"
                target="_blank"
                class="btn btn-dark"
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
