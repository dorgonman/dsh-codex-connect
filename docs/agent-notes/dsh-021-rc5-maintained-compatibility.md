# DSH 0.2.1-rc.5 maintained compatibility

Codex Connect `0.2.0-alpha.5-kano.2` extends maintained commit
`e27ddc0961d0768f1b33fc1b5abd5af80fe27501` with exact DSH `0.2.1-rc.5`
admission. The target official DSH source is
`b830ec950faba0a46dda564be3e2d854afed94f1`. All 19 DSH peer declarations,
packaged compatibility metadata, development checker, and shared Host/browser
policy add only RC5; existing declarations remain intact. RC3, RC4, later
prereleases, mixed peers, and missing metadata do not gain support.

The runtime source APIs consumed by this plugin have no breaking changes in
the RC2-to-RC5 comparison. New conversation draft/view features and reasoning
body properties do not require adaptation of this plugin's registered slots.
The development SDK, Node requirement, dependencies, OAuth behavior, and feature
defaults remain unchanged. Host, browser, CLI, and type artifacts are rebuilt
from source so installed diagnostics share the exact version policy.

The [RC2 maintenance evidence](dsh-021-rc2-maintained-compatibility.md) remains
historical. `verified-compatibility.json` retains upstream records without adding
an untested stock-host matrix for this maintained version. This Git-distributed
package does not qualify for the unchanged numeric-only upstream Alpha npm
publication gate.

## Validation boundary

Focused tests cover exact RC5 policy admission, mixed RC2/RC5 and missing-peer
rejection, browser receipt validation, versioned diagnostics, and existing RC2
behavior. Build, source lint, typecheck, and strict development compatibility
checks use the existing frozen dependencies. Browser checks use synthetic
same-origin receipts and do not contact a provider or read saved accounts.

Actual RC5 Host/profile activation and service restart acceptance remain pending
the parent workspace's completed RC5 build and deployment. Passing receipt or
policy tests alone does not establish live Host compatibility or account access.

Local validation on 2026-11-01 passed the build, source lint, Host/client typecheck,
strict development compatibility gate, 153 focused tests across six files,
11 Chromium tests across two files, and the selected README-pair check.
Chromium coverage includes both the retained RC2 and new RC5 synthetic receipts.
The broad upstream stock-host matrix and real-provider acceptance were not run.
