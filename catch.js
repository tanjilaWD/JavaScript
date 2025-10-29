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