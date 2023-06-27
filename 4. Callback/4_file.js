//---------------------------------------------------------------------------------------------------------
/**
 * CALLBACK?
 * Là hàm (function) được truyền qua đối số khi gọi các hàm khác
 *      1. Là hàm
 *      2. Được truyền qua đối số
 */
function myFunction(param) {
    if (typeof param === 'function') {
        param('Học lập trình')
    }
}

function myCallback(value) {
    console.log('Value: ', value)
}

myFunction(myCallback)

// CALLBACK - PHẦN 2
/**
 *      1. Là hàm
 *      2. Truyền qua đối số
 *      3. Được gọi lại (trong hàm nhận đối số)
 */

//--- map
var courses = [
    'Javascript',
    'PHP',
    'Ruby'
]
courses.map(function(course) {
    console.log(course)
})
//------------------------------------------------------------------------

// TỰ ĐỊNH NGHĨA MAP2
Array.prototype.map2 = function(callback) {
    //map hđ như thế nào
    //lặp qua các array
    // console.log(this)       //đây là array. this = courses (thằng nó gọi tới phthuc này courses.map2)
    //viec 1. lặp
    var output = []
    var arrayLength = this.length
    for (var i = 0; i < arrayLength; ++i) {
        // nhận được cái function trên dòng 38 (callback) rồi thì ở đây "GỌI LẠI"
        var result = callback(this[i], i) // gọi lại function mà ko truyền cái gì ở đây thì ko nhận đc đâu nhá
        // console.log('Result: ', result)
        //đẩy một phần tử vô cái array ntnao?
        output.push(result)
    }    //lặp từ chỉ mục 0, ddkien i < array.length //tăng i lên 1
    return output
}

var courses = [
    'Javascript',
    'PHP',
    'Ruby'
]

// viec 2. goi lại cái callback -> trả về course, trả về index ở tham số t2
// để có thể gọi lại đc thì truyền vào map2 một function (tự định nghĩa ra)

var htmls = courses.map2(function(course) { // định nghĩa hàm nhận về 2 cái tham số, thì khi gọi hàm
    //callback(this[i], i) --> truyền vào đối số tương ứng với tham số là  console.log(index, course) sẽ nhận đc

                  //truyền function ở dòng này nhận function ở dòng 38, tự đặt tên là callback
    return `<h2>${course}</h2>`                      
})

//---output cuối cùng
console.log(htmls.join(''))

//------------------------------------------------------------------------------------------

/** CALLBACK HOẠT ĐỘNG NHƯ THẾ NÀO?
 * 
 * 1. Mỗi lần lặp qua, truyền một cái callback vào này
 *              (function(course) {
 *          return `<h2>${course}</h2>`   })
 * 
 * 2. Sau đó trong này nó lặp qua
 *      for (var i = 0; i < arrayLength; ++i) {
            var result = callback(this[i], i) 
            output.push(result)
        } 

    3. Mỗi lần lặp qua call ngược lại cái callback
            var result = ****callback****(this[i], i)
        Nó nhận lấy kết quả (result) return từ callback
        --> cho nên mới xhien cú pháp return như này: 
        return `<h2>${course}</h2>` 

    4. Lấy được kết quả (result), push vào cái mảng trống output
        var output = []
        var arrayLength = this.length
        for (var i = 0; i < arrayLength; ++i) {
            var result = callback(this[i], i) 
            output.push(result)
        }
    5. Và sau cùng nó return lại cái mảng đó
            return output
*/ 
//-------------------------------------------------------------------------------------------------

// CODE CHỈNH SỬA KHÔNG CÓ COMMENT
Array.prototype.map2 = function(callback) {
    var output = []
    var arrayLength = this.length
    for (var i = 0; i < arrayLength; ++i) {
         var result = callback(this[i], i) 
         output.push(result)
    } 
    return output
}

var courses = [
    'Javascript',
    'PHP',
    'Ruby'
]

var htmls = courses.map2(function(course) { 
    return `<h2>${course}</h2>`                      
})
//---output cuối cùng
console.log(htmls.join(''))

//----------------------------------------
/**----------------------------------------------------------------------
 * BÀI TẬP: Ở bài trước chúng ta đã được học cách tạo phương thức map2 
 * hoạt động giống với phương thức map của Array.
Bây giờ, các bạn hãy tạo ra phương thức myMap hoạt động tương tự 
phương thức map2 và map nhé.
 */
