// const createTask = document.getElementsByClassName("btn1");
// const serachbar = document.getElementsByClassName('search-wrapper');
// const drop = document.getElementsByClassName("dropdown");
// const calender = document.getElementsByClassName("date");
// const myList = document.getElementsByClassName("list");

// function tableCreate(table_id){
//     let table_body = document.getElementById("table_id"),
//         first_tr = table_body.firstElementChild
//         tr_clone = first_tr.cloneNode(true);
//         table_body.append(tr_clone);

//         // clean_first_tr(table_body.firstElementChild);
// }

// function remove_tr(This) {
//     if(This.closest('tbody').childElementCount == 1)
//     {
//         alert("You Don't have Permission to Delete This");
//     }else{
//         This.closest('tr').remove();
//     }

// }

let nameinput = document.querySelector(".name_input");
let dateinput = document.querySelector(".date_input");
let taskbutton = document.querySelector(".taskbutton");
let mylist = document.querySelector(".mylist");
let taskArray = [];
taskbutton.addEventListener("click", ()=> {
  taskArray.push({"name" : nameinput.value, "date" : dateinput.value} );
 console.log(taskArray);
  adtodo();
});
// dateinput.addEventListener("click", ()=> {
//     console.log(dateinput.value);
//   taskArray.push(dateinput.value);
//   adtodo();
// });
function adtodo() {
    mylist.innerHTML = "" ; 
    taskArray.map((item) => {
        // console.log(item)
        mylist.innerHTML += ``;  
    })
}
