const os=require('os');

//info about current user
const user=os.userInfo();
console.log(user);

//method returns the system uptimes in seconds
const time=os.uptime();
console.log(time);

const currentOS={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()
}
console.log(currentOS);


//  path module
const path=require('path')
console.log(path.sep);
console.log(path.join('/content','subfolder','test.txt'));
console.log(path.basename(path.join('/content','subfolder','test.txt')));
console.log(path.resolve(__dirname,'content','subfolder','test.txt'));