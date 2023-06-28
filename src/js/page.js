export default function navigation_init() {
  $('#content img').each(function() {
    if (!$(this).parent().is('a')) {
      const imgSrc = $(this).attr('src');
      const imgSrcSet = $(this).attr('srcset');
      let firstSrc = imgSrc;

      if (imgSrcSet) {
        const srcArray = imgSrcSet.split(',');
        const firstSrcSet = srcArray[0].trim();
        const srcUrl = firstSrcSet.split(' ')[0];
        firstSrc = srcUrl;
        console.log(srcUrl)
      }

      const $a = $('<a>');
      $a.attr('href', firstSrc);
      $a.attr('data-fancybox', 'page');

      $(this).wrap($a);
    }
  });
}