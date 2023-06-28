//-------- CRUD (Fetch + REST API)


var courseApi = 'http://localhost:3000/courses'

//function start() {
//    getCourses(function(courses) {
        //--- console.log(courses)
//        renderCourses(courses)   //--- sau khi get courses --> render courses       
//    })
//}

function start() {        // viết tối ưu cái trên
    getCourses(renderCourses) 

    handleCreateForm()     // gọi hàm create ở đây
}


start()


// Functions
// -- Hàm lấy ra khóa học
function getCourses(callback) {
    fetch(courseApi)
        .then(function(response) {
            return response.json()
        })
        .then(callback)
}

// READ
// -- Hàm render courses (render: tạo ra cái view, đưa ra trình duyệt)
function renderCourses(courses) {
    var listCoursesBlock = document.querySelector('#list-courses')
    var htmls = courses.map(function(courses) {
        return `
            <li>
                <h4>${courses.name}</h4>
                <p>${courses.description}</p>
            </li>
        `
    })
    listCoursesBlock.innerHTML = htmls.join('')
}

// CREATE
// -- Hàm xử lý form
function handleCreateForm() {
    // Logic tạo mới DL
    var createBtn = document.querySelector('#create')
    createBtn.onclick = function() {
        var name = document.querySelector('input[name="name"]').value
        // console.log(name) // test thử xem chạy ko
        var description = document.querySelector('input[name="description"]').value
        // gửi đi một cái yêu cầu
    }
}

// CHƯA XONG ĐÂU NHA
