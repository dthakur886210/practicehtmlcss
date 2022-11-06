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
function adtodo() {
    mylist.innerHTML = "" ; 
    taskArray.map((item) => {
        // console.log(item)
        mylist.innerHTML += ` <div class="d-flex justify-content-around mt-4 ">
        <label>${item.name}</label>
        <label>${item.date}</label>
        <div>Remaining</div>
        <button class= "details_class" type="button" onclick=\'${detailfun(item)}\' class="btn btn-primary " data-bs-toggle="modal" data-bs-target="#exampleModal">
 Detail
</button>
        <button class=" delete_btn"><i class="fa-solid fa-xmark"></i></button>
    </div>`;  
    })
    let remove = document.querySelectorAll(".delete_btn");
    let removarr = Array.from(remove);  

    removarr.map((button, index) =>{   
        button.addEventListener("click", function(){
            taskArray.splice(index, 1); 
            adtodo() 
        });
    });

function detailfun(item) {
  console.log("item name is " + item.name )
  document.getElementsByClassName("details_class").innerHTML =  `<div class="modal" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <div class="container">
      <div class="flex">
        <h1>Name : </h1>
        <h2>${item.name}</h2>
      </div>
      <div class="flex">
        <h1>Date : </h1>
        <h2>${item.date}</h2>
      </div>
      </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary">Save changes</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>`;;



}  
}
