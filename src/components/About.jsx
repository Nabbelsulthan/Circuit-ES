import "./About.css";
import about from "../assets/about.png";

export default function About() {
  return (
    <div className="about">
      <h1>ABOUT US</h1>

      <div className="about-content">
        <img className="about-img" src={about} alt="About-us" />

        <p>A Brief Story About The Company</p>

        <span>
          Founded in 2024, Circuites specializes in manufacturing and supplying
          Electrical and Electronic Systems for industries, institutions, and
          domestic buildings. We continuously expand our product range to meet
          customer needs with quality, reliability, and satisfaction.
        </span>

        <p>Our Message</p>

        <span>
          We value strong partnerships with customers, suppliers, and employees
          Flexibility, passion, and a challenging mindset drive our excellence
        </span>
      </div>
    </div>
  );
}
