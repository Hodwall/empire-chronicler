import './Section.css';
import Weapons from '../../Pages/Weapons/Weapons.tsx';
import Filterbutton from '../Filterbutton/Filterbutton.tsx';

const Section = () => {

  return (
    <div className="Section">
      <Filterbutton />
      <Weapons />
    </div>
  );
};

export default Section;