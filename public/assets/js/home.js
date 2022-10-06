jQuery.base64 = (function($){var _PADCHAR = "=", _ALPHA = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", _VERSION = "1.0"; function _getbyte64(s, i){var idx = _ALPHA.indexOf(s.charAt(i)); if (idx === - 1){throw"Cannot decode base64"}return idx}function _decode(s){var pads = 0, i, b10, imax = s.length, x = []; s = String(s); if (imax === 0){return s}if (imax % 4 !== 0){throw"Cannot decode base64"}if (s.charAt(imax - 1) === _PADCHAR){pads = 1; if (s.charAt(imax - 2) === _PADCHAR){pads = 2}imax -= 4}for (i = 0; i < imax; i += 4){b10 = (_getbyte64(s, i) << 18) | (_getbyte64(s, i + 1) << 12) | (_getbyte64(s, i + 2) << 6) | _getbyte64(s, i + 3); x.push(String.fromCharCode(b10 >> 16, (b10 >> 8) & 255, b10 & 255))}switch (pads){case 1:b10 = (_getbyte64(s, i) << 18) | (_getbyte64(s, i + 1) << 12) | (_getbyte64(s, i + 2) << 6); x.push(String.fromCharCode(b10 >> 16, (b10 >> 8) & 255)); break; case 2:b10 = (_getbyte64(s, i) << 18) | (_getbyte64(s, i + 1) << 12); x.push(String.fromCharCode(b10 >> 16)); break}return x.join("")}function _getbyte(s, i){var x = s.charCodeAt(i); if (x > 255){throw"INVALID_CHARACTER_ERR: DOM Exception 5"}return x}function _encode(s){if (arguments.length !== 1){throw"SyntaxError: exactly one argument required"}s = String(s); var i, b10, x = [], imax = s.length - s.length % 3; if (s.length === 0){return s}for (i = 0; i < imax; i += 3){b10 = (_getbyte(s, i) << 16) | (_getbyte(s, i + 1) << 8) | _getbyte(s, i + 2); x.push(_ALPHA.charAt(b10 >> 18)); x.push(_ALPHA.charAt((b10 >> 12) & 63)); x.push(_ALPHA.charAt((b10 >> 6) & 63)); x.push(_ALPHA.charAt(b10 & 63))}switch (s.length - imax){case 1:b10 = _getbyte(s, i) << 16; x.push(_ALPHA.charAt(b10 >> 18) + _ALPHA.charAt((b10 >> 12) & 63) + _PADCHAR + _PADCHAR); break; case 2:b10 = (_getbyte(s, i) << 16) | (_getbyte(s, i + 1) << 8); x.push(_ALPHA.charAt(b10 >> 18) + _ALPHA.charAt((b10 >> 12) & 63) + _ALPHA.charAt((b10 >> 6) & 63) + _PADCHAR); break}return x.join("")}return{decode:_decode, encode:_encode, VERSION:_VERSION}}(jQuery));

var base_url = $('#bg').attr('base_url');
$(document).ready(function() {
  var CaptchaCallback = function() {
    grecaptcha.render('g-recaptcha', {'sitekey' : '6LfiZzYdAAAAACNtXQJJ6cBBgNBidB5PFGrmNhi7'});
  };

  // $('.forgot-password-form').hide();
  // $('.btn_forgot_password').click(function() {
  //   $('.login-form').hide();
  //   $('.forgot-password-form').fadeIn(300);
  // });
  // $('.btn_login').click(function() {
  //   $('.forgot-password-form').hide();
  //   $('.login-form').fadeIn(300);
  // });

  $('#bin_type').change(function(){
    var bin_number = $('#bin_type option:selected').attr('bin_number');
    $('#last_digit').val('');
    if(bin_number !== "" || bin_number !== undefined || bin_number !== null){
      $('#card_bin').val(bin_number).prop('readonly', true);
      $('#card_bin-error').removeClass('error').html('');
    } else {
      $('#card_bin').val('').prop('readonly', true);
    }
  });

  $('#login_btn').click(function(){
    $('#login_form').validate();
    if($('#login_form').valid()){
      var email = $('#login_email').val();
      var password = $('#login_password').val();
      var csrf_token = $("input[name=csrf_form_name]").val();
      var response = grecaptcha.getResponse();
      if(response.length == 0){
        $('#g-recaptcha-error').html('Please validate recaptcha checkbox').addClass('error').show();
        setTimeout(function(){ $('#g-recaptcha-error').removeClass('error').html(''); }, 4000);
        return false;
      } else {
        $.ajax({
          type: 'post',
          url: base_url + 'login',
          dataType: 'json',
          beforeSend: function(){
            $('#loader').show();
            $('#login_btn').prop('disabled', true);
          },
          data: {email: email, password: password, grecaptcha: response, csrf_form_name: csrf_token},
          success: function (response){
            $('#loader').hide();
            $('#login_btn').prop('disabled', false);
            if (response.error_code == 200){
              $('#disclaimer').modal('show');
              $('#login_form_error').addClass(response.error_class).html(response.error_msg).show();
              setTimeout(function(){ $('#login_form_error').removeClass(response.error_class).html(''); }, 4000);
              $('#login_form').trigger('reset');
              grecaptcha.reset();
            } else if (response.error_code == 100) {
              $('#login_form_error').addClass(response.error_class).html(response.error_msg).show();
              grecaptcha.reset();
              setTimeout(function(){ $('#login_form_error').removeClass(response.error_class).html(''); }, 4000);
            }
          }
        });
      }
    }
  });

  $('#derby_validate_btn').click(function(){
    $('#derby_validate_form').validate();
    if($('#derby_validate_form').valid()){
      var email = $('#email').val();
      var csrf_token = $("input[name=csrf_form_name]").val();
      var response = grecaptcha.getResponse();
      if(response.length == 0){
        $('#g-recaptcha-error').html('Please validate recaptcha checkbox').addClass('error').show();
        setTimeout(function(){ $('#g-recaptcha-error').removeClass('error').html(''); }, 4000);
        return false;
      } else {
        $.ajax({
          type: 'post',
          url: base_url + 'derby-validate',
          dataType: 'json',
          beforeSend: function(){
            $('#loader').show();
            $('#derby_validate_btn').prop('disabled', true);
          },
          data: {email: email, grecaptcha: response, csrf_form_name: csrf_token},
          success: function (response){
            $('#loader').hide();
            $('#derby_form').trigger('reset');
            if (response.error_code == 200){
              $('#derby_validate_form').trigger('reset');
              grecaptcha.reset();
              $('#bin_number').val(decrypt(response.bin_number));
              $('#derby_register_btn').attr('tmp_data', response.tmp_data);
              $('#otp_validate').modal('show');
              setTimeout(function(){
                $('#otp_validate').modal('hide');
                $('.valid-fill-form').hide();
                $('.valid-account-form').show().fadeIn(300);
              }, 5000);
            } else if (response.error_code == 100) {
              $('#derby_validate_btn').prop('disabled', false);
              grecaptcha.reset();
              if (response.error_modal == 'error') {
                $('#error_msg').html(response.error_msg)
                $('#error_status_modal').modal('show');
                $('#go_to_login, #show_derby_form').addClass('hidden');
              } else if (response.error_modal == 'login') {
                $('#success_msg').html(response.error_msg)
                $('#success_status_modal').modal('show');
                $('#go_to_login').removeClass('hidden');
              } else {
                $('#derby_validate_form_error').addClass(response.error_class).html(response.error_msg).show();
                setTimeout(function(){ $('#derby_validate_form_error').removeClass(response.error_class).html(''); }, 4000);
              }
            }
          }
        });
      }
    }
  });

  $('#go_back_derby').click(function() {
    $('#derby_validate_btn').prop('disabled', false);
    $('.valid-account-form').hide();
    $('.valid-fill-form').fadeIn(300);
  });

  $('#derby_register_btn').click(function(){
    $('#derby_form').validate();
    if($('#derby_form').valid()){
      var tmp_data = $('#derby_register_btn').attr('tmp_data');
      var password = $('#new_password').val();
      var confirm_password = $('#confirm_new_password').val();
      var bin_number = $('#bin_number').val();
      var last_digit = $('#last_digit').val();
      var otp_code = $('#otp_digit').val();
      var csrf_token = $("input[name=csrf_form_name]").val();
      // var response = grecaptcha.getResponse();
      // if(response.length == 0){
      //   $('#gg-recaptcha-error').html('Please validate recaptcha checkbox').addClass('error').show();
      //   setTimeout(function(){ $('#gg-recaptcha-error').removeClass('error').html(''); }, 4000);
      //   return false;
      // } else {
      $.ajax({
        type: 'post',
        url: base_url + 'derby-verify-otp',
        dataType: 'json',
        beforeSend: function(){
          $('#loader').show();
          $('#derby_register_btn').prop('disabled', true);
        },
        data: {tmp_data: tmp_data, password: password, confirm_password: confirm_password, bin_number: bin_number, last_digit: last_digit, otp_code: otp_code, csrf_form_name: csrf_token},
        success: function (response){
          $('#loader').hide();
          if (response.error_code == 200){
            $('#derby_form').trigger('reset');
            $('#derby_success_msg').html(response.error_msg);
            $('#derby_registration_modal').modal('show');
          } else if (response.error_code == 100) {
            $('#derby_register_btn').prop('disabled', false);
            $('#derby_user_form_error').addClass(response.error_class).html(response.error_msg).show();
            setTimeout(function(){ $('#derby_user_form_error').removeClass(response.error_class).html(''); }, 4000);
          }
        }
      });
      // }
    }
  });

  $('#forgot_pwd_btn').click(function(){
    $('#forgot_pwd_form').validate();
    if($('#forgot_pwd_form').valid()){
      var email = $('#forgot_email').val();
      var csrf_token = $("input[name=csrf_form_name]").val();
      $.ajax({
        type: 'post',
        url: base_url + 'forgot-password',
        dataType: 'json',
        beforeSend: function(){
          $('#loader').show();
          $('#forgot_pwd_btn').prop('disabled', true);
        },
        data: {email: email, csrf_form_name: csrf_token},
        success: function (response){
          $('#loader').hide();
          $('#forgot_pwd_btn').prop('disabled', false);
          if (response.error_code == 200){
            $('#forgot_pwd_form').trigger('reset');
            $('#forgot_pwd_error').addClass(response.error_class).html(response.error_msg).show();
            setTimeout(function(){ $('#forgot_pwd_error').removeClass(response.error_class).html(''); }, 4000);
          } else if (response.error_code == 100) {
            $('#forgot_pwd_error').addClass(response.error_class).html(response.error_msg).show();
            setTimeout(function(){ $('#forgot_pwd_error').removeClass(response.error_class).html(''); }, 4000);
          }
        }
      });
    }
  });

  $('#reset_pwd_btn').click(function(){
    $('#reset_pwd_form').validate();
    if($('#reset_pwd_form').valid()){
      var password = $('#password').val();
      var confirm_password = $('#confirm_password').val();
      var reset_token = $('#reset_pwd_btn').attr('token');
      var csrf_token = $("input[name=csrf_form_name]").val();
      $.ajax({
        type: 'post',
        url: base_url + 'set-password',
        dataType: 'json',
        beforeSend: function(){
          $('#loader').show();
          $('#reset_pwd_btn').prop('disabled', true);
        },
        data: {password: password, confirm_password: confirm_password, reset_token: reset_token, csrf_form_name: csrf_token},
        success: function (response){
          $('#loader').hide();
          if (response.error_code == 200){
            $('#reset_pwd_form').trigger('reset');
            $('#reset_pwd_form_error').addClass(response.error_class).html(response.error_msg).show();
            setTimeout(function(){ $('#reset_pwd_form_error').removeClass(response.error_class).html(''); window.location.href = base_url; }, 4000);
          } else if (response.error_code == 100) {
            $('#reset_pwd_btn').prop('disabled', false);
            $('#reset_pwd_form_error').addClass(response.error_class).html(response.error_msg).show();
            setTimeout(function(){ $('#reset_pwd_form_error').removeClass(response.error_class).html(''); }, 4000);
          }
        }
      });
    }
  });

  $('#register_btn').click(function(){
    $('#register_form').validate();
    if($('#register_form').valid()){
      var first_name = $('#first_name').val();
      var last_name = $('#last_name').val();
      var country_code = $('.iti__active').attr('data-dial-code');
      var mobile = $('#mobile').val();
      var email = $('#email').val();
      var bin_type = $('#bin_type').val();
      var card_bin = $('#card_bin').val();
      var last_digit = $('#last_digit').val();
      var password = $('#password').val();
      var confirm_password = $('#confirm_password').val();
      var response = grecaptcha.getResponse();
      var csrf_token = $("input[name=csrf_form_name]").val();
      if(response.length == 0){
        $('#g-recaptcha-error').html('Please validate recaptcha checkbox').addClass('error').show();
        setTimeout(function(){ $('#g-recaptcha-error').removeClass('error').html(''); }, 4000);
        return false;
      } else {
        $.ajax({
          type: 'post',
          url: base_url + 'register',
          dataType: 'json',
          beforeSend: function(){
            $('#loader').show();
            $('#register_btn').prop('disabled', true);
          },
          data: {first_name: first_name, last_name: last_name, email: email, password: password,confirm_password: confirm_password, country_code: country_code, mobile: mobile, bin_type: bin_type, card_bin: card_bin, last_digit: last_digit, grecaptcha: response, csrf_form_name: csrf_token},
          success: function (response){
            $('#loader').hide();
            $('#register_btn').prop('disabled', false);
            if (response.error_code == 200){
              grecaptcha.reset();
              $('#otp_code_btn').attr('tmp_data', response.tmp_data);
              $('#register_form_error').addClass(response.error_class).html(response.error_msg).show();
              setTimeout(function(){ $('#register_form_error').removeClass(response.error_class).html(''); resetOTPTime(); $('#otp_code_modal').modal('show'); }, 4000);
            } else if (response.error_code == 100) {
              $('#register_form_error').addClass(response.error_class).html(response.error_msg).show();
              grecaptcha.reset();
              setTimeout(function(){ $('#register_form_error').removeClass(response.error_class).html(''); }, 4000);
            }
          }
        });
      }
    }
  });

  $('#otp_code_btn').click(function(){
    $('#otp_form').validate();
    if($('#otp_form').valid()){
      var otp_code = $('#otp_code').val();
      var tmp_data = $('#otp_code_btn').attr('tmp_data');
      var csrf_token = $("input[name=csrf_form_name]").val();
      $.ajax({
        type: 'post',
        url: base_url + 'verify-otp',
        dataType: 'json',
        beforeSend: function(){
          $('#loader').show();
          $('#otp_code_btn').prop('disabled', true);
        },
        data: {otp_code: otp_code, tmp_data: tmp_data, csrf_form_name: csrf_token},
        success: function (response){
          $('#loader').hide();
          $('#otp_code_btn').prop('disabled', false);
          if (response.error_code == 200){
            $('#register_form').trigger('reset');
            $('#otp_form').trigger('reset');
            $('#otp_code_btn').attr('tmp_data', '');
            $('#resend_code_btn').addClass('hidden');
            $('#otp_form_error').addClass(response.error_class).html(response.error_msg).show();
            setTimeout(function(){ $('#otp_form_error').removeClass(response.error_class).html(''); $('#otp_code_modal').modal('hide'); resetOTPTime(); window.location.href = base_url+'login'; }, 4000);
          } else if (response.error_code == 100) {
            $('#otp_form_error').addClass(response.error_class).html(response.error_msg).show();
            setTimeout(function(){ $('#otp_form_error').removeClass(response.error_class).html(''); }, 4000);
          }
        }
      });
    }
  });

  $('#resend_code_btn').click(function(){
    var tmp_data = $('#otp_code_btn').attr('tmp_data');
    if(tmp_data == "" || tmp_data == null || tmp_data == undefined){
      $('#otp_form_error').addClass('alert-danger').html(string.tmp_data_error).show();
      setTimeout(function(){ $('#otp_form_error').removeClass('alert-danger').html(''); }, 4000);
    } else {
      $.ajax({
        type: 'post',
        url: base_url + 'resend-otp',
        dataType: 'json',
        beforeSend: function(){
          $('#loader').show();
          $('#resend_code_btn').prop('disabled', true);
        },
        data: {tmp_data: tmp_data},
        success: function (response){
          $('#loader').hide();
          $('#resend_code_btn').prop('disabled', false);
          if (response.error_code == 200){
            $('.otpfield').val('');
            $('#otp_code').val('');
            $('#otp_code_btn').addClass('disable_sw_btn').prop('disabled', true);
            $('#otp_form_error').addClass(response.error_class).html(response.error_msg).show();
            setTimeout(function(){ $('#otp_form_error').removeClass(response.error_class).html(''); resetOTPTime(); }, 4000);
          } else if (response.error_code == 100) {
            $('#otp_form_error').addClass(response.error_class).html(response.error_msg).show();
            setTimeout(function(){ $('#otp_form_error').removeClass(response.error_class).html(''); }, 4000);
          }
        }
      });
    }
  });

});

function resetOTPTime(){
  var mins = 01;
  var secs = 30;
  var interval;
  var text=$("#resend_code_btn");
  text.attr("disabled",true);
  $("#resend_code_btn").css({'pointer-events': 'none'});
  interval = setInterval(function(){
    if (mins >= 0 && secs >= 0) {
      $("#otp-modal-close").click(function(){
        clearInterval(interval);
        text.text("Time Remaining - " + pad(0, 2) + ":" + pad(30, 2));
      });
      text.text("Time Remaining - " + pad(mins, 2) + ":" + pad(secs, 2));
      if (secs > 0) {
        secs--;
      } else {
        secs = 59;
        mins--;
      }
      if (mins < 0)
      {
        clearInterval(interval);
        text.css({'pointer-events': ''}).text("Resend OTP");
        return true;
      }
    }
  }, 1000);
}

function encrypt(message="", key=""){
  var data = $.base64.decode($("#bg").attr("web_task"));
  var data_iv = $.base64.decode($("#bg").attr("web_option"));
  var message = CryptoJS.AES.encrypt(message, CryptoJS.enc.Hex.parse(data),{iv: CryptoJS.enc.Hex.parse(data_iv)});
  return message.toString();
}

function decrypt(message="", key=""){
  var data = $.base64.decode($("#bg").attr("web_task"));
  var data_iv = $.base64.decode($("#bg").attr("web_option"));
  var code = CryptoJS.AES.decrypt(message, CryptoJS.enc.Hex.parse(data),{iv: CryptoJS.enc.Hex.parse(data_iv)});
  try{
    var decryptedMessage=code.toString(CryptoJS.enc.Utf8);
  }catch (err){
    return message;
  }
  return decryptedMessage;
}

function pad(num, size) {
  var s = num + "";
  while (s.length < size) s = "0" + s;
  return s;
}
