import './Section.css';
import Weapons from '../../Pages/Weapons/Weapons.tsx';

const Section = (props: {
  searchBar: string,
  section: string,
}) => {

  let page: JSX.Element;
  switch (props.section) {
    case 'weapons':
      page = <Weapons searchBar={props.searchBar} />
      break;
    default:
      page = <div>{props.section}</div>
  }

  return (
    <div className="Section">
      {page}
    </div>
  );
};

export default Section;