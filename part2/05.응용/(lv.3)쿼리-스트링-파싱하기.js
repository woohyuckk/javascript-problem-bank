/**
 * [(lv.3)쿼리-스트링-파싱하기.js]
 *
 * 1) parseQueryString 함수는 "?search=apple&page=2" 형태의 쿼리스트링을 객체로 변환합니다.
 * 2) 값이 없으면 빈 문자열("")로 처리합니다.
 * 3) 쿼리 파라미터가 없거나 빈 문자열인 경우, 빈 객체({})를 반환합니다.
 * 4) 항상 "?"로 시작한다고 가정합니다.
 *
 * @param {string} queryString
 * @returns {object}
 */

function parseQueryString(queryString) {

 // 1) 쿼리 파라미터가 없거나, queryString이 "?"인 경우 => 빈 객체 반환
  //    (정의되지 않은 경우도 방어적으로 처리)
  if (!queryString || queryString === '?' ) {
    return {};
  }

  // 2) URLSearchParams로 파싱
  const params = new URLSearchParams(queryString);
  
  // 3) 결과를 저장할 객체
  const result = {};

  // 4) for...of로 순회하면서 key/value 추출
  for (const [key, value] of params) {
    // 만약 value가 비어 있다면 빈 문자열 처리
    // (실제로 URLSearchParams에서 빈 값은 그냥 '', null은 나오지 않음)
    result[key] = value === undefined ? '' : value;
  }

  return result;
}


export { parseQueryString };
