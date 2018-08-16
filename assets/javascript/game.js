// $(document).ready(function() {
    var isFighterChosen = false;
    var isDefenderChosen = false;

    function initializeGame (){
        isFighterChosen = false;
        isDefenderChosen = false;
    }

    //Choose a character
    $(".character").on("click", function() {
        //check if a character is already selected then another click will send this guy to defender
        if (isFighterChosen){
            return false;
        }
    
        $(this).css("backgroundColor", "#66cccc");

        $(this).addClass("chosenHero");

        isFighterChosen = true;


        //Send enemies to the available to attack area
        $(".character").not(this).appendTo($("#enemies"));   
        $(".character").not(this).addClass("defenders");  

        $(".defenders").css("backgroundColor", "#dc3545");       
        
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
            var defenderHit = $('.theDefender').attr('hit');

            $(".btn").on("click", function(){
                heroHit = parseInt(heroHit);
                attack += heroHit;

                if (heroHealth > 0 && defHealth > 0) {
                    heroHealth = heroHealth - defenderHit;
                    defHealth = defHealth - attack;

                    $('#results').html('<h4>' + 'You attacked ' + $('.theDefender').attr('name') + " for " + attack + " damage.</h3>");
                    $('#results').append('<h4>' + $('.theDefender').attr('name')[0].toUpperCase() + $('.theDefender').attr('name').substr(1) + " attacked you back for " + defenderHit+ " damage.</h4>");
                    

                    //Decides where the defender health is updated
                    if ($('.theDefender').attr('name')=== "link"){
                        $("#linkHealth").text('Health: ' + defHealth);
                    }

                    if ($('.theDefender').attr('name')=== "zelda"){
                        $("#zeldaHealth").text('Health: ' + defHealth);
                    }
                    
                    if ($('.theDefender').attr('name')=== "goron"){
                        $("#goronHealth").text('Health: ' + defHealth);
                    }

                    if ($('.theDefender').attr('name')=== "skullKid"){
                        $("#skullKidHealth").text('Health: ' + defHealth);
                    }  

                    //Decides where to put the health text for the hero character
                    if ($('.chosenHero').attr('name')=== "link"){
                        $("#linkHealth").text('Health: ' + heroHealth);
                    }

                    if ($('.chosenHero').attr('name')=== "zelda"){
                        $("#zeldaHealth").text('Health: ' + heroHealth);
                    }
                    
                    if ($('.chosenHero').attr('name')=== "goron"){
                        $("#goronHealth").text('Health: ' + heroHealth);
                    }

                    if ($('.chosenHero').attr('name')=== "skullKid"){
                        $("#skullKidHealth").text('Health: ' + heroHealth);
                    }                    
                    
                if (heroHealth > 0 && defHealth <= 0){
                    $(".theDefender").removeClass('theDefender');
                    $('#defender').empty();
                    $('#defender').text("Pick a new chibi enemy!");
                }    
                };

                // $('.theDefender').removeClass('theDefender'); 
                   
            })
        })



    });

    

// })