jQuery(document).ready(function() {


    jQuery('#sunmit').click(function(e) {
        e.preventDefault();
        jQuery('.loading').fadeIn(100);

    })

    jQuery('.social-login').click(function() {
        jQuery('.panel').slideDown();

    })
    jQuery('.animate').click(function(e) {
        e.preventDefault();
        jQuery('.box').animate({
            left: '-70px', top: '30px', opacity: '0.1'

        })



    })

    jQuery('#sunmit').click(function(e) {
        e.preventDefault();
        // let username = $('#username').val()
        // alert(username)
        $('.mtm').html('<strong>همممم</strong>')
    })

    jQuery('#sunmit').click(function(e) {
        e.preventDefault();
        $('.alart').prepend('hiiiii<br>');
    })

    // jQuery('#switchCheckbox').change(function() {
    //     if(this.checked) {
    //         jQuery('body').addClass('night');
    //     }else {
    //         jQuery('body').removeClass('night');
    //
    //     }
    //
    //
    // })

    jQuery('#switchCheckbox').change(function (){
        // jQuery('body').toggleClass('night');
        // jQuery("section").toggleClass("night-visible");

        // jQuery("section").css({
        //     background: 'blue',
        //      color : 'white'
        // });


        let data = {
            'night' : 'night_back',
            "nightـvisible" : "night-visible",
            'checked' : 'checked',

        }

        localStorage.setItem('theme_mode', JSON.stringify(data));
        let geter= localStorage.getItem('theme_mode')

        if(this.checked){

            console.log(JSON.parse(geter).night)
            jQuery('body').addClass(JSON.parse(geter).night);
            jQuery("section").addClass(JSON.parse(geter).nightـvisible);
            jQuery(this).attr('checked' , JSON.parse(geter).checked);
        }else {
            localStorage.clear('theme_mode');
            jQuery('body').removeClass(JSON.parse(geter).night);
            jQuery("section").removeClass(JSON.parse(geter).nightـvisible);
            jQuery(this).removeattr('checked' ,JSON.parse(geter).checked);

        }







    });

    if(localStorage.getItem('theme_mode')){
        let geter = localStorage.getItem('theme_mode')
        jQuery('body').addClass(JSON.parse(geter).night);
        jQuery("section").addClass(JSON.parse(geter).nightـvisible);
        jQuery('#switchCheckbox').attr('checked' , JSON.parse(geter).checked);


    }





})


// const BUTTON = document.querySelector("button");
// const SYNC = document.querySelector("#sync")
//
// const TOGGLE = () => {
//     const IS_PRESSED = BUTTON.matches("[aria-pressed=true]");
//     if (SYNC.checked)
//         document.body.setAttribute("data-dark-mode", IS_PRESSED ? false : true);
//     BUTTON.setAttribute("aria-pressed", IS_PRESSED ? false : true);
// };
//
// BUTTON.addEventListener("click", TOGGLE);

jQuery(document).ready(function() {
    // jQuery("p").first().css('border-color', "red")
    jQuery("p").not('.text').css('border-color', "green")


})



