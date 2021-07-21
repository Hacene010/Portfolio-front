import styled from 'styled-components';

const SAchievements = styled.div`
  @media (max-width: 450px) {
    height: 100%;
  }

  .container {
    display: flex;
    height: inherit;
  }

  .title-projects {
    display: flex;
    flex-direction: column;
  }

  /* .deco {
    position: absolute;
    top: 8%;
    left: 28%;
    opacity: 0.2;
    width: 43vw;
    height: 80vh;
    border-radius: 50%;
    background-color: #415164;

     animation-name: bgDeco;
    animation-duration: 500ms;
    animation-timing-function: ease-out;
    @keyframes bgDeco {
      from {
        margin-top: 100vh;
      }
    } 
  } */

  .projects {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin: 10px;
    @media (max-width: 450px) {
      flex-direction: column;
    }
  }

  .title {
    height: 20vh;
    margin: 30px;

    h1 {
      font-size: 2.5em;
      font-weight: 900;
      text-align: center;
    }

    a {
      color: #415164;
      @media (max-width: 450px) {
        display: none;
      }
    }
  }

  .spaceflix,
  .github,
  .edtech {
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 450px) {
      width: 100%;
      margin: 10px;
    }

    li {
      line-height: 1.3;
      list-style: none;

      a {
        color: #f5f5f5;

        :hover {
          color: #2a2424;
        }
      }
    }

    img {
      width: 200px;
      height: 300px;
      margin: 10px;
    }

    span li {
      padding: 12px;
      text-align: justify;
      @media (max-width: 450px) {
        width: 100%;
        padding: 10px;
      }
    }
  }

  .github {
    li {
      /* animation-name: slideLi;
      animation-duration: 1s;
      animation-timing-function: ease-out;
       @keyframes slideLi {
        from {
          margin-top: 100%;
        }
        to {
          margin-top: 0;
        }
      } */
    }

    h2 {
      /* animation-name: slideTitle;
      animation-duration: 1s;
      animation-timing-function: ease-in-out;
      @keyframes slideTitle {
        from {
          margin-left: -200%;
        }
      } */
    }

    /* animation-name: slideGithub;
    animation-duration: 1s;
    animation-timing-function: ease-out;
    @keyframes slideGithub {
      from {
        margin-left: -100%;
      }
      to {
        margin-left: 0;
      }
    } */
  }

  .spaceflix {
    li {
      /* animation-name: slideLi;
      animation-duration: 700ms;
      animation-timing-function: ease-out;
      @keyframes slideLi {
        from {
          margin-top: 100%;
        }
      } */
    }

    /* h2 {
      animation-name: slideH2;
      animation-duration: 1s;
      animation-timing-function: ease-in-out;

      @keyframes slideH2 {
        from {
          margin-right: -200%;
        }
      }
    }
    animation-name: slideSpace;
    animation-duration: 1s;
    animation-timing-function: ease-out;
    @keyframes slideSpace {
      from {
        margin-right: -100%;
      }
      to {
        margin-right: 0;
      }
    } */
  }

  .edtech {
    img {
      width: 300px;
      height: 400px;
      border: 4px #415164 solid;
    }

    /* animation-name: slideEdtech;
    animation-duration: 1s;
    animation-timing-function: ease-in-out;

    @keyframes slideEdtech {
      from {
        margin-top: -200%;
      }
      to {
        margin-top: 0;
      }
    } */

    li,
    h1,
    a {
      /* animation-name: slideEdtechLi;
      animation-duration: 700ms;
      animation-timing-function: ease-in-out;
      @keyframes slideEdtechLi {
        from {
          margin-top: 300%;
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      } */
    }
  }

  h2 {
    font-size: 1.3em;
    font-weight: 600;
    text-align: center;
  }

  h3 {
    font-size: 1.2em;
    font-weight: 500;
    padding: 5px;
  }
`;

export default SAchievements;
