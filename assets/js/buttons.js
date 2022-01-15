var start_block_html = `
<section id="scrool_to"></section>
`

var main_html = `
<section id='war'>
    <h2> Гражданская война на Дону</h2>
    <p>Много текста о гражданской войне...</p>
    <p>Много текста о гражданской войне...</p>
    <p>Много текста о гражданской войне...</p>
    <p>Много текста о гражданской войне...</p>
    <p>Много текста о гражданской войне...</p>
</section>

<section id='book'>
    <h2> О романе Тихий Дон</h2>
    <p>Много текста о романе...</p>
    <p>Много текста о романе...</p>
    <p>Много текста о романе...</p>
    <p>Много текста о романе...</p>
    <p>Много текста о романе...</p>
</section>

<section id='actions_section'>
      <h2> События</h2>
      <p>Не очень много текста о событиях...</p>
      <p>Не очень много текста о событиях...</p>
      <a id="actions_href" class="section_button">Перейти на страницу с событиями</a>
</section>

<section id='generals_section'>
      <h2> Генералы</h2>
      <p>Не очень много текста о генералах...</p>
      <p>Не очень много текста о генералах...</p>
      <a id="generals_href" class="section_button">Перейти на страницу с генералами</a>
</section>
`
var info_html = `
<section id='about_us'>
    <h2> О сайте</h2>
    <p>Не очень много текста о сайте...</p>
    <p>Не очень много текста о сайте...</p>
    <p>Не очень много текста о сайте...</p>
</section>
<section id='copirights'>
    <h2> Источники</h2>
    <p>Не очень много текста об источниках...</p>
    <p>Не очень много текста об источниках...</p>
    <p>Не очень много текста об источниках...</p>
</section>
`
var generals_html = `
<div class="general_div">
<section class ='general_short_info_section'>
    <img align='top' id='general_photo' src='https://upload.wikimedia.org/wikipedia/commons/1/1f/%D0%9B%D0%B5%D0%B2_%D0%94%D0%B0%D0%B2%D0%B8%D0%B4%D0%BE%D0%B2%D0%B8%D1%87_%D0%A2%D1%80%D0%BE%D1%86%D0%BA%D0%B8%D0%B9.jpg'>
    <p>Text</p>
</section>
<section class='general_info_section'>
    <h2>Главнокомандующие</h2>
    <h2>Антон Иванович Деникин</h2>
    <p>Не очень много текста о нем...</p>
    <p>Не очень много текста о нем...</p>
    <p>Не очень много текста о нем...</p>
    <p>Не очень много текста о нем...</p>
    <p>Не очень много текста о нем...</p>
    <p>Не очень много текста о нем...</p>
    <h2>Врангель Пётр Николаевич</h2>
    <p>Не очень много текста о нем...</p>
    <p>Не очень много текста о нем...</p>
    <p>Не очень много текста о нем...</p>
    <p>Не очень много текста о нем...</p>
    <p>Не очень много текста о нем...</p>
    <p>Не очень много текста о нем...</p>
</section>
</div>
<section>
    <h2> Генерал 2</h2>
    <p>Не очень много текста о генерале 2...</p>
    <p>Не очень много текста о генерале 2...</p>
    <p>Не очень много текста о генерале 2...</p>
</section>
`
var actions_html = `
<section>
    <h2> Событие 1</h2>
    <p>Не очень много текста о собитие 1...</p>
    <p>Не очень много текста о собитие 1...</p>
    <p>Не очень много текста о собитие 1...</p>
</section>
<section>
    <h2> Событие 2</h2>
    <p>Не очень много текста о собитие 2...</p>
    <p>Не очень много текста о собитие 2...</p>
    <p>Не очень много текста о собитие 2...</p>
</section>
`

var y1917_html = `
<section class="map_section" id='main_map'>
      <h2> Карта событий</h2>
      <div class="interactive_map">
        <div class="map_img" id="map1917"><object class="arrows_svg" id="arrows_svg_1917" data="./assets/img/test_year_map.svg" type="image/svg+xml"></object></div>
        <div class="map_years_box">
          <a class="interactive_map_year_button_active" id='main_1917'>1917</a>
          <a class="interactive_map_year_button" id='main_1918'>1918</a>
          <a class="interactive_map_year_button" id='main_1919'>1919</a>
          <a class="interactive_map_year_button" id='main_1920'>1920</a>
        </div>
      </div>
</section>
`

