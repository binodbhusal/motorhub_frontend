import locationReducer, {
  createLocation,
  initialState,
} from "../../redux/slice/locationSlice";

describe("location slice", () => {
  it("should handle createLocation.pending", () => {
    const state = locationReducer(initialState, createLocation.pending());
    expect(state.isLoading).toBe(true);
    expect(state.isError).toBeNull();
  });

  it("should handle createLocation.fulfilled", () => {
    const mockPayload = { location: "Your Location Data" };
    const state = locationReducer(
      initialState,
      createLocation.fulfilled(mockPayload)
    );
    expect(state.location).toBe(mockPayload.location);
    expect(state.isLoading).toBe(false);
    expect(state.isError).toBeNull();
  });

  it("should handle createLocation.rejected", () => {
    const state = locationReducer(initialState, createLocation.rejected());
    expect(state.isLoading).toBe(false);
    expect(state.isError).toBeNull();
  });
});
