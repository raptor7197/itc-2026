(function($) {

    jQuery('.fooevents-copy-from-purchaser').on('click', function(){

        var billing_first_name = jQuery('#billing_first_name').val();
        var billing_last_name = jQuery('#billing_last_name').val();
        var billing_email = jQuery('#billing_email').val();
        var billing_phone = jQuery('#billing_phone').val();
        var billing_company = jQuery('#billing_company').val();

        var parent = jQuery(this).parent('p').parent('div');

        parent.find('input').closest('.fooevents-attendee-first-name input').val(billing_first_name);
        parent.find('input').closest('.fooevents-attendee-last-name input').val(billing_last_name);
        parent.find('input').closest('.fooevents-attendee-email input').val(billing_email);
        parent.find('input').closest('.fooevents-attendee-telephone input').val(billing_phone);
        parent.find('input').closest('.fooevents-attendee-company input').val(billing_company);

        return false;

    });

})(jQuery);