const serverurl = process.env.SERVER_API;

console.log("Dev m3", serverurl);

//variaveis globais

const productList = document.querySelector("[data-productList]");
const cartItem = document.querySelector("[data-cartItem]");
const selectValue = document.querySelector("[data-select]");
let cont = 0;
let sort = '';
let cores = [];
let cores1 = '';


// criar os cards

async function loadProducts(productsCount, sort, cores) {
  const api = "http://localhost:5000/products";

  const res = await fetch(api);
  const data = await res.json();

  if(sort === '' && cores.length === 0){
    data.length = productsCount;

    data.forEach((product) => {
      createProductItem(product);
    });
  }

  //Ordenar

  if(sort === 'recentes') {
    const ordenarMaisRecente = data.sort((a, b) => {
      return new Date(b.date) - new Date(a.date)
    })

    ordenarMaisRecente.length = productsCount;

    ordenarMaisRecente.forEach((product) => {
      createProductItem(product);
    });
  }

  if(sort === 'menor') {
    const ordenarMenorPreco = data.sort((a, b) => a.price - b.price)

    ordenarMenorPreco.length = productsCount;

    ordenarMenorPreco.forEach((product) => {
      createProductItem(product);
    });
  }

  if(sort === 'maior') {
    const ordenarMaiorPreco = data.sort((a, b) => b.price - a.price)

    ordenarMaiorPreco.length = productsCount;

    ordenarMaiorPreco.forEach((product) => {
      createProductItem(product);
    });
  }

  //Filtros

  // if(cores[0] == 'amarelo'){
  if(cores == 'amarelo'){
    const filterCores = data.filter((elem) => elem.color === 'Amarelo')

    filterCores.length = productsCount;

    filterCores.forEach((product) => {
      createProductItem(product);
    });
  }

  if(cores == 'preto'){
    const filterCores = data.filter((elem) => elem.color === 'Preto')

    filterCores.length = productsCount;

    filterCores.forEach((product) => {
      createProductItem(product);
    });
  }

  if(cores == 'branco'){
    const filterCores = data.filter((elem) => elem.color === 'Branco')

    filterCores.length = productsCount;

    filterCores.forEach((product) => {
      createProductItem(product);
    });
  }

  if(cores == 'laranja'){
    const filterCores = data.filter((elem) => elem.color === 'Laranja')

    filterCores.length = productsCount;

    filterCores.forEach((product) => {
      createProductItem(product);
    });
  }

  // const filterTamanho = array.filter((elem) => {
  //   return (elem.size[0] === tamanhoM || elem.size[1] === tamanhoM)
  // })
  
  // const filterPreco = array.filter((elem) => {
  //   return (preco1 < elem.price  && preco2 > elem.price)
  // })


  
}
loadProducts(9, sort, cores);

function createProductItem(product) {
  const productItem = document.createElement("li");
  productItem.classList.add("vitrine__card");

  productItem.innerHTML = `
   <figure>
      <img src="${product.image}" alt="${product.name}" />
    </figure>

    <div>
      <h3>${product.name}</h3>
      <h4>R$ ${product.price.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}
      </h4>
      <p>até ${product.parcelamento[0].toLocaleString([
        "ban",
        "id",
      ])}x de R$ ${product.parcelamento[1].toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}</p>
    </div>

    <button class='comprar'>COMPRAR</button>

  `;
  productList.append(productItem);
}

addEventListener("click", (event) => {
  const interceptador = event.target;

  if (interceptador.className == "content__vitrine__carregarMais") {
    productList.innerHTML = "";
    loadProducts(14, sort, cores);
  }
});

//Sacola de compras

function createCartItem(count) {
  const cartItemSoma = document.createElement("span");
  cartItemSoma.innerHTML = `${count}`;

  cartItem.append(cartItemSoma);
}
createCartItem(0);

addEventListener("click", (event) => {
  const interceptador = event.target;
  cont += 1;

  if (interceptador.className == "comprar") {
    console.log("oi");
    cartItem.innerHTML = "";
    createCartItem(cont);
  }
});

// Sort

selectValue.addEventListener('change', function(){
    if(selectValue.value === 'recentes'){
      sort = 'recentes';
      productList.innerHTML = "";
      loadProducts(9, sort, cores)
    }
    if(selectValue.value === 'menor'){
      sort = 'menor'
      productList.innerHTML = "";
      loadProducts(9, sort, cores)
    }
    if(selectValue.value === 'maior'){
      sort = 'maior'
      productList.innerHTML = "";
      loadProducts(9, sort, cores)
    }
})


// filtro

const checkboxCores = document.querySelector("[data-cores]");

checkboxCores.addEventListener("click", (event) => {
  const interceptador = event.target;

  if(interceptador.id === 'amarelo'){
    if(cores !== ''){
      cores = ''
      productList.innerHTML = "";
      loadProducts(9, sort, cores)
    } else {
      cores = 'amarelo';
      productList.innerHTML = "";
      loadProducts(9, sort, cores)
    }
  }
  if(interceptador.id === 'azul'){
    console.log('azul')
  }
  if(interceptador.id === 'branco'){
    console.log('branco')
  }
  if(interceptador.id === 'cinza'){
    console.log('cinza')
  }
  if(interceptador.id === 'laranja'){
    if(cores !== ''){
      cores = ''
      productList.innerHTML = "";
      loadProducts(9, sort, cores)
    } else {
      cores = 'laranja';
      productList.innerHTML = "";
      loadProducts(9, sort, cores)
    }
  }
  if(interceptador.id === 'verde'){
    console.log('verde')
  }
  if(interceptador.id === 'vermelho'){
    console.log('vermelho')
  }
  if(interceptador.id === 'preto'){
    if(cores !== ''){
      cores = ''
      productList.innerHTML = "";
      loadProducts(9, sort, cores)
    } else {
      cores = 'preto';
      productList.innerHTML = "";
      loadProducts(9, sort, cores)
    }
  }
  if(interceptador.id === 'rosa'){
    if(cores !== ''){
      cores = ''
      productList.innerHTML = "";
      loadProducts(9, sort, cores)
    } else {
      cores = 'rosa';
      productList.innerHTML = "";
      loadProducts(9, sort, cores)
    }
  }
  if(interceptador.id === 'vinho'){
    console.log('vinho')
  }

});


