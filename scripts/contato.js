//botao email
const conteudoOriginal = botaoCopiar.innerHTML;
const email = "marcospaulosm2000@gmail.com";
const copiar = async () => {
  try {
    await navigator.clipboard.writeText(email);
    console.log('Copiado com sucesso');
    botaoCopiar.textContent = "Copiado!";
    } catch (err) {
      console.error('Falha ao copiar: ', err);
    }
}

botaoCopiar.addEventListener("mouseout", () => {
botaoCopiar.innerHTML = conteudoOriginal;
});