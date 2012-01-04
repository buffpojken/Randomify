var Randomify = {
	initialize: function(){
		this.api 						= getSpotifyApi(1);
		this.models 				= this.api.require('sp://import/scripts/api/models');
		this.player 				= this.models.player;
		this.randomifying 	= false;
		var _t 							= this;
		this.player.observe(this.models.EVENT.CHANGE, function(e){_t._player_changed.apply(_t, [e])});
		this._setup_events();
		return this;
	}, 
	toggle_random: function(e){
		console.log("played...");
	},
	// Private
	_player_changed: function(e){
		console.log(e);
		console.log(this.player.track);
	}, 
	_setup_events: function(){
		var _t = this;
		$("#fetch").bind('click', function(e){_t.toggle_random.apply(_t,[e])});
	}
}



function search(term){
	var url="http://search.twitter.com/search.json?q="+term+"&rpp=10&callback=?";
	$.ajax({
		url:url,
		dataType:'jsonp',
		success: function(){
			
		}
	})
}



$(document).ready(function(){
	window.randomify = Object.create(Randomify).initialize();	
});