$(document).ready(function() {
	var step=1;var s_q=1;act_st=1;
	var stps=[0,25,50,75,100];f_cl=false;
	var vls=['0%','3%','5%','7%','10%','10%'];
		$('input[name="f_q2"]').click(function(e){e.stopPropagation();
			$(this).parent('div').parent('div').addClass('hd');
			$(this).parent('div').parent('div').children('div').removeClass('rd');
			$(this).parent('div').addClass('rd');
			$('.qu1').removeClass('hd');
			step=1;act_st=1;vp_n=bc_n=false;f_cl=true;
			set_st();
		});
		$('input[name="s_q"]').click(function(e){e.stopPropagation();
			$(this).parent('div').parent('div').addClass('hd');
			$(this).parent('div').parent('div').children('div').removeClass('rd');
			$(this).parent('div').addClass('rd');
			if($(this).val()=='1'){
				$('.qu_t').removeClass('hd');
				s_q=1;
			}else{
				$('.qu_t1').removeClass('hd');
				s_q=2;
			}
			step=2;act_st=2;vp_n=bc_n=false;
			set_st();
		});
		$('input[name="t_q"],input[name="t1_q"]').click(function(e){e.stopPropagation();
			$(this).parent('div').parent('div').addClass('hd');
			$(this).parent('div').parent('div').children('div').removeClass('rd');
			$(this).parent('div').addClass('rd');
			$('.qu').removeClass('hd');
			step=3;act_st=3;vp_n=bc_n=false;
			set_st();
		});
		$('input[name="f_q"]').click(function(e){e.stopPropagation();
			$(this).parent('div').parent('div').addClass('hd');
			$(this).parent('div').parent('div').children('div').removeClass('rd');
			$(this).parent('div').addClass('rd');
			$('.qu_cnt').removeClass('hd');
			$('#ty').removeClass('hd');
			step=4;act_st=4;vp_n=bc_n=false;
			set_st();
		});
		$('.plv, .plv2, .trt').click(function(e){
			$(this).children('input').click();
		});
		$('#bck').click(function(e){
			if(!f_cl)return false;
			$('.stp').addClass('hd');
			if(vp_n&&act_st!=4)act_st--;
			if(act_st==4){
				$('.qu').removeClass('hd');
				$('#ty').addClass('hd');
			}
			if(act_st==3){
				if(s_q==1)$('.qu_t').removeClass('hd');
				if(s_q==2)$('.qu_t1').removeClass('hd');
			}
			if(act_st==2)$('.qu1').removeClass('hd');
			if(act_st==1)$('.q1u').removeClass('hd');

			if(act_st!=1)act_st--;
			vp_n=false;
			bc_n=true;
		});
		$('#vp').click(function(e){
				if(bc_n&&act_st!=1)act_st++;bc_n=false;
				if(act_st==1){
					if(typeof $('.q1u').children('div').children('input[name="f_q2"]:checked').val()=='undefined')return false;
					$('.stp').addClass('hd');
					$('.qu1').removeClass('hd');
				}
				if(act_st==2){
					if(typeof $('.qu1').children('div').children('input[name="s_q"]:checked').val()=='undefined')return false;
					$('.stp').addClass('hd');
					if(s_q==1)$('.qu_t').removeClass('hd');
					if(s_q==2)$('.qu_t1').removeClass('hd');
				}
				if(act_st==3){
					if(s_q==1)if(typeof $('.qu_t').children('div').children('input[name="t_q"]:checked').val()=='undefined')return false;
					if(s_q==2)if(typeof $('.qu_t1').children('div').children('input[name="t1_q"]:checked').val()=='undefined')return false;
					$('.stp').addClass('hd');
					$('.qu').removeClass('hd');
				}
				if(act_st==4){
					if(typeof $('.qu').children('div').children('input[name="f_q"]:checked').val()=='undefined')return false;
					$('.stp').addClass('hd');
					$('.qu_cnt').removeClass('hd');
					$('#ty').removeClass('hd');
				}
				if(act_st!=4)act_st++;
				vp_n=true;
		});
		$('.snd').click(function(e){
			if($('input[name="s_q"]:checked').val()=='1')tq=$('input[name="t_q"]:checked').val();
			else tq=$('input[name="t1_q"]:checked').val();
			step++;
			set_st();
			$.post('ajax.php',{
				'f_q':$('input[name="f_q"]:checked').val(),
				'f_q2':$('input[name="f_q"]:checked').val(),
				's_q':$('input[name="s_q"]:checked').val(),
				't_q':tq,
				'nm':$('.nm').val(),
				'em':$('.em').val()
				},function(d){alert('Сообщение отправлено');});
		});

		$( "#slide1" ).slider({
		animate: true,
		range: "min",
		value: 1,
		min: 1,
		max: 100,
		step: 1,
		slide: function( event, ui ) {
				$( "#rr1" ).val(' '+ui.value);
			},
		change: function (event, ui) {
				//clc();
			}
		});

		function set_st(){
			$("#slide1").slider('value',stps[step]);
			$('#skd').html(vls[step]);
		}

	});


$(document).ready(function() {
	$('input[name="phone1"]').click(function(e){e.stopPropagation();
		$(this).parent('div').parent('div').children('div').removeClass('rd');
		$(this).parent('div').addClass('rd');
	});

	$('.trt2').click(function(e){
		$(this).children('input').click();
	});
})
