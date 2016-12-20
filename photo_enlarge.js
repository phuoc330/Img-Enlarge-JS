// JavaScript Document

hs.outlineType = 'rounded-white';    
hs.dimmingOpacity = 0.75;
hs.graphicsDir = 'http://files.dnr.state.mn.us/javascript/highslide/graphics/';
hs.registerOverlay({
	html: '<div class="closebutton" onclick="return hs.close(this)" title="Close"></div>',
	position: 'top right',
	useOnHtml: true,
	fade: 2 // fading the semi-transparent overlay looks bad in IE
});
hs.transitions = ['expand', 'crossfade'];
hs.showCredits = false;
hs.anchor = 'right'
