 const db = require('./db')


const save = (cname, adrs, web,addinput,pid,features,subfeatures) => {
  // asynchronous
  return db.Company.findOne({ cname})
    .then(company => {
      console.log(company);
      if (company) {
        // already exist acno
        return {
          statusCode: 401,
          status: false,
          message: "company already exist...."
        }
      } else {
        const newCompany = new db.Company({
cname,
adrs,
web,
addinput,pid,features,subfeatures
        })
        newCompany.save()
        return {
          statusCode: 200,
          status: true,
          message:"added successfully"

        }

      }

    })
}




module.exports = {
    save
}