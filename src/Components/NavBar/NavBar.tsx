import { useState } from 'react';
import Drawer from '../Drawer/Drawer';
import './NavBar.css';


const NavBar = (props: {
  setSection: (s: string) => void
}) => {
  const [sectionId, setSectionId] = useState<string | null>(null);
  const section_ids = ['character', 'rules', 'magic', 'items', 'enemies', 'board'];

  const handleSetSectionIds = (id: string | null) => {
    if (id !== sectionId) {
      setSectionId(id);
    } else {
      setSectionId(null);
    }
  }

  return (
    <div className="NavBar">
      <div className="app-navigation">
        <div className="app-logo">EMPIRE'S CHRONICLER</div>
        <div className="app-sections">
          {
            section_ids.map((section, index) => {
              return (
                <div
                  key={index}
                  className={sectionId === section ? 'active' : ''}
                  onClick={() => handleSetSectionIds(section)}
                >
                  {section}
                </div>)
            })
          }
        </div>
      </div>
      {(sectionId !== null) && <Drawer sectionId={sectionId} setSection={props.setSection} />}
    </div>
  );
};

export default NavBar;