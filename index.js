
//puxa users
async function getUsers() {
    try {
      const response = await fetch("http://localhost:3000/api/usuarios");
      const users = await response.json();
  
    
      let tbody = document.querySelector('.user-list>tbody');

      users.forEach(user => {
        
        let userItem = document.createElement("tr");
        userItem.classList.add("user-item");
        viewUser(user, userItem);

        tbody.appendChild(userItem);
      });
    } catch (error) {
      console.error("Erro ao buscar usuários:", error);
    }
  }
  
  function viewUser (user, userItem){
    for ( let chave in user){
        let td = document.createElement("td");
        td.textContent = `${user[chave]}`;
        td.classList.add('user-chave');
        userItem.appendChild(td);
    }
  }



  async function getVagas() {
    try {
      const response = await fetch("http://localhost:3000/api/vagas");
      const users = await response.json();
  
    
      let tbody = document.querySelector('.vagas-list>tbody');

      users.forEach(user => {
        
        let userItem = document.createElement("tr");
        userItem.classList.add("user-item");
        viewUser(user, userItem);

        tbody.appendChild(userItem);
      });
    } catch (error) {
      console.error("Erro ao buscar usuários:", error);
    }
  }
  
  function viewUser (user, userItem){
    for ( let chave in user){
        let td = document.createElement("td");
        td.textContent = `${user[chave]}`;
        td.classList.add('user-chave');
        userItem.appendChild(td);
    }
  }

  // Call function to get users
  getUsers();
  getVagas();


  