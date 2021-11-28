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
<section>
    <h2> Генерал 1</h2>
    <p>Не очень много текста о генерале 1...</p>
    <p>Не очень много текста о генерале 1...</p>
    <p>Не очень много текста о генерале 1...</p>
</section>
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
        <div class="map_img" id="map1917"></div>
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
        <div class="map_img" id="map192o"></div>
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


function update(selector) {
    var newdoc = new DOMParser().parseFromString(start_block_html + cur_year + main_html, 'text/html');
    document.querySelector(selector).outerHTML = newdoc.querySelector(selector).outerHTML;
};

function load_info(){
    document.getElementById("wr").innerHTML = start_block_html + info_html;
    document.getElementById("scrool_to").scrollIntoView();
    button = document.getElementsByClassName("header_button_active")[0]
    button.classList.add("header_button")
    button.classList.remove("header_button_active")
    f_button = document.getElementById("info")
    f_button.classList.add("header_button_active")
    f_button.classList.remove("header_button")
};

function load_actions(){
    document.getElementById("wr").innerHTML = start_block_html + actions_html;
    document.getElementById("scrool_to").scrollIntoView();
    button = document.getElementsByClassName("header_button_active")[0]
    button.classList.add("header_button")
    button.classList.remove("header_button_active")
    f_button = document.getElementById("actions")
    f_button.classList.add("header_button_active")
    f_button.classList.remove("header_button")
};

function load_generals(){
    document.getElementById("wr").innerHTML = start_block_html + generals_html;
    document.getElementById("scrool_to").scrollIntoView();
    button = document.getElementsByClassName("header_button_active")[0]
    button.classList.add("header_button")
    button.classList.remove("header_button_active")
    f_button = document.getElementById("generals")
    f_button.classList.add("header_button_active")
    f_button.classList.remove("header_button")
};

function load_main(){
    alert("load_main")
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
    return false;
};

// nav buttons

document.getElementById("info").onclick = load_info;

document.getElementById("home").onclick = load_main;

document.getElementById("actions").onclick = load_actions;

document.getElementById("generals").onclick = load_generals;

// section href buttons

document.getElementById("actions_href").onclick = load_actions;

document.getElementById("generals_href").onclick = load_generals;

// map year buttons
var b1917 = document.getElementById("main_1917");
var b1918 = document.getElementById("main_1918");
var b1919 = document.getElementById("main_1919");
var b1920 = document.getElementById("main_1920");

function detect_buttons(){
    b1917 = document.getElementById("main_1917");
    b1918 = document.getElementById("main_1918");
    b1919 = document.getElementById("main_1919");
    b1920 = document.getElementById("main_1920");
};

b1917.onclick = function(){
    alert('1917')
    let old_active = document.getElementsByClassName("interactive_map_year_button_active")[0];
    old_active.classList.add("interactive_map_year_button");
    old_active.classList.remove("interactive_map_year_button_active")
    b1917.classList.add("interactive_map_year_button_active");
    b1917.classList.remove("interactive_map_year_button");
    cur_year = y1917_html;
    load_main();
    detect_buttons();
};

b1918.onclick = function(){
    let old_active = document.getElementsByClassName("interactive_map_year_button_active")[0];
    old_active.classList.add("interactive_map_year_button");
    old_active.classList.remove("interactive_map_year_button_active")
    b1918.classList.add("interactive_map_year_button_active");
    b1918.classList.remove("interactive_map_year_button");
    cur_year = y1918_html;
    load_main();
    detect_buttons();
};

document.getElementById("main_1919").onclick = function load_y1917(){
    let old_active = document.getElementsByClassName("interactive_map_year_button_active")[0];
    old_active.classList.add("interactive_map_year_button");
    old_active.classList.remove("interactive_map_year_button_active")
    b1919.classList.add("interactive_map_year_button_active");
    b1919.classList.remove("interactive_map_year_button");
    cur_year = y1919_html;
    load_main();
    detect_buttons();
};

document.getElementById("main_1920").onclick = function load_y1917(){
    let old_active = document.getElementsByClassName("interactive_map_year_button_active")[0];
    old_active.classList.add("interactive_map_year_button");
    old_active.classList.remove("interactive_map_year_button_active")
    b1920.classList.add("interactive_map_year_button_active");
    b1920.classList.remove("interactive_map_year_button");
    cur_year = y1920_html;
    load_main();
    detect_buttons();
};