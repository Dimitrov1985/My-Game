import { useState } from "react";
import "./Contact.css";
import mapImg from "../../img/map.png";

export default function Contact() {
  const [form, setForm] = useState({
    first: "",
    last: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};

    if (!form.first.trim()) newErrors.first = "First name is required";
    if (!form.last.trim()) newErrors.last = "Last name is required";

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!form.message.trim()) newErrors.message = "Message cannot be empty";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      alert("Form submitted successfully!");
      console.log(form);
    }
  };

  return (
    <>
      <div className="container hero-contacts">
        <h1>Lorem Ipsum is simply dummy text of the printing and.</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <img src={mapImg} alt="Карта" />
      </div>

      <div className="feedback">
        <div className="container">
          <h2>Say hello</h2>
          <p>Lorem Ipsum is simply dummy text of the printing.</p>

          <form onSubmit={handleSubmit}>
            <div className="inline">
              <div>
                <label>First Name</label>
                <input
                  type="text"
                  name="first"
                  value={form.first}
                  onChange={handleChange}
                />
                {errors.first && <span className="error">{errors.first}</span>}
              </div>

              <div>
                <label>Last Name</label>
                <input
                  type="text"
                  name="last"
                  value={form.last}
                  onChange={handleChange}
                />
                {errors.last && <span className="error">{errors.last}</span>}
              </div>
            </div>

            <label>Email Address</label>
            <input
              type="email"
              name="email"
              className="one-line"
              value={form.email}
              onChange={handleChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}

            <label>Message</label>
            <textarea
              name="message"
              className="one-line"
              value={form.message}
              onChange={handleChange}
            ></textarea>
            {errors.message && <span className="error">{errors.message}</span>}

            <button type="submit">Get In Touch</button>
          </form>
        </div>
      </div>
    </>
  );
}