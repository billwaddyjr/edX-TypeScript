//class logic
var Recipes = (function () {
    function Recipes() {
    }
    Object.defineProperty(Recipes.prototype, "recipeItem", {
        get: function () {
            return this.recipeType;
        },
        set: function (_recipeItems) {
            this.recipeType = _recipeItems;
        },
        enumerable: true,
        configurable: true
    });
    return Recipes;
})();
var RecipeItem = (function () {
    function RecipeItem() {
    }
    Object.defineProperty(RecipeItem.prototype, "recipeItemName", {
        //TODO: Add get and set blocks for the name variable above. Use "recipeItemName" for the method names and "recipeTypeName" for the param
        //of the set block. Make sure you include the correct type declaration in your set block parameter.
        get: function () {
            return this.name;
        },
        set: function (recipeTypeName) {
            this.name = recipeTypeName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RecipeItem.prototype, "recipeItemClass", {
        //TODO: Add get and set blocks for the class variable above. Use "recipeItemClass" for the method names and "recipeItemClass" for the param
        //of the set block. Make sure you include the correct type declaration in your set block parameter.
        get: function () {
            return this.class;
        },
        set: function (recipeItemClass) {
            this.class = recipeItemClass;
        },
        enumerable: true,
        configurable: true
    });
    return RecipeItem;
})();
//TODO: Create a class called "RecipeClass" that includes a single member variable named "type" which has a "string" type declaration. Then
//create the get and set blocks for that variable using "recipeType" as the method names and "_type" as the parameter name for the set block.
var RecipeClass = (function () {
    function RecipeClass() {
    }
    Object.defineProperty(RecipeClass.prototype, "recipeType", {
        get: function () {
            return this.type;
        },
        set: function (_type) {
            this.type = _type;
        },
        enumerable: true,
        configurable: true
    });
    return RecipeClass;
})();
//# sourceMappingURL=recipesClass.js.map