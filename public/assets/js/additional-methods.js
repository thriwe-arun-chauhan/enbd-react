/*!
* jQuery Validation Plugin v1.15.0
*
* http://jqueryvalidation.org/
*
* Copyright (c) 2016 Jörn Zaefferer
* Released under the MIT license
*/
(function( factory ) {
	if ( typeof define === "function" && define.amd ) {
		define( ["jquery", "./jquery.validate"], factory );
	} else if (typeof module === "object" && module.exports) {
		module.exports = factory( require( "jquery" ) );
	} else {
		factory( jQuery );
	}
}(function( $ ) {

	( function() {

		function stripHtml( value ) {

			// Remove html tags and space chars
			return value.replace( /<.[^<>]*?>/g, " " ).replace( /&nbsp;|&#160;/gi, " " )

			// Remove punctuation
			.replace( /[.(),;:!?%#$'\"_+=\/\-“”’]*/g, "" );
		}

		$.validator.addMethod( "maxWords", function( value, element, params ) {
			return this.optional( element ) || stripHtml( value ).match( /\b\w+\b/g ).length <= params;
		}, $.validator.format( "Please enter {0} words or less." ) );

		$.validator.addMethod( "minWords", function( value, element, params ) {
			return this.optional( element ) || stripHtml( value ).match( /\b\w+\b/g ).length >= params;
		}, $.validator.format( "Please enter at least {0} words." ) );

		$.validator.addMethod( "rangeWords", function( value, element, params ) {
			var valueStripped = stripHtml( value ),
			regex = /\b\w+\b/g;
			return this.optional( element ) || valueStripped.match( regex ).length >= params[ 0 ] && valueStripped.match( regex ).length <= params[ 1 ];
		}, $.validator.format( "Please enter between {0} and {1} words." ) );

	}() );

	$.validator.addMethod( "currency", function( value, element, param ) {
		var isParamString = typeof param === "string",
		symbol = isParamString ? param : param[ 0 ],
		soft = isParamString ? true : param[ 1 ],
		regex;

		symbol = symbol.replace( /,/g, "" );
		symbol = soft ? symbol + "]" : symbol + "]?";
		regex = "^[" + symbol + "([1-9]{1}[0-9]{0,2}(\\,[0-9]{3})*(\\.[0-9]{0,2})?|[1-9]{1}[0-9]{0,}(\\.[0-9]{0,2})?|0(\\.[0-9]{0,2})?|(\\.[0-9]{1,2})?)$";
		regex = new RegExp( regex );
		return this.optional( element ) || regex.test( value );

	}, "Please specify a valid currency" );

	// Older "accept" file extension method. Old docs: http://docs.jquery.com/Plugins/Validation/Methods/accept
	$.validator.addMethod( "extension", function( value, element, param ) {
		param = typeof param === "string" ? param.replace( /,/g, "|" ) : "png|jpe?g|gif";
		return this.optional( element ) || value.match( new RegExp( "\\.(" + param + ")$", "i" ) );
	}, $.validator.format( "Please enter a value with a valid extension." ) );

	$.validator.addMethod( "integer", function( value, element ) {
		return this.optional( element ) || /^-?\d+$/.test( value );
	}, "A positive or negative non-decimal number please" );

	$.validator.addMethod("regex", function(value, element, regexpr) {
		return regexpr.test(value);
	}, "Password should have a lowercase, uppercase, numeric, and special character");

	$.validator.addMethod( "lettersonly", function( value, element ) {
		return this.optional( element ) || /^[a-z]+$/i.test( value );
	}, "Please enter only letters" );

	$.validator.addMethod( "lettersnumberonly", function( value, element ) {
		return this.optional( element ) || /^[a-zA-Z0-9]*$/i.test( value );
	}, "Please enter only letters and digits" );

	$.validator.addMethod( "lettersnumberspaceonly", function( value, element ) {
		return this.optional( element ) || /^[a-zA-Z0-9," "]*$/i.test( value );
	}, "Please enter only letters and digits" );

	$.validator.addMethod( "letterspacehyphenonly", function( value, element ) {
		return this.optional( element ) || /^[0-9A-Za-z\s\-]+$/.test( value );
	}, "Only alphabets, numbers, spaces and - are allowed" );

	$.validator.addMethod( "alphanumericpunconly", function( value, element ) {
		return this.optional( element ) || /^[ A-Za-z0-9_,'"-()./&+?-\s\r\n]*$/i.test( value );
	}, "Only alphanumeric and punctuation are allowed" );

	$.validator.addMethod( "alphanumerictimepunconly", function( value, element ) {
		return this.optional( element ) || /^[ A-Za-z0-9:]*$/i.test( value );
	}, "Only alphanumeric and time are allowed" );

	$.validator.addMethod( "lettersspacesonly", function( value, element ) {
		return this.optional( element ) || /^[a-z," "]+$/i.test( value );
	}, "Please enter only letters" );

	$.validator.addMethod( "letterswithbasicpunc", function( value, element ) {
		return this.optional( element ) || /^[a-z\-.,()'"\s]+$/i.test( value );
	}, "Letters or punctuation only please" );

	$.validator.addMethod( "mobileNL", function( value, element ) {
		return this.optional( element ) || /^((\+|00(\s|\s?\-\s?)?)31(\s|\s?\-\s?)?(\(0\)[\-\s]?)?|0)6((\s|\s?\-\s?)?[0-9]){8}$/.test( value );
	}, "Please specify a valid mobile number" );

	$.validator.addMethod( "mobile", function( value, element ) {
		return this.optional( element ) || /^[0-9]{7,15}$/.test( value );
	}, "Please enter the valid mobile number" );

	$.validator.addMethod( "numbersonly", function( value, element ) {
		return this.optional( element ) || /^\d*$/.test( value );
	}, "Please enter only digits" );

	$.validator.addMethod( "numbersdecimalonly", function( value, element ) {
		return this.optional( element ) || /^[0-9.\s]*$/.test( value );
	}, "Please enter numbers or decimal digits" );

	$.validator.addMethod( "imagevalid", function( value, element ) {
		return this.optional( element ) || /([a-zA-Z0-9\s_\\.\-\(\):])+(.jpg|.jpeg|.png)$/.test( value );
	}, "Please upload valid image file like jpg, jpeg, png" );

	$.validator.addMethod( "docvalid", function( value, element ) {
		return this.optional( element ) || /([a-zA-Z0-9\s_\\.\-\(\):])+(.pdf|.PDF|.jpeg|.jpg|.png)$/.test( value );
	}, "Please upload valid document like pdf, jpeg, jpg, png" );

	$.validator.addMethod( "pdfvalid", function( value, element ) {
		return this.optional( element ) || /([a-zA-Z0-9\s_\\.\-\(\):])+(.pdf|.PDF)$/.test( value );
	}, "Please upload valid pdf document" );

	$.validator.addMethod('filesize', function (value, element, param) {
		return this.optional(element) || (element.files[0].size <= param * 1000000)
	}, 'File size must be less than {0} MB');

	$.validator.addMethod( "pngvalid", function( value, element ) {
		return this.optional( element ) || /([a-zA-Z0-9\s_\\.\-\(\):])+(.png)$/.test( value );
	}, "Please upload png image file." );

	$.validator.addMethod( "filevalid", function( value, element ) {
		return this.optional( element ) || /([a-zA-Z0-9\s_\\.\-\(\):])+(.xls|.xlxs|.xlsx|.csv)$/.test( value );
	}, "Please upload valid file." );

	$.validator.addMethod("greaterThan", function(value, element, params) {
		var to_date = value.split('-');
		var from_date = ($(params).val()).split('-')
		var new_to_date = to_date[1]+'-'+to_date[0]+'-'+to_date[2];
		var new_from_date = from_date[1]+'-'+from_date[0]+'-'+from_date[2];
		if (!/Invalid|NaN/.test(new Date(new_to_date))) {
			return new Date(new_to_date) >= new Date(new_from_date);
		}
		return isNaN(new_to_date) && isNaN(new_from_date) || (Number(new_to_date) > Number(new_from_date));
	},'Must be greater than from date.');


	$.validator.addMethod( "email", function( value, element ) {
		return this.optional( element ) || /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i.test( value );
	}, "Please enter valid email." );

	jQuery.validator.addMethod( "notEqualTo", function( value, element, param ) {
		return this.optional( element ) || !$.validator.methods.equalTo.call( this, value, element, param );
	}, "Please enter a different value, values must not be the same." );

	$.validator.addMethod( "nowhitespace", function( value, element ) {
		return this.optional( element ) || /^\S+$/i.test( value );
	}, "No white space please" );

	$.validator.addMethod("noHTML", function(value, element) {
		// return true - means the field passed validation
		// return false - means the field failed validation and it triggers the error
		return this.optional(element) || /^([a-z0-9]+)$/.test(value);
	}, "No script or HTML tags are allowed!");

	$.validator.addMethod( "pattern", function( value, element, param ) {
		if ( this.optional( element ) ) {
			return true;
		}
		if ( typeof param === "string" ) {
			param = new RegExp( "^(?:" + param + ")$" );
		}
		return param.test( value );
	}, "Invalid format." );

	// TODO check if value starts with <, otherwise don't try stripping anything
	$.validator.addMethod( "strippedminlength", function( value, element, param ) {
		return $( value ).text().length >= param;
	}, $.validator.format( "Please enter at least {0} characters" ) );

	$.validator.addMethod( "time", function( value, element ) {
		return this.optional( element ) || /^([01]\d|2[0-3]|[0-9])(:[0-5]\d){1,2}$/.test( value );
	}, "Please enter a valid time" );

	$.validator.addMethod( "time12h", function( value, element ) {
		return this.optional( element ) || /^((0?[1-9]|1[012])(:[0-5]\d){1,2}(\ ?[AP]M))$/i.test( value );
	}, "Please enter a valid time in 12-hour am/pm format" );

}));
