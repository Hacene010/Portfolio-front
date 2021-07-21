import styled from 'styled-components';

const SContact = styled.div`
  .container {
    background-color: #415164;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .picture {
    position: relative;
    height: inherit;
    width: 45vw;
    overflow: hidden;

    .pic {
      position: absolute;
      top: 9vh;
      right: 3vw;

      img {
        width: 37vw;
        height: 70vh;
        border-radius: 50%;
      }
    }
  }
  .contact {
    width: 40vw;
    height: inherit;

    h1 {
      font-size: 2.5em;
      font-weight: 900;
      padding: 5px;
      margin-top: 13vh;
      width: 20vw;
    }

    .sTitles {
      padding-top: 10vh;
      height: 60vh;
      padding-left: 5px;
      h2 {
        font-size: 1.7rem;

        color: #9ed0c9;
      }

      .email {
        display: flex;

        p {
          padding: 5px;
        }
      }
    }
  }
`;

export default SContact;
