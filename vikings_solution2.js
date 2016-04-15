var Viking = function(name,health,strength) {
  this.name = name;
  this.health = health;
  this.str = strength
}

var Saxon = function() {
  this.name = "stupid saxon villager"
  this.health = Math.floor((Math.random() * 10) + 1);
  this.str = Math.floor((Math.random() * 10) + 1);
}

var game = function(vikings) {
  var vikings = vikings;
  var saxons = saxonGenerator(10);
  shuffle(vikings);
  console.log("\nThe vikings are measuring their strength in a pitfight!\n")
  pitfight(vikings[0],vikings[1],10);
  console.log("\nThe battle between Vikings and Saxons is starting! There's " + vikings.length + " Vikings and " + saxons.length +" Saxons.\n"); 
  battle(vikings,saxons,10);
  anounceResults(vikings,saxons);
}

function saxonGenerator (number) {
  var saxons = [];
  for (var i = number; i >= 0; i--) {
    saxons.push(new Saxon());
  }
  return saxons;
}


function anounceResults (vikings,saxons) {
  console.log("\nThere's " + vikings.length + " vikings still standing and " + saxons.length + " saxons!\n")
}

function showlife (vikings) {
  vikings.forEach( function(viking) {
    console.log(viking.health);
  });
}

function pitfight (w1,w2,maxroundnumber) {
  var warrior1 = w1;
  var warrior2 = w2;
  var count = 0;
  while (count < maxroundnumber) {
    if (check(warrior1,warrior2)) {
      console.log("Someone was about to die! Fight stopped.")
      break;
    }
    warrior1.health -= warrior2.str
    shoutAttackAndHealth(warrior2,warrior1);
    warrior2.health -= warrior1.str;
    shoutAttackAndHealth(warrior1,warrior2);
    count++;
  }
}

function fight (w1,w2) {
  var warrior1 = w1;
  var warrior2 = w2;
  warrior1.health -= warrior2.str;
  shoutAttackAndHealth(warrior2,warrior1);
  warrior2.health -= warrior1.str;
  shoutAttackAndHealth(warrior1,warrior2);
}

function shoutAttackAndHealth (warrior1,warrior2) {
  console.log(warrior2.name + " attacks " + warrior1.name + " and deals " + warrior2.str + " points of damage.");
  console.log(warrior1.name + " health is now at: " + warrior1.health);
   // body...  
}

function battle (vikings,saxons,rounds) {
  while (rounds > 0) {
    if ((vikings.length === 0) || (saxons.length === 0)) {
        console.log("\nBattle is over!")
        break;
      }
    vikings.forEach( function(viking) {
      if ((vikings.length === 0) || (saxons.length === 0)) {
        return;
      }
      saxon = saxons[Math.floor(Math.random() * saxons.length)];
      fight(viking,saxon);
      var index1 = vikings.indexOf(viking);
      var index2 = saxons.indexOf(saxon);
      if (alive(viking)){
        vikings.splice(index1, 1);
      }
      if (alive(saxon)){
        saxons.splice(index2, 1);
      }  
    });
  rounds--;
  }
}


function check (w1,w2) {
  if ((w1.health - w2.str <= 0) || (w2.health - w1.str <= 0)){
    return true;
  }else{
    return false;
  }
}

function alive (w1) {
  if (w1.health <= 0){
    return true;
  }else{
    return false;
  }
}

function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i -= 1) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
    return a;
}


var v1 = new Viking("oriol",80,10);
var v2 = new Viking("david",90,15);
var v3 = new Viking("charlie",30,90);
var v4 = new Viking("marc",100,20);

var arrayVikings = [v1,v2,v3,v4];



g1 = new game(arrayVikings);