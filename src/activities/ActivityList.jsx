//import { useAuth } from "../auth/AuthContext";
import useQuery from "../api/useQuery";
import { useNavigate } from "react-router";
/** Shows a list of activities. */
export default function ActivityList() {
  const {
    data: activities,
    loading,
    error,
  } = useQuery("/activities", "activities");
  const navigate = useNavigate();

  if (loading || !activities) return <p>Loading...</p>;
  if (error) return <p>Sorry! {error}</p>;

  return (
    <ul>
      {activities.map((activity) => (
        <ActivityListItem
          key={activity.id}
          activity={activity}
          onClick={() => navigate(`/activities/${activity.id}`)}
        />
      ))}
    </ul>
  );
}

/** Shows a single activity. Logged-in users will also see a delete button. */
function ActivityListItem({ activity, onClick }) {
  //const { token } = useAuth();
  return (
    <li onClick={onClick} style={{ textDecoration: "underline" }}>
      <p>{activity.name}</p>
    </li>
  );
}