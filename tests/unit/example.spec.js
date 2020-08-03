import { mount } from '@vue/test-utils'
import { huevo, espinaca } from './jestTest'
import App from '@/App.vue'

/*const wrapper = mount(App)

const vm = wrapper.vm

console.log(vm.$data)*/

describe('Se probará la calidad de los productos', () => {
  test('Calidad del huevo', () => {
    expect(huevo().estado[0]).toBe('fresco')
  })
  test('Calidad de la espinaca', () => {
    expect(espinaca()).toEqual({ estado: 1, color: 'verde' })
  })
})