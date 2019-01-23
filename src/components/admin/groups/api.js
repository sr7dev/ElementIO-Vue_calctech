import ajax from "@/ajax";

export function getGroups() {
    return ajax.reqAPI(
        `groups`,
        {
            method: 'GET'
        }
    )
}

export function getGroup(id, params) {
    return ajax.reqAPI(
        `groups/${id}`,
        {
            method: 'GET',
            params
        }
    )
}


export function postGroup(body) {
    return ajax.reqAPI(
        `groups`,
        {
            method: 'POST',
            body
        }
    )
}

export function putGroup(id, body) {
    return ajax.reqAPI(
        `groups/${id}`,
        {
            method: 'PUT',
            body
        }
    )
}

export function setGroupTutor(id, body) {
    return ajax.reqAPI(
        `groups/${id}`,
        {
            method: 'PUT',
            body
        }
    )
}

export function putUserGroup(id, body) {
    return ajax.reqAPI(
        `groups/${id}/add_usrs`,
        {
            method: 'PUT',
            body
        }
    )
}

export function deleteGroup(id) {
    return ajax.reqAPI(
        `groups/${id}`,
        {
            method: 'DELETE'
        }
    )
}