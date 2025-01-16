import { removeAndInsert } from "../../../part1/06.배열/(lv.2)[1]배열-메서드-splice.js";
import { jest } from "@jest/globals";

describe("(lv.2)배열-메서드-splice.js 테스트", () => {
  it("splice 메서드를 사용해야 한다.", () => {
    const spliceSpy = jest.spyOn(Array.prototype, "splice");
    removeAndInsert([1, 2, 3], 1, 1, "a");
    expect(spliceSpy).toHaveBeenCalled();
    spliceSpy.mockRestore();
  });

  it("start 인덱스부터 deleteCount만큼 제거하고, 그 자리에 새 항목을 삽입해야 한다.", () => {
    const arr = [1, 2, 3, 4];
    const result = removeAndInsert(arr, 1, 2, "a", "b");
    expect(result).toEqual([1, "a", "b", 4]);
  });

  it("items가 없으면 단순히 요소를 제거만 한다.", () => {
    const arr = ["x", "y", "z"];
    const result = removeAndInsert(arr, 0, 2);
    expect(result).toEqual(["z"]);
  });

  it("deleteCount가 0이면 요소를 제거하지 않고 삽입만 한다.", () => {
    const arr = [10, 20, 30];
    const result = removeAndInsert(arr, 1, 0, "A");
    expect(result).toEqual([10, "A", 20, 30]);
  });

  it("원본 배열을 조작하고, 조작된 배열을 그대로 반환해야 한다.", () => {
    const arr = ["apple", "banana", "cherry"];
    const result = removeAndInsert(arr, 1, 1, "grape");
    expect(result).toBe(arr);
    expect(result).toEqual(["apple", "grape", "cherry"]);
  });
});
