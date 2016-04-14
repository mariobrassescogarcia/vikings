var Viking = function(name, total_health, strength){
	this.name = name;
	this.initial_health = total_health;
	this.strength = strength;
	this.health = this.initial_health;
};


Viking.prototype.hit = function (enemy) {
	var damage = this.strength;
	enemy.health = enemy.health - damage;
};

Viking.prototype.full_recover = function() {
	this.health = this.initial_health;
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
		viking1.full_recover();
		viking2.full_recover();
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
			finish_fight();
			break}

		if (should_attack(viking2, viking1) === true){
				viking2.hit(viking1);
				console.log(viking2.name + " hits " + viking1.name + ". " + viking1.name + "'s health: " + viking1.health + ".");
		}
		else {
			finish_fight();
			break}		
		console.log("End of turn " + turnnumber);
		turnnumber ++;
   }
	
	}
		fight();
}


brothersfight = new PitFight (Ragnar, Rolo, 10);
brothersfight = new PitFight (Ragnar, Rolo, 10);

