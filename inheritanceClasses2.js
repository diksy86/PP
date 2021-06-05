class App {
    constructor(name, license, stars) {
        this.name = name;
        this.license = license;
        this.stars = stars;
    }
    getData() {
        console.log("App " + this.name + "\n"
	    + "License: " + this.license + "\n"
	    + "Stars: " + this.stars);
    }
    isCCLicense() {
        var l = this.license.toLowerCase();
	    return l == "ccl" || l.indexOf("creative commons") !== -1;
    }
    like() {
        this.stars++;
	    return this.stars;
    }
    showStars() {
        console.log(this.stars + " stars");
    }
}
class WebApp extends App {
    constructor(name, license, stars, url, technologies) {
        super(name, license, stars);
        this.url = url;
        this.technologies = technologies;
    }
    getData() {
        console.log("WebApp " + this.name + "\n"
	    + "License: " + this.license + "\n"
	    + "Stars: " + this.stars + "\n"
	    + "URL: " + this.url + "\n"
	    + "Technologies: " + this.technologies);
    }
    reactBased() {
        return this.technologies.toLowerCase().indexOf('react') !== -1;
    }
}
class MobileApp extends App {
    constructor(name,license, stars, platforms) {
        super (name, license, stars);
        this.platforms = platforms;
    }
    getData() {
        console.log("MobileApp " + this.name + "\n"
	    + "License: " + this.license + "\n"
	    + "Stars: " + this.stars + "\n"
	    + "Platforms: " + this.platforms);
    }
    forAndroid() {
        return this.platforms.toLowerCase().indexOf('android') !== -1;
    }
}



var myApp = new MobileApp("AppForEveryone", "CC", 5, "android");
console.log(myApp);

var x = new MobileApp("New Horizon", "OS", 3, "android");
console.log(x.getData());