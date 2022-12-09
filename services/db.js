const mongoose=require('mongoose')

//connction string to connect db with string'
mongoose.connect('mongodb://localhost:27017/companyServer',{
useNewUrlParser:true})

mongoose.set('strictQuery', true);


const Company=mongoose.model('Company',
{  pid: String,
     cname: String, 
     adrs: String,
     web:String,
     features:String,
     subfeatures:String,
     addinput:String,



     
} 
)

    module.exports={
        Company
    }
