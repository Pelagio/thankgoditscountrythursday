import "./App.css";
import CountryThursday from "./assets/country_thursday.png";
import { SpotifyPlaylist } from "./SpotifyPlaylist";
import { SpotifyTrack } from "./SpotifyTrack";
function App() {
  const today = new Date();
  const numberOfDaysToThursday =
    4 - today.getDay() > 0 ? 4 - today.getDay() : 11 - today.getDay();
  const isThursday = today.getDay() === 4;
  return isThursday ? (
    <div className="container">
      <img className="logo" src={CountryThursday} />
      <SpotifyTrack trackId="2kYevr8cbIAH2ha8210Bnz" />
      <h2>Review</h2>
      <p>
        Luke Combs' "Love You Anyway" is a heartfelt country ballad that
        showcases Combs' exceptional talent as a singer-songwriter. The song
        delves into the complexities of a relationship and the willingness to
        stand by someone through thick and thin. Combs' rich and soulful voice
        brings an emotional depth to the lyrics, making it a truly captivating
        listening experience.
      </p>
      <p>
        The song opens with delicate acoustic guitar strums, creating an
        intimate atmosphere that perfectly complements Combs' vulnerable vocals.
        As the track progresses, it gradually builds with the addition of subtle
        drums, melodic piano, and soaring strings. The production is tastefully
        done, allowing Combs' voice to take center stage while providing a solid
        foundation for the song.
      </p>
      <p>
        Lyrically, "Love You Anyway" shines with its honest and relatable
        storytelling. Combs' poignant lyrics paint a vivid picture of the
        struggles and triumphs of a committed relationship. The chorus is
        particularly memorable, with its infectious melody and heartfelt
        declaration of unwavering love.
      </p>
      <p>
        Luke Combs' delivery is nothing short of exceptional, effortlessly
        conveying the raw emotions embedded in the song. His ability to connect
        with listeners on a personal level is undeniable, making "Love You
        Anyway" a standout track in his discography.
      </p>
      <p>
        Overall, "Love You Anyway" is a beautifully crafted country ballad that
        showcases Luke Combs' incredible talent and songwriting prowess. It's a
        must-listen for fans of heartfelt, soul-stirring music.
      </p>
      <h2>Playlist of the week</h2>
      <p>Based on this week's review, we have populated a playlist for you.</p>
      <p>Enjoy!</p>
      <SpotifyPlaylist playListId="37i9dQZF1E8MZA2jnDjFP5" darkTheme compact />
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
