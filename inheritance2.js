
//Applications


//Template Class
function App(name, license, stars) {
	this.name = name;
	this.license = license;
	this.stars = stars;
}
App.prototype.getData = function() {
	console.log("App " + this.name + "\n"
	+ "License: " + this.license + "\n"
	+ "Stars: " + this.stars);
}
App.prototype.isCCLicense = function() {
	var l = this.license.toLowerCase();
	return l == "ccl" || l.indexOf("creative commons") !== -1;
}
App.prototype.like = function() {
	this.stars++;
	return this.stars;
}
App.prototype.showStars = function() {
	console.log(this.stars + " stars"); 
}
//WebApp Class which extends App

function WebApp(name, license, stars, url, technologies) {
	App.call(this, name, license, stars);
	
	this.url = url;
	this.technologies = typeof technologies === "object" ? technologies.join(", ") : "" + technologies;
}
WebApp.prototype = Object.create(App.prototype);
WebApp.prototype.constructor = WebApp;

WebApp.prototype.getData = function() {
	console.log("WebApp " + this.name + "\n"
	+ "License: " + this.license + "\n"
	+ "Stars: " + this.stars + "\n"
	+ "URL: " + this.url + "\n"
	+ "Technologies: " + this.technologies);
}
WebApp.prototype.reactBased = function() {
	return this.technologies.toLowerCase().indexOf('react') !== -1;
}
//MobileApp Class which extends App

function MobileApp(name, license, stars, platforms) {
	App.call(this, name, license, stars);
	
	this.platforms = typeof platforms === "object" ? platforms.join(", ") : "" + platforms;
}
MobileApp.prototype = Object.create(App.prototype);
MobileApp.prototype.constructor = MobileApp;

MobileApp.prototype.getData = function() {
	console.log("MobileApp " + this.name + "\n"
	+ "License: " + this.license + "\n"
	+ "Stars: " + this.stars + "\n"
	+ "Platforms: " + this.platforms);
}
MobileApp.prototype.forAndroid = function() {
	return this.platforms.toLowerCase().indexOf('android') !== -1;
}

var x = new MobileApp("AppName", "OS", 3, "android");
console.log(x.showStars());