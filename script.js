//my day : 0 - 149{0-49:normal, 50-99:complite, 100-149:importent}
//planned : 150 - 299{150-199:normal, 200-249:complite, 250-299:importent}
//this week : 300-449{300-349:normal, 350-399:complite, 400-449:importent}
//this month : 450-599{450-499:normal, 500-549:complite, 550-599:importent}
//importent : 600-900{600-749:imp,750-900:complite}


let date = new Date()

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


// function mode()
function mode() {
    document.body.style.color = "black";
}

function show_menu() {
    let x = document.getElementById("nav");
    // console.log(x.style.display)
    if (x.style.visibility == "hidden") {
        x.style.visibility = "visible";
    } else if (x.style.visibility == "") {
        x.style.visibility = "visible";
    } else {
        x.style.visibility = "hidden";
    }
}

function setdate(dat) {
    let d = `${dat.getDate()}`;
    let m = `${dat.getMonth() + 1}`;
    //console.log(m)
    let y = `${dat.getFullYear()}`
    if (d < 10) {
        d = 0 + d;
    }
    if (m < 10) {
        m = 0 + m;
    }
    return `${y}-${m}-${d}`;
}
if (localStorage.getItem("date") == null && localStorage.getItem("month") == null) {
    localStorage.setItem("date", `${date.getDate()}:${date.getMonth()}`);
    localStorage.setItem("week", setdate(date));
    localStorage.setItem("month", `${date.getMonth()}:${date.getFullYear()}`)
    myDay();
} else {
    if (`${date.getDate()}:${date.getMonth()}` != localStorage.getItem("date")) {
        let arr1 = [];
        let count = 0;
        for (let i = 50; i < 100; i++) {
            if (count == 3) {
                break;
            } else {
                if (localStorage.getItem(i) == null) {
                    count++;
                } else {
                    arr1.push(localStorage.getItem(i));
                    localStorage.removeItem(i);
                }
            }
        }
        let x = 0;

        for (let j = 0; j < 50; j++) {
            if (localStorage.getItem(j) == null) {
                if (arr1[x] == undefined) {
                    break;
                } else {
                    //console.log(arr1[x])
                    localStorage.setItem(`${j}`, arr1[x]);
                    x++;
                }
            } else {
                continue;
            }

        }
        localStorage.setItem("date", `${date.getDate()}:${date.getMonth()}`);
    }
    myDay();
    if (`${date.getMonth()}:${date.getFullYear()}` != localStorage.getItem("month")) {
        for (let i = 450; i < 600; i++) {
            if (localStorage.getItem(i) == null) {
                continue
            } else {
                localStorage.removeItem(i);
            }

        }
        localStorage.setItem("month", `${date.getMonth()}:${date.getFullYear()}`);
    }

    if (dayjs().isSame(localStorage.getItem("week"), 'week')) {
        console.log(true)
    } else {
        for (let i = 300; i < 450; i++) {
            if (localStorage.getItem(i) == null) {
                continue
            } else {
                localStorage.removeItem(i);
            }

        }
        localStorage.setItem("week", setdate(date));
    }
}




document.getElementById("mdcount").innerHTML = `${count(0, 150)}`;
document.getElementById("pcount").innerHTML = `${count(150, 300)}`;
document.getElementById("twcount").innerHTML = `${count(300, 450)}`;
document.getElementById("tmcount").innerHTML = `${count(450, 600)}`;
document.getElementById("icount").innerHTML = `${count(600, 900)}`;
let p = Number.parseInt(document.getElementById("mdcount").innerHTML);
let q = Number.parseInt(document.getElementById("pcount").innerHTML);
let r = Number.parseInt(document.getElementById("icount").innerHTML);
let s = Number.parseInt(document.getElementById("tmcount").innerHTML);
let t = Number.parseInt(document.getElementById("twcount").innerHTML);
document.getElementById("tcount").innerHTML = `${p + q + r + s + t}`;


//function update_count()


function update_count(ele, type) {
    if (ele == "My Day") {
        let a = document.getElementById("mdcount");
        let c = document.getElementById("tcount");
        let b = Number.parseInt(a.innerHTML);
        let d = Number.parseInt(c.innerHTML);
        if (type == "add") {
            a.innerHTML = `${b + 1}`;
            c.innerHTML = `${d + 1}`;
        } else {
            a.innerHTML = `${b - 1}`;
            c.innerHTML = `${d - 1}`;
        }
    }
    else if (ele == "Importent") {
        let a = document.getElementById("icount");
        let c = document.getElementById("tcount");
        let b = Number.parseInt(a.innerHTML);
        let d = Number.parseInt(c.innerHTML);
        if (type == "add") {
            a.innerHTML = `${b + 1}`;
            c.innerHTML = `${d + 1}`;
        } else {
            a.innerHTML = `${b - 1}`;
            c.innerHTML = `${d - 1}`;
        }
    }
    else if (ele == "Planned") {
        let a = document.getElementById("pcount");
        let c = document.getElementById("tcount");
        let b = Number.parseInt(a.innerHTML);
        let d = Number.parseInt(c.innerHTML);
        if (type == "add") {
            a.innerHTML = `${b + 1}`;
            c.innerHTML = `${d + 1}`;
        } else {
            a.innerHTML = `${b - 1}`;
            c.innerHTML = `${d - 1}`;
        }
    }
    else if (ele == "Tasks") {
        let a = document.getElementById("tcount");
        let b = Number.parseInt(a.innerHTML);
        if (type == "add") {
            a.innerHTML = `${b + 1}`;
        } else {
            a.innerHTML = `${b - 1}`;
        }
    }
    else if (ele == "This Week") {
        let a = document.getElementById("twcount");
        let c = document.getElementById("tcount");
        let b = Number.parseInt(a.innerHTML);
        let d = Number.parseInt(c.innerHTML);
        if (type == "add") {
            a.innerHTML = `${b + 1}`;
            c.innerHTML = `${d + 1}`;
        } else {
            a.innerHTML = `${b - 1}`;
            c.innerHTML = `${d - 1}`;
        }
    }
    else if (ele == "This Month") {
        let a = document.getElementById("tmcount");
        let c = document.getElementById("tcount");
        let b = Number.parseInt(a.innerHTML);
        let d = Number.parseInt(c.innerHTML);
        if (type == "add") {
            a.innerHTML = `${b + 1}`;
            c.innerHTML = `${d + 1}`;
        } else {
            a.innerHTML = `${b - 1}`;
            c.innerHTML = `${d - 1}`;
        }
    }
}


//function count()


function count(min, max) {
    let c = 0;
    for (let i = min; i < max; i++) {
        if (localStorage.getItem(i) == null) {
            continue;
        } else {
            c++;
        }

    }
    return c;
}

//function clearAll()


