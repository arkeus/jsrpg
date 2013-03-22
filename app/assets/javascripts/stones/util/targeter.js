var Targeter = function() {
    this.target = function(card, field) {
        switch (card.type) {
            case Type.HERO:
                throw new Exception("Invalid card");
            break;
            case Type.STONE:
                return field;
            break;
        }
    };
};
