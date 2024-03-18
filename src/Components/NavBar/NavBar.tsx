import './NavBar.css';

const NavBar = (props: {
  setSearchBar: (query: string) => void;
}) => {

  const handleChange = (event: any) => {
    props.setSearchBar(event.target.value);
  }

  return (
    <div className="NavBar">
      <input onChange={handleChange} placeholder={`I'm looking for ...`} />
    </div>
  );
};

export default NavBar;