var y1918_html = `
<section class="map_section" id='main_map'>
      <h2> Карта событий</h2>
      <div class="interactive_map">
        <div class="map_img" id="map1918"></div>
        <div class="map_years_box">
          <a class="interactive_map_year_button" id='main_1917'>1917</a>
          <a class="interactive_map_year_button_active" id='main_1918'>1918</a>
          <a class="interactive_map_year_button" id='main_1919'>1919</a>
          <a class="interactive_map_year_button" id='main_1920'>1920</a>
        </div>
      </div>
</section>
`

var y1919_html = `
<section class="map_section" id='main_map'>
      <h2> Карта событий</h2>
      <div class="interactive_map">
        <div class="map_img" id="map1919"></div>
        <div class="map_years_box">
          <a class="interactive_map_year_button" id='main_1917'>1917</a>
          <a class="interactive_map_year_button" id='main_1918'>1918</a>
          <a class="interactive_map_year_button_active" id='main_1919'>1919</a>
          <a class="interactive_map_year_button" id='main_1920'>1920</a>
        </div>
      </div>
</section>
`

var y1920_html = `
<section class="map_section" id='main_map'>
      <h2> Карта событий</h2>
      <div class="interactive_map">
        <div class="map_img" id="map1920"></div>
        <div class="map_years_box">
          <a class="interactive_map_year_button" id='main_1917'>1917</a>
          <a class="interactive_map_year_button" id='main_1918'>1918</a>
          <a class="interactive_map_year_button" id='main_1919'>1919</a>
          <a class="interactive_map_year_button_active" id='main_1920'>1920</a>
        </div>
      </div>
</section>
`

var cur_year = y1917_html;

function hasClass(elem, className) {
    return elem.classList.contains(className);
}

function hasId(element) {
    res = typeof element.id != 'undefined';
    console.log(res);
    return res;
}


function load_info() {
    document.getElementById("wr").innerHTML = start_block_html + info_html;
    document.getElementById("scrool_to").scrollIntoView();
    button = document.getElementsByClassName("header_button_active")[0]
    button.classList.add("header_button")
    button.classList.remove("header_button_active")
    f_button = document.getElementById("info")
    f_button.classList.add("header_button_active")
    f_button.classList.remove("header_button")
};

function load_actions() {
    document.getElementById("wr").innerHTML = start_block_html + actions_html;
    document.getElementById("scrool_to").scrollIntoView();
    button = document.getElementsByClassName("header_button_active")[0]
    button.classList.add("header_button")
    button.classList.remove("header_button_active")
    f_button = document.getElementById("actions")
    f_button.classList.add("header_button_active")
    f_button.classList.remove("header_button")
};

function load_generals() {
    document.getElementById("wr").innerHTML = start_block_html + generals_html;
    document.getElementById("scrool_to").scrollIntoView();
    button = document.getElementsByClassName("header_button_active")[0]
    button.classList.add("header_button")
    button.classList.remove("header_button_active")
    f_button = document.getElementById("generals")
    f_button.classList.add("header_button_active")
    f_button.classList.remove("header_button")
};

function load_main() {
    old_c = document.getElementById("wr");
    new_c = document.createElement("div");
    new_c.classList.add('wrapper');
    new_c.id = 'wr';
    new_c.innerHTML = start_block_html + cur_year + main_html;
    document.getElementById("main_body").replaceChild(new_c, old_c);
    document.getElementById("scrool_to").scrollIntoView();
    button = document.getElementsByClassName("header_button_active")[0];
    button.classList.add("header_button");
    button.classList.remove("header_button_active");
    f_button = document.getElementById("home");
    f_button.classList.add("header_button_active");
    f_button.classList.remove("header_button");
    setup_svg_listener();
};



