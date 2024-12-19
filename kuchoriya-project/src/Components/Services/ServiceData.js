import backendIcon from "../../assests/MySQL_icon.png";
import database from "../../assests/database-storage.png";
import mobileIcon from "../../assests/IOS-icon.png";
import cms from "../../assests/content-management-system.png";
import devOps from "../../assests/devops.png";
import frontendIcon from "../../assests/react_js_icon.png";

const items = [
  {
    icon: mobileIcon,
    text: "Mobile Development",
    description: `We build functional and engaging web products for businesses in diverse industries. Our broad scope of technologies allows us to select the best-fit approach for your specific project. Our engineers create progressive web apps, AR-powered e-commerce stores, and more.`,
    technologies: [
      { name: "IOS" },
      { name: "Android" },
      { name: "Flutter" },
      { name: "Ionic" },
      { name: "React Native" },
      { name: "Xamarin" },
    ],
  },
  {
    icon: frontendIcon,
    text: "frontend",
    description: `Intellectsoft provides custom mobile development application services. Increase your sales and clients’ loyalty with a stable, interactive, and high-performance mobile app. Mobile App Development Services, iOS App Development Services, Android App Development Services, Hybrid App Development Services.`,
    technologies: [
      { name: "Angular Js" },
      { name: "Android" },
      { name: "ReactJs" },
      { name: "Typescript" },
      { name: "Bootstrap" },
      { name: "Vue" },
      { name: "HTML" },
      { name: "Kotlin" },
    ],
  },
  {
    icon: database,
    text: "Databse",
    description: `Intellectsoft provides custom mobile development application services. Increase your sales and clients’ loyalty with a stable, interactive, and high-performance mobile app. Mobile App Development Services, iOS App Development Services, Android App Development Services, Hybrid App Development Services.`,
    technologies: [
      { name: "Mongo db" },
      { name: "MySQL" },
      { name: "React Native" },
      { name: "Firebase" },
      { name: "AWS Daynamobd" },
      { name: "Realm" },
      { name: "Oracle" },
      { name: "Postgresql" },
      { name: "Redis" },
    ],
  },
  {
    icon: cms,
    text: "cms",
    description: `Intellectsoft provides custom mobile development application services. Increase your sales and clients’ loyalty with a stable, interactive, and high-performance mobile app. Mobile App Development Services, iOS App Development Services, Android App Development Services, Hybrid App Development Services.`,
    technologies: [
      { name: "Drupal" },
      { name: "MySQL" },
      { name: "Joomla" },
      { name: "Wordpress" },
      {
        name: "Magento",
        description:
          "A framework for building cross-platform mobile apps using web technologies.",
      },
      { name: "Shopify" },
      { name: "Mandix" },
    ],
  },
  {
    icon: backendIcon,
    text: "backend",
    description: `Intellectsoft provides custom mobile development application services. Increase your sales and clients’ loyalty with a stable, interactive, and high-performance mobile app. Mobile App Development Services, iOS App Development Services, Android App Development Services, Hybrid App Development Services.`,
    technologies: [
      { name: "PHP" },
      { name: "MySQL" },
      { name: "Java" },
      { name: "asp.Net" },
      { name: "Node Js" },
      { name: "Rails" },
      { name: "Python" },
    ],
  },
  {
    icon: devOps,
    text: "Infra & DevOps",
    description: `Intellectsoft provides custom mobile development application services. Increase your sales and clients’ loyalty with a stable, interactive, and high-performance mobile app. Mobile App Development Services, iOS App Development Services, Android App Development Services, Hybrid App Development Services.`,
    technologies: [
      { name: "AWS Cloud" },
      { name: "Google Cloud" },
      { name: "Gradle" },
      { name: "Jenkins" },
      { name: "Appium" },
      { name: "Selenium" },
    ],
  },
];

export default items; // Exporting the items array
