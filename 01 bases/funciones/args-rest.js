"use strict";
(() => {
    const fullName = (firstName, ...restArg) => {
        return `${firstName} ${restArg.join(' ')}`;
    };
    const superman = fullName('nombre', 'de', 'ejemplo');
    console.log(superman);
})();
//# sourceMappingURL=args-rest.js.map