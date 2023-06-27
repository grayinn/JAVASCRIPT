/**
 * -------------------- JSON (Javascript Object Notation) ------------------------------
 
 *  1. Là một định dạng dữ liệu - là chuỗi
 *  2. JSON: Number, boolean, null, array, object, string
 * 
 *  Stringify / parse (chuyển đổi và trả lại)
 */

// var json = ["Java","PHP"]
// var json = '{"name":"Hong Nhung","age":18}'

// 1. Chuyển đổi json thành javascript - parse
// var a = '1'
// console.log(JSON.parse(a))

var json = '{"name":"Hong Nhung","age":18}'
console.log(JSON.parse(json))

// 1. Chuyển đổi javascript thành JSON - Stringify
console.log(JSON.stringify([
    'Javascript',
    'PHP'
]))


/**
 * ------------------------------ PROMISE (SYNC, ASYNC) -----------------------------
 *      1. sync: 
 *          - Viết trước chạy trước, viết sau chạy sau
 *      2. async:
 *      3. Lý thuyết, cách hoạt động:
 */

// 1. Sync vs Async
setTimeout(function() {
    console.log(1)
}, 1000)
console.log(2)

// 2. Async: setTimeout, setInterval, fetch, xmlHttpRequest, file reading, requestAnimation

// Ví dụ:
setTimeout(function() {
    console.log('Dòng này sẽ in ra sau')
}, 0)
// setTimeout là tác vụ bất động bộ (async)

console.log('Dòng này sẽ in ra trước') // Đây là tác vụ đồng bộ (sync)

// Pain:    - Callback hell (tác vụ phụ thuộc vào nhau)
//          - Pyramid of doom

/**
 * ---- 3. Lý thuyết, cách hoạt động
 */
var promise = new Promise(
    //Executor
    function(resolve, reject) {
        // Logic
        // Thành công: resolve()
        // Thất bại: reject()
        reject()
    }
)

promise
    .then(function() {                  // nhận callback - thực thi khi resolve được gọi
        console.log('Thành công rồi!')
    })
    .catch(function() {                 // - thực thi khi reject được gọi
        console.log('Thất bại!')
    })
    .finally(function() {               // - khi xong
        console.log('Xong!')
    })

/** Promise có 3 trạng thái:
    - Pending
    - Fulfilled
    - Rejected
*/


