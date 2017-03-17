import SharedBackground from './shared-background.js';

(function init($){
    'use strict';
    if (!$) {
        throw 'jQuery is required';
    }

    if ($.fn.sharedBackground) {
        return;
    }

    $.fn.sharedBackground = function(url){
        return this.map(function(){
            let container = $(this);
            new SharedBackground(this, container.data('shared-background') || url);
            return container;
        });
    };

    //autoload
    $(function(){
        $('[data-shared-background]').sharedBackground();
    });
})($ || window.jQuery);