function load_map(element, year) {
    let old_active = document.getElementsByClassName("interactive_map_year_button_active")[0];
    old_active.classList.add("interactive_map_year_button");
    old_active.classList.remove("interactive_map_year_button_active")
    element.classList.add("interactive_map_year_button_active");
    element.classList.remove("interactive_map_year_button");
    cur_year = year;
    $('#wr').html(start_block_html + cur_year + main_html);
    document.getElementById("scrool_to").scrollIntoView();
    setup_svg_listener();
};


// buttons listener

document.addEventListener('click', function (e) {
    // nav buttons
    if (e.target.id == 'info') {
        console.log('clicked btn with id info')
        load_info();
    } else if (e.target.id == 'home') {
        load_main();
    } else if (e.target.id == 'actions') {
        load_actions();
    } else if (e.target.id == 'generals') {
        load_generals();
    }
    // section href buttons
    else if (e.target.id == 'actions_href') {
        load_actions();
    } else if (e.target.id == 'generals_href') {
        load_generals();
    }
    // map year buttons
    else if (e.target.id == 'main_1917') {
        load_map(e.target, y1917_html);
    } else if (e.target.id == 'main_1918') {
        load_map(e.target, y1918_html);
    } else if (e.target.id == 'main_1919') {
        load_map(e.target, y1919_html);
    } else if (e.target.id == 'main_1920') {
        load_map(e.target, y1920_html);
    }
    // map_arrows
    else if (e.target.id == 'arrows_svg_1917') {
        alert('arr')
    }
}, false);

/*document.addEventListener('mouseenter', function(e) {
    if (e.target.id == "arrow_1917_1"){
        alert(1)
        var svg = document.getElementById("arrows_svg_1917");
        var svgDoc = svg.contentDocument;
        var arrow = svgDoc.getElementById("arrow_1917_1");
        var color = arrow.style.fill
    }
}, false);*/

setup_svg_listener();

function setup_svg_listener(){

        //alert("Document loaded, including graphics and embedded documents (like SVG)");
        var a1917 = document.getElementById("arrows_svg_1917");
        var a1918 = document.getElementById("arrows_svg_1918");
        var a1919 = document.getElementById("arrows_svg_1919");
        var a1920 = document.getElementById("arrows_svg_1920");
    
        //get the inner DOM of alpha.svg
        try {
            var svgDoc = a1917.contentDocument;
            var ar1917_1 = svgDoc.getElementById("arrow_1917_1");
            var c1917_1 = ar1917_1.style.fill
            var ar1917_2 = svgDoc.getElementById("arrow_1917_2");
            var c1917_2 = ar1917_2.style.fill
            var ar1917_3 = svgDoc.getElementById("arrow_1917_3");
            var c1917_3 = ar1917_3.style.fill
            ar1917_1.addEventListener("mousedown", function(){arrow_pressed('1917_1')}, false);
            ar1917_1.addEventListener("mouseenter", function(){select_arrow(svgDoc, 'arrow_1917_1_path')}, false);
            ar1917_1.addEventListener("mouseleave", function(){deselect_arrow(svgDoc, 'arrow_1917_1_path', c1917_1)}, false);
            ar1917_2.addEventListener("mousedown", function(){arrow_pressed('1917_2')}, false);
            ar1917_2.addEventListener("mouseenter", function(){select_arrow(svgDoc, 'arrow_1917_2_path')}, false);
            ar1917_2.addEventListener("mouseleave", function(){deselect_arrow(svgDoc, 'arrow_1917_2_path', c1917_2)}, false);
            ar1917_3.addEventListener("mousedown", function(){arrow_pressed('1917_3')}, false);
            ar1917_3.addEventListener("mouseenter", function(){select_arrow(svgDoc, 'arrow_1917_3_path')}, false);
            ar1917_3.addEventListener("mouseleave", function(){deselect_arrow(svgDoc, 'arrow_1917_3_path', c1917_3)}, false);
        } finally {}
};

var select_color = '#00ADB5';

function select_arrow(doc, className) {
    doc.getElementsByClassName(className)[0].style.fill = select_color;
}

function deselect_arrow(doc, className, color) {
    doc.getElementsByClassName(className)[0].style.fill = color;
}

function arrow_pressed(ar_num){
    alert(ar_num + ' pressed');
}
