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