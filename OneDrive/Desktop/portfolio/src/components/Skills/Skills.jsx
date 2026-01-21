import React from 'react'
import { skills } from '../../Data/skills'

const Skills = () => {
  return (
    <div>
      <div className="education">
                            <h4 className="label">Skills</h4>
                            <ul className="bars">
                              {skills.map((item, index) =>(
                                <li className="bar" key={index}>
                                    <div className="info">
                                        <span>{item.skills}</span>
                                        <span>{item.level}</span>
                                    </div>
                                    <div className="line html"></div>
                                </li>

                              ))}
                               
                            </ul>
                        </div>
    </div>
  )
}

export default Skills
