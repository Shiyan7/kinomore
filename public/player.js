/* Kinomore player */

// Функция для управления плеером с пульта управления на устройствах Android / etc.
function kinobd_key(event) {
    if (!event || (!event.key && !event.keyCode)) return;
    var key = '';
    ('Enter' === event.key) || (13 === event.keyCode ? key = 'fullscreen' : 'Left' === event.key) || ('ArrowLeft' === event.key) || (37 === event.keyCode ? key = 'prev' : 'Right' === event.key) || ('ArrowRight' === event.key) || (39 === event.keyCode ? key = 'next' : 'Up' === event.key) || ('ArrowUp' === event.key) || (38 === event.keyCode ? key = 'up' : 'Down' === event.key) || ('ArrowDown' === event.key) || (40 === event.keyCode ? key = 'down' : '0' === event.key) || (48 === event.keyCode ? key = '0' : '1' === event.key) || (49 === event.keyCode ? key = '1' : '2' === event.key) || (50 === event.keyCode ? key = '2' : '3' === event.key) || (51 === event.keyCode ? key = '3' : '4' === event.key) || (52 === event.keyCode ? key = '4' : '5' === event.key) || (53 === event.keyCode ? key = '5' : '6' === event.key) || (54 === event.keyCode ? key = '6' : '7' === event.key) || (55 === event.keyCode ? key = '7' : '8' === event.key) || (56 === event.keyCode ? key = '8' : '9' !== event.key) && (57 !== event.keyCode) || (key = '9');
    if (key && (key === 'up' || key === 'down')) {
        var a = document.querySelector('.kinobd-active');
        if (a && a.dataset && a.dataset.event && parseInt(a.dataset.event)) {
            var u = key === 'up' ?
                document.querySelector('[data-event="' + (parseInt(a.dataset.event) - 1) + '"]:not([style*="display:none"]):not([style*="display: none"]') :
                document.querySelector('[data-event="' + (parseInt(a.dataset.event) + 1) + '"]:not([style*="display:none"]):not([style*="display: none"]');
            if (!u && key === 'up') {
                var p = document.querySelector('[data-event="prev"]:not([style*="display:none"]):not([style*="display: none"]');
                if (p && typeof p.onclick === 'function') {
                    p.onclick.apply(p);
                }
            } else if (!u && key === 'down') {
                var n = document.querySelector('[data-event="next"]:not([style*="display:none"]):not([style*="display: none"]');
                if (n && typeof n.onclick === 'function') {
                    n.onclick.apply(n);
                }
            } else if (u && typeof u.onclick === 'function') {
                u.onclick.apply(u);
            }
        }
    } else if (key && key === 'fullscreen') {
        kb_fullscreen();
    } else {
        var e = document.querySelectorAll('[data-event]:not([style*="display:none"]):not([style*="display: none"]');
        if (e && e.length) {
            for (var i = 0; i < e.length; i++) {
                if (key && e[i].dataset.event === key && typeof e[i].onclick === 'function') {
                    e[i].onclick.apply(e[i]);
                    return;
                }
            }
        }
    }
}

