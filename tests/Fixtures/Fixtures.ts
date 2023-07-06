import { fixture } from 'testcafe'
import { defaultPage } from '../DemoSite.data'

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
