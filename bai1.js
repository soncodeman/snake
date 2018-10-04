function myFunction(){
    alert("hello world");
}
myFunction();
var images=[
   '../img/manchester-united-crest-i15531.jpg/',
   '../img/manchester-united.jpg/',
    '../img/a35b07e195e7b2f77049105b3b8f0227.jpg/',
    '../img/b6ae2237369403.573dd36a61b9b.jpg/'
];
var num=0;
var slider=document.getElementById('slider');
function next() {
    num++;
    if(num>=images.length)
    {
        num=[0];
    }
    slider.src=images[num];
}

function prev() {
    num--;
    if(num<0){
        num=images.length-1;
    }
    slider.src=images[num];
}
next();
prev();