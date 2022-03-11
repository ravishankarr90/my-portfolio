import "./Home.css";

const Home = () => {
  return (
    <div className="app__home" id="home">
      <div className="app_home-details">
        <p className="p__intro">
          Hello! My name is
          <strong>
            <em> Ravishankar</em>
          </strong>
        </p>
        <p className="p__intro">
          I am a full stack web developer. Learning is my passion and I strongly
          believe in ,
        </p>
        <p className="quote__intro">
          <q>
            <em>Knowledge is power</em>
          </q>
        </p>
      </div>
      <div className="app_home-image">
        <div className="profile__img"></div>
      </div>
    </div>
  );
};

export default Home;
