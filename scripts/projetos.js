//Botao projetos
const loadmore = document.querySelector('.load-more');

let currentItems = 4;
loadmore.addEventListener('click', (e) => {
  const elementList = [...document.querySelectorAll('.projetos-container li')];

  if (currentItems >= elementList.length) {
    // Se todos os itens estiverem revelados
    for (let i = currentItems - 1; i >= 4; i--) {
      elementList[i].style.display = 'none'; // Oculta os itens revelados
    }
    currentItems = 4;
    e.target.textContent = 'Ver mais'; // Altera o texto do botão para "Ver mais"
  } else {
    // Se ainda houver itens para revelar
    for (let i = currentItems; i < currentItems + 4 && i < elementList.length; i++) {
      elementList[i].style.display = 'flex'; // Exibe os itens ocultos
    }
    currentItems += 4;
    if (currentItems >= elementList.length) {
      e.target.textContent = 'Ver menos'; // Altera o texto do botão para "Ver menos"
    }
  }
});

