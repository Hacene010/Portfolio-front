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

  .projects {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    margin: 10px;
    @media (max-width: 450px) {
      flex-direction: column;
    }
  }

  .title {
    height: 15vh;
    margin-top: 30px;

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
    justify-content: flex-end;
    @media (max-width: 450px) {
      width: 100%;
      margin: 10px;
    }

    a {
      text-decoration: underline #9ed0c9;
    }

    img {
      width: 200px;
      height: 300px;
      margin: 10px;
    }

    span li {
      line-height: 1.3;
      list-style: none;
      padding: 12px;
      text-align: justify;
      @media (max-width: 450px) {
        width: 100%;
        padding: 10px;
      }
    }
  }

  .github {
    animation-name: github;
    animation-duration: 1s;
    animation-timing-function: ease-out;
    @keyframes github {
      from {
        margin-left: -100%;
      }
    }
  }

  .edtech {
    animation-name: edtech;
    animation-duration: 1s;
    animation-timing-function: ease-out;
    @keyframes edtech {
      from {
        margin-left: -100%;
      }
    }

    img {
      width: 300px;
      height: 400px;
      border: 4px #415164 solid;
    }
  }

  .spaceflix {
    animation-name: spaceflix;
    animation-duration: 1s;
    animation-timing-function: ease-out;
    @keyframes spaceflix {
      from {
        margin-left: -300%;
      }
    }
  }

  h2 {
    font-size: 1.3em;
    font-weight: 600;
    text-align: center;
    color: #9ed0c9;
  }

  .repos {
    display: flex;
    justify-content: space-between;
    padding: 15px;

    input {
      background-color: #82afa9;
      border: 1px #9ed0c9 solid;
      width: 5vw;
      color: #26313f;
      cursor: pointer;
      margin: 8px;
      font-weight: bold;
      border-radius: 5px;
    }

    input:hover {
      opacity: 0.8;
    }
  }
`;

export default SAchievements;
