import styled from "styled-components";

import { spacing, colors } from "../../../../../constants";

export const EvolutionContainer = styled.div`
  display: inline-block;
`;

export const PokemonNameContainer = styled.div`
  margin-left: ${spacing.spacingInlineXxs};
`;

export const PokemonName = styled.p`
  font-family: "Nunito Sans";
  font-size: 1.2em;
  border-left: 1px solid ${colors.colorInterfaceDarkDeep};
  border-bottom: 1px solid ${colors.colorInterfaceDarkDeep};
  padding: ${spacing.spacingInsetSm};
`;
