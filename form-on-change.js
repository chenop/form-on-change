angular.module('chenop.form-on-change', [])
    .directive("formOnChange", function($parse){
        return {
            require: "form",
            link: function(scope, element, attrs){
                var callBack = $parse(attrs.formOnChange);
                element.on("change", function(){
                    callBack(scope);
                });
            }
        }
    });