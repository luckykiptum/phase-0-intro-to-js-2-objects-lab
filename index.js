
  

const employee = {
    name: "Lucky",

    streetAddress: "Mai Mahiu Rd"
};

function updateEmployeeWithKeyAndValue(employee,name,Lucky){

return{
      ... employee,[name] : Lucky
}
}
function destructivelyUpdateEmployeeWithKeyAndValue(){
    employee.streetAddress = "12 Broadway";

    return employee;
}

function deleteFromEmployeeByKey(employee){

    const { name, ...newemployee} = employee;

    return newemployee;
}
function  destructivelyDeleteFromEmployeeByKey(employee){

    employee.name = undefined;
    return employee;

}

