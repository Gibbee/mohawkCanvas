//ReadSpeaker webReader integration provided by ReadSpeaker
(function () {
    function t() {
        if (rspkr.cfg.item("general.popupHref") && "" !== rspkr.cfg.item("general.popupHref")) return rspkr.cfg.item("general.popupHref"); var d = m("customerParams"), a = "//app-%REGION%.readspeaker.com/cgi-bin/rsent?"; d.readSelector = m("readSelector"); var c = !0, b = !1, f; for (f in d) if (d.hasOwnProperty(f)) {
            if ("region" === f) a = a.replace("%REGION%", d[f]); else if ("readSelector" === f) {
                if (d.readSelector.length) {
                    a += (c ? "?" : "&") + "readclass=rs_read_this"; c = $rs.get(d.readSelector.join(",")); $rs.isArray(c) || (c =
                        [c]); for (var l in c) c.hasOwnProperty(l) && (b = !0, $rs.addClass(c[l], "rs_read_this"))
                }
            } else !1 !== d[f] && "drId" !== f && (c || (a += "&"), a += f + "=" + d[f]); c = !1
        } b || (d = document.createElement("div"), d.innerHTML = rspkr.cfg.getPhrase("pleaseselect"), $rs.addClass(d, "rshidden rs_read_this"), document.body.appendChild(d)); return a + "&url=" + encodeURIComponent(document.location.href)
    } function q() {
        s || rspkr.loadCore(); n ? ($rs.css(g, "display", "none"), a && ($rs.css(a, "display", "block"), rspkr.ui.addClickEvents())) : ($rs.css(g, "display",
            "block"), a && $rs.css(a, "display", "none")); $rs.hasClass(a, "rsbtn") || $rs.addClass(a, "rsbtn"); n = !n
    } function u() {
        var d = ['<i class="rsicn' + (rspkr.getVersion() && "3.0" !== rspkr.getVersion().substr(0, 3) ? "rsicn-play" : "") + '"></i>']; v(); var h = window.document.getElementsByTagName("body"), h = h[0], c = m("customerParams").lang; g = window.document.createElement("button"); $rs.setAttr(g, "class", "rsbtn_floating rspopup"); $rs.setAttr(g, "title", window.rsConf.phrases[c] && window.rsConf.phrases[c].activate ? window.rsConf.phrases[c].activate :
            window.rsConf.phrases.en_us.activate); g.innerHTML = d.join("\n"); k = m("positionIcon"); d = k.left; c = k.top; k.left || (d = -1); k.top || (c = 4 * ($rs.height(window) - 60) / 5); $rs.css(g, "position", "fixed"); $rs.css(g, "left", d + "px"); $rs.css(g, "top", c + "px"); $rs.css(g, "zIndex", 1E4); rspkr.getVersion() && "3.0" !== rspkr.getVersion().substr(0, 3) && $rs.css(g, "padding", "6px 10px 4px"); h.appendChild(g); $rs.regEvent(g, "click", q); ReadSpeaker.q(function () {
                s = !0; var b = '<a class="rsbtn_play" accesskey="L" title="%LISTENTOSELECTED%" href="">;\t<span class="rsbtn_left rsimg rspart"><span class="rsbtn_text"><span class="rsbtn_label">%LISTEN%</span><span></span></span></span>;\t<span class="rsbtn_right rsimg rsplay rspart"></span>;</a>;<button class="rsbtn_draghandle" type="button">;\t<i class="rsicn rsicn-move"></i>;</button>'.split(";"),
                    d = window.document.getElementsByTagName("body"), d = d[0]; a = window.document.createElement("div"); $rs.setAttr(a, "id", "readspeaker_floating_button"); $rs.setAttr(a, "class", "rsbtn"); $rs.css(a, "position", "fixed"); n && $rs.css(a, "display", "none"); k = m("positionIcon"); k.top || $rs.height(window); for (var c = m("customerParams").lang, e = 0; e < b.length; e++)b[e] = b[e].replace("%LISTEN%", rspkr.cfg.getPhrase("listen", c, "en_us")), b[e] = b[e].replace("%MOVEPLAYER%", rspkr.cfg.getPhrase("moveplayer", c, "en_us")), b[e] = b[e].replace("%LISTENTOSELECTED%",
                        rspkr.cfg.getPhrase("listentoselection", c, "en_us")), b[e] = b[e].replace("%READABOUT%", rspkr.cfg.getPhrase("readabout", c, "en_us")), b[e] = b[e].replace("%CLOSEPLAYER%", rspkr.cfg.getPhrase("close", c, "en_us")), b[e] = b[e].replace("%TOGGLEPLAYER%", rspkr.cfg.getPhrase("activate", c, "en_us")); a.innerHTML = b.join("\n"); $rs.setAttr($rs.findIn(a, ".rsbtn_play"), "href", t()); rspkr.cfg.item("general.popupHref", $rs.getAttr($rs.findIn(a, ".rsbtn_play"), "href")); rspkr.cfg.item("general.selectionPlayer", $rs.getAttr(a, "id"));
                d.appendChild(a); rspkr.ui.addClickEvents(); $rs.addClass(m("addSkip"), "rs_skip"); ReadSpeaker.Common.addEvent("onUIShowPlayer", function () { n = !0; q() }); rspkr.cfg.item("cb.ui.close", function () { "readspeaker_floating_button" === $rs.getAttr(this, "id") && (n = !1, q()) }); rspkr.mobile() && a && ($rs.addClass(a, "rs_mobile"), b = $rs.findIn(a, ".rsbtn_play").href, "string" === typeof b && b.length && window.readpage(b, null, { preventPlay: !0, noPrevPlay: !0 }), $rs.css(a, "display", "none")); rspkr.DocReader && rspkr.DocReader.AutoAdd.init()
            })
    }
    function m(a) { return window.rsConf.floating[a] } function v() {
        var a = { ar_ar: ["ar-SA"], en_us: ["en-US", "en"], en_au: ["en-AU"], en_uk: ["en-GB"], zh_cn: ["zh-CN"], da_dk: ["da-DK"], nl_nl: ["nl-NL"], fr_fr: ["fr-FR"], de_de: ["de-DE", "de-AT", "de"], it_it: ["it-IT"], ja_jp: ["ja-JP"], ko_ko: ["ko-KO"], ko_kr: ["ko-KR"], ru_ru: ["ru-RU"], es_es: ["es-ES", "es"], es_us: ["es-US", "es"], es_co: ["es-CO", "es"], sv_se: ["sv-SE"], tr_tr: ["tr-TR"], cy_cy: ["cy-CY"], pt_pt: ["pt-PT", "pt"], pt_br: ["pt-BR", "pt"] }, g = window.document.documentElement.lang,
            c = m("customerParams"), b = "en_us"; "" !== c && c.hasOwnProperty("lang") && (b = c.lang, b = $rs.isArray(b) ? b : [b]); var f = null; "" !== c && c.hasOwnProperty("voice") && (f = c.voice, $rs.isArray(f)); var f = !1, l, e; for (e in a) { if (a.hasOwnProperty(e)) { l = a[e]; l = $rs.isArray(l) ? l : [l]; for (var h = 0; h < l.length; h++) { if (l[h] === g) for (var k = 0; k < b.length; k++)if (e === b[k]) { b = b[k]; f = !0; break } if (f) break } } if (f) break } f || (b = $rs.isArray(l) ? b[0] : b); c.lang = b; window.rsDocReaderConf && (window.rsDocReaderConf.lang = b)
    } var p; window.rsConf || (window.rsConf =
        {}); window.rsConf.general = { cookieName: "ReadSpeakerFloatingSettings", usePost: !0, preserveElements: ".rs_preserve, .nav" }; window.rsConf.floating = { customerParams: { customerid: "7118", drId: "bungg", lang: ["en_us", "fr_ca"], region: "na", voice: !1, readid: !1, url: !1 }, positionIcon: { left: !1, top: 90 }, addSkip: [".nav", ".header-bar-outer-container"], readSelector: ["#content"], useIcons: !0, revision: "863" }; window.rsConf.ui || (window.rsConf.ui = {}); window.rsConf.ui.alwaysDetach = !0; window.rsConf.ui.tools || (window.rsConf.ui.tools =
            {}); window.rsConf.ui.tools.voicesettings = !0; p = "//f1-%region%.readspeaker.com/script/%customerid%/webReader/".replace("%customerid%", window.rsConf.floating.customerParams.customerid); p = p.replace("%region%", window.rsConf.floating.customerParams.region); window.rsConf.params = p + "webReader.js?pids=wr"; window.rsConf.phrases || (window.rsConf.phrases = {}); window.rsConf.phrases.en_us = {
                activate: "Activate ReadSpeaker", deactivate: "Deactivate ReadSpeaker", listentoselection: "Listen to the selected text", listenwith: "Activate/Deactivate ReadSpeaker",
                moveplayer: "Move player", pleaseselect: "Please select the text you want to listen to.", readabout: "Read about the Listening-service."
            }; window.rsConf.phrases.ar_ar = {
                activate: decodeURIComponent("ReadSpeaker%20%D8%AA%D8%B4%D8%BA%D9%8A%D9%84"), deactivate: decodeURIComponent("ReadSpeaker%D8%A5%D9%8A%D9%82%D8%A7%D9%81"), hideplayer: decodeURIComponent("%D8%A5%D8%AE%D9%81%D8%A7%D8%A1%20%D9%85%D8%B4%D8%BA%D9%84%20%D8%A7%D9%84%D8%B5%D9%88%D8%AA"), listentoselection: decodeURIComponent("%D8%A5%D8%B3%D8%AA%D9%85%D8%B9%20%D8%A5%D9%84%D9%89%20%D8%A7%D9%84%D9%86%D8%B5%20%D8%A7%D9%84%D8%B0%D9%8A%20%D8%AA%D9%85%20%D8%A5%D8%AE%D8%AA%D9%8A%D8%A7%D8%B1%D9%87"),
                listenwith: decodeURIComponent("ReadSpeaker%D8%AA%D8%B4%D8%BA%D9%8A%D9%84%2F%D8%A5%D9%8A%D9%82%D8%A7%D9%81"), moveplayer: decodeURIComponent("%D8%AD%D8%B1%D9%91%D9%90%D9%83%20%D9%85%D8%B4%D8%BA%D9%84%20%D8%A7%D9%84%D8%B5%D9%88%D8%AA"), pleaseselect: decodeURIComponent("%D8%A7%D9%84%D8%B1%D8%AC%D8%A7%D8%A1%20%D8%A5%D8%AE%D8%AA%D9%8A%D8%A7%D8%B1%20%D8%A7%D9%84%D9%86%D8%B5%20%D8%A7%D9%84%D9%85%D8%B1%D8%A7%D8%AF%20%D8%A7%D9%84%D8%A5%D8%B3%D8%AA%D9%85%D8%A7%D8%B9%20%D8%A5%D9%84%D9%8A%D9%87%D9%90"), showplayer: decodeURIComponent("%D8%A5%D8%B8%D9%87%D8%A7%D8%B1%20%D9%85%D8%B4%D8%BA%D9%84%20%D8%A7%D9%84%D8%B5%D9%88%D8%AA"),
                readabout: decodeURIComponent("%D8%A5%D9%82%D8%B1%D8%A3%20%D8%B9%D9%86%20%D8%AE%D8%AF%D9%85%D8%A9%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%85%D8%A7%D8%B9")
            }; window.rsConf.phrases.nl_nl = { activate: "ReadSpeaker activeren", deactivate: "ReadSpeaker deactiveren", listentoselection: "Geselecteerde tekst beluisteren", listenwith: "ReadSpeaker activeren/deactiveren", moveplayer: "Player verplaatsen", pleaseselect: "Selecteer a.u.b. de tekst om te beluisteren.", readabout: "Lees over de Luister-service." }; window.rsConf.phrases.sv_se =
                { activate: "Aktivera ReadSpeaker", deactivate: "Inaktivera ReadSpeaker", listentoselection: decodeURIComponent("Lyssna%20p%C3%A5%20markerad%20text"), listenwith: decodeURIComponent("Aktivera%2Finaktivera%20ReadSpeaker"), moveplayer: "Flytta spelaren", pleaseselect: decodeURIComponent("V%C3%A4nligen%20markera%20den%20text%20du%20vill%20lyssna%20p%C3%A5."), readabout: "Mer information om ReadSpeaker." }; window.rsConf.phrases.fr_fr = {
                    activate: "Activer ReadSpeaker", deactivate: decodeURIComponent("d%C3%A9sactiver%20ReadSpeaker"),
                    listentoselection: decodeURIComponent("Ecouter%20le%20texte%20s%C3%A9lectionn%C3%A9"), listenwith: decodeURIComponent("Activer%2FD%C3%A9sactiver%20ReadSpeaker"), moveplayer: decodeURIComponent("D%C3%A9placer%20player"), pleaseselect: decodeURIComponent("Merci%20de%20s%C3%A9lectionner%20le%20texte%20que%20vous%20souhaitez%20%C3%A9couter."), readabout: decodeURIComponent("A%20propos%20du%20service%20d%C3%A9coute.")
                }; window.rsConf.phrases.es_es = {
                    activate: "Activar ReadSpeaker", deactivate: "Desactivar ReadSpeaker",
                    listentoselection: "Escuchar el texto seleccionado", listenwith: "Activar/Desactivar ReadSpeaker", moveplayer: "Mover el reproductor", pleaseselect: "Por favor, seleccione el texto que desea escuchar.", readabout: "Lea acerca del servicio de lectura."
                }; window.rsConf.phrases.de_de = {
                    activate: "ReadSpeaker aktivieren", deactivate: "ReadSpeaker deaktivieren", listentoselection: decodeURIComponent("Ausgew%C3%A4hlten%20Text%20anh%C3%B6ren"), listenwith: decodeURIComponent("ReadSpeaker%20aktivieren%2Fdeaktivieren"), moveplayer: "Player bewegen",
                    pleaseselect: decodeURIComponent("Bitte%20w%C3%A4hlen%20Sie%20den%20Text%2C%20den%20Sie%20h%C3%B6ren%20m%C3%B6chten."), readabout: decodeURIComponent("Lesen%20Sie%20mehr%20%C3%BCber%20den%20Vorlese-Service.")
                }; window.rsConf.phrases.fi_fi = {
                    activate: "Aktivoi ReadSpeaker", deactivate: "Sulje ReadSpeaker", listentoselection: "Kuuntele valittu teksti", listenwith: "Aktivoi/Sulje ReadSpeaker", moveplayer: decodeURIComponent("Siirr%C3%A4%20audiosoitinta"), pleaseselect: decodeURIComponent("Valitse%20hiirell%C3%A4%20maalaamalla%20teksti%20jonka%20haluat%20kuunnella."),
                    readabout: decodeURIComponent("Lis%C3%A4tietoa%20ReadSpeakerist%C3%A4")
                }; var g = null, a = null, k = {}, s = !1, n = !0, w = document.getElementsByTagName("HEAD").item(0), h = document.createElement("script"); h.setAttribute("type", "text/javascript"); h.src = p + "webReader.js"; var r = function () { rspkr.features && (rspkr.features.detachment = !0); u() }; h.onreadystatechange = h.onload = function () { var a = h.readyState; if (!r.done && (!a || /loaded|complete/.test(a))) r.done = !0, r() }; (document.body || w).appendChild(h)
})();

