import { SyntheticEvent } from "react";
import { Input, Button } from "@useblu/ocean-components";

import { Form, ButtonContainer } from "./styled-components";

interface SearchFormProps {
  searchInputValue: string;
  handleSearchInputChange: (e: SyntheticEvent) => void;
  handleGoButtonPress: () => void;
  handleClearButtonPress: () => void;
}

const SearchForm = ({
  searchInputValue,
  handleSearchInputChange,
  handleGoButtonPress,
  handleClearButtonPress,
}: SearchFormProps) => (
  <Form>
    <Input
      id="input-search"
      label="Search Pókemon by name or number"
      placeholder="Charizard"
      type="text"
      enterKeyHint="search"
      value={searchInputValue}
      onChange={handleSearchInputChange}
    />
    <ButtonContainer>
      <Button onClick={handleGoButtonPress}>Go</Button>
    </ButtonContainer>
    <ButtonContainer>
      <Button variant="secondary" onClick={handleClearButtonPress}>
        Clear
      </Button>
    </ButtonContainer>
  </Form>
);

export default SearchForm;