function kbp(self) {
    var h, a, w, i, l, y, s, t = false,
        p = '';

    // y - div в котором будет подгружаться плеер
    // h - высота окна
    // a -
    // w -
    // i -
    // l -
    // s -
    // t -
    //var date1 = new Date();
    //var date2 = new Date('2021-10-21');
    //var tld = date1 > date2 ? 'cc' : 'online';

    var sel = self && self.getAttribute('data-kbd') ?
        self.getAttribute('data-kbd') :
        'kinobd';

    y = document.querySelector('#' + sel);
    if (!y) {
        y = document.querySelector('#kinobd-online');
        if (!y) {
            y = document.querySelector('#kinobd-torrent');
            if (!y) {
                return false;
            } else {
                t = true;
            }
        }
    }

    var kinobd = document.createElement('div');
    var attr = Array.prototype.slice.call(y.attributes);
    while ((a = attr.pop())) {
        kinobd.setAttribute(a.nodeName, a.nodeValue);
    }
    kinobd.innerHTML = y.innerHTML;
    y.parentNode.replaceChild(kinobd, y);

    var options = [].slice.call(kinobd.attributes).reduce(function(o, a) {
        return /^data-/.test(a.name) && (o[a.name.substr(5)] = decodeURIComponent(a.value)), o;
    }, {});

    if (self && self.attributes) {
        [].slice.call(self.attributes).reduce(function(o, a) {
            if (/^data-/.test(a.name)) {
                options[a.name.substr(5)] = decodeURIComponent(a.value);
            }
        }, {});
    }

    if ((options.title && /трейлер|trailer|teaser/i.test(options.title)) || t) {
        options.player = 'trailer';
    }

    options.player = ((options.title && /трейлер|trailer|teaser/i.test(options.title)) || t) ?
        'trailer' :
        options.player ?
        options.player :
        'kodik,collaps,bazon,alloha,lookbase,hdvb,videocdn,iframe,pleer,ustore,cdnmovies,kholobok,kinotochka,trailer,vk,ext,nf';

    var bg = (options.bg && options.bg.replace(/[^0-9a-z]/ig, '')) ?
        options.bg.replace(/[^0-9a-z]/ig, '') :
        '2A3440';

    var options_url = options.url ?
        decodeURIComponent(options.url).trim() + (decodeURIComponent(options.url).indexOf('?') + 1 ? '&' : '?') + 'cache' + Math.random().toString().substr(2, 3) :
        'https://kinobd.ru/playerdata?c' + Math.random().toString().substr(2, 3);
    options.url = null;

    var options_loading = options.loading ?
        decodeURIComponent(options.loading).trim() :
        'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjAiIHdpZHRoPSIxMDBweCIgaGVpZ2h0PSIxMDBweCIgdmlld0JveD0iMCAwIDEyOCAxMjgiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPjxwYXRoIGQ9Ik0uNiA1Ny41NGM1LjczLTYuMjMgMTcuMzMtMTUuNSAzMy42Ni0xMi4zNUM1NS40IDQ4LjUgNjQgNjMuOTUgNjQgNjMuOTVTNDIuNDIgNjUgMzAuMjggODMuNjNhMzguNjMgMzguNjMgMCAwIDAtMy40IDMyLjE1IDY0LjQ3IDY0LjQ3IDAgMCAxLTUuNTItNC40NEE2My42NCA2My42NCAwIDAgMSAuNiA1Ny41NHoiIGZpbGw9IiNmZmNiMDIiLz48cGF0aCBkPSJNNjUuMzIgMjkuMDVjNy42NSAxOS45OC0xLjQ0IDM1LjE4LTEuNDQgMzUuMThTNTIuMiA0Ni4wNSAzMC4wMyA0NC44NUEzOC42IDM4LjYgMCAwIDAgLjU2IDU3LjkzIDYzLjggNjMuOCAwIDAgMSAzNy41NiA2YzguMiAxLjggMjIuMjYgNy4xNiAyNy43NiAyMy4wNXoiIGZpbGw9IiNmZjllMDIiLz48cGF0aCBkPSJNOTQuOTIgNDcuN2MtMTMuNDggMTYuNjMtMzEuMiAxNi4zNi0zMS4yIDE2LjM2czkuOTItMTkuMi0uMTMtMzlhMzguNiAzOC42IDAgMCAwLTI2LjE4LTE5IDYzLjc4IDYzLjc4IDAgMCAxIDYzLjUyIDYuMDNjMi41NiA4IDQuOTggMjIuODUtNi4wNSAzNS42eiIgZmlsbD0iI2ZmNGI0MiIvPjxwYXRoIGQ9Ik05My41MiA4Mi41M0M3Mi4zOCA3OS4xNyA2My43NSA2My43IDYzLjc1IDYzLjdzMjEuNi0xLjAyIDMzLjctMTkuNjNhMzguNiAzOC42IDAgMCAwIDMuNDMtMzIuMDQgNjQuMzMgNjQuMzMgMCAwIDEgNS43NCA0LjYgNjMuNjMgNjMuNjMgMCAwIDEgMjAuODIgNTMuMjZjLTUuNjIgNi4yLTE3LjM0IDE1LjgtMzMuOTQgMTIuNnoiIGZpbGw9IiNjMDYzZDYiLz48cGF0aCBkPSJNNjIuNSA5OWMtNy42NS0xOS45OCAxLjQ0LTM1LjE3IDEuNDQtMzUuMTdTNzUuNTYgODEuNiA5Ny43NCA4Mi44YTM5LjEgMzkuMSAwIDAgMCAyOS43My0xMy4wMyA2My44IDYzLjggMCAwIDEtMzcuMTYgNTIuM2MtOC4yLTEuOC0yMi4yNS03LjE1LTI3LjgtMjMuMDZ6IiBmaWxsPSIjMTdhNGY2Ii8+PHBhdGggZD0iTTI2LjY0IDExNS42M0MyNCAxMDcuNiAyMS42IDkzLjA2IDMyLjUgODAuNWMxMy40OC0xNi42MiAzMS41OC0xNi41NSAzMS41OC0xNi41NXMtOS42IDE5LjA2LjQ0IDM4Ljg2YTM4LjgyIDM4LjgyIDAgMCAwIDI2LjA1IDE5LjE3IDYzLjc4IDYzLjc4IDAgMCAxLTYzLjkzLTYuM3oiIGZpbGw9IiM0ZmNhMjQiLz48YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InJvdGF0ZSIgZnJvbT0iMCA2NCA2NCIgdG89IjM2MCA2NCA2NCIgZHVyPSIxNTAwbXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIj48L2FuaW1hdGVUcmFuc2Zvcm0+PC9nPjwvc3ZnPg==';
    options.loading = null;

    var language = (options.language && !/ru/i.test(options.language)) ? {
        "trailer": "TRAILER",
        "torrent": "DOWNLOAD",
        "lookbase": "Ukrainian translation",
        "nf" : "NOT FOUND",
        "next": "NEXT",
        "prev": "PREV"
    } : {
        "trailer": "ТРЕЙЛЕР",
        "torrent": "СКАЧАТЬ",
        "lookbase": "Украинский перевод",
        "nf" : "НЕ НАЙДЕНО",
        "next": "ВПЕРЕД",
        "prev": "НАЗАД"
    };

    var btns = {};
    options.button = (options.button) ?
        options.button :
        'videocdn: {Q} {T}, hdvb: {Q} {T}, bazon: {Q} {T}, ustore: {Q} {T}, alloha: {Q} {T}, kodik: {Q} {T}, iframe: {Q} {T}, collaps: {Q} {T}, kinotochka: {Q} {T}, cdnmovies: {Q} {T}';
    if (options.button) {
        options.button.split(',').forEach(function(button) {
            var btn = button.split(':');
            if (btn.length === 2 && btn[0] && btn[1]) {
                btns[btn[0].trim().toLowerCase()] = btn[1].trim();
            }
        });
    }
    options.button_limit = (options.button_limit && parseInt(options.button_limit) < 5) ?
        parseInt(options.button_limit) :
        5;
    options.button_size = (options.button_size && parseFloat(options.button_size)) ?
        parseFloat(options.button_size) :
        1;
    options.separator = (options.separator) ?
        options.separator :
        ',';

    for (var data in options) {
        if (options.hasOwnProperty(data) && options[data]) {
            p += (p) ?
                '&' + data + '=' + encodeURIComponent(options[data]) :
                data + '=' + encodeURIComponent(options[data]);
        } else {
            options[data] = '';
        }
    }

    if (!options.kinopoisk && !options.title && !options.imdb && !options.tmdb && !options.inid) {
        return false;
    }

    //const kinopoisk = options.kinopoisk;
    //const title = options.title;
    //const inid = options.inid;
    //const tmdb = options.tmdb;
    //const imdb = options.imdb;

    if (options.tv) {
        document.addEventListener('keydown', kinobd_key);
    }

    if (options.resize) {
        window.addEventListener('orientationchange', kb_resize, false);
        window.addEventListener('resize', kb_resize, false);
    }

    var kinobd_loading = document.querySelector('#kinobd-loading');
    if (kinobd_loading) {
        kinobd_loading.parentNode.removeChild(kinobd_loading);
    }
    var kinobd_buttons = document.querySelector('#kinobd-buttons');
    if (kinobd_buttons) {
        kinobd_buttons.parentNode.removeChild(kinobd_buttons);
    }
    var kinobd_iframe = document.querySelector('#kinobd-iframe');
    if (kinobd_iframe) {
        kinobd_iframe.parentNode.removeChild(kinobd_iframe);
    }
    var data_kbd = document.querySelectorAll('[data-kbd]');
    for (var da in data_kbd) {
        if (data_kbd.hasOwnProperty(da) && data_kbd[da]) {
            var kinobd_da = document.querySelector('#' + data_kbd[da].getAttribute('data-kbd'));
            if (kinobd_da) {
                kinobd_da.removeAttribute('style');
            }
        }
    }

    var head = document.head || document.getElementsByTagName('head')[0];
    var css = '#kinobd-loading{z-index:9999;position:absolute;left:0;top:0;width:100%;height:100%;background:#' + bg + ' url(' + options_loading + ') 50% 50% no-repeat}#kinobd-buttons{position:absolute;z-index:9999;right:0;top:30px;text-align:left}#kinobd-buttons:hover{right:0!important}#kinobd-buttons div{font-family:Verdana,sans-serif;font-weight:normal;text-shadow:none;line-height:normal;font-size:' + 12 * options.button_size + 'px;color:#fff;background:#' + bg + ';border-radius:5px 0 0 5px;padding:10px;margin:5px 0 5px 5px;opacity:.7;}#kinobd-buttons div:hover,#kinobd-buttons div.kinobd-active{color:#fff;background:#' + bg + ';cursor:pointer;opacity:1}';
    s = document.createElement('style');
    s.type = 'text/css';
    if (s.styleSheet) {
        s.styleSheet.cssText = css;
    } else {
        s.appendChild(document.createTextNode(css));
    }
    head.appendChild(s);

    l = document.createElement('div');
    l.setAttribute('id', 'kinobd-loading');
    kinobd.innerHTML = '';
    kinobd.appendChild(l);

    i = document.createElement('iframe');
    i.setAttribute('id', 'kinobd-iframe');
    i.setAttribute('frameborder', '0');
    i.setAttribute('allowfullscreen', 'allowfullscreen');
    kinobd.appendChild(i);


    if (parseInt(kinobd.offsetWidth)) {
        w = parseInt(kinobd.offsetWidth);
    } else if (kinobd.parentNode && parseInt(kinobd.parentNode.offsetWidth)) {
        w = parseInt(kinobd.parentNode.offsetWidth);
    } else {
        w = 610;
    }


    if (kinobd.parentNode && kinobd.parentNode.tagName && kinobd.parentNode.tagName.toLowerCase() === 'body') {
        h = Math.max( document.body.scrollHeight,
                      document.body.offsetHeight,
                      document.documentElement.clientHeight,
                      document.documentElement.scrollHeight,
                      document.documentElement.offsetHeight );
    } else if (parseInt(kinobd.offsetHeight) && parseInt(kinobd.offsetHeight) < 370) {
        if (kinobd.parentNode && parseInt(kinobd.parentNode.offsetHeight) && parseInt(kinobd.parentNode.offsetHeight) >= 370) {
            h = parseInt(kinobd.parentNode.offsetHeight);
        } else {
            h = 370;
        }
    } else if (parseInt(kinobd.offsetHeight) && w / 3 < parseInt(kinobd.offsetHeight)) {
        h = parseInt(kinobd.offsetHeight);
    } else if (kinobd.parentNode && parseInt(kinobd.parentNode.offsetHeight) && w / 3 < parseInt(kinobd.parentNode.offsetHeight)) {
        h = parseInt(kinobd.parentNode.offsetHeight);
    } else {
        h = w / 2;
    }

    var style = 'width:100%;height:' + h + 'px;border:0;margin:0;padding:0;overflow:hidden;position:relative;';
    //var style = 'width:100%;height:100%;border:0;margin:0;padding:0;overflow:hidden;position:relative;';
    //var style = 'width:100%;height:100%;border:0;margin:0;padding:0;overflow:hidden;position:relative;';
    i.setAttribute('style', style);
    i.setAttribute('width', w);
    i.setAttribute('height', h);
    kinobd.setAttribute('style', style);

    kb_get(options_url, p,
        function(players) {
            var first = true;
            var buttons = document.createElement('div');
            buttons.setAttribute('id', 'kinobd-buttons');
            var keys = options.player.split(options.separator);
            if (/\/\/|%2F%2F/i.test(options.player)) {
                var p = [];
                for (var k = 0; k < keys.length; k++) {
                    var re = keys[k].match(/^(.*?)(http.*|\/\/.*)$/i);
                    if (!re || !re[1] || !re[1].trim()) continue;
                    p.push(re[1].trim());
                }
                if (p.length) {
                    keys = p;
                } else {
                    var kb_res = Object.keys(players);
                    var kb_new = [];
                    for (var ps = 0; ps < keys.length; ps++) {
                        for (var pp = 0; pp < kb_res.length; pp++) {
                            if (keys[ps].toLowerCase().indexOf(kb_res[pp].toLowerCase()) + 1) {
                                kb_new.push(kb_res[pp]);
                            }
                        }
                    }
                    keys = kb_new;
                }
            }
            var j = 0;
            for (var i = 0, len = keys.length; i < len; i++) {
                var key = keys[i].toLowerCase().trim();
                if (players.hasOwnProperty(key) && players[key] && players[key].iframe) {
                    players[key].quality = (players[key].quality) ?
                        players[key].quality.replace(/"/g, '\'') :
                        '';
                    players[key].translate = (players[key].translate) ?
                        players[key].translate.replace(/"/g, '\'') :
                        '';
                    var option = document.createElement('div');
                    option.setAttribute('onclick', 'kb_player("' + encodeURIComponent(players[key].iframe) +
                                                                    '", "' +
                                                                    players[key].quality +
                                                                    '", "' +
                                                                    players[key].translate +
                                                                    '", this, "' +
                                                                    options.button_size +
                                                                    '", null, "' + key + '")');
                    option.dataset.event = '' + (j + 1);
                    option.dataset.page = Math.ceil((j + 1) / options.button_limit) + '';
                    option.dataset.iframe = players[key].iframe;
                    option.dataset.quality = players[key].quality;
                    option.dataset.translate = players[key].translate;
                    if (btns.hasOwnProperty(key) && btns[key]) {
                        var q = (players[key].quality) ?
                            (players[key].quality.toUpperCase().search(/TS|TC|SCR|CAM/gi) + 1) ?
                            'ЭКРАН' :
                            (players[key].quality.toUpperCase().search(/720P/gi) + 1) ?
                            '720P' :
                            (players[key].quality.toUpperCase().search(/1080P/gi) + 1) ?
                            '1080P' :
                            players[key].quality
                            .toUpperCase()
                            .replace(/\s?ХОРОШЕЕ\s?|\s?СРЕДНЕЕ\s?|\s?ПЛОХОЕ\s?/gi, '') :
                            '';
                        var t = (players[key].translate) ?
                            /ДУБЛ/i.test(players[key].translate) ?
                            'ДУБЛЯЖ' :
                            /ПРОФ/i.test(players[key].translate) ?
                            'ПРОФ.' :
                            /ЛЮБИТ/i.test(players[key].translate) ?
                            'ЛЮБИТ.' :
                            /АВТОР/i.test(players[key].translate) ?
                            'АВТОР.' :
                            /МНОГОГОЛ/i.test(players[key].translate) ?
                            'МНОГОГОЛ.' :
                            /ОДНОГОЛ/i.test(players[key].translate) ?
                            'ОДНОГОЛ.' :
                            /ДВУХГОЛ/i.test(players[key].translate) ?
                            'ДВУХГОЛ.' :
                            /ОРИГИНАЛ/i.test(players[key].translate) ?
                            'ОРИГИНАЛ' :
                            /(ENG|ORIG|СУБТ)/i.test(players[key].translate) ?
                            options.language && /en/i.test(options.language) ?
                            'ENGLISH' :
                            'СУБТИТИРЫ' :
                            players[key].translate.toUpperCase() :
                            '';
                        j++;
                        btns[key] = btns[key]
                            .replace('{N}', j)
                            .replace('{Q}', q)
                            .replace('{T}', t)
                            .replace(/\s+/g, ' ')
                            .replace(/(^\s*)|(\s*)$/g, '');
                        btns[key] = (btns[key]) ? btns[key] : key.toUpperCase();
                        option.innerText = j + '✨ ' + btns[key];
                    } else if (key === 'trailer') {
                        j++;
                        option.innerText = j + '✨ ' + language.trailer.toUpperCase();
                    } else if (key === 'torrent') {
                        j++;
                        option.innerText = j + '✨ ' + language.torrent.toUpperCase();
                    } else if (key === 'vk') {
                        j++;
                        option.innerText = j + '✨ ' + language.vk.toUpperCase();
                    } else if (key === 'nf') {
                        j++;
                        option.innerText = j + '✨ ' + language.nf.toUpperCase();
                    } else if (key === 'lookbase') {
                        j++;
                        option.innerText = j + '✨ ' + language.lookbase.toUpperCase();
                    } else {
                        j++;
                        option.innerText = j + '✨ ' + key.toUpperCase();
                    }
                    if (first) {
                        kb_player(players[key].iframe, players[key].quality, players[key].translate, option, buttons, options.button_size, key);
                        first = false;
                    }
                    buttons.appendChild(option);
                    if (j && !(j % options.button_limit) && players[keys[i + 1].toLowerCase().trim()] && players[keys[i - 1].toLowerCase().trim()]){
                        var next = document.createElement('div');
                            next.setAttribute('onclick', 'kb_page(' + Math.ceil((j + 1) / options.button_limit) +
                                                              ', "' +
                                                              options.button_size +
                                                              '");' +
                                                              'kb_player("' +
                                                              encodeURIComponent(players[keys[i + 1].toLowerCase().trim()].iframe) +
                                                              '", "' +
                                                              players[keys[i + 1].toLowerCase().trim()].quality +
                                                              '", "' +
                                                              players[keys[i + 1].toLowerCase().trim()].translate +
                                                              '", document.querySelector(\'[data-event="' + (j + 1) + '"]\'), "' +
                                                              options.button_size + '", "' +
                                                              keys[i + 1] + '")');


                        next.dataset.event = 'next';
                        next.dataset.page = Math.ceil(j / options.button_limit) + '';
                        next.innerText = '-✨ ' + language.next;
                        buttons.appendChild(next);

                        var prev = document.createElement('div');
                        prev.setAttribute('onclick', 'kb_page(' + Math.ceil(j / options.button_limit) + ', "' + options.button_size + '");' +
                                                      'kb_player("' + encodeURIComponent(players[keys[i - 1].toLowerCase().trim()].iframe) +
                                                      '", "' +
                                                      players[keys[i - 1].toLowerCase().trim()].quality +
                                                      '", "' +
                                                      players[keys[i - 1].toLowerCase().trim()].translate +
                                                      '", document.querySelector(\'[data-event="' + (j) + '"]\'), "' +
                                                      options.button_size + '", "' +
                                                      keys[i + 1] + '")');
                        prev.dataset.event = 'prev';
                        prev.dataset.page = Math.ceil((j + 1) / options.button_limit) + '';
                        prev.innerText = '◄- ' + language.prev;
                        buttons.appendChild(prev);
                    }
                }
            }
            if (j < 1) {
                var kinobdLoading = document.querySelector('#kinobd-loading');
                kinobdLoading.style.display = 'none';
            } else if (j > 1) {
                kinobd.appendChild(buttons);
                if (keys.length > options.button_limit) {
                    kb_page(1, options.button_size);
                }
            }
        });

}

function kb_player(iframe, quality, translate, element, buttons, size, provider) {
    window.parent.postMessage({
        "quality": quality,
        "translate": translate
    }, "*");
    var kinobdLoading = document.querySelector('#kinobd-loading');
    if(kinobdLoading) {
        kinobdLoading.style.display = 'block';
        setTimeout(function() {
            kinobdLoading.style.display = 'none';
        }, 1000);
    }
    var kinobdIframe = document.querySelector('#kinobd-iframe');

    var loadtime = null;
    var load_start = Date.now();
    if(kinobdIframe) {
        kinobdIframe.onload = function(){ 
            var load_end = Date.now();
            var loadtime = load_end - load_start;
            kb_ping(provider, loadtime);
        }
        kinobdIframe.style.display = 'block';
        if (iframe.indexOf('nf') + 1) {
            kb_get(decodeURIComponent(iframe), '', function(json, html) {
                kinobdIframe.setAttribute('src', 'data:text/html;charset=utf-8,' + encodeURIComponent(html));
            });
        } else {
            kinobdIframe.setAttribute('src', decodeURIComponent(iframe));
        }
        kinobdIframe.setAttribute('class', '');
    }
    if (typeof element.setAttribute === 'function') {
        var kinobdActive = document.querySelectorAll('.kinobd-active');
        if (kinobdActive) {
            for (var i = 0; i < kinobdActive.length; i++) {
                kinobdActive[i].setAttribute('class', '');
            }
        }
        element.setAttribute('class', 'kinobd-active');
    }
    var kinobdButtons = (buttons) ? buttons : document.querySelector('#kinobd-buttons');
    size = size ? parseFloat(size) : 1;
    if (kinobdButtons) {
        kinobdButtons.style = kinobdButtons.style ? kinobdButtons.style : {};
        if (kinobdButtons.style && typeof kinobdButtons.style === 'object') {
            kinobdButtons.style.right = '0';
        } else {
            kinobdButtons.style = {
                right: '0'
            };
        }
        setTimeout(function() {
            var btn = setInterval(function() {
                if (parseInt(kinobdButtons.style && kinobdButtons.style.right || '0') > -parseInt(kinobdButtons.offsetWidth) + (30 * size)) {
                    kinobdButtons.style.right = (parseInt(kinobdButtons.style.right) - 1) + 'px';
                } else {
                    clearInterval(btn);
                }
            }, 5);
        }, 5000);
    }
}

function kb_page(page, size) {
    var kinobdPages = document.querySelectorAll('div[data-page]');
    if (kinobdPages) {
        for (var i = 0; i < kinobdPages.length; i++) {
            kinobdPages[i].style.display = 'none';
        }
    }
    var kinobdPage = document.querySelectorAll('div[data-page="' + page + '"]');
    if (kinobdPage) {
        for (var j = 0; j < kinobdPage.length; j++) {
            kinobdPage[j].style.display = 'block';
        }
    }
    var kinobdButtons = document.querySelector('#kinobd-buttons');
    size = size ? parseFloat(size) : 1;
    if (kinobdButtons) {
        kinobdButtons.style.right = '0';
        setTimeout(function() {
            var btn = setInterval(function() {
                if (parseInt(kinobdButtons.style && kinobdButtons.style.right || '0') > -parseInt(kinobdButtons.offsetWidth) + (30 * size)) {
                    kinobdButtons.style.right = (parseInt(kinobdButtons.style.right) - 1) + 'px';
                } else {
                    clearInterval(btn);
                }
            }, 5);
        }, 5000);
    }
}

function kb_get(url, body, callback) {
    var KbXmlHttp = new XMLHttpRequest();
    KbXmlHttp.onreadystatechange = function() {
        if (KbXmlHttp.readyState === 4) {
            if (KbXmlHttp.status === 200) {
                callback(kb_json(KbXmlHttp.responseText), KbXmlHttp.responseText);
            } else {
                callback({}, '');
            }
        }
    };
    KbXmlHttp.open('POST', url, true);
    KbXmlHttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    KbXmlHttp.setRequestHeader('X-Re', window.location.href);
    KbXmlHttp.send(body);
}

function kb_ping(provider, loadtime = null) {

    var player = document.getElementById('kinobd');
    var inid = player.dataset.inid ? encodeURIComponent(player.dataset.inid) : '';
    var kinopoisk = player.dataset.kinopoisk ? encodeURIComponent(player.dataset.kinopoisk) : '';

    var body = ['inid=', inid, '&kinopoisk=', kinopoisk, '&provider=', provider, '&loadtime=', loadtime].join('');
    var KbXmlHttp = new XMLHttpRequest();
    KbXmlHttp.onreadystatechange = function() {
        if (KbXmlHttp.readyState === 4) {
            if (KbXmlHttp.status === 200) {
            } else {
            }
        }
    };
    KbXmlHttp.open('POST', 'https://kinobd.ru/ping', true);
    KbXmlHttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    KbXmlHttp.setRequestHeader('X-Re', window.location.href);
    KbXmlHttp.send(body);
}

function kb_json(jsonString) {
    try {
        var o = JSON.parse(jsonString);
        if (o && typeof o === "object") {
            return o;
        }
    } catch (e) {}
    return {};
}

function kb_fullscreen() {
    var isInFullScreen = (document.fullscreenElement) ||
        (document.webkitFullscreenElement) ||
        (document.mozFullScreenElement) ||
        (document.msFullscreenElement);

    var iframe = document.querySelector('#kinobd-iframe');
    if (!isInFullScreen) {
        if (iframe.requestFullscreen) {
            iframe.requestFullscreen();
        } else if (iframe.mozRequestFullScreen) {
            iframe.mozRequestFullScreen();
        } else if (iframe.webkitRequestFullScreen) {
            iframe.webkitRequestFullScreen();
        } else if (iframe.msRequestFullscreen) {
            iframe.msRequestFullscreen();
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    }
}

function kb_resize() {
    var yi = document.querySelector('#kinobd-iframe');
    if (!yi || !yi.parentNode || !yi.parentNode.parentNode || !yi.parentNode.parentNode.offsetWidth) return;
    var w = parseInt(yi.parentNode.parentNode.offsetWidth);
    yi.style.width = w + 'px';
    yi.setAttribute('width', w.toString());
    yi.parentNode.style.width = w + 'px';
}

window.onresize = function(event) {
    kb_resize()
};

(function() {
    var a = document.querySelectorAll('[data-kbd]');//
    if (a && a.length) {
        for (var i in a) {
            if (a.hasOwnProperty(i) && a[i]) {
                a[i].addEventListener('click', function() {
                    kbp(this);
                });
            }
        }
    } else {
        kbp();
    }
})();