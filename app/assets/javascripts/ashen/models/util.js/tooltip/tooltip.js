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
        }).show();
    };
    
    this.showString = function(element, value) {
        this.show(element, value, { maxWidth: "200px", textAlign: "center", offsetX: -5 })
    };
    
    this.showItem = function(element, item) {
        this.show(element, item.name(), { width: "150px", offsetX: 8 });
    };
    
    this.hide = function() {
        $("#tooltip").hide();
    }
    
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
};