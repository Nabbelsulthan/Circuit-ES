import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-left">
          <p>
            © {new Date().getFullYear()} Circuit ES. All Rights Reserved.
          </p>
        </div>

        <div className="footer-right">
          <p>
            Designed & Developed by{" "}
            <a
              href="https://www.linkedin.com/in/nabbel-sulthan-16a13827b/"
              target="_blank"
              rel="noreferrer"
            >
              Nabbel
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
}
