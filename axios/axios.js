

/////////////////////////////////////////////

const aws = require('aws-sdk');
const fs= require('fs');


const s3 = new aws.S3({
    accessKeyId: "AKIA4Y43KNAXD5IMOPNF",
    secretAccessKey: "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",
    region: "ap-northeast-2"});


var param={
    'Bucket':"mztod",
    'Key':"cover_dance/"+"test",
    'ACL':'public',
    'Body': fs.createReadStream("C:/Users/JK/Desktop/Front-End/MZtoD/img/MZtoD로고.jpeg"),
    'Content-Type':'image/jpeg'

}

s3.upload(param, function(err, data){
    console.log(err);
    console.log(data);
});