import SHome from './Style';

export default function Home() {
  return (
    <SHome>
      <div className="bgdeco" />
      <div className="container">
        <div className="name">
          <h1>
            HACENE <br /> HAMROUNE
          </h1>
          <h2>Développeur Web Junior javaScript</h2>

          <div className="pictos">
            <a
              href="https://github.com/Hacene010"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/img/Home/github.svg" alt="github" />
            </a>
            <a
              href="https://www.linkedin.com/in/hacenehamroune/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/img/Home/linkedIn.png" alt="linkedIn" />
            </a>
            <div className="cv">
              <p>CV pdf</p>
              <a
                href="https://www.canva.com/design/DAEZTuKjWeM/6dg6YYyVBVsNvP9QtE6ZdA/view?utm_content=DAEZTuKjWeM&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/img/Home/cv.gif" alt="myCv" />
              </a>
            </div>
          </div>
        </div>
        <div className="about">
          <div className="devPic">
            <img src="/img/Home/devPic.jpg" alt="devPicture" />
          </div>

          <div className="myPic">
            <img src="/img/Home/myPic.JPG" alt="" />
          </div>
        </div>
      </div>
    </SHome>
  );
}
