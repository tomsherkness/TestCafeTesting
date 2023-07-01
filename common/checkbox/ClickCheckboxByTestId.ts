import { Selector } from "testcafe"

export class ClickCheckBoxByTestId {
    selector: Selector

    constructor(testId: string){
        this.selector = Selector('input').withAttribute('type', 'checkbox').withAttribute('data-testid', testId)
    }

    clickCheckBox (t: TestController) {
        return t.click(this.selector)
    }

    get checkboxText (){
        return this.selector.parent('label').innerText
    }
}