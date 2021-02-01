import styled from "styled-components";

import { spacing } from "../../../constants";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: ${spacing.spacingSquishSm};
  padding: ${spacing.spacingInsetXs};
  border: 1px solid #333;
  border-radius: 8px;
`;

export const ButtonContainer = styled.div`
  margin-bottom: ${spacing.spacingStackXxs};
`;
