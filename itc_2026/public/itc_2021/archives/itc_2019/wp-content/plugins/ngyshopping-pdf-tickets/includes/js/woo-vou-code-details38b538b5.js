"use strict";

jQuery( document ).ready( function( $ ) { 

	// JS foe showing tooltip on ticket code details page
	 var tiptip_args = {
	    'attribute': 'data-tip',
	    'fadeIn': 50,
	    'fadeOut': 50,
	    'delay': 200
	   };
	 $( '.ngyshopping-help-tip' ).tipTip( tiptip_args );

	// Edit recipient details on ticket details page
	$('#woo-vou-ticket-recipient-details .woo-vou-recipient-value-edit').hide();
	$( document ).on( 'click', '#woo-vou-ticket-recipient-details .woo-vou-recipient-details-title a.edit_recipient_details', function() {
		$('#woo-vou-ticket-recipient-details table.woo-vou-history-table tr.woo-vou-history-title-row th.woo-vou-uneditable').hide();
		$('#woo-vou-ticket-recipient-details .woo-vou-recipient-value').hide();
		$('#woo-vou-ticket-recipient-details .woo-vou-recipient-value-edit').show();
		$(this).hide();
		return false;
	});


	// Code for validating data while editing recipient infomation on ticket code details page
	$(document).on('click', '#woo_vou_recipient_details_update', function(e){

		e.preventDefault();
		var error = false;

		$('.woo-vou-recipient-error').hide();
		$('.woo-vou-recipient-invalid-email-err-message').detach();
		$('.woo-vou-recipient-invalid-giftdate-err-message').detach();

		$('table.woo-vou-edit-history-table td').each(function(){
			if($(this).find(':first-child').data('required') && !$.trim($(this).find(':first-child').val())){

				$(this).find('.woo-vou-recipient-error').show();
				error = true;
			}
		});

		if(!error){

			var data = {
							action				: 'woo_vou_check_redeem_info',
							product_id			: $('input#woo_vou_product_id').val()
						};

			$('.woo_vou_cust_email_field').each(function(){

				data[$(this).data('dash-val')] = $(this).val();
			});

			$('.woo_vou_cust_date_field').each(function(){

				data[$(this).data('dash-val')] = $(this).val();
			});

			//call ajax to change ticket code expiry date
			jQuery.post( WooVouCode.ajaxurl, data, function( response ) {

				var response_data = jQuery.parseJSON(response);
				if(response_data.valid){
					$('form.woo-vou-recipient-details-edit-form').submit();
				} else {

					$.each( response_data.not_valid_fields, function( key, value ) {

						$(document).find('#_woo_vou_'+key).after(value);
						$(document).find('#_woo_vou_'+key).next().show();
					});
				}
			});
		}
	});

	$( document ).on( 'click', '#woo-vou-ticket-recipient-details .woo-vou-recipient-details-edit-cancel', function() {
		$('#woo-vou-ticket-recipient-details table.woo-vou-history-table tr.woo-vou-history-title-row th.woo-vou-uneditable').show();
		$('#woo-vou-ticket-recipient-details .woo-vou-recipient-value').show();
		$('#woo-vou-ticket-recipient-details .woo-vou-recipient-value-edit').hide();
		$('#woo-vou-ticket-recipient-details .woo-vou-recipient-details-title a.edit_recipient_details').show();
		return false;
	});

	// Set datepicker for Recipient Gift Date
	$('.woo_vou_cust_date_field').each(function(){
		format = $(this).attr('rel'),
		$(this).datepicker({
					dateFormat : format,
				});
	});

	// Edit Ticket Information on front end ticket details page
	$('#woo-vou-ticket-details .woo-vou-history-value-row-edit').hide();
	$( document ).on( 'click', '#woo-vou-ticket-details a.edit_history_details', function() {

		if(!WooVouCode.vou_change_expiry_date || WooVouCode.vou_change_expiry_date == 'no'){
			$('#woo-vou-ticket-details tr.woo-vou-history-title-row th:nth-child(3)').hide();
			$('#woo-vou-ticket-details tr.woo-vou-history-value-row-edit td:nth-child(3)').hide();
		}
		$('#woo-vou-ticket-details .woo-vou-history-value-row').hide();
		$('#woo-vou-ticket-details .woo-vou-history-value-row-edit').show();
		$(this).hide();
		return false;
	});

	$( document ).on( 'click', '#woo-vou-ticket-details .woo-vou-ticket-information-edit-cancel', function() {
		$('#woo-vou-ticket-details tr.woo-vou-history-title-row th:nth-child(3)').show();
		$('#woo-vou-ticket-details .woo-vou-history-value-row').show();
		$('#woo-vou-ticket-details .woo-vou-history-value-row-edit').hide();
		$('#woo-vou-ticket-details a.edit_history_details').show();
		return false;
	});

	// Edit Ticket Extra Note on backend ticket details page
	$('#woo-vou-ticket-extra-note .woo-vou-extra-note-row-edit').hide();
	$( document ).on( 'click', '#woo-vou-ticket-extra-note a.edit_extra_note', function() {
		$('#woo-vou-ticket-extra-note .woo-vou-extra-note-row').hide();
		$('#woo-vou-ticket-extra-note .woo-vou-extra-note-row-edit').show();
		$(this).hide();
		return false;
	});
	$( document ).on( 'click', '#woo-vou-ticket-extra-note .woo-vou-extra-note-edit-cancel', function() {
		$('#woo-vou-ticket-extra-note .woo-vou-extra-note-row').show();
		$('#woo-vou-ticket-extra-note .woo-vou-extra-note-row-edit').hide();
		$('#woo-vou-ticket-extra-note a.edit_extra_note').show();
		return false;
	});

	// Date time picher of expires date
	if( $(".woo-vou-history-value-row-edit .woo-vou-expires-date").length ) {
		
		jQuery('.woo-vou-history-value-row-edit .woo-vou-expires-date').each( function() {
	
			var jQuerythis  = jQuery(this),
		    format = jQuerythis.attr('rel'),
		    MinDate = jQuerythis.data('min-date'),
		    id = jQuerythis.attr('id');
	
		  		jQuerythis.datetimepicker({
					dateFormat : format,
					timeFormat: "HH:mm",
					minDate: MinDate,
				});
		});
	}

	// WP 3.5+ uploader
	// Set media uploader for ticket logo selection
	if( $(".woo-vou-meta-upload_image_button").length ) {
		var formfield1;
		var formfield2;
    
		jQuery( document ).on('click','.woo-vou-meta-upload_image_button',function(e){

			e.preventDefault();
			formfield1 = jQuery(this).prev();
			formfield2 = jQuery(this).prev().prev();
			var button = jQuery(this);

			if(typeof wp == "undefined" || WooVouCode.new_media_ui != '1' ){// check for media uploader//
				 
				  tb_show('', '../../../../../index90b0.html?post_id='+ jQuery('#post_ID').val() + '&type=image&amp;TB_iframe=true');
				  //store old send to editor function
				  window.restore_send_to_editor = window.send_to_editor;
				  //overwrite send to editor function
				  window.send_to_editor = function(html) {
					
					imgurl = jQuery('img',html).attr('src');
					
					if(jQuery('img',html).attr('class')) {
						
						img_calsses = jQuery('img',html).attr('class').split(" ");
						att_id = '';
						jQuery.each(img_calsses,function(i,val){
						  if (val.indexOf("wp-image") != -1){
							att_id = val.replace('wp-image-', "");
						  }
						});
				
						jQuery(formfield2).val(att_id);
					}
					
					jQuery(formfield1).val(imgurl);
					wooVouLoadImagesMuploader();
					tb_remove();
					//restore old send to editor function
					window.send_to_editor = window.restore_send_to_editor;
				  }
				  return false;
				  
			} else {
				
				
				var file_frame;
				
				// If the media frame already exists, reopen it.
				if ( file_frame ) {
					file_frame.open();
				  return;
				}
		
				// Create the media frame.
				file_frame = wp.media.frames.file_frame = wp.media({
					frame: 'post',
					state: 'insert',
					title: button.data( 'uploader_title' ),
					button: {
						text: button.data( 'uploader_button_text' ),
					},
					multiple: true  // Set to true to allow multiple files to be selected
				});
		
				file_frame.on( 'menu:render:default', function(view) {
					// Store our views in an object.
					var views = {};
		
					// Unset default menu items
					view.unset('library-separator');
					view.unset('gallery');
					view.unset('featured-image');
					view.unset('embed');
		
					// Initialize the views in our view object.
					view.set(views);
				});
		
				// When an image is selected, run a callback.
				file_frame.on( 'insert', function() {
		
					// Get selected size from media uploader
					var selected_size = $('.attachment-display-settings .size').val();
					
					var selection = file_frame.state().get('selection');
					selection.each( function( attachment, index ) {
						attachment = attachment.toJSON();
						
						// Selected attachment url from media uploader
						var attachment_url = attachment.sizes[selected_size].url;
						
						if(index == 0){
							// place first attachment in field
							jQuery(formfield2).val(attachment.id);
							jQuery(formfield1).val(attachment_url);
							wooVouLoadImagesMuploader();
						
						} else{
							
							jQuery(formfield2).val(attachment.id);
							jQuery(formfield1).val(attachment_url);
							wooVouLoadImagesMuploader();
						}
					});
				});
		
				// Finally, open the modal
				file_frame.open();
			}
			
		});
		
	  //new image upload field
	  function wooVouLoadImagesMuploader(){
		jQuery(".mupload_img_holder").each(function(i,v){
		  if (jQuery(this).next().next().val() != ''){
			if (!jQuery(this).children().size() > 0){
			  jQuery(this).append('<img src="' + jQuery(this).next().next().val() + '" style="height: 150px;width: 150px;" />');
			  jQuery(this).next().next().next().val("Delete Image");
			  jQuery(this).next().next().next().removeClass('woo-vou-meta-upload_image_button').addClass('woo-vou-meta-delete_image_button');
			}
		  }
		});
	  }
	  
	  wooVouLoadImagesMuploader();
	  //delete img button
	  
	  jQuery( document ).on('click','.woo-vou-meta-delete_image_button',function(e){
		jQuery(this).prev().val('');
		jQuery(this).prev().prev().val('');
		jQuery(this).prev().prev().prev().html('');
		jQuery(this).val("Upload Image");
		jQuery(this).removeClass('woo-vou-meta-delete_image_button').addClass('woo-vou-meta-upload_image_button');
	  });
	 
	} // end of vocher logo uploader

	//click on  button
	$(document).on('focusout', '.woo-vou-website-url', function(e) {

		e.preventDefault();
		woo_vou_toggle_site_url_err();
	});

	$(document).on('click', '#woo_vou_ticket_information_update', function(e) {

		var err = false;
		err = woo_vou_toggle_site_url_err();

		if( err == true ) {

			e.preventDefault();
		}
	});

	$(document).on('click', '.woo-vou-send-gift-email', function(){

    	$('div.woo-vou-popup-content').show();
    	$('#woo_vou_recipient_email').val($('#woo_vou_send_gift_recipient_email').val());
    	$('div.woo-vou-popup-overlay').show();
    });

    $(document).on('click', '.woo-vou-close-button, .woo-vou-expiry-date-overlay', function(){
    	$('div.woo-vou-popup-content').hide();
    	$('div.woo-vou-popup-overlay').hide();
    });

    $(document).on('click', '.woo-vou-send-gift-notification-email', function(e){

    	$('.woo-vou-recipient-email-message').hide().html('');
    	var email_list 			= $(document).find('table.woo-vou-ticket-gift-notification-table input#woo_vou_recipient_email').val();

    	if( !$.trim(email_list) ) {
    		$('.woo-vou-recipient-email-message').addClass('woo-vou-recipient-email-errors').removeClass('woo-vou-recipient-email-success');
    		$('.woo-vou-recipient-email-message').html(WooVouCode.invalid_email);
    		$('.woo-vou-recipient-email-message').show();
    		return false;
    	}

    	$(document).find('.woo-vou-send-gift-notification-email').hide();
    	$(document).find('span.woo-vou-loader-wrap').show();
    	$(document).find('img.woo-vou-loader').show();
    	var first_name 			= $('#woo_vou_send_gift_first_name').val();
    	var last_name			= $('#woo_vou_send_gift_last_name').val();
    	var recipient_name  	= $('#woo_vou_send_gift_recipient_name').val();
    	var recipient_email 	= $('#woo_vou_send_gift_recipient_email').val();
    	var recipient_message	= $('#woo_vou_send_gift_recipient_message').val();
    	var order_id			= $('#woo_vou_order_id').val();
    	var item_id				= $('#woo_vou_item_id').val();
    	var product_id			= $('#woo_vou_product_id').val();
    	var code_id				= $('#woo_vou_code_id').val();

    	var data = {
						action				: 'woo_vou_resend_gift_notification_email',
						email_list			: email_list,
						first_name			: first_name,
						last_name			: last_name,
						recipient_name		: recipient_name,
						recipient_email		: recipient_email,
						recipient_message 	: recipient_message,
						order_id			: order_id,
						item_id				: item_id,
						product_id			: product_id,
						code_id				: code_id
					};

		//call ajax to save ticket code
		jQuery.post( WooVouCode.ajaxurl, data, function( response ) {

			var response_data = jQuery.parseJSON(response);
			$(document).find('.woo-vou-send-gift-notification-email').show();
    		$(document).find('span.woo-vou-loader-wrap').hide();
    		$(document).find('img.woo-vou-loader').hide();

			if( response_data.success ) {
			
				$('.woo-vou-recipient-email-message').removeClass('woo-vou-recipient-email-errors').addClass('woo-vou-recipient-email-success');
				$('.woo-vou-recipient-email-message').html(response_data.success).show();
				window.location.replace(document.location.href+"&message=woo_vou_gift_email_sent");
			} else {
				$('.woo-vou-recipient-email-message').addClass('woo-vou-recipient-email-errors').removeClass('woo-vou-recipient-email-success');
    			$('.woo-vou-recipient-email-message').html(response_data.error).show();
			}
		});
    });

	function woo_vou_toggle_site_url_err(){

		var err = false;
		var url_pattern	= /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
		var site_url = $('input.woo-vou-website-url').val();

		jQuery('input.woo-vou-website-url').next().detach();

		if( $.trim(site_url) && !url_pattern.test( $('input.woo-vou-website-url').val() ) ) {

			jQuery('input.woo-vou-website-url').parent().append( '<div class="woo-vou-site-url-error">'+ WooVouCode.invalid_url +'</div>' );
			jQuery('input.woo-vou-website-url').val('');
			err = true;
		}

		return err;
	}
});