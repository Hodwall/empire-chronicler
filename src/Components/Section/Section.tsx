import './Section.css';
import Card from '../Card/Card.tsx'

const Section = () => {
  return (
    <div className="Section">
      <Card size="small" />
      <Card size="big" />
    </div>
  );
};

export default Section;