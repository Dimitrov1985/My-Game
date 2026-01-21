// import './PortfolioItem'
import PortfolioData from "/src/Data/PortfolioData.js";

import './Portfolio.css'
import SectionTitle from '../SectionTitle/SectionTitle'
import PortfolioItem from './PortfolioItem'


const Portfolio = () => {
  return (
    <>
        <section className="portfolio section" id="portfolio">
            <div className="container flex-center">
              <SectionTitle title="Portfolio" subtitle="Portfolio"/>
                
                <div className="portfolio-wrapper">

                  {PortfolioData.map(item =>{
                    return <PortfolioItem key={item.id} item={item}/>
                  })}
                </div>
            </div>
        </section>
    </>
  )
}

export default Portfolio
