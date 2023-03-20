class SuperTask{
    constructor(prallelCount = 1 ) {
        this.prallelCount = prallelCount;
        this.runningCount = 0; //正在运行的任务数
        this.tasks = []
    }

    add(task) {
        return new Promise((resolve, reject) => {
            this.tasks.push({
                task,
                resolve,
                reject
            })
            this._run();
        })
        
    }

    _run() {
        while (this.runningCount < this.prallelCount && this.tasks.length) {
            const {task, resolve, reject} = this.tasks.shift();
            // console.log("_run task ==", task);
            this.runningCount++;
            task().then(resolve, reject).finally(() => {
                this.runningCount--;
                this._run();
            })
        }
    }
}


const superTask = new  SuperTask();
function timeout(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, time);
    })
}
function addTask(time, name) {
    // console.log("function task =", time, name, "superTask ==", superTask);
    superTask.add(() => timeout(time)).then(() => {
        console.log("task = " +  name);
    })
}

addTask(1000, "name_1")
addTask(5000, "name_2")
addTask(3000, "name_3")
addTask(2000, "name_4")
