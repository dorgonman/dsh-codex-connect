# Kano maintained rc.3 profile contract

`0.2.0-alpha.15-kano.1` is a private maintained build for KOA-BUG-0194, based on
upstream `0.2.0-alpha.15` at `16c7b3e99acd194c2ec0b5d5431930d6f7314b94`.
It is distinct from the published npm artifact and does not change the upstream
release history or stock host verification claims.

The maintained DSH rc.3 adapter requires per-profile request model, protocol,
header, and cross-origin indexes. Codex Connect supplies fresh empty indexes,
matching the maintained host's defaults. Its native model, OAuth endpoint,
stream protocol, headers, permissions, and optional capabilities stay governed
by their existing paths. No host source changes or peer exemptions are required.

Run the focused offline test against a maintained host's compiled adapter:

```powershell
$env:KANO_DSH_PI_AI_ADAPTER = '<host>/packages/llm/llm-pi-ai/lib/index.js'
pnpm run test:maintained-host
```

The test forbids network access and uses synthetic credentials. It resolves a
model, prepares and consumes a stream, and checks that native route metadata and
configured headers reach the provider unchanged. This is separate from live
account acceptance and the required `pnpm run check` stock regression suite.

The offline maintained-host check passed four cases on Node `25.9.0` against
DSH source `ab7af4a34a36139f57e946725e2b1d05f3145a97`. The focused stock adapter
checks passed 21 cases. Source lint, typechecking, build, isolated import,
environment proxy, capability CLI, request metrics, compatibility, and package
checks passed.

The complete `pnpm run check` exited at the unit stage: 2,474 passed, 35 failed,
and 10 skipped. All 35 failures reproduced on pristine upstream Alpha 15 with
the same dependencies and Windows runtime: retained Task host-policy fixtures,
symlink/permission guards, and retained native-compaction subprocess fixtures.
No failing guard was weakened. These baseline failures remain a validation
limit; the focused offline results do not establish live account acceptance.

## GPT-6.2 on the maintained host

Private build `0.2.0-alpha.15-kano.2` adds `gpt-6.2-sol` and
`gpt-6.2-astra` for DSH-TSK-0007. Sol uses a 500,000-token default context
and Astra uses 272,000. Both allow local context overrides up to 872,000
tokens. The pinned source is the [official Codex model catalog](https://github.com/openai/codex/blob/6c0cee502d215e5df2dd9a303cf2e252229c9e12/codex-rs/models-manager/models.json).

DSH source `1725b44f908f962ab483c39a01c3fa9283f30248` also expects a
per-model native-tool index and a stream idle timeout index. The adapter uses
empty maps for both so the host applies its ordinary request behavior and
provider timeout.

On Node `25.9.0`, 124 focused tests and six maintained-host tests passed.
The host tests exercised both GPT-6.2 IDs through the mocked SSE stream.
Build, package inventory, compatibility, isolated import, environment proxy,
capability CLI, and request metrics checks passed.

The full Windows check reached the unit stage with LF files. It recorded
2,480 passes, 10 skips, and the same 35 failing cases as the earlier Alpha 15
baseline.
