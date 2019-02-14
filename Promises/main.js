var chamadaAsync = function() {
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest(); //importa biblioteca ajax

    xhr.open("GET", "https://api.github.com/users/wagnerww"); //faz a requisição http
    xhr.send(null); //sem parametros, pq é get

    //Não vai esperar a requisição terminar
    xhr.onreadystatechange = function() {
      //status 4 quer dizer ok
      if (xhr.readyState === 4) {
        //pega corpo da requicão e transforma em JSON, se deu certo...if utilizando código ternário
        xhr.status === 200
          ? resolve(JSON.parse(xhr.responseText))
          : reject("erro na requisição");
      }
    };
  });
};

///then = sucesso. Catch=erro....isso só vai ser disparado no momento q a promise terminar
chamadaAsync()
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.warn(err);
  });
