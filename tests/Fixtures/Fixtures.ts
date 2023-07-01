import { fixture } from "testcafe"

const defaultPage = 'https://devexpress.github.io/testcafe/example/'

class Fixtures {

    DefaultFixture = async (fixtureName: string) => {
        fixture(fixtureName)
        .page(defaultPage)
        .beforeEach(async t => {
            await t.setNativeDialogHandler(() => true)
        })
    }
}
export default new Fixtures()