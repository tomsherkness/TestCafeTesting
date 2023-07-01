import { Selector } from "testcafe"

export class TextInputByTestId {
    selector: Selector

    constructor(elementType: string, testId: string){
        this.selector = Selector(elementType).withAttribute('data-testid', testId)
    }

    typeText (t: TestController, text: string) {
        return t.typeText(this.selector, text, { replace: true })
    }

    get value(){
        return this.selector.value
    }
}