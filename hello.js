const nameArray = process.argv.slice(2)

function printHelloName (name) {
    if (name.length===0) {
        for (let i = 0; i<5; i++) {
            console.log("Hello, Karan")
        }
    } else if (name.length === 1) {
        for (let i = 0; i<5; i++) {
            console.log(`Hello, ${name[0]}`)
        }
    } else {
        const fullName = name.join(' ')
        // issue is here, we are reaching this section
        for (let i = 0; i<5; i++) {
            console.log(`Hello, ${fullName}`)
        }
    }
}

printHelloName(nameArray)