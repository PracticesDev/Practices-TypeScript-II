"use strict";
(() => {
    const client = {
        name: 'Jorge',
        age: 25,
        address: {
            id: 123,
            zip: 'HGA 000',
            city: 'City'
        },
        getFullAddress(id) {
            return this.address.city;
        }
    };
    const client2 = {
        name: 'Alberto',
        age: 27,
        address: {
            id: 124,
            zip: 'HGA100',
            city: 'city'
        },
        getFullAddress(id) {
            return this.address.city;
        },
        tipo: 'Persona Natural'
    };
})();
//# sourceMappingURL=complejas.js.map