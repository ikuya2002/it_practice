$('a[href^="#contact"]').click(function() {
    var href = $(this).attr("href");
    var html = $('html');
    var target = $(href == "#" || href == "" ? html : href);
    var position = target.offset().top;
    $('body,html').animate({
      scrollTop: position-70
    },
    250,
    'linear');
    return false;
  });