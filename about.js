const menus=[
    {
        id:1,
        title:'hydro',
        img:'./images/pexels-nyau-mimi-1446504.jpg',
    },

    {   id:2,
        title:'Estate',
        img:'./images/EstateBQ.jpg',
    },

    {
        id:3,
        title:'land',
        img:'./images/pexels-alteredsnaps-11794480.jpg',
    },
];

window.addEventListener('DOMContentLoaded', function(){
    imageChange()
})

const img=document.querySelector('.images')
let banner=document.querySelector('.banner1')
let count=2;

function imageChange(){
    // const item=menus[count]
    // img.src=item.img;
    // count
    // setInterval(imageChange,5000)
     
}


let btnLink=document.querySelector('.bts');
let Links=document.querySelector('.links');

btnLink.addEventListener('click', function(){
   Links.classList.toggle('show-links')
})
