class expense{
    name;
    amount;
    date;

    constructor(expenseName,expenseAmount,expenseDate){
        this.name = expenseName;
        this.amount = expenseAmount;
        this.date = expenseDate;
    }
    addExpense(itemCount){
        let item = document.createElement("tr");
        item.id = itemCount;
        console.log(item.id);
        item.innerHTML = `
                            <th scope="row">${itemCount}</th>
                            <td>${this.name}</td>
                            <td>${this.amount}</td>
                            <td>${this.date}</td>
        `;
        document.getElementById("items").appendChild(item);
    }
}

function createItemDisplaySection(){
    let itemSection = document.createElement("div");
        itemSection.innerHTML = `
                    <h3 class="text-center">Expense List</h3>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Amount</th>
                                <th scope="col">Date</th>
                            </tr>
                        </thead>
                        <tbody id="items">
                        </tbody>
        `;
        document.getElementById("itemSection").appendChild(itemSection);
}

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1;
var yyyy = today.getFullYear();
if(dd<10)
    dd='0'+dd
if(mm<10)
    mm='0'+mm 
today = yyyy+'-'+mm+'-'+dd;
document.getElementById("date").setAttribute("max", today);

const form = document.querySelector("#form");
let displaySection = true;
let itemCount = 1;
form.addEventListener("submit",(event)=>{
    let valid = 1;
    let expenseName = document.getElementById("name").value;
    if(!/^[A-za-z ]+$/.test(expenseName)){
        document.getElementById("name").classList.add("is-invalid");
        document.getElementById("invalidName").classList.remove("d-none");
        document.getElementById("invalidName").innerText="Enter correct name";
        valid = 0;
    }
    else{
        document.getElementById("name").classList.add("is-valid");
    }
    let expenseAmount = document.getElementById("amount").value;
    if(!/^[0-9]+$/.test(expenseAmount)){
        document.getElementById("amount").classList.add("is-invalid");
        document.getElementById("invalidAmount").classList.remove("d-none");
        document.getElementById("invalidAmount").innerText = "Enter correct amount";
        valid = 0;
    }
    else{
        document.getElementById("amount").classList.add("is-valid");
    }
    let expenseDate = document.getElementById("date").value;
    if(valid == 1){
        if(displaySection){
            createItemDisplaySection();
            displaySection = false;
        }
        document.getElementById("displayItems").classList.add("d-none");
        let item = new expense(expenseName,expenseAmount,expenseDate);
        item.addExpense(itemCount++);
    }
    event.preventDefault();
});