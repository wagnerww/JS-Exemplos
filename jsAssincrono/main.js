var xhr = new XMLHttpRequest(); //importa biblioteca ajax

xhr.open("GET", "https://api.github.com/users/wagnerww"); //faz a requisição http
xhr.send(null); //sem parametros, pq é get

//Não vai esperar a requisição terminar
xhr.onreadystatechange = function() {
  //status 4 quer dizer ok
  if (xhr.readyState === 4) {
    //pega corpo da requicão e transforma em JSON
    console.log(JSON.parse(xhr.responseText));
  }
};
