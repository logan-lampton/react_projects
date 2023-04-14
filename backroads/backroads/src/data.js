import image1 from "./images/tour-1.jpeg"
import image2 from "./images/tour-2.jpeg"
import image3 from "./images/tour-3.jpeg"
import image4 from "./images/tour-4.jpeg"

export const pageLinks = [
  {
    id: 1,
    href: "#home",
    text: "home",
  },
  {
    id: 2,
    href: "#about",
    text: "about",
  },
  {
    id: 3,
    href: "#services",
    text: "services",
  },
  {
    id: 4,
    href: "#tours",
    text: "tours",
  },
];

export const socialLinks = [
  {
    id: 1,
    href: "https://www.facebook.com",
    icon: "fab fa-facebook-f",
  },
  {
    id: 2,
    href: "https://www.twitter.com",
    icon: "fa-brands fa-twitter",
  },
  {
    id: 3,
    href: "https://www.squarespace.com",
    icon: "fa-brands fa-squarespace",
  },
];

export const services = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "endless hiking",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "amazing comfort",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
];

export const tours = [
  {
    id: 1,
    location: "Tibet Adventure",
    img: image1,
    date: "august 26th, 2020",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    country: "china",
    length: "6 days",
    price: "from $2100",
  },
  {
    id: 2,
    location: "best of java",
    img: image2,
    date: "october 1th, 2020",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    country: "indonesia",
    length: "11 days",
    price: "from $1400",
  },
  {
    id: 3,
    location: "explore hong kong",
    img: image3,
    date: "september 15th, 2020",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    country: "hong kong",
    length: "8 days",
    price: "from $5000",
  },
  {
    id: 4,
    location: "kenya highlights",
    img: image4,
    date: "december 5th, 2019",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    country: "kenya",
    length: "20 days",
    price: "from $3300",
  },
];
