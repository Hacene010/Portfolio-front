import styled from 'styled-components';

const SHeader = styled.div`
  background-color: rgb(47, 71, 105);
  animation-name: header;
  animation-duration: 1s;
  animation-timing-function: ease-in-out;

  @keyframes header {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  nav {
    ul {
      width: 70%;
      margin: auto;
      display: flex;
      justify-content: space-around;
      align-items: center;

      li {
        list-style: none;
        color: rgb(242, 243, 243);
        font-size: 1.4em;
        font-weight: 900;
      }
      a {
        text-decoration: none;
      }
    }
  }

  .logo {
    width: 50px;
    height: 50px;
    margin: 5px;

    img {
      width: inherit;
      border-radius: 40px;

      :hover {
        transition: 200ms;
        width: 53px;
        background-color: #fff;
      }
    }
  }

  nav li:hover {
    transition: 0.25s ease-in-out;
    color: #b5b8bd;
    border-bottom: 2px solid #fff;
    border-top: 2px solid #fff;
  }
`;
export default SHeader;
