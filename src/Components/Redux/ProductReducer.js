const initialState = {
    product: [
        {
            "rank": "A",
            "chairList": [
                { "chairNumber": "A1", "price": 75000, "booking": false },
                { "chairNumber": "A2", "price": 75000, "booking": false },
                { "chairNumber": "A3", "price": 75000, "booking": false },
                { "chairNumber": "A4", "price": 75000, "booking": false },
                { "chairNumber": "A5", "price": 75000, "booking": false },
                { "chairNumber": "A6", "price": 75000, "booking": false },
                { "chairNumber": "A7", "price": 75000, "booking": false },
                { "chairNumber": "A8", "price": 75000, "booking": false },
                { "chairNumber": "A9", "price": 75000, "booking": false },
                { "chairNumber": "A10", "price": 75000, "booking": false },
                { "chairNumber": "A11", "price": 75000, "booking": true },
                { "chairNumber": "A12", "price": 75000, "booking": true }
            ]
        },
        {
            "rank": "B",
            "chairList": [
                { "chairNumber": "B1", "price": 75000, "booking": false },
                { "chairNumber": "B2", "price": 75000, "booking": false },
                { "chairNumber": "B3", "price": 75000, "booking": false },
                { "chairNumber": "B4", "price": 75000, "booking": false },
                { "chairNumber": "B5", "price": 75000, "booking": false },
                { "chairNumber": "B6", "price": 75000, "booking": false },
                { "chairNumber": "B7", "price": 75000, "booking": false },
                { "chairNumber": "B8", "price": 75000, "booking": false },
                { "chairNumber": "B9", "price": 75000, "booking": false },
                { "chairNumber": "B10", "price": 75000, "booking": false },
                { "chairNumber": "B11", "price": 75000, "booking": false },
                { "chairNumber": "B12", "price": 75000, "booking": false }
            ]
        },
        {
            "rank": "C",
            "chairList": [
                { "chairNumber": "C1", "price": 75000, "booking": false },
                { "chairNumber": "C2", "price": 75000, "booking": false },
                { "chairNumber": "C3", "price": 75000, "booking": false },
                { "chairNumber": "C4", "price": 75000, "booking": false },
                { "chairNumber": "C5", "price": 75000, "booking": false },
                { "chairNumber": "C6", "price": 75000, "booking": false },
                { "chairNumber": "C7", "price": 75000, "booking": false },
                { "chairNumber": "C8", "price": 75000, "booking": false },
                { "chairNumber": "C9", "price": 75000, "booking": false },
                { "chairNumber": "C10", "price": 75000, "booking": false },
                { "chairNumber": "C11", "price": 75000, "booking": false },
                { "chairNumber": "C12", "price": 75000, "booking": false }
            ]
        }, {
            "rank": "D",
            "chairList": [
                { "chairNumber": "D1", "price": 75000, "booking": false },
                { "chairNumber": "D2", "price": 75000, "booking": false },
                { "chairNumber": "D3", "price": 75000, "booking": false },
                { "chairNumber": "D4", "price": 75000, "booking": false },
                { "chairNumber": "D5", "price": 75000, "booking": false },
                { "chairNumber": "D6", "price": 75000, "booking": false },
                { "chairNumber": "D7", "price": 75000, "booking": false },
                { "chairNumber": "D8", "price": 75000, "booking": false },
                { "chairNumber": "D9", "price": 75000, "booking": false },
                { "chairNumber": "D10", "price": 75000, "booking": false },
                { "chairNumber": "D11", "price": 75000, "booking": false },
                { "chairNumber": "D12", "price": 75000, "booking": false }
            ]
        }, {
            "rank": "E",
            "chairList": [
                { "chairNumber": "E1", "price": 75000, "booking": false },
                { "chairNumber": "E2", "price": 75000, "booking": false },
                { "chairNumber": "E3", "price": 75000, "booking": false },
                { "chairNumber": "E4", "price": 75000, "booking": false },
                { "chairNumber": "E5", "price": 75000, "booking": false },
                { "chairNumber": "E6", "price": 75000, "booking": false },
                { "chairNumber": "E7", "price": 75000, "booking": false },
                { "chairNumber": "E8", "price": 75000, "booking": false },
                { "chairNumber": "E9", "price": 75000, "booking": false },
                { "chairNumber": "E10", "price": 75000, "booking": false },
                { "chairNumber": "E11", "price": 75000, "booking": false },
                { "chairNumber": "E12", "price": 75000, "booking": false }
            ]
        }, {
            "rank": "F",
            "chairList": [
                { "chairNumber": "F1", "price": 75000, "booking": false },
                { "chairNumber": "F2", "price": 75000, "booking": false },
                { "chairNumber": "F3", "price": 75000, "booking": false },
                { "chairNumber": "F4", "price": 75000, "booking": false },
                { "chairNumber": "F5", "price": 75000, "booking": false },
                { "chairNumber": "F6", "price": 75000, "booking": false },
                { "chairNumber": "F7", "price": 75000, "booking": false },
                { "chairNumber": "F8", "price": 75000, "booking": false },
                { "chairNumber": "F9", "price": 75000, "booking": false },
                { "chairNumber": "F10", "price": 75000, "booking": false },
                { "chairNumber": "F11", "price": 75000, "booking": false },
                { "chairNumber": "F12", "price": 75000, "booking": false }
            ]
        }, {
            "rank": "G",
            "chairList": [
                { "chairNumber": "G1", "price": 75000, "booking": false },
                { "chairNumber": "G2", "price": 75000, "booking": false },
                { "chairNumber": "G3", "price": 75000, "booking": false },
                { "chairNumber": "G4", "price": 75000, "booking": false },
                { "chairNumber": "G5", "price": 75000, "booking": false },
                { "chairNumber": "G6", "price": 75000, "booking": false },
                { "chairNumber": "G7", "price": 75000, "booking": false },
                { "chairNumber": "G8", "price": 75000, "booking": false },
                { "chairNumber": "G9", "price": 75000, "booking": false },
                { "chairNumber": "G10", "price": 75000, "booking": false },
                { "chairNumber": "G11", "price": 75000, "booking": false },
                { "chairNumber": "G12", "price": 75000, "booking": false }
            ]
        }, {
            "rank": "H",
            "chairList": [
                { "chairNumber": "H1", "price": 75000, "booking": false },
                { "chairNumber": "H2", "price": 75000, "booking": false },
                { "chairNumber": "H3", "price": 75000, "booking": false },
                { "chairNumber": "H4", "price": 75000, "booking": false },
                { "chairNumber": "H5", "price": 75000, "booking": false },
                { "chairNumber": "H6", "price": 75000, "booking": false },
                { "chairNumber": "H7", "price": 75000, "booking": false },
                { "chairNumber": "H8", "price": 75000, "booking": false },
                { "chairNumber": "H9", "price": 75000, "booking": false },
                { "chairNumber": "H10", "price": 75000, "booking": false },
                { "chairNumber": "H11", "price": 75000, "booking": false },
                { "chairNumber": "H12", "price": 75000, "booking": false }
            ]
        }, {
            "rank": "I",
            "chairList": [
                { "chairNumber": "I1", "price": 75000, "booking": false },
                { "chairNumber": "I2", "price": 75000, "booking": false },
                { "chairNumber": "I3", "price": 75000, "booking": false },
                { "chairNumber": "I4", "price": 75000, "booking": false },
                { "chairNumber": "I5", "price": 75000, "booking": false },
                { "chairNumber": "I6", "price": 75000, "booking": false },
                { "chairNumber": "I7", "price": 75000, "booking": false },
                { "chairNumber": "I8", "price": 75000, "booking": false },
                { "chairNumber": "I9", "price": 75000, "booking": false },
                { "chairNumber": "I10", "price": 75000, "booking": false },
                { "chairNumber": "I11", "price": 75000, "booking": false },
                { "chairNumber": "I12", "price": 75000, "booking": false }
            ]
        }, {
            "rank": "J",
            "chairList": [
                { "chairNumber": "J1", "price": 75000, "booking": false },
                { "chairNumber": "J2", "price": 75000, "booking": false },
                { "chairNumber": "J3", "price": 75000, "booking": false },
                { "chairNumber": "J4", "price": 75000, "booking": false },
                { "chairNumber": "J5", "price": 75000, "booking": false },
                { "chairNumber": "J6", "price": 75000, "booking": false },
                { "chairNumber": "J7", "price": 75000, "booking": false },
                { "chairNumber": "J8", "price": 75000, "booking": false },
                { "chairNumber": "J9", "price": 75000, "booking": false },
                { "chairNumber": "J10", "price": 75000, "booking": false },
                { "chairNumber": "J11", "price": 75000, "booking": false },
                { "chairNumber": "J12", "price": 75000, "booking": false }
            ]
        }

    ],
    productSelected: []
    // [{ "chairNumber": "A1", "price": 75000, "booking": false },
    // { "chairNumber": "A2", "price": 75000, "booking": false },
    // { "chairNumber": "A3", "price": 75000, "booking": false },],
}
    
const ProductReducer = (state = initialState,action) => {
    switch(action.type){
        case'Change_Selected': {
            const newSelected  =[...state.productSelected]
            const index = newSelected.findIndex((item)=>item.chairNumber===action.payload.chairNumber)
            if (index !== -1){
                newSelected.splice(index,1)
            }
            else {newSelected.push(action.payload)}
            return {...state, productSelected:newSelected}
        }
        default: return state
    }
}
export default ProductReducer
