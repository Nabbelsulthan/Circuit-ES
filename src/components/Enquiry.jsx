import "./Enquiry.css";
import emailjs from "emailjs-com";

export default function Enquiry() {

  const sendWhatsApp = (form) => {
    const name = form.elements.name.value;
    const phone = form.elements.phone.value;
    const email = form.elements.email.value;
    const message = form.elements.message.value;

    const whatsappMessage = `
New Enquiry from Circuit ES Website

Name: ${name}
Phone: ${phone}
Email: ${email}
Message: ${message || "N/A"}
    `;

    const whatsappNumber = "919578584038";
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappURL, "_blank");

      form.reset();
  };

  const sendEmail = (form) => {
    emailjs
      .sendForm(
        "service_nf3vqx9",
        "template_sujmqxr",
        form,
        "MOZnzkgNphGRu6ODI"
      )
      .then(() => {
        alert("Email sent successfully!");
        form.reset();
      })
      .catch((error) => {
        console.error(error);
        alert("Email failed. Check EmailJS config.");
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="enquiry">
      <div className="enquiry-container">

        <form className="enquiry-form" onSubmit={handleSubmit}>
          <h2>FOR QUICK ENQUIRY</h2>

          <label>Name *</label>
          <input name="name" required />

          <label>Phone *</label>
          <input name="phone" required />

          <label>Email *</label>
          <input name="email" type="email" required />

          <label>Message</label>
          <textarea name="message"></textarea>

          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
            <button
              type="button"
              onClick={(e) => sendWhatsApp(e.target.form)}
            >
              SEND VIA WHATSAPP
            </button>

            <button
              type="button"
              onClick={(e) => sendEmail(e.target.form)}
            >
              SEND VIA EMAIL
            </button>
          </div>
        </form>

        {/* CONTACT INFO */}
        <div className="enquiry-info">
          <div className="info-block">
            <h4>Address</h4>
            <p>
              13/247, Kanavaipudur,<br />
              Omalur,<br />
              Salem – 636354<br />
              Tamil Nadu
            </p>
          </div>

          <div className="info-block">
            <h4>Phone</h4>
            <p>+91 80-72127505</p>
          </div>

          <div className="info-block">
            <h4>Email</h4>
            <p>info@circuitses.com</p>
          </div>
        </div>

      </div>
    </section>
  );
}
