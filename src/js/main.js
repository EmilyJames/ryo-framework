requirejs.config({
	paths:
	{
		'jquery':'http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min', 
		'jqueryui':'http://ajax.googleapis.com/ajax/libs/jqueryui/1.11.1/jquery-ui.min'
	},

	shim: 
	{
		'jqueryui':['jquery']
	}
});


//Responsive Nav
require (['responsive-nav.min'], function()
{
	responsiveNav('.nav-collapse');
	
});


//Accordion
require( ['jqueryui'], function()
{
	$('.jquery-ui-accordion').accordion({
		header: 'h3'
	});

});
