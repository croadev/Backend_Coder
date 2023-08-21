class Product {
  constructor(title, description, price, thumbnail, code, stock) {
    this.id = Product.incrementId();
    this.title = title;
    this.description = description;
    this.price = price;
    this.thumbnail = thumbnail;
    this.code = code;
    this.stock = stock;
  }

  static incrementId() {
    if (!this.latestId) this.latestId = 1;
    else this.latestId++;
    return this.latestId;
  }
}

class ProductManager {
  constructor() {
    this.products = [];
  }

  addProduct(title, description, price, thumbnail, code, stock) {
    if (!title || !description || !price || !thumbnail || !code || !stock) {
      console.error("Todos los campos son obligatorios.");
      return;
    }

    if (this.products.some((product) => product.code === code)) {
      console.error("El código de producto ya existe.");
      return;
    }

    const newProduct = new Product(
      title,
      description,
      price,
      thumbnail,
      code,
      stock
    );
    this.products.push(newProduct);
  }

  getProducts() {
    return this.products;
  }

  getProductById(id) {
    const product = this.products.find((product) => product.id === id);
    if (!product) {
      console.error("Producto no encontrado.");
      return;
    }
    return product;
  }
}

const manager = new ProductManager();

manager.addProduct(
  "SkyWalker Dutchpassion",
  "Skywalker Haze es una híbrida Haze muy potente y escarchada con un alto rendimiento y un alto porcentaje de THC que oscila entre el 15 y 20%",
  3500,
  "https://dutch-passion.com/1379-medium_default/skywalker-haze.jpg",
  "P001",
  100
);
manager.addProduct(
  "jack Herer",
  "",
  3500,
  "https://gbseeds.org/wp-content/uploads/2020/06/auto_jack_herer_3_web.jpg",
  "P002",
  50
);

console.log(manager.getProducts());
console.log(manager.getProductById(1));
console.log(manager.getProductById(3));
