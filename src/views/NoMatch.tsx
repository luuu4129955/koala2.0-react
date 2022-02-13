import { Link } from "react-router-dom";

type Props={
  path:string
}

function NoMatch(props:Props) {
  return (
    <>
      <h2>404 Not Found</h2>
      <Link to="/">Go to the home page</Link>
    </>
  );
}
export default NoMatch