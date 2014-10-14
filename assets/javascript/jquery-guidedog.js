(function($) {
  $.fn.guidedog = function(options, callback) {

    var element = this;

    options = $.extend({
      cssPaths: [],
      logoPath: 'http://placehold.it/250x100'
    }, options);

    // fetch and parse all stylesheets
    (function fetchAll() {
      if (!options.cssPaths || options.cssPaths.length == 0) {
        // nothing to load? assume the DOM is already rendered
        return init();
      }

      var deferreds = []
      $.each(options.cssPaths, function(i, path) {
        deferred.push($.get(path));
      })

      $.when.apply($, deferreds).done(function() {
        var stylesheets = Array.prototype.slice.call(arguments);

        var data = window.Guidedog.parser(stylesheets.join('\n'));
        render(data);
      })
    })();

    // pass parsed comment data to Mustache template
    var render = function(data) {
      var html = Guidedog.templates.guidedog(data, {});
      element.html(html);
      init();
    };

    // initialize UI
    function init() {
      $('.guidedog').each(function() {
        $(this).css('background', '#'+Math.floor(Math.random()*16777215).toString(16));
      });

      initTabs();
      updateNav();
      scrollToClick();
      chromeBugFix();

      $(document).on('scroll', function() {
        updateNav();
      });

      if (typeof callback == 'function') {
        callback.call(element);
      }
    }

    // bug causing this not to work properly in Chrome
    function chromeBugFix() {
      if (window.location.hash) {
        scrollTo(window.location.hash, 0);
      }
    }

    // update active nav item
    var updateNav = function() {
      var found = false;
      var windowScrollTop = $(window).scrollTop();
      var windowScrollBottom = $(window).height() + windowScrollTop;

      $('section.sg').each(function() {
        if (!found) {
          var target = $(this).find('.sg-target');
          var targetScrollTop = target.offset().top;
          if (targetScrollTop >= windowScrollTop && targetScrollTop < windowScrollBottom) {
            $('nav.sg a.active').removeClass('active');
            $('nav.sg a[href="#'+target.attr('name')+'"]').addClass('active');
            found = true;
          }
        }
      });
    };

    // scrollToClick nav items
    var scrollToClick = function() {
      $('nav.sg').on('click', 'a', function(e) {
        e.preventDefault();
        window.history.pushState('', '', $(this).attr('href'));
        scrollTo($(this).attr('href'), 1000);
      });
    };

    // scrollTo nav items
    var scrollTo = function(target, speed) {
        if ($(target)[0]) {
          $('html,body').animate({
            scrollTop: $(target).offset().top - 30
          }, speed);
        }
    };

    // init sg-tabs
    var initTabs = function() {
      $('body').on('click', '.sg-tabs-trigger li', function() {
        var target = $(this)
        var root = target.closest('.sg-tabs')
        var index = target.index();
        root.find('.sg-tabs-active').removeClass('sg-tabs-active')
        target.addClass('sg-tabs-active')
        root.find('.sg-tabs-content li:nth-child('+(index+1)+')').addClass('sg-tabs-active')
      });
    };
  }
}(jQuery));
