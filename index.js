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
  //console.log(records)
  const newEmployee = records.map(employee => createEmployeeRecord(employee))
  return newEmployee
}


function createTimeInEvent(obj, timeStamp){
  //console.log(obj)
   obj.timeInEvents.push({
      type: 'TimeIn',
      hour: parseInt(timeStamp.slice(-4),10),
      date: timeStamp.slice(0,10)
  })
  return obj
}

function createTimeOutEvent(obj, timeStamp){
    obj.timeOutEvents.push({
        type: 'TimeOut',
        hour: parseInt(timeStamp.slice(-4), 10),
        date: timeStamp.slice(0,10)
  })
  return obj
}

function hoursWorkedOnDate(obj, date){

  let timeOut = obj.timeOutEvents.find(element => element.date === date)
  let timeIn = obj.timeInEvents.find(element => element.date === date)
 return (timeOut.hour - timeIn.hour) / 100
 
  //return ((obj.timeOutEvents[0].hour)/100) - ((obj.timeInEvents[0].hour)/100)
 
}

function wagesEarnedOnDate(obj, date){
  return hoursWorkedOnDate(obj, date) * obj.payPerHour
}

function allWagesFor(obj){
  let dates = obj.timeInEvents.map(element => element.date)
  let wages = 0
  for(let date of dates){
    wages += wagesEarnedOnDate(obj,date)
  }
    return wages
}


function calculatePayroll(employeeRecordsArr){
  let total = 0
  for(let rec of employeeRecordsArr){
    total += allWagesFor(rec)
  }
  return total
}