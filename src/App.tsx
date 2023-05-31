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
      {/* <h1>Thinking 'Bout You (feat. MacKenzie)- Dustin Lynch</h1> */}
      <SpotifyTrack trackId="4wBjKhJx6JnGoNJfJs24pd" />
      <h2>Review</h2>
      <p>
        Dustin Lynch's collaboration with MacKenzie in the track "Thinking 'Bout
        You" is a refreshing addition to the country music scene. With its
        heartfelt lyrics and catchy melodies, this song showcases Lynch's growth
        as an artist and his ability to create an emotional connection with his
        audience.
      </p>
      <p>
        The chemistry between Lynch and MacKenzie is evident from the first
        note. Their voices blend effortlessly, creating a harmonious duet that
        is both captivating and soul-stirring. The raw emotions conveyed in
        their delivery make it easy for listeners to relate to the longing and
        nostalgia expressed in the lyrics.
      </p>
      <p>
        The production of "Thinking 'Bout You" is polished and well-crafted,
        with a perfect balance between traditional country elements and modern
        sensibilities. The instrumentation, including the twangy guitars and
        subtle use of synths, adds depth to the song without overpowering the
        vocals.
      </p>
      <p>
        Lyrically, the song explores the bittersweet experience of reminiscing
        about a past love. The storytelling is honest and evocative, painting a
        vivid picture of the protagonist grappling with the memories that haunt
        them. The chorus, with its infectious melody, is an instant earworm that
        lingers in your mind long after the song has ended.
      </p>
      <p>
        "Thinking 'Bout You" is a standout track that showcases Dustin Lynch's
        artistic growth and his ability to deliver an emotionally resonant
        performance. With its captivating vocals, compelling lyrics, and
        memorable melodies, this collaboration is a testament to the enduring
        power of country music.
      </p>
      <h2>Playlist of the week</h2>
      <p>Based on this week's review, we have populated a playlist for you.</p>
      <p>Enjoy!</p>
      <SpotifyPlaylist playListId="37i9dQZF1E8NJ812DhgupL" darkTheme compact />
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
