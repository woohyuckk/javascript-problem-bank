/**
 * [(lv.2)빈도수 세기.js]
 *
 * 1) getFrequency(arr)는 주어진 배열 내 요소들의 등장 횟수를 객체로 반환합니다.
 *    예: getFrequency(["apple", "banana", "apple"]) -> { apple: 2, banana: 1 }
 * 2) reduce, forEach 등을 이용할 수 있습니다.
 * 3) 문자열, 숫자 등 어떤 타입이든 동작하도록 처리하세요.
 *
 * @param {any[]} arr
 * @returns {object} - key: 원소 값, value: 등장 횟수
 */

// TODO: 함수를 작성하세요.
// function getFrequency(arr) {
//     const result = arr.reduce((acc,res)=>{
//         acc[res] =  (acc[res] || 0)+1;
//         return acc
//     },{})
//     return result
// }

function getFrequency(arr){

  const result = arr.reduce((acc,res)=>{
    acc[res] = (acc[res] || 0 )+1;
    return acc 
  },{})
  return result 
}
function getFrequency(arr) {
    const map = new Map();
  
    arr.forEach((item) => {
      map.set(item, (map.get(item) || 0) + 1);
    });
  
    // Map을 일반 객체로 변환
    return Object.fromEntries(map);
  }

// export 를 수정하지 마세요.
export { getFrequency };
