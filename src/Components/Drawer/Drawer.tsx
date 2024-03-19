import './Drawer.css';


const Drawer = (props: {
  setSection: (s: string) => void
}) => {
  const sections = [
    { id: 'board', label: 'Board' },
    { id: 'classes', label: 'Classes and Careers' },
    { id: 'skills', label: 'skills and talents' },
    { id: 'rules', label: 'Rules' },
    { id: 'adventures', label: 'Between adventures' },
    { id: 'religion', label: 'Religion and belief' },
    { id: 'magic', label: 'Magic' },
    { id: 'consumer', label: 'The consumer\'s guide' },
    { id: 'bestiary', label: 'Bestiary' },
    { id: 'weapons', label: 'Weapons' },
  ]
  return (
    <div className="Drawer">
      <div>EMPIRE'S CHRONICLER</div>
      <ul>
        {
          sections.map((section, index) => {
            return <li key={index} onClick={() => props.setSection(section.id)}>{section.label}</li>
          })
        }
      </ul>
    </div>
  );
};

export default Drawer;