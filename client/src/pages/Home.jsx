import styled from "styled-components";
import ImgSlider from "../components/ImgSlider";
import Rows from "../components/Rows";
import Viewer from "../components/Viewer";

const Home = () => {
  return (
    <Container>
      <ImgSlider />
      <Viewer />
      <Rows />
    </Container>
  );
};

export default Home;

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  padding: 0 50px;
  overflow: hidden;
  display: block;
  top: 72px;
  
  @media (max-width: 768px) {
    padding: 0 15px;
  }
  &:after {
    background: url("/images/home-bg6.jpg") center center / cover
      no-repeat fixed;

    //6,7,8
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 0.3;
    z-index: -1;
  }
`;
