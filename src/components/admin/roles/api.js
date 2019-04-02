import ajax from "@/ajax";



export function getRoles() {
    return ajax.reqAPI(
        `roles`,
        {
            method: 'GET'
        }
    )
}

export function getRole(id, pars) {
    return ajax.reqAPI(
        `roles/${id}`,
        {
            method: 'GET',
            pars
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