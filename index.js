let keys = document.querySelector('.keys');
let singleKey = document.querySelector('span')
let value = document.querySelector('value');

for (let i=0; i<singleKey; i++){
    singleKey[i].addEventListener('click' , function(){
        if (this.innerHTML == '='){
            value.innerHTML = eval(value.innerHTML)
        }else{
            if(this.innerHTML=="DEL"){
                value.innerHTML = "";
            }
            else{
                result.innerHTML += this.innerHTML
            }
        }
    })
}
