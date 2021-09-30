import { Link } from "react-router-dom";
import * as React from "react";
export const Login: React.FC = () => (
  <>
    <input type="text" placeholder="Type your name"></input>

    <button className="btn">Login</button>
    <Link to="/dashboard">Login</Link>
  </>
);
