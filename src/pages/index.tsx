import axios from "axios";
import type { NextPage } from "next";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { socketState, useSocket } from "src/state/socketState";
import styled from "styled-components";

const Wrapper = styled('div')`
  background-color: yellow;
  width: 500px;
  height: 600px;
`

const Home: NextPage = () => {
  const socket = useRecoilValue(socketState).socket;
  const { connectSocket } = useSocket();

  useEffect(() => {
    if(!socket){
      console.log('1')
      connectSocket();
    }
  }, []);
  
  return <Wrapper>asd</Wrapper>;
};

export default Home;
