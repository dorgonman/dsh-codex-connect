import { resolve } from 'node:path'
import { defineConfig } from 'vitest/config'
import base from './vitest.config.ts'

const adapterModule = process.env.KANO_DSH_PI_AI_ADAPTER
if (!adapterModule) throw new Error('Set KANO_DSH_PI_AI_ADAPTER to the maintained Host llm-pi-ai library')

export default defineConfig({
  ...base,
  resolve: { alias: [{ find: /^@deepseek-ai\/dsh-llm-pi-ai$/u, replacement: resolve(adapterModule) }] },
  test: { ...base.test, include: ['tests/context-window-stream.spec.ts'] },
})
