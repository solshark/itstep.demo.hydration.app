import { Link } from "react-router-dom";
import * as React from "react";
import { HydrationGraph } from "../components/HygrationGraph";
import { User, UserService } from "../services/user.service";
import { TrackService } from "../services/track.service";

const userService = new UserService();
const trackService = new TrackService();

export const Dashboard: React.FC = () => {
  const [user, setUser] = React.useState<User>();
  const [currentVolume, setCurrentVolume] = React.useState(0);

  React.useEffect(() => {
    setCurrentVolume(trackService.currentVolume);
  }, []);
  React.useEffect(() => {
    setUser(userService.user);
  }, []);
  if (user) {
    return (
      <div className="prose flex flex-col text-center">
        <h2>Welcome, {user?.name}</h2>
        <h3>Your day</h3>
        <HydrationGraph
          currentHydrationLevel={currentVolume}
          goal={user?.goal}
        ></HydrationGraph>
        <Link to="/add" className="btn m-2">
          +
        </Link>
        <br></br>
        <Link to="/history">History</Link>
      </div>
    );
  } else {
    return <h1>Loading...</h1>;
  }
};
