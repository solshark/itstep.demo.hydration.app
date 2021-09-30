import { Link } from "react-router-dom";
import * as React from "react";

export const Dashboard: React.FC = () => (
  <>
    <div>Daily stats</div>
    <br></br>
    <Link to="/add">+</Link> <br></br>
    <Link to="/history">History</Link>
  </>
);
