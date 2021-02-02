import styled from "styled-components";

import { spacing } from "../../../../../constants";
import { spacingInlineMd } from "../../../../../constants/spacing-tokens";

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const CloseButton = styled.button`
  align-self: flex-end;
  justify-self: flex-end;
  max-width: 100px;
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: ${spacing.spacingStackXxs};
`;

export const ListItem = styled.li`
  font-family: "Nunito Sans";
`;
