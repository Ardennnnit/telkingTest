function getData(params) {
    return axios.get("https://edu.telking.com/api/", {params}).then(res => res)
}