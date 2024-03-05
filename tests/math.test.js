const math = require('../math');

test('soma 2 + 3 igual a 5', () => { 
    expect(math.soma(2, 3)).toBe(5); 
}); 

test('subtração  2 - 3 igual a -1', () => { 
    
    expect(math.subtracao(2, 3)).toBe(-1); 
}); 

test('Multiplicacao 2 * 3 igual a 6', () => { 
    expect(math.multiplicacao(2, 3)).toBe(6); 
}); 

 

test('Divisão 9 / 3 igual a 3', () => { 
    expect(math.divisao(9, 3)).toBe(3); 
}); 


test('Multiplicacao 1.3 * 3 igual a 3.9 ', () => { 
    expect(math.multiplicacao(1.3, 3)).toBe(3.9); 
});


for(i=0;i<1000;i++)
{
    var a = Math.floor(Math.random()*100)
    var b = Math.floor(Math.random()*100)

    test('divisao '+a+' / '+b+' igual a '+(a/b)+' ', () => { 
        expect(math.divisao(a, b)).toBe(a/b); 
        
    }); 

}

