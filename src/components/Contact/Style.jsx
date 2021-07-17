import styled from 'styled-components';

const SContact = styled.div`
  .deco {
    position: absolute;
    top: 8%;
    left: 26%;
    opacity: 0.2;
    width: 43vw;
    height: 80vh;
    border-radius: 50%;
    background-color: #a5a8ac82;

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

  .container {
    background-color: #415164;
    overflow: hidden;
    height: 100vh;
    display: flex;
    align-items: center;
    width: 120vw;
    position: relative;
  }

  .picture {
    position: relative;
    height: inherit;
    width: 45vw;
    overflow: hidden;

    .pic {
      img {
        position: absolute;
        top: 15vh;
        left: 5vw;
        width: 37vw;
        height: 70vh;
        border-radius: 50%;
      }
      animation-name: pic;
      animation-duration: 1s;
      animation-timing-function: ease-in-out;
      @keyframes pic {
        from {
          transform: rotate(180deg);
        }
      }
    }
  }

  .contact {
    width: 60vw;
    height: inherit;

    h1 {
      font-size: 2.5em;
      font-weight: 900;
      padding: 5px;
      margin-top: 13vh;
      width: 20vw;
      animation-name: title;
      animation-duration: 1s;
      animation-timing-function: ease-in-out;
      @keyframes title {
        from {
          margin-left: 200vw;
        }
      }
    }

    .sTitles {
      padding-top: 10vh;
      height: 60vh;
      padding-left: 5px;
      h2 {
        font-size: 1.7rem;
      }

      p {
        animation-name: texts;
        animation-duration: 1s;
        animation-timing-function: ease-in-out;
        @keyframes texts {
          from {
            opacity: 0;
            margin-top: 100vh;
          }
          to {
          }
        }
      }

      .linkto {
        color: #0303f5;
      }
    }
  }
`;

export default SContact;
