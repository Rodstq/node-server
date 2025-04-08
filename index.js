
//puxa users
async function getUsers() {
    try {
      const response = await fetch("http://localhost:3000/api/usuarios");
      const users = await response.json();
  
    
      let tbody = document.querySelector('.user-list>tbody');
      let i =0;

      users.forEach(user => {
        
        let userItem = document.createElement("tr");
        userItem.classList.add(`user-item-${i}`);
        viewUser(user, userItem);
        userItem.contentEditable=true;

        tbody.appendChild(userItem);

        i++;

      });

    } catch (error) {
      console.error("Erro ao buscar usuários:", error);
    }
  }
  
  function viewUser(user, userItem) {

      let i = 0;

    for (let chave in user) {    
        let td = document.createElement("td");
        td.textContent = `${user[chave]}`;

        if(i >= Object.keys(user).length-1){
          td.classList.add(`d-none`);
        } else {
          td.classList.add(`user-chave`);
        }

        userItem.appendChild(td);

        i++;
    }
       let td2 = document.createElement("td");
       td2.innerHTML = `<button class="btn-atualizar" onclick="atualizarRegistros(this)">Atualizar</button>`;
       td2.classList.add('Update');
       userItem.appendChild(td2);

}


function atualizarRegistros(e){
    let user_id = e.parentNode.parentNode.querySelector('.d-none').innerText;

    let datas = e.parentNode.parentNode.querySelectorAll('.user-chave');

    datas.forEach(data => {
      console.log(data);
    });

    

    let query = "UPDATE usuarios SET col1 = " + data;

    console.log(query);
}


  // async function getVagas() {
  //   try {
  //     const response = await fetch("http://localhost:3000/api/vagas");
  //     const users = await response.json();
  
    
  //     let tbody = document.querySelector('.vagas-list>tbody');

  //     users.forEach(user => {
        
  //       let userItem = document.createElement("tr");
  //       userItem.classList.add("user-item");
  //       viewUser(user, userItem);

  //       tbody.appendChild(userItem);
  //     });
  //   } catch (error) {
  //     console.error("Erro ao buscar usuários:", error);
  //   }
  // }
  
  // function viewUser (user, userItem){
  //   for ( let chave in user){
  //       let td = document.createElement("td");
  //       td.textContent = `${user[chave]}`;
  //       td.classList.add('user-chave');
  //       userItem.appendChild(td);
  //   }
  // }

  // Call function to get users
  getUsers();
  // getVagas();


  