function clearAll() {
    let main = document.getElementById('main');
    let x = `<div class="m-l-r main-head" style="width: 90%;" id="main-head">${document.getElementById('main-head').innerHTML}</div>`;
    let a = document.getElementById("page-title").innerHTML;
    if (a == "My Day") {
        main.innerHTML = x;

        for (let i = 0; i < 150; i++) {
            if (localStorage.getItem(i) == null) {
                continue;
            } else {
                localStorage.removeItem(i);
            }

        }
        document.getElementById("tcount").innerHTML = `${Number.parseInt(document.getElementById("tcount").innerHTML) - Number.parseInt(document.getElementById("mdcount").innerHTML)}`;
        document.getElementById("mdcount").innerHTML = `0`;
    }
    else if (a == "Importent") {
        main.innerHTML = x;

        for (let i = 600; i < 900; i++) {
            if (localStorage.getItem(i) == null) {
                continue;
            } else {
                localStorage.removeItem(i);
            }

        }
        document.getElementById("tcount").innerHTML = `${Number.parseInt(document.getElementById("tcount").innerHTML) - Number.parseInt(document.getElementById("icount").innerHTML)}`;
        document.getElementById("icount").innerHTML = `0`;
    }
    else if (a == "Planned") {
        main.innerHTML = x;

        for (let i = 150; i < 300; i++) {
            if (localStorage.getItem(i) == null) {
                continue;
            } else {
                localStorage.removeItem(i);
            }

        }
        document.getElementById("tcount").innerHTML = `${Number.parseInt(document.getElementById("tcount").innerHTML) - Number.parseInt(document.getElementById("pcount").innerHTML)}`;
        document.getElementById("pcount").innerHTML = `0`;
    }
    else if (a == "This Week") {
        main.innerHTML = x;

        for (let i = 300; i < 450; i++) {
            if (localStorage.getItem(i) == null) {
                continue;
            } else {
                localStorage.removeItem(i);
            }

        }
        document.getElementById("tcount").innerHTML = `${Number.parseInt(document.getElementById("tcount").innerHTML) - Number.parseInt(document.getElementById("twcount").innerHTML)}`;
        document.getElementById("twcount").innerHTML = `0`;
    }
    else if (a == "This Month") {
        main.innerHTML = x;

        for (let i = 450; i < 600; i++) {
            if (localStorage.getItem(i) == null) {
                continue;
            } else {
                localStorage.removeItem(i);
            }

        }
        document.getElementById("tcount").innerHTML = `${Number.parseInt(document.getElementById("tcount").innerHTML) - Number.parseInt(document.getElementById("tmcount").innerHTML)}`;
        document.getElementById("tmcount").innerHTML = `0`;
    }
    else if (a == "Tasks") {
        main.innerHTML = x;

        for (let i = 0; i < 900; i++) {
            if (localStorage.getItem(i) == null) {
                continue;
            } else {
                localStorage.removeItem(i);
            }

        }
        document.getElementById("mdcount").innerHTML = `0`;
        document.getElementById("pcount").innerHTML = `0`;
        document.getElementById("twcount").innerHTML = `0`;
        document.getElementById("tmcount").innerHTML = `0`;
        document.getElementById("icount").innerHTML = `0`;
        document.getElementById("tcount").innerHTML = `0`;
    }
}

// //function sort and store

function sortAndStore(min, max) {
    let arr = [];
    let count = 0;
    for (let i = min; i < max; i++) {
        if (count == 2) {
            break
        } else {
            if (localStorage.getItem(i) == null) {
                count++;
            } else {
                arr.push(localStorage.getItem(i));
                localStorage.removeItem(i);
            }
        }
    }
    arr.sort();
    let a = min;
    for (const i in arr) {
        localStorage.setItem(`${a}`, arr[i])
        a++;
    }

}



//function display



function display(min, max, ele, type) {
    let aaa = document.getElementById("page-title").innerHTML;
    if (type === "a") {
        if (ele.firstElementChild == null) {
            ele.innerHTML = `<p class="type">Assigned !<span class="material-symbols-outlined m-l-5 float-right">expand_more</span></p>`;
        }
        let count = 0;
        for (let i = min; i < max; i++) {
            if (count == 3) {
                break;
            } else {
                if (localStorage.getItem(i) == null) {
                    count++;
                } else {
                    ele.innerHTML += `<p class="task"><button class="material-symbols-outlined comp" onclick="comp(this)">radio_button_unchecked</button><span class="assigne">${localStorage.getItem(i)}</span><span class="dropdown"><button  class="material-symbols-outlined dropbtn">more_vert</button><br><span class="dropdown-content"><button  class="material-symbols-outlined" title="Add to importent" onclick="star(this)">star</button><button  class="material-symbols-outlined" title="Delete !" onclick="Remove(this)">delete</button></span></span></p>`
                }
            }

        }
        return;
    }
    else if (type === "i") {
        if (ele.firstElementChild == null) {
            ele.innerHTML = `<p class="type">Importent !<span class="material-symbols-outlined m-l-5 float-right">expand_more</span></p>`;
        }
        let count = 0;
        for (let i = min; i < max; i++) {
            if (count == 3) {
                break;
            } else {
                if (localStorage.getItem(i) == null) {
                    count++;
                } else {
                    ele.innerHTML += `<p class="task"><button class="material-symbols-outlined comp" onclick="comp(this)">radio_button_unchecked</button><span class="importent">${localStorage.getItem(i)}</span><span class="dropdown"><button  class="material-symbols-outlined dropbtn">more_vert</button><br><span class="dropdown-content"><button  class="material-symbols-outlined" title="Remove from importent" onclick="star(this)">stars</button><button  class="material-symbols-outlined" title="Delete !" onclick="Remove(this)">delete</button></span></span></p>`
                }
            }

        }
        return;
    }
    else if (type === "c") {
        if (ele.firstElementChild == null) {
            ele.innerHTML = `<p class="type">Completed !<span class="material-symbols-outlined m-l-5 float-right">expand_more</span></p>`;
        }
        let count = 0;
        for (let i = min; i < max; i++) {
            if (count == 3) {
                break;
            } else {
                if (localStorage.getItem(i) == null) {
                    count++;
                } else {
                    if (aaa == "Importent") {
                        ele.innerHTML += `<p class="task"><button class="material-symbols-outlined comp" onclick="comp(this)">radio_button_checked</button><span class="complete">${localStorage.getItem(i)}</span><span class="dropdown"><button  class="material-symbols-outlined dropbtn">more_vert</button><br><span class="dropdown-content"><button  class="material-symbols-outlined">stars</button><button  class="material-symbols-outlined" title="Delete !" onclick="Remove(this)">delete</button></span></span></p>`;
                    } else {
                        ele.innerHTML += `<p class="task"><button class="material-symbols-outlined comp" onclick="comp(this)">radio_button_checked</button><span class="complete">${localStorage.getItem(i)}</span><span class="dropdown"><button  class="material-symbols-outlined dropbtn">more_vert</button><br><span class="dropdown-content"><button  class="material-symbols-outlined">star</button><button  class="material-symbols-outlined" title="Delete !" onclick="Remove(this)">delete</button></span></span></p>`;
                    }
                }
            }

        }
        return;
    }
}


//function search(val)


function search(val) {
    alert("hello")
}


// finction myday;


