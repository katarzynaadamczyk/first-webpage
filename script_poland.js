let text_mazowsze = "I love to travel in my surroundings. I really enjoy riding a bike in coutryside in Mazowsze district. This is what you see on the first two photos. <br>";
text_mazowsze += "On the last photo there is a romantic park in Arkadia, near autoroute between Łódź and Warsaw. I love to go there in the autumn to see the colors on the trees change.";

let images_mazowsze = '<div class="column_e_k"> ';
images_mazowsze += '<img src="pictures/Mazowieckie_1.JPG" class="d-block_e_k" alt="Contryside in Mazowsze.">';
images_mazowsze += '</div> ';
images_mazowsze += '<div class="column_e_k"> ';
images_mazowsze += '<img src="pictures/Mazowieckie_2.JPG" class="d-block_e_k" alt="Contryside in Mazowsze.">';
images_mazowsze += '</div>';

let text_tatry = "I like to spend my holiday time on walking or hiking so I often go to mountains. In 2020 I got the opportunity to go once again to Tatras. ";
text_tatry += "The weather was sunny and the mountains looked really nice. Please see the pictures above.";

let images_tatry = '<div class="column_e_k"> ';
images_tatry += '<img src="pictures/Tatry_1.JPEG" class="d-block_e_k" alt="View on Tatras."> ';
images_tatry += '</div> ';
images_tatry += '<div class="column_e_k"> ';
images_tatry += '<img src="pictures/Tatry_2.JPEG" class="d-block_e_k" alt="View on Tatras."> ';
images_tatry += '</div>';

function unblock_mazowsze()
{
    document.querySelector('#mazowsze_2').innerHTML = "<a class=\"page-link\" href=\"#\">Mazowsze</a>";
    document.getElementById("mazowsze_2").className = "page-item";
}

function unblock_tatry()
{
    document.querySelector('#tatry_2').innerHTML = "<a class=\"page-link\" href=\"#\">Tatras</a>";
    document.getElementById("tatry_2").className = "page-item";
}


function mazowsze()
{
    document.querySelector('#title_e_k').innerHTML = "Mazowsze";
    document.querySelector('#text_e_k').innerHTML = text_mazowsze;
    document.querySelector('.column_e_k').style.width = "33.33%";
    document.getElementById("images_e_k").innerHTML = images_mazowsze;

    document.querySelector('#mazowsze_2').innerHTML = "<span class=\"page-link\">Mazowsze<span class=\"sr-only\">(current)</span></span>";
    document.getElementById("mazowsze_2").className = "page-item active";

    unblock_tatry();

}

function tatry()
{
    document.querySelector('#title_e_k').innerHTML = "Tatras";
    document.querySelector('#text_e_k').innerHTML = text_tatry;
    document.querySelector('.column_e_k').style.width = "50%";
    document.getElementById("images_e_k").innerHTML = images_tatry;

    document.querySelector('#tatry_2').innerHTML = "<span class=\"page-link\">Tatry<span class=\"sr-only\">(current)</span></span>";
    document.getElementById("tatry_2").className = "page-item active";

    unblock_mazowsze();
}





document.addEventListener('DOMContentLoaded', function() {

    document.querySelector('#mazowsze_2').addEventListener('click',  function(){
        mazowsze();
    });

    document.querySelector('#tatry_2').addEventListener('click',  function(){
        tatry();
    });

});