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
        text-decoration: #000 underline;
        list-style: none;
        color: rgb(242, 243, 243);
        font-size: 1.4em;
        font-weight: 900;
      }
    }
  }

  .logo {
    width: 50px;
    height: 50px;
    margin: 5px;

    img {
      width: inherit;

      :hover {
        transition: 200ms;
        width: 53px;
        background-color: #fff;
      }
    }
  }

  nav li:hover {
    text-decoration: overline underline #000;
    color: #2a2424;
    transition: 200ms ease-out;
  }
`;
export default SHeader;
