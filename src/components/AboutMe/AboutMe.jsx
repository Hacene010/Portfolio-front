import SAbout from './Style';

export default function About() {
  return (
    <SAbout id="about">
      <div className="container">
        <div className="myPic">
          <img src="/img/AboutMe/MyPic.jpeg" alt="myPicture" />
        </div>

        <div className="desc-container">
          <div className="title">
            <h1>Pour en savoir plus sur hacene</h1>
          </div>
          <div className="intro">
            <p>
              Je m&apos;appelle Hacene HAMROUNE. Je suis en formation à la Wild
              Code School. Une chance de reconversion après un parcours
              universitaire atypique. Développeur web est, pour moi, un métier
              qui fait sens et dans lequel j&apos;ai envie de m&apos;investir.
              &ldquo;Apprendre à apprendre&ldquo; est la formule qui a orienté
              mon choix vers la Wild Code School. L&apos;autonomie, la rigueur
              et le respect de l&apos;autre font également partie des valeurs
              qui me tiennent à cœur. Aujourd&apos;hui, je cherche une
              alternance au sein d’une entreprise à taille humaine qui me
              permettra de m&apos;épanouir. Mon esprit d&apos;analyse, mon sens
              de l’observation et ma créativité sauront m&apos;aider à réussir
              et monter encore plus en compétences !
            </p>
          </div>
        </div>
      </div>
    </SAbout>
  );
}
