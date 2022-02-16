var xlsx=require('xlsx')

var wb=xlsx.readFile('test.xlsx',{cellDates:true})

//console.log(wb.SheetNames);

var ws=wb.Sheets["Sheet1"]
//console.log(ws)
var data =xlsx.utils.sheet_to_json(ws)
//console.log(data)
var newData=data.filter((row)=>{return row.__EMPTY_15=="SAIL"; });
console.log(newData);

var filtered_data=data.filter((row)=>{return row.__EMPTY_15=="SAIL" && row.__EMPTY_10== "BOBSNM1"});
console.log(filtered_data);