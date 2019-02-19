import ajax from "@/ajax";


export function getTasks(pars) {
    return ajax.reqAPI(
        `tasks`,
        {
            method: 'GET',
            pars
        }
    )
}

export function assignTask(id, body) {
    return ajax.reqAPI(
        `tasks/${id}/assign`,
        {
            method: 'PUT',
            body
        }
    )
}

export function moderateTask(id, body) {
    return ajax.reqAPI(
        `tasks/${id}/moderate`,
        {
            method: 'PUT',
            body
        }
    )
}

export function acceptTask(id, body) {
    return ajax.reqAPI(
        `tasks/${id}/accept`,
        {
            method: 'PUT',
            body
        }
    )
}