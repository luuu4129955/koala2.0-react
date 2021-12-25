import { Link } from "react-router-dom";

function NoMatch() {
  return (
    <>
      <h2>404 Not Found</h2>
      <Link to="/">Go to the home page</Link>
    </>
  );
}
export default NoMatch