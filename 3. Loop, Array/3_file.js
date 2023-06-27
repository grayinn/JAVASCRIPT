// ------------------------- 3. LỆNH RẼ NHÁNH, VÒNG LẶP----------------------------------

// CÂU LỆNH RẼ NHÁNH IF ELSE
var date = 3

if (date === 2) {
    console.log('Hôm nay là thứ 2')
} else if (date === 3) {
    console.log('Hôm nay là thứ 3')
} else if (date === 4) {
    console.log('Hôm nay là thứ 4')
} else {
    console.log('Không biết')
}


// CÂU LỆNH RẼ NHÁNH SWITCH - case
var date = 2
switch(date) {
    case 2:
        console.log('Hôm nay là thứ 2')
        break
    case 3:
        console.log('Hôm nay là thứ 3')
        break
    case 4:
        console.log('Hôm nay là thứ 4')
        break
    case 5:
        console.log('Hôm nay là thứ 5')
        break
    default:
        console.log('Không biết')
}

//
var date = 2
switch(date) {
    case 2:
    case 3:
    case 4:
        console.log('Hôm nay là thứ 2, 3, 4')
        break
    case 5:
        console.log('Hôm nay là thứ 5')
        break
    default:
        console.log('Không biết')
}

// KHI NÀO DÙNG IF ELSE, KHI NÀO DÙNG SWITCH
// 1. If-else: khi dùng toán tử. TÍNH ĐÚNG SAI (toán tử)
// 2. Switch: biết trước giá trị rồi (dùng ít case thì chuyển qua if-else)


//----- TOÁN TỬ 3 NGÔI - TERNARY OPERATOR
//      1. Giai quyết bài toán giá khóa học > 0 thì in ra giá, = 0 thì in ra 'Miễn phí'
// CÁCH THÔNG THƯỜNG

var course = {
    name: 'Javascript',
    coin: 250
}
if (course.coin > 0) {
    console.log(`${course.coin} Coins`)
} else {
    console.log('Miễn phí')
}

// 3 ngôi là 3 vế
var course = {
        name: 'Javascript',
        coin: 250
}

var result = course.coin > 0 ? `${course.coin} Coins` : 'Miễn phí'
console.log(result)

// nếu giá khóa học lớn hơn 0 ? in ra giá : in ra 'miễn phí'
// tức là từ 1 gốc chỉ cho ra 2 kết quả
var a = 1
var b = 2
var c = a > 0 ? a : b // đơn giản, hiển thị ra 1 chữ cái như '250 coins' thôi


//----------------------------------------------------
/**
 * VÒNG LẶP - LOOP - viết mã ít hơn, tránh lặp đi lặp lại
 *      1.  for - lặp với điều kiện đúng (in ra dãy số từ 1 -> 10000)
 *      2.  for/in - lặp qua key của đối tượng (array, object, string)
 *      3.  for/of - lặp qua value của đối tượng (string, array)
 *      4.  while - lặp KHI điều kiện đúng (định nghĩa điều kiện chạy)
 *      5.  do/while - lặp ít nhất một lần, sau đó lặp khi đk đúng 
 * (cần đoạn code chạy ít nhất 1 lần, tính từ lần t2 mới chạy tiếp)
 */


//      1. FOR LOOP
// Dùng console.log, in ra dãy số từ 1 -> 1000
for (var i = 1; i <= 100; i++) {
    console.log(i)
}

/**
 * Hãy tạo hàm getRandNumbers có 3 tham số là min, max, length. 
 * Hàm này sẽ trả về một mảng gồm length phần tử, các giá trị trong mảng
 * là số ngẫu nhiên, giá trị trong khoảng từ min tới max.
 */

function getRandNumbers(min, max, length) {
    var array = []
    for (var i = 1; i <= length; i++ ) {
        var result = Math.random() * (max - min) + min
        array.push(result)   //thêm các kết quả ngẫu nhiên ra mảng array
    }
    return array // trả lại chuỗi array
}
/**
 * Math.random() * (max - min) + min --->  tạo ra 
 * 1 số ngẫu nhiên trong khoảng min - max.
 */

// GIẢI THÍCH MÃ
for (var i = 1; i <= 100; i++) {
    console.log(i)
}

