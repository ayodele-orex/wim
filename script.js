
let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
  navbar.classList.toggle('active');
  // searchForm.classList.remove('active');
}

// window.onscroll = () =>{
//   searchForm.classList.remove('active');
//   navbar.classList.remove('active');
// }

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  // x[slideIndex-1].style.display = "block";  
}
















// $(function() {
//   $(".bcontent").wysihtml5({
//     // /*toolbar: {
//     //   "image": false
//     // }*/
   
//   });
  
  /*$(document).on('change', '.btn-file :file', function() {
    var input = $(this);
    var numFiles = input.get(0).files ? input.get(0).files.length : 1;
    console.log(input.get(0).files);
    var label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
    input.trigger('fileselect', [numFiles, label]);
  });
  
  $('.btn-file :file').on('fileselect', function(event, numFiles, label){
    var input = $(this).parents('.input-group').find(':text');
    var log = numFiles > 1 ? numFiles + ' files selected' : label;
    
    if( input.length ) {
      input.val(log);
    } else {
      if( log ){ alert(log); }
    }
    
  });*/
// });

// var modal = document.getElementById("myModal");


// var img = document.getElementById("myImg");
// var modalImg = document.getElementById("img01");
// var captionText = document.getElementById("caption");
// img.onclick = function(){
//   modal.style.display = "block";
//   modalImg.src = this.src;
//   captionText.innerHTML = this.alt;
// }

// var span = document.getElementsByClassName("close")[0];

// span.onclick = function() {
//   modal.style.display = "none";
// }
// Tip







// var fruit = ["apple", "orange", "pear"];
// $(".food").text(fruit.length);

// var modal = document.getElementById("myModal");
// var span = $(".close");

// // span.onclick = function() {
// //   modal.style.display = "none";
// // };

// span.on("click", function() {
//     modal.style.display = "none";
// });

// // Get all images and insert the clicked image inside the modal
// // Get the content of the image description and insert it inside the modal image caption
// var images = document.getElementsByClassName("img");
// var modalImg = document.getElementById("img01");
// var captionText = document.getElementById("caption");
// var i;
// for (i = 0; i < images.length; i++) { // looping through all image tag names in document. on click of image, run function of displaying modal with source URL, alt text, and caption
//   images[i].onclick = function() {
//     modal.style.display = "block";
//     modalImg.src = this.src;
//     modalImg.alt = this.alt;
//     captionText.innerHTML = this.nextElementSibling.innerHTML;
//   };
// }

// //opacity of image on hover is changing in modal
























var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  // x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 4000); // Change image every 2 seconds
}





// function actionForm()
// {
// var username  =    document.getElementById('username'),
//     password  =    document.getElementById('email'),
//     email     =    document.getElementById('testimonies'),
//     number    =    document.getElementById('number'),
//     textarea  =    document.getElementById('textarea');
//     if(username.value == "")
//     {
//      document.getElementById('p-user').textContent    = "* Enter User";  
//      document.getElementById('username').style.border = "1px solid red";
//     }
    // if(email.value == "")
    // {
    //   document.getElementById('p-email').textContent = "* Enter Email"; 
    //   document.getElementById('email').style.border = "1px solid red";
    // }
     
//     if(testimonies.value == "")
//     {
//      document.getElementById('p-testimonies').textContent = "*Enter Testimonies"; 
//      document.getElementById('testimonies').style.border = "1px solid red";
//     }
    
    
//     if(number.value == "")
//     {
//      document.getElementById('p-number').textContent = "*Enter Number";  
//      document.getElementById('number').style.border = "1px solid red";
//     }
//     if(textarea.value == "")
//     {
//      document.getElementById('p-textarea').textContent = "*Enter Message"; 
//       document.getElementById('textarea').style.border = "1px solid red";
//     }
// }    


// function formBlur(input)
// {
//     if(input.value != '')
//     {
//       input.nextElementSibling.textContent  = "";
//       input.style.border = '2px  solid green';
//     }
    
    
//     if(username.value.length > 30)
//     {
//       input.nextElementSibling.textContent = "The name must be less than 30 characters"; 
//       input.style.border                   = "1px solid red";
//     }
    
//     if(input.value == '')
//     {
//       input.nextElementSibling.textContent = "*This field is required";
//       input.style.border                   = '1px  solid red';
//     }
    
     
  // if(email.value != '')
  // {    
  //   var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  //   if (!filter.test(email.value)) 
  //   {
  //    document.getElementById('p-email').textContent = "*Email is invalid";
  //    document.getElementById('email').style.border = "1px solid red";
  //   }
  // }
// }






// 'undefined'=== typeof _trfq || (window._trfq = []);'undefined'=== typeof _trfd && (window._trfd=[]),_trfd.push({'tccl.baseHost':'secureserver.net'}),_trfd.push({'ap':'cpsh'},{'server':'sg2plcpnl0209'})



