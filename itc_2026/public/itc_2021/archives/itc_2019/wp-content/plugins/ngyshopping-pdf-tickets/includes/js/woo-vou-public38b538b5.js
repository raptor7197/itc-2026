"use strict";

jQuery( document ).ready( function( $ ) { 

	// on variation select dropdown, show woo-vou-fields wrapper
	$( ".single_variation_wrap" ).on( "show_variation", function ( b, c ) {
		jQuery(".woo-vou-fields-wrapper-variation").hide();
		jQuery(".woo-vou-preview-pdf-wrap").hide();
		jQuery("#woo-vou-fields-wrapper-"+c.variation_id ).show();
		jQuery("#woo-vou-preview-pdf-wrap-"+c.variation_id ).show();
	});
	
	// on clear selection, hide woo-vou-fields wrapper
	$( ".single_variation_wrap" ).on( "hide_variation", function ( event ) {
		jQuery(".woo-vou-fields-wrapper-variation").hide();
		jQuery(".woo-vou-preview-pdf-wrap").hide();
	});
	
	// View template image
	$( document ).on( 'click', '.woo-vou-view-preview-template-img', function(){
		
		var pswpElement = document.querySelectorAll('.pswp')[0];

		var url = $(this).children('img').data('src');

		// build items array
		var items = [
		    {
		        src: url,
		        w: 600,
		        h: 400
		    }
		];

		// define options (if needed)
		var options = {
		    index: $(this).data('index')
		};

		// Initializes and opens PhotoSwipe
		var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
		gallery.init();

	});
	
	// Add border and save template id in hidden
	$( document ).on( 'click', '.woo-vou-preview-template-img', function(){
		
		$(this).parents('td').find('.woo-vou-preview-template-img-id').val('');
		
		if( !$(this).hasClass('woo-vou-preview-template-img-border') ) {
			$(this).parents('td').find('*').removeClass('woo-vou-preview-template-img-border');
			$(this).addClass('woo-vou-preview-template-img-border');
			$(this).parents('td').find('.woo-vou-preview-template-img-id').val( $(this).attr('data-id') );
		} else {
			$(this).removeClass('woo-vou-preview-template-img-border');
		}
	});
	
	// Keep saved selected template id
	$( '.woo-vou-preview-template-img-id' ).each( function() {
		var selected_template = $(this).val();
		$(this).parents('td').find('img[data-id="'+selected_template+'"]').addClass('woo-vou-preview-template-img-border');
	});
	
	jQuery('.woo-vou-meta-datetime').each( function() {

		var jQuerythis  = jQuery(this),
	    format = jQuerythis.attr('rel'),
	    id = jQuerythis.attr('id');
	      	  	
	  	if( id == '_woo_vou_start_date' ) {
		  	var expire_date = jQuery('#_woo_vou_exp_date');  	  	
	  		jQuerythis.datetimepicker({
				ampm: true,
				dateFormat : format,
				showTime: false,
				timeText: WooVouPublic.time_text, hourText: WooVouPublic.hour_text, minuteText: WooVouPublic.minute_text, currentText: WooVouPublic.current_text, closeText: WooVouPublic.close_text,
				onSelect: function (selectedDateTime){
					expire_date.datetimepicker('option', 'minDate', jQuerythis.datetimepicker('getDate') );
				}
			});
	  	} else if( id == '_woo_vou_exp_date' ) {
  			var start_date = jQuery('#_woo_vou_start_date');
  	  		jQuerythis.datetimepicker({
				ampm: true,
				dateFormat : format,
				showTime: false,
				timeText: WooVouPublic.time_text, hourText: WooVouPublic.hour_text, minuteText: WooVouPublic.minute_text, currentText: WooVouPublic.current_text, closeText: WooVouPublic.close_text,
				onSelect: function (selectedDateTime){
					start_date.datetimepicker('option', 'maxDate', jQuerythis.datetimepicker('getDate') );
				}
			});
	  	} else {  	        	
	      	jQuerythis.datetimepicker({ampm: true,dateFormat : format, timeText: WooVouPublic.time_text, hourText: WooVouPublic.hour_text, minuteText: WooVouPublic.minute_text, currentText: WooVouPublic.current_text, closeText: WooVouPublic.close_text });//,timeFormat:'hh:mm:ss',showSecond:true
  	  	}
	});
	if( $('.woo_vou_multi_select').length ) {
    	
    	// apply select2 on simple select dropdown
    	$('.woo_vou_multi_select').select2();	
    }
    
    // Code for toggling column of Used Codes list table on click of button having toggle-row class
    $( document ).on( "click", ".toggle-row", function() {
		
    	// Find closest tr and check is-expanded class
		if( jQuery( this ).closest( 'tr' ).hasClass( 'is-expanded' ) ) { // If th has class is-expanded
			
			jQuery( this ).closest( 'tr' ).removeClass( 'is-expanded' ); // If it has then remove class
			jQuery( this ).closest( 'tr' ).find('td').each( function() { // Find td in that tr
				if( ! jQuery( this ).hasClass( 'column-primary' ) ) { // For td not having column-primary class, hide them else show
					jQuery( this ).hide();	
				}
			});
		} else { // If tr doesn't have class is-expanded
			
			jQuery( this ).closest( 'tr' ).addClass( 'is-expanded' ); // Add is-expanded class to tr
			jQuery( this ).closest( 'tr' ).find('td').each( function() { // Show all td in that tr
				jQuery( this ).show();	
			});
		}				
	});

   if( $("input[name^='_woo_vou_recipient_giftdate']").length ) {
		
		format = jQuery("input[name^='_woo_vou_recipient_giftdate']").attr('rel');
		var max_date = '';

		if( WooVouPublic.vou_max_date != '' ){
			
			// add datepicker to recipient giftdate
			$("input[name^='_woo_vou_recipient_giftdate']").datepicker({
				dateFormat: format,
				minDate: WooVouPublic.vou_min_date,
				maxDate: WooVouPublic.vou_max_date
			});
		} else {

			$("input[name^='_woo_vou_recipient_giftdate']").datepicker({
				dateFormat: format,
				minDate: WooVouPublic.vou_min_date
			});
		}	
	}

	// On click of recipient delivery method
	woo_vou_toggle_recipient_delivery_method();
	$(document).on('click', '.woo-vou-delivery-method', function(){
		woo_vou_toggle_recipient_delivery_method();
	});

	$(".woo_vou_cust_date_field").each(function(){

		format = jQuery(this).attr('rel');
		$(this).datepicker({
			dateFormat: format,
		});
	});

	var preview_file = '';
	if(!$('ul.ngyshopping-error').length){
		$('.single-product div.type-product').before('<ul class="ngyshopping-error" role="alert"></ul>');
		$('ul.ngyshopping-error').hide();
	}

	$(document).on('click', '.woo_vou_preview_pdf',function(e){

		var clicked_el = $(this);
		e.preventDefault();
		$('ul.ngyshopping-error').html('');
		$('div.ngyshopping-message').hide();
		
		if( WooVouPublic.is_preview_pdf_options != 'newtab' ) { // if preview in new tab
			$('img.woo-vou-preview-loader').show();
			$('.woo-vou-preview-pdf-overlay').show();
		}

		var error = false;
        var vou_template_id = '';

        $(document).find('.woo-vou-preview-template-img-id').each(function(){
	        if( $(this).prev().is(':visible') && $('.woo-vou-preview-template-img-id').length ) {
		        vou_template_id = $(this).val();	        
	
		        if(!$.trim(vou_template_id)){
		        	$('ul.ngyshopping-error').html( $('ul.ngyshopping-error').html() + WooVouPublic.vou_template_err );
		        	error = true;
		        }
		    }
	    });

	    $(document).find('input[class^="woo-vou-recipient-"], textarea[class^="woo-vou-recipient-"]').each(function(){
	    	if($(this).is(':visible') && !$(this).attr('disabled') && $(this).data('required') && !$.trim($(this).val())){

	    		const raw_recipient_key = $(this).attr('name');
	    		const recipient_key = raw_recipient_key.substring(raw_recipient_key.lastIndexOf("_woo_vou_")+9, raw_recipient_key.lastIndexOf("[")) + "_err";
	    		$('ul.ngyshopping-error').html( $('ul.ngyshopping-error').html() + WooVouPublic[recipient_key] );
	        	error = true;
	    	}
	    });

	    if(error){

	    	$('img.woo-vou-preview-loader').hide();
			$('.woo-vou-preview-pdf-overlay').hide();
	    	$('ul.ngyshopping-error').show();
	    	$('html, body').animate({ scrollTop: ($("ul.ngyshopping-error").offset().top - $("ul.ngyshopping-error").height()) }, 800);
	    } else {

	    	$('.ngyshopping-error').hide();
	    	var data = {
	    		'action': 'woo_vou_add_to_cart_validation',
	    		'woo_vou_is_ajax': true
	    	};

	    	if(WooVouPublic.is_variable) {

	    		data['product_id'] = clicked_el.parent().find('input[name="woo_vou_product_id"]').val();
	    		data['variation_id'] = clicked_el.parent().find('input[name="woo_vou_variation_id"]').val();
	    	} else {

	    		data['product_id'] = clicked_el.parent().find('input[name="woo_vou_product_id"]').val();
	    	}

	    	$(document).find('input[name^="_woo_vou_"], textarea[name^="_woo_vou_"]').each(function(){

	    		if($(this).is(':visible') && !$(this).attr('disabled')){
	    			var woo_vou_field_name = $(this).attr('name');
	    			if(woo_vou_field_name.indexOf("_woo_vou_delivery_method") >= 0) {

	    				data[$(this).attr('name')] = $('input[name="'+woo_vou_field_name+'"]:checked').val(); 
	    			} else {

	    				data[$(this).attr('name')] = $(this).val();
	    			}
	    		}
	    	});

	    	$(document).find('.woo-vou-preview-template-img-wrap').each(function(){
	    		if($(this).is(':visible')){

	    			var input = $(this).next();
	    			data[input.attr('name')] = input.val();
	    		}
	    	});

	    	/* Compatibility of NgyShopping Name Your Price & NgyShopping Pay Your Price */
	    	if( WooVouPublic.payyourprice && $('input[name="'+WooVouPublic.payyourprice+'"]').length ){

    			data['payyourprice'] = $('input[name="'+WooVouPublic.payyourprice+'"]').val();
	    	}

	    	if( WooVouPublic.is_preview_pdf_options == 'newtab' ) { // if preview in new tab

		    	var custom_preview_form = '<form method="post" action="" target="_blank" id="woo-you-preview-form">';
		    	$.each( data, function( key, value){
		    		if( key != 'action' && key != 'woo_vou_is_ajax' ) {
		    			custom_preview_form = custom_preview_form + '<input type="hidden" name="'+key+'" value="'+value+'">';
		    		}
		    		custom_preview_form = custom_preview_form + '<input type="hidden" name="is_preview" value="true">';
		    		custom_preview_form = custom_preview_form + '<input type="hidden" name="quantity" value="'+$(document).find('div.quantity input[id^="quantity_"]').val()+'">';
		    	});
		    	
		    	$('body').find('#woo-you-preview-form').remove();
		    	$('body').append(custom_preview_form);
		    	$('#woo-you-preview-form').submit();
		    	return true;
		    } 
		    else { // if preview in popup

				jQuery.post( WooVouPublic.ajaxurl, data, function(response) {
					var response_data = jQuery.parseJSON(response);

					if(response_data.valid) {

						data.action 	= 'woo_vou_generate_preview_pdf';
						data.is_preview = 'true';
						data.quantity	= $(document).find('div.quantity input[id^="quantity_"]').val();
				
						jQuery.post( WooVouPublic.ajaxurl, data, function(response) {
				
							var response_data = jQuery.parseJSON(response);
							$('img.woo-vou-preview-loader').hide();
							if(response_data.pdf_name){
								preview_file = response_data.pdf_name;
								$('div.woo-vou-preview-pdf-content div.woo-vou-popup').html( response_data.pdf_preview );
								$('div.woo-vou-preview-pdf-content, .woo-vou-preview-pdf-overlay').show();
							} else {

								$('div.woo-vou-preview-pdf-content div.woo-vou-popup').html('Some issue occured.');
							}
						});
					} else {

						$('img.woo-vou-preview-loader').hide();
						$('.woo-vou-preview-pdf-overlay').hide();
						$('ul.ngyshopping-error').html( response_data.html );
						$('ul.ngyshopping-error').show();
						$('html, body').animate({ scrollTop: ($("div.ngyshopping").offset().top - $("div.ngyshopping").height()) }, 800);
					}
			    });
			}
		}
	});

	$(document).on('click', '.woo-vou-close-button, .woo-vou-preview-pdf-overlay', function(e){

		e.preventDefault();

		var data = {
			action				: 'woo_vou_unlink_preview_pdf',
			preview_file_name	: preview_file
		};

		jQuery.post( WooVouPublic.ajaxurl, data, function(response) {

			$('div.woo-vou-popup-content, div.woo-vou-popup-overlay').hide();
		});
    });
});

