function closeButton(id){
   document.getElementById('box-hide').addEventListener('click', function(){
    
    document.getElementById(id).style.display = 'none'
   })
}