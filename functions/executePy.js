const {exec}=require("child_process");
const path =require('path');
const fs= require('fs');

const outputPath =path.join(__dirname,"outputs")


if(!fs.exists(outputPath, ()=>{
      console.log("checking outPut directory")
    })){
    fs.mkdir(outputPath,{recursive:true},(err) => {
        if (err) {
            return console.error(err);
        }
        console.log('Directory created successfully!');
    })
}


const executePy =(filepath ,inputFilePath)=>{
   
  
   // console.log(inputFilePath);
    //5ebe9699-ac2d-4af9-8bc3-3f93742aa066.cpp
  

    return new Promise((resolve,reject)=>{

        process.chdir(outputPath); // Change the working directory

        exec(`python ${filepath} < ${inputFilePath}`,(error,stdout,stderr)=>{
            if(error)
            {
                reject({error,stderr});
            }
            if(stderr)
            {
                reject(stderr);
                
            }
            resolve(stdout);
        });
        
    });

}

module.exports={
    executePy
}