function myDay() {
    document.title = "My To Do App-My Day";
    let main = document.getElementById("main");
    document.getElementById("mdbtn").classList.add("active");
    document.getElementById("tbtn").classList.remove("active");
    document.getElementById("tmbtn").classList.remove("active");
    document.getElementById("twbtn").classList.remove("active");
    document.getElementById("pbtn").classList.remove("active");
    document.getElementById("ibtn").classList.remove("active");
    let main_head = document.getElementById("main-head");
    main.innerHTML = "";
    main.appendChild(main_head);
    document.getElementById("page-title").innerHTML = "My Day";
    document.getElementById('taskadd').removeAttribute('disabled')
    document.getElementById('taskadd').setAttribute('placeholder', 'Add new task...');
    document.getElementById("c-date").innerHTML = `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
    let a = document.createElement("div");
    let c = document.createElement("div");
    let i = document.createElement("div");
    a.setAttribute("id", "mda");
    c.setAttribute("id", "mdc");
    i.setAttribute("id", "mdi");
    main.appendChild(i);
    main.appendChild(a);
    main.appendChild(c);

    sortAndStore(100, 150);
    display(100, 150, i, "i");
    if (i.firstElementChild.nextElementSibling == null) {
        i.innerHTML = null;
    }
    sortAndStore(0, 50);
    display(0, 50, a, "a");
    if (a.firstElementChild.nextElementSibling == null) {
        a.innerHTML = null;
    }
    sortAndStore(50, 100);
    display(50, 100, c, "c");
    if (c.firstElementChild.nextElementSibling == null) {
        c.innerHTML = null;
    }
}

myDay();


//function importent



function Importent() {
    document.title = "My To Do App-Importent";
    let main = document.getElementById("main");
    document.getElementById("mdbtn").classList.remove("active");
    document.getElementById("tbtn").classList.remove("active");
    document.getElementById("tmbtn").classList.remove("active");
    document.getElementById("twbtn").classList.remove("active");
    document.getElementById("pbtn").classList.remove("active");
    document.getElementById("ibtn").classList.add("active");
    let main_head = document.getElementById("main-head");
    main.innerHTML = "";
    main.appendChild(main_head);
    document.getElementById("page-title").innerHTML = "Importent";
    document.getElementById('taskadd').removeAttribute('disabled')
    document.getElementById('taskadd').setAttribute('placeholder', 'Add new task...');
    document.getElementById("c-date").innerHTML = `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
    //let a=document.createElement("div");
    let c = document.createElement("div");
    let i = document.createElement("div");
    //a.setAttribute("id","mda");
    c.setAttribute("id", "ic");
    i.setAttribute("id", "ii");
    main.appendChild(i);
    //main.appendChild(a);
    main.appendChild(c);

    sortAndStore(600, 750);
    display(600, 750, i, "i");
    if (i.firstElementChild.nextElementSibling == null) {
        i.innerHTML = null;
    }

    sortAndStore(750, 900);
    display(750, 900, c, "c");
    if (c.firstElementChild.nextElementSibling == null) {
        c.innerHTML = null;
    }
}



// function Importent() 



function planned() {
    document.title = "My To Do App-Planned";
    let main = document.getElementById("main");
    document.getElementById("mdbtn").classList.remove("active");
    document.getElementById("tbtn").classList.remove("active");
    document.getElementById("tmbtn").classList.remove("active");
    document.getElementById("twbtn").classList.remove("active");
    document.getElementById("pbtn").classList.add("active");
    document.getElementById("ibtn").classList.remove("active");
    let main_head = document.getElementById("main-head");
    main.innerHTML = "";
    main.appendChild(main_head);
    document.getElementById("page-title").innerHTML = "Planned";
    document.getElementById('taskadd').removeAttribute('disabled')
    document.getElementById('taskadd').setAttribute('placeholder', 'Add new task...');
    document.getElementById("c-date").innerHTML = `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
    let a = document.createElement("div");
    let c = document.createElement("div");
    let i = document.createElement("div");
    a.setAttribute("id", "pa");
    c.setAttribute("id", "pc");
    i.setAttribute("id", "pi");
    main.appendChild(i);
    main.appendChild(a);
    main.appendChild(c);

    sortAndStore(250, 300);
    display(250, 300, i, "i");
    if (i.firstElementChild.nextElementSibling == null) {
        i.innerHTML = null;
    }
    sortAndStore(150, 200);
    display(150, 200, a, "a");
    if (a.firstElementChild.nextElementSibling == null) {
        a.innerHTML = null;
    }
    sortAndStore(200, 250);
    display(200, 250, c, "c");
    if (c.firstElementChild.nextElementSibling == null) {
        c.innerHTML = null;
    }
}



// function tasks() 


function tasks() {
    document.title = "My To Do App-Tasks";
    let main = document.getElementById("main");
    document.getElementById("mdbtn").classList.remove("active");
    document.getElementById("tbtn").classList.add("active");
    document.getElementById("tmbtn").classList.remove("active");
    document.getElementById("twbtn").classList.remove("active");
    document.getElementById("pbtn").classList.remove("active");
    document.getElementById("ibtn").classList.remove("active");
    let main_head = document.getElementById("main-head");
    main.innerHTML = "";
    main.appendChild(main_head);
    document.getElementById("page-title").innerHTML = "Tasks";
    document.getElementById('taskadd').setAttribute('disabled', 'disabled');
    document.getElementById('taskadd').setAttribute('placeholder', 'disabled!');
    document.getElementById("c-date").innerHTML = `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
    let a = document.createElement("div");
    let c = document.createElement("div");
    let i = document.createElement("div");
    a.setAttribute("id", "ta");
    c.setAttribute("id", "tc");
    i.setAttribute("id", "ti");
    main.appendChild(i);
    main.appendChild(a);
    main.appendChild(c);

    sortAndStore(100, 150);
    display(100, 150, i, "i");
    sortAndStore(250, 300);
    display(250, 300, i, "i");
    sortAndStore(400, 450);
    display(400, 450, i, "i");
    sortAndStore(550, 600);
    display(550, 600, i, "i");
    if (i.firstElementChild.nextElementSibling == null) {
        i.innerHTML = null;
    }
    sortAndStore(0, 50);
    display(0, 50, a, "a");
    sortAndStore(150, 200);
    display(150, 200, a, "a");
    sortAndStore(300, 350);
    display(300, 350, a, "a");
    sortAndStore(450, 500);
    display(450, 500, a, "a");
    if (a.firstElementChild.nextElementSibling == null) {
        a.innerHTML = null;
    }
    sortAndStore(50, 100);
    display(50, 100, c, "c");
    sortAndStore(200, 250);
    display(200, 250, c, "c");
    sortAndStore(350, 400);
    display(350, 400, c, "c");
    sortAndStore(500, 550);
    display(500, 550, c, "c");
    if (c.firstElementChild.nextElementSibling == null) {
        c.innerHTML = null;
    }
}



// function tm()


