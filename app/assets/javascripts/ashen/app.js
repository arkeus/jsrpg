var app = angular.module("ashen", []);

app.run(["$rootScope", function($rootScope) {
    $rootScope.color = function(value, type, subtype) {
        var colorClass = angular.lowercase(type + (typeof subtype === "undefined" ? "" : " " + subtype));
        return "<em class=\"" + colorClass + "\">" + value + "</em>";
    };
    ItemDatabase.initialize();
    AffixDatabase.initialize();
}]);

app.factory("Registry", ["$rootScope", "$timeout", function($rootScope, $timeout) {
    $rootScope.Registry = {
        player : new Player($rootScope),
        world : new World($rootScope),
        log : new Log($rootScope, $timeout),
        tooltip : new Tooltip()
    };
        
    return $rootScope.Registry;
}]);

app.directive("log", ["$timeout", function($timeout) {
    return {
        restrict: "E",
        link: function(scope, element, attrs) {
            var scrollToBottom = function() {
                $(element).stop(true, false).animate({ scrollTop: $(element)[0].scrollHeight - $(element).outerHeight() }, { duration: GAME_TICK * 0.75, easing: "linear" });
            };
            
            scope.$on("log", function(message) {
                var scrolledToBottom = $(element).scrollTop() == $(element)[0].scrollHeight - $(element).outerHeight();
                if (scrolledToBottom) {
                    // Set a timeout, because otherwise it scrolls to tbe bottom before the page
                    // adds the new message and reflows.
                    $timeout(function() {
                        scrollToBottom();
                    }, 0);
                }
            });
            
            $(window).focus(function() {
                $(element).stop(true, false).scrollTop($(element)[0].scrollHeight - $(element).outerHeight());
            });
        }
    };
}]);

app.directive("bar", function() {
    return {
        restrict: "E",
        link: function(scope, element, attrs) {
            // Probably a better way to fuck with the DOM, with a template or some shit
            $(element).addClass("bar-container clear").addClass(attrs.type).append(
                $("<div></div>").addClass("title").addClass(attrs.type).text(attrs.type.toUpperCase())
            ).append(
                $("<div></div>").addClass("bar").addClass(attrs.type).append(
                    $("<div></div>").addClass("fill").addClass(attrs.type)
                )
            );
            
            scope.$watch(attrs.current, function() {
                var current = scope.$eval(attrs.current);
                var max = scope.$eval(attrs.max);
                $(element).find(".fill").stop(true, false).animate({ "width": (current / max * 100) + "%" }, GAME_TICK * 0.75);
            });
        }
    };
});

app.directive("item", ["$timeout", "Registry", function($timeout, Registry) {
    return {
        restrict: "E",
        link: function(scope, element, attrs) {
            var itemObject;
            
            function initialize(itemIndicator) {
                var item = itemObject = scope.$eval(itemIndicator);
                
                var index = item == null ? 199 : item.base.index;
                var rarity = item == null ? "common" : item.rarity;
                var indexX = (index % 20) * -22;
                var indexY = Math.floor(index / 20) * -22;
                var position = indexX + "px " + indexY + "px";
                
                var sprite = $("<div></div").addClass("item-sprite").css({ backgroundPosition: position });
                $(element).addClass("item").addClass(rarity).html(sprite);
            }
            
            initialize(attrs.item);
            
            if (attrs.equipped) {
                scope.$watch(attrs.item, function() {
                    initialize(attrs.item);
                });
                
                $(element).click(function() {
                    if (itemObject == null) {
                        return;
                    }
                    $(this).removeClass(itemObject.rarity);
                    Registry.player.unequip(itemObject);
                });
            } else {
                $(element).click(function() {
                    if (itemObject == null) {
                        return;
                    }
                    Registry.player.equip(itemObject);
                });
            }
        }
    };
}]);

app.directive("tooltip", ["Registry", function(Registry) {
    return {
        restrict: "A",
        link: function(scope, element, attrs) {
            $(element).mouseover(function() {
                var type = attrs.tooltipType || "string";
                switch (type) {
                    case "item":
                        var content = scope.$eval(attrs.tooltipContent);
                        Registry.tooltip.showItem(element, content);
                    break;
                    case "string":
                        Registry.tooltip.showString(element, attrs.tooltipContent);
                    break;
                }
                $(this).addClass("tooltip-focus");
            });
            
            $(element).mouseout(function() {
                Registry.tooltip.hide();
                $(this).removeClass("tooltip-focus");
            });
        }
    };
}]);