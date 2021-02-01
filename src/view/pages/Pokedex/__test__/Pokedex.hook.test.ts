import { renderHook, act } from "@testing-library/react-hooks";
import { useSelector } from "react-redux";

import PokedexHook from "../pokedex.hook";

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

describe("PokedexHook", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("pushes a new navigation to search page", () => {
    const { result } = renderHook(() => PokedexHook());

    act(() => result.current.handleNavigationButtonPress());

    expect(mockHistory).toHaveBeenCalledTimes(1);
    expect(mockHistory).toHaveBeenCalledWith("/search");
  });

  it("dispatches remove pokemon action", async () => {
    const { result } = renderHook(() => PokedexHook());

    act(() => result.current.handleRemoveButtonPress(8));

    expect(mockDispatch).toHaveBeenCalledTimes(1);
    expect(mockDispatch).toHaveBeenCalledWith({
      type: "pokedex/REMOVE",
      payload: 8,
    });
  });

  it("pushes a new navigation to information page", async () => {
    const { result } = renderHook(() => PokedexHook());

    act(() => result.current.handleSeeMoreButtonPress("eevee"));

    expect(mockHistory).toHaveBeenCalledTimes(1);
    expect(mockHistory).toHaveBeenCalledWith({
      pathname: "/information/eevee",
    });
  });
});