/**
 * Cho trước mảng numbers, 
 * hãy viết hàm getTotal trả về tổng giá trị các phần tử của mảng.
 */
function getTotal(arr) {
    var sum = 0       //khởi tạo biến sum với giá trị ban đầu là 0
// Dùng vòng lặp for duyệt qua từng phần tử trong mảng
    for (var i = 0; i < arr.length; i++)
        sum += arr[i]   // Cộng giá trị của mỗi phần tử vào biến sum
    return sum          // trả về sum
}

var myArray = [1, 2, 3, 4, 5]
var sum = getTotal(myArray)
console.log(sum)

//ỨNG DỤNG VÒNG LẶP FOR LẤY RA PHẦN TỬ CỦA MỘT MẢNG
var myArray = [
    'Javascript',
    'PHP',
    'Java',
    'Dart',
]

var arrayLength = myArray.length
for (var i = 0; i < arrayLength; i++) {
    console.log(myArray[i])
}

/**
 * Cho trước mảng orders là danh sách chứa các khóa học, 
 * các mặt hàng này được thể hiện dưới dạng object và đều có 
 * 1 key là price để thể hiện giá trị của mặt hàng đó.

Bạn hãy hoàn thành hàm getTotal để tính được tổng giá trị 
của đơn hàng.
 */
var orders = [
    {
        name: 'Khóa học HTML - CSS Pro',
        price: 3000000
    },
    {
        name: 'Khóa học Javascript Pro',
        price: 2500000
    },
    {
        name: 'Khóa học React Pro',
        price: 3200000
    }
]
function getTotal(order) {
    var sum = 0
    var orderLength = order.length
    for (var i = 0; i < orderLength; i++)
    sum += order[i].price
    return sum 
}


// FOR/IN LOOP - lấy ra key/value
var myInfor = {
    name: 'Hong Nhung',
    age: 20,
    address: 'Hue, Viet Nam'
}
//  1. Lấy ra key
for (var key in myInfor) {
    console.log(key)
}
//  2. Lấy ra value
for (var key in myInfor) {
    console.log(myInfor[key])
}

// Array
var languages = [
    'Javascript',
    'PHP',
    'Ruby',
    'Java'
]
// In ra key của array
for (var key in languages) {
    console.log(key)
}
// in ra value của array
for (var key in languages) {
    console.log(languages[key])
}

// Duyệt qua chuỗi - lấy từng index (0 - 9: slg ký tự)
var myString = 'Javascript'
for (var key in myString) {
    console.log(key)
}

// Duyệt qua chuỗi - lấy từng ký tự (j, a, v, a, s, c, r, i, p, t, s)
var myString = 'Javascript'
for (var key in myString) {
    console.log(myString[key])
}

/** Bài tập vòng lặp For/in
 */
function run(object) {
    var array = []    // đầu ra là cái mảng
    for (let key in object) {
        array.push(`Thuộc tính ${key} có giá trị ${object[key]}`)
    }
    return array
}
console.log(run({ name: 'Nguyen Van A', age: 16 }))

// for (let key in object) {
    // Thực hiện các công việc với thuộc tính key của object
//   }


//  3. FOR/OF LOOP - lấy ra những phần từ của 1 mảng, từng ký tự của một chuỗi
// mảng
var languages = [
    'Javascript',
    'PHP',
    'Java'
] 

// chuỗi
var languages = 'Javascript' 

//là object
var myInfor = {
    name: 'Son Dang',
    age: 20
}
//-----lấy value object của array
for (var value of Object.keys(myInfor)) {
    console.log(myInfor[value])
}  
//-----lấy value object của array
for (var value of Object.values(myInfor)) {
    console.log(value)
}  
//-----lấy key object của array
for (var value of Object.keys(myInfor)) {
    console.log(value)
}  

// lấy ra từng phần tử của mảng/chuỗi (javascript, php..2: j, a, v, a,..)
for (var value of languages) {
    console.log(value)
}  


// 4. WHILE LOOP - lặp qua một array
// In ra dãy chữ số từ 1 - 1000
var i = 0
while (i < 100) {
    i++
    console.log(i)
}

