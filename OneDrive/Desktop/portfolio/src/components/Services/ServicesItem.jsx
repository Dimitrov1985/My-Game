import {useState} from "react";

import { ImArrowRight2 } from "react-icons/im";
import ServicesModal from "./ServicesModal";


const ServicesItem = ({ services }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const openModal = index => {
        setModalOpen(index);    
    }
    const closeModal = () => {
        setModalOpen(false);
    }
  return (
    <>
    {services.map((item, index) => (
      <li className="services-container" key={index}>
        <div className="service-card">
            <item.icon className="service-icon"/>
            <h3>{item.title}</h3>
            <div className="learn-more-btn" onClick={() => openModal(index)}>
                Learn More
                <ImArrowRight2 className="learn-more-icon"/>
            </div>
        </div>
        <ServicesModal item={item} isActive={modalOpen === index} closeModal={closeModal} />
      </li>
    ))
    }
   </>
  )
}

export default ServicesItem
