import { mount } from '@vue/test-utils'
import { huevo, espinaca } from './jestTest'
import App from '@/App.vue'

const wrapper = mount(App)

/*describe('Se probará la calidad de los productos', () => {
  test('Calidad del huevo', () => {
    expect(huevo().estado[0]).toBe('fresco')
  })
  test('Calidad de la espinaca', () => {
    expect(espinaca()).toEqual({ estado: 1, color: 'verde' })
  })
})*/

describe('Probar que se cambió la propiedad changeTest ', () => {

  test('should click a button', () => {

  const lastValue = wrapper.vm.changeTest

  wrapper.find('button').trigger('click')

  expect(wrapper.vm.changeTest).toBe(lastValue+1)

})

})