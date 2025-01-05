/* global NexT, CONFIG, LivereTower */

document.addEventListener('page:loaded', () => {
  if (!CONFIG.page.comments) return;

  NexT.utils.loadComments('#lv-container').then(() => {
    window.livereOptions = {
      refer: CONFIG.page.path.replace(/index\.html$/, '')
    };

    if (typeof LivereTower === 'function') return;

    NexT.utils.getScript('https://cdn-city.livere.com/js/embed.dist.js', {
      attributes: {
        async: true
      }
    });
  });
  // 一种屏蔽广告的方法，但是要不断轮询，效果不好
  // setInterval(function () {
  //   var box = document.querySelector(".trc_rbox_container");
  //   if(box) box.outerHTML = "";
  // }, 2000);
});
