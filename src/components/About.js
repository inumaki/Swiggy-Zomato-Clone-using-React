import { Link, Outlet} from "react-router-dom";

export const About = () => {
  return (
    <>
      <h1>This is About Page</h1>
      <h2>Aryan Katiyar</h2>
      <Outlet/>
    </>
  );
};
