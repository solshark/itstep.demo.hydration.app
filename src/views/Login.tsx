import { Link } from "react-router-dom";
import * as React from "react";
export const Login: React.FC = () => (
  <div className="flex flex-col">
    <input type="text" placeholder="Type your name" className="m-2"></input>
    <Link to="/dashboard" className="btn m-2">
      Login
    </Link>
  </div>
);
