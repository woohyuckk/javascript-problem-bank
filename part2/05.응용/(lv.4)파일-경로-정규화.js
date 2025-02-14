/**
 * [(lv.4)파일-경로-정규화.js]
 *
 * - normalizePath 함수를 작성하세요.
 * - 이 함수는 파일 경로에서 '.'와 '..'를 처리하여 경로를 정규화합니다.
 * - '/' 문자로 구분된 경로 요소를 배열로 만든 뒤,
 *   '.'이면 무시, '..'이면 이전 요소 제거를 통해 처리하세요.
 * - 시작과 끝의 '/' 처리를 주의하되, 중간의 연속된 '/'는 하나로 합쳐야 합니다.
 * - 예: "/a/b/../c" => "/a/c", "./a//b/./c/" => "a/b/c/", "/a/../../b" => "/b"
 *
 * @param {string} path
 * @returns {string}
 */

function normalizePath(path) {
    const parts = path.split('/'); // '/'를 기준으로 분할
    const stack = [];
    let isAbsolute = path.startsWith('/'); // 절대 경로 여부 확인

    for (const part of parts) {
        if (part === '' || part === '.') {
            continue; // 빈 문자열이나 '.'는 무시
        }
        if (part === '..') {
            if (stack.length > 0 && stack[stack.length - 1] !== '..') {
                stack.pop(); // 이전 디렉토리 제거
            } else if (!isAbsolute) {
                stack.push('..'); // 상대 경로일 때만 '..' 유지
            }
        } else {
            stack.push(part); // 정상적인 경로 추가
        }
    }

    let normalizedPath = stack.join('/');
    if (isAbsolute) {
        normalizedPath = '/' + normalizedPath;
    }
    if (path.endsWith('/') && normalizedPath !== '/') {
        normalizedPath += '/'; // 마지막 '/' 유지
    }

    return normalizedPath;
}

// export 를 수정하지 마세요.
export { normalizePath };