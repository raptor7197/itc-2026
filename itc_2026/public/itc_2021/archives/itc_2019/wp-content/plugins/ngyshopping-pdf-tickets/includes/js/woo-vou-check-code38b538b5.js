"use strict";

jQuery( document ).ready( function( $ ) {
// Check Ticket code is valid or not
	$( document ).on( 'click', '#woo_vou_check_ticket_code', function() {

		$( '.woo-vou-ticket-code-submit-wrap' ).hide();

		//Ticket Code
		var voucode = $( '#woo_vou_ticket_code' ).val();

		if( voucode == '' || voucode == 'undefine' ) {

			//hide submit row
			$( '.woo-vou-ticket-code-submit-wrap' ).fadeOut();
			$( '.woo-vou-ticket-code-msg' ).removeClass( 'woo-vou-ticket-code-success' ).addClass( 'woo-vou-ticket-code-error' ).html( WooVouCheck.check_code_error ).show();
		} else {

			//show loader
			$( '.woo-vou-check-ticket-code-loader' ).css( 'display', 'inline' );

			//hide error message
			$( '.woo-vou-ticket-code-msg' ).hide();

			// Get currency. Used to add comatible with currency switcher(realmag777)
			var currency = $(this).data('currency');
						
			var data = {
							action	: 'woo_vou_check_ticket_code',
							voucode	: voucode,
							ajax	: true,
							currency: currency
						};
			//call ajax to chcek ticket code
			jQuery.post( WooVouCheck.ajaxurl, data, function( response ) {

				var response_data = jQuery.parseJSON(response);

				if( response_data.success ) {

					$('.woo-vou-loader.woo-vou-ticket-code-submit-loader').hide();
					//show submit row
					if( response_data.loggedin_guest_user ) {


						if( response_data.expire ) {

							if(response_data.allow_redeem_expired_ticket == 'yes') {
								$( '.woo-vou-ticket-code-submit-wrap' ).fadeIn();
								$( '.woo-vou-ticket-code-msg' ).removeClass( 'woo-vou-ticket-code-error' ).addClass( 'woo-vou-ticket-code-success' ).html( response_data.success ).show();
							} else {
								$( '.woo-vou-ticket-code-msg' ).removeClass( 'woo-vou-ticket-code-success' ).addClass( 'woo-vou-ticket-code-error' ).html( response_data.success ).show();
							}
						} else {

							$( '.woo-vou-ticket-code-msg' ).removeClass( 'woo-vou-ticket-code-error' ).addClass( 'woo-vou-ticket-code-success' ).html( response_data.success ).show();
						}
					} else if( response_data.expire && response_data.allow_redeem_expired_ticket == 'no' ) {
						
						$( '.woo-vou-ticket-code-submit-wrap' ).fadeOut();
						$( '.woo-vou-ticket-code-msg' ).removeClass( 'woo-vou-ticket-code-success' ).addClass( 'woo-vou-ticket-code-error' ).html( response_data.success ).show();
					} else if( response_data.success && response_data.before_start_date ) {
						
						$( '.woo-vou-ticket-code-submit-wrap' ).fadeOut();
						$( '.woo-vou-ticket-code-msg' ).removeClass( 'woo-vou-ticket-code-success' ).addClass( 'woo-vou-ticket-code-error' ).html( response_data.success ).show();

					}
					else if( response_data.vendors_access === false ) {
						
						$( '.woo-vou-ticket-code-submit-wrap' ).fadeOut();
						$( '.woo-vou-ticket-code-msg' ).removeClass( 'woo-vou-ticket-code-error' ).addClass( 'woo-vou-ticket-code-success' ).html( response_data.success ).show();
					}
					else if( response_data.vendors_access == true ) {
						
						$( '.woo-vou-ticket-code-submit-wrap' ).fadeIn();
						$( '.woo-vou-ticket-code-msg' ).removeClass( 'woo-vou-ticket-code-error' ).addClass( 'woo-vou-ticket-code-success' ).html( response_data.success ).show();
					} else {

						$( '.woo-vou-ticket-code-submit-wrap' ).fadeIn();
						$( '.woo-vou-ticket-code-msg' ).removeClass( 'woo-vou-ticket-code-error' ).addClass( 'woo-vou-ticket-code-success' ).html( response_data.success ).show();	
					}

					if( response_data.product_detail ) {
						$( '.woo-vou-ticket-code-msg' ).append(response_data.product_detail);
					}
				} else if( response_data.error ) {

					//hide submit row
					$( '.woo-vou-ticket-code-submit-wrap' ).fadeOut();
					$( '.woo-vou-ticket-code-msg' ).removeClass( 'woo-vou-ticket-code-success' ).addClass( 'woo-vou-ticket-code-error' ).html( response_data.error ).show();
				} else if ( response_data.used ) {

					//hide submit row
					$( '.woo-vou-ticket-code-submit-wrap' ).fadeOut();

					$( '.woo-vou-ticket-code-msg' ).removeClass( 'woo-vou-ticket-code-success' ).addClass( 'woo-vou-ticket-code-error' ).html( response_data.used ).show();

					if( response_data.product_detail ) {
						$( '.woo-vou-ticket-code-msg' ).append(response_data.product_detail);
					}
				}
				//hide loader
				$( '.woo-vou-check-ticket-code-loader' ).hide();

			});
		}
	});

	// Submit Ticket code ( Redeem vocher code )
	$( document ).on( 'click', '#woo_vou_ticket_code_submit', function() {

		//Ticket Code
		var voucode = $( '#woo_vou_ticket_code' ).val();
		var vou_enable_partial_redeem = $('#vou_enable_partial_redeem').val();

		if( ( voucode == '' || voucode == 'undefine' ) ) {

			//hide submit row
			$( '.woo-vou-ticket-code-submit-wrap' ).fadeOut();
			$( '.woo-vou-ticket-code-msg' ).removeClass( 'woo-vou-ticket-code-success' ).addClass( 'woo-vou-ticket-code-error' ).html( WooVouCheck.check_code_error ).show();
		} else {

			var redeem_amount = redeem_method = total_price = redeemed_price = remaining_redeem_price = ''

			total_price				= woo_vou_check_number($('#vou_code_total_price').val());
			redeemed_price			= woo_vou_check_number($('#vou_code_total_redeemed_price').val());
			remaining_redeem_price 	= woo_vou_check_number($('#vou_code_remaining_redeem_price').val());

			// check partial redeem is enabled
			if( vou_enable_partial_redeem == "yes" ) {

				// get redeem amount and redeem method
				redeem_amount			= woo_vou_check_number($('#vou_partial_redeem_amount').val());
				redeem_method 			= $('#vou_redeem_method').val();

				// redeem amount validation
				if( redeem_method == 'partial' && ( redeem_amount == '' || isNaN( redeem_amount ) ) ) {

					$('.woo-vou-partial-redeem-amount .woo-vou-ticket-code-error').html( WooVouCheck.redeem_amount_empty_error ).fadeIn();
					return false;
				} else if( redeem_method == 'partial' && redeem_amount > remaining_redeem_price ) {

					$('.woo-vou-partial-redeem-amount .woo-vou-ticket-code-error').html( WooVouCheck.redeem_amount_greaterthen_redeemable_amount ).fadeIn();
					return false;
				}
			}

			//hide error message
			$( '.woo-vou-ticket-code-msg' ).hide();

			//show loader
			$( '.woo-vou-ticket-code-submit-loader' ).css( 'display', 'inline' );

			var data = {
							action							: 'woo_vou_save_ticket_code',
							voucode							: voucode,
							vou_code_total_price			: total_price,
							vou_code_total_redeemed_price	: redeemed_price,
							vou_code_remaining_redeem_price	: remaining_redeem_price,
							ajax							: true
						};

			// check partial redeem is enabled
			if( vou_enable_partial_redeem == "yes" ) {

				data['vou_partial_redeem_amount'] 		= redeem_amount;
				data['vou_redeem_method'] 				= redeem_method;
			}

			//Add trigger for redeem data
			$( document ).trigger( "vou_redeem_data", data );

			//call ajax to save ticket code
			jQuery.post( WooVouCheck.ajaxurl, data, function( response ) {

				var response_data = jQuery.parseJSON(response);

				if( response_data.success ) {

					//Ticket Code
					$( '#woo_vou_ticket_code' ).val( '' );
					//hide submit row
					$( '.woo-vou-ticket-code-submit-wrap' ).fadeOut();
					$( '.woo-vou-ticket-code-msg' ).removeClass( 'woo-vou-ticket-code-error' ).addClass( 'woo-vou-ticket-code-success' ).html( WooVouCheck.code_used_success ).show();
				} else {

					//Ticket Code
					$( '#woo_vou_ticket_code' ).val( '' );

					$( '.woo-vou-ticket-code-msg' ).removeClass( 'woo-vou-ticket-code-success' ).addClass( 'woo-vou-ticket-code-error' ).html( response_data.error_message ).show();
				}
				//hide loader
				$( '.woo-vou-ticket-code-submit-loader' ).hide();
			});
		}
	});

	// Confirm Delete Ticket code
	$( document ).on( 'click', '.woo_vou_delete_ticket_code', function() {

		if ( confirm( WooVouCheck.delete_code_confirm ) == true ) {
	        return true;
	    } else {
	        return false;
	    }
	});

	// Date Time picker Field
	$('.woo-vou-meta-datetime').each( function() {

		var jQuerythis  = jQuery(this),
		format = jQuerythis.attr('rel');

		jQuerythis.datetimepicker({
			ampm: true,
			dateFormat : format,
			changeMonth: true,
			changeYear: true,
			yearRange: "-100:+0",
			showTime: false,
		});
    });

    if( $('.woo_vou_multi_select').length ) {

    	// apply select2 on simple select dropdown
    	$('.woo_vou_multi_select').select2();
    }

    // hide/show redeem amount on change of redeem method
    $( document ).on( 'change', '#vou_redeem_method',  function() {

    	// get selected redeem method value
    	var redeem_method = $( this ).val();
    	if( redeem_method == 'partial' ) {
    		$('.woo-vou-partial-redeem-amount').fadeIn();
    	} else {
    		$('.woo-vou-partial-redeem-amount').fadeOut	();
    	}
    });

    function woo_vou_check_number(number){
    	number = Math.round(number * 100) / 100;
    	var pattern = /^\d+(.\d{1,2})?$/;
    	return pattern.test(number)?number:'';
    }
});