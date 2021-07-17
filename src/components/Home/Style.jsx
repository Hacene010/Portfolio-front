import styled from 'styled-components';

const SHome = styled.div`
  .bgdeco {
    background-color: #415164;
    opacity: 0.2;
    position: absolute;
    top: 23vh;
    left: 35vw;
    height: 55vh;
    width: 30vw;
    border-radius: 60%;
  }

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
      position: absolute;
      right: -20%;
      top: 5vh;
      border-radius: 50%;

      animation-name: devPic;
      animation-duration: 1s;
      animation-timing-function: ease-in-out;
      @keyframes devPic {
        from {
          margin: 60px;
          height: 30vh;
          width: 20vw;
        }
      }
    }

    .myPic img {
      position: absolute;
      bottom: 7vh;
      height: 55vh;
      border-radius: 60%;

      animation-name: myPic;
      animation-duration: 1s;
      animation-timing-function: ease-in-out;
      @keyframes myPic {
        from {
          height: 75vh;
        }
        to {
          height: 55vh;
        }
      }
    }
  }
  .name {
    margin: 10px;
    align-self: center;
    width: 50%;

    animation-name: myName;
    animation-duration: 1s;
    animation-timing-function: ease-in-out;
    @keyframes myName {
      from {
        transform: rotate(180deg);
      }
    }

    h1 {
      font-size: 6.5rem;
      font-weight: 900;
      padding: 60px;
      margin-left: 50px;
    }
    h2 {
      text-align: center;
      font-size: 2em;
    }
  }
`;

export default SHome;
