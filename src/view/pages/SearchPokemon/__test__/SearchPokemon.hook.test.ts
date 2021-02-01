import { renderHook, act } from "@testing-library/react-hooks";
import { SyntheticEvent } from "react";
import { useSelector } from "react-redux";

import SearchPokemonHook from "../search-pokemon.hook";

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  useDispatch: () => mockDispatch,
  useSelector: jest.fn(),
}));

const mockHistory = jest.fn();
jest.mock("react-router-dom", () => ({
  useHistory: () => ({
    push: mockHistory,
  }),
}));

describe("SearchPokemonHook", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("changes search input value", async () => {
    const { result } = renderHook(() => SearchPokemonHook());

    const eventMock = ({
      target: { value: "Testing" },
    } as unknown) as SyntheticEvent;

    act(() => result.current.handleSearchInputChange(eventMock));

    expect(result.current.searchInputValue).toEqual("Testing");
  });

  it("dispatches clear action", async () => {
    const { result } = renderHook(() => SearchPokemonHook());

    act(() => result.current.handleClearButtonPress());

    expect(result.current.searchInputValue).toEqual("");
    expect(mockDispatch).toHaveBeenCalledTimes(1);
    expect(mockDispatch).toHaveBeenCalledWith({
      type: "searchPokemon/SEARCH_CLEAR",
    });
  });

  it("dispatches search pokemon request action", async () => {
    const { result } = renderHook(() => SearchPokemonHook());

    const eventMock = ({
      target: { value: "Testing" },
    } as unknown) as SyntheticEvent;

    act(() => result.current.handleSearchInputChange(eventMock));
    act(() => result.current.handleGoButtonPress());

    expect(mockDispatch).toHaveBeenCalledTimes(1);
    expect(mockDispatch).toHaveBeenCalledWith({
      type: "searchPokemon/SEARCH_REQUEST",
      payload: "Testing",
    });
  });

  it("dispatches save on pokedex action", async () => {
    (useSelector as jest.Mock).mockImplementation((callback) =>
      callback({
        searchPokemon: {
          loading: false,
          error: false,
          pokemonFound: { name: "Vaporeon" },
        },
      })
    );
    const { result } = renderHook(() => SearchPokemonHook());

    act(() => result.current.handleSaveButtonPress());

    expect(mockDispatch).toHaveBeenCalledTimes(1);
    expect(mockDispatch).toHaveBeenCalledWith({
      type: "pokedex/SAVE",
      payload: { name: "Vaporeon" },
    });
    (useSelector as jest.Mock).mockReset()();
  });

  it("does not dispatch save on pokedex action when pokemonFound is undefined", async () => {
    const { result } = renderHook(() => SearchPokemonHook());

    act(() => result.current.handleSaveButtonPress());

    expect(mockDispatch).toHaveBeenCalledTimes(0);
  });

  it("pushes a new navigation", async () => {
    const { result } = renderHook(() => SearchPokemonHook());

    act(() => result.current.handleSeeMoreButtonPress("eevee"));

    expect(mockHistory).toHaveBeenCalledTimes(1);
    expect(mockHistory).toHaveBeenCalledWith({
      pathname: "/information/eevee",
    });
  });

  it("dispatches clear action after unmount", async () => {
    const { unmount } = renderHook(() => SearchPokemonHook());

    unmount();

    expect(mockDispatch).toHaveBeenCalledTimes(1);
    expect(mockDispatch).toHaveBeenCalledWith({
      type: "searchPokemon/SEARCH_CLEAR",
    });
  });
});
