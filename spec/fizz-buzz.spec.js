require('../spec.helper')

describe('Fizz Buzz', () => {
    let fizzBuzz = new FizzBuzz

it('returns a number if no game rules are met', () => {
    expect(fizzBuzz.check(1)).to.eql(1)
})
it('returns Fizz if number is divisible by 3', () => {
    expect(fizzBuzz.check(3)).to.eql('Fizz')
})
it('returns FizzBuzz if number is divisible by 15', () => {
    expect(fizzBuzz.check(15)).to.eql('FizzBuzz')
})
})

describe('User can input a value and get FizzBuzz results', () => {
    before(async () => {
        await  browser.init()
        await  browser.visitPage('http://localhost:8080/')
    });

    beforeEach(async () => {
        await  browser.page.reload();
    })

    after(async ()=> {
        await  browser.close();
    })
})
