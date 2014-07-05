$('form').on('submit', function () {
  
  var typeA = 0;
  var typeB = 0;
  
  $(':radio:checked').each(function(){
        
    if ($(this).val() === 'a'){
      typeA += 1;
    } else {
      typeB += 1;
    }
    
  });
  
  if (typeA > typeB) {
    alert("You're a Type A");
  } else {
    alert("You're a Type B");
  }
 
  
});