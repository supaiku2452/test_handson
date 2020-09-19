import { renderHook } from "@testing-library/react-hooks";
import { useFetchXXX } from "../useFetchXXX";

describe("useFetchXXX", () => {
  test("a call test using waitForNextUpdate pattern.", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchXXX());
    result.current.call();
    await waitForNextUpdate();
    expect(result.current.data).toEqual("test");
  });
});
