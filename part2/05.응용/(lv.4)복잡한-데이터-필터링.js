/**
 * [(lv.4)복잡한-데이터-필터링.js]
 *
 * filterComplexData 함수는 아래 형태의 복잡한 객체 배열을 입력받습니다:
 * [
 *   {
 *     id: 1,
 *     tags: ["React", "JavaScript"],
 *     info: { likes: 100, active: true },
 *   },
 *   {
 *     id: 2,
 *     tags: ["Node.js", "TypeScript"],
 *     info: { likes: 50, active: false },
 *   },
 *   ...
 * ]
 *
 * 두 번째 파라미터로 조건 객체(conditions)를 받습니다.
 * 조건 객체의 키는 'tags'처럼 배열 요소를 요구할 수도 있고,
 * "info.active"처럼 중첩된 프로퍼티를 '.' 문법으로 가리킬 수도 있습니다.
 *
 * 조건에 맞는 데이터만 필터링하여 반환하세요.
 * - 예: { tags: "JavaScript", "info.active": true }
 *   => tags 배열에 "JavaScript"를 포함하고, info.active가 true 인 요소만 반환
 *
 * @param {{
 *   id: number,
 *   tags: string[],
 *   info: {
 *     likes: number,
 *     active: boolean
 *   }
 * }[]} data
 * @param {Object} conditions
 * @returns {Array}
 */

function filterComplexData(data, conditions) {
    return data.filter(item => {
        return Object.entries(conditions).every(([key, value]) => {
            // 중첩된 키인지 확인 (예: "info.active")
            const keys = key.split(".");
            let target = item;

            // 중첩된 키 탐색
            for (const k of keys) {
                if (target[k] === undefined) return false;
                target = target[k];
            }

            // 배열일 경우 해당 값을 포함하는지 확인
            if (Array.isArray(target)) {
                return target.includes(value);
            }

            // 일반 값 비교
            return target === value;
        });
    });
}

/* 
1. 데이터가 배열인데 조건에 맞는 요소를 그대로 return 해야하네? 
- filter를 사용할 준비
2. 두번째로 받은 인자는 객체 데이터네?
- key를 사용해서 data와 비교해야 하네? keys 사용까지 생각
- key의 value 값이 일치하는지 검사해야 하네? enetries까지 생각 
3. key가 중첩프로퍼티일 수도 있다? 그럼 key를 split으로 나눠야 겠다.
4. split으로 나눈 keys 배열은 중첩프로퍼티를 순서대로 나누니까 data를 keys의 인덱스 순서대로 순회하면 되겠다
5. 배열이니까 for of로 순회하자
6. target[k]  === undefined면 return false-> 해당 요소 패스, 있으면 새로운 target 변경 (깊숙히 탐색)
7. 근데 밸류가 배열인 값이 있네? includes메서드를 이용해 value 값을 가지고 있는지 확인
8. 그냥 원시값이면 value값과 비교해서 참이면 반환 
*/

export { filterComplexData };
  