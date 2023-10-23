export function List({ activities, isGoodWeather }) {
  return (
    <>
      <h1>
        {isGoodWeather
          ? "The weather is awesome! Go outside and:"
          : "Bad weather outside! Here's what you can do now:"}
      </h1>
      <ul>
        {activities.map((activiti) => (
          <li key={activiti.id}>{activiti.name}</li>
        ))}
      </ul>
    </>
  );
}
