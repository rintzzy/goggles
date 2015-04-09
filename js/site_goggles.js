jQuery(function(){
          jQuery('#slideme').camera();
		  prettyPrint();
       });
	   jQuery('#social i').hover(function(e){
		   jQuery(this).css('transition','all 1s ease').addClass('fa-rotate-90');
		   },
	   function(e){
		   jQuery(this).removeClass('fa-rotate-90');
		   });

		jQuery('#pager li:not(:first-child, :last-child)').click(function(e){
			if(jQuery(this).hasClass('active')){
				console.log("No change..clicked on active page");
			}
			else{
			  var prev_scheme = jQuery(this).prev().removeClass('active').find('a').attr('href').replace(/#/,"") //get the previous page
			  var cur_scheme = jQuery(this).addClass('active').find('a').attr('href').replace(/#/,""); //got the next page
			  jQuery("#dn_table input[type='button'],#dn_table div").each(function(){
				  var a = jQuery(this).attr('class').split(" ");
				  var b = a[0].toString();
				  var c = a[1].toString().replace(prev_scheme,cur_scheme);
				  var d = a[2].toString().replace(prev_scheme,cur_scheme);
				  var e = b+" "+c+" "+d;
				  jQuery(this).attr('class',e);
				  });	  
			  jQuery('#dn_table tbody tr td:nth-child(2)').text(cur_scheme);
			  jQuery('#dn_table tr td code').each(function(){
				  var x = jQuery(this).text().split(" ");
			      var m = x[0].toString();
				  var n = x[1].toString().replace(prev_scheme,cur_scheme);
				  var o = x[2].toString().replace(prev_scheme,cur_scheme);
				  var p = m+" "+n+" "+o;
				  jQuery(this).text(p);
			  });
			  if(jQuery(this).find('a').attr('href').replace(/#/,"")!='glossy'&&jQuery(this).find('a').attr('href').replace(/#/,"")!='duotone'&&jQuery(this).find('a').attr('href').replace(/#/,"")!='pattern'){jQuery('.extra_scheme').hide();}
		   }  
        });