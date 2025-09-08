import { useNavigate } from "react-router";
import { useAuth } from "../auth/AuthContext";
/** Navbar with site navigation links */
export default function Navbar() {
  const navigate = useNavigate();
  const { token, logout } = useAuth();
  return (
    <header>
      <p>Fitness Trackr</p>
      <nav>
        <a onClick={() => navigate("/")}>Activities</a>
        {token ? (
          <a onClick={() => logout()}>Log out</a>
        ) : (
          <>
            <a onClick={() => navigate("/register")}>Register</a>
            <a onClick={() => navigate("/login")}>Login</a>
          </>
        )}
      </nav>
    </header>
  );
}
