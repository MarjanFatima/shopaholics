
function filterProducts(products, category) {
    return category === "All"
        ? products
        : products.filter(p => p.category === category);
}

module.exports = { filterProducts };
