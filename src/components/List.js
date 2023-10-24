import { Fragment } from "react";
import "./List.css";

export function List({ filteredActivities, isGoodWeather, onDeleteActivity }) {
  return (
    <>
      <h2 className="list-headline">
        {isGoodWeather
          ? "The weather is awesome! Go outside and:"
          : "Bad weather outside! Here's what you can do now:"}
      </h2>
      <ul className="list-activities">
        {filteredActivities.map((activity) => (
          <li className="div--list-item flex-evenly" key={activity.id}>
            <div>{activity.name}</div>
            <button
              className="delete"
              type="button"
              onClick={() => onDeleteActivity(activity.id)}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
