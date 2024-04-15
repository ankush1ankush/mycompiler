const path=require('path')
const fs=require('fs')
const {v4:uuid}=require('uuid')
const dirCodes=path.join(__dirname,"codes"); // creating path to the folder

if(!fs.existsSync(dirCodes))                    // checking if code folder exist for path
{
    fs.mkdirSync(dirCodes,{recursive: true}); // making code folder if it does not exist
}

const generateFile = async (format, code)=>{
    const jobId=uuid();
    const filename=`${jobId}.${format}`
    const filepath=path.join(dirCodes,filename); //create file path
   // console.log(filepath);
    await fs.writeFileSync(filepath,code)  // this will write the code in the file and if file done not exsist 
                                           //then will create the file.
    return filepath;
}

module.exports  = {
    generateFile
}