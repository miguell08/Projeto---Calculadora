function botao(num){
    
    document.getElementById('visor').value += num
    
     }
 
     function reset(){
         document.getElementById('visor').value = '';
     }
 
     function calcule(){
         var resultado = 0;
        resultado = document.getElementById('visor').value;
        document.getElementById('visor').value = eval(resultado)
     }