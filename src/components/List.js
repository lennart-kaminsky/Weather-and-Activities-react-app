export function List({ activities }) {
  return (
    <ul>
      {activities.map((activiti) => (
        <li key={activiti.id}>{activiti.name}</li>
      ))}
    </ul>
  );
}
