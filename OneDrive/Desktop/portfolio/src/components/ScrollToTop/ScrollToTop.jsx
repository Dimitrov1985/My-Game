import "./ScrollToTop.css"
import { useState, useEffect } from "react"
import { FaArrowUp } from "react-icons/fa6";
const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const handleScroll = () => {
        setIsVisible(window.scrollY > 300);
    }

    useEffect(()=>{
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    },[])
    const scrollTop = () => {
        window.scrollTo({top:0, behavior:'smooth'});
    }

  return (
    <div>
       <button onClick={scrollTop} 
       className={`btn scrollToTop flex-center ${isVisible ? 'active' : ''}`}>
        <FaArrowUp />
    </button>
    </div>
  )
}

export default ScrollToTop
