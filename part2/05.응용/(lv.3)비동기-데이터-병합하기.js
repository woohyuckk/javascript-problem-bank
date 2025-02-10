/**
 * [(lv.3)비동기-데이터-병합하기.js]
 *
 * 1) asyncDataMerger 함수는 여러 개의 비동기 함수를 인자로 받습니다.
 * 2) 각 비동기 함수는 배열 형태의 데이터를 반환합니다(예: [{ id, ... }, ...]).
 * 3) 모든 비동기 함수를 병렬로 실행하여, 결과 배열들을 'id' 기준으로 병합하세요.
 * 4) 중복된 'id'를 가진 객체들은 속성을 덮어쓰되, 나중에 도착한 비동기의 데이터가 우선입니다.
 * 5) 최종 배열은 'id' 오름차순으로 정렬하여 반환하세요.
 *
 * - 예)
 *   함수 A가 [ { id:1, name:'Alice'}, { id:2, age:20 } ]
 *   함수 B가 [ { id:1, age:25 }, { id:3, gender:'F'} ]
 *   => 최종 병합 결과: [
 *         { id:1, name:'Alice', age:25 },
 *         { id:2, age:20 },
 *         { id:3, gender:'F'}
 *      ]
 * - 단, 최종 배열의 순서는 'id' 오름차순으로 정렬합니다.
 *
 * @param  {Function[]} asyncFunctions
 * @returns {Promise<Array>}
 */

// TODO: asyncDataMerger 함수를 작성하세요.
async function asyncDataMerger(...asyncFunctions) {
    // 1) 모든 비동기 함수를 병렬로 실행
    const results = await Promise.all(asyncFunctions.map(fn => fn()));
    // results는 예: [
    //   [ { id:1, name:'Alice'}, { id:2, age:20 } ],
    //   [ { id:1, age:25 }, { id:3, gender:'F'} ],
    //   ...
    // ]
  
    // 2) id -> 객체 형태로 저장할 Map(혹은 plain object) 생성
    const merged = {};
  
    // 3) 함수 결과들을 순서대로 순회하여 병합
    for (const arr of results) {
      for (const item of arr) {
        const { id } = item;
        // 기존에 id가 없으면 새로 생성
        if (!merged[id]) {
          merged[id] = {};
        }
        // "나중에 들어온 데이터"로 덮어씌움
        merged[id] = { ...merged[id], ...item };
      }
    }
  
    // 4) Object.values로 객체를 배열로 바꾸고, id 오름차순 정렬
    const finalArray = Object.values(merged).sort((a, b) => a.id - b.id);
    return finalArray;
  }

// export를 수정하지 마세요.
export { asyncDataMerger };
