export const fetchTasks = async () => {
    const url = '';
    console.log("fetching data...")
    return new Promise((resolve) => setTimeout(() => {
        console.log('       resolved')
        resolve(data)
    }, 4000))
}


const data = [
    {
        "_id": "670925f3f582f10ffd3c5ab0",
        "caption": "string",
        "description": "string",
        "startDate": "2024-09-11T00:00:00.000Z",
        "endDate": "2024-09-11T00:00:00.000Z",
        "schedule": "\"0 30 11 * * 1-5\" Monday to Friday at 11:30am",
        "__v": 0
    },
    {
        "_id": "67092776f582f10ffd3c5acd",
        "caption": "Helou",
        "description": "word",
        "startDate": "2024-09-11T00:00:00.000Z",
        "endDate": "2024-09-11T00:00:00.000Z",
        "schedule": "0 45 11 * * 1-5",
        "__v": 0
    }
]
