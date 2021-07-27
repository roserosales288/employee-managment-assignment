const mysql= require('mysql');

const inquirer = require('inquirer');
const table = require('console.table')

const connection = mysql.createConnection({
    host: 'localhost',

    port:3306,

    user: 'root',

    password: 'Campbelld11!',
    database:'employee_db'
})

// * Add departments, roles, employees

// * View departments, roles, employees

// * Update employee roles

connection.connect(  function(){

     menu() 

} ) 



function menu(){
  
    inquirer.prompt([
        {
            type:'list',
            message:'choose the following',
            name: 'selection',
            choices:['Add departments','Add roles','Add employees','View departments','View roles','View employees','Update employee roles']
        }
    ])
    .then(function(response){
        if(response.selection==='Add departments'){
            addDepartment()
        }
        else if(response.selection==='Add roles'){
            addRole()
        }

        else if(response.selection==='Add employees'){
            addEmployees()
        }

    else if(response.selection==='View departments'){
            viewDepartments()
    }
    else if(response.selection==='View roles'){
        viewRoles()
    }
    else if(response.selection==='View employees'){
        viewEmployees()
    }

    else if(response.selection==='Update Employee Roles'){
        updateEmployeeRoles()
    }
    })


}


function addDepartment(){
    inquirer.prompt([{
        type:'input',
        message:'What Department is This?',
        name:'departmentName'
    }])
    .then(function(response){
        connection.query('INSERT INTO department(name) values(?)',[response.departmentName],function(error,data){
            if(error) throw error
            console.log('New Department has Been Added')
            menu()
        })
    })

}
function addRole(){

}

function addEmployees(){

}

function viewDepartments(){
   connection.query('select * from department',function(error,data){
         if(error)throw error
          
         console.table(data)
         menu()
   })
}

function viewRoles(){
connection.query('select * from role',function(error,data){
    if(error)throw error
    console.table(data)
    menu()
})
}


function viewEmployees(){
 connection.query('select * from employee',function(error,data){
     if(error)throw error
     console.table(data)
     menu()
 })
}

function updateEmployeeRoles(){

}