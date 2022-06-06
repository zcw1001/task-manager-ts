import { Connection } from 'jsstore'
import workerInjector from "jsstore/dist/worker_injector"


// New LocalStorage
const storage = window.localStorage

// Get Default Task Filter
export function getDefaultTaskFilter() {
    const filter = storage.getItem('DefaultTaskFilter')
    if (filter) {
        return filter
    } else {
        storage.setItem('DefaultTaskFilter', 0)
        return '0'
    }
}

// Set Default Task Filter
export function setDefaultTaskFilter(filter) {
    storage.setItem('DefaultTaskFilter', filter)
}


// New Connection
const connection = new Connection()
connection.addPlugin(workerInjector);

// Init Database
export async function initDatabase() {
    const taskTable = {
        name: 'Task',
        columns: {
            id: { primary_key: true, autoIncrement: true },
            name: { notNull: true, dataType: "string" },
            priority: { notNull: true, dataType: "number" },
            completed: { notNull: true, dataType: "boolean" },
        }
    }
    return await connection.initDb({
        name: 'task-manager',
        tables: [ taskTable ]
    })
}

// Get Task
export function getTask(id) {
    return connection.select({
        from: 'Task',
        where: {
            id: id
        }
    })
}

// Get Tasks
export function getTasks() {
    return connection.select({
        from: 'Task'
    })
}

// Insert Tasks
export function insertTasks(tasks) {
    return connection.insert({
        into: 'Task',
        values: tasks
    })
}

// Insert Task
export function insertTask(task) {
    return connection.insert({
        into: 'Task',
        values: [ task ]
    })
}

// Toggle Task Completed
export function modifyTaskCompleted(id, completed) {
    return connection.update({
        in: 'Task',
        set: {
            completed: completed
        },
        where: {
            id: id
        }
    })
}

// Modify Task 
export function modifyTask(id, name, priority) {
    return connection.update({
        in: 'Task',
        set: {
            name: name,
            priority: priority
        },
        where: {
            id: id
        }
    })
}

// Delete Task
export function removeTask(id) {
    return connection.remove({
        from: 'Task',
        where: {
            id: id
        }
    })
}