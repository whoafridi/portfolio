import "./Blog.css";
import { Pagination } from "swiper";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";
import "swiper/modules/navigation/navigation.min.css";

// data section
const data = [
  {
    title: "গিটহাব ফাইন্ডার পর্ব-১",
    sub_title: "গিটহাব ফাইন্ডার কি ?",
    text: "তো কোনো কথা হবে না আজকে জাস্ট আমরা সিম্পল জাভাস্ক্রিপ্ট দিয়ে গিটহাব ফাইন্ডার বানাবো । এটা আসলে কি ?",
    url: "https://whoafridi.github.io/github_part1/",
  },
  {
    title: "Aiva Labs এ আমার ইন্টারভিউ প্রসেস",
    sub_title: "আমার ইন্টারভিউ প্রসেস",
    text: "Aiva Labs Inc. এ ফ্রন্ট-এন্ড ডেভেলপার হিসেবে আমার ইন্টারভিউ এক্সপেরিয়েন্স শেয়ার করব।",
    url: "https://whoafridi.github.io/interview_aiva_labs/",
  },
  {
    title: "পাইথন দিয়ে একটুখানি গেম",
    sub_title: "গেম কি ?",
    text: "এই পর্বে আমরা পাইথন দিয়ে একটি গেম তৈরি করার চেষ্টা করব । আপনারা অনেকেই হয়তো এই গেমটির সাথে পরিচিত ।",
    url: "https://whoafridi.github.io/game/",
  },
  {
    title: "ইনস্টল ছাড়াই পাইথন",
    sub_title: "পাইথন",
    text: "শিরোনাম দেখে বুঝে ফেলেছেন আজকে আমরা কোন কিছু install করা ছাড়াই পাইথন দিয়ে প্রোগ্রামিং শিখব ।",
    url: "https://whoafridi.github.io/py/",
  },
  {
    title: "NAT কি ? খায় না মাথায় দেয়",
    sub_title: "NAT কি ?",
    text: "NAT ওরফে নেটওয়ার্ক এড্রেস ট্রান্সলেশন । নাম শুনেই বুঝা যাচ্ছে এটি ট্রান্সলেট করে । কি ট্রান্সলেট করে ?",
    url: "https://whoafridi.github.io/nat/",
  },
  {
    title: "পাইথনের সাথে ডাটাবেজ",
    sub_title: "ডাটাবেজ",
    text: "আজকে আমরা পাইথন দিয়ে কিভাবে ডাটাবেজ এর সাথে কানেক্ট করা যায়।",
    url: "https://whoafridi.github.io/db/",
  },
];

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
      <Swiper
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className="my-swiper"
      >
        {data.map(({ title, sub_title, text, url }) => {
          return (
            <SwiperSlide>
              <div
                className=""
                data-aos="fade-right"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000"
              >
                <div className="text-center">
                  <h5 className="fw-bold">{title}</h5>
                  <h6 className="mb-2 text-muted">{sub_title}</h6>
                  <p className="mb-3 ">{text}</p>
                  <a
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    className="blog-btn mb-3 header-btn2"
                  >
                    Read full
                  </a>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
