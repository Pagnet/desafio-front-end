import { Typography, Button } from "@useblu/ocean-components";

import { Container, ButtonContainer } from "./styled-components";

interface PokemonCardProps {
  pokemon: any;
  primaryButtonText: string;
  primaryButtonAction: () => void;
  secondaryButtonText: string;
  secondaryButtonAction: () => void;
}

const PokemonCard = ({
  pokemon,
  primaryButtonText,
  primaryButtonAction,
  secondaryButtonText,
  secondaryButtonAction,
}: PokemonCardProps) => (
  <Container>
    <Typography variant="lead">{pokemon.name}</Typography>
    <Typography variant="description">#{pokemon.id}</Typography>
    <img src={pokemon.image} alt={pokemon.name} width={150} />
    <ButtonContainer>
      <Button onClick={primaryButtonAction}>{primaryButtonText}</Button>
    </ButtonContainer>
    <ButtonContainer>
      <Button variant={"secondary"} onClick={secondaryButtonAction}>
        {secondaryButtonText}
      </Button>
    </ButtonContainer>
  </Container>
);

export default PokemonCard;
