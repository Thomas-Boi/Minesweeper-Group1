!function(t){var e={};function n(s){if(e[s])return e[s].exports;var a=e[s]={i:s,l:!1,exports:{}};return t[s].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=e,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(s,a,function(e){return t[e]}.bind(null,a));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=11)}([function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var s={timer_interval:null,start_timer:function(){var t=new Date;s.timer_interval=setInterval((function(){s.update_timer(t)}),1e3)},update_timer:function(t){var e=new Date-t,n=Math.floor(e/1e3)%60;n<10&&(n="0"+String(n));var s=Math.floor(e/6e4);document.getElementById("timer").innerHTML=String(s)+":"+String(n)},save_end_time:function(){var t=document.getElementById("timer").innerHTML;sessionStorage.setItem("Time",t)},retrieve_end_time:function(){return sessionStorage.getItem("Time")},stop_timer:function(){clearInterval(s.timer_interval)},reset_timer:function(){document.getElementById("timer").innerHTML="0:00"}}},function(t,e,n){t.exports=n.p+"Fonts/ARCADECLASSIC.ttf"},function(t,e,n){},function(t,e,n){t.exports=n.p+"Audio/Button-SoundBible.com-1420500901.mp3"},function(t,e,n){t.exports=n.p+"Audio/Bomb-SoundBible.mp3"},function(t,e,n){t.exports=n.p+"Audio/BillyGorilly_JingleBells.mp3"},function(t,e,n){t.exports=n.p+"Audio/DougHammer_CarolOfTheBells.mp3"},function(t,e,n){t.exports=n.p+"Audio/MicheleMcLaughlin_SilentNight.mp3"},function(t,e,n){t.exports=n.p+"Fonts/FROSTY_.ttf"},,,function(t,e,n){"use strict";n.r(e);var s={game_mode:null,music_status:null,sfx_status:null,is_in_game:null,first_timer:null,song_name:null,load_meta_data:function(){s.is_first_timer()?s.load_default_meta_data():s.load_saved_meta_data()},is_first_timer:function(){return null===sessionStorage.getItem("first_timer")},load_default_meta_data:function(){s.game_mode="intro",s.music_status=!0,s.sfx_status=!0,s.is_in_game=!1,s.first_timer=!0},load_saved_meta_data:function(){s.game_mode=sessionStorage.getItem("game_mode"),s.music_status=sessionStorage.getItem("music_status"),s.sfx_status=sessionStorage.getItem("sfx_status"),s.is_in_game=!1,s.first_timer=s.is_first_timer(),s.song_name=sessionStorage.getItem("song_name")},get_game_mode:function(){return s.game_mode},set_game_mode:function(t){s.game_mode=t},get_music_status:function(){var t=s.music_status;return"true"===t?t=!0:"false"===t&&(t=!1),t},set_music_status:function(t){s.music_status=t},get_sfx_status:function(){var t=s.sfx_status;return"true"===t?t=!0:"false"===t&&(t=!1),t},set_sfx_status:function(t){s.sfx_status=t},get_is_in_game:function(){var t=s.is_in_game;return"true"===t?t=!0:"false"===t&&(t=!1),t},set_is_in_game:function(t){s.is_in_game=t},get_song_name:function(){return s.song_name},set_song_name:function(t){s.song_name=t},save_meta_data:function(){sessionStorage.setItem("game_mode",s.game_mode),sessionStorage.setItem("music_status",s.music_status),sessionStorage.setItem("sfx_status",s.sfx_status),sessionStorage.setItem("song_name",s.song_name),sessionStorage.setItem("first_timer",!1)}},a={board:document.getElementById("board"),cell_left:0,cell_top:0,btn_size:0,cells_in_a_row:0,cells_in_a_collumn:0,font_size:0,get_board:function(){return a.board},get_cells_in_a_row:function(){return a.cells_in_a_row},get_cells_in_a_column:function(){return a.cells_in_a_collumn},create_game_board:function(){var t=s.get_game_mode(),e=this.get_board_size_and_font_size(t),n=e[0],o=e[1],i=e[2];a.clear_board();for(var _=0;_<o;_++){for(var c=0;c<n;c++)a.btn_size=a.create_buttons(i,_,c,n);a.board.innerHTML+="<br>",a.cell_left=0,a.cell_top+=a.btn_size}a.board.style.height="".concat(a.cell_top+5,"px"),a.cell_top=0,u.add_start_game_function_to_buttons()},get_board_size_and_font_size:function(t){var e,n,s;switch(t){case"intro":e=5,n=5,a.board.style.width="40%",a.font_size="65px",s=a.get_board_px(39);break;case"easy":e=10,n=10,a.board.style.width="40%",s=a.get_board_px(39),a.font_size="45px";break;case"medium":e=15,n=15,a.board.style.width="60%",s=a.get_board_px(59),a.font_size="45px";break;case"hard":e=20,n=20,a.board.style.width="90%",s=a.get_board_px(89),a.font_size="45px"}return a.cells_in_a_collumn=n,a.cells_in_a_row=e,[e,n,s]},get_board_px:function(t){return t/100*window.innerWidth},clear_board:function(){a.board.innerHTML=""},create_buttons:function(t,e,n,s){var o=document.createElement("BUTTON");o.id="button".concat(n,"_").concat(e),o.className="gift_btn btn_num0";var i=t/s;return o.style.width=i+"px",o.style.height=i+"px",o.style.left=a.cell_left+"px",o.style.top=a.cell_top+"px",a.cell_left+=parseInt(i),o.style.fontSize=a.font_size,a.board.appendChild(o),parseInt(i)}},o=n(0),i={minePlacer:function(t){for(var e=a.get_cells_in_a_row(),n=a.get_cells_in_a_column(),o=s.get_game_mode(),_=i.get_mine_numbers(o),c=0;c<_;){var u=Math.floor(Math.random()*e),r=Math.floor(Math.random()*n),l="button".concat(u,"_").concat(r),m=document.getElementById(l);m.classList.contains("mine")||m.id!==t&&(m.classList.toggle("mine"),m.classList.remove("btn_num0"),i.number_surroundings(u,r),c++)}},get_mine_numbers:function(t){var e;switch(t){case"intro":e=4;break;case"easy":e=15;break;case"medium":e=28;break;case"hard":e=50;break;default:e=1}return e},number_surroundings:function(t,e){for(var n=a.get_cells_in_a_column(),s=a.get_cells_in_a_row(),o=[t-1,t,t+1],i=[e-1,e,e+1],_=0;_<o.length;_++){var c=o[_];if(!(c<0||c==s))for(var u=0;u<i.length;u++){var r=i[u];if(!(r<0||r==n)){var l=document.getElementById("button"+String(c)+"_"+String(r));if(!l.classList.contains("mine")){var m=l.classList.item(1),d=parseInt(m.slice(7))+1,f="btn_num"+String(d);l.classList.remove(m),l.classList.add(f)}}}}}},_={check_if_won:function(){var t=document.getElementsByClassName("gift_btn"),e=s.get_game_mode(),n=i.get_mine_numbers(e);t.length===n&&(o.a.stop_timer(),o.a.save_end_time(),_.disable_board(),_.display_page("won"))},disable_board:function(){for(var t=a.get_board().getElementsByTagName("BUTTON"),e=0;e<t.length;e++){var n=document.getElementById(t[e].id);n.disabled=!0,n.style.cursor="auto"}},reveal_all_mines:function(){for(var t=document.getElementsByClassName("mine"),e=0;e<t.length;e++){var n=t[e];n.classList.contains("flag")||(n.className="mine")}},display_page:function(t){var e=t+".html",n=t;window.open(e,n)}},c={set_sounds_based_on_meta_data:function(){!0===s.get_sfx_status()?c.mute_sfx(!1):c.mute_sfx(!0),!0===s.get_music_status()?c.mute_music(!1):c.mute_music(!0)},playMineSound:function(){document.getElementById("mineSound").play()},playBtnSound:function(){document.getElementById("clickSound").play()},play_music:function(){document.getElementById("music").play()},pause_music:function(){document.getElementById("music").pause()},set_music_src:function(t){document.getElementById("music").src=t},mute_sfx:function(t){document.getElementById("clickSound").muted=t,document.getElementById("mineSound").muted=t},mute_music:function(t){document.getElementById("music").muted=t}},u={flagging_period:null,first_touch:function(){c.playBtnSound(),c.play_music(),s.load_meta_data();var t=a.get_board();t.onclick="",t.style.opacity=1,a.create_game_board(),s.set_is_in_game(!0)},add_start_game_function_to_buttons:function(){for(var t=document.getElementsByClassName("gift_btn"),e=0;e<t.length;e++)t[e].addEventListener("click",u.start_game)},start_game:function(){o.a.start_timer();for(var t=document.getElementsByClassName("gift_btn"),e=0;e<t.length;e++)t[e].removeEventListener("click",u.start_game),t[e].addEventListener("mousedown",u.touch_button),t[e].addEventListener("mouseup",u.release_button);i.minePlacer(this.id),c.playBtnSound(),u.reveal_button(this)},touch_button:function(){var t=this;t.classList.contains("revealed_btn")||(t.classList.contains("flag")?t.classList.add("flag_to_be_del"):u.flagging_period=setTimeout((function(){u.flag_button(t)}),300))},flag_button:function(t){t.classList.toggle("flag"),c.playBtnSound()},release_button:function(){clearTimeout(u.flagging_period);this.classList.contains("flag_to_be_del")?(this.classList.remove("flag_to_be_del"),this.classList.remove("flag"),c.playBtnSound()):this.classList.contains("flag")||u.reveal_button(this)},reveal_button:function(t){if(t.classList.contains("mine"))u.clicked_mine(t);else if(t.classList.contains("revealed_btn"))u.check_flags_around_button(t);else{u.clicked_number(t)&&u.reveal_nearby_buttons(t)}c.playBtnSound(),_.check_if_won()},check_flags_around_button:function(t){for(var e=t.id.match(/[0-9]+/g),n=parseInt(e[0]),s=parseInt(e[1]),o=a.get_cells_in_a_row(),i=a.get_cells_in_a_column(),_=[n-1,n,n+1],c=[s-1,s,s+1],r=0,l=0;l<_.length;l++){var m=_[l];if(!(m<0||m==o))for(var d=0;d<c.length;d++){var f=c[d];if(!(f<0||f==i)){var g="button".concat(m,"_").concat(f);document.getElementById(g).classList.contains("flag")&&r++}}}var b=t.classList.item(0);r===parseInt(b.slice(7))&&u.reveal_nearby_buttons(t)},reveal_nearby_buttons:function(t){for(var e=t.id.toString().match(/[0-9]+/g),n=parseInt(e[0]),s=parseInt(e[1]),o=a.get_cells_in_a_row(),i=a.get_cells_in_a_column(),_=[n-1,n,n+1],c=[s-1,s,s+1],r=0;r<_.length;r++){var l=_[r];if(!(l<0||l==o))for(var m=0;m<c.length;m++){var d=c[m];if(!(d<0||d==i)){var f="button"+String(l)+"_"+String(d),g=document.getElementById(f);if(!g.classList.contains("flag")){if(g.classList.contains("mine"))return void u.clicked_mine(g);u.clicked_number(g)&&u.reveal_nearby_buttons(g)}}}}},clicked_mine:function(t){_.reveal_all_mines(),t.className="this_mine",c.playMineSound(),c.pause_music(),o.a.stop_timer(),_.disable_board(),_.display_page("lost")},clicked_number:function(t){if(t.classList.contains("revealed_btn"))return!1;var e=t.classList.item(1),n=parseInt(e.slice(7));return t.classList.add("revealed_btn"),t.classList.remove("gift_btn"),0===n?(t.textContent=" ",t.disabled=!0):t.textContent=n,0===n}},r={current_mode:0,load_setting_base_on_metadata:function(){switch(!0===s.get_sfx_status()?r.select_button("soundOnBtn"):r.select_button("soundOffBtn"),!0===s.get_music_status()?r.select_button("musicOnBtn"):r.select_button("musicOffBtn"),r.current_mode=s.get_game_mode(),r.current_mode){case"intro":r.select_button("intro");break;case"easy":r.select_button("easy");break;case"medium":r.select_button("medium");break;case"hard":r.select_button("hard")}var t;switch(s.get_song_name()){case"DougHammer_CarolOfTheBells.mp3":t="DougHammer_CarolOfTheBells.mp3";break;case"MicheleMcLaughlin_SilentNight.mp3":t="MicheleMcLaughlin_SilentNight.mp3";break;default:t="BillyGorilly_JingleBells.mp3"}document.getElementById("music_option").value=t,c.set_music_src("Audio/"+t)},toggleMusic:function(t){"off"===t?(c.mute_music(!0),s.set_music_status(!1),r.unselect_button("musicOnBtn"),r.select_button("musicOffBtn")):(c.mute_music(!1),s.set_music_status(!0),r.unselect_button("musicOffBtn"),r.select_button("musicOnBtn"),c.play_music()),c.playBtnSound()},toggleSfx:function(t){"off"===t?(c.mute_sfx(!0),s.set_sfx_status(!1),r.unselect_button("soundOnBtn"),r.select_button("soundOffBtn")):(c.mute_sfx(!1),s.set_sfx_status(!0),r.unselect_button("soundOffBtn"),r.select_button("soundOnBtn"))},open_advance_setting:function(){c.playBtnSound();var t=document.getElementById("advance_setting");t.classList.add("w3-show"),t.classList.remove("w3-hide")},select_mode:function(t){["intro","easy","medium","hard"].forEach(r.unselect_button),r.select_button(t),s.set_game_mode(t),c.playBtnSound()},unselect_button:function(t){document.getElementById(t).classList.remove("selected_button")},select_button:function(t){document.getElementById(t).classList.add("selected_button")},change_music:function(){var t=this.value;c.set_music_src("Audio/"+t),s.get_music_status()&&c.play_music(),s.set_song_name(t)},confirm_advance_setting:function(){c.playBtnSound();var t=document.getElementById("advance_setting");t.classList.add("w3-hide"),t.classList.remove("w3-show");var e=r.current_mode!==s.get_game_mode();s.get_is_in_game()&&e&&(a.create_game_board(),o.a.stop_timer(),o.a.reset_timer()),s.save_meta_data(),r.current_mode=s.get_game_mode()}},l=function(){a.clear_board(),a.create_game_board(),u.add_start_game_function_to_buttons(),o.a.stop_timer(),o.a.reset_timer(),c.play_music()};n(2),n(3),n(4),n(5),n(6),n(7),n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n(1),n(8);s.load_meta_data(),document.getElementById("board").onclick=u.first_touch,document.getElementById("reset").onclick=l,document.getElementById("musicOnBtn").onclick=function(){r.toggleMusic("on")},document.getElementById("musicOffBtn").onclick=function(){r.toggleMusic("off")},document.getElementById("soundOnBtn").onclick=function(){r.toggleSfx("on")},document.getElementById("soundOffBtn").onclick=function(){r.toggleSfx("off")},document.getElementById("setting_pic").onclick=r.open_advance_setting;for(var m=function(){var t=f[d];document.getElementById(t).onclick=function(){return r.select_mode(t)}},d=0,f=["intro","easy","medium","hard"];d<f.length;d++)m();document.getElementById("music_option").onclick=r.change_music,document.getElementById("confirm").onclick=r.confirm_advance_setting,r.load_setting_base_on_metadata(),c.set_sounds_based_on_meta_data()}]);