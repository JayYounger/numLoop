(function($){
	String.prototype.reverse=function(){
		return this.split("").reverse().join("");
	};
	$.easing.easeOut = function( p ) {
		return Math.sin( p * Math.PI / 2);
	};
	function strAddComma(str){
		var numArr=str.split('.');
		numArr[0]=numArr[0].reverse().replace(/[0-9]{3}(?!$)/g, '$&\,').reverse();
		if(numArr.length!=1){
			return (numArr[0]+'.'+numArr[1]);
		}else{
			return numArr[0];
		}
	}
	function coverMyCls(num,comma){
		var newStr =  comma?strAddComma(num+""):num+"";
		var html = "";
		var cha ='';
		for(var i=0;i<newStr.length;i++){
			cha = newStr.charAt(i);
			if(cha>=0&&cha<=9){
				html += '<span class="numberLoopWrap"><ul class="numberLoop" numTo="'+cha+'"><li>0</li><li>1</li><li>2</li><li>3</li><li>4</li><li>5</li><li>6</li><li>7</li><li>8</li><li>9</li></ul></span>';
			}else{
				html +=cha;
			}
		}
		return html;
		//<span class="numLoopWrap">4</span><span class="lbspan">5</span>,<span class="lbspan">1</span><span class="lbspan">2</span><span class="lbspan">5</span>,<span class="lbspan">0</span><span class="lbspan">0</span><span class="lbspan">0</span>
		//<ul class="numLoop" numTo="4"><li>0</li><li>1</li><li>2</li><li>3</li><li>4</li><li>5</li><li>6</li><li>7</li><li>8</li><li>9</li></ul>
	}
	$.fn.extend({
		numLoop:function(configs){
			configs = configs || {};
			this.each(function(){
				var $ts = $(this);
				var comma = configs.comma || false;
				var val = $ts.html();
				$ts.html(coverMyCls(val,comma));
			});
			return this;
		},
		startNumLoop:function(){
			this.each(function(){
				var $loopUl = $(this).find(".numberLoop");
				$loopUl.each(function(){
					var $ts = $(this);
					var numTo = $ts.attr("numTo")*1;
					var eachHeight = $ts.height()/10;
					var moveHeight = numTo*eachHeight*-1;
					$ts.animate({
						marginTop:moveHeight
					},1500,"easeOut");
				});
			});
			return this;
		}
	});
})(jQuery);