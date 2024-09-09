const data = [
    {
        id: 1,
        price: 200
    },
    {
        id:2,
        price: 200
    }
]

const mapp = data.map(item => item.price)
const total = mapp.reduce((acc, item) => acc + item, 0)

const id = 1
const check = data.findIndex((item) => item.id === id)
const exist = data[check]
const check2 = total - exist.price

console.log({
    totalkemarin: total,
    dataExist: exist,
    totalHapusGakjadi: check2
})
