jQuery(document).ready(function($)
	{

	      var hook = true;
	      window.onload = function() {
	        if (hook) {
				
			var userip = "";
			var usercountry = "";
			$.getJSON('https://ipinfo.io/?callback=?', function(response){
			  	//console.log(response.ip + " | " + response.country);
			}).done(function(response) {
				//console.log("got response"+response);
				var userip = response.ip;
				var usercountry = response.country;
				var usercity = response.city;
				var userregion = response.region;
				jQuery.ajax(
						{
						type: 'POST',
						url: mtrlwid_ajax.mtrlwid_ajaxurl,
						data: {
							"action": "mtrlwid_ajax_online_visit_info", 
							"ip": userip,
							"city": usercity,
							"region": userregion,
							"countrycode": usercountry
						},
						success: function(data){
							//console.log(data);		
						}
				});	
			});

					

	        }
	      }
	
	});	







