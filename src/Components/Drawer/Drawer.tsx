import './Drawer.css';
type DrawerSectionsType = { [key: string]: JSX.Element };


const Drawer = (props: {
    sectionId: string,
    setSection: (s: string) => void
}) => {
    const drawer_sections: DrawerSectionsType = {
        'character': (
            <div>
                <div className="section-link" onClick={() => props.setSection('')}>Classes and Careers</div>
                <div className="section-link" onClick={() => props.setSection('')}>Skills and Talents</div>
            </div>
        ),
        'rules': (
            <div>
                <div className="section-link" onClick={() => props.setSection('')}>Rules</div>
                <div className="section-link" onClick={() => props.setSection('endeavours')}>Between adventures</div>
            </div>
        ),
        'magic': (
            <div>
                <div className="section-link" onClick={() => props.setSection('')}>Religion and belief</div>
                <div className="section-link" onClick={() => props.setSection('')}>Magic</div>
            </div>
        ),
        'items': (
            <div>
                <div className="section-link" onClick={() => props.setSection('')}>The consumer's guide</div>
                <div className="section-link" onClick={() => props.setSection('weapons')}>Weapons</div>
                <div className="section-link" onClick={() => props.setSection('')}>Armor</div>
            </div>
        ),
        'enemies': (
            <div>
                <div className="section-link" onClick={() => props.setSection('')}>Bestiary</div>
                <div className="section-link" onClick={() => props.setSection('')}>Enemy Traits</div>
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