import styled from "styled-components";

import { spacing } from "../../../constants";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: ${spacing.spacingSquishLg};
  max-width: 250px;
  text-align: center;
`;

export const Img = styled.img`
  margin: ${spacing.spacingStackSm};
`;
