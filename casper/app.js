var casper = require('casper').create();
var fs = require('fs')
var matches,refNum;
casper.start('https://www.betbrain.com/next-matches/football', function() {
});

casper
	.then(function(){
		var name;
	        name = casper.evaluate(function() {
			return __utils__.findOne(".EpilogueNM .BEText").innerText;
    		});
    	console.log(name)
    	//getting the number of matches only the number
    	var regExp = /\(([^)]+)\)/;
    	matches = regExp.exec(name)
    	matches = matches[1].replace(/\D/g, '');
    	// counting how much times need to refresh
    	refNum = (matches / 50) % 1 === 0 ? matches / 50 : (matches / 50)+1
    	refNum = /[^.]*/.exec(refNum)[0];
    	console.log(refNum)
	})
	.then(function(){
		var link;
	        link = casper.evaluate(function() {
			return document.querySelectorAll('.TheMatch').length;
    		});
    console.log(link)
	})
	.repeat(26,function(){
		casper.thenClick(".EpilogueNM")
		casper.wait(1500, function() {
			var name;
	        name = casper.evaluate(function() {
			return __utils__.findOne(".EpilogueNM .BEText").innerText;
    		});
    	console.log(name)
    	});
	})
	// .then(function(){
	// 	var name;
	//         name = casper.evaluate(function() {
	// 		return __utils__.findOne(".EpilogueNM .BEText").innerText;
 //    		});
 //    console.log(name)
	// })
	// .thenClick(".EpilogueNM")




casper.run();