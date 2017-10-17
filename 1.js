//big();
var imgs = ['img[title=0]', 'img[title=1]', 'img[title=2]', 'img[title=3]'];
//step(0,imgs);
normal_step();

temer();

var step = 0;
//while (normal_step())
{
	
}



function timer()
{
	normal_step();
	setTimeout('temer',100);
}

function big()
{
	jQuery('img[title=0]').animate({'width':'1000'},2000);
	small();
}

function small()
{
	jQuery('img[title=0]').animate({'width':'640'},2000);
	big();
}


function normal_step()
{
	//var step = 0;
	
	for (var i in imgs)
	{
		jQuery(imgs[i]).css('position', 'fixed');
		jQuery(imgs[i]).css('top', (jQuery(imgs[i]).height())*1);
		jQuery(imgs[i]).css('left', 100*i+100);
		jQuery(imgs[i]).css('z-index', i);
		jQuery(imgs[i]).css('visibility', '');
		//jQuery(imgs[(i+step)%4]).animate({'left':(i+step)%4*i*100}, 2000);
	}
	first_steps(0, imgs);
	
	return ;
}

function first_steps(step, imgs)
{
	for (var i=0; i<4; i++)
	{
		var temp = (i+step)%4;
		
		
		
		jQuery(imgs[i]).animate({'z-index':temp});
		jQuery(imgs[i]).animate({'left':temp*100+100}, 2000);
	}
	
	steps(++step, imgs);
}

function steps(step, imgs)
{
	//step++;
	
	for (var i=0; i<4; i++)
	{
		var temp = (i+step)%4;
		if (temp == 0)
		//	jQuery(imgs[i]).css('visibility', 'hidden');
		//	jQuery(imgs[i]).animate({'visibility':'hidden'},100);
		{
			//jQuery(imgs[i]).css('left', 0);
			
			//jQuery(imgs[i]).animate({'z-index':temp},1000);
			//jQuery(imgs[i]).animate({'visibility':'hidden'},1000);
			//setTimeout(jQuery(imgs[i]).animate({'z-index':temp},0));
			
			jQuery(imgs[i]).fadeOut(800).animate({'left':100},0).animate({'z-index':temp},0).fadeIn(1600);
			//jQuery(imgs[i]).css('z-index',0);
			//setTimeout(jQuery(imgs[i]).css('z-index',0), 50);
			//jQuery(imgs[i]).;
			//jQuery(imgs[i]).animate('z-index',1000);
			
			
			//jQuery(imgs[i]).fadeIn(1100);
			continue;
		}
		
		
		
		jQuery(imgs[i]).animate({'z-index':temp});
		jQuery(imgs[i]).animate({'left':temp*100+100}, 2000);
	}
	//if (step == 4)
		//return step;
	
	steps(++step, imgs);
}
	
	
	
	
	
	