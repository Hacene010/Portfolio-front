import SContact from './Style';

export default function Contact() {
  return (
    <SContact>
      <div className="container">
        <div className="picture">
          <div className="pic">
            <img src="/img/Contact/contact.jpeg" alt="contactPic" />
          </div>
        </div>
        <div className="contact">
          <h1>Coordonnées</h1>

          <div className="sTitles">
            <h2>Mobilité</h2>
            <p>Métropole lilloise et environs / Île-de-France</p>
            <br />
            <h2>Contact</h2>
            <div className="email">
              <p>Email : </p>
              <p className="linkto">hamrounehacene06@gmail.com</p>
              <p>LinkedIn:</p>
            </div>
            <p>
              <a
                href="//www.linkedin.com/in/hacenehamroune"
                className="linkto"
                target="_blank"
                rel="noreferrer"
              >
                www.linkedin.com/in/hacenehamroune
              </a>
            </p>

            <br />

            <h2>Numéro de téléphone</h2>
            <p>06 50 24 11 39</p>
          </div>
        </div>
      </div>
    </SContact>
  );
}
