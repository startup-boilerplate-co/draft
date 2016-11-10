  // // google analytics
  // (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  // (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  // m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  // })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
  //
  // ga('create', 'UA-79447264-1', 'auto');
  // ga('send', 'pageview');
  //
  //
  //
  //
  // // crisp instant messenger
  // // CRISP_WEBSITE_ID = "e814fea1-2e1d-436b-b042-84b989dec750";
  // // (function(){
  // //   d=document;
  // //   s=d.createElement("script");
  // //   s.src="https://client.crisp.im/l.js";
  // //   s.async=1;
  // //   d.getElementsByTagName("head")[0].appendChild(s);
  // // })();
  //
  //
  (function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',intercomSettings);}else{var d=document;var i=function(){i.c(arguments)};i.q=[];i.c=function(args){i.q.push(args)};w.Intercom=i;
  function l(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/c5akl7j3';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);}if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})()

  window.Intercom("boot", {
    app_id: "ybyd02g5"
  });
  //
  //
  //
  //
  // // hotjar
  // (function(h,o,t,j,a,r){
  //     h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
  //     h._hjSettings={hjid:119660,hjsv:5};
  //     a=o.getElementsByTagName('head')[0];
  //     r=o.createElement('script');r.async=1;
  //     r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
  //     a.appendChild(r);
  // })(window,document,'//static.hotjar.com/c/hotjar-','.js?sv=');
  //
  //
  // // heap analytics prod
  // // window.heap=window.heap||[],heap.load=function(e,t){window.heap.appid=e,window.heap.config=t=t||{};var r=t.forceSSL||"https:"===document.location.protocol,a=document.createElement("script");a.type="text/javascript",a.async=!0,a.src=(r?"https:":"http:")+"//cdn.heapanalytics.com/js/heap-"+e+".js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(a,n);for(var o=function(e){return function(){heap.push([e].concat(Array.prototype.slice.call(arguments,0)))}},p=["addEventProperties","addUserProperties","clearEventProperties","identify","removeEventProperty","setEventProperties","track","unsetEventProperty"],c=0;c<p.length;c++)heap[p[c]]=o(p[c])};
  // // heap.load("728888972");
  //
  // // heap analytics dev
  // window.heap = window.heap||[],heap.load=function(e,t){
  //   window.heap.appid=e,window.heap.config=t=t||{};
  //   var r=t.forceSSL||"https:"===document.location.protocol,a=document.createElement("script");a.type="text/javascript",a.async=!0,a.src=(r?"https:":"http:")+"//cdn.heapanalytics.com/js/heap-"+e+".js";
  //   var n=document.getElementsByTagName("script")[0];
  //   n.parentNode.insertBefore(a,n);
  //   for(var o=function(e){return function(){heap.push([e].concat(Array.prototype.slice.call(arguments,0)))}},p=["addEventProperties","addUserProperties","clearEventProperties","identify","removeEventProperty","setEventProperties","track","unsetEventProperty"],c=0;
  //   c<p.length;c++)heap[p[c]]=o(p[c])
  // c};
  // heap.load("2543614771");
  //
  //
  //
  //
  // !function(t,n,o){
  //   var a="chmln",c="setup identify alias track set show on off custom help _data".split(" ");
  //   n[a]||(n[a]={}),n[a].accountToken=o,n[a].location=n.location.href.toString();
  //   for(var e=0;e<c.length;e++)!function(){var t=n[a][c[e]+"_a"]=[];n[a][c[e]]=function(){t.push(arguments)}}();
  //   var s=t.createElement("script");
  //   s.src="https://fast.trychameleon.com/messo/"+o+"/messo.min.js",s.async=!0,t.head.appendChild(s)}(document,window,"SuwN33zvXTWlEN6kkSYthZKEum54Hc1syhWPGxoOWg4Maa-1BYfga-zrfEp332HbVlsi6W");
  // chmln.identify({
  //   uid: user.id /* A stable, unique identifier */,
  //   email: user.email,
  //   created: user.created_at /* Timestamp when the user was added to your system */
  // });
