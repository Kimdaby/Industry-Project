import "./FriendPage.scss";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { useNavigate } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

function FriendPage() {
  const navigate = useNavigate();
  return (
    <>
      <div className="social-page">
        <Header />
        <div className="back-button" onClick={() => navigate(-1)}>
          <ArrowBackIosIcon fontSize="small" />
        </div>
        <section className="social-page__friends">
          <div className="social-page__friends-container">
            <div className="social-page__friends-bubble1">
              <img
                src="/public/images/Zachary_smith.png"
                alt="phFriend 4"
                className="social-page__friends-img"
              />
              <p className="zach">Zachary Smith</p>
              <p className="zachp">You share 3 mutuals in your network</p>
              <p className="zachp">"Saxon should die already LOL"</p>
            </div>
          </div>
        </section>
        <section className="social-page__trending">
          <div className="social-page__trending-friends">
            <h3 className="social-page__trending-headline">
              Keeping Up With Zachary
            </h3>
            <div className="social-page__trending-friends-scroll">
              <article className="social-page__trending-card">
              <div className='card-wrapper'>
                    <div className='watched-container'>
                    <img
                    src="public/images/profile-circle-svgrepo-com.svg"
                    alt="recommendedphoto2"
                    className="watched-container__img"
                    />
                    <p className='watched-text'>Watched by 12</p>
                    </div>
                <img
                  src="/public/images/Barry.jpg"
                  alt="recommendedphoto1"
                  className="social-page__trending-img"
                />
                </div>
              </article>
              <article className="social-page__trending-card">
                <img
                  src="/public/images/penguin.jpg"
                  alt="recommendedphoto2"
                  className="social-page__trending-img"
                />
              </article>
              <article className="social-page__trending-card">
                <img
                  src="/public/images/haley-quinn.png"
                  alt="recommendedphoto3"
                  className="social-page__trending-img"
                />
              </article>
              <article className="social-page__trending-card">
                <img
                  src="/public/images/Titans.jpg"
                  alt="recommendedphoto4"
                  className="social-page__trending-img"
                />
              </article>
              <article className="social-page__trending-card">
                <img
                  src="/public/images/succession.jpg"
                  alt="recommendedphoto5"
                  className="social-page__trending-img"
                />
              </article>
            </div>
          </div>
        </section>

        <section className="social-page__trending">
          <div className="social-page__trending-friends">
            <h3 className="social-page__trending-headline">
              All-Time Favorites
            </h3>
            <div className="social-page__trending-friends-scroll">
              <article className="social-page__trending-card">
                <img
                  src="/public/images/DMZ.jpg"
                  alt="recommendedphoto1"
                  className="social-page__trending-img"
                />
              </article>
              <article className="social-page__trending-card">
                <img
                  src="/public/images//haley-quinn.png"
                  alt="recommendedphoto2"
                  className="social-page__trending-img"
                />
              </article>
              <article className="social-page__trending-card">
                <img
                  src="/public/images/HouseD.jpg"
                  alt="recommendedphoto3"
                  className="social-page__trending-img"
                />
              </article>
              <article className="social-page__trending-card">
                <img
                  src="/public/images/Barry.jpg"
                  alt="recommendedphoto4"
                  className="social-page__trending-img"
                />
              </article>
              <article className="social-page__trending-card">
                <img
                  src="/public/images/LastofUS.jpg"
                  alt="recommendedphoto5"
                  className="social-page__trending-img"
                />
              </article>
            </div>
          </div>
        </section>

        <section className="social-page__episode-section">
          <div className="social-page__episode-headline-container">
            <h2 className="social-page__episode-headline">Shared Circles</h2>
            <p>+</p>
          </div>
          <div className="social-page__episode-card">
            <img
              className="social-page__episode-img"
              src="/public/images/FantasyFamily200.png"
              alt="Episode 1"
            />
            <div className="social-page__episode-text">
              <h3>Fantasy Family</h3>
              <p>You, Zachary, Sarah and 3 others</p>
            </div>
            <img
              className="three-dots-image"
              src="/public/images/three-dots-vertical.svg"
              alt="more items"
            />
          </div>
          <div className="social-page__episode-card">
            <img
              className="social-page__episode-img"
              src="/public/images/DarkMaterials.jpg"
              alt="Episode 2"
            />
            <div className="social-page__episode-text">
              <h3>Thriller Takeover</h3>
              <p>You, Zachary, Jenna and 3 others</p>
            </div>
            <img
              className="three-dots-image"
              src="/public/images/three-dots-vertical.svg"
              alt="more items"
            />
          </div>
          <div className="social-page__episode-card">
            <img
              className="social-page__episode-img"
              src="/public/images/haley-quinn.png"
              alt="Episode 2"
            />
            <div className="social-page__episode-text">
              <h3>Animation Addicts</h3>
              <p>You, Jonathan, Jenna, and 3 others</p>
            </div>
            <img
              className="three-dots-image"
              src="/public/images/three-dots-vertical.svg"
              alt="more items"
            />
          </div>
        </section>

        <section className="social-page__episode-section">
          <h2 className="social-page__episode-headline">Their Circles</h2>
          <div className="social-page__episode-card">
            <img
              className="social-page__episode-img"
              src="/public/images/FantasyFamily200.png"
              alt="Episode 1"
            />
            <div className="social-page__episode-text">
              <h3>Fantasy Family</h3>
              <p>You, Zachary, Sarah and 3 others</p>
            </div>
            <img
              className="three-dots-image"
              src="/public/images/three-dots-vertical.svg"
              alt="more items"
            />
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}

export default FriendPage;
