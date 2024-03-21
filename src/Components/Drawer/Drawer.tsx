import './Drawer.css';
type DrawerSectionsType = { [key: string]: JSX.Element };


const Drawer = (props: {
    sectionId: string,
    setSection: (s: string) => void
}) => {
    const drawer_sections: DrawerSectionsType = {
        'character': (
            <div>
                <div className="section-link" onClick={() => props.setSection('character')}>Classes and Careers</div>
                <div className="section-link" onClick={() => props.setSection('character')}>Skills and Talents</div>
            </div>
        ),
        'rules': (
            <div>
                <div className="section-link" onClick={() => props.setSection('rules')}>Rules</div>
                <div className="section-link" onClick={() => props.setSection('rules')}>Between adventures</div>
            </div>
        ),
        'magic': (
            <div>
                <div className="section-link" onClick={() => props.setSection('magic')}>Religion and belief</div>
                <div className="section-link" onClick={() => props.setSection('magic')}>Magic</div>
            </div>
        ),
        'items': (
            <div>
                <div className="section-link" onClick={() => props.setSection('items')}>The consumer's guide</div>
                <div className="section-link" onClick={() => props.setSection('weapons')}>Weapons</div>
                <div className="section-link" onClick={() => props.setSection('items')}>Armor</div>
            </div>
        ),
        'enemies': (
            <div>
                <div className="section-link" onClick={() => props.setSection('enemies')}>Bestiary</div>
                <div className="section-link" onClick={() => props.setSection('enemies')}>Enemy Traits</div>
            </div>
        ),
    }

    return (
        <div className="Drawer">
            {drawer_sections[props.sectionId]}
        </div>
    )
}

export default Drawer;