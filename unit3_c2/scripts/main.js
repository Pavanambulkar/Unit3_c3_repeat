function Voucher(n,e,a,am){
    this.name = n;
    this.email = e;
    this.address = a;
    this.amount = am;

}

function SubmitForm(e){
    e.preventDefault();
    let form = document.getElementById("form");
    let name = form.name.value;
    let email = form.email.value;
    let address = form.address.value;
    let amount = form.amount.value;

    let f1 = new Voucher(name, email, address, amount);
    console.log(f1);
    let SubmitData = JSON.parse(localStorage.getItem("user")) || [];
    SubmitData.push(f1);
    localStorage.setItem("user", JSON.stringify(SubmitData));
    
}