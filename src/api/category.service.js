import axios from "axios";
import Api from ".";

export const getAllCategory = (callback) => {
    axios.get(`${Api}/api/v1/category`).then((res) => {
        callback(true, res.data.data)
    }).catch((err) => {
        callback(false, err)
    })
}