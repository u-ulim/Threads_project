import React, { useEffect } from "react";
import styled from "styled-components";
import Nav from "../Components/Nav";
import Intro from "../Components/Intro";
import PostForm from "../Components/PostForm";
import TimeLine from "../Components/TimeLine";
import Loading from "../Components/Loading";
import PostSetModal from "../Components/PostSetModal";


const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 120px);
  overflow: hidden;
`;

const Home = () => {
  return (
    <Wrapper>
      <Intro />
      <Loading />
      <TimeLine />
    </Wrapper>
  );
};

export default Home;
