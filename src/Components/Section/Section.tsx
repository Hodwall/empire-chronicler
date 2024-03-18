import './Section.css';
import Weapons from '../../Pages/Weapons/Weapons.tsx';

const Section = (props: {
  searchBar: string
}) => {
  return (
    <div className="Section">
      <Weapons searchBar={props.searchBar} />
    </div>
  );
};

export default Section;