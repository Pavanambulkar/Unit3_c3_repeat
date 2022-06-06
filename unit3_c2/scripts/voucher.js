// https://masai-vouchers-api.herokuapp.com/api/vouchers
// let url = `https://masai-vouchers-api.herokuapp.com/api/vouchers`

// fetch(url)
// .then(function(res){
//     return res.json();
// }).then(function(res){
//     console.log(res);
//     itemsData(res)
// })
// .catch(function(err){
//     console.log(err);
// })
async function myfunction(){
    try{
        let url = `https://masai-vouchers-api.herokuapp.com/api/vouchers`
        const res = await fetch(url);
        const data = await res.json();
    
        console.log(data[0].vouchers);
       itemsData(data[0].vouchers)
    }catch(err){
        console.log(err);
    }
   
}
myfunction()


function itemsData(data){
    data.forEach((el) => {
        let boxes = document.createElement("div");
        let image = document.createElement("img");
        image.src = el.image;
        let name = document.createElement("p");
        name.innerText =  el.name;
        let price = document.createElement("p");
        price.innerText = el.price;
        let btn = document.createElement("button");
        btn.innerText = "Buy"
        btn.addEventListener("click", function(){
            addProduct(el);
            console.log(el);
        })

        boxes.append(image, name, price, btn);
        document.querySelector("#voucher_list").append(boxes);
    });
  
      

}

function addProduct(el){
    console.log(el);
    localStorage.setItem("purchase", JSON.stringify((el)))
    window.location.href = "purchase.html"
}

  let pay = Number(JSON.parse(localStorage.getItem("user.amount")));
  document.querySelector("#wallet_balance").innerText = pay;