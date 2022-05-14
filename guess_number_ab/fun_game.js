const add_btn = document.querySelector('#add_btn')
const todo_input = document.querySelector('.todo_input')
const todoWrap = document.querySelector('.todo_wrap')
let todolist = [] //先在全域宣告一個空的todolist 便於從localstorage裡面取資料放進來

window.onload = function () {
    load_to_do_list() //每次載入網頁時, 同時啟動localstorage
}

add_btn.addEventListener('click', addtodo) //按下去後啟動addtodo這個function
function addtodo(event) {
    let input_value = { title: todo_input.value }
    if (todo_input.value != "") {   //輸入值不可為空
        todolist.push(input_value)
        localStorage.setItem("datalist", JSON.stringify(todolist))
        load_to_do_list()
        todo_input.value = "" //每次輸入完存到localstorage後清空input裡的東西
    }
}

function edit_btnfn(ii, nowinput) { //其實可以給i就好,但為避免跟下面的i混淆,所以給ii
    todolist = JSON.parse(localStorage.getItem('datalist'))
    todolist[ii].title = nowinput
    localStorage.setItem("datalist", JSON.stringify(todolist)) //update最新資料onto localStorage
    load_to_do_list()
}

function delete_btnfn(ii) {
    todolist.splice(ii, 1)
    console.log(todolist)
    localStorage.setItem("datalist", JSON.stringify(todolist)) //update最新資料onto localStorage
    load_to_do_list()
}

function addtodolist(d, i) //d = data, i = index
{
    const todo_wrap = document.createElement('div')
    todo_wrap.classList.add('todo_wrap', 'd-flex', 'justify-content-evenly')
    const todo_div = document.createElement('div')
    todo_div.classList.add('todo_div', 'd-flex', 'justify-content-between', 'mb-3')

    const show_input = document.createElement('input')
    show_input.classList.add('form-control', 'show_input')
    show_input.type = 'text'
    show_input.value = d.title
    show_input.disabled = true
    todo_div.append(show_input)

    const edit_btn = document.createElement('button')
    edit_btn.classList.add('btn')
    edit_btn.id = `edit_btn_${i}` //以i作為索引, 我要編輯第 i 筆資料
    edit_btn.type = 'button'
    edit_btn.innerText = '編輯'
    edit_btn.addEventListener('click', () => {
        if (edit_btn.innerText == '編輯') //如果現在顯示的狀態是Edit
        {
            show_input.disabled = false //也就是show_input.able = true
            edit_btn.innerText = '儲存' //編輯按鈕的上的狀態從 Edit => Save
            edit_btn.setAttribute('class', 'btn btn-success')
        }
        else {
            show_input.disabled = true
            edit_btn.innerText = '編輯'
            edit_btn.setAttribute('class', 'btn btn-warning')
            edit_btnfn(i, show_input.value)
        }
    })
    todo_div.append(edit_btn)

    const delete_btn = document.createElement('button')
    delete_btn.classList.add('btn')
    delete_btn.id = `delete_btn`
    delete_btn.type = 'button'
    delete_btn.innerText = '刪除'
    delete_btn.addEventListener('click', () => { delete_btnfn(i) })
    todo_div.append(delete_btn)
    todoWrap.append(todo_div)
}

function load_to_do_list() {
    todolist = JSON.parse(localStorage.getItem('datalist'))
    // console.log(todolist);
    todoWrap.innerHTML = ""
    if (todolist != null)    //給todolist一個空值, 如果todolist不是空值, 將資料逐筆迭代出來然後裝進addtodolist
    {
        todolist.forEach((data, index) => {
            addtodolist(data, index)
        })
    }
    console.log(addtodolist)
}

let answer = [];
document.getElementById('start_btn').onclick = function gameStarted() {
    let input_column = document.getElementById('input_column')
    let pool = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
    if (answer.length > 0) {
        answer.splice(0, answer.length)
    }
    for (let i = 0; i < 4; i++) {
        let index = Math.floor(Math.random() * (pool.length))
        answer.push(pool[index])
        pool.splice(index, 1)
    }
}

document.getElementById('guess_btn').onclick = function guess() {
    let a = 0
    let b = 0
    if (answer == '') {
        alert('請先按遊戲開始')
    } else {
        input_column.value.split("").forEach((num, idx) => {
            let index = answer.indexOf(num)
            if (index != -1) {
                if (index == idx) {
                    a++;
                } else {
                    b++;
                }
            }
        });
        alert(`${a}A ${b}B`)
    }
}

document.getElementById('answer_btn').onclick = function getAnswer() {
    if (answer == '') {
        alert('請先按遊戲開始')
    } else {
        alert(`答案揭曉： ${answer.join('')}`)
    }
}

