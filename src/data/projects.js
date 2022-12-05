import prodenti from '../images/projects/prodenti.png';
import career from '../images/projects/career.png';
import convention from '../images/projects/convention.png';
import bike from '../images/projects/bike.png';
import book from '../images/projects/bookarchive.png';
import courier from '../images/projects/courier.png';
import donate from '../images/projects/donate.png'
import food from '../images/projects/food.png';
import football from '../images/projects/football.png';
import github from '../images/projects/github.png';
import imdb from '../images/projects/imdb.png';
import mexa from '../images/projects/mexa.png';
import money from '../images/projects/moneymaster.png'
import pizza from '../images/projects/pizza.png';
import study from '../images/projects/studyshine.png';
import watch from '../images/projects/watch.png';
import weather from '../images/projects/weather.png';
import product from '../images/projects/product.png';

const projects = [
  {
    id: 1,
    projectName: "Pro-denti",
    category: "front-end",
    status: "featured",
    homePage:
    prodenti,
      // "https://user-images.githubusercontent.com/35966401/184550937-fe520a88-d2e1-47b9-8063-7e6527c81ae6.png",
      // "https://user-images.githubusercontent.com/35966401/184550914-0b14bafb-8e80-4f27-b7c0-79b6cabb78c1.png",
    websiteIndustry: "Health-care",
    websiteLink: "https://pro-denti.web.app/",
    gitClientSide:
      "https://github.com/whoafridi/ProDenti-healthcare-related-website",
    gitServerSide: "",
    apiLink:
      "https://github.com/whoafridi/Play-with-JavaScript/blob/master/services.json",
    technologies: [
      { name: "React JS" },
      { name: "Firebase" },
      { name: "React Bootstrap" },
    ],
    description: "ProDenti - a healthcare related website",
    images: [
      "https://user-images.githubusercontent.com/35966401/184550914-0b14bafb-8e80-4f27-b7c0-79b6cabb78c1.png",
      "https://user-images.githubusercontent.com/35966401/184585527-a7729936-0279-4e1d-b1aa-da8caa448360.png",
      "https://user-images.githubusercontent.com/35966401/184585408-d7bb5a94-ac3a-4d30-bb10-6c3b44a12de5.png",
      "https://user-images.githubusercontent.com/35966401/184585584-b3746bfd-ee2e-412f-89f2-bd0249bba219.png",
      "https://user-images.githubusercontent.com/35966401/184585568-61e6af2d-5e3a-4d03-af0f-4d95ee5eda37.png",
      "https://user-images.githubusercontent.com/35966401/184585596-ba55dc8b-6ef2-45ab-8539-574029e6ee46.png",
    ],
  },
  {
    id: 2,
    projectName: "Responsive football",
    category: "landing-page",
    status: "featured",
    homePage:
    football,
      // "https://user-images.githubusercontent.com/35966401/184551274-e86f73bd-bd6e-452c-832a-acee2a591a31.png",
      // "https://user-images.githubusercontent.com/35966401/130823922-cb07380e-cbce-455f-bb99-3a9fa393a30f.png",
    websiteIndustry: "Sports",
    websiteLink: "https://whoafridi.github.io/responsive_football/",
    gitClientSide: "https://github.com/whoafridi/responsive_football",
    gitServerSide: "",
    technologies: [{ name: "HTML5" }, { name: "CSS 3" }],
    description: "Responsive football is a football based landing page.",
    images: [
      "https://user-images.githubusercontent.com/35966401/130823922-cb07380e-cbce-455f-bb99-3a9fa393a30f.png",
    ],
  },
  {
    id: 3,
    projectName: "Bike Landing page",
    category: "landing-page",
    status: "common",
    homePage:
    bike,
      // "https://user-images.githubusercontent.com/35966401/184551399-343afc59-61eb-49d8-92b5-55b2112bcae7.png",
      // "https://user-images.githubusercontent.com/35966401/184551380-c3652d77-4e03-4541-a67f-ee46be8804f9.png",
    websiteIndustry: "Motor-cycle",
    websiteLink: "https://bike-hunt.netlify.app/",
    gitClientSide: "https://github.com/whoafridi/honda-cbr",
    gitServerSide: "",
    technologies: [
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "Bootstrap 5" },
    ],
    description: "A landing page for bike",
    images: [
      "https://user-images.githubusercontent.com/35966401/184551380-c3652d77-4e03-4541-a67f-ee46be8804f9.png",
    ],
  },
  {
    id: 4,
    projectName: "watchCommerce",
    category: "full-stack",
    status: "featured",
    homePage:
    watch,
      // "https://user-images.githubusercontent.com/35966401/184550947-2ba43e86-16f2-4c2b-ae51-7bea08e2acb2.png",
      // "https://user-images.githubusercontent.com/35966401/184550948-ceb92549-7020-46ce-9816-dd3b5b234222.png",
    websiteIndustry: "E-commerce",
    websiteLink: "https://e-commerce-fa971.web.app/",
    gitClientSide:
      "https://github.com/whoafridi/watchCommerce-watch-related-website",
    gitServerSide: "https://github.com/whoafridi/watchCommerce-server",
    technologies: [
      { name: "React.Js" },
      { name: "Node.js" },
      { name: "Express" },
      { name: "MongoDb" },
    ],
    description:
      "watchCommerce is a watch buy related website where people can order & buy thier watches whatever they want.",
    images: [
      "https://user-images.githubusercontent.com/35966401/184550948-ceb92549-7020-46ce-9816-dd3b5b234222.png",
      "https://user-images.githubusercontent.com/35966401/184550919-ac8af605-361b-4ac2-840e-16f8884dc30b.png",
      "https://user-images.githubusercontent.com/35966401/184550926-c1b29f1f-cb8f-4368-9090-5b6e4bd4c190.png",
      "https://user-images.githubusercontent.com/35966401/184550922-d6c0af93-61c1-49cf-a466-eba5e365e249.png",
      "https://user-images.githubusercontent.com/35966401/184550917-33379631-6279-4742-bf7a-6481190a35df.png",
    ],
  },
  {
    id: 5,
    projectName: "Food network",
    category: "landing-page",
    status: "featured",
    homePage:
    food,
      // "https://user-images.githubusercontent.com/35966401/184551178-59e29942-7438-491b-a02e-c39263655585.png",
      // "https://user-images.githubusercontent.com/35966401/184551722-9ba9d6e6-067b-4335-9365-aea54028788c.png",
    websiteIndustry: "Food",
    websiteLink: "https://whoafridi.github.io/food_network/",
    gitClientSide: "https://github.com/whoafridi/food_network",
    gitServerSide: "",
    technologies: [{ name: "HTML5" }, { name: "CSS3" }],
    description: "Food network",
    images: [
      "https://user-images.githubusercontent.com/35966401/184551722-9ba9d6e6-067b-4335-9365-aea54028788c.png",
    ],
  },
  {
    id: 6,
    projectName: "Pro-courier",
    category: "full-stack",
    status: "featured",
    homePage:
    courier,
      // "https://user-images.githubusercontent.com/35966401/184550931-c1692032-e16e-4a91-98be-162cdf3d49e0.png",
      // "https://user-images.githubusercontent.com/35966401/184550911-0ed85497-c6ad-455b-bf99-330bd11f6da1.png",
    websiteIndustry: "Courier",
    websiteLink: "https://pro-courier.web.app/",
    gitClientSide: "https://github.com/whoafridi/ProCourier-courier-services",
    gitServerSide: "https://github.com/whoafridi/ProCourier-server",
    technologies: [
      { name: "React.Js" },
      { name: "Node.js" },
      { name: "Express" },
      { name: "MongoDb" },
    ],
    description: "Pro-courier a courier based website",
    images: [
      "https://user-images.githubusercontent.com/35966401/184550911-0ed85497-c6ad-455b-bf99-330bd11f6da1.png",
      "https://user-images.githubusercontent.com/35966401/184589445-2852f743-1664-41f1-affb-218409fe370a.png",
      "https://user-images.githubusercontent.com/35966401/184589603-ff0d652a-f72d-4ba7-b1a2-bb9603a122f0.png",
      "https://user-images.githubusercontent.com/35966401/184589620-50cab648-fcc4-48e0-8d07-82cadf68b9d9.png",
      "https://user-images.githubusercontent.com/35966401/184589630-a6e32162-8a16-48b7-b919-1c05448d6e06.png",
    ],
  },
  {
    id: 7,
    projectName: "Weather app",
    category: "front-end",
    status: "common",
    homePage:
    weather,
      // "https://user-images.githubusercontent.com/35966401/162247576-67961fff-5c48-4a8c-9b73-4f754f9b2b14.png",
    websiteIndustry: "Weather",
    websiteLink: "",
    gitClientSide: "https://github.com/whoafridi/weather-app",
    gitServerSide: "",
    technologies: [
      { name: "React" },
      { name: "Typescript" },
      { name: "Material-UI" },
    ],
    description: "weather app using typescript",
    images: [],
  },
  {
    id: 8,
    projectName: "Github-user finder",
    category: "front-end",
    status: "common",
    homePage:
    github,
      // "https://raw.githubusercontent.com/whoafridi/Play-with-JavaScript/master/github_finder/images/github_desktop.png",
    websiteIndustry: "github",
    websiteLink: "",
    gitClientSide: "https://github.com/whoafridi/Github-user-finder",
    gitServerSide: "",
    technologies: [
      { name: "React" },
      { name: "Typescript" },
      { name: "Bootstrap 5" },
    ],
    description: "Github user finder - A github user finder using typescript",
    images: [],
  },
  {
    id: 9,
    projectName: "Online-pizza shop",
    category: "full-stack",
    status: "common",
    homePage:
    pizza,
      // "https://user-images.githubusercontent.com/35966401/186608854-84ee3eef-080a-4546-97c2-5f99c6677ef6.png",
      // "https://user-images.githubusercontent.com/35966401/186609158-7cd9d31e-0cb7-4583-966c-e40ea7a5f195.png",
    websiteIndustry: "pizza shop",
    websiteLink: "https://1pizza-shop.netlify.app/",
    gitClientSide: "https://github.com/whoafridi/online-pizza-shop",
    gitServerSide: "",
    technologies: [
      { name: "React.js" },
      { name: "Redux" },
      { name: "Express.js" },
      { name: "MongoDB" },
      { name: "Payment (stripe)" },
    ],
    description: "A online pizza delivery shop for order & deliver pizza.",
    images: [
      "https://user-images.githubusercontent.com/35966401/186609158-7cd9d31e-0cb7-4583-966c-e40ea7a5f195.png",
    ],
  },
  {
    id: 10,
    projectName: "Book archive",
    category: "others",
    status: "common",
    homePage:
    book,
      // "https://user-images.githubusercontent.com/35966401/186629516-1c2e1a7f-d24c-4f29-bab3-cfb8164d04ff.png",
      // "https://user-images.githubusercontent.com/35966401/186629516-1c2e1a7f-d24c-4f29-bab3-cfb8164d04ff.png",
    websiteIndustry: "others",
    websiteLink: "https://api-book.netlify.app/",
    gitClientSide: "https://github.com/whoafridi/book-archive",
    gitServerSide: "",
    technologies: [{ name: "HTML5" }, { name: "CSS3" }, { name: "Javascript" }],
    description: "book-archive - book search API using javascript",
    images: [
      "https://user-images.githubusercontent.com/35966401/186629516-1c2e1a7f-d24c-4f29-bab3-cfb8164d04ff.png",
    ],
  },
  {
    id: 11,
    projectName: "Money master",
    category: "others",
    status: "common",
    homePage:
    money,
      // "https://user-images.githubusercontent.com/35966401/186618684-17addb52-efea-4794-bb5d-1b90da534fc7.png",
      // "https://user-images.githubusercontent.com/35966401/186617972-0af447ab-006a-46f3-8c1f-39aeed23ebb2.png",
    websiteIndustry: "others",
    websiteLink: "",
    gitClientSide:
      "https://github.com/whoafridi/Play-with-JavaScript/tree/master/money-master-js",
    gitServerSide: "",
    technologies: [{ name: "HTML5" }, { name: "CSS3" }, { name: "Javascript" }],
    description: "money master an web app for manage daily expenses",
    images: [
      "https://user-images.githubusercontent.com/35966401/186617972-0af447ab-006a-46f3-8c1f-39aeed23ebb2.png",
    ],
  },
  {
    id: 12,
    projectName: "Study shine",
    category: "landing-page",
    status: "common",
    homePage:
    study,
      // "https://user-images.githubusercontent.com/35966401/186620318-87696fe8-70a2-47eb-aef7-c1ff644f07a5.png",
      // "https://user-images.githubusercontent.com/35966401/186620724-950bdec2-656c-424e-a2d4-6e1259098d4a.png",
    websiteIndustry: "",
    websiteLink: "",
    gitClientSide:
      "https://github.com/whoafridi/Play-with-JavaScript/tree/master/Study-Shine",
    gitServerSide: "",
    technologies: [
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "Bootstrap 5" },
    ],
    description:
      "study shine is a landing page for study related maerials & courses.",
    images: [
      "https://user-images.githubusercontent.com/35966401/186620724-950bdec2-656c-424e-a2d4-6e1259098d4a.png",
    ],
  },
  {
    id: 13,
    projectName: "IMDB clone",
    category: "landing-page",
    status: "common",
    homePage:
    imdb,
      // "https://user-images.githubusercontent.com/35966401/186867809-47bf2f88-36bb-4e91-848f-37018be0f3d1.png",
      // "https://user-images.githubusercontent.com/35966401/186867837-a63f9782-801c-4914-ad5f-faa11c0ef4a4.png",
    websiteIndustry: "other",
    websiteLink: "",
    gitClientSide:
      "https://github.com/whoafridi/Play-with-JavaScript/tree/master/imdb-clone-html-css",
    gitServerSide: "",
    technologies: [{ name: "HTML5" }, { name: "CSS3" }],
    description: "a landing page for IMDB website front page",
    images: [
      "https://user-images.githubusercontent.com/35966401/186867837-a63f9782-801c-4914-ad5f-faa11c0ef4a4.png",
    ],
  },
  {
    id: 14,
    projectName: "Convention center",
    category: "landing-page",
    status: "common",
    homePage:
    convention,
      // "https://user-images.githubusercontent.com/35966401/186861029-7b9921b9-bd34-4c1c-a5c8-9c71c6eaf60d.png",
      // "https://user-images.githubusercontent.com/35966401/186860946-bae9685f-f69f-46f1-8f31-c5da02a999be.png",
    websiteIndustry: "other",
    websiteLink: "",
    gitClientSide:
      "https://github.com/whoafridi/Play-with-JavaScript/tree/master/Convention-Center",
    gitServerSide: "",
    technologies: [
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "Bootstrap 5" },
    ],
    description: "a landing page for convention center",
    images: [
      "https://user-images.githubusercontent.com/35966401/186860946-bae9685f-f69f-46f1-8f31-c5da02a999be.png",
    ],
  },
  {
    id: 15,
    projectName: "Donate today",
    category: "landing-page",
    status: "common",
    homePage:
    donate,
      // "https://user-images.githubusercontent.com/35966401/186867187-e86f1374-d3f0-4fa8-83c4-09b88d26e8ed.png",
      // "https://user-images.githubusercontent.com/35966401/186867162-c65ee668-14b8-4003-8bb4-561aa5279d90.png",
    websiteIndustry: "other",
    websiteLink: "",
    gitClientSide:
      "https://github.com/whoafridi/Play-with-JavaScript/tree/master/donate-today",
    gitServerSide: "",
    technologies: [{ name: "HTML5" }, { name: "CSS3" }],
    description: "a landing page for donation based website",
    images: [
      "https://user-images.githubusercontent.com/35966401/186867162-c65ee668-14b8-4003-8bb4-561aa5279d90.png",
    ],
  },
  {
    id: 16,
    projectName: "Career Track",
    category: "front-end",
    status: "featured",
    homePage:
    career,
      // "https://user-images.githubusercontent.com/35966401/188271326-1ce406ee-e9f1-43b7-a0e0-5fe00665d807.png",
    websiteIndustry: "Career track",
    websiteLink: "https://careertrack.netlify.app/",
    gitClientSide: "https://github.com/whoafridi/Career-tracker",
    gitServerSide: "",
    apiLink: "",
    technologies: [
      { name: "React JS" },
      { name: "Firebase" },
      { name: "React Bootstrap" },
    ],
    description:
      "Career Tracking Coach (an independent service provider website)",
    images: [
      "https://user-images.githubusercontent.com/35966401/188271326-1ce406ee-e9f1-43b7-a0e0-5fe00665d807.png",
    ],
  },
  {
    id: 17,
    projectName: "Mexa",
    category: "others",
    status: "common",
    homePage:
    mexa,
      // "https://user-images.githubusercontent.com/35966401/188906045-398bd74f-3757-4f53-84a9-b2f0f52b3a19.png",
    websiteIndustry: "Others",
    websiteLink: "",
    gitClientSide: "",
    gitServerSide: "",
    apiLink: "",
    technologies: [{ name: "Wordpress" }, { name: "Elementor" }],
    description:
      "Mexa a landing page built with elementor pro page builder powered by wordpress",
    images: [""],
  },
  {
    id: 18,
    projectName: "ProductUrl",
    category: "others",
    status: "common",
    homePage:
    product,
      // "https://user-images.githubusercontent.com/35966401/188906045-398bd74f-3757-4f53-84a9-b2f0f52b3a19.png",
    websiteIndustry: "Others",
    websiteLink: "",
    gitClientSide: "",
    gitServerSide: "",
    apiLink: "",
    technologies: [{ name: "Shopify" }, { name: "Debut theme" }],
    description:
      "ProductUrl a landing page built with Debut theme on top of Shopify",
    images: [""],
  },
];

export default projects;
