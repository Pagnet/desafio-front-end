import { Typography } from "@useblu/ocean-components";

import pokeLoading from "../../assets/pokeloading.gif";

import { Container, Img } from "./styled-components";

interface LoaderProps {
  message: string;
}

const Loader = ({ message }: LoaderProps) => (
  <Container>
    <Typography variant="lead">{message}</Typography>
    <Img src={pokeLoading} alt="" width={150} />
  </Container>
);

export default Loader;