Array.prototype.myMap = function(cb) {
    var output = []
    var arrayLength = this.length
    for (var i = 0; i < arrayLength; i++) {
        output.push(cb(this[i], i))
    } 
    return output
}

// Expected results: gọi myMap
const numbers = [1, 2, 3];

console.log(numbers.myMap(function (number) {
    return number * 2;
})) 
// Output: [2, 4, 6]

console.log(numbers.myMap(function (number, index) {
    return number * index;
})) 
// Output: [0, 2, 6]

//-----------------------------------------------------------------------
// CALLBACK: forEach, find, filter, some, every, reduce
var courses4 = [
    'Javascript',
    'PHP'
]
courses.length = 10
console.log(courses) // độ dài 10 nhưng có 8 phần tử trống
for (var index in courses) {     // chỉ lặp qua các phần tử thực
    console.log(courses[index])
}

// My forEach() method - forEach2
Array.prototype.forEach2 = function(callback) {
    for (var index in this) {
        if (this.hasOwnProperty(index)) {          // Loại bỏ cái forEach2 vừa thêm vào
            callback(this[index], index, this)
        }
    }
}

var courses = [
    'Javascript',
    'PHP',
    'Ruby'
]

courses.forEach2(function(course, index, array) {
    console.log(course, index, array)
})

// CALLBACK: filter() method - filter 2 (lọc thỏa mãn điều kiện của các bạn, tìm course trả về mảng mới có coin > 700)
Array.prototype.filter2 = function(callback) {
    var output = []
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            var result = callback(this[index], index, this)
            if (result) {
                output.push(this[index])
            }
        }
    }
    return output
}

var course = [
    {
        name: 'Javascript',
        coin: 680
    },
    {
        name: 'PHP',
        coin: 860
    },
    {
        name: 'Ruby',
        coin: 980
    }
]

var filterCourses = courses.filter2(function(course, index, array) {
    return course.coin > 700
})

console.log(filterCourses)

/**-------------------------------------------------------------------------------
 * Ở bài trước chúng ta đã được học cách tạo phương thức filter2 hoạt động 
 * giống với phương thức filter của Array.
Bây giờ, các bạn hãy tạo ra phương thức myFilter hoạt động tương tự phương thức 
filter2 và filter nhé.
 */
Array.prototype.myFilter = function(cb) {
    var output = []
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            if (cb(this[index], index, this)) {
                output.push(this[index]);
            }
        }
    }
    return output
}

/**
Expected results:
const numbers = [1, 2, 3, 4]
console.log(numbers.myFilter(function (number) {
    return number % 2 === 0;
})); Output: [2, 4]

console.log(numbers.myFilter(function (number, index) {
    return index % 2 === 0;
})); Output: [1, 3]

console.log(numbers.myFilter(function (number, index, array) {
    return array.length % 2 === 0;
})); Output: [1, 2, 3, 4]
 */

//-----------------------------------------------------------------------------------
// CALLBACK - some method() - some2 (tối thiểu 1 phần tử trong mảng thỏa đk)
// trả về true/false
//ng học viên này tối thiểu đã học 1 khóa học
Array.prototype.some2 = function(callback) {
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            if (callback(this[index], index, this)) {
                return true
            }
        }
    }
    return false
}

var courses = [
    {
        name: 'Javascript',
        coin: 680,
        isFinish: true
    },
    {
        name: 'PHP',
        coin: 860,
        isFinish: false
    },
    {
        name: 'Ruby',
        coin: 980,
        isFinish: false
    },
]

var result = courses.some2(function(course, index, array) {
    return course.isFinish === true
})

console.log(result)


//----------------------------------------------------------------------------------
//CALLBACK - every (true/false)
Array.prototype.every2 = function(callback) {
    var output = true
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            var result = callback(this[index], index, this)
            if (!result) {
                output = false
                break
            }
        }
    }
    return output
}

var courses = [
    {
        name: 'Javascript',
        coin: 680,
        isFinish: true
    },
    {
        name: 'PHP',
        coin: 860,
        isFinish: false
    },
    {
        name: 'Ruby',
        coin: 980,
        isFinish: false
    },
]
var result = courses.every2(function(course, index, array) {
    return course.isFinish 
})

console.log(result)


