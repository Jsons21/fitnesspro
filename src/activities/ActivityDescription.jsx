import { useParams, useNavigate } from "react-router";
import useMutation from "../api/useMutation";
import useQuery from "../api/useQuery";
import { useAuth } from "../auth/AuthContext";

export default function ActivityDescription() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { token } = useAuth();

  const {
    data: activity,
    loading,
    error,
  } = useQuery(`/activities/${id}`, "activity");

  const {
    mutate: deleteActivity,
    loading: deleting,
    error: deleteError,
  } = useMutation("DELETE", `/activities/${id}`, ["activities"]);

  if (loading || !activity) return <p>Loading...</p>;
  if (error) return <p>Sorry! {error}</p>;

  const creatorName = activity.creatorId;
  const name = activity.name;
  const description = activity.description;

  const handleDelete = async () => {
    await deleteActivity();
    navigate("/");
  };

  return (
    <div>
      <button onClick={() => navigate(-1)}>Back</button>
      <h1>{name}</h1>
      <p>
        <strong>Creator name:</strong> {creatorName}
      </p>
      <p>
        <strong>Description:</strong> {description}
      </p>
      {token && (
        <button onClick={handleDelete} disabled={deleting}>
          {deleting ? "Deleting" : "Delete"}
        </button>
      )}
      {deleteError && <p>{deleteError}</p>}
    </div>
  );
}