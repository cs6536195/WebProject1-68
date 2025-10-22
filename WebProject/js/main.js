const products = [
    { id: 1, title: 'Comfy T-Shirt', price: 19.99, category: 'Clothing' },
    { id: 2, title: 'Running Sneakers', price: 69.99, category: 'Shoes' },
    { id: 3, title: 'Leather Wallet', price: 29.99, category: 'Accessories' },
];


function loadHeader() {
    document.getElementById('header').innerHTML = `
<div class="container nav">
<nav class="nav-actions">
<a href="index.html" class="btn">Home</a>
<a href="shop.html" class="btn">Shop</a>
<a href="login.html" class="btn">Login</a>
<a href="register.html" class="btn">Register</a>
</nav>
</div>`;
}


document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('header')) loadHeader();
    if (document.getElementById('productGrid')) renderProducts();
});


function renderProducts() {
    const grid = document.getElementById('productGrid');
    products.forEach(p => {
        const div = document.createElement('div');
        div.className = 'card';
        div.innerHTML = `<h3>${p.title}</h3><p>${p.category}</p><strong>$${p.price}</strong>`;
        grid.appendChild(div);
    });
}