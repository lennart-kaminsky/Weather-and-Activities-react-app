import { Fragment } from "react";
import "./List.css";

export function List({ activities, isGoodWeather, onDeleteActivity }) {
  return (
    <>
      <h2 className="list-headline">
        {isGoodWeather
          ? "The weather is awesome! Go outside and:"
          : "Bad weather outside! Here's what you can do now:"}
      </h2>
      <ul className="list-activities">
        {activities.map((activity) => (
          <div className="div--list-item flex-evenly" key={activity.id}>
            <li>{activity.name}</li>

            <button
              className="delete"
              type="button"
              onClick={() => onDeleteActivity(activity.id)}
            >
              ❌
            </button>
          </div>
        ))}
      </ul>
    </>
  );
}
