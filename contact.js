let btnLink=document.querySelector('.bts');
let Links=document.querySelector('.links');
let hs=document.querySelector('.ih')

btnLink.addEventListener('click', function(){
   Links.classList.toggle('show-links')
   if(Links.classList.contains('show-links')){
    hs.style.visibility=`hidden`;
   }
   else{
    hs.style.visibility=`visible`;

   }
   
})
