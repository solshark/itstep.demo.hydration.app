import * as React from "react";
import { useHistory } from "react-router-dom";
import { TrackService } from "../services/track.service";
const tracks = new TrackService();

export const Add: React.FC = () => {
  const [volume, setVolume] = React.useState(0);
  const history = useHistory();
  const handeAddClick = () => {
    tracks.add(volume);
    history.push("/dashboard");
  };
  return (
    <div className="flex flex-col">
      <input
        type="number"
        placeholder="Type water volume in milliliters"
        className="m-2"
        value={volume}
        onChange={(event) => setVolume(parseInt(event.target.value) || 0)}
      ></input>

      <button className="btn m-2" onClick={handeAddClick}>
        Add
      </button>
    </div>
  );
};
