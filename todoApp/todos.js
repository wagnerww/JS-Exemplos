var listElement = document.querySelector("#app ul"); //pega o elemento li
var inputElement = document.querySelector("#app input");
var buttonElement = document.querySelector("#app button");
var keyStorage = "todos_app";

//busca no Local storage, caso não encontrar, inicializa a variável com um array
var todos = JSON.parse(localStorage.getItem(keyStorage)) || [];

function renderTodos() {
  listElement.innerHTML = ""; //Limpa tudo o que estiver dentro do ul, zera a lista
  for (todo of todos) {
    var todoElement = document.createElement("li"); //Cria o elemento li
    var todoText = document.createTextNode(todo); //cria um elemento do tipo texto

    //criação do link de excusão
    var linkElement = document.createElement("a");
    var linkText = document.createTextNode("Excluir");
    linkElement.setAttribute("href", "#"); //cria o efeito de link
    linkElement.setAttribute("onclick", `deleteTodo(${todos.indexOf(todo)})`); //pega o indice do item no array
    linkElement.appendChild(linkText); //incopora a chamada no link

    todoElement.appendChild(todoText); // incorpora o texto dentro do li
    todoElement.append(linkElement); //Incorpora o link dentro do li
    listElement.appendChild(todoElement); //incorpora o li dentro do ul
  }
}
renderTodos();

function addTodo() {
  var novoTodo = inputElement.value; //Pega o valor do input
  todos.push(novoTodo); //Joga o novo valor do todo para o array
  inputElement.value = "";
  renderTodos();
  saveLocal();
}

buttonElement.onclick = addTodo; //Adiciona chamada da fn ao button click

function deleteTodo(pos) {
  todos.splice(pos, 1); //Splice apaga um "range" de arrays, no caso estou apagamento 1 posição
  renderTodos();
  saveLocal();
}

function saveLocal() {
  localStorage.setItem(keyStorage, JSON.stringify(todos)); //Salva array no local Storage
}
