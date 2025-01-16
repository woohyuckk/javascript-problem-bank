/**
 * [(lv.1)sum-up-to.js]
 *
 * 1) sumUpTo 함수는 숫자 n을 파라미터로 받습니다.
 * 2) n이 1 이상이면 1부터 n까지의 합을 while문으로 구하여 반환하세요.
 * 3) n이 0 이하이면 0을 반환하세요.
 * 4) 예시: sumUpTo(5) -> 15
 *
 * @param {number} n
 * @returns {number} 1부터 n까지의 합 (n이 0 이하일 경우 0)
 */
function sumUpTo(n) {
  let sum = 0;
  if (n > 0) {
    let i = 1
    while (i <= n) {
      sum += i;
      i++
    }
  }

  else if (n <= 0) {
    return 0;
  }
  return sum;
}
  // TODO: n이 1 이상이면 1부터 n까지의 합을 반환, 0 이하이면 0을 반환


// export를 수정하지 마세요.
export { sumUpTo };
