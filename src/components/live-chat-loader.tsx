import Script from "next/script";

const liveChatLoader = `
  window.__lc = window.__lc || {};
  window.__lc.license = 19839776;
  window.__lc.integration_name = "manual_channels";
  window.__lc.product_name = "livechat";
  ;(function(n,t,c){
    function i(n){return e._h?e._h.apply(null,n):e._q.push(n)}
    var e={
      _q:[],_h:null,_v:"2.0",
      on:function(){i(["on",c.call(arguments)])},
      once:function(){i(["once",c.call(arguments)])},
      off:function(){i(["off",c.call(arguments)])},
      get:function(){if(!e._h)throw new Error("[LiveChatWidget] You can't use getters before load.");return i(["get",c.call(arguments)])},
      call:function(){i(["call",c.call(arguments)])},
      init:function(){
        var n=t.createElement("script");
        n.async=!0;
        n.type="text/javascript";
        n.src="https://cdn.livechatinc.com/tracking.js";
        t.head.appendChild(n)
      }
    };
    !n.__lc.asyncInit&&e.init();
    n.LiveChatWidget=n.LiveChatWidget||e;

    n.LiveChatWidget.on("new_event",function(payload){
      var event=payload&&(payload.event||(payload.data&&payload.data.event)||payload);
      if(!event||!event.author||event.author.type!=="agent")return;
      if(["message","emoji","rich_message","file"].indexOf(event.type)===-1)return;

      [50,250,600].forEach(function(delay){
        setTimeout(function(){
          n.LiveChatWidget.call("maximize")
        },delay)
      })
    })
  }(window,document,[].slice));
`;

export function LiveChatLoader() {
  return (
    <Script
      id="livechat-widget-loader"
      strategy="beforeInteractive"
      dangerouslySetInnerHTML={{ __html: liveChatLoader }}
    />
  );
}
