import styled from 'styled-components';

const SHome = styled.div`
  .container {
    height: 100vh;
    display: flex;
    align-items: center;
    overflow: hidden;
    position: relative;
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
    display: flex;
    flex-direction: column;
    margin: 10px;
    align-self: center;
    width: 50%;
    padding: 60px;

    animation-name: myName;
    animation-duration: 1s;
    animation-timing-function: ease-in-out;
    @keyframes myName {
      from {
        margin-left: 100%;
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

    animation-name: title2;
    animation-duration: 1s;
    animation-timing-function: ease-in-out;
    @keyframes title2 {
      from {
        font-size: 0.9rem;
      }
    }
  }

  .pictos {
    display: flex;
    margin-left: 10%;
    margin-top: 10%;
    img {
      opacity: 1;
      width: 55px;
      margin: 15px;
    }

    img:hover {
      opacity: 0.5;
    }
  }

  .cv {
    position: relative;

    p {
      position: absolute;
      left: 25%;
      display: none;
    }
  }

  .cv:hover {
    img {
      opacity: 0.3;
    }
    p {
      display: block;
      font-weight: bold;
    }
  }
`;

export default SHome;
