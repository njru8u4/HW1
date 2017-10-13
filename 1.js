big();

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


