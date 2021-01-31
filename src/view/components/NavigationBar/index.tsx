import { useSelector } from "react-redux";
import { Typography } from "@useblu/ocean-components";

import { ROUTES } from "../../../constants";
import pokeball from "../../assets/pokeball.png";
import { pokedexSelectors } from "../../../store/pokedex";

import {
  Spacer,
  Nav,
  ImageLinkContainer,
  LinkContainer,
  Link,
} from "./styled-components";

const NavigationBar = () => {
  const totalPokemon = useSelector(pokedexSelectors.totalPokemonSaved);
  return (
    <>
      <Spacer />
      <Nav>
        <ImageLinkContainer>
          <Link to={ROUTES.SEARCH}>
            <img src={pokeball} alt="navigate to search page" width={100} />
          </Link>
        </ImageLinkContainer>
        <LinkContainer>
          <Link to={ROUTES.POKEDEX}>
            <Typography variant="lead" inverse>
              Pokedex ({totalPokemon})
            </Typography>
          </Link>
        </LinkContainer>
        <LinkContainer>
          <Link to={ROUTES.SEARCH}>
            <Typography variant="lead" inverse>
              Search
            </Typography>
          </Link>
        </LinkContainer>
      </Nav>
    </>
  );
};

export default NavigationBar;
