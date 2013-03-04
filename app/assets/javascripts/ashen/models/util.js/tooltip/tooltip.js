var Tooltip = function() {
    this.show = function(element, template, options) {
        var attrs = this.calculateAttributes(element);
        options = options || {};
        
        $("#tooltip-content").css({
            width: options['width'] || "auto",
            maxWidth: options['maxWidth'] || "auto",
            textAlign: options['textAlign'] || "left"
        }).html(template);
        $("#tooltip").css({
            left: attrs['right'] + (options['offsetX'] || 6),
            top: attrs['top'] + (options['offsetY'] || 0)
        }).removeClass().addClass(options['colorClass']).show();
    };
    
    this.showString = function(element, value) {
        this.show(element, value, { maxWidth: "200px", textAlign: "center", offsetX: -5 })
    };
    
    this.showItem = function(element, item) {
        var attributes = "";
        for (var attr in ALL_STATISTICS) {
            var name = ALL_STATISTICS[attr];
            var value = item.stat(attr) || 0;
            if (value > 0) {
                var percent = (attr == "strength" || attr == "defense" || attr == "wisdom" || attr == "spirit" || attr == "agility" || attr == "vitality") ? "" : "%";
                attributes += "+<strong>" + value + percent + "</strong> " + name + "<br>";
            }
        }
        
        var template = this.compileTemplate(this.ITEM_TEMPLATE, {
            name: "<span class='" + item.rarity() + "'>" + item.name() + "</span>",
            type: item.base.type.toUpperCase(),
            subtype: item.base.subtype.toUpperCase(),
            effect: item.effect(),
            level: "LEVEL " + item.base.level,
            price: "PRICE: " + item.price() + "G",
            attributes: attributes
        });
        this.show(element, template, { width: "200px", offsetX: 8, colorClass: item.rarity() });
    };
    
    this.hide = function() {
        $("#tooltip").hide();
    };
    
    this.calculateAttributes = function(element) {
        var e = $(element);
        var offset = e.offset();
        return {
            left: offset.left,
            top: offset.top,
            right: offset.left + e.width(),
            bottom: offset.top + e.height()
        };
    };
    
    this.compileTemplate = function(template, values) {
        var compiled = template;
        for (var key in values) {
            var value = values[key];
            compiled = compiled.replace(new RegExp("{" + key + "}", "g"), value);
        }
        return compiled;
    };
    
    this.ITEM_TEMPLATE = [
        '<div class="row name">{name}</div>',
        '<div class="row"><div class="effect">{effect}</div><div class="type">{type} ({subtype})</div></div>',
        '<div class="row attributes">{attributes}</div>',
        '<div class="row bottom"><div class="price">{price}</div><div class="level">{level}</div></div>',
    ].join("");
};