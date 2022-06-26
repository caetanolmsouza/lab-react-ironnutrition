import { Divider, Input } from 'antd';

// Iteration 5
function Search({ search, setSearch }) {
  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input
        value={search}
        type="text"
        onChange={(e) => setSearch(e.target.value)}
      />
    </>
  );
}

export default Search;
