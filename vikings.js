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




Ragnar.hit(Rolo);

console.log(Rolo.health);




var PitFight = function(viking1, viking2){

};