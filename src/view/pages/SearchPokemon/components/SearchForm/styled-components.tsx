import styled from "styled-components";
import { Grid } from "@useblu/ocean-components";

import { spacing } from "../../../../../constants";

export const Form = styled(Grid.Row)`
  margin: ${spacing.spacingStackMd} 0;
`;

export const ButtonContainer = styled.div`
  align-self: flex-end;
  margin-left: ${spacing.spacingInlineMd};
`;
