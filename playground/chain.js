require('../src/db/mongoose')
const Task = require('../src/models/task')
const User = require('../src/models/user')

// Task.findByIdAndRemove('5def72c74a62741f08d19bea').then((task) => {
//     console.log(task)

//     return Task.countDocuments({ completed: false})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

// const updateAgeAndCount = async (id, age) => {
//     const user = await User.findByIdAndUpdate(id, {age})
//     const count = await User.countDocuments({age})

//     return count
// }

// updateAgeAndCount('5def6edb638aac08a05d2e22', 10).then((count) => {
//     console.log(count)
// }).catch((e) => {
//     console.log(e)
// })

const removeTaskAndCount = async (id, completed) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed})
    return count
}

removeTaskAndCount('5def713abf3820164003a7da',false).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})