// Function to toggle recipient delivery method
function woo_vou_toggle_recipient_delivery_method(){

	jQuery('table.woo-vou-recipient-delivery-method tr.woo-vou-delivery-method-wrapper input.woo-vou-delivery-method').each(function(){
		if(jQuery(this).is(':checked')){ 
			jQuery(this).closest('tr.woo-vou-delivery-method-wrapper').nextAll().each(function(){
				jQuery(this).show();
				jQuery(this).find('td.value input, td.value textarea').removeAttr('disabled');
			});
		} else {
			jQuery(this).closest('tr.woo-vou-delivery-method-wrapper').nextAll().each(function(){
				jQuery(this).hide();
				jQuery(this).find('td.value input, td.value textarea').attr('disabled', 'disabled');
			});
		}
	});
}

//function for follow post ajax pagination
function woo_vou_used_codes_ajax_pagination( pid ) {
	
	var woo_vou_start_date = jQuery('#woo_vou_hid_start_date').val();
	var woo_vou_end_date = jQuery('#woo_vou_hid_end_date').val();
	var woo_vou_post_id = jQuery('#woo_vou_product_filter').val();
	var woo_vou_partial_used_voucode = jQuery('input[name="woo_vou_partial_used_voucode"]:checked').length;
	
	var data = {
					action				: 'woo_vou_used_codes_next_page',					
					paging				: pid,
					woo_vou_start_date	: woo_vou_start_date,
					woo_vou_end_date	: woo_vou_end_date,
					woo_vou_post_id		: woo_vou_post_id,
					current_page_url	: window.location.href,
					woo_vou_partial_used_voucode: woo_vou_partial_used_voucode
				};
		
	jQuery('.woo-vou-usedcodes-loader').show();
	jQuery('.woo-vou-used-codes-paging').hide();
	
	jQuery.post( WooVouPublic.ajaxurl, data, function(response) {
		var newresponse = jQuery(response).filter('.woo-vou-used-codes-html').html();
		jQuery('.woo-vou-usedcodes-loader').hide();
		jQuery('.woo-vou-used-codes-html').html(newresponse);
	});	
	return false;
}

