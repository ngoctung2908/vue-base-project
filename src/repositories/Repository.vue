<script>
import Client from './AxiosClient'

const get = (url) => {
    return Client.get(`${url}`)
}

const post = (url, obj) => {
    return Client.post(`${url}`, obj)
}

const update = (url, id, obj) => {
    return Client.put(`${url}/${id}`, obj)
}

const deleted = (url, id) => {
    return Client.delete(`${url}/${id}`)
}

export default {
    get,
    post,
    update,
    deleted,
}
</script>
