class ProductManager {
    constructor(){
        this.products = [];
    }

    addEvent(title, description, price, tumbnail, code, stock()){
        const event = {
            id: this.products() + 1,
            title,
            description,
            price,
            tumbnail,
            code,
            stock;
        };
        this.products.push(event);
    }
}