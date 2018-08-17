$(document).ready(function() {

    $(document).scrollTop(0);

    var isFighterChosen = false;
    var isDefenderChosen = false;

    // function initializeGame (){
    //     var isFighterChosen = false;
    //     var isDefenderChosen = false;
    // };

    //Choose a character
    $(".character").on("click", function() {
        //check if a character is already selected then another click will send this guy to defender
        if (isFighterChosen){
            return false;
        }
    
        $(this).css("backgroundColor", "#66cccc");

        $(this).addClass("chosenHero");

        isFighterChosen = true;
        var attack = 0;

        //Send enemies to the available to attack area
        $(".character").not(this).appendTo($("#enemies"));   
        $(".character").not(this).addClass("defenders");  

        $(".defenders").css("backgroundColor", "#dc3545");       
        //choose a defender
        $(".defenders").on("click", function() {

            if (isDefenderChosen){
                return false;
            }
    
            $(this).css("backgroundColor", "gray");
            
            isDefenderChosen = true;
            
            $('#defender').empty();

            $(this).appendTo($("#defender"));

            $(this).removeClass("defenders");

            $(this).addClass("theDefender"); 


            var defHealth = $('.theDefender').val();
            var heroHealth = $('.chosenHero').val();
            
            var heroHit = $('.chosenHero').attr('hit');
            var defenderHit = $('.theDefender').attr('hit');

            // function buttonClick() {
                
            // }

            $(".btn").off("click");
            $(".btn").on("click", function(){
                heroHit = parseInt(heroHit);
                attack += heroHit;

                //Hero and defender are alive, there are defenders

                if (heroHealth > 0 && defHealth > 0) {
                    heroHealth = heroHealth - defenderHit;
                    defHealth = defHealth - attack;

                    $('#results').html("<h4 class='col-sm-4 clear'>" + 'You attacked ' + $('.theDefender').attr('name')[0].toUpperCase() + $('.theDefender').attr('name').substr(1) + " for " + attack + " damage.</h3>");

                    $('#results').append("<h5 class='col-sm-4 clear'>" + $('.theDefender').attr('name')[0].toUpperCase() + $('.theDefender').attr('name').substr(1) + " attacked you back for " + defenderHit+ " damage.</h5>");
                    

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
                        $('#defender').text("Pick a new chibi enemy!").css("color", "#dc3545").css("fontSize", "20px");
                        
                        $(".chosenHero").attr("value", heroHealth);
                        // $(".chosenHero").attr("hit", attack + heroHit);
                        // console.log(heroHealth);
                        isDefenderChosen = false;  
                        
                    }               
                };  

                //Hero is dead
                if ((heroHealth) <= 0){
                    alert("You've lost!");
                    $('.container').append("<button class='btn btn-dark'>Reset</button>");
                    $('.btn-danger').off();
                    $('.btn-dark').on("click", function(){
                        location.reload();
                    });
                }       
                
                if ($(".theDefender").length === 0 && ($(".defenders").length) === 0){
                    alert("You've won!");
                    $('.container').append("<button class='btn btn-dark'>Reset</button>");
                    $('#defender').text("");
                    $('#results').text("Reset to start over.");
                    $('.clear').text("");
                    $('.btn-danger').off();
                    $('.btn-dark').on("click", function(){
                        location.reload();
                    });
                }


        });


    });



});

});
