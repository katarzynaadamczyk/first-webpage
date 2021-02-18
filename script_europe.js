let text_corfu = "I have visited Corfu in the end of April 2018. ";
text_corfu += "The weather was pleasant - it was sunny and warm. At first glance, ";
text_corfu += "I enjoyed the stay there as the surroundings were really nice. Please see the pictures above.";

let images_corfu = '<div class="column_e_k"> ';
images_corfu += '<img src="pictures/Corfu_1.JPG" class="d-block_e_k" alt="Corfu mountains"> ';
images_corfu += '</div> ';
images_corfu += '<div class="column_e_k"> ';
images_corfu += '<img src="pictures/Corfu_2.JPG" class="d-block_e_k" alt="Corfu see"> ';
images_corfu += '</div>';

let text_lanzarote = "I have visited Lanzarote in the end of Novermber 2017. ";
text_lanzarote += "The weather was a bit windy but the sun and the temperature was pleasant and I spent a nice time there.";
text_lanzarote += " Please see the pictures above.";

let images_lanzarote = '<div class="column_e_k"> ';
images_lanzarote += '<img src="pictures/Lanzarote_Arecife.JPG" class="d-block_e_k" alt="Arecife"> ';
images_lanzarote += '</div> ';
images_lanzarote += '<div class="column_e_k"> ';
images_lanzarote += '<img src="pictures/Lanzarote_palmy.JPG" class="d-block_e_k" alt="Palm trees"> ';
images_lanzarote += '</div>';
images_lanzarote += '<div class="column_e_k"> ';
images_lanzarote += '<img src="pictures/Lanzarote_zachod.JPG" class="d-block_e_k" alt="Sunset in Papagayo"> ';
images_lanzarote += '</div>';

let text_madeira = "I have visited Madeira in October 2018. I spent there a lot of time hiking and admiring beautiful views that this isle offers. ";
text_madeira += "The capital of Madeira - Funchal is also a breathtaking city, as you may see on the picture above. ";

let images_madeira = '<div class="column_e_k"> ';
images_madeira += '<img src="pictures/Madeira_Funchal.JPG" class="d-block_e_k" alt="Funchal"> ';
images_madeira += '</div> ';
images_madeira += '<div class="column_e_k"> ';
images_madeira += '<img src="pictures/Madeira_laur.JPG" class="d-block_e_k" alt="Laurel tree"> ';
images_madeira += '</div>';
images_madeira += '<div class="column_e_k"> ';
images_madeira += '<img src="pictures/Madeira_wodospad.JPG" class="d-block_e_k" alt="Waterfall"> ';
images_madeira += '</div>';

let text_london = "Me and my husband spent a really nice weekend in London in May 2017. Before getting there we were afraid of bad weather but it suprised us to be nice. ";
text_london += "The parks were lovely and I fell in love with beautiful district of Notting Hill.<br>";
text_london += "Before getting to London I spent a week in Sudbury where I saw this beautiful sunset. ";

let images_london = '<div class="column_e_k"> ';
images_london += '<img src="pictures/Londyn_Notting_Hill.JPG" class="d-block_e_k" alt="Notting Hill"> ';
images_london += '</div> ';
images_london += '<div class="column_e_k"> ';
images_london += '<img src="pictures/England.JPG" class="d-block_e_k" alt="Sunset in Sudbury"> ';
images_london += '</div> ';

let text_vienna = "I spent my birthday in Vienna in July 2017 with my husband. The weather was really hot but it did not stop us from sightseeing and eating tasty food in Vienna. ";
text_vienna += "The one of the most amazing things we ate there was Sacher's Torte and traditional viennese schnitzel which you can see on the image above.";

let images_vienna = '<div class="column_e_k"> ';
images_vienna += '<img src="pictures/Wieden_ciastko.JPG" class="d-block_e_k" alt="Sacher Torte"> ';
images_vienna += '</div> ';
images_vienna += '<div class="column_e_k"> ';
images_vienna += '<img src="pictures/Wieden_sznycel.JPG" class="d-block_e_k" alt="Sacher Torte"> ';
images_vienna += '</div> ';

function unblock_corfu()
{
    document.querySelector('#corfu_2').innerHTML = "<a class=\"page-link\" href=\"#\">Corfu</a>";
    document.getElementById("corfu_2").className = "page-item";
}

