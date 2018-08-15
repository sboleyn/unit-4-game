// $(document).ready(function() {
    var isFighterChosen = false;
    var isDefenderChosen = false;

    function initializeGame (){
        isFighterChosen = false;
    }

    $(".character").on("click", function() {
        //check if a character is already selected then another click will send this guy to defender
        if (isFighterChosen){
            return false;
        }
    
        $(this).css("backgroundColor", "#66cccc");
        isFighterChosen = true;
        
        $(".character").not(this).appendTo($("#enemies"));

        // $(".character").not(this).css("backgroundColor", "red");        

        $(".character").not(this).addClass("defenders");  

        $(".defenders").css("backgroundColor", "red");       
        
        $(".defenders").on("click", function() {

            if (isDefenderChosen){
                return false;
            }
    
            $(this).css("backgroundColor", "gray");
            
            isDefenderChosen = true;
            
            $(this).appendTo($("#defender"));

            $(this).removeClass("defenders");

            $(this).addClass("theDefender"); 

            $(".btn").on("click", function(){
                var defHealth = $('.theDefender').val();
                console.log(defHealth);
            })
        })



    });

    

// })