import { Selector } from 'testcafe'

export class SelectSliderOption {
  selector: Selector

  constructor() {
    this.selector = Selector('div').withAttribute('id', 'slider')
  }

  clickAndDragSlider = async (t: TestController, x: number, y: number) => {
    const dropdownSelector = this.selector
    await t.drag(dropdownSelector, x, y)
  }
}
