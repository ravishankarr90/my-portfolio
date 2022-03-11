import "./About.css";

const About = () => {
  return (
    <div className="app__aboutme" id="about">
      <div className="app__aboutme-title">
        <h2 className="header__text">About</h2>
      </div>
      <div className="app__aboutme-details">
        <p className="p__details">
          I am a curiosity-driven full stack web developer based in India. I
          have a Bachelor's degree in Computer Science and Engineering. After
          graduation, I started my career in the IT world in 2011 as a junior
          software engineer. Solving problems, designing and developing systems
          that add value to my customers are my daily challenges. As the tech
          world is changing rapidly , be up to date, learn and grow along with
          those changes is my major mission.
        </p>
        <p className="p__details">
          My other interests include movies, music and PC gaming.
        </p>
      </div>
    </div>
  );
};

export default About;
