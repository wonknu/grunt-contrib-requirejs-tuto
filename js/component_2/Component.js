define(function(require, exports, module) {

    Component.prototype.constructor = Component;
    
    // Constructor
    function Component() {
        console.log('component 2 new instance');
    }
    
    module.exports = Component; // export module
});
