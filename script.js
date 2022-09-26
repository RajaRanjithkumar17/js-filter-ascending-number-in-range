

    var range = 100;
    
    for(i=0 ; i<range ;i++){
        
        var num = i;
        var digits = num.toString().split('');
        var realDigits = digits.map(Number);
        if(i<11){
            console.log(i);
        }
        
        if(realDigits[0] < realDigits[1]){
            console.log(i);
        }
        
    }


