/*! UIkit 2.22.0 | http://www.getuikit.com | (c) 2014 YOOtheme | MIT License */
(function(UI) {

    "use strict";

    UI.component('buttonRadio', {

        defaults: {
            "activeClass": 'i-active',
            "target": ".i-button"
        },

        boot: function() {

            // init code
            UI.$html.on("click.buttonradio.uikit", "[data-i-button-radio]", function(e) {

                var ele = UI.$(this);

                if (!ele.data("buttonRadio")) {

                    var obj    = UI.buttonRadio(ele, UI.Utils.options(ele.attr("data-i-button-radio"))),
                        target = UI.$(e.target);

                    if (target.is(obj.options.target)) {
                        target.trigger("click");
                    }
                }
            });
        },

        init: function() {

            var $this = this;

            // Init ARIA
            this.find($this.options.target).attr('aria-checked', 'false').filter('.' + $this.options.activeClass).attr('aria-checked', 'true');

            this.on("click", this.options.target, function(e) {

                var ele = UI.$(this);

                if (ele.is('a[href="#"]')) e.preventDefault();

                $this.find($this.options.target).not(ele).removeClass($this.options.activeClass).blur();
                ele.addClass($this.options.activeClass);

                // Update ARIA
                $this.find($this.options.target).not(ele).attr('aria-checked', 'false');
                ele.attr('aria-checked', 'true');

                $this.trigger("change.uk.button", [ele]);
            });

        },

        getSelected: function() {
            return this.find('.' + this.options.activeClass);
        }
    });

    UI.component('buttonCheckbox', {

        defaults: {
            "activeClass": 'i-active',
            "target": ".i-button"
        },

        boot: function() {

            UI.$html.on("click.buttoncheckbox.uikit", "[data-i-button-checkbox]", function(e) {
                var ele = UI.$(this);

                if (!ele.data("buttonCheckbox")) {

                    var obj    = UI.buttonCheckbox(ele, UI.Utils.options(ele.attr("data-i-button-checkbox"))),
                        target = UI.$(e.target);

                    if (target.is(obj.options.target)) {
                        target.trigger("click");
                    }
                }
            });
        },

        init: function() {

            var $this = this;

            // Init ARIA
            this.find($this.options.target).attr('aria-checked', 'false').filter('.' + $this.options.activeClass).attr('aria-checked', 'true');

            this.on("click", this.options.target, function(e) {
                var ele = UI.$(this);

                if (ele.is('a[href="#"]')) e.preventDefault();

                ele.toggleClass($this.options.activeClass).blur();

                // Update ARIA
                ele.attr('aria-checked', ele.hasClass($this.options.activeClass));

                $this.trigger("change.uk.button", [ele]);
            });

        },

        getSelected: function() {
            return this.find('.' + this.options.activeClass);
        }
    });


    UI.component('button', {

        defaults: {},

        boot: function() {

            UI.$html.on("click.button.uikit", "[data-i-button]", function(e) {
                var ele = UI.$(this);

                if (!ele.data("button")) {

                    var obj = UI.button(ele, UI.Utils.options(ele.attr("data-i-button")));
                    ele.trigger("click");
                }
            });
        },

        init: function() {

            var $this = this;

            // Init ARIA
            this.element.attr('aria-pressed', this.element.hasClass("i-active"));

            this.on("click", function(e) {

                if ($this.element.is('a[href="#"]')) e.preventDefault();

                $this.toggle();
                $this.trigger("change.uk.button", [$this.element.blur().hasClass("i-active")]);
            });

        },

        toggle: function() {
            this.element.toggleClass("i-active");

            // Update ARIA
            this.element.attr('aria-pressed', this.element.hasClass("i-active"));
        }
    });

})(UIkit);

