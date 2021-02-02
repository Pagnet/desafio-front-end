import styled from "styled-components";
import { Grid } from "@useblu/ocean-components";

import { spacing } from "../../../constants";

export const Container = styled(Grid.Container)`
  padding: ${spacing.spacingInsetMd};
`;

export const Content = styled(Grid.Row)`
  display: flex;
  justify-content: center;
  margin: ${spacing.spacingInsetLg} 0;
  padding: ${spacing.spacingInsetLg} 0;
`;
