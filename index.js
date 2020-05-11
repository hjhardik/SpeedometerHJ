$("#SpeedCheck").click(function(){
				var spdvalue = $("#Give").val();
				var initDegree=-120;
				var lastDegree=120;
				var rotateDeg;
				if(spdvalue <= 240){
					rotateDeg=initDegree+Math.round(spdvalue/2);
					}
				else if(spdvalue > 240 && spdvalue < 480 ){
					rotateDeg=Math.round(spdvalue/2)-lastDegree;
					}
					else{
						alert("Wrong Value")
						}
					$("#needle").css('-webkit-transform','rotate(-120deg)');
					$("#needle").css( { transition: "transform 3s",
                  	transform:  "rotate(" + rotateDeg + "deg)" } )
					$("#needleCircle").css( { transition: "transform 3s",
                  	transform:  "rotate(" + rotateDeg + "deg)" } )

					setTimeout( function() { $("#needle").css( { transition: "none" } ) }, 3000 );
					setTimeout( function() { $("#needleCircle").css( { transition: "none" } ) }, 3000 );

	(function($) {
    $.fn.countTo = function(options) {
        // merge the default plugin settings with the custom options
        options = $.extend({}, $.fn.countTo.defaults, options || {});

        // how many times to update the value, and how much to increment the value on each update
        var loops = Math.ceil(options.speed / options.refreshInterval),
            increment = (options.to - options.from) / loops;

        return $(this).each(function() {
            var _this = this,
                loopCount = 0,
                value = options.from,
                interval = setInterval(updateTimer, options.refreshInterval);

            function updateTimer() {
                value += increment;
                loopCount++;
                $(_this).html(value.toFixed(options.decimals));

                if (typeof(options.onUpdate) == 'function') {
                    options.onUpdate.call(_this, value);
                }

                if (loopCount >= loops) {
                    clearInterval(interval);
                    value = options.to;

                    if (typeof(options.onComplete) == 'function') {
                        options.onComplete.call(_this, value);
                    }
                }
            }
        });
    };

    $.fn.countTo.defaults = {
        from: 0,
        to: 100,
        speed: 1000,
        refreshInterval: 100,
        decimals: 0,
        onUpdate: null,
        onComplete: null,
    };
})(jQuery);

jQuery(function($) {
        $('.speedplus').countTo({
            from: 0,
            to: spdvalue,
            speed: 150,
            refreshInterval: 1,
            onComplete: function(value) {
                console.debug(this);
            }
        });
    });
});
