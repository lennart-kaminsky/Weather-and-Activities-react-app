import "./App.css";
import { Form } from "./components/Form";
import { uid } from "uid";
import { List } from "./components/List";
import useLocalStorageState from "use-local-storage-state";

const isGoodWeather = true;

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });

  function handleAddActivity(activiti) {
    setActivities([...activities, { ...activiti, id: uid() }]);
  }

  //Filtered Activities
  const filteredActivities = activities.filter(
    (activity) => activity.isForGoodWeather === isGoodWeather
  );

  return (
    <>
      <List activities={filteredActivities} isGoodWeather={isGoodWeather} />
      <Form onAddActivity={handleAddActivity}></Form>
    </>
  );
}
export default App;
