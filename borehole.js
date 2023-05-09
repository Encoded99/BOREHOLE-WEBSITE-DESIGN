


let container=document.querySelector('.container')
let button=document.querySelectorAll('.btn')
let articles=document.querySelectorAll('.article');
let lbs=document.querySelector('.lb')
let lbj=document.createElement('div');

 lbj.innerHTML=`<div class="lbs">
 <div class="t1 t1s">
     <h1 class="lh">ABOUT US</h1>
     OANAM Hydro Services (NIGERIA) Limited was incorporated on 000 May, 000 Certificate No. 000/000/000 and registered as a Drilling Contractor with the Ministry of Water & Irrigation on 5th February, 2022 License No. WD/WRC 000/000
 </div>
 <div class="t2 t2s">
     <h1 class="lh t2h">SERVICES</h1>
    <ul>
     <li>Geophysical Survey</li>
     <li>Boreholes Drilling</li>
     <li>Boreholes Rehabilitation</li>
     <li>Pump Testing</li>
     <li>Submersible Pumps Supply and Installation
     </li>
 
    </ul>
 </div>
 <div class="t3 t3s">
     <h1 class="lh t3h">CONTACT</h1>
     <i class="fa-solid fa-house"></i> No 24, popo-lane isale alapata Eruda Ilorin, Kwara state, Nigeria.
     <br>
     <br>
    <i class="fa-solid fa-phone "></i>+2347060446676, +2349082030894,
     <br>
     
     <br>
     <i class="fa-regular fa-envelope"></i>  olasunkanmi1990@gmail.com
     <a href=""></a>
 </div>
 <div class="icon icons">
     <li class="ig"><a href="https://wa.me/2347060446676"  target="_blank"><i class="fa-brands fa-whatsapp"></i></a></li>
     <li><a href="https://m.facebook.com/112118265048061/" target="_blank"><i class="fa-brands fa-facebook"></i></a></li>
 </div>
 <p class="copy copys">Copyright 2022 OANAM Hydro (N) LTD. All Right Reserved | Designed & developed by ENCODED DESIGN</p>
 </div>`




container.addEventListener('click', function(e){
    let id=e.target.dataset.id;
    if(id){
        button.forEach(function(btn){
        btn.classList.remove('active');
        btn.style.color=`white`;
        e.target.classList.add('active');
        e.target.style.color='black';
        });
        
        articles.forEach(function(article){
            let elements=document.getElementById(id);
            article.classList.remove('active');
            elements.classList.add('active');
            lbs.style.display=`none`
           elements.insertAdjacentElement('beforeend',lbj)        
        // element.style.position=`relative`
        // let eHeight=element.getBoundingClientRect().height
        //  let eTop=element.getBoundingClientRect().top;
        //  lb.style.position=`absolute`;
        //  lb.style.top=eHeight+eTop;
        });
        
    }; 
})






let btnLink=document.querySelector('.bts');
let Links=document.querySelector('.links');

btnLink.addEventListener('click', function(){
   Links.classList.toggle('show-links')
})