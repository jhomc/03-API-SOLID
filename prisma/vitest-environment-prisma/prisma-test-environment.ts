import { Environment } from 'vitest'

export default <Environment>{
  name: 'prisma',
  async setup() {
    console.log('ok')
    return {
      teardown() {},
    }
  },
}
