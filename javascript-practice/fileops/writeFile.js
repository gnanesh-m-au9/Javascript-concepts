/**
 * read data from file1.txt, read data from file2.txt
 * combine both data, sort them and then output to out.txt
 */
const fs = require('fs');
const os = require('os');
fs.readFile(`${__dirname}/file1.txt`, (err1, data1)=>{
    if(err1) throw err1;
    fs.readFile(`${__dirname}/file2.txt`, (err2, data2)=>{
        if(err2) throw err2;
        const sort1 = data1.toString().split(os.EOL).map(Number);
        const sort2 = data2.toString().split(os.EOL).map(Number);
        const sortedNumbers = [...sort1, ...sort2].sort((a,b)=>a-b).join(os.EOL);
        fs.writeFile(`${__dirname}/out.txt`, sortedNumbers, (err3)=>{
            if(err3) throw err3;
            console.log('Successfully read files, sorted them and added to output file')
        })
    })
})
