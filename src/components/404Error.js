import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="not-found">
      <h2>404 Not Found</h2>
      <p>Oop!! That page does not found</p>
      <Link to="/">Back to the home page...</Link>
    </div>
  );
};

export default NotFound;
