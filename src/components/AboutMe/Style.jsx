import styled from 'styled-components';

const SAbout = styled.div`
  height: 94vh;
  background-color: #415164;

  .myPic {
    margin-top: 0;

    img {
      border-radius: 8px;
      height: 90vh;
    }

    animation-name: pic;
    animation-duration: 700ms;
    animation-timing-function: ease-out;
    @keyframes pic {
      from {
        opacity: 0;
        margin-left: -100%;
        margin-top: -50%;
      }
      to {
        opacity: 1;
        margin-left: 0;
        margin-top: 0;
      }
    }
  }

  .container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: inherit;
  }

  .desc-container {
    background-color: #6e7b8b9f;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50vw;
    height: 85vh;
    text-align: center;
    border-radius: 50%;

    animation-name: desc;
    animation-duration: 700ms;
    animation-timing-function: ease-in-out;
    @keyframes desc {
      from {
        margin-top: -50%;
        margin-right: -100%;
      }
      to {
        margin-top: 0;
        margin-right: 0;
      }
    }
  }

  h1 {
    color: #9ed0c9;
    font-size: 2.5em;
    font-weight: 900;
    text-transform: uppercase;
  }

  .intro {
    width: 90%;
    margin: 50px;
    padding-top: 50px;
    text-align: center;
    vertical-align: middle;
  }

  .title {
    width: 500px;

    animation-name: title;
    animation-duration: 1s;
    animation-timing-function: ease-in-out;

    @keyframes title {
      from {
        opacity: 0.5;
        margin-top: 200%;
      }
      to {
        opacity: 1;
        margin-top: 0;
      }
    }
  }
`;

export default SAbout;