function tm() {
    document.title = "My To Do App-This Month";
    let main = document.getElementById("main");
    document.getElementById("mdbtn").classList.remove("active");
    document.getElementById("tbtn").classList.remove("active");
    document.getElementById("tmbtn").classList.add("active");
    document.getElementById("twbtn").classList.remove("active");
    document.getElementById("pbtn").classList.remove("active");
    document.getElementById("ibtn").classList.remove("active");
    let main_head = document.getElementById("main-head");
    main.innerHTML = "";
    main.appendChild(main_head);
    document.getElementById("page-title").innerHTML = "This Month";
    document.getElementById('taskadd').removeAttribute('disabled')
    document.getElementById('taskadd').setAttribute('placeholder', 'Add new task...');
    document.getElementById("c-date").innerHTML = `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
    let a = document.createElement("div");
    let c = document.createElement("div");
    let i = document.createElement("div");
    a.setAttribute("id", "tma");
    c.setAttribute("id", "tmc");
    i.setAttribute("id", "tmi");
    main.appendChild(i);
    main.appendChild(a);
    main.appendChild(c);

    sortAndStore(550, 600);
    display(550, 600, i, "i");
    if (i.firstElementChild.nextElementSibling == null) {
        i.innerHTML = null;
    }
    sortAndStore(450, 500);
    display(450, 500, a, "a");
    if (a.firstElementChild.nextElementSibling == null) {
        a.innerHTML = null;
    }
    sortAndStore(500, 550);
    display(500, 550, c, "c");
    if (c.firstElementChild.nextElementSibling == null) {
        c.innerHTML = null;
    }
}

// function tw() 



function tw() {
    document.title = "My To Do App-This Week";
    let main = document.getElementById("main");
    document.getElementById("mdbtn").classList.remove("active");
    document.getElementById("tbtn").classList.remove("active");
    document.getElementById("tmbtn").classList.remove("active");
    document.getElementById("twbtn").classList.add("active");
    document.getElementById("pbtn").classList.remove("active");
    document.getElementById("ibtn").classList.remove("active");
    let main_head = document.getElementById("main-head");
    main.innerHTML = "";
    main.appendChild(main_head);
    document.getElementById("page-title").innerHTML = "This Week";
    document.getElementById('taskadd').removeAttribute('disabled')
    document.getElementById('taskadd').setAttribute('placeholder', 'Add new task...');
    document.getElementById("c-date").innerHTML = `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
    let a = document.createElement("div");
    let c = document.createElement("div");
    let i = document.createElement("div");
    a.setAttribute("id", "twa");
    c.setAttribute("id", "twc");
    i.setAttribute("id", "twi");
    main.appendChild(i);
    main.appendChild(a);
    main.appendChild(c);

    sortAndStore(400, 450);
    display(400, 450, i, "i");
    if (i.firstElementChild.nextElementSibling == null) {
        i.innerHTML = null;
    }
    sortAndStore(300, 350);
    display(300, 350, a, "a");
    if (a.firstElementChild.nextElementSibling == null) {
        a.innerHTML = null;
    }
    sortAndStore(350, 400);
    display(350, 400, c, "c");
    if (c.firstElementChild.nextElementSibling == null) {
        c.innerHTML = null;
    }
}


//finction addtask()



function addtask(value) {
    document.getElementById("taskadd").value = "";
    if (value == null || value == " " || value == "") {
        alert("Please Enter a Valid Task Name ")
        return;
    }

    let a = document.getElementById("page-title").innerHTML;

    if (a == "My Day") {
        if (search(0, 50, value) == -1) {
            let main = document.getElementById("mda");
            check_empty(main, "a");
            update_count(a, "add");
            main.innerHTML += `<p class="task"><button class="material-symbols-outlined comp" onclick="comp(this)">radio_button_unchecked</button><span class="assigne">${value}</span><span class="dropdown"><button  class="material-symbols-outlined dropbtn">more_vert</button><br><span class="dropdown-content"><button  class="material-symbols-outlined" title="Add to importent" onclick="star(this)">star</button><button  class="material-symbols-outlined" title="Delete !" onclick="Remove(this)">delete</button></span></span></p>`;
            for (let i = 0; i < 50; i++) {
                if (localStorage.getItem(i) == null) {
                    localStorage.setItem(i, value);
                    return;
                }
            }
        } else {
            alert("task Already Exist!")
            return;
        }
    }
    else if (a == "Importent") {
        if (search(600, 750, value) == -1) {
            let main = document.getElementById("ii");
            check_empty(main, "i");
            update_count(a, "add");
            main.innerHTML += `<p class="task"><button class="material-symbols-outlined comp" onclick="comp(this)">radio_button_unchecked</button><span class="importent">${value}</span><span class="dropdown"><button  class="material-symbols-outlined dropbtn">more_vert</button><br><span class="dropdown-content"><button  class="material-symbols-outlined" title="Remove from importent" onclick="star(this)">stars</button><button  class="material-symbols-outlined" title="Delete !" onclick="Remove(this)">delete</button></span></span></p>`;
            for (let i = 600; i < 750; i++) {
                if (localStorage.getItem(i) == null) {
                    localStorage.setItem(i, value);
                    return;
                }
            }
        } else {
            alert("task Already Exist!")
            return;
        }
    }
    else if (a == "Planned") {
        if (search(150, 200, value) == -1) {
            let main = document.getElementById("pa");
            check_empty(main, "a");
            update_count(a, "add");
            main.innerHTML += `<p class="task"><button class="material-symbols-outlined comp" onclick="comp(this)">radio_button_unchecked</button><span class="assigne">${value}</span><span class="dropdown"><button  class="material-symbols-outlined dropbtn">more_vert</button><br><span class="dropdown-content"><button  class="material-symbols-outlined" title="Add to importent" onclick="star(this)">star</button><button  class="material-symbols-outlined" title="Delete !" onclick="Remove(this)">delete</button></span></span></p>`;
            for (let i = 150; i < 200; i++) {
                if (localStorage.getItem(i) == null) {
                    localStorage.setItem(i, value);
                    return;
                }
            }
        } else {
            alert("task Already Exist!")
            return;
        }
    }
    else if (a == "This Month") {
        if (search(450, 500, value) == -1) {
            let main = document.getElementById("tma");
            check_empty(main, "a");
            update_count(a, "add");
            main.innerHTML += `<p class="task"><button class="material-symbols-outlined comp" onclick="comp(this)">radio_button_unchecked</button><span class="assigne">${value}</span><span class="dropdown"><button  class="material-symbols-outlined dropbtn">more_vert</button><br><span class="dropdown-content"><button  class="material-symbols-outlined" title="Add to importent" onclick="star(this)">star</button><button  class="material-symbols-outlined" title="Delete !" onclick="Remove(this)">delete</button></span></span></p>`;
            for (let i = 450; i < 500; i++) {
                if (localStorage.getItem(i) == null) {
                    localStorage.setItem(i, value);
                    return;
                }
            }
        } else {
            alert("task Already Exist!")
            return;
        }
    }
    else if (a == "This Week") {
        if (search(300, 350, value) == -1) {
            let main = document.getElementById("twa");
            check_empty(main, "a");
            update_count(a, "add");
            main.innerHTML += `<p class="task"><button class="material-symbols-outlined comp" onclick="comp(this)">radio_button_unchecked</button><span class="assigne">${value}</span><span class="dropdown"><button  class="material-symbols-outlined dropbtn">more_vert</button><br><span class="dropdown-content"><button  class="material-symbols-outlined" title="Add to importent" onclick="star(this)">star</button><button  class="material-symbols-outlined" title="Delete !" onclick="Remove(this)">delete</button></span></span></p>`;
            for (let i = 300; i < 350; i++) {
                if (localStorage.getItem(i) == null) {
                    localStorage.setItem(i, value);
                    return;
                }
            }
        } else {
            alert("task Already Exist!")
            return;
        }
    }
    return;
}



//function search()


function search(min, max, val) {
    let count = 0;
    for (let i = min; i < max; i++) {
        if (count == 3) {
            break;
        } else {
            if (localStorage.getItem(i) == null) {
                count++;
            } else {
                if (localStorage.getItem(i) == val) {
                    return i;
                }
            }
        }

    }
    return -1;
}


