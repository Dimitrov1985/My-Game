import { FaPhone, FaEnvelope, FaLocationDot  } from "react-icons/fa6";

export const contactData = [
{
    id: 1,
    icon: FaPhone,
    title: "Phone Number",
    value: "+123 456 7890",
    link: "tel:+1234567890",
},{
    id: 2,
    icon: FaEnvelope,
    title: "Email Address",
    value: "jekadi@example.com",
    link: "mailto:jekadi@example.com"
},
{
    id: 3,
    icon: FaLocationDot,
    title: "Official Address",
    value: "123 Main Street, City, Country",
    link: "https://maps.google.com/?q=123+Main+Street,+City,+Country"
},
]