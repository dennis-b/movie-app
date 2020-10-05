import styled from 'styled-components';
import { Grid } from "@material-ui/core";

export const StModalContainer = styled.div`
  flex: 1;
  position: absolute;
  left: 0;
  width: 100%;
  right: 0;
  bottom: 0;
  top: 0;
`;

export const StModalHeader = styled.div`
  height: 2rem;
  padding: 1rem;
  background-color: #152539;
  border-bottom: 1px solid #353F61;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StModalCloseButton = styled.div`
  margin-left: auto;
  margin-right: 1rem;
  cursor: pointer;
`;

export const StModalTitle = styled.div`
   font-family: 'Dosis';
   font-style: normal;
   font-weight: bold;
   font-size: 21px;
   line-height: 20px;
   text-transform: uppercase;
   color:#6FCF97;
   flex-grow: 1;
`;

export const StModalContent = styled(Grid)`
    &&{
      margin: 0;
      width: 100%;
      padding: 20px;
      height: 75%;
    }
`;
