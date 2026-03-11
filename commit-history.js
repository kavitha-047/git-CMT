const jsonfile = require("jsonfile")
const moment = require("moment")
const simpleGit = require("simple-git")

const git = simpleGit()
const FILE_PATH = "./data.json"

async function commit(date){

    const data = {
        date: date
    }

    await jsonfile.writeFile(FILE_PATH, data)

    await git.add(FILE_PATH)

    await git.commit("Automated commit - contribution update", {
        "--date": date
    })

}

async function run(){

    const start = moment().subtract(1, "year")

    for(let i = 0; i < 365; i++){

        const day = start.clone().add(i, "days")

        const commitCount = Math.floor(Math.random() * 4)

        for(let j = 0; j < commitCount; j++){

            const randomHour = Math.floor(Math.random() * 24)
            const randomMinute = Math.floor(Math.random() * 60)

            const commitDate = day.clone()
                .add(randomHour, "hours")
                .add(randomMinute, "minutes")
                .format()

            console.log(`Creating commit for ${commitDate}...`)

            await commit(commitDate)

        }

    }

    console.log("✅ All commits created successfully!")
    console.log("📊 Push to GitHub with: git push origin main -f")

}

run().catch(err => console.error("❌ Error:", err.message))
