$.get("https://api.covid19india.org/data.json", function(data){
        let s='';
        console.log(data);
        for(let i=1;i<data.statewise.length;i++)
        {
            s+='<tr><td>'+ data.statewise[i].state +'</td><td>'+ data.statewise[i].confirmed +'</td><td>'+ data.statewise[i].active+'</td><td>'+ data.statewise[i].recovered +'</td><td>'+ data.statewise[i].deaths +'</td></tr>';
        }
        document.getElementById("t1").innerHTML+=s;
});


