import styled from "styled-components";
import InfiniteScroll from "react-infinite-scroll-component";

export const LEFT_BAR_WIDTH = 60
export const TOP_BAR_HEIGHT = 60

export const StTopBar: any = styled.div`
  height: ${TOP_BAR_HEIGHT}px;
  border-bottom: solid 1px #F0EFEF;
  display: flex;
  margin-left: ${LEFT_BAR_WIDTH}px;
  align-items: center;
`;

export const StLeftBar: any = styled.div`
  left: 0;
  top: 0;
  border-right: solid 1px #F0EFEF;
  display: flex;
  flex-direction: column;
  background: white;
  position: absolute;
  bottom: 0;
  width: ${LEFT_BAR_WIDTH}px;
  align-items: center;
`;

export const StContent: any = styled.div`
   margin-left: ${LEFT_BAR_WIDTH}px;
   width: calc(100% - ${LEFT_BAR_WIDTH}px);
   background: red;
   min-height: 100px;
`;

export const StInfiniteScroll: any = styled(InfiniteScroll)`
  &&{
    width: 60%;
    padding: 1rem;
    margin: auto;
    margin-top: 2rem;
  }
`;

