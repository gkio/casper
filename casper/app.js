var casper = require('casper').create();

casper.start('https://www.betbrain.com/next-matches/football', function() {
	 	// this.click('.BoxEpilogue')
});
casper
	.then(function(){
		var link;
	        link = casper.evaluate(function() {
			return document.querySelectorAll('.TheMatch').length;
    		});
    console.log(link)
	})




casper.run();