// $(document).ready(function() {
    var isFighterChosen = false;
    var isDefenderChosen = false;

    function initializeGame (){
        isFighterChosen = false;
        isDefenderChosen = false;
    }

    $(".character").on("click", function() {
        //check if a character is already selected then another click will send this guy to defender
        if (isFighterChosen){
            return false;
        }
    
        $(this).css("backgroundColor", "#66cccc");

        $(this).addClass("chosenHero");

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


            var defHealth = $('.theDefender').val();
            var heroHealth = $('.chosenHero').val();
            var attack = 0;
            var heroHit = $('.chosenHero').attr('hit');
            var defenderHit = $('.theDefender').attr('hit')

            $(".btn").on("click", function(){
                heroHit = parseInt(heroHit);
                attack += heroHit;
                console.log(attack);
            })
        })



    });

    

// })