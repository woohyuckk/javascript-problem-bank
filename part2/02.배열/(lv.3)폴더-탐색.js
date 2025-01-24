/**
 * [(lv.3)폴더-탐색.js]
 *
 * 1) 아래와 같은 형태의 폴더 구조를 나타내는 객체가 있다고 가정합니다.
 *    const folder = {
 *       name: "root",
 *       subFolders: [
 *         { name: "sub1", subFolders: [] },
 *         { name: "sub2", subFolders: [ { name: "sub2_1", subFolders: [] } ] }
 *       ]
 *    };
 * 2) getAllFolderNames 라는 함수를 작성하여, 모든 폴더의 name을 배열로 반환하세요.
 *    예: ["root", "sub1", "sub2", "sub2_1"]
 * 3) 재귀함수를 활용하세요.
 *
 * @param {object} folder
 * @returns {string[]}
 */

// TODO: getAllFolderNames 함수를 작성하세요.
function getAllFolderNames(folder) {
    
    function deepReadNames(currentfolder) {
        let folderNames = [currentfolder.name];  //["root", "sub1",["sub2","sub2_1"]].
        
        // subFolders의 배열로 담겨 있다 
        for ( const subFolder of currentfolder.subFolders){
            folderNames = folderNames.concat(deepReadNames(subFolder))
        }
        
        return folderNames
        
    }
    return deepReadNames(folder);
}



// 1. deepReadNames(folder)가 실행된다
// 2. folder.name이 folderNames에 ["root"]로 기록된다.
// 3.. for문의 첫번쨰로 { name: "sub1", subFolders: [] }를 들어온다.
// 4. folderNames에 concat을 진행하는데 deepReadNames({ name: "sub1", subFolders: [] })가 실행된다
// 5. folderNames에 sub1이 담긴다 다시 for문이 시작된다. subFolder가 빈배열이기 때문에 folderNames = "sub1"을 리턴한다.
// 6. 다시 deepReadNames(folder)로 돌아와 return값(["sub1"])과 concat한다. 다음 subFolder  { name: "sub2", subFolders: [ { name: "sub2_1", subFolders: [] } ] }를 순회한다.
// 7. folderNames = ["sub2"]가 담기고 subfolders에  for문이 순회하여 ["sub2","sub2_1"]이 concat된다. return되어 folder의 ["sub","sub1",["sub2","sub2_1"]]이 된다.

// export 를 수정하지 마세요.
export { getAllFolderNames };
