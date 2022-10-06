$(document).ready(function () {

  // $('select').change(function(){
  //   if ($(this).val() !="" ){
  //     $(this).valid();
  //   }
  // });

  $(document).on('change', '.datepicker',function(){
    $(this).valid();
  });

  $('form#login_form').keypress(function (e) {
    if (e.which == 13) {
      $('.login_form').click();
      return false;
    }
  });

  $('form#forgot_pwd_form').keypress(function (e) {
    if (e.which == 13) {
      $('.forgot_form').click();
      return false;
    }
  });

  $('form#register_form').keypress(function (e) {
    if (e.which == 13) {
      $('.register_form').click();
      return false;
    }
  });

  $('form#change_pwd_form').keypress(function (e) {
    if (e.which == 13) {
      $('.change_pwd_form').click();
      return false;
    }
  });

  $('form#reset_pwd_form').keypress(function (e) {
    if (e.which == 13) {
      $('.reset_pwd_form').click();
      return false;
    }
  });

  $('form').keypress(function (e) {
    if (e.which == 13) {
      $('.submit_form').click();
      return false;
    }
  });

  $('input').keypress(function (e) {
    var inp = $.trim($(this).val()).length;
    if (inp == 0 && e.which === 32) {
      return false;
    }
  });

  $('.close, .clear').click(function(){
    $('form').trigger('reset');
    $('div.remove_error').html('');
    $('#alert_msg').html('');
    $('#otp_code_btn').addClass('disable_sw_btn').prop('disabled', true);
  });

  $('input, textarea').attr('autocomplete', 'off');
  $('input[type="text"], input[type="tel"], input[type="email"], input[type="textarea"]').change(function(){
    this.value = $.trim(this.value);
  });

  $("#airport_form_one").validate({
    errorClass: "error-position remove_error",
    validClass: "valid-class",
    errorElement: 'div',
    errorPlacement: function(error, element) {
      if(element.parent('.checkbox-wrapper').length) {
        error.insertAfter(element.parent());
      } else {
        error.insertAfter(element);
      }
    },
    rules: {
      no_of_passenger: {
        required: true,
      },
      no_of_babyseat: {
        required: false,
      },
      no_of_luggage: {
        required: false,
      },
      selected_card: {
        required: true,
      },
      benefit_type: {
        required: true,
      },
      someone_name: {
        required: true,
        lettersspacesonly: true,
        minlength: 5,
        maxlength: 20,
      },
      someone_email: {
        required: true,
        email: true,
        maxlength: 40,
      },
      someone_mobile: {
        required: true,
        numbersonly:true,
        minlength:6,
        maxlength:20,
      },

    },
    messages: {
      no_of_passenger: {
        required: airport.no_of_passenger,
      },
      no_of_babyseat: {
        required: airport.no_of_babyseat,
      },
      no_of_luggage: {
        required: airport.no_of_luggage,
      },
      selected_card: {
        required: string.selected_card,
      },
      benefit_type: {
        required: string.benefit_type,
      },
      someone_name: {
        required : string.someone_name,
      },
      someone_email: {
        required : string.someone_email,
      },
      someone_mobile: {
        required : string.someone_mobile,
        minlength:string.someone_mobile_min,
        maxlength:string.someone_mobile_max,
      }
    },
    submitHandler: function (form) {
      form.submit();
    }
  });

  $("#airport_form_two").validate({
    errorClass: "error remove_error",
    validClass: "valid-class",
    errorElement: 'div',
    errorPlacement: function(error, element) {
      if(element.parent('.form-group').length) {
        error.insertAfter(element.parent());
      } else {
        error.insertAfter(element);
      }
    },
    rules: {
      airport_facility: {
        required: true,

      },
      from_address_airport: {
        required: true,
        alphanumericpunconly: true,
      },
      to_address_airport: {
        required: true,
        alphanumericpunconly: true,
      },
      date_of_service: {
        required: true,
      },
      // time_of_service: {
      //   required: true,
      // },
      time_hours: {
        required: true,
      },
      time_minutes: {
        required: true,
      },
      time_format: {
        required: true,
      },
    },
    messages: {
      airport_facility:{
        required: airport.airport_facility,
      },
      from_address_airport: {
        required: airport.from_address_airport,
      },
      to_address_airport: {
        required: airport.to_address_airport,
      },
      date_of_service: {
        required: string.date_of_service,
      },
      // time_of_service: {
      //   required: string.time_of_service,
      // },
      time_hours: {
        required: string.time_hours,
      },
      time_minutes: {
        required: string.time_minutes,
      },
      time_format: {
        required: string.time_format,
      },
    },
    submitHandler: function (form) {
      form.submit();
    }
  });

  $("#airport_form_three").validate({
    errorClass: "error remove_error",
    validClass: "valid-class",
    errorElement: 'div',
    errorPlacement: function(error, element) {
      if(element.parent('.form-group').length) {
        error.insertAfter(element.parent());
      } else {
        error.insertAfter(element);
      }
    },
    rules: {
      trip_amount: {
        required: true,
        numbersdecimalonly: true,
      },
      ticket_purchase_date: {
        required: true,
      },
      flight_number: {
        required: true,
        letterspacehyphenonly: true,
      },
      terminal_number: {
        required: true,
        letterspacehyphenonly: true,
      },
      terminal_name: {
        required: true,
        letterspacehyphenonly: true,
      },
      upload_ticket: {
        required: true,
        pdfvalid: true,
        filesize: 8,
      },
      booking_remark: {
        required: false,
        alphanumericpunconly: true,
      },
    },
    messages: {
      trip_amount: {
        required: airport.trip_amount,
      },
      ticket_purchase_date: {
        required: airport.ticket_purchase_date,
      },
      flight_number: {
        required: airport.flight_number,
      },
      terminal_number: {
        required: airport.terminal_number,
      },
      terminal_name: {
        required: airport.terminal_name,
      },
      upload_ticket: {
        required: airport.upload_ticket,
      },
      booking_remark: {
        required: string.booking_remark,
      },
    },
    submitHandler: function (form) {
      form.submit();
    }
  });

  $("#golf_form_one").validate({
    errorClass: "error-position remove_error",
    validClass: "valid-class",
    errorElement: 'div',
    errorPlacement: function(error, element) {
      if(element.parent('.checkbox-wrapper').length) {
        error.insertAfter(element.parent());
      } else {
        error.insertAfter(element);
      }
    },
    rules: {
      selected_card: {
        required: true,
      },
      benefit_type: {
        required: true,
      },
    },
    messages: {
      selected_card: {
        required: string.selected_card,
      },
      benefit_type: {
        required: string.benefit_type,
      },
    },
    submitHandler: function (form) {
      form.submit();
    }
  });

  $("#golf_form_two").validate({
    errorClass: "error-position remove_error",
    validClass: "valid-class",
    errorElement: 'div',
    errorPlacement: function(error, element) {
      if(element.parent('.checkbox-wrapper').length) {
        error.insertAfter(element.parent());
      } else {
        error.insertAfter(element);
      }
    },
    rules: {
      country: {
        required: true,
      },
      state_city: {
        required: true,
      },
      golf_course_id: {
        required: true,
      },
    },
    messages: {
      country: {
        required: string.country,
      },
      state_city: {
        required: string.state,
      },
      golf_course_id: {
        required: golf.golf_course,
      },
    },
    submitHandler: function (form) {
      form.submit();
    }
  });

  $("#golf_form_three").validate({
    errorClass: "error remove_error",
    validClass: "valid-class",
    errorElement: 'div',
    errorPlacement: function(error, element) {
      if(element.parent('.form-group').length) {
        error.insertAfter(element.parent());
      } else {
        error.insertAfter(element);
      }
    },
    rules: {
      date_of_service: {
        required: true,
      },
      time_of_service: {
        required: true,
      },
      booking_remark: {
        required: false,
        alphanumericpunconly: true,
      },
    },
    messages: {
      date_of_service: {
        required: string.date_of_service,
      },
      time_of_service: {
        required: string.time_of_service,
      },
      booking_remark: {
        required: string.booking_remark,
      },
    },
    submitHandler: function (form) {
      form.submit();
    }
  });

  $("#courier_form_one").validate({
    errorClass: "error-position remove_error",
    validClass: "valid-class",
    errorElement: 'div',
    errorPlacement: function(error, element) {
      if(element.parent('.checkbox-wrapper').length) {
        error.insertAfter(element.parent());
      } else {
        error.insertAfter(element);
      }
    },
    rules: {
      pickup_date: {
        required: true,
      },
      // pickup_time: {
      //   required: true,
      // },
      pickup_hours: {
        required: true,
      },
      pickup_minutes: {
        required: true,
      },
      pickup_format: {
        required: true,
      },
      selected_card: {
        required: true,
      },
      benefit_type: {
        required: true,
      },
      someone_name: {
        required: true,
        lettersspacesonly: true,
        minlength: 5,
        maxlength: 20,
      },
      someone_email: {
        required: true,
        email: true,
        maxlength: 40,
      },
      someone_mobile: {
        required: true,
        numbersonly:true,
        minlength:6,
        maxlength:20,
      },
    },
    messages: {
      pickup_date: {
        required: courier.pickup_date,
      },
      // pickup_time: {
      //   required: courier.pickup_time,
      // },
      pickup_hours: {
        required: string.time_hours,
      },
      pickup_minutes: {
        required: string.time_minutes,
      },
      pickup_format: {
        required: string.time_format,
      },
      selected_card: {
        required: string.selected_card,
      },
      benefit_type: {
        required: string.benefit_type,
      },
      someone_name: {
        required : string.someone_name,
      },
      someone_email: {
        required : string.someone_email,
      },
      someone_mobile: {
        required : string.someone_mobile,
        minlength:string.someone_mobile_min,
        maxlength:string.someone_mobile_max,
      }
    },
    submitHandler: function (form) {
      form.submit();
    }
  });

  $("#courier_form_two").validate({
    errorClass: "error-position remove_error",
    validClass: "valid-class",
    errorElement: 'div',
    errorPlacement: function(error, element) {
      if(element.parent('.checkbox-wrapper').length) {
        error.insertAfter(element.parent());
      } else {
        error.insertAfter(element);
      }
    },
    rules: {
      pickup_name: {
        required: true,
        lettersspacesonly: true,
        maxlength: 30,
      },
      pickup_country_code: {
        required: true,
      },
      pickup_mobile: {
        required: true,
        numbersonly: true,
        minlength:6,
        maxlength:20,
      },
      pickup_address: {
        required: true,
        alphanumericpunconly: true,
      },
      pickup_landmark: {
        required: false,
        alphanumericpunconly: true,
      },
      pickup_landline: {
        required: false,
        numbersonly: true,
      },
      pickup_city: {
        required: true,
      },
      pickup_region_id: {
        required: true,
      },
      pickup_zipcode: {
        required: true,
        numbersonly: true,
      },
    },
    messages: {
      pickup_name: {
        required: courier.pickup_name,
      },
      pickup_country_code: {
        required: string.country_code,
      },
      pickup_mobile: {
        required: string.mobile,
        minlength: string.mobile_min,
        maxlength: string.mobile_max,
      },
      pickup_address: {
        required: courier.pickup_address,
      },
      pickup_landmark: {
        required: courier.pickup_landmark,
      },
      pickup_landline: {
        required: courier.pickup_landline,
      },
      pickup_city: {
        required: courier.pickup_city,
      },
      pickup_region_id: {
        required: courier.city,
      },
      pickup_zipcode: {
        required: string.pincode,
      },
    },
    submitHandler: function (form) {
      form.submit();
    }
  });

  $("#courier_form_three").validate({
    errorClass: "error-position remove_error",
    validClass: "valid-class",
    errorElement: 'div',
    errorPlacement: function(error, element) {
      if(element.parent('.checkbox-wrapper').length) {
        error.insertAfter(element.parent());
      } else {
        error.insertAfter(element);
      }
    },
    rules: {
      drop_name: {
        required: true,
        lettersspacesonly: true,
        maxlength: 30,
      },
      drop_country_code: {
        required: true,
      },
      drop_mobile: {
        required: true,
        numbersonly: true,
        minlength:6,
        maxlength:20,
      },
      drop_address: {
        required: true,
        alphanumericpunconly: true,
      },
      drop_landmark: {
        required: false,
        alphanumericpunconly: true,
      },
      drop_landline: {
        required: false,
        numbersonly: true,
      },
      drop_city: {
        required: true,
      },
      drop_region_id: {
        required: true,
      },
      drop_zipcode: {
        required: true,
        numbersonly: true,
      },
      booking_remark: {
        required: false,
        alphanumericpunconly: true,
      },
    },
    messages: {
      drop_name: {
        required: courier.drop_name,
      },
      drop_country_code: {
        required: string.country_code,
      },
      drop_mobile: {
        required: string.mobile,
        minlength: string.mobile_min,
        maxlength: string.mobile_max,
      },
      drop_address: {
        required: courier.drop_address,
      },
      drop_landmark: {
        required: courier.drop_landmark,
      },
      drop_landline: {
        required: courier.drop_landline,
      },
      drop_city: {
        required: courier.drop_city,
      },
      drop_region_id: {
        required: courier.city,
      },
      drop_zipcode: {
        required: string.pincode,
      },
      booking_remark: {
        required: string.booking_remark,
      },
    },
    submitHandler: function (form) {
      form.submit();
    }
  });

  $("#service_form_one").validate({
    errorClass: "error-position remove_error",
    validClass: "valid-class",
    errorElement: 'div',
    errorPlacement: function(error, element) {
      if(element.parent('.checkbox-wrapper').length) {
        error.insertAfter(element.parent());
      } else {
        error.insertAfter(element);
      }
    },
    rules: {
      car_pickup_date: {
        required: true,
      },
      // car_pickup_time: {
      //   required: true,
      // },
      pickup_hours: {
        required: true,
      },
      pickup_minutes: {
        required: true,
      },
      pickup_format: {
        required: true,
      },
      selected_card: {
        required: true,
      },
      benefit_type: {
        required: true,
      },
      someone_name: {
        required: true,
        lettersspacesonly: true,
        minlength: 5,
        maxlength: 20,
      },
      someone_email: {
        required: true,
        email: true,
        maxlength: 40,
      },
      someone_mobile: {
        required: true,
        numbersonly:true,
        minlength:6,
        maxlength:20,
      },
    },
    messages: {
      car_pickup_date: {
        required: courier.pickup_date,
      },
      // car_pickup_time: {
      //   required: courier.pickup_time,
      // },
      pickup_hours: {
        required: string.time_hours,
      },
      pickup_minutes: {
        required: string.time_minutes,
      },
      pickup_format: {
        required: string.time_format,
      },
      selected_card: {
        required: string.selected_card,
      },
      benefit_type: {
        required: string.benefit_type,
      },
      someone_name: {
        required : string.someone_name,
      },
      someone_email: {
        required : string.someone_email,
      },
      someone_mobile: {
        required : string.someone_mobile,
        minlength:string.someone_mobile_min,
        maxlength:string.someone_mobile_max,
      }
    },
    submitHandler: function (form) {
      form.submit();
    }
  });

  $("#service_form_two").validate({
    errorClass: "error-position remove_error",
    validClass: "valid-class",
    errorElement: 'div',
    errorPlacement: function(error, element) {
      if(element.parent('.checkbox-wrapper').length) {
        error.insertAfter(element.parent());
      } else {
        error.insertAfter(element);
      }
    },
    rules: {
      car_plate_number: {
        required: true,
        lettersnumberspaceonly: true,
        maxlength: 20
      },
      car_model: {
        required: true,
        lettersnumberspaceonly: true,
        maxlength: 50
      },
      car_type: {
        required: true,
      },
    },
    messages: {
      car_plate_number: {
        required: service.car_plate_number,
      },
      car_model: {
        required: service.car_model,
      },
      car_type: {
        required: service.car_type,
      },
    },
    submitHandler: function (form) {
      form.submit();
    }
  });

  $("#service_form_three").validate({
    errorClass: "error-position remove_error",
    validClass: "valid-class",
    errorElement: 'div',
    errorPlacement: function(error, element) {
      if(element.parent('.checkbox-wrapper').length) {
        error.insertAfter(element.parent());
      } else {
        error.insertAfter(element);
      }
    },
    rules: {
      select_service_facility: {
        required: true,
      },
      pickup_name: {
        required: true,
        lettersspacesonly: true,
        maxlength: 30,
      },
      pickup_country_code: {
        required: true,
      },
      pickup_mobile: {
        required: true,
        numbersonly: true,
        minlength:6,
        maxlength:20,
      },
      pickup_address: {
        required: true,
        alphanumericpunconly: true,
      },
      pickup_landmark: {
        required: false,
        alphanumericpunconly: true,
      },
      pickup_city: {
        required: true,
      },
      pickup_region_id: {
        required: true,
      },
      pickup_zipcode: {
        required: true,
        numbersonly: true,
      },
      drop_name: {
        required: true,
        lettersspacesonly: true,
        maxlength: 30,
      },
      drop_country_code: {
        required: true,
      },
      drop_mobile: {
        required: true,
        numbersonly: true,
        minlength:6,
        maxlength:20,
      },
      drop_address: {
        required: true,
        alphanumericpunconly: true,
      },
      drop_landmark: {
        required: false,
        alphanumericpunconly: true,
      },
      drop_city: {
        required: true,
      },
      drop_region_id: {
        required: true,
      },
      drop_zipcode: {
        required: true,
        numbersonly: true,
      },
      booking_remark: {
        required: false,
        alphanumericpunconly: true,
      },
    },
    messages: {
      select_service_facility: {
        required: service.service_facility,
      },
      pickup_name: {
        required: courier.pickup_name,
      },
      pickup_country_code: {
        required: string.country_code,
      },
      pickup_mobile: {
        required: string.mobile,
        minlength: string.mobile_min,
        maxlength: string.mobile_max,
      },
      pickup_address: {
        required: courier.pickup_address,
      },
      pickup_landmark: {
        required: courier.pickup_landmark,
      },
      pickup_city: {
        required: courier.pickup_city,
      },
      pickup_region_id: {
        required: courier.city,
      },
      pickup_zipcode: {
        required: string.pincode,
      },
      drop_name: {
        required: courier.drop_name,
      },
      drop_country_code: {
        required: string.country_code,
      },
      drop_mobile: {
        required: string.mobile,
        minlength: string.mobile_min,
        maxlength: string.mobile_max,
      },
      drop_address: {
        required: courier.drop_address,
      },
      drop_landmark: {
        required: courier.drop_landmark,
      },
      drop_city: {
        required: courier.drop_city,
      },
      drop_region_id: {
        required: courier.city,
      },
      drop_zipcode: {
        required: string.pincode,
      },
      booking_remark: {
        required: string.booking_remark,
      },
    },
    submitHandler: function (form) {
      form.submit();
    }
  });

  $("#registration_form_one").validate({
    errorClass: "error-position remove_error",
    validClass: "valid-class",
    errorElement: 'div',
    errorPlacement: function(error, element) {
      if(element.parent('.checkbox-wrapper').length) {
        error.insertAfter(element.parent());
      } else {
        error.insertAfter(element);
      }
    },
    rules: {
      selected_card: {
        required: true,
      },
      benefit_type: {
        required: true,
      },
      someone_name: {
        required: true,
        lettersspacesonly: true,
        minlength: 5,
        maxlength: 20,
      },
      someone_email: {
        required: true,
        email: true,
        maxlength: 40,
      },
      someone_mobile: {
        required: true,
        numbersonly:true,
        minlength:6,
        maxlength:20,
      },
    },
    messages: {
      selected_card: {
        required: string.selected_card,
      },
      benefit_type: {
        required: string.benefit_type,
      },
      someone_name: {
        required : string.someone_name,
      },
      someone_email: {
        required : string.someone_email,
      },
      someone_mobile: {
        required : string.someone_mobile,
        minlength:string.someone_mobile_min,
        maxlength:string.someone_mobile_max
      }
    },
    submitHandler: function (form) {
      form.submit();
    }
  });

  $("#registration_form_two").validate({
    errorClass: "error-position remove_error",
    validClass: "valid-class",
    errorElement: 'div',
    errorPlacement: function(error, element) {
      if(element.parent('.checkbox-wrapper').length) {
        error.insertAfter(element.parent());
      } else {
        error.insertAfter(element);
      }
    },
    rules: {
      car_plate_number: {
        required: true,
        lettersnumberspaceonly: true,
        maxlength: 20
      },
      car_model: {
        required: true,
        lettersnumberspaceonly: true,
        maxlength: 50
      },
      car_type: {
        required: true,
      },
      register_at_city: {
        required: true,
      },
    },
    messages: {
      car_plate_number: {
        required: service.car_plate_number,
      },
      car_model: {
        required: service.car_model,
      },
      car_type: {
        required: service.car_type,
      },
      register_at_city: {
        required: string.city,
      },
    },
    submitHandler: function (form) {
      form.submit();
    }
  });

  $("#registration_form_three").validate({
    errorClass: "error-position remove_error",
    validClass: "valid-class",
    errorElement: 'div',
    errorPlacement: function(error, element) {
      if(element.parent('.checkbox-wrapper').length) {
        error.insertAfter(element.parent());
      } else {
        error.insertAfter(element);
      }
    },
    rules: {
      pickup_address: {
        required: true,
        alphanumericpunconly: true,
        maxlength: 150
      },
      landmark: {
        required: false,
        lettersnumberspaceonly: true,
        maxlength: 50
      },
      date_of_service: {
        required: true,
      },
      contact_city: {
        required: true,
      },
      region_id: {
        required: true,
      },
      pickup_zipcode: {
        required: true,
        numbersonly: true,
      },
      booking_remark: {
        required: false,
        alphanumericpunconly: true,
      },
    },
    messages: {
      pickup_address: {
        required: string.address,
      },
      landmark: {
        required: string.landmark,
      },
      date_of_service: {
        required: string.date_of_service,
      },
      contact_city: {
        required: string.pickup_city,
      },
      region_id: {
        required: string.city,
      },
      pickup_zipcode: {
        required: string.pincode,
      },
      booking_remark: {
        required: string.booking_remark,
      },
    },
    submitHandler: function (form) {
      form.submit();
    }
  });



  $("#recommend_form").validate({
    errorClass: "error remove_error",
    rules: {
      customer_comment: {
        required: true,
        alphanumerictimepunconly: true,
      },
    },
    messages: {
      customer_comment: {
        required: string.message,
        maxlength: string.message_max,
      },
    },
    submitHandler: function (form) {
      form.submit();
    }
  });

  $("#login_form").validate({
    errorClass: "error remove_error",
    validClass: "valid-class",
    errorElement: 'div',
    errorPlacement: function(error, element) {
      if(element.parent('.form-group').length) {
        error.insertAfter(element.parent());
      } else {
        error.insertAfter(element);
      }
    },
    rules: {
      login_email: {
        required: true,
        email: true
      },
      login_password: {
        required: true
      }
    },
    messages: {
      login_email: {
        required: string.email,
      },
      login_password: {
        required: string.password
      }
    },
    submitHandler: function (form) {
      form.submit();
    }
  });

  $("#otp_form").validate({
    errorClass: "error remove_error",
    validClass: "valid-class",
    errorElement: 'div',
    errorPlacement: function(error, element) {
      if(element.parent('.form-group').length) {
        error.insertAfter(element.parent());
      } else {
        error.insertAfter(element);
      }
    },
    rules: {
      otp_code: {
        required: true,
        numbersonly: true,
        minlength: 6,
        maxlength: 6,
      },
    },
    messages: {
      otp_code: {
        required: string.otp_code,
      },
    },
    submitHandler: function (form) {
      form.submit();
    }
  });

  $("#register_form").validate({
    errorClass: "error remove_error",
    validClass: "valid-class",
    errorElement: 'div',
    errorPlacement: function(error, element) {
      if(element.parent('.form-group').length) {
        error.insertAfter(element.parent());
      } else {
        error.insertAfter(element);
      }
    },
    rules: {
      first_name: {
        required: true,
        lettersspacesonly: true,
        maxlength: 80
      },
      last_name: {
        required: true,
        lettersspacesonly: true,
        maxlength: 80
      },
      email: {
        required: true,
        email: true,
      },
      password: {
        required: true,
        regex: /^(?=.*\d)(?=.*[!@#$%^&*?])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
        minlength: 8,
        maxlength: 16
      },
      confirm_password: {
        required: true,
        regex: /^(?=.*\d)(?=.*[!@#$%^&*?])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
        minlength: 8,
        maxlength: 16,
        equalTo : "#password"
      },
      mobile: {
        required: true,
        numbersonly: true,
        // minlength: 10,
        // maxlength: 10,
      },
      bin_type: {
        required: true,
      },
      card_bin: {
        required: true,
        minlength: 6
      },
      last_digit: {
        required: true,
        numbersonly: true,
        minlength: 4,
        maxlength: 4,
      },
    },
    messages: {
      first_name: {
        required: string.first_name,
      },
      last_name: {
        required: string.last_name,
      },
      email: {
        required: string.email,
      },
      password: {
        required: string.password,
        minlength: string.password_min,
        maxlength: string.password_max,
      },
      confirm_password: {
        required: string.confirm_password,
        minlength: string.password_min,
        maxlength: string.password_max,
        equalTo: string.password_confirm_match,
      },
      mobile: {
        required: string.mobile,
        // minlength: string.profile_mobile_min,
        // maxlength: string.profile_mobile_max,
      },
      bin_type: {
        required: string.bin_type,
      },
      card_bin: {
        required: string.card_bin,
      },
      last_digit: {
        required: string.last_digit,
        minlength: string.digit_min_4,
        maxlength: string.digit_max_4,
      },
    },
    submitHandler: function (form) {
      form.submit();
    }
  });

  $("#change_pwd_form").validate({
    errorClass: "error remove_error",
    validClass: "valid-class",
    errorElement: 'div',
    errorPlacement: function(error, element) {
      if(element.parent('.form-group').length) {
        error.insertAfter(element.parent());
      } else {
        error.insertAfter(element);
      }
    },
    rules: {
      old_password: {
        required: true,
        regex: /^(?=.*\d)(?=.*[!@#$%^&*?])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
        minlength: 8,
        maxlength: 16,
      },
      new_password: {
        required: true,
        regex: /^(?=.*\d)(?=.*[!@#$%^&*?])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
        minlength: 8,
        maxlength: 16,
        notEqualTo: "#old_password"
      },
      confirm_password: {
        required: true,
        regex: /^(?=.*\d)(?=.*[!@#$%^&*?])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
        minlength: 8,
        maxlength: 16,
        equalTo: "#new_password"
      }
    },
    messages: {
      old_password: {
        required: string.old_password,
        minlength: string.password_min,
        maxlength: string.password_max,
      },
      new_password: {
        required: string.new_password,
        minlength: string.password_min,
        maxlength: string.password_max,
        notEqualTo: string.old_password_match,
      },
      confirm_password: {
        required: string.confirm_new_password,
        minlength: string.password_min,
        maxlength: string.password_max,
        equalTo: string.password_match,
      },
    },
    submitHandler: function (form) {
      form.submit();
    }
  });

  $("#profile_form").validate({
    errorClass: "error remove_error",
    validClass: "valid-class",
    errorElement: 'div',
    errorPlacement: function(error, element) {
      if(element.parent('.form-group').length) {
        error.insertAfter(element.parent());
      } else {
        error.insertAfter(element);
      }
    },
    rules: {
      first_name: {
        required: true,
        lettersspacesonly: true,
        maxlength: 80
      },
      last_name: {
        required: true,
        lettersspacesonly: true,
        maxlength: 80
      },
      country_code: {
        required: true,
        numbersonly: true,
        minlength: 1,
        maxlength: 4
      },
      mobile: {
        required: true,
        numbersonly: true,
        // minlength: 9,
        // maxlength: 9,
      },
      handicap: {
        required: true,
        numbersonly: true,
        minlength: 1,
        maxlength: 2,
      },

    },
    messages: {
      first_name: {
        required: string.first_name,
      },
      last_name: {
        required: string.last_name,
      },
      country_code: {
        required: string.country_code,
      },
      profile_handicap: {
        required: string.handicap,
      },
      mobile: {
        required: string.mobile,
        // maxlength: string.profile_mobile_max,
        // minlength: string.profile_mobile_min,
      },
      handicap: {
        required: string.handicap,
        minlength: string.handicap_min,
        maxlength: string.handicap_max,
      },
    },
    submitHandler: function (form) {
      form.submit();
    }
  });

  $("#forgot_pwd_form").validate({
    errorClass: "error remove_error",
    validClass: "valid-class",
    errorElement: 'div',
    errorPlacement: function(error, element) {
      if(element.parent('.form-group').length) {
        error.insertAfter(element.parent());
      } else {
        error.insertAfter(element);
      }
    },
    rules: {
      forgot_email: {
        required: true,
        email: true,
      }
    },
    messages: {
      forgot_email: {
        required: string.email,
      }
    },
    submitHandler: function (form) {
      form.submit();
    }
  });

  $("#add_card_form").validate({
    errorClass: "error remove_error",
    validClass: "valid-class",
    errorElement: 'div',
    errorPlacement: function(error, element) {
      if(element.parent('.form-group').length) {
        error.insertAfter(element.parent());
      } else {
        error.insertAfter(element);
      }
    },
    rules: {
      bin_type: {
        required: true,
      },
      card_bin: {
        required: true,
        minlength: 6,
      },
      last_digit: {
        required: true,
        numbersonly: true,
        minlength: 4,
        maxlength: 4,
      },
    },
    messages: {
      bin_type: {
        required: string.bin_type,
      },
      card_bin: {
        required: string.card_bin,
      },
      last_digit: {
        required: string.last_digit,
        minlength: string.digit_min_4,
        maxlength: string.digit_max_4,
      },
    },
    submitHandler: function (form) {
      form.submit();
    }
  });

  $("#bin_form_replace").validate({
    errorClass: "error remove_error",
    validClass: "valid-class",
    errorElement: 'div',
    errorPlacement: function(error, element) {
      if(element.parent('.form-group').length) {
        error.insertAfter(element.parent());
      } else {
        error.insertAfter(element);
      }
    },
    rules: {
      bin_number_replace: {
        required: true,
      },
      last_digit_replace: {
        required: true,
        numbersonly: true,
        minlength: 4,
        maxlength: 4,
      },
    },
    messages: {
      bin_number_replace: {
        required: string.bin_number,
      },
      last_digit_replace: {
        required: string.last_digit,
        minlength: string.digit_min_4,
        maxlength: string.digit_max_4,
      },
    },
    submitHandler: function (form) {
      form.submit();
    }
  });

  $("#card_form").validate({
    errorClass: "error remove_error",
    validClass: "valid-class",
    errorElement: 'div',
    errorPlacement: function(error, element) {
      if(element.parent('.form-group').length) {
        error.insertAfter(element.parent());
      } else {
        error.insertAfter(element);
      }
    },
    rules: {
      booking_info_id: {
        required: true,
        numbersonly: true,
      },
      saved_bin_number: {
        required: true,
      },
      saved_last_digit: {
        required: true,
        numbersonly: true,
        minlength: 4,
        maxlength: 4,
      },
    },
    messages: {
      booking_info_id: {
        required: string.booking_id,
      },
      saved_bin_number: {
        required: string.bin_number,
      },
      saved_last_digit: {
        required: string.last_digit,
        minlength: string.digit_min_4,
        maxlength: string.digit_max_4,
      },
    },
    submitHandler: function (form) {
      form.submit();
    }
  });

  $("#reset_pwd_form").validate({
    errorClass: "error remove_error",
    validClass: "valid-class",
    errorElement: 'div',
    errorPlacement: function(error, element) {
      if(element.parent('.form-group').length) {
        error.insertAfter(element.parent());
      } else {
        error.insertAfter(element);
      }
    },
    rules: {
      password: {
        required: true,
        regex: /^(?=.*\d)(?=.*[!@#$%^&*?])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
        minlength: 8,
        maxlength: 16
      },
      confirm_password: {
        required: true,
        regex: /^(?=.*\d)(?=.*[!@#$%^&*?])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
        minlength: 8,
        maxlength: 16,
        equalTo: "#password"
      }
    },
    messages: {
      password: {
        required: string.new_password,
        minlength: string.password_min,
        maxlength: string.password_max,
      },
      confirm_password: {
        required: string.confirm_new_password,
        minlength: string.password_min,
        maxlength: string.password_max,
        equalTo: string.password_match,
      }

    },
    submitHandler: function (form) {
      form.submit();
    }
  });

  $("#set_pwd_form").validate({
    errorClass: "error remove_error",
    validClass: "valid-class",
    errorElement: 'div',
    errorPlacement: function(error, element) {
      if(element.parent('.form-group').length) {
        error.insertAfter(element.parent());
      } else {
        error.insertAfter(element);
      }
    },
    rules: {
      new_password: {
        required: true,
        regex: /^(?=.*\d)(?=.*[!@#$%^&*?])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
        minlength: 8,
        maxlength: 16
      },
      confirm_password: {
        required: true,
        regex: /^(?=.*\d)(?=.*[!@#$%^&*?])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
        minlength: 8,
        maxlength: 16,
        equalTo: "#new_password"
      }
    },
    messages: {
      new_password: {
        required: string.new_password,
        minlength: string.password_min,
        maxlength: string.password_max,
      },
      confirm_password: {
        required: string.confirm_new_password,
        equalTo: string.password_match,
        minlength: string.password_min,
        maxlength: string.password_max,
      }

    },
    submitHandler: function (form) {
      form.submit();
    }
  });

  $("#booking_form").validate({
    errorClass: "error remove_error",
    validClass: "valid-class",
    errorElement: 'div',
    errorPlacement: function(error, element) {
      if(element.parent('.form-group').length) {
        error.insertAfter(element.parent());
      } else {
        error.insertAfter(element);
      }
    },
    rules: {
      golf_course: {
        required: true,
      },
      datepicker: {
        required: true,
      },
      hour: {
        required: true,
      },
      minute: {
        required: true,
      },
      time_format: {
        required: true,
      },
      comment: {
        required: false,
        lettersspacesonly: true,
        maxlength: 100
      },
      check_terms: {
        required: true,
      },
      check_limit: {
        required: true,
      },
      check_confirm: {
        required: true,
      },
    },
    messages: {
      golf_course: {
        required: string.golf_course,
      },
      datepicker: {
        required: string.date,
      },
      hour: {
        required: string.hour,
      },
      minute: {
        required: string.minute,
      },
      time_format: {
        required: string.time_format,
      },
      comment: {
        required: string.message,
      },
      check_terms: {
        required: string.tandc,
      },
      check_limit: {
        required: string.limit_check,
      },
      check_confirm: {
        required: string.primary,
      },

    },
    submitHandler: function (form) {
      form.submit();
    }
  });

  $("#payment_form").validate({
    errorClass: "error remove_error",
    validClass: "valid-class",
    errorElement: 'div',
    errorPlacement: function(error, element) {
      if(element.parent('.form-group').length) {
        error.insertAfter(element.parent());
      } else {
        error.insertAfter(element);
      }
    },
    rules: {
      card_number: {
        required: true,
        numbersonly: true,
        minlength: 13,
        maxlength: 16
      },
      card_name: {
        required: true,
        lettersspacesonly: true,
        maxlength: 30,
      },
      card_month: {
        required: true,
      },
      card_year: {
        required: true,
      },
      card_cvv: {
        required: true,
        numbersonly: true,
        minlength: 3,
        maxlength: 4
      }
    },
    messages: {
      card_number: {
        required: string.card_number,
        minlength: string.card_number_min,
        maxlength: string.card_number_max,
      },
      card_name: {
        required: string.card_name,
      },
      card_month: {
        required: string.card_month,
      },
      card_year: {
        required: string.card_year,
      },
      card_cvv: {
        required: string.card_cvv,
        minlength: string.card_cvv_min,
        maxlength: string.card_cvv_max,
      },
      comment: {
        required: string.message,
      },
    },
    submitHandler: function (form) {
      form.submit();
    }
  });

  $("#add_address_form").validate({
    errorClass: "error remove_error",
    validClass: "valid-class",
    errorElement: 'div',
    errorPlacement: function(error, element) {
      if(element.parent('.form-group').length) {
        error.insertAfter(element.parent());
      } else {
        error.insertAfter(element);
      }
    },
    rules: {
      nick_name: {
        required: true,
        alphanumericpunconly: true,
        minlength: 2,
        maxlength: 16
      },
      address: {
        required: true,
        alphanumericpunconly: true,
        maxlength: 200,
      },
      state_id: {
        required: true,
      },
      city_id: {
        required: true,
      },
      pincode: {
        required: true,
        numbersonly: true,
        minlength: 6,
        maxlength: 6,
      }
    },
    messages: {
      nick_name: {
        required: string.nick_name,
      },
      address: {
        required: string.address,
      },
      state_id: {
        required: string.state,
      },
      city_id: {
        required: string.city,
      },
      pincode: {
        required: string.pincode,
        minlength: string.pincode_min,
        maxlength: string.pincode_max,
      },
    },
    submitHandler: function (form) {
      form.submit();
    }
  });

  $("#edit_address_form").validate({
    errorClass: "error remove_error",
    validClass: "valid-class",
    errorElement: 'div',
    errorPlacement: function(error, element) {
      if(element.parent('.form-group').length) {
        error.insertAfter(element.parent());
      } else {
        error.insertAfter(element);
      }
    },
    rules: {
      edit_nick_name: {
        required: true,
        alphanumericpunconly: true,
        minlength: 2,
        maxlength: 16
      },
      edit_address: {
        required: true,
        alphanumericpunconly: true,
        maxlength: 200,
      },
      edit_state_id: {
        required: true,
      },
      edit_city_id: {
        required: true,
      },
      edit_pincode: {
        required: true,
        numbersonly: true,
        minlength: 6,
        maxlength: 6,
      }
    },
    messages: {
      edit_nick_name: {
        required: string.nick_name,
      },
      edit_address: {
        required: string.address,
      },
      edit_state_id: {
        required: string.state,
      },
      edit_city_id: {
        required: string.city,
      },
      edit_pincode: {
        required: string.pincode,
        minlength: string.pincode_min,
        maxlength: string.pincode_max,
      },
    },
    submitHandler: function (form) {
      form.submit();
    }
  });

  $("#edited_address_form").validate({
    errorClass: "error remove_error",
    validClass: "valid-class",
    errorElement: 'div',
    errorPlacement: function(error, element) {
      if(element.parent('.form-group').length) {
        error.insertAfter(element.parent());
      } else {
        error.insertAfter(element);
      }
    },
    rules: {
      edited_nick_name: {
        required: true,
        alphanumericpunconly: true,
        minlength: 2,
        maxlength: 16
      },
      edited_address: {
        required: true,
        alphanumericpunconly: true,
        maxlength: 200,
      },
      edited_state_id: {
        required: true,
      },
      edited_city_id: {
        required: true,
      },
      edited_pincode: {
        required: true,
        numbersonly: true,
        minlength: 6,
        maxlength: 6,
      }
    },
    messages: {
      edited_nick_name: {
        required: string.nick_name,
      },
      edited_address: {
        required: string.address,
      },
      edited_state_id: {
        required: string.state,
      },
      edited_city_id: {
        required: string.city,
      },
      edited_pincode: {
        required: string.pincode,
        minlength: string.pincode_min,
        maxlength: string.pincode_max,
      },
    },
    submitHandler: function (form) {
      form.submit();
    }
  });

  $("#available_date_form").validate({
    errorClass: "error-position remove_error",
    validClass: "valid-class",
    errorElement: 'div',
    errorPlacement: function(error, element) {
      if(element.parent('.checkbox-wrapper').length) {
        error.insertAfter(element.parent());
      } else {
        error.insertAfter(element);
      }
    },
    rules: {
      available_date: {
        required: true,
      },
      suggestion_time_hours: {
        required: true,
      },
      suggestion_time_minutes: {
        required: true,
      },
      suggestion_time_format: {
        required: true,
      },
    },
    messages: {
      available_date: {
        required: string.date_of_service,
      },
      suggestion_time_hours: {
        required: string.time_hours,
      },
      suggestion_time_minutes: {
        required: string.time_minutes,
      },
      suggestion_time_format: {
        required: string.time_format,
      },
    },
    submitHandler: function (form) {
      form.submit();
    }
  });

  $("#available_golf_form").validate({
    errorClass: "error-position remove_error",
    validClass: "valid-class",
    errorElement: 'div',
    errorPlacement: function(error, element) {
      if(element.parent('.checkbox-wrapper').length) {
        error.insertAfter(element.parent());
      } else {
        error.insertAfter(element);
      }
    },
    rules: {
      suggestion_golf_course_id: {
        required: true,
      },
      golf_time_hours: {
        required: true,
      },
      golf_time_minutes: {
        required: true,
      },
      golf_time_format: {
        required: true,
      },
    },
    messages: {
      suggestion_golf_course_id: {
        required: string.golf_course,
      },
      golf_time_hours: {
        required: string.time_hours,
      },
      golf_time_minutes: {
        required: string.time_minutes,
      },
      golf_time_format: {
        required: string.time_format,
      },
    },
    submitHandler: function (form) {
      form.submit();
    }
  });

  $("#derby_validate_form").validate({
    errorClass: "error remove_error",
    validClass: "valid-class",
    errorElement: 'div',
    errorPlacement: function(error, element) {
      if(element.parent('.checkbox-wrapper').length) {
        error.insertAfter(element.parent());
      } else {
        error.insertAfter(element);
      }
    },
    rules: {
      email: {
        required: true,
        email: true,
      },
    },
    messages: {
      email: {
        required: string.email,
      },
    },
    submitHandler: function (form) {
      form.submit();
    }
  });

  $("#derby_form").validate({
    errorClass: "error remove_error",
    validClass: "valid-class",
    errorElement: 'div',
    errorPlacement: function(error, element) {
      if(element.parent('.checkbox-wrapper').length) {
        error.insertAfter(element.parent());
      } else {
        error.insertAfter(element);
      }
    },
    rules: {
      new_password: {
        required: true,
        regex: /^(?=.*\d)(?=.*[!@#$%^&*?])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
        minlength: 8,
        maxlength: 16
      },
      confirm_new_password: {
        required: true,
        regex: /^(?=.*\d)(?=.*[!@#$%^&*?])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
        minlength: 8,
        maxlength: 16,
        equalTo : "#new_password"
      },
      bin_number: {
        required: true,
        numbersonly: true,
        minlength: 6,
        maxlength: 8,
      },
      last_digit: {
        required: true,
        numbersonly: true,
        minlength: 4,
        maxlength: 4,
      },
      otp_digit: {
        required: true,
        numbersonly: true,
        minlength: 6,
        maxlength: 6,
      },
    },
    messages: {
      new_password: {
        required: string.password,
        minlength: string.password_min,
        maxlength: string.password_max,
      },
      confirm_new_password: {
        required: string.confirm_password,
        minlength: string.password_min,
        maxlength: string.password_max,
        equalTo: string.password_confirm_match,
      },
      bin_number: {
        required: string.card_bin,
        minlength: string.card_bin_min,
        maxlength: string.card_bin_max,
      },
      last_digit: {
        required: string.last_digit,
        minlength: string.digit_min_4,
        maxlength: string.digit_max_4,
      },
      otp_digit: {
        required: string.otp_code,
        minlength: string.digit_min_6,
        maxlength: string.digit_max_6,
      },
    },
    submitHandler: function (form) {
      form.submit();
    }
  });

});
