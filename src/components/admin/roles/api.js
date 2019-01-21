import ajax from "@/ajax";



export function getRoles() {
    return ajax.reqAPI(
        `roles`,
        {
            method: 'GET'
        }
    )
}

export function getRole(id, params) {
    return ajax.reqAPI(
        `roles/${id}`,
        {
            method: 'GET',
            params
        }
    )
}

export function postRole(body) {
    return ajax.reqAPI(
        `roles`,
        {
            method: 'POST',
            body
        }
    )
}

export function putRole(id, body) {
    return ajax.reqAPI(
        `roles/${id}`,
        {
            method: 'PUT',
            body
        }
    )
}

export function deleteRole(id) {
    return ajax.reqAPI(
        `roles/${id}`,
        {
            method: 'DELETE'
        }
    )
}