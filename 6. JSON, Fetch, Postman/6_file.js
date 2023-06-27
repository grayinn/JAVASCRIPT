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

//---------- Tính chất chuỗi (chain)

// In ra theo thứ tự 1, 2, 3 - không dùng callback (callback hell)
function sleep(ms) {
    return new Promise(function(resolve) {
        setTimeout(resolve, ms)
    })
}

sleep(1000)
    .then(function() {
        console.log(1)
        return sleep(1000)
    })
    .then(function() {
        console.log(2)
        return sleep(1000)
    })
    .then(function() {
        console.log(3)
        return sleep(1000)
    })

// VÍ DỤ: callback hell và cách giải quyết bằng Promise
function hell(value, cb) {
    cb(value);
}

// Không sử dụng Promise dẫn đến tạo ra callback hell 
hell(1, function (valueFromA) {
    hell(valueFromA + 1, function (valueFromB) {
        hell(valueFromB + 1, function (valueFromC) {
            hell(valueFromC + 1, function (valueFromD) {
                console.log(valueFromD + 1);
            });
        });
    });
});

// Sử dụng Promise sẽ tạo ra đoạn code dễ đọc hơn và vẫn đảm bảo đúng logic
function notHell(value) {
    return new Promise(function (resolve) {
        resolve(value);
    });
}

notHell(1)
    .then(function (value) {
        return value + 1;
    })
    .then(function (value) {
        return value + 1;
    })
    .then(function (value) {
        return value + 1;
    })
    .then(function (value) {
        console.log(value + 1);
    });

//------------ PROMISE METHOD (resolve, reject, all) ----------------

// Reject giữa chừng
function sleep(ms) {
    return new Promise(function(resolve) {
        setTimeout(resolve, ms)
    })
}

sleep(1000)
    .then(function() {
        console.log(1)
        return sleep(1000)
    })
    .then(function() {
        console.log(2)
        return new Promise(function(resolve, reject) {
            reject('Co loi!')
        })
    })
    .then(function() {
        console.log(3)
        return sleep(1000)
    })
    .then(function() {
        console.log(4)
        return sleep(1000)
    })
    .catch(function(err) {
        console.log(err)
    })

/**
 *      1. promise.resolve
 *      2. promise.reject
 *      3. promise.all
 */

//  1. Promise thành công + thất bại
var promise = new Promise(
    function (resolve, reject) {
        // resolve('Thành công!')
        reject('Lỗi!')
    }
)
promise
    .then(function (result) {
        console.log('Result: ', result)
    })
    .catch(function(error) {
        console.log('Error: ', error)
    })

// Trả về promise ở trạng thái LUÔN LUÔN thành công
var promise = Promise.resolve('Thành công!')
promise
    .then(function (result) {
        console.log('Result: ', result)
    })

// Promise.all - CHẠY SONG SONG những promise (không phụ thuộc nhưng muốn lấy kq trước -> kq sau)
var promise1 = new Promise(
    function(resolve) {
        setTimeout(function() {
            resolve([1])
        }, 2000)
    }
)

var promise2 = new Promise(
    function(resolve) {
        setTimeout(function() {
            resolve([2, 3])
        }, 5000)
    }
)
// thay vì mất 7s -> 5s
Promise.all([promise1, promise2])
    .then(function(result) {
        var result1 = result[0]
        var result2 = result[1]

        console.log(result1.concat(result2))
    })
// Output: [1, 2, 3]

// Cách viết theo ES6
Promise.all([promise1, promise2])
    .then(function([result1, result2]) {
        console.log(result1.concat(result2))
    })

// Ví dụ id=001

/**
 * ----------------------------- FETCH --------------------------------
    
 *      API(url): Application programing interface
        Cổng giao tiếp giữa các phần mềm

        Backend -> API -> Fetch -> JSON
        -> JSON.parse -> javascript types
        -> render ra giao diện với HTML
 */

//  Cách dùng Fetch để lấy data trong thực tế
var postApi = 'https://jsonplaceholder.typicode.com/posts';
fetch(postApi)
    .then(function(response) {
        return response.json(); // trả về promise -> json.parse luôn rồi
        // JSON.parse: JSON -> javascript types
    })
    .then(function(posts) {
        var htmls = posts.map(function(post) { 
            return `<li>
                <h2>${post.title}</h2>
                <p>${post.body}</p>
            </li>`;
        });
        var html = htmls.join(''); // map lại thành chuỗi
        document.getElementById('post-block').innerHTML = html; // in ra giao diện trong thẻ ul
    })
    .catch(function(err) {
        alert("MESSAGE: ERROR!");
    });

//------------------- JSON SERVER -------------------------

// Fake API server


