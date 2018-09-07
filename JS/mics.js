$(function()){
	$("#cpass").on('change',function (e)
	{
		e.preventDefault();
		var cpass = $(this).val();
		var pass = $("#pass").val();
		if(pass != cpass)
		{
			$(this).val("");
			$("#cpasserr").html("<span class=
				'alert alert-danger'>
				passwords do not match</span>")
		}
		else
		{
			$("$#cpasserr")
		}
	}

}

