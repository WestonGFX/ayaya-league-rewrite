

<div align="center">
<h1>AyayaLeague</h1>
</div>

<div align="center">

<h1> I AM WRITING A NEW VERSION OF AYAYA-LEAGUE <h1/>

<h2>IF YOU WANT TO HELP ME, TRY THE PREVIEW OR SUGGEST SOMETHING TO MAKE / ADD FEEL FREE TO TALK IN THE NEW DISCORD SERVER <h2>

<h1>  https://discord.gg/76p9nyJg8e </h1>

</div>
## Prerequisites

- **Node.js v16 (32-bit)** - memoryjs only provides 32-bit binaries, so the 32-bit version of Node is required.
- **Visual Studio Build Tools** with C++ build tools - required to compile native addons.
- **Python 3** - needed by `node-gyp` during native build steps.

## Setup

1. Install the prerequisites listed above.
2. Clone this repository and install Node dependencies:
   ```bash
   git clone <repo-url>
   cd ayaya-league-rewrite
   npm install
   ```
3. Build native modules:
   ```bash
   npm run rebuild_memoryjs
   ```
4. Launch the client (this compiles TypeScript and starts Electron):
   ```bash
   npm run start
   ```

## Writing Scripts

1. Create a new TypeScript file in `userscripts/`.
2. Use `CoreScript` in `userscripts/core.ts` as a reference. Scripts implement the `IScript` interface from `types/ScriptTypes`.
3. Run `npm run generate-script-types` whenever you modify script types so editors pick up new definitions.
4. Start the app to test your script:
   ```bash
   npm run start
   ```
