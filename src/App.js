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

  useEffect(() => {
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

    startFetching();
  }, []);

  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });

  function handleAddActivity(activiti) {
    setActivities([...activities, { ...activiti, id: uid() }]);
  }

  //Filtered Activities
  const filteredActivities = activities.filter(
    (activity) => activity.isForGoodWeather === weather.isGoodWeather
  );

  console.log(weather);

  return (
    <>
      <h1>{weather.condition + weather.temperature + "°C"}</h1>
      <List
        activities={filteredActivities}
        isGoodWeather={weather.isGoodWeather}
      />
      <Form onAddActivity={handleAddActivity}></Form>
    </>
  );
}
export default App;
