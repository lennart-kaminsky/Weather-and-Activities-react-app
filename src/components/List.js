import { Fragment } from "react";

export function List({ activities, isGoodWeather, onDeleteActivity }) {
  return (
    <>
      <h2>
        {isGoodWeather
          ? "The weather is awesome! Go outside and:"
          : "Bad weather outside! Here's what you can do now:"}
      </h2>
      <ul>
        {activities.map((activiti) => (
          <Fragment key={activiti.id}>
            <li>{activiti.name}</li>

            <button type="button" onClick={() => onDeleteActivity(activiti.id)}>
              X
            </button>
          </Fragment>
        ))}
      </ul>
    </>
  );
}
