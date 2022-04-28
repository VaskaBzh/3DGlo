import timer from './modules/timer'
import modal from './modules/modal'
import menu from './modules/menu'
import formValidate from './modules/formValidate'
import smoothDwnBtn from './modules/smoothDwnBtn'
import calculatorValidate from './modules/calculatorValidate'
import calculator from './modules/calculator'
import tabs from './modules/tabs'
import slider from './modules/slider'
import sendForm from './modules/sendForm'
import helpers, { animate } from './modules/helpers'

timer('30 april 2022') 
modal()
menu()
formValidate()
smoothDwnBtn()
calculatorValidate()
calculator(100)
tabs()
slider()
sendForm({
    formId: 'form1', 
    someElem: [
        {
            type: 'block',
            id: 'total'
        }
    ] 
})
sendForm({
    formId: 'form2', 
    someElem: [
        {
            type: 'block',
            id: 'total'
        }
    ] 
})
sendForm({
    formId: 'form3', 
    someElem: [
        {
            type: 'block',
            id: 'total'
        }
    ] 
})
helpers()