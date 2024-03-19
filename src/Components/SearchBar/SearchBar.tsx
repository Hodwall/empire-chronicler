import './SearchBar.css';


const SearchBar = (props: {
  setSearchBar: (query: string) => void;
}) => {

  const handleChange = (event: any) => {
    props.setSearchBar(event.target.value);
  }

  return (
    <div className="SearchBar">
      <input onChange={handleChange} placeholder={`I'm looking for ...`} />
    </div>
  );
};

export default SearchBar;
