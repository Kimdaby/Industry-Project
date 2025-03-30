import "./SocialPage.scss";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";

function SocialPage() {
  return (
    <>
      <Header />
      <div className="social-page">

        <section className="social-page__searchbar">
          <label className="social-page__searchbar-label"></label>
          <div className="social-page__searchbar">
  <div className="social-page__searchbar-wrapper">
    <img
      src="/images/search-24px.svg"
      alt="searchIcon"
      className="social-page__searchbar-icon"
    />
    <input
      className="social-page__searchbar-input"
      placeholder="Find Friends"
    />
  </div>
</div>


        </section>

        <section className="social-page__friends">
          <h2 className="social-page__friends-headline">My Network</h2>
          <div className="social-page__friends-container">
          <Link to="/user1" className="social-page__friends-bubble">
            <img
                src="/images/Zachary_Smith.png"
                alt="phFriend 1"
                className="social-page__friends-img"
            />
            <p>Zachary Smith</p>
        </Link>
            <div className="social-page__friends-bubble">
              <img
                src="images/Jonathon_Lee16.png"
                alt="phFriend 2"
                className="social-page__friends-img"
              />
              <p>Jonathan Lee</p>
            </div>
            <div className="social-page__friends-bubble">
              <img
                src="images/Sarah_Johnson.png"
                alt="phFriend 3"
                className="social-page__friends-img"
              />
              <p>Sarah Johnson</p>
            </div>
            <div className="social-page__friends-bubble">
              <img
                src="/images/Jenna_Walcott.png"
                alt="phFriend 4"
                className="social-page__friends-img"
              />
              <p>Jenna Walcott</p>
            </div>
          </div>
        </section>
        <section className="social-page__trending">
          <div className="social-page__trending-friends">
            <h3 className="social-page__trending-headline">Friend Favorites</h3>
            <div className="social-page__trending-friends-scroll">
              <article className="social-page__trending-card">
                <div className='card-wrapper'>
                    <div className='watched-container'>
                    <img
                    src="images/profile-circle-svgrepo-com.svg"
                    alt="recommendedphoto2"
                    className="watched-container__img"
                    />
                    <p className='watched-text'>Watched by 12</p>
                    </div>
                <img
                  src="/images/Barry.jpg"
                  alt="recommendedphoto1"
                  className="social-page__trending-img"
                />
                </div>
              </article>
              <article className="social-page__trending-card">
              <div className='card-wrapper'>
                    <div className='watched-container'>
                    <img
                    src="images/profile-circle-svgrepo-com.svg"
                    alt="recommendedphoto4"
                    className="watched-container__img"
                    />
                    <p className='watched-text'>Watched by 5</p>
                    </div>
                <img
                  src="images/LastofUs.jpg"
                  alt="recommendedphoto1"
                  className="social-page__trending-img"
                />
                </div>
              </article>
              <article className="social-page__trending-card">
                <img
                  src="/images/looneytunes.jpg"
                  alt="recommendedphoto3"
                  className="social-page__trending-img"
                />
              </article>
              <article className="social-page__trending-card">
              <div className='card-wrapper'>
                    <div className='watched-container'>
                    <img
                    src="images/profile-circle-svgrepo-com.svg"
                    alt="recommendedphoto4"
                    className="watched-container__img"
                    />
                    <p className='watched-text'>Watched by 20</p>
                    </div>
                <img
                  src="images/penguin.jpg"
                  alt="recommendedphoto1"
                  className="social-page__trending-img"
                />
                </div>
              </article>
              <article className="social-page__trending-card">
                <img
                  src="/images/succession.jpg"
                  alt="recommendedphoto5"
                  className="social-page__trending-img"
                />
              </article>
            </div>
          </div>
        </section>

        <section className="social-page__trending">
          <div className="social-page__trending-friends">
            <h3 className="social-page__trending-headline">Keep Up With Friends</h3>
            <div className="social-page__trending-friends-scroll">
              <article className="social-page__trending-card">
                <img
                  src="/images/LastofUs.jpg"
                  alt="recommendedphoto1"
                  className="social-page__trending-img"
                />
              </article>
              <article className="social-page__trending-card">
                <img
                  src="/images/succession.jpg"
                  alt="recommendedphoto2"
                  className="social-page__trending-img"
                />
              </article>
              <article className="social-page__trending-card">
                <img
                  src="/images/haley-quinn.png"
                  alt="recommendedphoto3"
                  className="social-page__trending-img"
                />
              </article>
              <article className="social-page__trending-card">
                <img
                  src="/images/DMZ.jpg"
                  alt="recommendedphoto4"
                  className="social-page__trending-img"
                />
              </article>
              <article className="social-page__trending-card">
                <img
                  src="/images/DarkMaterials.jpg"
                  alt="recommendedphoto5"
                  className="social-page__trending-img"
                />
              </article>
            </div>
          </div>
        </section>

        <section className="social-page__episode-section">
          <div className="social-page__episode-headline-container">
            <h2 className="social-page__episode-headline">Your Groups</h2>
            <p>+</p>
          </div>
          <Link to="/categories" className="social-page__episode-card">
            <img
              className="social-page__episode-img"
              src="/images/FantasyFamily200.png"
              alt="Episode 1"
            />
            <div className="social-page__episode-text">
              <h3>Fantasy Family</h3>
              <p>You, Zachary, Sarah and 3 others</p>
            </div>
            <img
              className="three-dots-image"
              src="/images/three-dots-vertical.svg"
              alt="more items"
            />
          </Link>
          <div className="social-page__episode-card">
            <img
              className="social-page__episode-img"
              src="/images/DarkMaterials.jpg"
              alt="Episode 2"
            />
            <div className="social-page__episode-text">
              <h3>Thriller Takeover</h3>
              <p>You, Zachary, Jenna and 3 others</p>
            </div>
            <img
              className="three-dots-image"
              src="/images/three-dots-vertical.svg"
              alt="more items"
            />
          </div>
          <div className="social-page__episode-card">
            <img
              className="social-page__episode-img"
              src="/images/looneytunes.jpg"
              alt="Episode 2"
            />
            <div className="social-page__episode-text">
              <h3>Animation Addicts</h3>
              <p>You, Jonathan, Jenna, and 3 others</p>
            </div>
            <img
              className="three-dots-image"
              src="/images/three-dots-vertical.svg"
              alt="more items"
            />
          </div>
        </section>

        <section className="social-page__episode-section">
          <h2 className="social-page__episode-headline">Recommended Groups</h2>
          <div className="social-page__episode-card">
            <img
              className="social-page__episode-img"
              src="/images/Barry.jpg"
              alt="Episode 1"
            />
            <div className="social-page__episode-text">
              <h3>Comedy</h3>
              <p>You, Zachary, Sarah and 3 others</p>
            </div>
            <img
              className="three-dots-image"
              src="/images/three-dots-vertical.svg"
              alt="more items"
            />
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default SocialPage;
