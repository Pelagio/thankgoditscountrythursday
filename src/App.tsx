import "./App.css";
import CountryThursday from "./assets/country_thursday.png";
import { SpotifyPlaylist } from "./SpotifyPlaylist";
import { SpotifyTrack } from "./SpotifyTrack";

function App() {
  const today = new Date();
  const isThursday = today.getDay() === 3;
  return isThursday ? (
    <div className="container">
      <img src={CountryThursday} width={"100%"} />
      <h1>Life Goes On - Ed Sheeran feat. Luke Combs</h1>
      <SpotifyTrack trackId="3pX6S200JUrqrqbTxvYnRa" />
      {/* expand to display text*/}
      <h2>Review</h2>
      <p>
        "Life Goes On" is a mesmerizing collaboration between two exceptional
        artists, Ed Sheeran and Luke Combs. The song seamlessly merges their
        unique musical styles, creating a poignant and uplifting anthem that
        resonates with listeners.
        <br />
        <br />
        Ed Sheeran's heartfelt and introspective songwriting shines through as
        he navigates the complexities of life's ups and downs. His smooth vocals
        deliver the lyrics with sincerity and vulnerability, capturing the
        essence of human emotions and experiences. Luke Combs, known for his
        powerful country vocals, adds an additional layer of depth to the track,
        enhancing its emotional impact.
        <br />
        <br />
        The lyrics of "Life Goes On" offer a comforting reminder that no matter
        the hardships we face, life continues to progress. It acknowledges the
        pain and struggles we encounter but encourages resilience and hope. The
        melody is melodic and soothing, allowing the listener to immerse
        themselves in the heartfelt storytelling.
        <br />
        <br />
        The chemistry between Sheeran and Combs is evident, their voices
        blending harmoniously and complementing each other perfectly. The
        instrumentation, ranging from acoustic guitar to subtle yet effective
        production elements, creates a warm and inviting musical backdrop for
        their vocals.
        <br />
        <br />
        Overall, "Life Goes On" is a captivating and relatable song that
        showcases the immense talent of both Ed Sheeran and Luke Combs. Its
        timeless message and beautiful composition make it a standout track,
        destined to resonate with audiences for years to come.
      </p>
      <h2>Spotify Radio</h2>
      <SpotifyPlaylist playListId="37i9dQZF1E8Ny8TcvHlSGe" darkTheme compact />
    </div>
  ) : (
    <div className="container">
      <h1>Not Thursday</h1>
    </div>
  );
}

export default App;
