Parse.initialize("VWKjOD7HOPdKCxCfICzyBRE2nu2g5k9KHGlMP7SZ", "nSVehOCLGFKkJnEaIfcrBqIxfjFOACAbcYGuaS5P");
 
 function jsonedu()
 {
	jsonEd = [];
        var course = $("#course0").val();
        var college = $("#college0").val();
		var board = $("#board0").val();
		var percent = $("#percent0").val();
		var pyear = $("#pyear0").val();

        item = {}
        item ["course"] = course;
        item ["college"] = college;
		item ["board"] = board;
		item ["percent"] = percent;
		item["pyear"]=pyear;

        jsonEd.push(item);
		
		if(!$("#course1").val()=="")
		{
			course = $("#course1").val();
			college = $("#college1").val();
			board = $("#board1").val();
			percent = $("#percent1").val();
			pyear = $("#pyear1").val();

        item = {}
        item ["course"] = course;
        item ["college"] = college;
		item ["board"] = board;
		item ["percent"] = percent;
		item["pyear"]=pyear;
        jsonEd.push(item);
		
		}
if(!$("#course2").val()=="")
		{
			course = $("#course2").val();
			college = $("#college2").val();
			board = $("#board2").val();
			percent = $("#percent2").val();
			pyear = $("#pyear2").val();
			
        item = {}
        item ["course"] = course;
        item ["college"] = college;
		item ["board"] = board;
		item ["percent"] = percent;
		item["pyear"]=pyear;
        jsonEd.push(item);
		
		}
		

   // console.log(jsonEd);
}
function jsonpro()
 {
	jsonPr = [];
        var title = $("#title0").val();
        var technology = $("#technology0").val();
		var description = $("#description0").val();
		
        item = {}
        item ["title"] = title;
        item ["technology"] = technology;
		item ["description"] = description;
		
        jsonPr.push(item);
		
		if(!$("#title1").val()=="")
		{
			title = $("#title1").val();
			technology = $("#technology1").val();
			description = $("#description1").val();
		
        item = {}
        item ["title"] = title;
        item ["technology"] = technology;
		item ["description"] = description;
		
        jsonPr.push(item);
		
		}
if(!$("#title2").val()=="")
		{
			title = $("#title2").val();
			technology = $("#technology2").val();
			description = $("#description2").val();
		
        item = {}
        item ["title"] = title;
        item ["technology"] = technology;
		item ["description"] = description;
		
        jsonPr.push(item);
		
		}
    //console.log(jsonEd);
}
function jsonintern()
 {
	jsonIn = [];
        var company = $("#company0").val();
        var duration = $("#duration0").val();
		var role = $("#role0").val();
		
        item = {}
        item ["company"] = company;
        item ["duration"] = duration;
		item ["role"] = role;
		
        jsonIn.push(item);
		
/*		if(!$("#company1").val()=="")
		{
			company = $("#company1").val();
			duration = $("#duration1").val();
			role = $("#role1").val();
		
        item = {}
        item ["company"] = company;
        item ["duration"] = duration;
		item ["role"] = role;
		
        jsonIn.push(item);
		
		}
if(!$("#company2").val()=="")
		{
			company = $("#company2").val();
			duration = $("#duration2").val();
			role = $("#role2").val();
		
        item = {}
        item ["company"] = company;
        item ["duration"] = duration;
		item ["role"] = role;
		
        jsonIn.push(item);
		
		}  */
		}
		
function jsonextra()
 {
	jsonEx = [];
        var event = $("#event0").val();
        var place = $("#place0").val();
		var extrarole = $("#extrarole0").val();
		
        item = {}
        item ["event"] = event;
        item ["place"] = place;
		item ["exrarole"] = extrarole;
		
        jsonEx.push(item);
		
		if(!$("#event1").val()=="")
		{
			event = $("#event1").val();
			place = $("#place1").val();
			extrarole = $("#extrarole1").val();
		
        item = {}
        item ["event"] = event;
        item ["place"] = place;
		item ["exrarole"] = extrarole;
		
        jsonEx.push(item);
		
		}
if(!$("#event2").val()=="")
		{
			event = $("#event2").val();
			place = $("#place2").val();
			extrarole = $("#extrarole2").val();
		
        item = {}
        item ["event"] = event;
        item ["place"] = place;
		item ["exrarole"] = extrarole;
		
        jsonEx.push(item);
		
		}		}


  function createJSON() {
  console.log("hello")

	var name=$("#name").val();
	var email=$("#email").val();
	var contact=parseInt($("#contact").val());
	console.log(name);
	console.log(email)
	jsonedu();
	var technical=$("#technical").val();
	jsonpro();
	jsonintern();
	jsonextra();
	var hobby=$("#hobby").val();
	var res=Parse.Object.extend("resumedb");
	var query1=new res();
	query1.save({"name":name,"email":email,"contact":contact,"education":jsonEd,"technical": technical,"projects":jsonPr,"internships":jsonIn,"extra":jsonEx,"hobby":hobby},{"success":function(object){console.log("success")},"error":function(object,e){console.log(e)}})
	
} 
function winprint()
{  
	$('#bt1').hide()
	$('#bt2').hide()
	$('#btn3').hide()
	$('#btn4').hide()
	window.print();

}