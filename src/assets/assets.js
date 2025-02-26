import logoImg from "./logo-final.png";
import footerLogo from "./footerLogo.jpeg";
import heroImg from "./hero-img.jpeg";
import bgImg from "./bg.png";
import galleryImg from "./gallery.png";
import image1 from "./image-1.jpeg";
import image2 from "./image-2.jpeg";
import image3 from "./image-3.jpeg";
import image4 from "./image-4.jpeg";
import image7 from "./image-7.jpeg";
import image8 from "./image-8.jpeg";
import image9 from "./image-9.jpeg";
import image11 from "./image-11.jpeg";
import team1 from "./team-1.jpg";
import team2 from "./team-2.jpg";
import team3 from "./team-3.jpg";
import team4 from "./team-4.jpg";
import team5 from "./team-5.jpg";
import newImg1 from "./new-img-1.jpg";
import newImg2 from "./new-img-2.jpg";
import newImg3 from "./new-img-3.jpg";
import newImg4 from "./new-img-4.jpg";
import newImg5 from "./new-img-5.jpg";
import newImg6 from "./new-img-6.jpg";
import newImg7 from "./new-img-7.jpg";
import newImg8 from "./new-img-8.jpg";
import newImg9 from "./new-img-9.jpg";
import newImg10 from "./new-img-10.jpg";
import paintImg1  from  './new-paint.jpg'
import paintImg2  from  './new-paint-2.jpg'

export const assets = {
  paintImg1,
  paintImg2,
  footerLogo,
  logoImg,
  galleryImg,
  heroImg,
  team1,
  team2,
  team3,
  team4,
  team5,
  bgImg,
  image1,
  image2,
  image3,
  image4,
  image7,
  image8,
  image9,
  image11,
  newImg1,
  newImg2,
  newImg3,
  newImg4,
  newImg5,
  newImg6,
  newImg7,
  newImg8,
  newImg9,
  newImg10,
};

export const mission = [
  {
    title: "Our Mission",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae in neque laudantium eligendi maxime, nemo incidunt, ea enim odio doloribus optio expedita atque saepe minima nam voluptatibus placeat alias soluta? Reiciendis quasi nostrum sint fugit earum culpa ullam libero impedit.",
  },
  {
    title: "Our Vision",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae in neque laudantium eligendi maxime, nemo incidunt, ea enim odio doloribus optio expedita atque saepe minima nam voluptatibus placeat alias soluta? Reiciendis quasi nostrum sint fugit earum culpa ullam libero impedit.",
  },
];

export const teams = [
  {
    name: "Derrick Gawu",
    image: assets.team1,
    position: "Executive Director/Founder",
  },
  {
    name: "Wisdom Zaga",
    image: assets.team2,
    position: "Director of Operations",
  },
  {
    name: "Angela Gawu",
    image: assets.team4,
    position: "Patron",
  },

  {
    name: "Francisca Kwakye",
    image: assets.team3,
    position: "Secretary",
  },
  {
    name: "Enoch Adjetey",
    image: assets.team5,
    position: "Managing Director",
  },
];

export const imageData = [
  { id: 1, url: assets.image1},
  { id: 2, url: assets.image2 },
  { id: 3, url:  assets.image3},
  { id: 4, url:  assets.image4 },
  { id: 5, url: assets.newImg1},
  { id: 6, url:  assets.image7 },
  { id: 7, url:  assets.image8 },
  { id: 8, url:  assets.image9 },
  { id: 9, url:  assets.image11 },
  { id: 10, url:  assets.newImg2 },
  { id: 11, url:  assets.newImg3 },
  { id: 12, url:  assets.newImg4 },
  { id: 13, url:  assets.newImg5 },
  { id: 14, url:  assets.newImg6 },
  { id: 15, url:  assets.newImg7 },
  { id: 16, url:  assets.newImg8 },
  { id: 17, url:  assets.newImg9 },
  { id: 18, url:  assets.newImg10 }
 
];


export const projects = [
  {
    title: "Community Clean-Up Drive",
    description: "A successful event where volunteers cleaned local parks.",
    imageUrl: assets.paintImg1,
  },
  {
    title: "Food Drive for Families",
    description: "Providing food and supplies to families in need.",
    imageUrl: assets.image4,
  }
];

export const projectsItems = [
  {
    id: 1,
    title: "Community Outreach Program",
    description:
      "Providing essential resources to underserved communities through various initiatives.",
    image:assets.newImg4,
  },
  {
    id: 2,
    title: "Educational Support Initiative",
    description:
      "Empowering students with scholarships, school supplies, and mentorship programs.",
    image: assets.newImg6,
  },
  {
    id: 3,
    title: "Healthcare Assistance Project",
    description:
      "Offering medical aid, free checkups, and support for those in need.",
    image: assets.newImg9,
  },
];


export const eventsData = [
  {
    id: 1,
    title: "Charity Walk for Education",
    date: "March 10, 2025",
    location: "Accra, Ghana",
    description: "Join us in a charity walk to raise funds for underprivileged children’s education.",
    category: "Education",
    image: assets.image4,
  },
  {
    id: 2,
    title: "Health Outreach Program",
    date: "April 15, 2025",
    location: "Kumasi, Ghana",
    description: "A free medical checkup and health awareness campaign for the community.",
    category: "Health",
    image: assets.image8,
  },
  {
    id: 3,
    title: "Food Donation Drive",
    date: "May 5, 2025",
    location: "Tamale, Ghana",
    description: "Providing food supplies to low-income families and individuals.",
    category: "Food",
    image: assets.image9,
  },
];
