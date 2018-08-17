$(function(){
	$('#rollno').on('blur',function(){
		if(!/(\d{2}((CO)|(DCO)|(EE)|(ME)|(DEX)|(CES)|(DCES)|(EX)|(CE)|(DEE)|(DME))\d{2,3})/i.test(this.value)){
			alert("Invalid Roll no");
			this.value="";
			$(this).focus();

		}
	});

  $('#sname').on('keypress',function(e){
    if(/[^a-zA-Z ]/.test(e.key))
    {
      alert("invalid name only alphabets.spaces allowed");
      this.value="";
      $(this).focus();
      return false;
    }
  });

  $('address').on('keypress',function(e){
    if((this.value.length())>=40&&(this.value.length())<=100){
      alert("address should be 40 to 100 characters long");
      this.value="";
      $this.focus();
    }

   });

  
});






