import useLocalStorage from 'hooks/useLocalStorage';

export const Filter = () => {
  const { filter, setFilter } = useLocalStorage();

  function changeFilter(e) {
    setFilter(e.currentTarget.value);
  }

  return (
    <label
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        width: '250px',
        height: '20px',
        marginLeft: '40px',
        marginBottom: '20px',
        fontSize: '18px',
      }}
    >
      Find contact by name:
      <input
        style={{
          width: '250px',
          height: '40px',
        }}
        type="text"
        value={filter}
        onChange={changeFilter}
      ></input>
    </label>
  );
};
