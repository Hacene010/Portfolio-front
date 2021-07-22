import axios from 'axios';
import { useEffect, useState } from 'react';
import SCareer from './Style';

export default function Career() {
  const [links, setLinks] = useState({});

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/links`).then(({ data }) => {
      setLinks(data);
    });
  }, []);
  return (
    <SCareer id="career">
      <div className="container">
        <div className="title-career">
          <div className="title">
            <h1>Parcours</h1>
            <a href={links?.cv} target="_blank" rel="noreferrer">
              <img src="/img/Home/cv.gif" alt="myCv" />
            </a>
          </div>
          <div className="carrer">
            <div className="univ">
              <img src="/img/Career/biology.jpg" alt="bio" />
              <span>
                <h2>Licence 2 sciences de la vie - Université de Lille</h2>
                <h3>Sep 2017 - Jui 2019 </h3>
                <li>
                  Acquisition d&apos;une logique scientifique et notions en
                  statistiques.
                </li>
                <li>Mise en pratique des cours théoriques en TD TP.</li>
              </span>
            </div>

            <div className="iesc">
              <div className="pic">
                <img src="./img/Career/secu.jpg" alt="security" width="10" />
              </div>

              <span>
                <h2>IESC FORMATION - Paris</h2>
                <h3>Jui 2019 - Juil 2019</h3>
                <li>
                  Obtention d&apos;un diplôme d&apos;agent de prévention et de
                  sécurité.
                </li>
                <li>Obtention d&apos;un diplôme de secourisme.</li>
              </span>
            </div>

            <div className="wcs">
              <div className="pic">
                <div className="pic">
                  <img src="/img/Career/dev.jpg" alt="developpment" />
                </div>
              </div>
              <span>
                <h2>Wild Code School - Campus de Lille</h2>
                <h3>Mar 2021 - Juil 2021</h3>

                <li>
                  Hackathon: Création d&apos;une application web SPACEFLIX en
                  36h.(ReactJs)
                </li>
                <li>
                  Projet 2: API Github Stats. App réalisée en 4 semaines.
                  (ReactJs).
                </li>
                <li>
                  Projet 1: Wild Code Jokes. site réalisé en groupe après une
                  semaine de formation (HTML, CSS, JS)
                </li>
                <li>Learning how to learn.</li>
              </span>
            </div>
          </div>
        </div>
      </div>
    </SCareer>
  );
}
