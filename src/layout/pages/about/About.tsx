import gitLogo from 'public/github-fill_96px_111111.svg';

const About = () => {
  return (
    <div className="flex flex-col content-center h-full ">
      <div className="inf">
        <h5>About</h5>
        <a href="http://git.com" className="w-max flex items-center gap-5">
          <img src={gitLogo} alt="git-logo" className="w-12" />
        </a>
        <span></span>
      </div>
    </div>
  );
};

export default About;