//function for follow post ajax pagination for purchased ticket codes
function woo_vou_purchased_codes_ajax_pagination( pid ) {

    // Get post id
	var woo_vou_post_id = jQuery('#woo_vou_product_filter').val();
	var woo_vou_start_date = jQuery('#woo_vou_hid_start_date').val();
	var woo_vou_end_date = jQuery('#woo_vou_hid_end_date').val();
	var woo_vou_partial_used_voucode = jQuery('input[name="woo_vou_partial_used_voucode"]:checked').length;

	var data = {
					action: 'woo_vou_purchased_codes_next_page',					
					paging: pid,
					woo_vou_start_date	: woo_vou_start_date,
					woo_vou_end_date	: woo_vou_end_date,
					woo_vou_post_id		: woo_vou_post_id,
					current_page_url	: window.location.href,
					woo_vou_partial_used_voucode: woo_vou_partial_used_voucode
				};
		
	jQuery('.woo-vou-purchasedcodes-loader').show();
	jQuery('.woo-vou-purchased-codes-paging').hide();
	
	jQuery.post( WooVouPublic.ajaxurl, data, function(response) {
		var newresponse = jQuery(response).filter('.woo-vou-purchased-codes-html').html();
		jQuery('.woo-vou-purchased-codes-loader').hide();
		jQuery('.woo-vou-purchased-codes-html').html(newresponse);
	});	
	return false;
}

//function for follow post ajax pagination
function woo_vou_unused_codes_ajax_pagination( pid ) {

	var woo_vou_post_id = jQuery('#woo_vou_product_filter').val();
	var woo_vou_partial_used_voucode = jQuery('input[name="woo_vou_partial_used_voucode"]:checked').length;
	
	var data = {
					action			: 'woo_vou_unused_codes_next_page',					
					paging			: pid,
					woo_vou_post_id	: woo_vou_post_id,
					current_page_url: window.location.href,
					woo_vou_partial_used_voucode: woo_vou_partial_used_voucode
				};
		
	jQuery('.woo-vou-unusedcodes-loader').show();
	jQuery('.woo-vou-unused-codes-paging').hide();
	
	jQuery.post( WooVouPublic.ajaxurl, data, function(response) {

		var newresponse = jQuery(response).filter('.woo-vou-unused-codes-html').html();
		jQuery('.woo-vou-unusedcodes-loader').hide();
		jQuery('.woo-vou-unused-codes-html').html(newresponse);
	});
	return false;
}