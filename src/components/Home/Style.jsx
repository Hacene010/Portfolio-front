import styled from 'styled-components';

const SHome = styled.div`
  .container {
    height: 100vh;
    display: flex;
    align-items: center;
    overflow: hidden;
    position: relative;

    .deco {
      position: absolute;
      top: -28vh;
      left: 35vw;
      opacity: 0.7;
      background-color: rgb(65, 81, 100);
      height: 20%;
      width: 15%;
      transform: skewY(50deg);

      animation-name: deco;
      animation-duration: 1s;
      animation-timing-function: ease-in-out;
      @keyframes deco {
        from {
          opacity: 0;
        }
        to {
          opacity: 0.8;
        }
      }
    }
  }

  .about {
    position: relative;
    height: inherit;
    width: 50%;
    overflow: hidden;

    .devPic img {
      height: 80vh;
      width: 42vw;
      opacity: 0.7;
      position: absolute;
      right: -20%;
      top: 5vh;
      border-radius: 50%;

      animation-name: devPic;
      animation-duration: 1s;
      animation-timing-function: ease-in-out;
      @keyframes devPic {
        from {
          margin: 20px;
          opacity: 0;
        }
      }
    }

    .myPic img {
      position: absolute;
      bottom: 7vh;
      height: 55vh;
      border-radius: 60%;
      opacity: 0.7;

      animation-name: myPic;
      animation-duration: 1s;
      animation-timing-function: ease-in-out;
      @keyframes myPic {
        from {
          opacity: 0;
        }
      }
    }
  }
  .name {
    margin: 10px;
    align-self: center;
    width: 50%;
    padding: 60px;

    animation-name: myName;
    animation-duration: 1s;
    animation-timing-function: ease-in-out;
    @keyframes myName {
      from {
        margin-left: -100%;
      }
    }
  }

  h1 {
    font-size: 6.5rem;
    font-weight: 900;
    margin-bottom: 90px;
  }
  h2 {
    font-size: 2em;
  }
`;

export default SHome;
