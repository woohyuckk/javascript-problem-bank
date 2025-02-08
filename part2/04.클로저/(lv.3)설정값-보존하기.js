/**
 * [(lv.3)설정값-보존하기.js]
 *
 * createConfigManager 함수를 작성하세요.
 *  1) 함수 내부에 config 객체({ key: value })를 보관합니다.
 *  2) 외부에서는 이 config 객체를 직접 수정할 수 없습니다.
 *  3) 반환 객체에는 setConfig(key, value)와 getConfig(key) 메서드가 있어야 합니다.
 *
 * 예)
 *   const manager = createConfigManager();
 *   manager.setConfig("theme", "dark");
 *   console.log(manager.getConfig("theme")); // "dark"
 *
 * @returns {{ setConfig: Function, getConfig: Function }}
 */

// TODO: createConfigManager 함수를 작성하세요.
function createConfigManager() {
    // config 객체를 클로저로 유지하여 외부에서 직접 접근 불가능하도록 보호
    const config = {};

    return {
        // 설정 값을 추가하거나 변경하는 메서드
        setConfig(key, value) {
            config[key] = value;
        },
        
        // 설정 값을 가져오는 메서드
        getConfig(key) {
            return config[key];
        }
    };
}


// export 를 수정하지 마세요.
export { createConfigManager };


