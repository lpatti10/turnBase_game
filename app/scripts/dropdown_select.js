$('select').on('change', function (){
  
  alert( $(this).val() );
  
  if ($(this).val() == 1){
    // do something
  }
  
});