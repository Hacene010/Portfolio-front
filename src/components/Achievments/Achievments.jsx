import SAchievements from './Style';

export default function Achievements() {
  return (
    <SAchievements>
      <div className="container">
        <div className="title-projects">
          <div className="title">
            <h1>Réalisations</h1>
          </div>
          <div className="projects">
            <div className="github">
              <div className="pic">
                <img
                  src="./img/Achievments/githubStats.png"
                  alt="githubStats"
                />
              </div>

              <span>
                <a
                  href="https://github.com/WildCodeSchool/2103-lille-js-p2-g3-github"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h2>Projet GithubStats.</h2>
                </a>

                <li>
                  API Github Stats. Application réalisée en 4 semaines en groupe
                  de 4 wilders. Permettant de recenser des informations sur un
                  utilisateur de github (développeur) en renseigant son
                  identifiant.
                  <br /> Ex : ses repositories, son activité sur Github, ses
                  technos...
                </li>
                <li>Public ciblé : Recruteurs</li>
              </span>
            </div>

            <div className="edtech">
              <div className="pic">
                <div className="pic">
                  <img src="/img/Achievments/edTechHdf.png" alt="edtechHdf" />
                </div>
              </div>
              <span>
                <h2>Projet EdTech Hauts-de-France</h2>
                <div className="repos">
                  <a
                    href="https://github.com/WildCodeSchool/2103-lille-js-p3-edtech-frontend"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <input type="button" value="Frontend" />
                  </a>

                  <a
                    href="https://github.com/WildCodeSchool/2103-lille-js-p3-edtech-backend"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <input type="button" value="Backend" />
                  </a>

                  <a
                    href="https://github.com/WildCodeSchool/2103-lille-js-p3-edtech-admin"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <input type="button" value="Admin" />
                  </a>
                </div>

                <li>
                  Projet pour l&apos;association edTechHdf. Site vitrine de
                  l&apos;association
                </li>
                <li>Un site responsive et totalement administrable</li>
                <li>
                  Technos et framworks : ReactJs, NodeJs (Express), MySql
                  (workbench)
                </li>
              </span>
            </div>

            <div className="spaceflix">
              <img src="/img/Achievments/spaceFlix.png" alt="spaceFlix" />
              <span>
                <a
                  href="https://github.com/Hacene010/spaceflix"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h2>SpaceFlix</h2>
                </a>

                <li>
                  Hackathon de 36h. Réalisation d&apos;une plateforme
                  ressemblant à netflix pour réduire l&apos;ennui d&apos;un
                  robot dans l&apos;espace.)
                </li>

                <li>
                  Technos et framworks : javaScript, ReactJs, Styled-components
                </li>
              </span>
            </div>
          </div>
        </div>
      </div>
    </SAchievements>
  );
}
