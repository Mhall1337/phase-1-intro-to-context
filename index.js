// Your code here
function createEmployeeRecord(record){
    const employeeRecord = {
        firstName: record[0],
        familyName: record[1],
        title: record[2],
        payPerHour: record[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return employeeRecord
}
function createEmployeeRecords(records){
  const newEmployee = records.map(employee => createEmployeeRecord(employee))
  return newEmployee
}


function createTimeInEvent(obj, timeStamp){
   obj.timeInEvents = [{
      type: 'TimeIn',
      hour: parseInt(timeStamp.slice(-4),10),
      date: timeStamp.slice(0,10)
  }]
  return obj
}

function createTimeOutEvent(obj, timeStamp){
    obj.timeOutEvents = [{
        type: 'TimeOut',
        hour: parseInt(timeStamp.slice(-4), 10),
        date: timeStamp.slice(0,10)
  }]
  return obj
}

function hoursWorkedOnDate(obj, date){
  return ((obj.timeOutEvents[0].hour)/100) - ((obj.timeInEvents[0].hour)/100)
 
}

function wagesEarnedOnDate(obj, date){
  return hoursWorkedOnDate(obj, date) * obj.payPerHour
}

function allWagesFor(obj){
  //console.log(obj)
}