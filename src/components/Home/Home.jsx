import SHome from './Style';

export default function Home() {
  return (
    <SHome>
      <div className="bgdeco" />
      <div className="container">
        <div className="deco" />
        <div className="name">
          <h1>HACENE HAMROUNE</h1>
          <h2>Développeur Web Junior javaScript</h2>
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
