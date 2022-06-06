let purch = JSON.parse(localStorage.getItem("purchase"))

purch.forEach((el) => {
    restore();
    function restore(){
        let container = document.getElementById("purchased_vouchers")
        let boxes = document.createElement("div");
        let image = document.createElement("img");
        image.src = el.image;
        let name = document.createElement("p");
        name.innerText =  el.name;
        let price = document.createElement("p");
        price.innerText = el.price;
        

        boxes.append(image, name, price);
        container.append(boxes);
    }
});
