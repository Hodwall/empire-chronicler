import './SearchBar.css';


const SearchBar = (props: {
  setSearchBar: (query: string) => void,
  section: string | null,
  setSection: (query: string | null) => void
}) => {

  const handleChange = (event: any) => {
    props.setSearchBar(event.target.value);
  }

  return (
    <div className="SearchBar">
      {
        props.section !== null && (
          <div className='section-title'>
            <span>{props.section}</span>
            <button onClick={() => props.setSection(null)}>X</button>
          </div>
        )
      }
      <input onChange={handleChange} placeholder={`I'm looking for ...`} />
    </div>
  );
};

export default SearchBar;
