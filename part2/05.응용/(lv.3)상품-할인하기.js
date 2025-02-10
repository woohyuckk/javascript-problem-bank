/**
 * [(lv.3)상품-할인하기.js]
 *
 * 1) calculateDiscount 함수는 상품 가격(price)과 쿠폰(coupon)을 입력받아 할인된 가격을 반환합니다.
 * 2) 쿠폰은 다음과 같은 형태로 입력받습니다:
 *    - { type: "percent", rate: 0.2 } => 20% 할인
 *    - { type: "fixed", amount: 1000 } => 1000원 할인
 * 3) 쿠폰이 없으면 할인 없이 원래 가격을 반환합니다.
 * 4) 가격은 0 이상이라고 가정합니다.
 *
 * @param {number} price
 * @param {{type:string, rate?:number, amount?:number}} coupon
 * @returns {number}
 */

function calculateDiscount(price, coupon) {
    if (!coupon) {
        return price
    }

    const checkCoupon =  {
            percent: price * (1 - coupon.rate),
            fixed: price - coupon.amount,
        }
    
    const totalPrice = checkCoupon[coupon.type]
    // totalPrice가 음수이면 0원
    if (totalPrice < 0) {
        return 0
    }

    return totalPrice || price


}

// export 를 수정하지 마세요.
export { calculateDiscount };
