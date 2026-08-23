import { useState } from 'react'

function ContactForm() {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phone: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = new FormData()
    data.append('fullname', formData.fullname)
    data.append('email', formData.email)
    data.append('phone', formData.phone)
    data.append('message', formData.message)

    fetch('https://whitebricks.com/tsacademy.php', {
      method: 'POST',
      body: data
    }).then(() => setSubmitted(true))
  }

  return (
    <section id="contact" className="contact-section">
      <h2>Have Questions About Planetary Science?</h2>
      <p>Interested in learning more about space, astronomy, or how planetary data 
      is collected and analyzed? Reach out and we'll get back to you.</p>

      {submitted ? (
        <p className="success-message">Thank you! Your message has been sent successfully.</p>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <label>Full Name *</label>
              <input type="text" name="fullname" placeholder="Full name" 
                required onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Email *</label>
              <input type="email" name="email" placeholder="example@example.com" 
                required onChange={handleChange} />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Phone Number *</label>
              <input type="tel" name="phone" placeholder="Please enter a valid phone number." 
                required onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Message *</label>
              <textarea name="message" placeholder="Enter your message" 
                maxLength={100} required onChange={handleChange} />
              <small>100 characters</small>
            </div>
          </div>
          <button type="submit" className="btn-submit">Submit →</button>
        </form>
      )}
    </section>
  )
}

export default ContactForm