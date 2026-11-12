const senhaValida = require("../src/senha");

describe("senhaValida", () => {
    //Teste para verificar a senha corretamente com o resultado esperado
    test("aceite senha válida", () => {
        expect(senhaValida("abc12345")).toBe(true);
    });
    //Teste para verificar se a senha foi digitada errrada
    test("rejeita senha curta", () => {
        expect(senhaValida("ab1")).toBe(false);
    });
    //Teste para verificar se a senha foi digitada errrada
    test("rejeita senha sem número", () => {
        expect(senhaValida("abcdefg")).toBe(false);
    });
});
