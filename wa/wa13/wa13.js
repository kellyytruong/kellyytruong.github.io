// Q1: Create JSON for each employee with the following details 
// (first name, department, designation, salary, raise eligible)
console.log("Question 1:");

const employees = [
        {
            "name" : "Sam",
            "department" : "Tech",
            "designation" : "Manager",
            "salary" : 40000,
            "raiseEligible" : true,
        },
        {
            "name" : "Mary",
            "department" : "Finance",
            "designation" : "Trainee",
            "salary" : 18500,
            "raiseEligible" : true,
        },
        {
            "name" : "Bill",
            "department" : "HR",
            "designation" : "Executive",
            "salary" : 21200,
            "raiseEligible" : false,
        }
    ]
console.log(employees);

// Q2: Create JSON for the company with the following details 
// (companyName, website, employees)
console.log("Question 2:");

const company = {
    "companyName" : "Tech Stars",
    "website" : "www.techstars.site",
    "employees" : [
        {
            "name" : "Sam",
            "department" : "Tech",
            "designation" : "Manager",
            "salary" : 40000,
            "raiseEligible" : true,
        },
        {
            "name" : "Mary",
            "department" : "Finance",
            "designation" : "Trainee",
            "salary" : 18500,
            "raiseEligible" : true,
        },
        {
            "name" : "Bill",
            "department" : "HR",
            "designation" : "Executive",
            "salary" : 21200,
            "raiseEligible" : false,
        },
    ]
}
console.log(company);

// Q3: A new employee has joined the company. Update the JSON 
// from problems 1 and 2 to reflect the addition of:
console.log("Question 3:");

const company2 = {
    "companyName" : "Tech Stars",
    "website" : "www.techstars.site",
    "employees" : [
        {
            "name" : "Sam",
            "department" : "Tech",
            "designation" : "Manager",
            "salary" : 40000,
            "raiseEligible" : true,
        },
        {
            "name" : "Mary",
            "department" : "Finance",
            "designation" : "Trainee",
            "salary" : 18500,
            "raiseEligible" : true,
        },
        {
            "name" : "Bill",
            "department" : "HR",
            "designation" : "Executive",
            "salary" : 21200,
            "raiseEligible" : false,
        },
    ]
}

const newEmployee = 
    {
        "name" : "Anna",
        "department" : "Tech",
        "designation" : "Executive",
        "salary" : 25600,
        "raiseEligible" : false,
    };
company2.employees.push(newEmployee);
console.log(company2);

// Q4: Given the JSON for the company, calculate the total salary for all company employees.
console.log("Question 4:");

let totalSalary = 0
for (let i = 0; i < company.employees.length; i++) {
    totalSalary += company.employees[i].salary
}
console.log(totalSalary);

// Q5: It's raise time. If an employee is raise eligible, increase their salary by 10%. 
// Given the JSON of the company and its employees, write a function to update the salary 
// for each employee who is raised eligible, then set their eligibility to false.
console.log("Question 5:");

const company3 = {
    "companyName" : "Tech Stars",
    "website" : "www.techstars.site",
    "employees" : [
        {
            "name" : "Sam",
            "department" : "Tech",
            "designation" : "Manager",
            "salary" : 40000,
            "raiseEligible" : true,
        },
        {
            "name" : "Mary",
            "department" : "Finance",
            "designation" : "Trainee",
            "salary" : 18500,
            "raiseEligible" : true,
        },
        {
            "name" : "Bill",
            "department" : "HR",
            "designation" : "Executive",
            "salary" : 21200,
            "raiseEligible" : false,
        },
        {
            "name" : "Anna",
            "department" : "Tech",
            "designation" : "Executive",
            "salary" : 25600,
            "raiseEligible" : false,
        }
    ]
}
function updateSalaryWithRaise(company) {
    for (let j = 0; j < company.employees.length; j++) {
        if (company.employees[j].raiseEligible === true) {
            let increaseSalary = company.employees[j].salary * 1.1; 
            company.employees[j].salary = increaseSalary;
            company.employees[j].raiseEligible = false;
        }
    }
}
updateSalaryWithRaise(company3);
console.log(company3.employees);

// Q6: Some employees have decided to work from home. 
// The following array indicates who is working from home. Use the array to update the company JSON. 
// For each employee, add another property called 'wfh' and set it to true of false
console.log("Question 6:");

const company4 = {
    "companyName": "Tech Stars",
    "website": "www.techstars.site",
    "employees": [
        {
            "name": "Sam",
            "department": "Tech",
            "designation": "Manager",
            "salary": 40000,
            "raiseEligible": true
        },
        {
            "name": "Mary",
            "department": "Finance",
            "designation": "Trainee",
            "salary": 18500,
            "raiseEligible": true
        },
        {
            "name": "Bill",
            "department": "HR",
            "designation": "Executive",
            "salary": 21200,
            "raiseEligible": false
        },
        {
            "name": "Anna",
            "department": "Tech",
            "designation": "Executive",
            "salary": 25600,
            "raiseEligible": false
        }
    ]
}

// Using a for loop to set "wfh" property
for (let k = 0; k < company4.employees.length; k++) {
    if (company4.employees[k].name === "Anna" || company4.employees[k].name === "Sam") {
        company4.employees[k].wfh = true;
    } else {
        company4.employees[k].wfh = false;
    }
}

console.log(company4.employees);