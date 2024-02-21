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
    "Сливочная моцарелла": [50,20],
    "Сырный борт": [150,50],
    "Чеддр и пармезан": [150,50]
//Для большой умножь деньги на 2!!
}

class BasePizza{
    constructor(name,size,topping,price,calorie) {

        this.name = name;
        this.size = size;
        this.topping = topping;
        this.price = 0;
        this.calorie = 0;
    }
    addTopping(newTopping){
        this.topping.push(newTopping);
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

    }

    calcPrice(){
        this.price = 0;
        this.price += pizzaSpecs[this.name][0];
        this.price += sizeSpecs[this.size][0];
        let size = this.size;

        this.topping.forEach((item)=> {
            size == "Большая" ? this.price+=toppingSpecs[item][0]*2 : this.price+=toppingSpecs[item][0];
        })
        return this.price;

    }
    calcCalorie(){
        this.calorie = 0;
        this.calorie += pizzaSpecs[this.name][1];
        this.calorie += sizeSpecs[this.size][1];
        let size = this.size;

        this.topping.forEach((item)=> {
            size == "Большая" ? this.calorie+=toppingSpecs[item][1]*2 : this.calorie+=toppingSpecs[item][1];
        })
        return this.calorie;

    }
    getToppings(){
        console.log(`Текущие добавки к пицце: ${this.topping}`);
        return this.topping;
    }
    getSize() {
        console.log(`Текущий размер: ${this.size}`);
        return this.size;
    }
    getStuffing() {
        console.log(`Тип пиццы: ${this.name}`);
        return this.name;
    }
}
let testPizza = new BasePizza("Пепперони","Большая", ["Сливочная моцарелла","Сырный борт"] )
console.log(`Цена пиццы: ${testPizza.calcPrice()}`);
console.log(`Каллории пиццы: ${testPizza.calcCalorie()}`);
testPizza.addTopping("Чеддр и пармезан");
testPizza.getToppings();
console.log(`Цена пиццы: ${testPizza.calcPrice()}`);
console.log(`Каллории пиццы: ${testPizza.calcCalorie()}`);
testPizza.removeTopping("Чеддр и пармезан");
console.log(`Цена пиццы: ${testPizza.calcPrice()}`);
console.log(`Каллории пиццы: ${testPizza.calcCalorie()}`);
testPizza.getToppings();
testPizza.getSize();
testPizza.getStuffing();

