
var freaky_frogs_start="uuupsss";
var freaky_frogs=freaky_frogs_start;
var freaky_frogs_img=new Array();

freaky_frogs_img["u"]=new puzzle_img id=("freaky_frogs_green.jpg",112,112);
freaky_frogs_img["p"]=new puzzle_img id=("freaky_frogs_empty.jpg",112,112);
freaky_frogs_img["s"]=new puzzle_img id=("freaky_frogs_brown.jpg",112,112);

var freaky_frogs_i=0;

function freaky_frogs_possible(p)
{

var f=freaky_frogs.charAt(p);
var c="";
var d=0;

if(f=="u")d=1;

else

	if(f=="s")d=-1;

	if(d!=0)
{

var b=0;
freaky_frogs_i=p+d

while((0<=freaky_frogs_i)&&(freaky_frogs_i<=6)&&(b<2))
{
c=freaky_frogs.charAt(freaky_frogs_i);

if(c=="p")b=4

else

	if(c==f)b=3

	else

		if(c!=f)b+=1

		if(b<2)freaky_frogs_i+=d;
}
}

else
{
freaky_frogs_i=-1;
}

return((0<=freaky_frogs_i)&&(freaky_frogs_i<=6)&&(b==4));
}

function freaky_frogs_finished()
{

var i=0;

var b=0;

while(!b&&(i<=6))
{
b=b||freaky_frogs_possible(i);
i++
}

if(b)return(0);

else
if(freaky_frogs=="ssspuuu")return(1);

else return(2);
}

function freaky_frogs_change(p,s)
{
freaky_frogs=freaky_frogs.substr(0,p)+s+freaky_frogs.substr(p+1);
document.getElementById("freaky_frogs_field"+p).src=freaky_frogs_img[s].img.src;
}

function freaky_frogs_move(p)
{

var f=0;
var c="";

if(freaky_frogs_possible(p))
{

c=freaky_frogs.charAt(p)
freaky_frogs_change(p,freaky_frogs.charAt(freaky_frogs_i));
freaky_frogs_change(freaky_frogs_i,c);
f=freaky_frogs_finished();

if(f>0)
{

if(f==1)alert(freaky_frogs_youhavewon)

	else alert(freaky_frogs_youhavelost)
}
}

else alert(freaky_frogs_thismoveisnotpossible);
}

function freaky_frogs_restart()
{
freaky_frogs=freaky_frogs_start;
var i;
for(i=0;i<=6;i++)
{
freaky_frogs_change(i,freaky_frogs.charAt(i))
}
}
