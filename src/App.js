import "./App.css";
import { useState, useEffect } from "react";
import { Form } from "./components/Form";
import { uid } from "uid";
import { List } from "./components/List";
import useLocalStorageState from "use-local-storage-state";

function App() {
  const [weather, setWeather] = useState({
    temperature: "",
    condition: "",
    isGoodWeather: true,
  });

  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });

  useEffect(() => {
    startFetching();
    const timer = setInterval(() => startFetching(), 5000);

    return () => {
      clearInterval(timer);
    };

    async function startFetching() {
      const response = await fetch(
        "https://example-apis.vercel.app/api/weather"
      );
      const newWeather = await response.json();

      setWeather({
        temperature: newWeather.temperature,
        condition: newWeather.condition,
        isGoodWeather: newWeather.isGoodWeather,
      });
    }
  }, []);

  function handleAddActivity(activity) {
    setActivities([...activities, { ...activity, id: uid() }]);
  }

  //Filtered Activities
  const filteredActivities = activities.filter(
    (activity) => activity.isForGoodWeather === weather.isGoodWeather
  );

  function handleDeleteActivity(idToRemove) {
    setActivities(activities.filter((activity) => activity.id !== idToRemove));
  }

  return (
    <>
      <h1 className="flex-evenly">
        <span className="weather-condition">{weather.condition}</span>
        <span> {weather.temperature + "°C"}</span>
      </h1>
      <List
        filteredActivities={filteredActivities}
        isGoodWeather={weather.isGoodWeather}
        onDeleteActivity={handleDeleteActivity}
      />
      <Form onAddActivity={handleAddActivity}></Form>
    </>
  );
}
export default App;
