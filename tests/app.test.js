
const test = require("node:test");
const assert = require("node:assert");
const { filterProducts } = require("../src/catalogue");

const products = [
    { name: "Shoes", category: "Footwear" },
    { name: "Watch", category: "Accessories" }
];

test("Filters products by category", () => {
    const result = filterProducts(products, "Footwear");

    assert.equal(result.length, 1);
    assert.equal(result[0].name, "Shoes");
});

test("Returns all products when category is All", () => {
    const result = filterProducts(products, "All");

    assert.equal(result.length, 2);
});