//function check_empty();


function check_empty(i, type) {
    if (i.firstElementChild == null) {
        if (type == "i") {
            i.innerHTML = `<p class="type">Importent !<span class="material-symbols-outlined m-l-5 float-right">expand_more</span></p>`;
        }
        else if (type == "c") {
            i.innerHTML = `<p class="type">Completed !<span class="material-symbols-outlined m-l-5 float-right">expand_more</span></p>`;
        } else if (type == "a") {
            i.innerHTML = `<p class="type">Assigned !<span class="material-symbols-outlined m-l-5 float-right">expand_more</span></p>`;
        }
    } else {
        return;
    }
}

//function additem()


function additem(min, max, val) {
    if (search(min, max, val) == -1) {
        for (let i = min; i < max; i++) {
            if (localStorage.getItem(i) == null) {
                localStorage.setItem(i, val);
                break;
            }

        }
        sortAndStore(min, max);
        return
    } else {
        return;
    }
}



//function comp()


function comp(ele) {
    let a = document.getElementById("page-title").innerHTML;
    let p = ele.parentElement;
    let k = p.parentElement;
    let val = p.firstElementChild.nextElementSibling.innerHTML;
    if (ele.innerHTML == "radio_button_unchecked") {
        if (a == "My Day") {
            let b = document.getElementById("mdc");
            check_empty(b, "c");
            p.remove();
            is_empty(k);
            b.innerHTML += `<p class="task"><button class="material-symbols-outlined comp" onclick="comp(this)">radio_button_checked</button><span class="complete">${val}</span><span class="dropdown"><button  class="material-symbols-outlined dropbtn">more_vert</button><br><span class="dropdown-content"><button  class="material-symbols-outlined">star</button><button  class="material-symbols-outlined" title="Delete !" onclick="Remove(this)">delete</button></span></span></p>`;
            let index = search(0, 50, val)
            localStorage.removeItem(`${index}`);
            sortAndStore(0, 50);
            additem(50, 100, val);

            return
        }
        else if (a == "Planned") {
            let b = document.getElementById("pc");
            check_empty(b, "c");
            p.remove();
            is_empty(k);
            b.innerHTML += `<p class="task"><button class="material-symbols-outlined comp" onclick="comp(this)">radio_button_checked</button><span class="complete">${val}</span><span class="dropdown"><button  class="material-symbols-outlined dropbtn">more_vert</button><br><span class="dropdown-content"><button  class="material-symbols-outlined">star</button><button  class="material-symbols-outlined" title="Delete !" onclick="Remove(this)">delete</button></span></span></p>`;
            let index = search(150, 200, val)
            localStorage.removeItem(`${index}`);
            sortAndStore(150, 200);
            additem(200, 250, val);

            return
        }
        else if (a == "This Week") {
            let b = document.getElementById("twc");
            check_empty(b, "c");
            p.remove();
            is_empty(k);
            b.innerHTML += `<p class="task"><button class="material-symbols-outlined comp" onclick="comp(this)">radio_button_checked</button><span class="complete">${val}</span><span class="dropdown"><button  class="material-symbols-outlined dropbtn">more_vert</button><br><span class="dropdown-content"><button  class="material-symbols-outlined">star</button><button  class="material-symbols-outlined" title="Delete !" onclick="Remove(this)">delete</button></span></span></p>`;
            let index = search(300, 350, val)
            localStorage.removeItem(`${index}`);
            sortAndStore(300, 350);
            additem(350, 400, val);

            return
        }
        else if (a == "This Month") {
            let b = document.getElementById("tmc");
            check_empty(b, "c");
            p.remove();
            is_empty(k);
            b.innerHTML += `<p class="task"><button class="material-symbols-outlined comp" onclick="comp(this)">radio_button_checked</button><span class="complete">${val}</span><span class="dropdown"><button  class="material-symbols-outlined dropbtn">more_vert</button><br><span class="dropdown-content"><button  class="material-symbols-outlined">star</button><button  class="material-symbols-outlined" title="Delete !" onclick="Remove(this)">delete</button></span></span></p>`;
            let index = search(450, 500, val)
            localStorage.removeItem(`${index}`);
            sortAndStore(450, 500);
            additem(500, 550, val);

            return
        }
        else if (a == "Tasks") {
            let b = document.getElementById("tc");
            check_empty(b, "c");
            p.remove();
            is_empty(k);
            b.innerHTML += `<p class="task"><button class="material-symbols-outlined comp" onclick="comp(this)">radio_button_checked</button><span class="complete">${val}</span><span class="dropdown"><button  class="material-symbols-outlined dropbtn">more_vert</button><br><span class="dropdown-content"><button  class="material-symbols-outlined">star</button><button  class="material-symbols-outlined" title="Delete !" onclick="Remove(this)">delete</button></span></span></p>`;

            let index = search(0, 50, val)
            if (index == -1) {
                index = search(150, 200, val);
            } else {
                localStorage.removeItem(`${index}`);
                additem(50, 100, val)
                return;
            }
            if (index == -1) {
                index = search(300, 350, val);
            } else {
                localStorage.removeItem(`${index}`);
                additem(200, 250, val);
                return;
            }
            if (index == -1) {
                index = search(450, 500, val);
            } else {
                localStorage.removeItem(`${index}`);
                additem(350, 400, val);
                return;
            }
            localStorage.removeItem(`${index}`);
            additem(500, 550, val)
            return;
        }
        else if (a == "Importent") {
            let b = document.getElementById("ic");
            check_empty(b, "c");
            p.remove();
            is_empty(k);
            b.innerHTML += `<p class="task"><button class="material-symbols-outlined comp" onclick="comp(this)">radio_button_checked</button><span class="complete">${val}</span><span class="dropdown"><button  class="material-symbols-outlined dropbtn">more_vert</button><br><span class="dropdown-content"><button  class="material-symbols-outlined">stars</button><button  class="material-symbols-outlined" title="Delete !" onclick="Remove(this)">delete</button></span></span></p>`;
            let index1 = search(600, 750, val)
            localStorage.removeItem(`${index1}`);
            sortAndStore(600, 750);
            additem(750, 900, val);
            let index = search(0, 50, val)
            if (index == -1) {
                index = search(150, 200, val);
            } else {
                localStorage.removeItem(`${index}`);
                additem(50, 100, val)
                return;
            }
            if (index == -1) {
                index = search(300, 350, val);
            } else {
                localStorage.removeItem(`${index}`);
                additem(200, 250, val);
                return;
            }
            if (index == -1) {
                index = search(450, 500, val);
            } else {
                localStorage.removeItem(`${index}`);
                additem(350, 400, val);
                return;
            }
            localStorage.removeItem(`${index}`);
            additem(500, 550, val)
            return;
        }


    } else {
        if (a == "My Day") {
            let b = document.getElementById("mda");
            check_empty(b, "a");
            p.remove();
            is_empty(k);
            b.innerHTML += `<p class="task"><button class="material-symbols-outlined comp" onclick="comp(this)">radio_button_unchecked</button><span class="assigne">${val}</span><span class="dropdown"><button  class="material-symbols-outlined dropbtn">more_vert</button><br><span class="dropdown-content"><button  class="material-symbols-outlined" title="Add To importent" onclick="star(this)">star</button><button  class="material-symbols-outlined" title="Delete !" onclick="Remove(this)">delete</button></span></span></p>`;
            let index = search(50, 100, val)
            localStorage.removeItem(`${index}`);
            sortAndStore(50, 100);
            additem(0, 50, val);

            return
        }
        else if (a == "Planned") {
            let b = document.getElementById("pa");
            check_empty(b, "a");
            p.remove();
            is_empty(k);
            b.innerHTML += `<p class="task"><button class="material-symbols-outlined comp" onclick="comp(this)">radio_button_unchecked</button><span class="assigne">${val}</span><span class="dropdown"><button  class="material-symbols-outlined dropbtn">more_vert</button><br><span class="dropdown-content"><button  class="material-symbols-outlined" title="Add To importent" onclick="star(this)">star</button><button  class="material-symbols-outlined" title="Delete !" onclick="Remove(this)">delete</button></span></span></p>`;
            let index = search(200, 250, val)
            localStorage.removeItem(`${index}`);
            sortAndStore(200, 250);
            additem(150, 200, val);

            return
        }
        else if (a == "This Week") {
            let b = document.getElementById("twa");
            check_empty(b, "a");
            p.remove();
            is_empty(k);
            b.innerHTML += `<p class="task"><button class="material-symbols-outlined comp" onclick="comp(this)">radio_button_unchecked</button><span class="assigne">${val}</span><span class="dropdown"><button  class="material-symbols-outlined dropbtn">more_vert</button><br><span class="dropdown-content"><button  class="material-symbols-outlined" title="Add To importent" onclick="star(this)">star</button><button  class="material-symbols-outlined" title="Delete !" onclick="Remove(this)">delete</button></span></span></p>`;
            let index = search(350, 400, val)
            localStorage.removeItem(`${index}`);
            sortAndStore(350, 400);
            additem(300, 350, val);

            return
        }
        else if (a == "This Month") {
            let b = document.getElementById("tma");
            check_empty(b, "a");
            p.remove();
            is_empty(k);
            b.innerHTML += `<p class="task"><button class="material-symbols-outlined comp" onclick="comp(this)">radio_button_unchecked</button><span class="assigne">${val}</span><span class="dropdown"><button  class="material-symbols-outlined dropbtn">more_vert</button><br><span class="dropdown-content"><button  class="material-symbols-outlined" title="Add To importent" onclick="star(this)">star</button><button  class="material-symbols-outlined" title="Delete !" onclick="Remove(this)">delete</button></span></span></p>`;
            let index = search(500, 550, val)
            localStorage.removeItem(`${index}`);
            sortAndStore(500, 550);
            additem(450, 500, val);

            return
        }
        else if (a == "Tasks") {
            let b = document.getElementById("ta");
            check_empty(b, "a");
            p.remove();
            is_empty(k);
            b.innerHTML += `<p class="task"><button class="material-symbols-outlined comp" onclick="comp(this)">radio_button_unchecked</button><span class="assigne">${val}</span><span class="dropdown"><button  class="material-symbols-outlined dropbtn">more_vert</button><br><span class="dropdown-content"><button  class="material-symbols-outlined" title="Add To importent" onclick="star(this)">star</button><button  class="material-symbols-outlined" title="Delete !" onclick="Remove(this)">delete</button></span></span></p>`;

            let index = search(50, 100, val)
            if (index == -1) {
                index = search(200, 250, val);
            } else {
                localStorage.removeItem(`${index}`);
                additem(0, 50, val)
                return;
            }
            if (index == -1) {
                index = search(350, 400, val);
            } else {
                localStorage.removeItem(`${index}`);
                additem(150, 200, val);
                return;
            }
            if (index == -1) {
                index = search(500, 550, val);
            } else {
                localStorage.removeItem(`${index}`);
                additem(300, 350, val);
                return;
            }
            localStorage.removeItem(`${index}`);
            additem(450, 500, val)
            return;
        } else if (a == "Importent") {
            let b = document.getElementById("ii");
            check_empty(b, "i");
            p.remove();
            is_empty(k);
            b.innerHTML += `<p class="task"><button class="material-symbols-outlined comp" onclick="comp(this)">radio_button_unchecked</button><span class="importent">${val}</span><span class="dropdown"><button  class="material-symbols-outlined dropbtn">more_vert</button><br><span class="dropdown-content"><button  class="material-symbols-outlined" title="Add To importent" onclick="star(this)">stars</button><button  class="material-symbols-outlined" title="Delete !" onclick="Remove(this)">delete</button></span></span></p>`;
            let index1 = search(750, 900, val)
            localStorage.removeItem(`${index1}`);
            sortAndStore(750, 900);
            additem(600, 750, val);

            return;
        }
    }
}




