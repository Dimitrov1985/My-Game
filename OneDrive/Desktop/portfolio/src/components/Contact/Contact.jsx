
import './Contact.css'
import ContactRight from './ContactRight'
import ContactLeft from './ContactLeft'
import SectionTitle from '../SectionTitle/SectionTitle'
const Contact = () => {
  return (
    <div>
        <section className="contact section" id="contact">
            <div className="container flex-center">
                <SectionTitle title="Contact Me" subtitle="Contact Me" />
                <div className="contact-wrapper">
                    <ContactLeft />
                    <ContactRight />

                    

                </div>
            </div>
        </section>
    </div>
  )
}

export default Contact
