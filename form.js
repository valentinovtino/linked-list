// document.querySelector('.enter-btn').addEventListener('click', userEnterBtn);
// document.querySelector('.right').addEventListener('click' , '.delete', userDeleteBtn);
$('.enter-btn').on('click', userEnterBtn);
$('.right').on('click', '.delete', userDeleteBtn);
$('.right').on('click','.read', activateRead);

function userEnterBtn(e){
  e.preventDefault(); 
  var title = $('.website-title').val();
  var url = $('.website-url').val();

  // if(keycode === 13){

  // }

  $('.right').prepend(
      `<article class="bookmark">
        <h2>${title}</h2> <hr />
        <a href= 'http://${url}' target='_blank'>${url}</a> <hr />
        <button class="read">Read</button>
        <button class="delete">Delete</button>
      </article>`)
}
  
function userDeleteBtn(e) {
  e.preventDefault(); 
  $(this).parents('.bookmark').remove() 
}

function activateRead(e){
  e.preventDefault();
  $(this).parents('.bookmark').toggleClass('read-btn')
}



