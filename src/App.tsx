import "./App.css";
import { useCallback, useEffect, useState } from "react";
import CountryThursday from "./assets/country_thursday.png";
import { getNumberOfDaysToThursday, getWeekNumber } from "./helpers";
import { SpotifyPlaylist } from "./SpotifyPlaylist";
import { SpotifyTrack } from "./SpotifyTrack";
function App() {
  const [review, setReview] = useState({
    trackId: "",
    playlistId: "",
    review1: "",
    review2: "",
    review3: "",
    review4: "",
    review5: "",
  });
  const today = new Date();
  const weekNumber = getWeekNumber(today);
  // import json file based on week number
  const getJson = useCallback(async () => {
    const response = await fetch(`./data/${weekNumber}.json`);
    const data = await response.json();
    return data;
  }, [weekNumber]);
  const numberOfDaysToThursday = getNumberOfDaysToThursday(today);
  const isThursday = today.getDay() === 4;

  useEffect(() => {
    getJson().then((data) => {
      setReview(data);
    });
  }, [getJson]);

  return isThursday ? (
    <div className="container">
      <img className="logo" src={CountryThursday} />
      <SpotifyTrack trackId={review.trackId} />
      <h2>Review</h2>
      <p>{review.review1}</p>
      <p>{review.review2}</p>
      <p>{review.review3}</p>
      <p>{review.review4}</p>
      <p>{review.review5}</p>
      <h2>Playlist of the week</h2>
      <p>Based on this week's review, we have populated a playlist for you.</p>
      <p>Enjoy!</p>
      <SpotifyPlaylist playListId={review.playlistId} darkTheme compact />
    </div>
  ) : (
    <div className="container">
      <h1>Not Thursday</h1>
      <p>
        ... but don't worry it's only {numberOfDaysToThursday}{" "}
        {numberOfDaysToThursday === 1 ? "day" : "days"} to Thursday!
      </p>
      <p>Come back then and enjoy!</p>
    </div>
  );
}

export default App;
