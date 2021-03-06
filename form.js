var bookCount = 0;
var readCount = 0;

$('.right').on('click','.read-button', activateRead);
$('.enter-btn').on('click', alertInvalid);
$('.website-title').keyup(enabledBtn);
$('.website-url').keyup(enabledBtn);
$('.right').on('click', '.delete', userDeleteBtn);
$('.enter-btn').on('click', userEnterBtn);
$('.clear-btn').on('click', clearAll);



function alertInvalid() {
  if ( $('.website-title').val() === "" || $('.website-url').val() === "") {
    $('.message').html('Please enter a valid Title and URL!')
  } else {
    $('.message').html('');
  }
}

function enabledBtn() {
    if ( $('.website-title').val() === "" && $('.website-url').val() === "") {
      $('.enter-btn').attr("disabled", true)
    } else {
      $('.enter-btn').attr("disabled", false);
    }
}


function userEnterBtn(e){
  e.preventDefault(); 
  var title = $('.website-title').val();
  var url = $('.website-url').val();

  $('.right').prepend(
      `<article class="bookmark">
        <h2>${title}</h2> <hr />
        <a href= 'http://${url}' target='_blank'>${url}</a> <hr />
        <button class="read-button">Read</button>
        <button class="delete">Delete</button>
      </article>`)
  $('.website-title').val("");
  $('.website-url').val("");
  $('.website-title').focus();
   $('.enter-btn').attr("disabled", true)

}
  
function userDeleteBtn(e) {
  e.preventDefault(); 
  if($(e.target).parent().hasClass('has-been-read')) {
    console.log(readCount);
    readCount--;
    console.log(readCount);
  $('#readCounter').text("There are " + readCount + " total read bookmarks");
  }
  bookCount--;
  $('#counter').text("There are " + bookCount + " total bookmarks");
  $(this).parents('.bookmark').remove() 
}


function activateRead(e){
  e.preventDefault();
  $(this).parents('.bookmark').toggleClass('read-btn');
  $(this).closest('.read-button').toggleClass('read');
}

$('.enter-btn').on('click', function(){
  var bookCount = $('.bookmark').length;
  $('#counter').text("There are " + bookCount + " total bookmarks.");
});

$('.read-btn').on('click', function(){
  var readCount = $('.read-btn').length;
  $('#readcount').text("There are " + readCount + " total read bookmarks.")
  console.log('idiot')
});

  

$('.enter-btn').on('click', function(){
  bookCount++; 
  $('#counter').text("There are " + bookCount + " total bookmarks");
});



$('.right').on('click', '.read', function(e){
  $(e.target).parent().addClass('has-been-read')
  e.preventDefault();
  readCount++;
  console.log('clicked read')
  $('#readCounter').text("There are " + readCount + " total read bookmarks");

  $(this).attr('disabled', true)
});


function clearAll() {
  $('.right').children().remove();
  
}







