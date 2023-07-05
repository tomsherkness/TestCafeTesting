import { Selector } from "testcafe"

export class ClickDropdownOptionByTestId {
    selector: Selector

    constructor(testId: string){
        this.selector = Selector('select').withAttribute('data-testid', testId)
    }

    clickDropdownOption = async (t: TestController, optionText: string) => {
        const dropdownSelector = this.selector
        const optionSelector = dropdownSelector.find('option').withText(optionText)
        await t.click(this.selector)
        await t.click(optionSelector)
    }

    get value (){
        return this.selector.value
    }
}