import "./Enquiry.css";
import emailjs from "emailjs-com";
import { useState } from "react";


export default function Enquiry() {

    const [loading, setLoading] = useState(false);
    const [snackbar, setSnackbar] = useState({
        show: false,
        message: "",
        type: "", // success | error
    });




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

    // const sendEmail = (form) => {
    //     emailjs
    //         .sendForm(
    //             "service_nf3vqx9",
    //             "template_sujmqxr",
    //             form,
    //             "MOZnzkgNphGRu6ODI"
    //         )
    //         .then(() => {
    //             alert("Enquiry sent successfully!");
    //             form.reset();
    //         })
    //         .catch((error) => {
    //             console.error(error);
    //             alert("Email failed. Please try again.");
    //         });
    // };



    const sendEmail = (form) => {
        setLoading(true);

        emailjs
            .sendForm(
                "service_nf3vqx9",
                "template_sujmqxr",
                form,
                "MOZnzkgNphGRu6ODI"
            )
            .then(() => {
                setSnackbar({
                    show: true,
                    message: "Enquiry sent successfully!",
                    type: "success",
                });

                form.reset();
            })
            .catch((error) => {
                console.error(error);

                setSnackbar({
                    show: true,
                    message: "Email failed. Please try again.",
                    type: "error",
                });
            })
            .finally(() => {
                setLoading(false);

                setTimeout(() => {
                    setSnackbar({ show: false, message: "", type: "" });
                }, 3000);
            });
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;


        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        const action = form.dataset.action;

        if (action === "whatsapp") {
            sendWhatsApp(form);
        }

        if (action === "email") {
            sendEmail(form);
        }
    };

    return (

        <section className="enquiry">

            {snackbar.show && (
                <div className={`snackbar ${snackbar.type}`}>
                    {snackbar.message}
                </div>
            )}

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
                            type="submit"
                            onClick={(e) => (e.target.form.dataset.action = "whatsapp")}
                        >
                            SEND VIA WHATSAPP
                        </button>

                        {/* <button
                            type="submit"
                            onClick={(e) => (e.target.form.dataset.action = "email")}
                        >
                            SEND VIA EMAIL
                        </button> */}

                        <button
                            type="submit"
                            disabled={loading}
                            onClick={(e) => (e.target.form.dataset.action = "email")}
                        >
                            {loading ? "SENDING..." : "SEND VIA EMAIL"}
                        </button>

                    </div>
                </form>

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
