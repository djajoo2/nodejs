
//Synchronus files system
//const {readFileSync,writeFileSync} =require('fs')

//const first=readFileSync('./content/first.txt','utf8')
//const second=readFileSync('./content/second.txt','utf8')

//console.log(first,second);

//writeFileSync('./content/second.txt','This is written text')
//writeFileSync('./content/second.txt','This is written text',{flag:'a'})


//Asynchronus file system
const {readFile,writeFile}=require('fs')
readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    const first=result;
    readFile('./content/second.txt','utf8',(err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        const second=result;
        writeFile('./content/result.txt',`Here is the result :${first}, ${second}`,
        (err,result)=>{
            if(err){
                console.log(err);
                return;
            }
            console.log(result);
        })
    })
})