// const data = '{ "name":"Rahim", "age": "29", "isStudent": true }'
// const result = JSON.parse(data);
// console.log(result);

// const data  = 'Data stolen by data baba';
// const result = JSON.parse(data);
// console.log(result);

//

try{
    const data = 'Data stolen by data baba';
    const result = JSON.parse(data);
    console.log(result);
} catch(error){
    console.log(`Error handled gracefully.`);
} finally{
    console.log('JSON parsing attempt completed');
}

//
try{
    console.log('Opening the file...');
} catch (error){
    console.log('Error:', error.message);
} finally{
    console.log('Closing the file');
}
//
function getProperty(str){
    try{
        return str.toUpperCase();
    } catch(error){
        console.error('Error eaten by virus');
    }
}
console.log(getProperty('My Name is Tanjila'));
console.log(getProperty());
//
function performanceCleanUp(){
    try{
        console.log('Starting a process...');
    } finally{
        console.log('Cleaning up resources...')
    }
}
performanceCleanUp();
//
function validateInput(input){
    try{
        if(typeof input !== 'string'){
            throw new Error ('Input must be a string');
        }
        console.log('Valid input:', input);
    } catch (error){
        if(error){
            console.error('Custom Error:', error.message);
        }else{
            console.error('Unknown Error:', error.message);
        }
    }
}
validateInput('Hello');
validateInput(42);

//
try{
    const data = JSON.parse('{ "product": "Data", "price": 450 }');
    console.log(data);
} catch(error){
    console.log("Invalid JSON format");
}
//
function validateInput1(input){
    try{
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailPattern.test(input)){
            throw new Error("Invalid email format");
        }
        console.log("valid email:", input);
    } catch (error){
        console.error(error.message);
    }
}
validateInput1("testxample.com");
validateInput1("wrongEmail");
//
try{
    const data =JSON.parse('{ "role": "CEO", "weeklyHours": 1000 }');
     console.log('week is over');
} catch(error){
    console.log('Invalid JSON format');
}
//
function stringOnlyParser(input){
    if(input === null || input === undefined){
        console.error('Input must be a String.');
    }else{
        console.log('Valid String:', input);
    }
}
stringOnlyParser("");
stringOnlyParser("Hello");
//
try{
    console.log("Deleting account");
    throw new Error('Network issue');
}catch(error){
    console.log('Failed to delete account');
} finally{
    console.log("Account deletion attempt finished");
}