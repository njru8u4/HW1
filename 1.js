//big();
var imgs = ['img[title=0]', 'img[title=1]', 'img[title=2]', 'img[title=3]'];
//step(0,imgs);
normal_step();
temer();

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
		jQuery(imgs[i]).css('top', -(jQuery(imgs[i]).height()-20)*i);
		jQuery(imgs[i]).css('left', 100*i);
		jQuery(imgs[i]).css('z-index', i);
		//jQuery(imgs[(i+step)%4]).animate({'left':(i+step)%4*i*100}, 2000);
	}
	steps(0, imgs);
	
	return ;
}

function steps(step, imgs)
{
	//step = (step>100)?0:step;
	step++;
	
	for (var i=0; i<4; i++)
	{
		var temp = (i+step)%4;
		jQuery(imgs[i]).animate({'z-index':temp});
		jQuery(imgs[i]).animate({'left':temp*100}, 2000);
	}
	//if (step == 4)
		//return step;
	
	steps(step, imgs);
}
	
	
	
	
	
	