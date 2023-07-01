import { Selector } from "testcafe"

export class ClickRadioByTestId {
    selector: Selector

    constructor(testId: string){
        this.selector = Selector('input').withAttribute('type', 'radio').withAttribute('data-testid', testId)
    }

    clickRadio (t: TestController) {
        return t.click(this.selector)
    }

    get checkRadioText (){
        return this.selector.parent('label').innerText
    }
}