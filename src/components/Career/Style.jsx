import styled from 'styled-components';

const SCareer = styled.div`
  background-color: #fff;
  color: #415164;
  position: relative;
  @media (max-width: 450px) {
    height: 100%;
  }

  .container {
    position: relative;
    display: flex;
    height: inherit;
  }

  .deco {
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
        opacity: 0.5;
      }
    }
  }

  .title-career {
    display: flex;
    flex-direction: column;
  }

  .carrer {
    justify-content: space-between;
    align-items: center;
    display: flex;
    margin-bottom: 60px;

    @media (max-width: 450px) {
      flex-direction: column;
    }
  }

  .title {
    height: 20vh;
    margin: 50px;

    h1 {
      font-size: 2.5em;
      font-weight: 900;
      text-align: center;
      padding: 0px;
    }

    a {
      color: #415164;
    }
  }
  .univ,
  .iesc,
  .wcs {
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5px;
    @media (max-width: 450px) {
      width: 100%;
      margin: 10px;
    }

    li {
      list-style: none;
    }

    img {
      border-radius: 8px;
      width: 300px;
      height: 350px;
      margin: 10px;
    }
    span {
      padding: 12px;
      text-align: center;

      @media (max-width: 450px) {
        width: 100%;
        padding: 10px;
      }
    }
  }

  .univ {
    animation-name: slideUniv;
    animation-duration: 500ms;
    animation-timing-function: ease-out;
    @keyframes slideUniv {
      from {
        margin-left: -300%;
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  }

  .iesc {
    animation-name: slideIesc;
    animation-duration: 800ms;
    animation-timing-function: ease-out;
    @keyframes slideIesc {
      from {
        margin-left: -200%;
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  }

  .wcs {
    animation-name: slideWcs;
    animation-duration: 1s;
    animation-timing-function: ease-out;
    @keyframes slideWcs {
      from {
        margin-right: 200%;
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  }

  h2 {
    font-size: 1.3em;
    font-weight: 600;
    padding: 10px;
  }

  h3 {
    font-size: 1.2em;
    font-weight: 500;
    padding: 5px;
  }
`;

export default SCareer;
