//Tabs are 20% of screen width for handheld
var tabWidth = Ti.Platform.displayCaps.platformWidth/5;

var tabPositions = {
	home:0,
	agenda:tabWidth,
	post:tabWidth*2,
	stream:tabWidth*3,
	venue:tabWidth*4
};

//set tab positions
$.home.left = tabPositions.home;
$.agenda.left = tabPositions.agenda;
$.post.left = tabPositions.post;
$.stream.left = tabPositions.stream;
$.venue.left = tabPositions.venue;

//add tab behavior
function doTab(name,offset,noEvent) {
	_.each(['home', 'agenda', 'post', 'stream', 'venue'], function(item) {
		if (item !== 'post') {
			if (name === item) {
				$[item+'Icon'].image = '/img/tabs/btn-'+item+'-pressed.png'
			}
			else {
				$[item+'Icon'].image = '/img/tabs/btn-'+item+'-default.png'
			}
		}
	});
	
	noEvent || ($.trigger('change',{
		name:name
	}));
}

$.home.addEventListener('click', function() {
	doTab('home', tabPositions.home);
});

$.agenda.addEventListener('click', function() {
	doTab('agenda', tabPositions.agenda);
});

//post is special, just fire event
$.postIcon.addEventListener('click', function() {
	$.trigger('change', {
		name:'post'
	});
});

$.stream.addEventListener('click', function() {
	doTab('stream', tabPositions.stream);
});

$.venue.addEventListener('click', function() {
	doTab('venue', tabPositions.venue);
});

//Public API to manually set navigation state
$.setTab = function(name) {
	doTab(name,tabPositions[name],true);
};


