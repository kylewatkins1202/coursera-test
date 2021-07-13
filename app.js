(function(){
'use strict';

angular.module('lunchCounter',[])

.controller('lunchCounterController', function($scope){
    
    $scope.items="";
    $scope.output="";

    $scope.displayItemCount=function(){
        
        var itemCount=calculateItems($scope.items);
        $scope.output = checkIfTooMuch(itemCount);
    
    }
    
    $scope.noSpace=function(event){
        
        if(event.keyCode == 32){
            
            event.preventDefault();
        
        }

    }
});

function calculateItems(string){
    
    var itemArray = string.split(',');
    var items=[]
    
    for(var i = 0; i < itemArray.length; i++)
    {

        itemArray[i]=itemArray[i].replaceAll(" ","")
        
        if(itemArray[i]!="")
        {

            items.push(itemArray[i])
        
        }

    }
    
    return items.length;

}

function checkIfTooMuch(count)
{

    if(count==0)
    {

        return "Please enter data first.";
    
    }
    else if(count<=3)
    {

        return "Enjoy!";
    
    }
    else{

        return "That's too much.";
    
    }

}
})();
