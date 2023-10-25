window.addEventListener('load', () => {
  const form = document.querySelector("#form-lista");
  const nomeInput = document.querySelector("#nome-contato");
  const numeroInput = document.querySelector("#numero-telefone");
  const contatosList = document.querySelector("#contatos");

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nomeContato = nomeInput.value;
    const numeroContato = numeroInput.value;

    if (nomeContato && numeroContato) {
      const trContato = document.createElement('tr');
      const tdNome = document.createElement('td');
      const tdNumero = document.createElement('td');
      const tdOpcoes = document.createElement('td');
      const ulOpcoes = document.createElement('ul');
      const editarLi = document.createElement('li');
      const editarButton = document.createElement('img');
      const telefoneLi = document.createElement('li');
      const telefoneLink = document.createElement('a'); // Alterado para um link
      const telefoneImg = document.createElement('img');
      const lixeiraLi = document.createElement('li');
      const lixeiraImg = document.createElement('img');

      trContato.classList.add('contato');
      tdNome.textContent = nomeContato;
      tdNumero.textContent = numeroContato;

      telefoneImg.src = "images/telefone.png";
      telefoneImg.alt = "telefone";
      telefoneImg.className = "icone"
      telefoneLink.href = `tel:${numeroContato}`; // Link para fazer chamadas
      telefoneLink.appendChild(telefoneImg);
      telefoneLi.appendChild(telefoneLink);

      lixeiraImg.src = "images/lixeira.png";
      lixeiraImg.alt = "lixeira";
      lixeiraImg.classList.add("remover-atividade", "icone");
      lixeiraLi.appendChild(lixeiraImg);

      editarButton.src = "images/caneta.png";
      editarButton.alt = "editar";
      editarButton.className = "icone"
      editarLi.appendChild(editarButton);


      ulOpcoes.appendChild(telefoneLi);
      ulOpcoes.appendChild(editarLi);
      ulOpcoes.appendChild(lixeiraLi);

      tdOpcoes.appendChild(ulOpcoes);

      trContato.appendChild(tdNome);
      trContato.appendChild(tdNumero);
      trContato.appendChild(tdOpcoes);

      contatosList.appendChild(trContato);

      nomeInput.value = '';
      numeroInput.value = '';

      editarButton.addEventListener('click', () => {
        if (editarButton.alt === "editar") {
          tdNome.innerHTML = `<input type="text" value="${nomeContato}" required />`;
          tdNumero.innerHTML = `<input type="text" value="${numeroContato}" required />`;

          editarButton.src = "images/disquete.png";
          editarButton.alt = "disquete";
        } else if (editarButton.alt === "disquete") {
          const novoNome = tdNome.querySelector('input').value;
          const novoNumero = tdNumero.querySelector('input').value;

          tdNome.innerHTML = novoNome;
          tdNumero.innerHTML = novoNumero;

          editarButton.src = "images/caneta.png";
          editarButton.alt = "editar";
        }
      });
    }
  });

  contatosList.addEventListener('click', (e) => {
    if (e.target.classList.contains('remover-atividade')) {
      const trContato = e.target.closest('tr');
      contatosList.removeChild(trContato);
    }
  });
});
