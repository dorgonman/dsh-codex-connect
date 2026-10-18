# DSH 0.2.1-rc.2 maintained compatibility

This maintained package derives from upstream Codex Connect `v0.2.0-alpha.5`
(`ed4148465587e4b3bcb39778a8cbf875346ce0de`). Version
`0.2.0-alpha.5-kano.1` adds the exact DSH `0.2.1-rc.2` version to all
19 DSH peer declarations, packaged metadata, development checker, and the
shared Host/browser policy. It preserves existing exact host declarations,
the `0.1.7-rc.1` development SDK, Node engine, plugin-owned pi-ai `0.85.1`,
and feature defaults. Mixed peers and later releases remain unverified.

The tracked Host, browser, CLI, and type artifacts are rebuilt from source.
This is a Git-distributed maintenance package; it is not an upstream npm
release. The upstream numeric-only Alpha publication gate remains unchanged
and does not accept the maintenance suffix. Existing public npm installation
recommendations remain historical upstream recommendations.

Focused validation uses synthetic data and does not read saved accounts or
send live provider requests. The compatibility policy checks all declared
versions and rejects mixed RC1/RC2 peers. Runtime identity checks include an
exact RC2 Host receipt in Chromium. An isolated installed-profile check uses
the locally built maintained DSH RC2 host; its evidence is recorded separately
from upstream stock-host release matrices and live-account acceptance.

## Local validation on 2026-10-18

- Frozen dependency installation, source lint, Host/client typecheck, and build passed.
- Strict development compatibility checking passed against the unchanged development SDK.
- Focused policy/runtime-identity checks passed: 112 tests; Chromium runtime-identity
  and client-injection checks passed: 10 tests. The final affected snapshot,
  installation-guidance, policy, receipt, and README-pair checks passed: 91 tests.
- The packed plugin installed through the maintained DSH RC2 CLI with lifecycle
  scripts disabled into a fresh isolated profile.
- The official `scripts/check-installed-runtime.mjs` passed against maintained
  DSH source `f56578625d014fc5e517683ea8221c1c6e2e5316`, using an isolated anchor
  linking the 361 existing built workspace packages. This anchor supplies the
  complete public package set expected by the published-host helper; the CLI's
  workspace manifest alone does not directly resolve every browser dependency.
  All 11 model registrations/preparations, plugin disposal, Reserve transitions,
  ten fresh-process native-checkpoint lifecycle checks, synthetic image paths,
  and request metrics passed. Real provider requests: zero.
- The initial full Windows unit run did not pass: 1,793 passed, 188 failed,
  three skipped. The maintained-version snapshot and installation-guidance
  failures were corrected and rechecked. Broader upstream filesystem permission,
  symlink, and checkout line-ending assumptions are recorded as limitations;
  this patch does not change those frozen feature paths.

The upstream ten-host stock-install matrix and live-account acceptance were not
run for this maintenance package. `verified-compatibility.json` retains the
upstream evidence without adding an untested maintained-package matrix.
