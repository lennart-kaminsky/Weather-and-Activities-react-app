import { Fragment } from "react";
import "./List.css";

export function List({ activities, isGoodWeather, onDeleteActivity }) {
  return (
    <>
      <h2>
        {isGoodWeather
          ? "The weather is awesome! Go outside and:"
          : "Bad weather outside! Here's what you can do now:"}
      </h2>
      <ul className="list-activities">
        {activities.map((activity) => (
          <div className="div--list-item flex-evenly" key={activity.id}>
            <li>{activity.name}</li>

            <button type="button" onClick={() => onDeleteActivity(activity.id)}>
              X
            </button>
          </div>
        ))}
      </ul>
    </>
  );
}