//function star()


function star(ele) {
    let a = document.getElementById("page-title").innerHTML;
    let p = ele.parentElement.parentElement.parentElement;
    let k = p.parentElement;
    //console.log(k);
    let val = p.firstElementChild.nextElementSibling.innerHTML;
    if (ele.innerHTML == "star") {
        update_count("Importent", "add");
        if (a == "My Day") {
            let b = document.getElementById("mdi");
            check_empty(b, "i");
            p.remove();
            is_empty(k);
            b.innerHTML += `<p class="task"><button class="material-symbols-outlined comp" onclick="comp(this)">radio_button_unchecked</button><span class="importent">${val}</span><span class="dropdown"><button  class="material-symbols-outlined dropbtn">more_vert</button><br><span class="dropdown-content"><button  class="material-symbols-outlined" title="Remove from importent" onclick="star(this)">stars</button><button  class="material-symbols-outlined" title="Delete !" onclick="Remove(this)">delete</button></span></span></p>`;
            let index = search(0, 50, val)
            localStorage.removeItem(`${index}`);
            sortAndStore(0, 50);
            additem(100, 150, val);
            additem(600, 750, val);
            return
        }
        else if (a == "Planned") {
            let b = document.getElementById("pi");
            check_empty(b, "i");
            p.remove();
            is_empty(k);
            b.innerHTML += `<p class="task"><button class="material-symbols-outlined comp" onclick="comp(this)">radio_button_unchecked</button><span class="importent">${val}</span><span class="dropdown"><button  class="material-symbols-outlined dropbtn">more_vert</button><br><span class="dropdown-content"><button  class="material-symbols-outlined" title="Remove from importent" onclick="star(this)">stars</button><button  class="material-symbols-outlined" title="Delete !" onclick="Remove(this)">delete</button></span></span></p>`;
            let index = search(150, 200, val)
            localStorage.removeItem(`${index}`);
            sortAndStore(150, 200);
            additem(250, 300, val);
            additem(600, 750, val);
            return
        }
        else if (a == "This Week") {
            let b = document.getElementById("twi");
            check_empty(b, "i");
            p.remove();
            is_empty(k);
            b.innerHTML += `<p class="task"><button class="material-symbols-outlined comp" onclick="comp(this)">radio_button_unchecked</button><span class="importent">${val}</span><span class="dropdown"><button  class="material-symbols-outlined dropbtn">more_vert</button><br><span class="dropdown-content"><button  class="material-symbols-outlined" title="Remove from importent" onclick="star(this)">stars</button><button  class="material-symbols-outlined" title="Delete !" onclick="Remove(this)">delete</button></span></span></p>`;
            let index = search(300, 350, val)
            localStorage.removeItem(`${index}`);
            sortAndStore(300, 350);
            additem(400, 450, val);
            additem(600, 750, val);
            return
        }
        else if (a == "This Month") {
            let b = document.getElementById("tmi");
            check_empty(b, "i");
            p.remove();
            is_empty(k);
            b.innerHTML += `<p class="task"><button class="material-symbols-outlined comp" onclick="comp(this)">radio_button_unchecked</button><span class="importent">${val}</span><span class="dropdown"><button  class="material-symbols-outlined dropbtn">more_vert</button><br><span class="dropdown-content"><button  class="material-symbols-outlined" title="Remove from importent" onclick="star(this)">stars</button><button  class="material-symbols-outlined" title="Delete !" onclick="Remove(this)">delete</button></span></span></p>`;
            let index = search(450, 500, val)
            localStorage.removeItem(`${index}`);
            sortAndStore(450, 500);
            additem(550, 600, val);
            additem(600, 750, val);
            return
        }
        else if (a == "Tasks") {
            let b = document.getElementById("ti");
            check_empty(b, "i");
            p.remove();
            is_empty(k);
            b.innerHTML += `<p class="task"><button class="material-symbols-outlined comp" onclick="comp(this)">radio_button_unchecked</button><span class="importent">${val}</span><span class="dropdown"><button  class="material-symbols-outlined dropbtn">more_vert</button><br><span class="dropdown-content"><button  class="material-symbols-outlined" title="Remove from importent" onclick="star(this)">stars</button><button  class="material-symbols-outlined" title="Delete !" onclick="Remove(this)">delete</button></span></span></p>`;
            additem(600, 750, val);
            let index = search(0, 50, val)
            if (index == -1) {
                index = search(150, 200, val);
            } else {
                localStorage.removeItem(`${index}`);
                additem(100, 150, val)
                return;
            }
            if (index == -1) {
                index = search(300, 350, val);
            } else {
                localStorage.removeItem(`${index}`);
                additem(250, 300, val);
                return;
            }
            if (index == -1) {
                index = search(450, 500, val);
            } else {
                localStorage.removeItem(`${index}`);
                additem(400, 450, val);
                return;
            }
            localStorage.removeItem(`${index}`);
            additem(550, 600, val)
            return;
        }

    } else {
        update_count("Importent", "sub");
        if (a == "My Day") {
            let b = document.getElementById("mda");
            check_empty(b, "a");
            p.remove();
            is_empty(k);
            b.innerHTML += `<p class="task"><button class="material-symbols-outlined comp" onclick="comp(this)">radio_button_unchecked</button><span class="assigne">${val}</span><span class="dropdown"><button  class="material-symbols-outlined dropbtn">more_vert</button><br><span class="dropdown-content"><button  class="material-symbols-outlined" title="Add To importent" onclick="star(this)">star</button><button  class="material-symbols-outlined" title="Delete !" onclick="Remove(this)">delete</button></span></span></p>`;
            let index = search(100, 150, val)
            localStorage.removeItem(`${index}`);
            sortAndStore(100, 150);
            additem(0, 50, val);
            let index1 = search(600, 750, val)
            localStorage.removeItem(`${index1}`);
            sortAndStore(600, 750);
            return
        }
        else if (a == "Planned") {
            let b = document.getElementById("pa");
            check_empty(b, "a");
            p.remove();
            is_empty(k);
            b.innerHTML += `<p class="task"><button class="material-symbols-outlined comp" onclick="comp(this)">radio_button_unchecked</button><span class="assigne">${val}</span><span class="dropdown"><button  class="material-symbols-outlined dropbtn">more_vert</button><br><span class="dropdown-content"><button  class="material-symbols-outlined" title="Add To importent" onclick="star(this)">star</button><button  class="material-symbols-outlined" title="Delete !" onclick="Remove(this)">delete</button></span></span></p>`;
            let index = search(250, 300, val)
            localStorage.removeItem(`${index}`);
            sortAndStore(250, 300);
            additem(150, 200, val);
            let index1 = search(600, 750, val)
            localStorage.removeItem(`${index1}`);
            sortAndStore(600, 750);
            return
        }
        else if (a == "This Week") {
            let b = document.getElementById("twa");
            check_empty(b, "a");
            p.remove();
            is_empty(k);
            b.innerHTML += `<p class="task"><button class="material-symbols-outlined comp" onclick="comp(this)">radio_button_unchecked</button><span class="assigne">${val}</span><span class="dropdown"><button  class="material-symbols-outlined dropbtn">more_vert</button><br><span class="dropdown-content"><button  class="material-symbols-outlined" title="Add To importent" onclick="star(this)">star</button><button  class="material-symbols-outlined" title="Delete !" onclick="Remove(this)">delete</button></span></span></p>`;
            let index = search(400, 450, val)
            localStorage.removeItem(`${index}`);
            sortAndStore(400, 450);
            additem(300, 350, val);
            let index1 = search(600, 750, val)
            localStorage.removeItem(`${index1}`);
            sortAndStore(600, 750);
            return
        }
        else if (a == "This Month") {
            let b = document.getElementById("tma");
            check_empty(b, "a");
            p.remove();
            is_empty(k);
            b.innerHTML += `<p class="task"><button class="material-symbols-outlined comp" onclick="comp(this)">radio_button_unchecked</button><span class="assigne">${val}</span><span class="dropdown"><button  class="material-symbols-outlined dropbtn">more_vert</button><br><span class="dropdown-content"><button  class="material-symbols-outlined" title="Add To importent" onclick="star(this)">star</button><button  class="material-symbols-outlined" title="Delete !" onclick="Remove(this)">delete</button></span></span></p>`;
            let index = search(550, 600, val)
            localStorage.removeItem(`${index}`);
            sortAndStore(550, 600);
            additem(450, 500, val);
            let index1 = search(600, 750, val)
            localStorage.removeItem(`${index1}`);
            sortAndStore(600, 750);
            return
        }
        else if (a == "Tasks") {
            let b = document.getElementById("ta");
            check_empty(b, "a");
            p.remove();
            is_empty(k);
            b.innerHTML += `<p class="task"><button class="material-symbols-outlined comp" onclick="comp(this)">radio_button_unchecked</button><span class="assigne">${val}</span><span class="dropdown"><button  class="material-symbols-outlined dropbtn">more_vert</button><br><span class="dropdown-content"><button  class="material-symbols-outlined" title="Add To importent" onclick="star(this)">star</button><button  class="material-symbols-outlined" title="Delete !" onclick="Remove(this)">delete</button></span></span></p>`;
            let index1 = search(600, 750, val)
            localStorage.removeItem(`${index1}`);
            sortAndStore(600, 750);
            let index = search(100, 150, val)
            if (index == -1) {
                index = search(250, 300, val);
            } else {
                localStorage.removeItem(`${index}`);
                additem(0, 50, val)
                return;
            }
            if (index == -1) {
                index = search(400, 450, val);
            } else {
                localStorage.removeItem(`${index}`);
                additem(150, 200, val);
                return;
            }
            if (index == -1) {
                index = search(550, 600, val);
            } else {
                localStorage.removeItem(`${index}`);
                additem(300, 350, val);
                return;
            }
            localStorage.removeItem(`${index}`);
            additem(450, 500, val)
            return;
        } else if (a == "Importent") {

            p.remove();
            is_empty(k);
            let index1 = search(600, 750, val)
            localStorage.removeItem(`${index1}`);
            sortAndStore(600, 750);
            let index = search(100, 150, val)
            if (index == -1) {
                index = search(250, 300, val);
            } else {
                localStorage.removeItem(`${index}`);
                additem(0, 50, val)
                return;
            }
            if (index == -1) {
                index = search(400, 450, val);
            } else {
                localStorage.removeItem(`${index}`);
                additem(150, 200, val);
                return;
            }
            if (index == -1) {
                index = search(550, 600, val);
            } else {
                localStorage.removeItem(`${index}`);
                additem(300, 350, val);
                return;
            }
            localStorage.removeItem(`${index}`);
            additem(450, 500, val)
            return;
        }
    }
}


