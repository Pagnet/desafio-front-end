import { Typography } from "@useblu/ocean-components";
import styled from "styled-components";

import { spacing } from "../../../../../constants";

const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: ${spacing.spacingInlineMd};
`;

interface PokemonInfosProps {
  title: string;
  text: string;
}

const PokemonInfos = ({ title, text }: PokemonInfosProps) => (
  <Info>
    <Typography variant="description">{title}</Typography>
    <Typography variant="lead">{text}</Typography>
  </Info>
);

export default PokemonInfos;
