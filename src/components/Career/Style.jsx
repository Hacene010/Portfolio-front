import styled from 'styled-components';

const SCareer = styled.div`
  position: relative;
  @media (max-width: 450px) {
    height: 100%;
  }

  .container {
    position: relative;
    display: flex;
    height: inherit;
  }

  .title-career {
    display: flex;
    flex-direction: column;
  }

  .carrer {
    justify-content: space-between;
    align-items: center;
    display: flex;
    margin-bottom: 10px;

    @media (max-width: 450px) {
      flex-direction: column;
    }
  }

  .title {
    height: 20vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    h1 {
      font-size: 2.5em;
      font-weight: 900;
      text-align: center;
    }

    img {
      width: 55px;
    }
  }
  .univ,
  .iesc,
  .wcs {
    width: 30%;
    height: 95%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
    @media (max-width: 450px) {
      width: 100%;
      margin: 10px;
    }

    li {
      list-style: none;
    }

    img {
      border-radius: 8px;
      height: 300px;
      width: 300px;
    }
    h2 {
      font-size: 1.3em;
      font-weight: 600;
      padding: 5px;
      text-align: center;
      color: #9ed0c9;
    }
    li {
      padding: 8px;
      text-align: justify;

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
        margin-left: -200%;
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
        margin-left: -150%;
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

  h3 {
    font-size: 1.15em;
    font-weight: 500;
    text-align: center;
  }
`;

export default SCareer;