//function is_empty(i,type)


function is_empty(i) {
    //console.log(i);
    if (i.firstElementChild.nextElementSibling == null) {
        i.innerHTML = "";
    } else {
        return;
    }
}


//function remove()


function Remove(ele) {
    let a = document.getElementById("page-title").innerHTML;
    let p = ele.parentElement.parentElement.parentElement;
    let k = p.parentElement;
    update_count(a, "sub");
    let val = p.firstElementChild.nextElementSibling.innerHTML;
    if (p.firstElementChild.innerHTML == "radio_button_unchecked") {
        if (ele.previousElementSibling.innerHTML == "star") {
            if (a == "My Day") {
                p.remove();
                is_empty(k);
                let index = search(0, 50, val)
                localStorage.removeItem(`${index}`);
                sortAndStore(0, 50);
                return
            }
            else if (a == "Planned") {
                p.remove();
                is_empty(k);
                let index = search(150, 200, val)
                localStorage.removeItem(`${index}`);
                sortAndStore(150, 200);
                return
            }
            else if (a == "This Week") {
                p.remove();
                is_empty(k);
                let index = search(300, 350, val)
                localStorage.removeItem(`${index}`);
                sortAndStore(300, 350);
                return
            }
            else if (a == "This Month") {
                p.remove();
                is_empty(k);
                let index = search(450, 500, val)
                localStorage.removeItem(`${index}`);
                sortAndStore(450, 500);
                return
            }
            else if (a == "Tasks") {
                p.remove();
                is_empty(k);
                let index = search(0, 50, val)
                if (index == -1) {
                    index = search(150, 200, val);
                } else {
                    localStorage.removeItem(`${index}`);
                    sortAndStore(0, 50);
                    return;
                }
                if (index == -1) {
                    index = search(300, 350, val);
                } else {
                    localStorage.removeItem(`${index}`);
                    sortAndStore(150, 200);
                    return;
                }
                if (index == -1) {
                    index = search(450, 500, val);
                } else {
                    localStorage.removeItem(`${index}`);
                    sortAndStore(300, 350);
                    return;
                }
                localStorage.removeItem(`${index}`);
                sortAndStore(450, 500);
                return;
            }
        } else {
            if (a == "My Day") {
                p.remove();
                is_empty(k);
                let index = search(100, 150, val)
                localStorage.removeItem(`${index}`);
                sortAndStore(100, 150);
                return
            }
            else if (a == "Planned") {
                p.remove();
                is_empty(k);
                let index = search(250, 300, val)
                localStorage.removeItem(`${index}`);
                sortAndStore(250, 300);
                return
            }
            else if (a == "This Week") {
                p.remove();
                is_empty(k);
                let index = search(400, 450, val)
                localStorage.removeItem(`${index}`);
                sortAndStore(400, 450);
                return
            }
            else if (a == "This Month") {
                p.remove();
                is_empty(k);
                let index = search(550, 600, val)
                localStorage.removeItem(`${index}`);
                sortAndStore(550, 600);
                return
            }
            else if (a == "Tasks") {
                p.remove();
                is_empty(k);
                let index = search(100, 150, val)
                if (index == -1) {
                    index = search(250, 300, val);
                } else {
                    localStorage.removeItem(`${index}`);
                    sortAndStore(100, 150);
                    return;
                }
                if (index == -1) {
                    index = search(400, 450, val);
                } else {
                    localStorage.removeItem(`${index}`);
                    sortAndStore(250, 300);
                    return;
                }
                if (index == -1) {
                    index = search(550, 600, val);
                } else {
                    localStorage.removeItem(`${index}`);
                    sortAndStore(400, 450);
                    return;
                }
                localStorage.removeItem(`${index}`);
                sortAndStore(550, 600);
                return;
            }
            else if (a == "Importent") {
                p.remove();
                is_empty(k);
                let index1 = search(600, 750, val);
                localStorage.removeItem(`${index1}`);
                sortAndStore(600, 750);
                let index = search(100, 150, val)
                if (index == -1) {
                    index = search(250, 300, val);
                } else {
                    localStorage.removeItem(`${index}`);
                    sortAndStore(100, 150);
                    return;
                }
                if (index == -1) {
                    index = search(400, 450, val);
                } else {
                    localStorage.removeItem(`${index}`);
                    sortAndStore(250, 300);
                    return;
                }
                if (index == -1) {
                    index = search(550, 600, val);
                } else {
                    localStorage.removeItem(`${index}`);
                    sortAndStore(400, 450);
                    return;
                }
                localStorage.removeItem(`${index}`);
                sortAndStore(550, 600);
                return;
            }

        }
    } else {
        if (a == "My Day") {
            p.remove();
            is_empty(k);
            let index = search(50, 100, val)
            localStorage.removeItem(`${index}`);
            sortAndStore(50, 100);
            return
        }
        else if (a == "Planned") {
            p.remove();
            is_empty(k);
            let index = search(200, 250, val)
            localStorage.removeItem(`${index}`);
            sortAndStore(200, 250);
            return
        }
        else if (a == "Importent") {
            p.remove();
            is_empty(k);
            let index = search(750, 900, val)
            localStorage.removeItem(`${index}`);
            sortAndStore(750, 900);
            return
        }
        else if (a == "This Week") {
            p.remove();
            is_empty(k);
            let index = search(350, 400, val)
            localStorage.removeItem(`${index}`);
            sortAndStore(350, 400);
            return
        }
        else if (a == "This Month") {
            p.remove();
            is_empty(k);
            let index = search(500, 550, val)
            localStorage.removeItem(`${index}`);
            sortAndStore(500, 550);
            return
        }
        else if (a == "Tasks") {
            p.remove();
            is_empty(k);
            let index = search(50, 100, val)
            if (index == -1) {
                index = search(200, 250, val);
            } else {
                localStorage.removeItem(`${index}`);
                sortAndStore(50, 100);
                return;
            }
            if (index == -1) {
                index = search(350, 400, val);
            } else {
                localStorage.removeItem(`${index}`);
                sortAndStore(200, 250);
                return;
            }
            if (index == -1) {
                index = search(500, 550, val);
            } else {
                localStorage.removeItem(`${index}`);
                sortAndStore(350, 400);
                return;
            }
            localStorage.removeItem(`${index}`);
            sortAndStore(500, 550);
            return;
        }
    }

}


