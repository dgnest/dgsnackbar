(function(window, document){
  'use strict';

  function extend(target) {
    var sources = [].slice.call(arguments, 1);
    sources.forEach(function (source) {
        for (var prop in source) {
            target[prop] = source[prop];
        }
    });
    return target;
  }

  /* Code from Modernizr, thanks Modernizr =) */
  function whichTransitionEvent(){
    var t;
    var el = document.createElement('fakeelement');
    var transitions = {
      'transition':'transitionend',
      'OTransition':'oTransitionEnd',
      'MozTransition':'transitionend',
      'WebkitTransition':'webkitTransitionEnd'
    };

    for(t in transitions){
      if( el.style[t] !== undefined ){
        return transitions[t];
      }
    }
  }

  // Default Options
  var defautltOptions = {
    message: 'Este es mi dgsnackbar',
    duration: 5000,
    type: 'normal'
  };

  // Core
  return function(options) {
    if ( typeof options === 'string' ) {
      options = {
        message: options
      };
    }

    // Extend Options
    options = extend(defautltOptions, options);

    var $container        = document.getElementsByClassName('dgsnackbar-container')[0];
    var $dgsnackbar       = document.createElement('DIV');
    var $message          = document.createElement('SPAN');
    var $btnDismiss       = document.createElement('BUTTON');
    var $icon             = document.createElement('SPAN');

    $dgsnackbar.dismiss = function() {
      this.style.opacity = 0;
      clearTimeout(this.timer);
    };

    $btnDismiss.className = 'dgsnackbar__close';
    $btnDismiss.innerHTML = '<i class="fa fa-times" aria-hidden="true"></i>';
    $icon.className       = 'dgsnackbar-icon';

    // Create container if not exist.
    if ( !$container ) {
      $container           = document.createElement('DIV');
      $container.className = 'dgsnackbar-container';

      document.body.appendChild($container);
    }

    $dgsnackbar.className = 'dgsnackbar dgsnackbar-' + options.type;

    // Put icon depending of dgsnackbar's type
    switch(options.type) {
      case 'error':
        $icon.innerHTML = '<i class="fa fa-exclamation"></i>';
        break;
      case 'success':
        $icon.innerHTML = '<i class="fa fa-check"></i>';
        break;
      case 'normal':
        $icon = null;
        break;
    }

    if ( $icon )
      $dgsnackbar.appendChild($icon);

    // Insert Message
    $message.innerHTML = options.message;
    $dgsnackbar.appendChild($message);
    $dgsnackbar.appendChild($btnDismiss);
    $container.appendChild($dgsnackbar);

    window.getComputedStyle($dgsnackbar).bottom;
    window.getComputedStyle($dgsnackbar).opacity;
    $dgsnackbar.style.bottom = 0;
    $dgsnackbar.style.opacity = 1;

    // Remove $dgsnackbar when dismiss animation ended
    $dgsnackbar.addEventListener(whichTransitionEvent(), function(event) {
      if (event.propertyName === 'opacity' && this.style.opacity === '0')
        this.parentElement.removeChild(this);
    }.bind($dgsnackbar));

    $btnDismiss.addEventListener('click', function(event) {
      this.dismiss();
    }.bind($dgsnackbar));

    // Remove dgsnackbar after options duration
    $dgsnackbar.timer = setTimeout(function(){
      this.dismiss();
    }.bind($dgsnackbar), options.duration);
  };
})(window, document);