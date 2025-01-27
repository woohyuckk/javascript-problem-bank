/**
 * [(lv.4)group-by.js]
 *
 * 객체 배열(arr)과 프로퍼티 이름(key)을 받아,
 * 해당 key의 값에 따라 객체를 묶어 { keyValue: Object[] } 형태로 반환하세요.
 * reduce 메서드를 사용하세요.
 *
 * 예:
 * const data = [
 *   { name: 'Alice', group: 'A' },
 *   { name: 'Bob', group: 'B' },
 *   { name: 'Charlie', group: 'A' }
 * ];
 * groupBy(data, 'group') =>
 * {
 *   A: [
 *     { name: 'Alice', group: 'A' },
 *     { name: 'Charlie', group: 'A' }
 *   ],
 *   B: [
 *     { name: 'Bob', group: 'B' }
 *   ]
 * }
 *
 * @param {Object[]} arr
 * @param {string} key
 * @returns {Object}
 */

// TODO: groupBy 함수를 작성하세요.
function groupBy(arr, key) {
    return arr.reduce((acc, item) => {
      // 그룹화 기준이 되는 key의 값을 추출
      const keyValue = item[key];
  
      // 해당 keyValue가 아직 acc에 없으면 빈 배열로 초기화
      if (!acc[keyValue]) {
        acc[keyValue] = [];
      }
  
      // 현재 객체를 해당 그룹 배열에 추가
      acc[keyValue].push(item);
  
      return acc; // 누적값 반환
    }, {}); // 초기값은 빈 객체
  }

// export를 수정하지 마세요.
export { groupBy };
