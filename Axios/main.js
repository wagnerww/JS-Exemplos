axios
  .get("https://api.github.com/users/wagnerww")
  .then(res => {
    console.log(res.data);
  })
  .catch(err => {
    console.warn(err);
  });