var myArray = [
    'Javascript',
    'PHP',
    'Ruby'
]
var i = 0
while (i < myArray.length) {
    console.log(myArray[i])
    i++
}


// DO/WHILE LOOP
// In ra dãy số tăng dần 1 - 10
var i = 0
do {
    i++
    console.log(i)
} while (i < 10) // kiểm tra điều kiện từ lần lặp thứ 2 trở đi
// Tính ứng dụng: nạp card, bấm nạp thẻ - mạng yếu lỗi kết nối - re try lại 3 lần, 3 lần
//thất bại thì thôi.

var i = 0
var isSuccess = false

do {
    i++
    console.log('Nạp thẻ lần ' + i)
    // Thành công --> ra "Nạp thẻ lần 1"
    // Nếu đổi sang false --> ra "Nạp thẻ lần 1, 2, 3, 4"
    if (true) {
        isSuccess = true
    }
} while (!isSuccess && i <= 3) // vòng lặp ko thành công thì nó sẽ chạy
// số lận nạp < 3


// BREAK & CONTINUE IN LOOP
for (var i = 0; i < 10; i++) {
    console.log(i)
    if (i >= 5) {
        break
    }
}
//----sử dụng continue để in ra số chẵn thôi
for (var i = 0; i < 10; i++) {
    if (i%2 !== 0){
        continue
    }
    console.log(i)
}


// VÒNG LẶP LỒNG NHAU - NESTED LOOP
var myArray = [
    [1, 2],
    [3, 4],
    [5, 6]
]

for (var i = 0; i < myArray.length; i++) {
    for (var j = 0; j < myArray[i].length; j++) {
        console.log(myArray[i][j])
    }
}

// Chạy lùi vòng lặp
for (var i = 10; i > 0; i--) {
    console.log(i)
}

//Cộng 5 giá trị sau mỗi lần
for (var i = 0; i <= 100; i += 5) {
    console.log(i)
}




//-------------------- LÀM VIỆC VỚI MẢNG - PHẦN 2 -----------------------

/**
 * ARRAY METHOD - tham số truyền vào là một hàm
 *      1. forEach()  - duyệt qua từng phần tử của mảng (có thể dùng loop)
 *      2. every()    - kiểm tra tất cả các phần tử thuộc mảng phải thỏa 
 *                      mãn điều kiện gì đó, trả về kiểu boolean.
 *      3. some()     - ngược với every. Chỉ cần  ông trong mảng thỏa mãn
 *                      thì trả về true rồi (boolean)
 *      4. find()     - tìm kiếm (trong mảng có giá trị nào như thế ko), chỉ trả về  đối tượng
 *      5. filter()   - giống find nhưng trả về tất cả phần tử thỏa mãn
 *      6. map()
 *      7. reduce()
 * Tất cả dung vòng lặp đc nhưng viết ngắn gọn hơn
 */

var courses = [
    {
        id: 1,
        name: 'Javascript',
        coin: 250
    },
    {
        id: 2,
        name: 'HTML, CSS',
        coin: 0 
    },
    {
        id: 3,
        name: 'Ruby',
        coin: 0
    },
    {
        id: 4,
        name: 'PHP',
        coin: 400
    },
    {
        id: 5,
        name: 'Ruby',
        coin: 500
    },
]

// 1. forEach()
courses.forEach(function(course, index) {
    console.log(index, course)
})

// 2. every()
var isFree = courses.every(function(course, index) {
    return course.coin === 0
})
console.log(isFree)

// 3. some()
var isFree = courses.some(function(course, index) {
    return course.coin === 0
})
console.log(isFree)

// 4. find() - tìm khóa học Ruby
var course = courses.find(function(course, index) {
    return course.name === 'Ruby'
})
console.log(course)

// 5. filter() - giống find nhưng trả về tất cả
var listCourses = courses.filter(function(course, index) {
    return course.name === 'Ruby'
})
console.log(listCourses)

// BT: Hàm getMostFavoriteSport sẽ trả về các môn 
//thể thao có điểm số yêu thích lớn hơn 5.
var sports = [
    {
        name: 'Bóng rổ',
        like: 6
    },
    {
        name: 'Bơi lội',
        like: 5
    },
    {
        name: 'Bóng đá',
        like: 10
    },
]
function getMostFavoriteSport(a) {
    var a = sports.filter(function(sport, index) {
        return sport.like > 5
    })
    return a
}

