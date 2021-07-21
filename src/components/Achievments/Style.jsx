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

  .deco {
    position: absolute;
    top: 8%;
    left: 28%;
    opacity: 0.2;
    width: 43vw;
    height: 80vh;
    border-radius: 50%;
    background-color: #9ed0c940;
  }

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
    @media (max-width: 450px) {
      width: 100%;
      margin: 10px;
    }

    animation-name: projects;
    animation-duration: 1ms;
    animation-timing-function: ease-out;
    @keyframes projects {
      from {
        opacity: 0;
      }
    }

    a {
      text-decoration: underline #9ed0c9;
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
    animation-name: projects;
    animation-duration: 500ms;
    animation-timing-function: ease-out;
    @keyframes projects {
      from {
        margin-left: -100%;
      }
    }
  }

  .edtech {
    img {
      width: 300px;
      height: 400px;
      border: 4px #415164 solid;
    }
  }

  h2 {
    font-size: 1.3em;
    font-weight: 600;
    text-align: center;
    color: #9ed0c9;
  }
`;

export default SAchievements;
