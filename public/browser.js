// const { response } = require("../app");

console.log("Browser is working") 

function itemTemplate(item) {
return `<li
class="list-group-item list-group-item-info d-flex align-items-center justify-content-between"
>
<span class="item-text">${ item.reja}</span>
<div>
<button data-id="${item._id}"
     class="edit-me btn btn-secondary btn-sm-mr-1">
    Ozgartirish
</button>
<button data-id=data-id="${item._id}" class="delete-me btn btn-danger btn-sm">ochirish</button>
</div>
</li>`
}

let createField = document.getElementById("create-field");

document.getElementById ("create-form").addEventListener ("submit", function (e){
    e.preventDefault();

    axios
    .post ("/create-item", {reja: createField.value})
    .then ((response)=> {
        document
        .getElementById ("item-list")
        .insertAdjacentHTML ("beforeend", itemTemplate(response.data));
        createField.value = "";
        createField.focus();
    } )
       .catch ((err)=> {
        console.log ("Please try again!")
       });
});
  
// delete operation
document.addEventListener ("click", function (e) {
    if (e.target.classList.contains("delete-me")){
        if (confirm("Aniq ochirmoqchimisiz?")) {
            axios
            .post("/delete-item",{id: e.target.getAttribute("data-id")})
            .then((response)=>{
                e.target.parentElement.parentElement.remove();
            })
            .catch((err)=>{
                console.log ("Try again")
            }); 
        }
        
    }

    if (e.target.classList.contains("edit-me")){
        alert ("siz edit  tugmasini bosdiz")
    }
})