function unblock_lanzarote()
{
    document.querySelector('#lanzarote_2').innerHTML = "<a class=\"page-link\" href=\"#\">Lanzarote</a>";
    document.getElementById("lanzarote_2").className = "page-item";
}

function unblock_madeira()
{
    document.querySelector('#madeira_2').innerHTML = "<a class=\"page-link\" href=\"#\">Madeira</a>";
    document.getElementById("madeira_2").className = "page-item";
}

function unblock_london()
{
    document.querySelector('#london_2').innerHTML = "<a class=\"page-link\" href=\"#\">London</a>";
    document.getElementById("london_2").className = "page-item";
}

function unblock_vienna()
{
    document.querySelector('#vienna_2').innerHTML = "<a class=\"page-link\" href=\"#\">Vienna</a>";
    document.getElementById("vienna_2").className = "page-item";
}




function lanzarote()
{
    document.querySelector('#title_e_k').innerHTML = "Lanzarote";
    document.querySelector('#text_e_k').innerHTML = text_lanzarote;
    document.querySelector('.column_e_k').style.width = "33.33%";
    document.getElementById("images_e_k").innerHTML = images_lanzarote;

    document.querySelector('#lanzarote_2').innerHTML = "<span class=\"page-link\">Lanzarote<span class=\"sr-only\">(current)</span></span>";
    document.getElementById("lanzarote_2").className = "page-item active";

    unblock_corfu();
    unblock_madeira();
    unblock_london();
    unblock_vienna();

}

function corfu()
{
    document.querySelector('#title_e_k').innerHTML = "Corfu";
    document.querySelector('#text_e_k').innerHTML = text_corfu;
    document.querySelector('.column_e_k').style.width = "50%";
    document.getElementById("images_e_k").innerHTML = images_corfu;

    document.querySelector('#corfu_2').innerHTML = "<span class=\"page-link\">Corfu<span class=\"sr-only\">(current)</span></span>";
    document.getElementById("corfu_2").className = "page-item active";

    unblock_lanzarote();
    unblock_madeira();
    unblock_london();
    unblock_vienna();
}

function madeira()
{
    document.querySelector('#title_e_k').innerHTML = "Madeira";
    document.querySelector('#text_e_k').innerHTML = text_madeira;
    document.querySelector('.column_e_k').style.width = "33.33%";
    document.getElementById("images_e_k").innerHTML = images_madeira;


    document.querySelector('#madeira_2').innerHTML = "<span class=\"page-link\">Madeira<span class=\"sr-only\">(current)</span></span>";
    document.getElementById("madeira_2").className = "page-item active";

    unblock_lanzarote();
    unblock_corfu();
    unblock_london();
    unblock_vienna();
}

function london()
{
    document.querySelector('#title_e_k').innerHTML = "London";
    document.querySelector('#text_e_k').innerHTML = text_london;
    document.querySelector('.column_e_k').style.width = "50%";
    document.getElementById("images_e_k").innerHTML = images_london;


    document.querySelector('#london_2').innerHTML = "<span class=\"page-link\">London<span class=\"sr-only\">(current)</span></span>";
    document.getElementById("london_2").className = "page-item active";

    unblock_lanzarote();
    unblock_corfu();
    unblock_madeira();
    unblock_vienna();
}

function vienna()
{
    document.querySelector('#title_e_k').innerHTML = "Vienna";
    document.querySelector('#text_e_k').innerHTML = text_vienna;
    document.querySelector('.column_e_k').style.width = "50%";
    document.getElementById("images_e_k").innerHTML = images_vienna;


    document.querySelector('#vienna_2').innerHTML = "<span class=\"page-link\">Vienna<span class=\"sr-only\">(current)</span></span>";
    document.getElementById("vienna_2").className = "page-item active";

    unblock_lanzarote();
    unblock_corfu();
    unblock_madeira();
    unblock_london();
}



document.addEventListener('DOMContentLoaded', function() {

    document.querySelector('#lanzarote_2').addEventListener('click',  function(){
        lanzarote();
    });

    document.querySelector('#corfu_2').addEventListener('click',  function(){
        corfu();
    });

    document.querySelector('#madeira_2').addEventListener('click',  function(){
        madeira();
    });

    document.querySelector('#london_2').addEventListener('click',  function(){
        london();
    });

    document.querySelector('#vienna_2').addEventListener('click',  function(){
        vienna();
    });

});