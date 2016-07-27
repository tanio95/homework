$.ajax({
 method: "GET",
 url: "dat/data.json",
 dataType: "json"
}).done(function(dat){
	var table = $('table')
	dataone.forEach(function(data){
		var tr = "<tr><td>"+ data.colorName +"</td><td>"+ data.hexValue +"</td></tr>"

		table.append(tr);
	})
}).fail(function(error){
	alert("data cannot be load")
	console.log(error)
})
