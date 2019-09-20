





// These are all active businesses

const outEl = document.querySelector("#outputE1")
outEl.innerHTML += "<h1>Active Businesses</h1>"



businesses.forEach(business => {
    outEl.innerHTML += `
      <h2>${business.companyName}</h2>
      <section>
        ${business.addressFullStreet},
        ${business.addressCity},
        ${business["addressStateCode"]}
      </section>
    `
    outEl.innerHTML += "<hr/>"
});




// These are filtered results for NY

const outE2 = document.querySelector("#outputE2")
outE2.innerHTML += "<h1>New York Businesses</h1>"
const newYorkBusinesses = businesses.filter(business => {
    let inNewYork = false

    if (business.addressStateCode === "NY") {
        inNewYork = true
    }

    return inNewYork
})
newYorkBusinesses.forEach(business => {
    outE2.innerHTML += `
      <h2>${business.companyName}</h2>
      <section>
        ${business.addressFullStreet},
        ${business.addressCity},
        ${business["addressStateCode"]}
      </section>
    `
    outE2.innerHTML += "<hr/>"
});

//   These are filtered results for manufacturing businesses
const outE3 = document.querySelector("#outputE3")

outE3.innerHTML += "<h1>Manufacturing Businesses</h1>"
//my preferred way of filtering.....
const manufacturingBusinesses = businesses.filter(function (businesses) {
    return businesses.companyIndustry === "Manufacturing";
})
// console.log(manufacturingBusinesses)



manufacturingBusinesses.forEach(business => {
    outE3.innerHTML += `
      <h2>${business.companyName}</h2>
      <section>
        ${business.addressFullStreet},
        ${business.addressCity},
        ${business["addressStateCode"]}
      </section>
    `
    outE3.innerHTML += "<hr/>"
});


// map method below, purchasing agents
const outE4 = document.querySelector("#outputE4")
outE4.innerHTML += "<h1>Purchasing Agents</h1>";

/*
    Using map(), you extract the purchasing agent object
    from each business and store it in a new array
*/
const agents = businesses.map(business => {
    return business.purchasingAgent
})

// console.table(agents)

// agents.forEach(agent => {
//     outE4.innerHTML += `<h2>${agent.nameFirst} ${agent.nameLast}</h2>
//   <h3>${agent.company}</h3>
//   <h3> ${agent.phoneNumber}</h3>`;
//     outE4.innerHTML += "<hr/>";
// });

// Lightning Exercise: Instead of just returning the purchasing agent object, return a new object that has the full name of the purchasing agent, the company name, and the phone number. The data structure is shown below. Use that new data structure to display the agent with their company and phone number
const fullName = businesses.map(function(businesses){
    return businesses.purchasingAgent.nameFirst + " " + businesses.purchasingAgent.nameLast})

const company = businesses.map(function(businesses){
    
        return [businesses.companyName]
   
})
const phoneNumber = businesses.map(function(businesses){
    return businesses.phoneWork
})
const newResult =businesses.map(function(){
    return this.fullname, this.company ,this.phoneNumber
})
const agentsCompanyInfo = businesses.map(function(businesses){
    return [fullName, company, phoneNumber]})
// console.log(newResult)
console.log(agentsCompanyInfo)
// let test = []
// for (let index = 0; index < company.length; index++) {
//    test = company[index];
    
// }
// console.log(test)
// fullName.forEach(name => {
//    agentsCompanyInfo.push(fullName ) 
// });
// company.forEach(company => {
//     agentsCompanyInfo.push(company ) 
//  });

// agentsCompanyInfo.phoneNumber=[]

// agentsCompanyInfo.fullName.forEach(element => {
//     agentsCompanyInfo.push(fullName)
// });     
// agentsCompanyInfo.company.forEach(element => {

//  agentsCompanyInfo.push(company)
    
// });
// agentsCompanyInfo.forEach(element => {
    
// agentsCompanyInfo.push(phoneNumber)

// });

// console.log(phoneNumber)
// console.log(fullName)
// console.log(company)
console.table(agentsCompanyInfo)


// agentsCompanyInfo.forEach(element => {
//     outE4.innerHTML += `<h2>${fullName}</h2>
//   <h3>${company}</h3>
//   <h3> ${phoneNumber}</h3>`
//     outE4.innerHTML += "<hr/>";
// });