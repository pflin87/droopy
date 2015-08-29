// JavaScript Document
customScroll = (function() {

    /** Detecting IE7 */
    $('body').append('<!--[if IE 7]><script type="text/javascript">$("body").addClass("ie7")</script><![endif]-->');
    if ($('body').hasClass('ie7')) {
        return {
            init: function() {}
        };
    }

    var default_params = {
        barSize: '0' //Units are in px;
    }

    var constant = {
        anchorScrollSpeed: 10,
        pageScrollSpeed: 20,
        clientX: 0,
        clientY: 0,
        type: {
            0: 'vertical',
            1: 'horizontal'
        },
        vertical: {

            cSize: 'clientHeight',
            func: 'height',
            css1: 'top',
            css2: 'height',
            sSize: 'scrollHeight',
            sStart: 'scrollTop'
        },
        horizontal: {

            cSize: 'clientWidth',
            func: 'width',
            css1: 'left',
            css2: 'width',
            sSize: 'scrollWidth',
            sStart: 'scrollLeft'
        }
    };

    var MOUSEEVENTS = function() {

        var onPinch = function(dir, elem, _this, e) {

            var func = _this.scrollToward;
            var scrollSpeed = 0;
            var bar_curr = _this[dir]['bar'][0]

            if (elem.hasClass('anchor')) {
                scrollSpeed = constant.anchorScrollSpeed;
                var value = elem.hasClass('head') ? -scrollSpeed : scrollSpeed;
            } else {
                var barRect = _this[dir]['bar'][0].getBoundingClientRect();
                var flag_move = (dir == 'vertical' ? e.clientY < barRect.top : e.clientX < barRect.left) ? 'head' : 'foot';
                scrollSpeed = constant.pageScrollSpeed;
                var value = (flag_move == 'head') ? -scrollSpeed : scrollSpeed;
            }

            func.interval = setInterval(function() {
                if (document.elementFromPoint(constant.clientX, constant.clientY) == bar_curr) {
                    clearInterval(proto.scrollToward.interval);
                    return;
                }
                _this.scrollToward(dir, value)
            }, 100)
        }

        var onDragStart = function(dir, obj) {

            constant.drag = {
                dir: dir,
                obj: obj,
                prev_clientX: constant.clientX,
                prev_clientY: constant.clientY
            }
        }

        var mouseEvents = function(dir) {
            var _this = this;

            this[dir]['scroll'].mousedown(function(e, dir) {
                var elem = $(e.target || e.srcElement);
                if (elem.hasClass('bar') || elem.hasClass('anchor'))
                    dir = elem.parent().attr('class').match(/vertical|horizontal/);
                else
                    dir = elem.attr('class').match(/vertical|horizontal/);
                if (elem.hasClass('bar')) {
                    onDragStart(dir, _this);
                } else
                    onPinch(dir, elem, _this, e);
                e.preventDefault();

            }).click(function(e) {
                e.stopPropagation();
            });


        }

        return {
            mouseEvents: mouseEvents
        }
    }


    var proto = {
        type: {
            0: 'vertical',
            1: 'horizontal'
        },
        injectStructure: function() {
            //Add Structure
            var frag = document.createDocumentFragment();
            var childnodes = this.elem[0].childNodes;

            while (childnodes.length)
                frag.appendChild(childnodes[0]);

            this.cover = $('<div>').addClass('cover');
            this.content = $('<div>').addClass('matchParent content');

            this.content.append($(frag));
            var obj = {
                'minWidth': this.elem.css('min-width'),
                'maxWidth': this.elem.css('max-width'),
                'minHeight': this.elem.css('min-height'),
                'maxHeight': this.elem.css('max-height')
            }
            this.content.css(obj);

            this.cover[0].setAttribute('onscroll', 'this.scrollLeft=this.scrollTop=0');
            this.cover.append(this.content);
            this.elem.append(this.cover);


            function foo(dir) {
                this[dir] = {
                    scroll: $('<div>').addClass('csb matchParent ' + dir),
                    head: $('<div>').addClass('matchParent anchor head'),
                    foot: $('<div>').addClass('matchParent anchor foot'),
                    bar: $('<div>').addClass('bar')
                }
                this[dir].scroll.append(this[dir].head).append(this[dir].bar).append(this[dir].foot);
                this.cover.append(this[dir].scroll)
                this.anchorSize = this[dir].head[this.getProperty(dir, 'func')]();
                this[dir].bar[0].style[this.getProperty(dir, 'css1')] = this.anchorSize + 'px';
            }

            foo.call(this, this.type[0])
            foo.call(this, this.type[1])

        },
        getPaneSize: function(dir) {
            var _ = this.getProperty(dir, 'func');
            var asize = this[dir].head[_]();
            var psize = this[dir].scroll[_]() - asize * 2;
            return {
                aSize: asize,
                pSize: (psize > -1) ? psize : 0
            }

        },
        /*
         *	Sets Bar Height
         *	Sets Ratio
         */
        setRatio: function(dir) {

            var css1 = this.getProperty(dir, 'css1');
            var css2 = this.getProperty(dir, 'css2');
            var sSize = this.getProperty(dir, 'sSize');
            var sStart = this.getProperty(dir, 'sStart');

            var obj = this.getPaneSize(dir);
            //No Min size for scroll bar has been set				
            var bSize = Math.max(this.params.barSize, Math.pow(obj.pSize, 2) / this.content[0][sSize]);
            this[dir].bar[0].style[css2] = bSize + 'px';


            var temp_sStart = this.content[0][sStart];
            this.content[0][sStart] = this.content[0][sSize];
            this[dir].maxsSize = this.content[0][sStart];
            this.content[0][sStart] = temp_sStart;

            if (this[dir].maxsSize != 0)
                this[dir].RATIO = (obj.pSize - bSize) / this[dir].maxsSize;
            else
                this[dir].RATIO = 0;

        },
        isScrollable: function(dir) {
            var sSize = this.getProperty(dir, 'sSize');
            sSize = this.content[0][sSize];

            var cSize = this.getProperty(dir, 'cSize');
            cSize = this.content[0][cSize];

            return sSize > cSize;

        },
        show: function(dir) {
            var type = dir ? {
                0: dir
            } : constant.type;
            for (key in type) {
                dir = type[key];
                if (this.isScrollable(dir)) {
                    this[dir]['scroll'].stop(true, true);
                    this[dir]['scroll'].fadeIn('slow');
                } else {
                    this.hide(dir);
                }
            }
        },
        hide: function(dir) {
            var type = dir ? {
                0: dir
            } : constant.type;
            for (key in type) {
                dir = type[key];
                this[dir]['scroll'].stop(true, true);
                this[dir]['scroll'].fadeOut('slow');
            }
        },
        onScrollSizeUpdate: function(dir) {
            this.setRatio(dir);
            this.show();
        },
        setBarStart: function(dir, value) {
            var css1 = this.getProperty(dir, 'css1');
            var func = this.getProperty(dir, 'func');
           // console.log(value, this[dir].RATIO, css1)
            value = (value * this[dir].RATIO) + this.anchorSize;
            this[dir].bar[0].style[css1] = value + 'px';
        },
        /*			
         *	May be due to scroll height change
         *	May be due to scrolling
         * 	Critical function and require synching
         */
        onScrollChange: function() {

            if (!this.synching) {
                this.synching = true;
                var obj = this.getProperty('type');

                for (key in obj) {
                    var val = obj[key]

                    //Get prevs state variables
                    var _sSize = this[val]._sSize || 0;
                    var _sStart = this[val]._sStart || 0;

                    //Get current state variables
                    var sSize = this.content[0][this.getProperty(val, 'sSize')];
                    if (_sSize != sSize) {

                        this.onScrollSizeUpdate(val)
                        this[val]._sSize = sSize;
                    }

                    var sStart = this.content[0][this.getProperty(val, 'sStart')];

                    if (_sStart != sStart) {
                        this.setBarStart(val, sStart)
                        this[val]._sStart = sStart;
                    }

                }
                this.synching = false;
            }
        },
        getProperty: function(path, prop) {
            return prop ? constant[path][prop] : constant[path];
        },
        scrollTo: function(dir, val) {
            var prop = this.getProperty(dir, 'sStart');
            this.content[0][prop] = val;
        },
        scrollToward: function(dir, val) {
            var prop = this.getProperty(dir, 'sStart');
            var value = this.content[0][prop];

            this.content[0][prop] += val;
        },
        attachEvents: function() {
            var _this = this;
            var type = constant.type;
            for (key in type) {
                var dir = type[key];
                //this.onScrollSizeUpdate(dir);								
                this.mouseEvents(dir);
            }
            this.onScrollChange();
            this.content.on('scroll	', function(e) {
                _this.onScrollChange();
            })
            this.cover.mouseenter(function() {
                _this.show();

            }).mouseleave(function() {
                if (!constant.drag)
                    _this.hide();
            });




        }
    }

    var csb_utils = function(elem, obj) {
        elem.csb = {
            reset: function() {
                obj.onScrollChange();
            },
            scrollToHead: function(dir) {},
            scrollToHead: function(dir) {},
            scrollTo: function() {},
            remove: function() {}
        };
    }

    

    var csb = function(elem, params) {
        this.elem = elem;
        this.params = $.extend({}, default_params, params);
        this.injectStructure();
        this.attachEvents()
        csb_utils(elem[0], this);

    }

    //Combining Modules into proto
    var extendArr = MOUSEEVENTS()

    for (key in extendArr) {
        proto[key] = extendArr[key];
    }
    csb.prototype = proto;

    var init = function(params) {
            var list = $('.nScroll');
            for (var i = list.length - 1; i > -1; i--) {
                list.eq(i).css({
                    'overflow': 'visisble'
                });
                new csb(list.eq(i), params)
            }
            list.removeClass('nScroll').addClass('nScrollable');

        }
        //Basic Event
    $(document).on('mouseup', function(e) {
        constant.drag = null;
        clearInterval(proto.scrollToward.interval);

    }).on('mousemove', function(e) {
        constant.clientX = e.clientX;
        constant.clientY = e.clientY;

        if (constant.drag) {


            var diffX = constant.clientX - constant.drag.prev_clientX;
            var diffY = constant.clientY - constant.drag.prev_clientY;

            var _this = constant.drag.obj;
            var dir = constant.drag.dir;


            var value = ((dir == 'vertical') ? diffY : diffX) / _this[dir].RATIO;

            _this.scrollToward(constant.drag.dir, value)

            constant.drag.prev_clientX = constant.clientX;
            constant.drag.prev_clientY = constant.clientY;
        }
    })

    return {
        init: init
    }
}());