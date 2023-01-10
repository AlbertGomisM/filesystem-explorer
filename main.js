const submitClick = document.getElementById("formulario");

submitClick.addEventListener('submit', function(e){
  e.preventDefault();

  console.log('me diste un click');

  var datos = new FormData(formulario);

  fetch('post.php', {
    method: 'POST', 
    body: datos
  })
    .then( res => res.json())
    .then( data => {
        console.log(data)
    })
})