import './Home.css'
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaCircleArrowRight, FaArrowDownLong } from "react-icons/fa6";


import {mainImg} from '../../assets/images' // Adjust the path as necessary to point to your
import { motion } from 'framer-motion';

import { iconVariants, motionVariants, imgVariants } from '../../Utils/Animations';

const icons = [
    {
        id: 1,
        href: "",
        icon: <FaFacebookF />
    },
    {
        id: 2,
        href: "",
        icon: <FaInstagram />
    },
    {
        id: 3,
        href: "",
        icon: <FaGithub />
    }
];

const Home = () => {
  return (
    <section className="home" id="home">
            <div className="container home-wrapper">
                <div className="media-icons">
                    {icons.map((item, index) => (
                        <motion.a 
                        href={item.href} 
                        key={item.id} 
                        custom={2}
                        variants={iconVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once:false, amount: 0.5}}>
                        {item.icon}
                         </motion.a>
                    ))}
                    
                   
                </div>
                <div className="home-info">
                    <motion.h1
                    initial="hidden"
                    custom={0}
                    variants={motionVariants}
                    whileInView="visible"
                    viewport={{once:false, amount: 0.5}}
                    >Hi, I am Ilay</motion.h1>
                    <motion.h3
                    initial="hidden"
                    custom={1}
                    variants={motionVariants}
                    whileInView="visible"
                    viewport={{once:false, amount: 0.5}}
                    >Front-end Developer</motion.h3>
                    <motion.p
                    initial="hidden"
                    custom={2}
                    variants={motionVariants}
                    whileInView="visible"
                    viewport={{once:false, amount: 0.5}}
                    >I create stunning websites for your business, Highly experienced in web design and development</motion.p>
                    <motion.a href="" className="home-info-link inner-info-link"
                   initial="hidden"
                    custom={3}
                    variants={motionVariants}
                    whileInView="visible"
                    viewport={{once:false, amount: 0.5}}>
                        Contact me
                        <FaCircleArrowRight />
                    </motion.a>
                </div>
                <div className="home-img">
                    <motion.img 
                    src={mainImg} 
                    alt="man"
                    initial="hidden"
                    variants={imgVariants}
                    whileInView="visible"
                    viewport={{once:false, amount: 0.5}}
                    ></motion.img>
                </div>
            </div>
            <a href="#about" className="scroll-down">
                Scroll down
                <FaArrowDownLong />
            </a>
        </section>
  )
}

export default Home
