var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "axios"], function (require, exports, axios_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getPokemon = void 0;
    axios_1 = __importDefault(axios_1);
    const getPokemon = (pokemonId) => __awaiter(void 0, void 0, void 0, function* () {
        const { data } = yield axios_1.default.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
        return data;
    });
    exports.getPokemon = getPokemon;
});
//# sourceMappingURL=get-pokemon.js.map