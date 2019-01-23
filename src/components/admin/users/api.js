import ajax from "@/ajax";

export function getUsers() {
    return ajax.reqAPI(
        `usrs`,
        {
            method: 'GET'
        }
    )
}

export function getUser(id, params) {
    return ajax.reqAPI(
        `usrs/${id}`,
        {
            method: 'GET',
            params
        }
    )
}


export function postUser(body) {
    return ajax.reqAPI(
        `usrs`,
        {
            method: 'POST',
            body
        }
    )
}

export function putUser(id, body) {
    return ajax.reqAPI(
        `usrs/${id}`,
        {
            method: 'PUT',
            body
        }
    )
}

export function putUserRole(id, body) {
    return ajax.reqAPI(
        `roles/${id}/add_usrs`,
        {
            method: 'PUT',
            body
        }
    )
}

export function deleteUser(id) {
    return ajax.reqAPI(
        `usrs/${id}`,
        {
            method: 'DELETE'
        }
    )
}