(function($) {
    $(document).ready(function() {
        console.log("AAAAAAAA");
        $.jScrollability([
            {
                'selector': '.slide-in-demo',
                'start': 'parent',
                'end': function($el) { return $el.offset().top },
                // 'end': 'parent',
                'fn': {
                    'left': {
                        'start': 100,
                        'end': 0,
                        'unit': '%'
                    }
                }
            },
            {
                'selector': '.reveal-demo',
                'start': 'parent',
                'end': 'parent',
                'fn': {
                    'top': {
                        'start': 100,
                        'end': 20,
                        'unit': '%'
                    }
                }
            },
            {
                'selector': '.reveal-paypal',
                'start': 'parent',
                'end': 'parent',
                'fn': {
                    'top': {
                        'start': 140,
                        'end': 60,
                        'unit': '%'
                    },
                    'opacity':{
                        'start':-300,
                        'end': 100,
                        'unit': '%'
                    }
                }
            },
            {
                'selector': '.reveal-visa',
                'start': 'parent',
                'end': 'parent',
                'fn': {
                    'top': {
                        'start': 180,
                        'end': 60,
                        'unit': '%'
                    },
                    'opacity':{
                        'start':-350,
                        'end': 100,
                        'unit': '%'
                    }
                }
            },
            {
                'selector': '.reveal-master',
                'start': 'parent',
                'end': 'parent',
                'fn': {
                    'top': {
                        'start': 220,
                        'end': 60,
                        'unit': '%'
                    },
                    'opacity':{
                        'start':-400,
                        'end': 100,
                        'unit': '%'
                    }
                }
            },
            {
                'selector': '.reveal-django',
                'start': 'parent',
                'end': 'parent',
                'fn': {
                    'left': {
                        'start': 100,
                        'end': 10,
                        'unit': '%'
                    },
                    'opacity':{
                        'start':-300,
                        'end': 100,
                        'unit': '%'
                    }
                }
            },
            {
                'selector': '.reveal-bootstrap',
                'start': 'parent',
                'end': 'parent',
                'fn': {
                    'left': {
                        'start': 100,
                        'end': 47,
                        'unit': '%'
                    },
                    'opacity':{
                        'start':-350,
                        'end': 100,
                        'unit': '%'
                    }
                }
            },
            {
                'selector': '.reveal-sqlite',
                'start': 'parent',
                'end': 'parent',
                'fn': {
                    'left': {
                        'start': 100,
                        'end': 72,
                        'unit': '%'
                    },
                    'opacity':{
                        'start':-400,
                        'end': 100,
                        'unit': '%'
                    }
                }
            },
            {
                'selector': '.text-wrapper',
                'start': function($el) { return $el.offset().top + $el.height()*1.5 },
                'end': 'parent',
                'fn': function($el,pcnt) {
                    var $spans = $el.find('span');
                    var point = Math.floor(($spans.length+1) * pcnt);
                    $spans.each(function(i,el) {
                        var $span = $(el);
                        if (i < point) {
                            $span.addClass('visible');
                        } else {
                            $span.removeClass('visible');
                        }
                    });
                }
            }
        ]);
    });
})(jQuery);