import "./Form.css";

export function Form({ onAddActivity }) {
  function handleSubmit(event) {
    event.preventDefault();

    const newActivity = {
      name: event.target.nameInput.value,
      isForGoodWeather: event.target.weatherInput.checked,
    };
    console.log(newActivity);
    onAddActivity(newActivity);

    event.target.reset();
    event.target.nameInput.focus();
  }
  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <h2>Add new activity</h2>
        <div className="flex-evenly input-container">
          <label htmlFor="nameInput">Name</label>
          <input
            type="text"
            name="nameInput"
            id="nameInput"
            className="form--textInput"
          ></input>
          <label htmlFor="weatherInput">Good-weather</label>
          <input type="checkbox" name="weatherInput" id="weatherInput"></input>
        </div>
        <button type="submit" className="form--button">
          Submit
        </button>
      </form>
    </>
  );
}
