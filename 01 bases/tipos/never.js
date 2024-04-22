"use strict";
(() => {
    //Never es tipo never = no debe de terminar exitosa generalmente termina con error
    const error = (message) => {
        throw new Error(message);
    };
    error('Error');
})();
//# sourceMappingURL=never.js.map