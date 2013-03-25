var Targeter = function() {
    this.target = function(card, field) {
        switch (card.type) {
            case Type.HERO:
                throw new Exception("Invalid card");
            break;
            case Type.STONE:
                return field;
            break;
            case Type.SPELL:
                return this.targetByEffect(card, field);
            break;
            return null;
        }
    };
    
    this.targetByEffect = function(card, field) {
        for (var effect in card.effects) {
            console.log("effect", effect);
        }
    };
};
