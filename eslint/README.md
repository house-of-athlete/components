## ESLint

Bit has support for ESLint via the `bit lint` command. But my (Brian's) attempts to configure `bit lint` as described at https://harmony-docs.bit.dev/aspects/envs/#linter have not been successful.
As a hack, I've configured ESLint the normal way in the sub-folder. See
`.github/workflows/eslint.yml` for an example of how to run this.

During development, I suggest the following:

- Disable ESLint plugins in your code editor.
- Enable a Prettier plugin for your code editor. The `eslint-config-hoa` preset already uses
  Prettier for formatting so this should enforce consistent style.
- Let ESLint run on CI before merging pull-requests.
