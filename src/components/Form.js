export function Form({ onAddActivity }) {
  function handleSubmit(event) {
    event.preventDefault();

    const data = {
      name: event.target.nameInput.value,
      isForGoodWeather: event.target.weatherInput.checked ? true : false,
    };
    console.log(data);
    onAddActivity(data);

    event.target.reset();
    event.target.nameInput.focus();
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Add new activity</h2>
        <label htmlFor="nameInput">Name</label>
        <input type="text" name="nameInput" id="nameInput"></input>
        <label htmlFor="weatherInput">Good-weather</label>
        <input type="checkbox" name="weatherInput" id="weatherInput"></input>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