// Kỳ vọng
console.log(getMostFavoriteSport(sports)) 


// 6. map() - chỉnh sửa/ thay đổi các elements của 1 array
// Thêm chữ 'Khóa học: ' ở trước cái "name:  ''
// Thêm "Context: Gia: + coin" ở phía trước
var courses = [
    {
        id: 1,
        name: 'Javascript',
        coin: 0
    },
    {
        id: 2,
        name: 'HTML, CSS',
        coin: 1
    },
    {
        id: 3,
        name: 'Ruby',
        coin: 1
    },
    {
        id: 4,
        name: 'PHP',
        coin: 0
    },
    {
        id: 5,
        name: 'ReactJS',
        coin: 1
    },
    {
        id: 6,
        name: 'Ruby',
        coin: 10
    },
    {
        id: 7,
        name: 'Ruby',
        coin: 12
    },
]

function courseHandler(course, index) {     //course: item của array
    // console.log(course)
    return {
        id: course.id,
        name: `Khoa hoc: ${course.name}`,
        coin: course.coin,
        coinText: `Gia: ${course.coin}`,
        index: index,
        originArray: courses,
    }
}
var newCourses = courses.map(courseHandler)
console.log(newCourses)

// Lấy tên của tất cả các khóa học đưa ra một cái mảng mới
function courseHandler(course, index) {     //course: item của array
    return course.name
}
var newCourses = courses.map(courseHandler)
console.log(newCourses)

// 7. REDUCE () - Muốn nhận về 1 GIÁ TRỊ DUY NHẤT sau khi xử lý các giá trị
// vd: nhận về tổng số tiền coin của các khóa học

//  C1. Dùng vòng lặp 
var totalCoin = 0  // biến lưu trữ
for (var course of courses) {  //lặp qua các phần tử
    totalCoin += course.coin   // thực hiện việc lưu trữ
}
console.log(totalCoin)

//  C2. Dùng REDUCE
var totalCoin = courses.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue.coin
}, 0)
console.log(totalCoin)

// C3. Cũng Reduce - NÂNG CAO, CHƯA HỌC
var totalCoin = courses.reduce((a, b) =>
    a + b.coin, 0)
console.log(totalCoin)

/**
 * BT: Tại SEA GAMES 31 vừa qua, đoàn thể thao Việt Nam đã đứng đầu bảng tổng sắp huy chương. 
 * Hãy tạo hàm getTotalGold có 1 tham số là mảng. 
 * Tính tổng số huy chương vàng mà đoàn thể thao Việt Nam đạt được trong kỳ SEA Game lần này.
 */
var sports = [
    {
        name: 'Bơi lội',
        gold: 11
    },
    {
        name: 'Boxing',
        gold: 3
    },
    {
        name: 'Đạp xe',
        gold: 4
    },
    {
        name: 'Đấu kiếm',
        gold: 5
    },
]
function getTotalGold(sports) {
    var arr = sports.reduce(function(accumulator, currentValue) {
        return accumulator + currentValue.gold
    }, 0)
    return arr
}

// Expected results:
console.log(getTotalGold(sports)) // Output: 23

/**
 * BÀI TẬP: Cho trước danh sách một số bộ phim, hãy viết hàm 
 * calculateRating để tính điểm trung bình IMDB của những bộ phim 
 * mà Christopher Nolan làm đạo diễn.
 */

