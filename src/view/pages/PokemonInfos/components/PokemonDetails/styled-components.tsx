import { Typography } from "@useblu/ocean-components";
import styled from "styled-components";

import { spacing, colors } from "../../../../../constants";

export const GridLayout = styled.div`
  width: 100%;
  display: grid;
  grid-template-areas:
    "pokemon infos infos infos"
    "types types types types"
    "abilities abilities abilities abilities"
    "evolution evolution evolution evolution";
  margin-bottom: ${spacing.spacingStackSm};
`;

export const Avatar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-area: pokemon;
  background-color: ${colors.colorInterfaceLightPure};
  margin-right: ${spacing.spacingStackSm};
`;

export const InfosContainer = styled.div`
  grid-area: infos;
`;

export const Infos = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: ${spacing.spacingStackXxs};
  grid-template-rows: auto;
  margin-bottom: ${spacing.spacingStackLg};
`;

export const SectionTitle = styled.p`
  font-weight: bold;
  font-family: "Nunito Sans";
  font-size: 1.3em;
  margin-bottom: ${spacing.spacingStackXs};
`;

const Section = styled.div`
  margin-top: ${spacing.spacingStackSm};
`;
export const PokemonTypes = styled(Section)`
  grid-area: types;
`;

export const ListContainer = styled.ul`
  display: flex;
`;

export const ListItem = styled.li<{ selected?: boolean }>`
  ${({ selected }) => selected && "font-weight: bold;"}
  margin-right: ${spacing.spacingInlineXs};
  cursor: pointer;

  &::last-child {
    margin-right: 0;
  }
`;

export const PokemonAbilities = styled(Section)`
  grid-area: abilities;
`;

export const ShortEffect = styled.p`
  margin-top: ${spacing.spacingStackXs};
  font-family: "Nunito Sans";
`;

export const Clickable = styled.button`
  border: none;
  margin: 0;
  padding: 0;
  width: auto;
  overflow: visible;
  line-height: normal;
  background: transparent;
  cursor: pointer;
  color: inherit;
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
`;

export const PokemonEvolutionContainer = styled(Section)`
  grid-area: evolution;
`;
