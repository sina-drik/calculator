let displayBox = document.querySelector('.display');
let listbtn = document.querySelectorAll('.show-display');
let clearall=document.querySelector('.all-clear');
let clearlast=document.querySelector('.clear-last');
let calculate=document.querySelector('.calculate');

clearlast.addEventListener('click',function(){
    let input=displayBox.innerHTML
    if(input.length==1){
        displayBox.innerText=0;
    }else{
        displayBox.innerText=input.substring(0,input.length -1)
    }
    // displayBox.innerHTML=Math.floor(x /10);
})


clearall.addEventListener('click',function(){
   displayBox.innerHTML=0;
})

calculate.addEventListener('click',function(){
    let result=displayBox.innerText;
    displayBox.innerHTML=eval(result)
})

listbtn.forEach(function(item){
    return item.addEventListener('click',function(event){
        let x=event.target.innerText;
        if(displayBox.innerHTML=='0'){
            displayBox.innerHTML=x
        }else{
            displayBox.innerHTML+=x
        }
    })
})