var watchList = [
    {
      "Title": "Inception",
      "Year": "2010",
      "Rated": "PG-13",
      "Released": "16 Jul 2010",
      "Runtime": "148 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Christopher Nolan",
      "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
      "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
      "Language": "English, Japanese, French",
      "Country": "USA, UK",
      "imdbRating": "8.8",
      "imdbVotes": "1,446,708",
      "imdbID": "tt1375666",
      "Type": "movie",
    },
    {
      "Title": "Interstellar",
      "Year": "2014",
      "Rated": "PG-13",
      "Released": "07 Nov 2014",
      "Runtime": "169 min",
      "Genre": "Adventure, Drama, Sci-Fi",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan, Christopher Nolan",
      "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
      "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      "Language": "English",
      "Country": "USA, UK",
      "imdbRating": "8.6",
      "imdbVotes": "910,366",
      "imdbID": "tt0816692",
      "Type": "movie",
    },
    {
      "Title": "The Dark Knight",
      "Year": "2008",
      "Rated": "PG-13",
      "Released": "18 Jul 2008",
      "Runtime": "152 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
      "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
      "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
      "Language": "English, Mandarin",
      "Country": "USA, UK",
      "imdbRating": "9.0",
      "imdbVotes": "1,652,832",
      "imdbID": "tt0468569",
      "Type": "movie",
    },
    {
      "Title": "Batman Begins",
      "Year": "2005",
      "Rated": "PG-13",
      "Released": "15 Jun 2005",
      "Runtime": "140 min",
      "Genre": "Action, Adventure",
      "Director": "Christopher Nolan",
      "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
      "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
      "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
      "Language": "English, Urdu, Mandarin",
      "Country": "USA, UK",
      "imdbRating": "8.3",
      "imdbVotes": "972,584",
      "imdbID": "tt0372784",
      "Type": "movie",
    },
    {
      "Title": "Avatar",
      "Year": "2009",
      "Rated": "PG-13",
      "Released": "18 Dec 2009",
      "Runtime": "162 min",
      "Genre": "Action, Adventure, Fantasy",
      "Director": "James Cameron",
      "Writer": "James Cameron",
      "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
      "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
      "Language": "English, Spanish",
      "Country": "USA, UK",
      "imdbRating": "7.9",
      "imdbVotes": "876,575",
      "imdbID": "tt0499549",
      "Type": "movie",
    }
  ];
  function calculateRating(watchList) {
    // Dùng filter lấy ra những bộ f do Nolan làm đạo d
    var listNolan = watchList.filter(function(list) {
      return list.Director === "Christopher Nolan"
    })
    // reduce để tính tổng điểm IMDB
    var totalIMDB = listNolan.reduce(function(total, film) {
      return total + parseFloat(film.imdbRating)
    }, 0)
    // tính trung bình = tổng điểm/số phim
    return totalIMDB / listNolan.length 
  }
  
  // Expected results
  console.log(calculateRating(watchList)); // Output: 8.675


  // Trường họp KHÔNG TRUYỀN VÀO INITIAL VALUE
// Khi nào không cần truyền mà vẫn ra kdl mong muốn


// BÀI TẬP
//      1. Flat - "Làm phẳng" mảng từ Depth array - "Mảng sâu"
var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]]

var flatArray = depthArray.reduce(function(flatOutput, depthItem) {
    return flatOutput.concat(depthItem)
}, [])
console.log(flatArray)

//      2. Lấy ra các khóa học và đưa vào 1 mảng mới - mảng lồng mảng (nhiều object)
var topics = [
    {
        topic: 'Front-end',
        courses: [
            {
                id: 1,
                tittle: 'HTML, CSS'
            },
            {
                id: 2,
                tittle: 'Javascript'
            }
        ]
    },
    {
        topic: 'Back-end',
        courses: [
            {
                id: 1,
                tittle: 'PHP'
            },
            {
                id: 2,
                tittle: 'NodeJS'
            }
        ]
    },
]
//----- Lấy ra các khóa học và đưa vào một mảng mới
var newCourses = topics.reduce(function (courses, topic) {
    return courses.concat(topic.courses)
}, [])
console.log(newCourses)

//---------
var numbers = [1, 2, 3, 4, 5]
const result = numbers.reduce((total, number) => {
    return total + number
}, 10)
console.log(result)

// TỰ CODE RA MỘT PHƯƠNG THỨC REDUCE


/**
 * Khai báo biến 'var' và 'let'
 * var: phạm vi chức năng, toàn cục   +  được sdung trc khi khai báo (undefinded)
 * let: phạm vi trong một khối {}  +  không đc truy cập trước khi dduwc khai báo
 */

// INCLUDES METHOD
//--với chuỗi
var tittle = 'Responsive web design'
console.log(tittle.includes('web'))
//--với array
var courses = ['Javascript', 'PHP', 'Dart']
console.log(courses.includes('Javascript'))