// // Add Bootstrap Styles
// let styleSheet = document.createElement('link');
// styleSheet.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css';
// styleSheet.rel = 'stylesheet';
// document.head.append(styleSheet);

// // Add Bootstrap JS
// let bootStrapScripts = [
//     { src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js' },
//     { src: 'https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js' },
//     { src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.min.js' }
// ];

// for (let i = 0; i < bootStrapScripts.length; i++) {
//     let bootsStrapScript = document.createElement('script');
//     bootStrapScripts.type = 'text/javascript';
//     bootsStrapScript.src = bootStrapScripts[i].src;
//     document.head.append(bootsStrapScript);
// }

$(document).ready(function () {
    //Message in Dashboard to find all courses
    // Checks if page is dashboard
    if (window.location.pathname == '/') {
        $('#DashboardCard_Container').before('<div><p>Additional courses, can be found on your <a href="/courses"><b><u>All Courses</b></u></a> page.</p></div>');
    }

    //Disable course to make public for instructors (course settings)
    // Checks if page is course settings
    if (/^\/courses\/[0-9]+\/settings$/.test(window.location.pathname)) {
        // Checks that current user role is not an admin. Admins can access all settings.
        if ($.inArray('admin', ENV.current_user_roles) == -1) {
            // Disables the Visibility dropdown
            $('#course_course_visibility').prop('disabled', true);
            // Disables the 'Include this course in the public course index' checkbox
            $('#course_indexed').prop('disabled', true);
            // Disables the Customize checkbox for Syllabus public sharing
            $('#course_custom_course_visibility').prop('disabled', true);
        }
    }

    //Hide the add email address section in account settings
    // Checks if page is account settings
    if (/^\/profile\/settings$/.test(window.location.pathname)) {
        // Checks that current user role is not an admin. Admins can access all settings.
        if ($.inArray('admin', ENV.current_user_roles) == -1) {
            // Hides add email address section
            $('a.add_email_link.icon-add').parent().hide();
        }
    }

    //Backdoor Login page - Removes the register new account link
    //Checks if on the login page
    if (/^\/login\/canvas$/.test(window.location.pathname)) {
        //Removes the link "Need a Canvas Account?"
        //Removes the link "Click Here, It's Free!"
        //Remove the Browse Courses link to Open Offerings
        $(".ic-Login__banner-title").remove();
        $(".ic-Login__banner-subtitle").remove();
        $('[class="ic-Login__link"]').remove();
        //$(".ic-Login__link.forgot_password_link")();
    }

    //Hide the add contact method section in account settings
    // Checks if page is account settings
    if (/^\/profile\/settings$/.test(window.location.pathname)) {
        // Checks that current user role is not an admin. Admins can access all settings.
        if ($.inArray('admin', ENV.current_user_roles) == -1) {
            // Hides add contact method section
            $('a.add_contact_link.icon-add').parent().hide();
        }
    }

    //Disable check box Course settings / More Options "Let students self enroll by sharing with them a secret URL or Code
    // Checks if page is course settings
    if (/^\/courses\/[0-9]+\/settings$/.test(window.location.pathname)) {
        // Checks that current user role is not an admin. Admins can access all settings.
        if ($.inArray('admin', ENV.current_user_roles) == -1) {
            // Disables the 'Visibility' customization checkbox
            $('#course_self_enrollment.self_enrollment_checkbox').prop('disabled', true)
        }
    }
});

function myFunction() {
	var x = document.getElementById("Demo");
	if (x.className.indexOf("w3-show") == -1) {
	  x.className += " w3-show";
	} else {
	  x.className = x.className.replace(" w3-show", "");
	}
  }
