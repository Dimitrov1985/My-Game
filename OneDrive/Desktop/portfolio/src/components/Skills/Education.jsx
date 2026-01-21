
import Educations from '../../Data/Education';


const Education = () => {
  return (
    <div className="education">
      <h4 className="label">Education</h4>
      <ul className="education-list">

      {Educations.map((item, index) => (
        <li className='item' key={index}>
          <span className="year">{item.year}</span>
          <p>{item.degree} - {item.institution}</p>
        </li>
          
      ))}
      </ul>
    </div>
  );
};

export default Education;
