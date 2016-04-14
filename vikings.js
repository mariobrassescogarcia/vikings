var Viking = function(name, health, strength){
	this.name = name;
	this.health = health;
	this.strength = strength;
};


Viking.prototype.hit = function (enemy) {
	var damage = this.strength;
	enemy.health = enemy.health - damage;
};



var Ragnar = new Viking ("Ragnar", 100, 30);
var Rolo = new Viking ("Rolo", 115, 25);
var Lagarza = new Viking ("Lagarza", 80, 28);
var Bjorn = new Viking ("Bjorn", 125, 20);


var PitFight = function(viking1, viking2, turns){
	var turnnumber = 1;
	while (viking1.health > 10 || viking2.health > 10 || turnnumber <= turns) {
		viking1.hit(viking2);
		viking2.hit(viking1);
		console.log("End of turn " + turnnumber + ". " + viking1.name + "'s health: " + viking1.health + " ." + viking2.name + "'s health: " + viking2.health + ".");
		turnnumber ++;
	}
		
};


brothersfight = new PitFight (Ragnar, Rolo, 10);

console.log(Ragnar.health);