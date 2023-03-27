let names = document.querySelector(".name")
let locations = document.querySelector(".locations")
let gradYear = document.querySelector(".graduationYear")
let submitResp = document.querySelector(".submit")
let listName = document.querySelector(".listName")
let listLocation = document.querySelector(".listLocation")
let listYear = document.querySelector(".listYear")
let alignInput = document.querySelector(".alignInput")
let btnDels = document.querySelector(".btnDel")
let cName = document.getElementById("cName")
let cYear = document.getElementById("cYear")
submitResp.addEventListener("click", () => {
    let val = true
    if (names.value == "" || names.value == " ") {
        cName.innerHTML = "University name cannot be empty"
        setTimeout(() => {
            cName.textContent = ""
        }, 4000);
        val = false
    }
    if (locations.value == "" || locations.value == " ") {
        cLocation.innerHTML = "Location name cannot be empty"
        setTimeout(() => {
            cLocation.textContent = ""
        }, 4000);
        val = false
    }
    if (val) {
        class UnivList {
            constructor(_name, _location, _gradYear) {
                this.name = _name;
                this.location = _location;
                this.gradYear = _gradYear;
            }
        }
        let listObject = new UnivList(names.value, locations.value, gradYear.value);
        alignInput.innerHTML += `            
<div class="inputContainer">
    <div class="list">
        <div class="listValue listName">NAME : ${listObject.name} </div>
        <div class="listValue listLocation">Location : ${listObject.location}</div>
        <div class="listValue listYear">Year : ${listObject.gradYear}</div>
        <button class="btnDel">Delete</button>
    </div>
</div>`

        names.value = ""
        locations.value = ""
        gradYear.value = 2026
    }
})
alignInput.addEventListener("click", (e) => {
    console.log(e)
    if (e.target.classList.contains("btnDel")) {
        e.target.parentElement.parentElement.remove()
    }
})
