(function($){
  $.fn.guidedog = function(options, callback){

    // default options
    var settings = $.extend({
      cssPaths: ['/css/app.css'],
      logoPath: 'http://placehold.it/250x100'
    }, options);

    var gdDOM = this          // retains reference to 'this'
    var gd = {}               // stores info to be passed to handlebars template
    var combinedResponse = '' // store all of the raw content to be parsed
    var crawlTotal = settings.cssPaths.length - 1

    gd.data = {}
    gd.data.info = {}
    gd.data.sections = []

    // fetch and combine all cssPaths' contents
    var deferreds = []
    $.each(settings.cssPaths, function(i, path) {
      deferred.push($.get(path))
    })

    $.when.apply($, deferreds).done(function() {
      var args = Array.prototype.slice.call(arguments)
      combinedResponse = args.join('')
    })

    // pass json data to Mustache template
    var render = function(){
      gdDOM.html('').prepend(Guidedog.templates.guidedog(gd.data, {}));
      compileJade();
      $('.guidedog').each(function(){
        $(this).css('background', '#'+Math.floor(Math.random()*16777215).toString(16));
      });
      updateNav();
      scrollToClick();
      initTabs();

      $(document).on('scroll', function(){
        updateNav();
      });

      if (typeof callback == 'function') {
        callback.call(gdDOM);
      }

      if(window.location.hash){
        // bug causing this not to work properly in Chrome
        scrollTo(window.location.hash, 0);
      }
    }

    // update active nav item
    var updateNav = function(){
      var found = false;
      var windowScrollTop = $(window).scrollTop();
      var windowScrollBottom = $(window).height() + windowScrollTop;
      $('section.sg').each(function(){
        if(!found){
          var target = $(this).find('.sg-target');
          var targetScrollTop = target.offset().top;
          if(targetScrollTop >= windowScrollTop && targetScrollTop < windowScrollBottom){
            $('nav.sg a.active').removeClass('active');
            $('nav.sg a[href="#'+target.attr('name')+'"]').addClass('active');
            found = true;
          }
        }
      });
    }

    // scrollToClick nav items
    var scrollToClick = function(){
      $('nav.sg').on('click', 'a', function(e){
        e.preventDefault();
        window.history.pushState('', '', $(this).attr('href'));
        scrollTo($(this).attr('href'), 1000);
      });
    }

    // scrollTo nav items
    var scrollTo = function(target, speed){
        if($(target)[0]){
          $('html,body').animate({
            scrollTop: $(target).offset().top - 30
          }, speed);
        }
    }

    // fetch the index of a section
    var sectionIndex = function(match){
      for (var i=0; i<gd.data.sections.length; i++){
        if(gd.data.sections[i].section === match){
          return i
        }
      }
      return 0
    }

    // init sg-tabs
    var initTabs = function(){
      $('body').on('click', '.sg-tabs-trigger li', function(){
        var target = $(this)
        var root = target.closest('.sg-tabs')
        var index = target.index();
        root.find('.sg-tabs-active').removeClass('sg-tabs-active')
        target.addClass('sg-tabs-active')
        root.find('.sg-tabs-content li:nth-child('+(index+1)+')').addClass('sg-tabs-active')
      });
    }
  }
}(jQuery));
