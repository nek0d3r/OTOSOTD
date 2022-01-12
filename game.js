$(document).ready(function()
{	
	var awake = false;
	var oven = false;
	
	$("#rain")[0].loop = true;
	$("#rain")[0].volume = 0;
	$("#rain")[0].play();
	
	$("#menu").fadeIn();
	$("#menu .a1").click(function()
	{
		$("#rain").animate({"volume": "1"}, 1000);
		$("#menu").fadeOut();
		$("#start").fadeIn();
	});
	$("#start .a2").click(function()
	{
		$("#start .a2").contents().unwrap();
		$("#tv").fadeIn();
	});
	$("#tv .a1").click(function()
	{
		$("#tv").fadeOut();
	});
	$("#start").on("click", ".a1", function()
	{
		$("#start3").fadeOut();
		$("#window").fadeIn();
	});
	$("#start").on("click", ".a4", function()
	{
		$("#window2").fadeIn();
		$("#rain").animate({"volume": "0"}, 1000);
		$("#door2 .temp").remove();
		$("#kitchen .temp").remove();
		$("#living .temp").remove();
	});
	$("#window .a1").click(function()
	{
		$("#window").fadeOut();
	});
	$("#window2 .a1").click(function()
	{
		$("#window2 .temp").remove();
		$("#crowbar").fadeOut();
		$("#start").fadeOut();
		$("#start3").fadeOut();
		$("#window2").fadeOut();
		$("#ladder").fadeIn();
	});
	$("#ladder").on("click", ".a1", function()
	{
		$("#ladder").fadeOut();
		$("#shovel").fadeOut();
		$("#start").fadeIn();
	});
	$("#ladder .a2").click(function()
	{
		$("#ladder .a2").contents().unwrap();
		$("#ladder .a1").removeClass("a1").addClass("a3");
		$("#shovel").fadeIn();
	});
	$("#ladder").on("click", ".a3", function()
	{
		$("#ladder").fadeOut();
		$("#shovel").fadeOut();
		$("#living .window").addClass("a4");
		$("#dining .window").addClass("a3");
		if(oven)
			$("#kitchen .matches1").addClass("a6");
		awake = true;
		$("#start3").fadeIn();
		$("#start").fadeIn();
	});
	$("#start .a3").click(function()
	{
		$("#start .temp").remove();
		$("#start").fadeOut();
		$("#tv").fadeOut();
		$("#window").fadeOut();
		$("#crowbar").fadeOut();
		$("#window2").fadeOut();
		$("#start3").fadeOut();
		if(awake)
		{
			$("#hallway2").fadeIn();
		}
		$("#hallway").fadeIn();
	});
	$("#start2 .a1").click(function()
	{
		$("#hole").fadeIn();
	});
	$("#hole .a1").click(function()
	{
		$("#hallway .a6").removeClass("a6").addClass("a2");
		$("#start .a1").removeClass("a1").addClass("a4");
		$("#start2").fadeOut();
		$("#hole").fadeOut();
		$("#crowbar").fadeIn();
		$("#start").fadeIn();
	});
	$("#hallway2").on("click", ".a1", function()
	{
		$("#hallway2").fadeOut().remove();
		$("#hallway").fadeOut();
		$("#I-Fired-And-Then-I-Missed").fadeIn();
	});
	$("#I-Fired-And-Then-I-Missed .a1").click(function()
	{
		$("#I-Fired-And-Then-I-Missed").fadeOut();
		$("#And-Then-I-Woke-Up-And-I-Reloaded").fadeIn();
		$("#stairs").fadeIn();
	});
	$("#hallway").on("click", ".a2", function()
	{
		$("#hallway .temp").remove();
		if(awake)
		{
			$("#hallway2").remove();
		}
		$("#hallway2").fadeOut();
		$("#hallway").fadeOut();
		$("#start").fadeIn();
	});
	$("#hallway").on("click", ".a6", function()
	{
		$("#hallway2").fadeOut();
		if(awake)
		{
			$("#hallway2").remove();
		}
		$("#hallway").fadeOut();
		$("#start2").fadeIn();
	});
	$("#hallway .a3").click(function()
	{
		$("#hallway .temp").remove();
		if(awake)
		{
			$("#hallway2").remove();
			$("#door2p").fadeIn();
		}
		$("#hallway .a3").contents().unwrap();
		$("#hallway2").fadeOut();
		$("#hallway").fadeOut();
		if($("#rain")[0].volume > 0)
			$("#rain").animate({"volume": ".5"}, 1000);
		$("#door2").fadeIn();
	});
	$("#door2 .a1").click(function()
	{
		$("#door2p").fadeOut();
		$("#door2").fadeOut();
		$("#hallway").fadeIn();
	});
	$("#hallway .a4").click(function()
	{
		$("#hallway .temp").remove();
		if(awake)
		{
			$("#hallway2").remove();
			$("#door3p").fadeIn();
		}
		$("#hallway2").fadeOut();
		$("#hallway").fadeOut();
		$("#door3").fadeIn();
	});
	$("#door3 .a1").click(function()
	{
		$("#door3p").fadeOut();
		$("#door3").fadeOut();
		$("#closet").fadeOut();
		$("#box").fadeOut();
		$("#hallway").fadeIn();
	});
	$("#door3 .a2").click(function()
	{
		$("#closet").fadeIn();
	});
	$("#closet .a1").click(function()
	{
		$("#closet .a1").contents().unwrap();
		$("#hallway .a4").contents().unwrap();
		$("#door3 .a2").contents().unwrap();
		$("#box").fadeIn();
	});
	$("#box .a1").click(function()
	{
		$("#box").fadeOut();
		$("#closet").fadeOut();
	});
	$("#hallway .a5").click(function()
	{
		$("#hallway .temp").remove();
		$("#hallway2").fadeOut();
		if(awake)
		{
			$("#hallway2").remove();
			$("#door4p").fadeIn();
		}
		$("#hallway").fadeOut();
		$("#hallway .a5").contents().unwrap();
		$("#door4").fadeIn();
	});
	$("#door4 .a1").click(function()
	{
		$("#door4p").fadeOut();
		$("#door4").fadeOut();
		$("#shower").fadeOut();
		$("#hallway").fadeIn();
	});
	$("#door4 .a2").click(function()
	{
		$("#door4 .a2").contents().unwrap();
		$("#shower").fadeIn();
	});
	$("#hallway .a1").click(function()
	{
		$("#hallway .temp").remove();
		if(awake)
		{
			$("#hallway2").remove();
		}
		$("#hallway2").fadeOut();
		$("#hallway").fadeOut();
		$("#stairs").fadeIn();
	});
	$("#stairs .a4").click(function()
	{
		$("#stairs .temp").remove();
		$("#stairs").fadeOut();
		$("#And-Then-I-Woke-Up-And-I-Reloaded").fadeOut();
		$("#hallway").fadeIn();
	});
	$("#stairs .a1").click(function()
	{
		$("#stairs .temp").remove();
		$("#And-Then-I-Woke-Up-And-I-Reloaded").fadeOut();
		$("#stairs").fadeOut();
		if(awake)
		{
			if(!oven)
				$("#kitchen2 .temp").remove();
			$("#kitchen2").fadeIn();
			$("#kitchen .a5").remove();
		}
		if($("#rain")[0].volume > 0)
			$("#rain").animate({"volume": ".5"}, 1000);
		$("#kitchen").fadeIn();
	});
	$("#stairs .a2").click(function()
	{
		$("#stairs .temp").remove();
		$("#And-Then-I-Woke-Up-And-I-Reloaded").fadeOut();
		$("#stairs").fadeOut();
		if($("#rain")[0].volume > 0)
			$("#rain").animate({"volume": ".5"}, 1000);
		if(awake)
			$("#livingp").fadeIn();
		$("#living").fadeIn();
	});
	$("#stairs .a3").click(function()
	{
		$("#stairs .temp").remove();
		$("#And-Then-I-Woke-Up-And-I-Reloaded").fadeOut();
		$("#stairs").fadeOut();
		if(awake)
			$("#diningp").fadeIn();
		$("#dining").fadeIn();
	});
	$("#kitchen").on("click", ".a1, .a2", function()
	{
		$("#oven").fadeIn();
		$("#kitchen .a1").removeClass("a1");
		$("#kitchen .a2").contents().unwrap();
		oven = true;
		if(awake)
		{
			$("#kitchen .matches1").addClass("a6");
		}
	});
	$("#kitchen .a3").click(function()
	{
		$("#cupboards").fadeIn();
		$("#kitchen .a3").contents().unwrap();
		$("#kitchen .matches1").addClass("a1");
		$("#kitchen .matches2").addClass("a2");
	});
	$("#kitchen .a4").click(function()
	{
		$("#knife").fadeIn();
		$("#kitchen .a4").contents().unwrap();
		$("#hallway2 .knife").addClass("a1");
	});
	$("#kitchen .a5").click(function()
	{
		$("#kitchen").fadeOut();
		$("#cupboards").fadeOut();
		$("#knife").fadeOut();
		$("#oven").fadeOut();
		$("#stairs").fadeIn();
	});
	$("#kitchen").on("click", ".a6", function()
	{
		$("#kitchen2").fadeOut();
		$("#kitchen").fadeOut();
		$("#cupboards").fadeOut();
		$("#knife").fadeOut();
		$("#oven").fadeOut();
		$("#oven2").fadeIn();
	});
	$("#oven2 .a1").click(function()
	{
		$("#oven2").fadeOut();
		$("#living2").fadeIn();
	});
	$("#oven2 .a2").click(function()
	{
		$("#oven2").fadeOut();
		$("#dining2").fadeIn();
	});
	$("#living2 .a1").click(function()
	{
		$("#living2").fadeOut();
		$("#dining2").fadeIn();
	});
	$("#dining2 .a1").click(function()
	{
		$("#dining2 .a1").contents().unwrap();
		$("#gasline").fadeIn();
		$("#dining2 .temp").addClass("a2");
	});
	$("#dining2").on("click", ".a2", function()
	{
		$("#dining2").fadeOut();
		$("#gasline").fadeOut();
		$("#garage").fadeIn();
	});
	$("#garage .a1").click(function()
	{
		$("#garage").fadeOut();
		$("#endtrack")[0].play();
		$("#end").fadeIn();
		$("#end .temp").hide();
		setTimeout(function()
		{
			$("#end .temp").fadeIn();
		}, 2000);
	});
	$("#dining .a1").click(function()
	{
		$("#diningp").fadeOut();
		$("#dining").fadeOut();
		$("#chair").fadeOut();
		$("#bayfail").fadeOut();
		$("#stairs").fadeIn();
	});
	$("#dining .a2").click(function()
	{
		$("#chair").fadeIn();
	});
	$("#dining").on("click", ".a3", function()
	{
		$("#bayfail").fadeIn();
		$("#dining .a3").removeClass("a3");
		$("#living .a4").removeClass("a4");
	});
	$("#living .a1").click(function()
	{
		$("#living .a1").contents().unwrap();
		$("#front").fadeIn();
	});
	$("#living .a2").click(function()
	{
		$("#livingp").fadeOut();
		$("#living").fadeOut();
		$("#bayfail").fadeOut();
		$("#front").fadeOut();
		$("#stairs").fadeIn();
	});
	$("#living .a3").click(function()
	{
		$("#livingp").fadeOut();
		$("#living").fadeOut();
		$("#bayfail").fadeOut();
		$("#front").fadeOut();
		if(awake)
			$("#basementp").fadeIn();
		$("#basement").fadeIn();
	});
	$("#living").on("click", ".a4", function()
	{
		$("#bayfail").fadeIn();
		$("#dining .a3").removeClass("a3");
		$("#living .a4").removeClass("a4");
	});
	$("#basement .a1").click(function()
	{
		$("#basementp").fadeOut();
		$("#basement").fadeOut();
		$("#generator").fadeOut();
		$("#living").fadeIn();
	});
	$("#basement .a2").click(function()
	{
		$("#hallway .a2").removeClass("a2").addClass("a6");
		$("#basement .a2").contents().unwrap();
		$("#generator").fadeIn();
	});
	$("#generator .a1").click(function()
	{
		$("#basement").fadeOut();
		$("#generator").fadeOut();
		$("#start2").fadeIn();
	});
	
	var kkeys = [], konami = "38,38,40,40,37,39,37,39,66,65,13";
	$(document).keydown(function(e)
	{
		kkeys.push(e.keyCode);
		if(kkeys.toString().indexOf(konami) >= 0)
		{
			kkeys = [];
			$("p").hide();
			$("#endtrack")[0].play();
			$("#end").fadeIn();
			$("#end .temp").hide();
			setTimeout(function()
			{
				$("#end .temp").fadeIn();
			}, 2000);
		}
	});
});