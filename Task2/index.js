// const os = require('os')
// const path = require('path')

// const math = require('./math')
// const myInfo = require('./info')


// console.log(os.version())
// console.log(path.dirname(__filename))

// console.log(add(2,3))
// console.log(sub(2,3))
// console.log(multi(2,3))
// console.log(div(2,3))


// console.log('Fact (7) : ' + math.fact(7))
// console.log('My Name : ' + myInfo.myName())
// console.log('My Major : ' + myInfo.myMajor())

const fs = require('fs')
const readLine = require('readline')

const userInput = readLine.createInterface({
    input: process.stdin,
    // output: process.stdout
})

async function main() {
    try {

        // 1
        try {
            await fs.promises.access('input.txt', fs.constants.F_OK);
            console.log('Input File exists');
            console.log('Reading...');
            const data = await fs.promises.readFile('input.txt');
            console.log("Data is :" + data.toString())
            console.log('Finish Reading');

        } catch (error) {
            console.log('Input File does not exists');
            process.exit()
        }


        // 2 && 3

        try {
            await fs.promises.access('output.txt', fs.constants.F_OK);
            console.log('Outpput File exists');
            console.log("Do you want to overwrite the file ? (y,n)")
            userInput.on('line', async (input) => {
                // console.log(input)
                if (input === 'y') {
                    // console.log('yes')
                    const content = "Hello from index new"
                    await fs.promises.writeFile('output.txt', content)
                    console.log('The overwrite is done')
                }
                else {
                    // console.log("no")
                    console.log('the operation is canceld')
                    process.exit();
                }
            })
        } catch (error) {
            console.log('Output File does not exists');
            process.exit();
        }

        // 4
        console.log('----------EX.4----------')
        console.log('Updating ...')
        const append = "\nthis is something"
        await fs.promises.appendFile('output.txt', append)
        console.log("Update is done.")
        console.log("removing input.txt")
        fs.unlinkSync('./input.txt')
        console.log("remove is done")






        // await fs.access('input.txt', fs.constants.F_OK, (err) => {
        //     if (err) {
        //         console.error('File does not exist');
        //     } else {
        //         console.log('File exists');
        //     }
        // });
        // console.log("is exist : " + x)
        // write file 

        // const content = "Hello from index"
        // await fs.promises.writeFile('output.txt', content)

        // append to output

        // const append = "\nthis is something"
        // await fs.promises.appendFile('output.txt', append)

        // console.log("finished")

        // rename file

        // await fs.promises.rename('input.txt', 'inputNew.txt')
    } catch (error) {
        console.error(error)
    }
}

main()