/*
 * TODO: Maybe add spell specific messages? If so, use message:
 * %w weapon
 * %s spell name
 * %e element name
 * %d damage
 * %t target name ("the Goblin" or "you")
 * %s source name ("You" or "The Goblin")
 */
var SpellDatabase = new function() {
    this.MELEE = new Spell({
        name: "Melee",
        description: "Attack the enemy with your equipped weapon",
        element: Element.PHYSICAL,
        mp: 0
    });
    
    this.FIREBALL = new Spell({
        name: "Fireball",
        description: "Shoots a ball of fire at your opponent",
        element: Element.FIRE,
        mp: 5,
        power: function(level) { return 5 + level * 2; }
    });
};
