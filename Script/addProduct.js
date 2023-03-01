const btnAddProduct = document.getElementById("btnAddProduct");
const inputAddProduct = document.getElementById("inputAddProduct");
const listado = document.getElementById("listado");
const tableother = document.getElementById("table-other");


btnAddProduct.addEventListener('click',(e) => {
    e.preventDefault();
    const textoIngresado = inputAddProduct.value;
    const ul = document.createElement("ul");
    const li = document.createElement("li");
    const p = document.createElement("p");
    ul.style.padding = '0.5em';
    p.textContent = textoIngresado;
    tableother.append(ul);
    ul.appendChild(li);
    li.appendChild(p);
    inputAddProduct.value = '';
});
