import { string } from "yup"
import { validations } from ("./index")


const validations = require("./index")
test('validations', ()=> {
    expect (password > 8 ).toBeTruthy()
})


const navigate = require("./index")
test('navigate', () => {
    expect(navigate()).toBeTruthy()
  })

 describe("validations", () =>{
  describe ("should be a string", () => {
   it ("deve ser string ", ()=> {
  expect(validations(string)).toBeTruthy()
     })
   })
 })

 describe()