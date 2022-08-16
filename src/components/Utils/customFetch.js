import dataProducts from "../dataProducts/dataProducts"

export const getDetailId = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(dataProducts.find(prod => prod.id === id))
        }, 500)
    })
}