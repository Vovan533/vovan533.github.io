var main_html = `
<section id='main_map'>
      <h2> Карта событий</h2>
      <div class="interactive_map">
        <div class="map_img" id="main_map"></div>
        <div class="map_years_box">
          <a class="interactive_map_year_button" id='main_1917'>1917</a>
          <a class="interactive_map_year_button" id='main_1918'>1918</a>
          <a class="interactive_map_year_button" id='main_1919'>1919</a>
          <a class="interactive_map_year_button" id='main_1920'>1920</a>
        </div>
      </div>
</section>

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

<section id='actions'>
    <h2> События</h2>
    <p>Не очень много текста о событиях...</p>
    <p>Не очень много текста о событиях...</p>
    <a id="actions" href="actions.html">Перейти на страницу с событиями</a>
</section>

<section id='generals'>
    <h2> Генералы</h2>
    <p>Не очень много текста о генералах...</p>
    <p>Не очень много текста о генералах...</p>
    <a id="generals" href="generals.html">Перейти на страницу с генералами</a>
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
var actions_html = `
<section id='generals'>
    <h2> Генералы</h2>
    <p>Не очень много текста о генералах...</p>
    <p>Не очень много текста о генералах...</p>
    <a id="generals" href="generals.html">Перейти на страницу с генералами</a>
</section>
`
var generals_html = `
<section id='actions'>
    <h2> События</h2>
    <p>Не очень много текста о событиях...</p>
    <p>Не очень много текста о событиях...</p>
    <a id="actions" href="actions.html">Перейти на страницу с событиями</a>
</section>
`

function load_info(){
    document.getElementById("wr").innerHTML = info_html;
    button = document.getElementsByClassName("header_button_active")[0]
    button.classList.add("header_button")
    button.classList.remove("header_button_active")
    f_button = document.getElementById("info")
    f_button.classList.add("header_button_active")
    f_button.classList.remove("header_button")
};

function load_main(){
    document.getElementById("wr").innerHTML = main_html;
    button = document.getElementsByClassName("header_button_active")[0]
    button.classList.add("header_button")
    button.classList.remove("header_button_active")
    f_button = document.getElementById("home")
    f_button.classList.add("header_button_active")
    f_button.classList.remove("header_button")
};

function load_actions(){
    document.getElementById("wr").innerHTML = actions_html;
    button = document.getElementsByClassName("header_button_active")[0]
    button.classList.add("header_button")
    button.classList.remove("header_button_active")
    f_button = document.getElementById("actions")
    f_button.classList.add("header_button_active")
    f_button.classList.remove("header_button")
};

document.getElementById("info").onclick = load_info();

document.getElementById("home").onclick = load_main();

document.getElementById("actions_href").onclick = load_actions();