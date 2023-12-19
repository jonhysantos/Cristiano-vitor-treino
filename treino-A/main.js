let supiReto = document.getElementsByTagName('video')[0]
let checked = document.getElementsByTagName('input')[1]
let crucBanco = document.getElementsByTagName('video')[1]
let checked1 = document.getElementsByTagName('input')[2]
let crucMaq = document.getElementsByTagName('video')[2]
let checked2 = document.getElementsByTagName('input')[3]
let supMaq = document.getElementsByTagName('video')[3]
let checked3 = document.getElementsByTagName('input')[4]
checked.addEventListener('click',done)
function done(){
    if(supiReto.style.display == 'none'){
        supiReto.style.display = 'block'
        supiReto.style.margin = 'auto'
        
    }else{
      supiReto.style.display = 'none'
      checked.style.marginTop = '15px'  
    }
    
    
}
checked1.addEventListener('click',done1)
function done1(){
    if(crucBanco.style.display == 'none'){
        crucBanco.style.display = 'block'
        crucBanco.style.margin = 'auto'
    }else{
      crucBanco.style.display = 'none'
      checked1.style.marginTop = '15px'   
    }
}
checked2.addEventListener('click',done2)
function done2(){
    if(crucMaq.style.display == 'none'){
        crucMaq.style.display = 'block'
        crucMaq.style.margin = 'auto'
    }else{
      crucMaq.style.display = 'none'  
      checked2.style.marginTop = '15px' 
    }
}

checked3.addEventListener('click',done3)
function done3(){
    if(supMaq.style.display == 'none'){
        supMaq.style.display = 'block'
        supMaq.style.margin = 'auto'
    }else{
      supMaq.style.display = 'none'  
      checked3.style.marginTop = '15px' 
    }

}

