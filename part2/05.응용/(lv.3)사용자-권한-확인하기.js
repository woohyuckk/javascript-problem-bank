/**
 * [(lv.3)사용자-권한-확인하기.js]
 *
 * 1) user.role은 "admin" > "manager" > "user" 순으로 높음
 * 2) checkAccess(user, requiredRole)를 호출하면,
 *    user가 requiredRole 이상의 권한을 가졌으면 true, 아니면 false를 반환하세요.
 *
 * 예시) checkAccess({ name: "Alice", role: "admin" }, "user"); // true
 *      checkAccess({ name: "Bob", role: "manager" }, "admin"); // false
 *
 * @param {{name:string, role:string}} user
 * @param {string} requiredRole
 * @returns {boolean}
 */

function checkAccess(user, requiredRole) {
    
    let { role } = user;
    

    switch (role) {
        case "user":
            role = 1
            break;
        case "manager":
            role = 2
            break;
        case "admin":
            role = 3
            
    }

    switch (requiredRole) {
        case "user":
            requiredRole = 1
            break;
        case "manager":
            requiredRole = 2
            break;
        case "admin":
            requiredRole = 3
            
    }
    if (role >= requiredRole) {
        return true
    } 
        return false


}

// export를 수정하지 마세요.
export { checkAccess };
