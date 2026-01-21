import {contactData} from '../../Data/ContactData'

const ContactLeft = () => {
  return (
    <div>
      <div className="contact-left">
                        <h2>Let's discuss your project</h2>
                        <ul className="contact-list">
                          {contactData.map(item =>(
                              <li key={item.id} className="contact-item">
                                <h3>
                                  <item.icon />{item.title}
                                </h3>
                                <span><a href={item.link}>{item.value}</a></span>
                            </li>
                           
                          ))}
                          
                        </ul>
                    </div>
    </div>
  )
}

export default ContactLeft
