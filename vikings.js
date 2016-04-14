var Viking = function(name, health, strength){
	this.name = name;
	this.health = health;
	this.strength = strength;
};


Viking.prototype.hit = function (enemy) {
	var damage = this.strength;
	enemy.health = enemy.health - damage;
};



var Ragnar = new Viking ("Ragnar", 1000, 130);
var Rolo = new Viking ("Rolo", 1300, 115);
var Lagarza = new Viking ("Lagarza", 800, 150);
var Bjorn = new Viking ("Bjorn", 1200, 120);




var PitFight = function (viking1, viking2, turns){
	
	var turnnumber = 1;


	function finish_fight() {
		console.log("The figth ends. " + viking1.name + " and " + viking2.name + " go to grab some beers together. ");
		console.log("------------------------------------");
	}

	function should_attack(attacker, defender){
		if (attacker.strength < defender.health){
			return true;
		}

		else{
			return false;
		}	
	}

	function fight(){

   while (turnnumber <= turns){
		if (should_attack(viking1, viking2) === true){
				viking1.hit(viking2);
				console.log(viking1.name + " hits " + viking2.name + ". " + viking2.name + "'s health: " + viking2.health + ".");
		}
		else {
			finish_fight()
			break}

		if (should_attack(viking2, viking1) === true){
				viking2.hit(viking1);
				console.log(viking2.name + " hits " + viking1.name + ". " + viking1.name + "'s health: " + viking1.health + ".");
		}
		else {
			finish_fight()
			break}		
		
		turnnumber ++;
   }
	
	}
		fight();
}


brothersfight = new PitFight (Ragnar, Rolo, 10);
