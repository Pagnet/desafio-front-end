import { renderHook, act } from "@testing-library/react-hooks";

import * as requestService from "../../../../services/requests";

import PokemonInfoHook from "../pokemon-infos.hook";

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  useDispatch: () => mockDispatch,
  useSelector: jest.fn(),
}));

jest.mock("../../../../services/requests", () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe("SearchPokemonHook", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("dispatches request pokemon information action when hook is rendered", () => {
    renderHook(() => PokemonInfoHook("eevee"));

    expect(mockDispatch).toHaveBeenCalledTimes(1);
    expect(mockDispatch).toHaveBeenCalledWith({
      type: "searchPokemon/SEARCH_REQUEST",
      payload: "eevee",
    });
  });

  it("dispatches request pokemon information action when handleTryAgainButton is called", () => {
    const { result } = renderHook(() => PokemonInfoHook("eevee"));

    act(() => {
      result.current.handleTryAgainButton();
    });

    expect(mockDispatch).toHaveBeenCalledTimes(2);
    expect(mockDispatch).toHaveBeenCalledWith({
      type: "searchPokemon/SEARCH_REQUEST",
      payload: "eevee",
    });
  });

  it("requests to given url when requestPokemonByType is called", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      PokemonInfoHook("eevee")
    );

    jest
      .spyOn(requestService, "default")
      .mockImplementation(() =>
        Promise.resolve({ pokemon: ["charizard", "ekans"] })
      );

    act(() => {
      result.current.requestPokemonByType("https:/someurl.com");
    });
    await waitForNextUpdate();

    expect(requestService.default).toHaveBeenCalledTimes(1);
    expect(requestService.default).toHaveBeenCalledWith("https:/someurl.com");
    expect(result.current.pokemonListByType).toEqual({
      loading: false,
      error: false,
      pokemonList: ["charizard", "ekans"],
    });
  });

  it("requests to given url when requestAbilityShortEffect is called", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      PokemonInfoHook("eevee")
    );

    jest.spyOn(requestService, "default").mockImplementation(() =>
      Promise.resolve({
        effect_entries: [
          {
            short_effect: "Lorem ipsum",
            language: {
              name: "en",
            },
          },
        ],
      })
    );

    act(() => {
      result.current.requestAbilityShortEffect("https:/someurl.com");
    });
    await waitForNextUpdate();

    expect(requestService.default).toHaveBeenCalledTimes(1);
    expect(requestService.default).toHaveBeenCalledWith("https:/someurl.com");
    expect(result.current.pokemonAbilityState).toEqual({
      loading: false,
      error: false,
      shortEffect: "Lorem ipsum",
    });
  });
});
