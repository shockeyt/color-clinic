import imageOne from './images/Color-Clinic-album-cover.jpg';
import imageTwo from './images/cc-show-12-8-23.jpg';
import imageThree from './images/hollow_show.jpeg';
import bandPhotoOne from './images/cc-band-photo.jpg';
import omcLogo from './images/omc-logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a className="main-link" href="https://colorclinicmusic.bandcamp.com">
          <h1>Color Clinic</h1>
        </a>
      </header>
      <div className="main">
        <div className="color-box">
          <div className="feed-box">
            <div className="feed">
              <div className="feed-item">
                <div className="feed-item-title">
                  <h3>January 2024</h3>
                </div>
                <div className="feed-item-content">
                  <p>Lost Lake Lounge</p>
                  <p>w/ Hollow Head & Pie Lombardi</p>
                  <a href="https://lost-lake.com/event/hollow-head-w-pie-lombardi-color-clinic-mike-ring/lost-lake/denver-colorado/" target="_blank" rel="noreferrer">  
                    <img src={imageThree} alt="Color Clinic show 1-21-24" />
                  </a>
                </div>
              </div>
              <div className="feed-item">
                <div className="feed-item-content">
                  <img src={bandPhotoOne} alt="Color Clinic band" />
                </div>
              </div>
              <div className="feed-item">
                <div className="feed-item-title">
                  <h3>December 2023</h3>
                </div>
                <div className="feed-item-content">
                  <p>Globe Hall</p>
                  <p>w/ Radiant Drive & Daywish</p>
                  <img src={imageTwo} alt="Color Clinic show 12-8-23" />
                </div>
                <div className="feed-item-content">
                  <img src={bandPhotoOne} alt="Color Clinic band" />
                </div>
              </div>
              <div className="feed-item">
                <div className="feed-item-title">
                  <h3>February 2023</h3>
                </div>
                <div className="feed-item-content">
                  <iframe
                  title="Color Clinic self-titled album release"
                  src="https://open.spotify.com/embed/album/2hkJDtsM0GquCJ5Wn6qnvW?utm_source=generator"
                  width="100%"
                  height="352"
                  frameBorder="0"
                  allowFullScreen=""
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"></iframe>
                </div>
              </div>
              <div className="feed-item">
                <div className="feed-item-title">
                  <h3>January 2023</h3>
                </div>
                <div className="feed-item-content">
                  <p>Color Clinic self-titled album release</p>
                  <p>Spotify <a href="https://open.spotify.com/album/2hkJDtsM0GquCJ5Wn6qnvW?si=UjeqIkhNRieTs_-oPIE8Wg">link</a></p>
                  <img src={imageOne} alt="Color Clinic album cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="App-footer">
        <a target="_blank" rel="noreferrer" href="https://www.instagram.com/colorclinicmusic/">Instagram</a>
        <a target="_blank" rel="noreferrer" href="https://twitter.com/colorclinicmx">X (Twitter)</a>
        <a target="_blank" rel="noreferrer" href="https://colorclinicmusic.bandcamp.com/album/color-clinic">Bandcamp</a>
        <a target="_blank" rel="noreferrer" href="https://open.spotify.com/artist/6AtbnIPZSCEAPYDAhBCoiO?si=11mdT6daSlGMWIrDz3Fe4A">Spotify</a>
        <a target="_self" data-content="colorclinicmusic@gmail.com" data-type="mail" href="mailto:colorclinicmusic@gmail.com">Email</a>
      </footer>
      <div className="sub-footer">
        <p className="flex"><img src={omcLogo} alt="Odd Music Collective" />Odd Music Collective</p>
        <p> - </p>
        <p className="flex">© 2023 <a target="_blank" rel="noreferrer" href="https://tylershockey.co">Tyler Shockey</a></p>
      </div>
    </div>
  );
}

export default App;
