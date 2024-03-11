
    //[0]деньги [1]каллории
    pizzaSpecs = {
    "Маргарита": [500,300],
    "Пепперони": [800,400],
    "Баварская" : [700,450],
}
    sizeSpecs = {
    "Большая"  : [200,200],
    "Маленькая": [100,100],
}
    toppingSpecs = {
    "Сырный борт": [150,50],
    "Сливочная моцарелла": [50,20],
    "Чеддр и пармезан": [150,50]
}

    class BasePizza{
    constructor(name,size,topping,price,calorie) {

    this.name = name;
    this.size = size;
    this.topping = topping ? topping: [];
    this.price = 0;
    this.calorie = 0;
}
    getPrice(){
    return this.price;
}
    getCalorie(){
    return this.calorie;
}
    addTopping(newTopping){
    this.topping.push(newTopping);
    this.calcCalorie();
    this.calcPrice();
}
    removeTopping(oldTopping){
    this.calcCalorie();
    this.calcPrice();
    let toppingPrice = oldTopping[0];
    let toppingCalorie = oldTopping[1];
    this.size == "Большая" ? this.price-=toppingPrice*2 : this.price-=toppingPrice;
    this.calorie-=toppingCalorie;
    let index = this.topping.findIndex((top) => top===oldTopping);
    this.topping.splice(index,1);
    this.calcCalorie();
    this.calcPrice();

}

    calcPrice(){
    this.price = 0;
    this.price += pizzaSpecs[this.name][0];
    this.price += sizeSpecs[this.size][0];
    let size = this.size;

    this.topping.forEach((item)=> {
    size == "Большая" ? this.price+=toppingSpecs[item][0]*2 : this.price+=toppingSpecs[item][0];
})

    document.getElementById('add-2-cart').textContent = `${customPizza.getPrice()} руб., (${customPizza.getCalorie()} кКал)`
}
    calcCalorie(){
    this.calorie = 0;
    this.calorie += pizzaSpecs[this.name][1];
    this.calorie += sizeSpecs[this.size][1];
    let size = this.size;

    this.topping.forEach((item)=> {
    size == "Большая" ? this.calorie+=toppingSpecs[item][1]*2 : this.calorie+=toppingSpecs[item][1];
})
    document.getElementById('add-2-cart').textContent = `${customPizza.getPrice()} руб., (${customPizza.getCalorie()} кКал)`;
}
    getToppings(){
    return this.topping;
}
    getSize() {
    return this.size;
}
    getStuffing() {
    return this.name;
}
}
    let customPizza;
    function choosePizza(chosenPizza) {
    customPizza = chosenPizza;
    document.querySelectorAll('.pizza-item').forEach(item => item.style.border = '');
    document.querySelectorAll('.quantity').forEach(item => item.innerText = '0');
    document.getElementById(chosenPizza.getStuffing()).style.border='5px solid orange';
    customPizza.calcCalorie();
    customPizza.calcPrice();
}

    function remTop(toppingOption){
    let option = toppingOption.parentNode.previousSibling.previousSibling.previousSibling.previousSibling;
    let quantity = toppingOption.nextSibling.nextSibling;

    if(+quantity.innerText>0) {
    console.log(quantity.innerText--)
    let toppingName = option.textContent.trim();
    console.log(toppingName)
    customPizza.removeTopping(toppingName);
}
}
    function addTop(toppingOption)
    {
        let option = toppingOption.parentNode.previousSibling.previousSibling.previousSibling.previousSibling;
        let quantity = toppingOption.previousSibling.previousSibling;
        console.log(quantity.innerText++)
        let toppingName = option.textContent.trim();
        console.log(toppingName)
        customPizza.addTopping(toppingName);
    }
    function resizePizza(){
    document.getElementById('radioS').checked == '1' ? customPizza.size="Маленькая" : customPizza.size="Большая";

    customPizza.calcCalorie();
    customPizza.calcPrice();
}


