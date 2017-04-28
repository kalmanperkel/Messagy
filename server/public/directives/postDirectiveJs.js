

angular.module('messagy').directive("postDirective",function () {

    return {
        templateUrl: 'directives/postdirective.html',
        scope : {
            postObject : "=",
            addComment: '&',
            commentField: "=commentField"
        }

    }
    
});