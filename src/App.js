import "./App.css";
import { Form } from "./components/Form";
import { useState } from "react";
import { uid } from "uid";
import { List } from "./components/List";
import useLocalStorageState from "use-local-storage-state";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });

  function handleAddActivity(activiti) {
    setActivities([...activities, { ...activiti, id: uid() }]);
  }

  return (
    <>
      <List activities={activities} />
      <Form onAddActivity={handleAddActivity}></Form>
    </>
  );
}
export default App;
