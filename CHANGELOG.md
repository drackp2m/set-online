# v1.5.0 (2024-12-12)

## What's Changed

### ✨ Features

- **app**: make generic repository compatible with transactions between stores ([6934859](https://github.com/drackp2m/playsetonline/commit/693485941b62fd043a37e0a0e2fac9c323f20829)) by Marc Jovaní González
- **app**: store all games, sets and events on indexedDB ([ade1f53](https://github.com/drackp2m/playsetonline/commit/ade1f53897afda4daaaf7ee134368d15a91cf789)) by Marc Jovaní González

### 🐛 Bug Fixes

- **app**: get confetti shapes correctly ([1876f2c](https://github.com/drackp2m/playsetonline/commit/1876f2ca002874d101e3157f523b3e80d518a506)) by Marc Jovaní González
- **app**: improve types from set, get and delete generic repository methods ([eb982d1](https://github.com/drackp2m/playsetonline/commit/eb982d1850ac3cbbacbc14a85d6324e2ae83afaa)) by Marc Jovaní González

### 🎒 Chores

- upgrade to nx 20.2.2 ([f385807](https://github.com/drackp2m/playsetonline/commit/f385807f20ac1a8e593d792b497e8bf5af0f6306)) by Marc Jovaní González

**Full Changelog**: https://github.com/drackp2m/playsetonline/compare/v1.4.1...v1.5.0

# v1.4.1 (2024-12-02)

## What's Changed

### ♻️ Code Refactoring

- **api,app**: prepare project to create self-signed ssl certificates ([627506f](https://github.com/drackp2m/playsetonline/commit/627506fb565ad36d3f2aca2cbbd0d8123e3a5f04)) by Marc Jovaní González
- **app**: card enums to uppercase ([fe1cabc](https://github.com/drackp2m/playsetonline/commit/fe1cabc553fbaf2221cc6d219ee66875df3804a3)) by Marc Jovaní González
- **app**: move idb repository definitions to separate files ([d323359](https://github.com/drackp2m/playsetonline/commit/d323359153c6f1c957eb91a85bd3fb0005dcd382)) by Marc Jovaní González
- **app**: no need to pass the database name to the generic repository ([06d6ef6](https://github.com/drackp2m/playsetonline/commit/06d6ef6d2875d1635971259dca8fa21d26206591)) by Marc Jovaní González

### 🐛 Bug Fixes

- **api**: backend cron now runs every five minutes and call to graphql endpoint ([ec925fb](https://github.com/drackp2m/playsetonline/commit/ec925fb3eec9bd462478339d3ee71693461a6d8f)) by Marc Jovaní González
- **app**: app loader wait for deprectaed databases deletion ([8d12898](https://github.com/drackp2m/playsetonline/commit/8d128987b1da2e3e36e94a85505b75880360be65)) by Marc Jovaní González

### 🎒 Chores

- upgrade NX to 20.1.4 ([2bfc4fc](https://github.com/drackp2m/playsetonline/commit/2bfc4fc7e048798ccb5666f5d98f9b306c85bfee)) by Marc Jovaní González

**Full Changelog**: https://github.com/drackp2m/playsetonline/compare/v1.4.0...v1.4.1

# v1.4.0 (2024-11-26)

## What's Changed

### ✨ Features

- **app**: create generic Indexed DB repository over idb node lib ([bab7a15](https://github.com/drackp2m/playsetonline/commit/bab7a155d9091dcab3f7c3f3fee98c8509d257f7)) by Marc Jovaní González
- **app**: create generic Indexed DB repository over idb node lib ([#229](https://github.com/drackp2m/playsetonline/issues/229)) ([acb302f](https://github.com/drackp2m/playsetonline/commit/acb302f99b127396710a3901baa117c9625493a3)) by GitHub

### 🧪 Tests

- **api**: separate unit and integration tests, file naming refactor ([61344a3](https://github.com/drackp2m/playsetonline/commit/61344a31bc6f0786926e64732e02cf9ecd9d92fd)) by Marc Jovaní González

### 💻 Continuous Integration

- **api**: dev and test pg databases with same user, run migrations before tests ([1e2f324](https://github.com/drackp2m/playsetonline/commit/1e2f3249895f3c968053da852fe9ca3e3f2fc620)) by Marc Jovaní González
- **api**: remove integration tests from default api tests ([7fef883](https://github.com/drackp2m/playsetonline/commit/7fef883a3de2081d47efe4b029124350813e7217)) by Marc Jovaní González
- **api**: remove integration tests from default api tests ([#228](https://github.com/drackp2m/playsetonline/issues/228)) ([6a64832](https://github.com/drackp2m/playsetonline/commit/6a648321a893625ffba3a767b041a807b8f796e6)) by GitHub

### 🎒 Chores

- **api**: ignore env definition for eslint ([7b781da](https://github.com/drackp2m/playsetonline/commit/7b781da0bda80ffa013d3b1377c6d42909593a84)) by Marc Jovaní González

**Full Changelog**: https://github.com/drackp2m/playsetonline/compare/v1.3.1...v1.4.0

# v1.3.1 (2024-11-24)

## What's Changed

### ♻️ Code Refactoring

- **app**: convert userStore into Class ([8d0ef7a](https://github.com/drackp2m/playsetonline/commit/8d0ef7a2e528b30265c89d2270384967d8337ffe)) by Marc Jovaní González

### 🐛 Bug Fixes

- **app**: stop checking when appLoad is finished ([fc0d0bf](https://github.com/drackp2m/playsetonline/commit/fc0d0bff78798e5979fc02b92bd31fc7dfcc16b3)) by Marc Jovaní González

**Full Changelog**: https://github.com/drackp2m/playsetonline/compare/v1.3.0...v1.3.1

# v1.3.0 (2024-11-22)

## What's Changed

### ✨ Features

- **app**: use splash screen waiting for user info and game ready ([02b0c20](https://github.com/drackp2m/playsetonline/commit/02b0c2042023c0781dfcb647e325627495b0a27b)) by Marc Jovaní González
- **app**: use splash screen waiting for user info and game ready ([#225](https://github.com/drackp2m/playsetonline/issues/225)) ([b25e7a2](https://github.com/drackp2m/playsetonline/commit/b25e7a25bf41beab0f5c73be9bc9bd21eefd9f7d)) by GitHub

**Full Changelog**: https://github.com/drackp2m/playsetonline/compare/v1.2.0...v1.3.0

# v1.2.0 (2024-11-21)

## What's Changed

### ✨ Features

- **app**: add idb package, update indedex-db service ([f001d96](https://github.com/drackp2m/playsetonline/commit/f001d966ab005af7d4649dd703cde11c51628cf7)) by Marc Jovaní González

### ♻️ Code Refactoring

- **app**: update new versions detector of service workers ([c097fd8](https://github.com/drackp2m/playsetonline/commit/c097fd883ffc36557a6a2a8cdce86b0f8d4778f0)) by Marc Jovaní González

### 💻 Continuous Integration

- remove unnecessary `fetch-depth: 0`, and return `git pull` ([15b0e36](https://github.com/drackp2m/playsetonline/commit/15b0e363be0d6ba0b6ea09eb2a110a311f7eaa0c)) by Marc Jovaní González
- remove unnecessary `fetch-depth: 0`, and return `git pull` ([#223](https://github.com/drackp2m/playsetonline/issues/223)) ([3c4e752](https://github.com/drackp2m/playsetonline/commit/3c4e75202fbb6cebf65f69833946b7b58d43d242)) by GitHub

**Full Changelog**: https://github.com/drackp2m/playsetonline/compare/v1.1.0...v1.2.0

# v1.1.0 (2024-11-21)

## What's Changed

### ✨ Features

- **app**: add ServiceWorker on development environment ([5314017](https://github.com/drackp2m/playsetonline/commit/53140174f141f2a2f4c2db006afbf1b141ef5c3c)) by Marc Jovaní González

### 🧪 Tests

- **api**: fix SetJwtToken UseCase tests ([7aaf94f](https://github.com/drackp2m/playsetonline/commit/7aaf94fcc23f39593a9f1b8a2af4bb1cd3f55c8a)) by Marc Jovaní González

### 🐛 Bug Fixes

- **api,app**: fix jwt cooki maxAge, adapt auth interceptor ([fc21cf5](https://github.com/drackp2m/playsetonline/commit/fc21cf507d344f12a4bad401b421842262953243)) by Marc Jovaní González

### 💻 Continuous Integration

- remove semantic-release from dev branch, add --verbose to script ([382fd19](https://github.com/drackp2m/playsetonline/commit/382fd19e4d45a5135d20759430e166bd6a3c6808)) by Marc Jovaní González
- use `fetch-depth: 0` instead `git pull origin main` ([bc5cec5](https://github.com/drackp2m/playsetonline/commit/bc5cec57712dfc32f2b266c522cfabb3f13e2efe)) by Marc Jovaní González

### 🎒 Chores

- update (again) package-lock ([49a924c](https://github.com/drackp2m/playsetonline/commit/49a924ce7266c83554c21f7f8bcfe3e7613be9cc)) by Marc Jovaní González
- update (again) package-lock ([e8db964](https://github.com/drackp2m/playsetonline/commit/e8db9641553b33e17dd289df2f15064b84d1b594)) by Marc Jovaní González
- update (again) package-lock ([#221](https://github.com/drackp2m/playsetonline/issues/221)) ([a813439](https://github.com/drackp2m/playsetonline/commit/a8134392d5e2cba02607b977db68b160651fda23)) by GitHub
- update (again) package-lock ([#222](https://github.com/drackp2m/playsetonline/issues/222)) ([4e5fb5c](https://github.com/drackp2m/playsetonline/commit/4e5fb5c97f6949a1efe42dbaba3edd8d9a20d537)) by GitHub
- update package-lock ([c84c10b](https://github.com/drackp2m/playsetonline/commit/c84c10b7b28f3804d59cbf1ce6b1da13fb4cc757)) by Marc Jovaní González

**Full Changelog**: https://github.com/drackp2m/playsetonline/compare/v1.0.1...v1.1.0

# v1.0.1 (2024-11-16)

## What's Changed

### 🐛 Bug Fixes

- try to deploy with semantic-release changes (package version) ([221db40](https://github.com/drackp2m/playsetonline/commit/221db40df39dbdda5a10c8dae571b831cb50aaf8)) by Marc Jovaní González
- try to deploy with semantic-release changes (package version) ([9ed37c8](https://github.com/drackp2m/playsetonline/commit/9ed37c8e06e6b76a89f87c0a9d21d662c17eb280)) by Marc Jovaní González

### 🎒 Chores

- restore folder with fake certificates ([63bc428](https://github.com/drackp2m/playsetonline/commit/63bc42838f56109e6a9d41490f18926cb670a427)) by Marc Jovaní González

**Full Changelog**: https://github.com/drackp2m/playsetonline/compare/v1.0.0...v1.0.1

# v1.0.0 (2024-11-15)

## What's Changed

### ✨ Features

- add manifest ([9e353ce](https://github.com/drackp2m/playsetonline/commit/9e353cefee6b0bac47b6256b58f924294644e668)) by Marc Jovaní González
- add spaces page ([1bd7e59](https://github.com/drackp2m/playsetonline/commit/1bd7e5929c0a9b6175078e4c63614b1f4367f609)) by Marc Jovaní González
- **api,app**: add root api endpoint with status, add cron on appService ([3e3b0fb](https://github.com/drackp2m/playsetonline/commit/3e3b0fb7a8ea5bcd560e952ca13a93572babc1d9)) by Marc Jovaní González
- **api,app**: add selfsigned ssl ([5668765](https://github.com/drackp2m/playsetonline/commit/56687659c4fa1eb50bfd70285f9798a5fc6ad6f1)) by Marc Jovaní González
- **api,app**: add subscriptions to graphQL ([0d39442](https://github.com/drackp2m/playsetonline/commit/0d39442ba809e06dd67db2c6464740a02ca6f348)) by Marc Jovaní González
- **api,app**: add user store and getUserInfo query on userResolver ([5ed472f](https://github.com/drackp2m/playsetonline/commit/5ed472ff918ba0d70d0fbdcd20d2f5a05857e1f2)) by Marc Jovaní González
- **api,app**: create fake login from angular to nestjs-graphql ([7b2a616](https://github.com/drackp2m/playsetonline/commit/7b2a616466155384fe35d9565b0719831d18c770)) by Marc Jovaní González
- **api,app**: create newGame use case ([b401ee4](https://github.com/drackp2m/playsetonline/commit/b401ee49ef7d0f21985caa45d0a13b79e3ba2e84)) by Marc Jovaní González
- **api,app**: implements jwt refresh token ([ba18496](https://github.com/drackp2m/playsetonline/commit/ba18496c3e700314b375ab870f2edc3ae675f969)) by Marc Jovaní González
- **api,app**: improve ping, upgrade to node 22, add @angular/build package ([d2aed64](https://github.com/drackp2m/playsetonline/commit/d2aed64f0464926d175c74bd49aa93285ad0b360)) by Marc Jovaní González
- **api,app**: improve subscriptions, convert to signals, show on html ([800a3a0](https://github.com/drackp2m/playsetonline/commit/800a3a0767cfa5b9f2edf2b9341749eee5305051)) by Marc Jovaní González
- **api,app**: list games waiting join players ([f33d39c](https://github.com/drackp2m/playsetonline/commit/f33d39c0e3ea3436010e8b87ddff152181abe945)) by Marc Jovaní González
- **api,app**: ping works!! ([ba6e314](https://github.com/drackp2m/playsetonline/commit/ba6e314914f09ddac9d9f7ee48882e798e9a96ed)) by Marc Jovaní González
- **api,app**: remove proxy on app and decrease salt to 11 on registerUseCase ([a06d168](https://github.com/drackp2m/playsetonline/commit/a06d168021780b305f7fde105855a89f6fa16108)) by Marc Jovaní González
- **api,app**: service workers and /api with alive message ([5d64df7](https://github.com/drackp2m/playsetonline/commit/5d64df71f5619c691906a9e83770a9ad34021c60)) by Marc Jovaní González
- **api**: add cascade delete on user or game deletion in game-participant entity ([481aab9](https://github.com/drackp2m/playsetonline/commit/481aab91ee9041e0efb3f8550810327854593759)) by Marc Jovaní González
- **api**: add check-jwt-access-token use-case ([a41b5dd](https://github.com/drackp2m/playsetonline/commit/a41b5dd264ca23a3239932c770b71247a8c9d45c)) by Marc Jovaní González
- **api**: add custom mikro-orm namig strategy ([21d0cb6](https://github.com/drackp2m/playsetonline/commit/21d0cb6c261fc487027a7410b55e72a1387b8e29)) by Marc Jovaní González
- **api**: add exception filter ([8c0f635](https://github.com/drackp2m/playsetonline/commit/8c0f6351a566d27759a281f191fed652761a4cc5)) by Marc Jovaní González
- **api**: add jwt access token validation to graphql ws connections ([f6cc2db](https://github.com/drackp2m/playsetonline/commit/f6cc2dba0d149f388e5547a36c082e1346c44523)) by Marc Jovaní González
- **api**: allow multiple origins on CORS ([77eab11](https://github.com/drackp2m/playsetonline/commit/77eab11fa158f0fad081233ed16b72c80ca1627a)) by Marc Jovaní González
- **api**: create generateGameCards UseCase ([680731a](https://github.com/drackp2m/playsetonline/commit/680731af7ba1e513a16ebfef1a994c43a96af3e6)) by Marc Jovaní González
- **api**: create register usecase ([c6c2559](https://github.com/drackp2m/playsetonline/commit/c6c25591649f9a6ce687d61ba2fa5fd0837989c8)) by Marc Jovaní González
- **api**: create userRepository ([fecdeba](https://github.com/drackp2m/playsetonline/commit/fecdebaac6d1378616253e0aad4c2939cab6f65a)) by Marc Jovaní González
- **api**: improve errors messages ([19902ab](https://github.com/drackp2m/playsetonline/commit/19902abaca06ea2b20a0ac322967ac82bee26dbc)) by Marc Jovaní González
- **api**: mikro orm update with repository aliases ([4778966](https://github.com/drackp2m/playsetonline/commit/4778966a30af0251c2629bc50cd3cc4b1e549f85)) by Marc Jovaní González
- **api**: skip props on cookies ([d50016d](https://github.com/drackp2m/playsetonline/commit/d50016df41426da536746d766c4b6f52c857017d)) by Marc Jovaní González
- **api**: try to disable graphQL csrfPrevention ([505f4e7](https://github.com/drackp2m/playsetonline/commit/505f4e73ddfa306424a19870f3ac8a5f4a99b031)) by Marc Jovaní González
- **api**: try to run specs with swc ([d99c5ce](https://github.com/drackp2m/playsetonline/commit/d99c5ce8319a319e8a4c00d9124709a551dfffcf)) by Marc Jovaní González
- **api**: update environment to call to api-set-online.onrender.com ([74b55b7](https://github.com/drackp2m/playsetonline/commit/74b55b7e9be48dd318073b37969f6cd01e1eadbd)) by Marc Jovaní González
- **api**: use check-refresh-token use-case on refresh-session use-case ([b86a861](https://github.com/drackp2m/playsetonline/commit/b86a86197ffd277736428f4637ce2d32fca07494)) by Marc Jovaní González
- **app,api-interfaces**: add register form ([8d1b056](https://github.com/drackp2m/playsetonline/commit/8d1b056bb965e9b3eab683827cf7a7a1dde42b37)) by Marc Jovaní González
- **app,api**: add join game mutation and improve graphql errors ([b29d257](https://github.com/drackp2m/playsetonline/commit/b29d257344b346df1c38ec248a39644f6a8d9dc7)) by Marc Jovaní González
- **app,api**: create joinGame use case, and improve entityRepository ([d6898a8](https://github.com/drackp2m/playsetonline/commit/d6898a821f3db749cadf7fda2bc096f829e94bcc)) by Marc Jovaní González
- **app,api**: improve auth app interceptor ([1d3438d](https://github.com/drackp2m/playsetonline/commit/1d3438dd25aaf7a4b30e37d0e72a8da9f94148a8)) by Marc Jovaní González
- **app**: `highlightSet` increases `Wrong sets` by 3 ([f5dac08](https://github.com/drackp2m/playsetonline/commit/f5dac0880b72823cb395e756febbde01a2e69cfb)) by Marc Jovaní González
- **app**: add border radius example page ([ce93dc9](https://github.com/drackp2m/playsetonline/commit/ce93dc9cadec1204e3c4fd4725e94a78b1b5aa42)) by Marc Jovaní González
- **app**: add box shadow sample page ([f73792f](https://github.com/drackp2m/playsetonline/commit/f73792f069f3d4bc4bab94695e8ac588c866c0c4)) by Marc Jovaní González
- **app**: add card component ([9cf0196](https://github.com/drackp2m/playsetonline/commit/9cf01960c9026e196e9fcfa329d9ec267b5a1390)) by Marc Jovaní González
- **app**: add card demo page with nice result!! ([51e44cb](https://github.com/drackp2m/playsetonline/commit/51e44cb0ab37b047433ba924b214b25ff3d20a9b)) by Marc Jovaní González
- **app**: add colors example page ([8ce8d77](https://github.com/drackp2m/playsetonline/commit/8ce8d77ea66de3be12acc8a99cf6344c97523bde)) by Marc Jovaní González
- **app**: add examples for all typographies ([b09d8ba](https://github.com/drackp2m/playsetonline/commit/b09d8badc2d5809e1d30bb5649b51a631d15f3f5)) by Marc Jovaní González
- **app**: add favicon ([3090ffa](https://github.com/drackp2m/playsetonline/commit/3090ffad5f34a6d46e80df5853df47fb00d9b348)) by Marc Jovaní González
- **app**: add game page ([cc6e3c5](https://github.com/drackp2m/playsetonline/commit/cc6e3c52fe1bf689aca925724a069ea5576f3b9f)) by Marc Jovaní González
- **app**: add get user info error type ([68919f0](https://github.com/drackp2m/playsetonline/commit/68919f0c0605560747ca67ae129c5440b6dcfb9c)) by Marc Jovaní González
- **app**: add glitch effect component for svg images ([998b4b3](https://github.com/drackp2m/playsetonline/commit/998b4b3bb6f23287db42df470c9cbbd3d48c7c75)) by Marc Jovaní González
- **app**: add padding to game in full-screen ([c2b6d35](https://github.com/drackp2m/playsetonline/commit/c2b6d354e89ac87a59297f901e272af5143b5988)) by Marc Jovaní González
- **app**: add set icons ([1fb7c6d](https://github.com/drackp2m/playsetonline/commit/1fb7c6d5dbf4b07df37653b6d476c225f54fc23e)) by Marc Jovaní González
- **app**: add signal store and migrate to nx 18.1.2 ([2d73df5](https://github.com/drackp2m/playsetonline/commit/2d73df5f18eb235736af0ed7675a2367e3537683)) by Marc Jovaní González
- **app**: add sonar lint and fix some eslint issues ([3676496](https://github.com/drackp2m/playsetonline/commit/3676496bf6fde4bc8e87b17816aa565f5d280f3d)) by Marc Jovaní González
- **app**: add typographies url and menu ([756bb03](https://github.com/drackp2m/playsetonline/commit/756bb0304ac25ac3adb9403e86ddc22344c947c1)) by Marc Jovaní González
- **app**: all routes with lazzy loading ([6e87f41](https://github.com/drackp2m/playsetonline/commit/6e87f41f2cc5aeb1d2efd06a872b5f7e972137fc)) by Marc Jovaní González
- **app**: convert variables to signals ([ef2fe1b](https://github.com/drackp2m/playsetonline/commit/ef2fe1b9ae50d73cab3a86b75aa2d21643d0ef7f)) by Marc Jovaní González
- **app**: create apiSDK ([d84264b](https://github.com/drackp2m/playsetonline/commit/d84264bd0fc8020a85a725093e2f737c9a1533ef)) by Marc Jovaní González
- **app**: create basic authorization interceptor ([ed94941](https://github.com/drackp2m/playsetonline/commit/ed94941902e5516dd8bdf045b2219619d1df30af)) by Marc Jovaní González
- **app**: enable to put cards rotated ([2ae3953](https://github.com/drackp2m/playsetonline/commit/2ae39534bd76ca3c97935efb46b0b5ba7089953e)) by Marc Jovaní González
- **app**: finish flitch effect (fails on svg with gradients) ([47bd356](https://github.com/drackp2m/playsetonline/commit/47bd3561b03bf3727ffc080113da02d02ee0e977)) by Marc Jovaní González
- **app**: gameOnlineStore as class, add semantic-release ([77b3133](https://github.com/drackp2m/playsetonline/commit/77b313394b60c672db798a8c5f763dd754aa0de2)) by Marc Jovaní González
- **app**: implements sendPing mutation on AppComponent (need init subscription) ([5191467](https://github.com/drackp2m/playsetonline/commit/51914677591f6c9e39d9c684954c07237f096ba0)) by Marc Jovaní González
- **app**: improve game experience ([9f14a2c](https://github.com/drackp2m/playsetonline/commit/9f14a2c2d994a11667383a8ce22a014ddb5c8916)) by Marc Jovaní González
- **app**: improve the HTTP interceptor to handle both GraphQL and httpError errors. ([a4188bb](https://github.com/drackp2m/playsetonline/commit/a4188bbaa8deda00df347e15203e1a0775480700)) by Marc Jovaní González
- **app**: move some game logic to store and use eslint flat config ([0f068f9](https://github.com/drackp2m/playsetonline/commit/0f068f93aedae3f17b3bef3fcfbe9728c8ddff1e)) by Marc Jovaní González
- **app**: now, confetti have game shapes ([db5cb7f](https://github.com/drackp2m/playsetonline/commit/db5cb7feb56b0213d81afc90753e8048a37c3b08)) by Marc Jovaní González
- **app**: pipe to get asset urls absolute ([abdf45b](https://github.com/drackp2m/playsetonline/commit/abdf45b8772b4b09f54008851f4650081c44d602)) by Marc Jovaní González
- **app**: prepare wpa with translucid status bar for iOS and add SET particles ([75b80e9](https://github.com/drackp2m/playsetonline/commit/75b80e9c8ec08c725a113cea225a2fe0e25083de)) by Marc Jovaní González
- **app**: register and login height ([762a403](https://github.com/drackp2m/playsetonline/commit/762a403dc8735b03e5d8254917f981b0add1e983)) by Marc Jovaní González
- **app**: remove start slash of [@font-face](https://github.com/font-face) css property ([7952c7e](https://github.com/drackp2m/playsetonline/commit/7952c7e60daca42918f688f5f34c7de986c8f44b)) by Marc Jovaní González
- **app**: remove url pipe and update manifest ([55d02dd](https://github.com/drackp2m/playsetonline/commit/55d02dd939fe7e4b701e60d47e648046ed3e4f2b)) by Marc Jovaní González
- **app**: restored ability to add cards to the board ([a3f7824](https://github.com/drackp2m/playsetonline/commit/a3f7824612f1cee34c2a0f9f6d2840665052ee66)) by Marc Jovaní González
- **app**: save current game to browser indexedDB ([a749da5](https://github.com/drackp2m/playsetonline/commit/a749da59e24706a3eadd6285761960818c9f6068)) by Marc Jovaní González
- **app**: set all graphql query types to fetch using network-only policy ([b762b7f](https://github.com/drackp2m/playsetonline/commit/b762b7f95aa8c1b2c9ff74fc8cc85f9d04434c38)) by Marc Jovaní González
- **app**: start game normally by default, click on `Wrong sets` cheat game ([cba62df](https://github.com/drackp2m/playsetonline/commit/cba62df8ba5d1c9fbce0ff551b5acd6e3eac4b98)) by Marc Jovaní González
- **app**: try to add service-worker to Angular project ([b673228](https://github.com/drackp2m/playsetonline/commit/b673228f8e9558b56f027cfe90fdd183bfc0437b)) by Marc Jovaní González
- **app**: try to load font-face from base project path ([6621a92](https://github.com/drackp2m/playsetonline/commit/6621a92860f7d744ef3faa4f50fcc1b6c49581d5)) by Marc Jovaní González
- **app**: use hash on Angular routes ([a70224f](https://github.com/drackp2m/playsetonline/commit/a70224f68aaab702e411c89f52f8c1a3fb1f1b53)) by Marc Jovaní González
- **app**: use relative route for font-face ([7f51edb](https://github.com/drackp2m/playsetonline/commit/7f51edb9ac7d8eb3894f25b1a9d38b36998ba1f3)) by Marc Jovaní González
- **app**: use zoneless, make some routes lazzy ([27cb8b6](https://github.com/drackp2m/playsetonline/commit/27cb8b6498ebce9e6f1e9abd68f3547883ebabc6)) by Marc Jovaní González
- create first version of application ([5bb4ebe](https://github.com/drackp2m/playsetonline/commit/5bb4ebe323295b370fb1e346bb56a9d7130fee12)) by Marc Jovaní González
- enable play game with cheats but end with error =S ([3d0e103](https://github.com/drackp2m/playsetonline/commit/3d0e103dfd13b546a6c392480bdcd0297536ffff)) by Marc Jovaní González
- improve AuthInterceptor ([51571d0](https://github.com/drackp2m/playsetonline/commit/51571d0007656737b18dfed692c7aa9c17a5f4a8)) by Marc Jovaní González
- improve manifest ([0d2116c](https://github.com/drackp2m/playsetonline/commit/0d2116c1ce3a5d3cb03d19cc7385a0c57e7d1238)) by Marc Jovaní González
- improve userRepository ([63cc547](https://github.com/drackp2m/playsetonline/commit/63cc5478a004e03cf998c4e34b6b734f2c9a1978)) by Marc Jovaní González
- prepare project to production ([9c7565d](https://github.com/drackp2m/playsetonline/commit/9c7565d0daceb60358f96c54749f9d721f1f878a)) by Marc Jovaní González
- update texts ([e68ac04](https://github.com/drackp2m/playsetonline/commit/e68ac040bb6aa0a803f4e141dd88b039bc74ce36)) by Marc Jovaní González

### 🎨 Styles

- add fonts to test ([7ff138a](https://github.com/drackp2m/playsetonline/commit/7ff138adbfd9d8413ce9101283e479222bf4a54e)) by Marc Jovaní González
- **app**: add scss abstracts and utilities ([4589754](https://github.com/drackp2m/playsetonline/commit/458975453acadde23661a2f9502517e5b14da20f)) by Marc Jovaní González
- **app**: complete rounded, colors and visibility ([099fe5d](https://github.com/drackp2m/playsetonline/commit/099fe5dc78050855a633ea2b01fac562fdd815ea)) by Marc Jovaní González
- **app**: create show / hide rules with media query ([702fa5a](https://github.com/drackp2m/playsetonline/commit/702fa5a932bfc977dd6ffce4389e4d11356b0b67)) by Marc Jovaní González
- **app**: generate variables and classes of font sizes ([67fdbd2](https://github.com/drackp2m/playsetonline/commit/67fdbd2e76d44f1f3b1585a3f9106d641ce4f77b)) by Marc Jovaní González
- **app**: improve buttons and links hover effects, glitch on mobile now works ([60af6b9](https://github.com/drackp2m/playsetonline/commit/60af6b9b776c3b4540d582ccfec0c5700b934eea)) by Marc Jovaní González
- **app**: improve general styles ([b6cb883](https://github.com/drackp2m/playsetonline/commit/b6cb883abe7fbb4334367cf6b396c0d11369a9c6)) by Marc Jovaní González
- **app**: improve scss functions for get rules ([480f26f](https://github.com/drackp2m/playsetonline/commit/480f26f18adb1d0a4a874ad037aef628aaabca28)) by Marc Jovaní González
- **app**: refactor spacing ([a2a4fe9](https://github.com/drackp2m/playsetonline/commit/a2a4fe9714f8f491772b599922ab8a409d159d0a)) by Marc Jovaní González
- **app**: remove initial slash of scss src ([de5a59c](https://github.com/drackp2m/playsetonline/commit/de5a59c32f476fb97f4797a52641f80314b8bdf8)) by Marc Jovaní González
- **app**: remove start slash on font assets ([b2ff660](https://github.com/drackp2m/playsetonline/commit/b2ff66082465b58b6a4aaadea36d3ccd11a95b5a)) by Marc Jovaní González
- **app**: try to load recursive-font with initial slash and using scss variable ([d21bc73](https://github.com/drackp2m/playsetonline/commit/d21bc73284c4ed1844be8e02168394a2e2d1aefb)) by Marc Jovaní González
- back to relative assets load ([3f368aa](https://github.com/drackp2m/playsetonline/commit/3f368aaec8c1f1dc16cbf8f2916b5ca1d082c837)) by Marc Jovaní González
- try to fix load scss urls ([788ae48](https://github.com/drackp2m/playsetonline/commit/788ae48c8d7f7be464dde39b920b6510683607b6)) by Marc Jovaní González
- try to load styles relatively ([32a7a8c](https://github.com/drackp2m/playsetonline/commit/32a7a8cb47cdf29db97976714285f7a9e0eb1740)) by Marc Jovaní González

### 🧪 Tests

- **api,app**: add currentUserStore and Apollo to AppComponent spec ([b21d817](https://github.com/drackp2m/playsetonline/commit/b21d8171715cabe62c26f3382df33ea50040992f)) by Marc Jovaní González
- **api**: add authController spec ([e3e44c6](https://github.com/drackp2m/playsetonline/commit/e3e44c65f5a600368b2e566961599969ec2dde9f)) by Marc Jovaní González
- **api**: add CheckPassword UseCase Spec ([3002955](https://github.com/drackp2m/playsetonline/commit/3002955f44c9716c0c5333406d615bd00c35cb55)) by Marc Jovaní González
- **api**: add create-game use-case spec ([0b54144](https://github.com/drackp2m/playsetonline/commit/0b54144ffc986ecb23af789a00114b82e67c9e90)) by Marc Jovaní González
- **api**: add create-game use-case spec ([62d47f7](https://github.com/drackp2m/playsetonline/commit/62d47f703cabbf3d4bc1dcddd1b95c50dda96aa6)) by Marc Jovaní González
- **api**: add GenerateNowDate UseCase Spec ([fcb021e](https://github.com/drackp2m/playsetonline/commit/fcb021e5fa678d4ac3979210d5eb4b932e080cd9)) by Marc Jovaní González
- **api**: add generateUuid UseCase Spec ([1890bed](https://github.com/drackp2m/playsetonline/commit/1890bed13a46eae16cad8d3cb711627af72cc9f3)) by Marc Jovaní González
- **api**: add HashPassword UseCase Spec ([ce0a27e](https://github.com/drackp2m/playsetonline/commit/ce0a27eaaf66fa6219d4df2fad2ab3d87b64fdef)) by Marc Jovaní González
- **api**: add integration tests ([c101ecb](https://github.com/drackp2m/playsetonline/commit/c101ecb68396589617ac9000be52ea447becc09e)) by Marc Jovaní González
- **api**: add modifiedAt and expiresOn tests to DateFaker ([581fdd9](https://github.com/drackp2m/playsetonline/commit/581fdd9c926e8a5e839c28ef2b9bf2391840ba35)) by Marc Jovaní González
- **api**: add semaphore spec ([86ed5a3](https://github.com/drackp2m/playsetonline/commit/86ed5a32a59d68a2db16edd02e7308e883338ed9)) by Marc Jovaní González
- **api**: add spec for BadRequestException ([9e6ed1b](https://github.com/drackp2m/playsetonline/commit/9e6ed1b1ab4b17099a194a55576f20d75b187159)) by Marc Jovaní González
- **api**: add spec to clean-jwt-access-token-cookie use-case ([3eb6df1](https://github.com/drackp2m/playsetonline/commit/3eb6df179a0e9e57e720cb05583fc4adc1f1d49e)) by Marc Jovaní González
- **api**: add spec to clean-jwt-access-token-cookie use-case ([c6d666a](https://github.com/drackp2m/playsetonline/commit/c6d666a3461d98e2b347117d57f9b27954533b7e)) by Marc Jovaní González
- **api**: add specs for BasicFaker, renamed some tests ([795d55c](https://github.com/drackp2m/playsetonline/commit/795d55c5cae64d90b3fbe67973d31ee533e6c929)) by Marc Jovaní González
- **api**: add specs for CacheManagerService ([d0dc508](https://github.com/drackp2m/playsetonline/commit/d0dc508e9224d620fbe4faea595cf82402508a68)) by Marc Jovaní González
- **api**: add specs for SemaphoreManagerService ([a53046a](https://github.com/drackp2m/playsetonline/commit/a53046a42de4f1ea7f765bccf7b377364e2d4a66)) by Marc Jovaní González
- **api**: add tests for all exceptions ([7bb6baf](https://github.com/drackp2m/playsetonline/commit/7bb6baf65456abcac1d4cb285a30453fbf11cf30)) by Marc Jovaní González
- **api**: add usecases for bcryptjs methods ([9b4101d](https://github.com/drackp2m/playsetonline/commit/9b4101daa346bb3c05fd37eeb8a1a00ed251b4fa)) by Marc Jovaní González
- **api**: create access and refresh token usecases tests ([5df1690](https://github.com/drackp2m/playsetonline/commit/5df1690e8a74c267f373d9895c95e7a0b1abde25)) by Marc Jovaní González
- **api**: create DateFaker Spec (only should defined and createdAt) ([c04aa76](https://github.com/drackp2m/playsetonline/commit/c04aa76ae85c02ac3e2c807336b49bac0e7aac05)) by Marc Jovaní González
- **api**: create list-game use-case spec, refactor factories ([e4a2796](https://github.com/drackp2m/playsetonline/commit/e4a279654cc6f0305d530205c560324053aa3f06)) by Marc Jovaní González
- **api**: create logout use-case spec ([c8fa27f](https://github.com/drackp2m/playsetonline/commit/c8fa27f3812d14a043438c86a3e3ea488626f2a9)) by Marc Jovaní González
- **api**: create nodeCacheService specs ([8db451f](https://github.com/drackp2m/playsetonline/commit/8db451f5faf1c4c98dfc414d681a3f13c38d1e56)) by Marc Jovaní González
- **api**: create refresh session useCase ([74e9fdb](https://github.com/drackp2m/playsetonline/commit/74e9fdba71609ce1ef6f64dd766442c881274499)) by Marc Jovaní González
- **api**: create register use case ([e54934c](https://github.com/drackp2m/playsetonline/commit/e54934cfd11dc1ed0a361a2eed0d28b694f8f420)) by Marc Jovaní González
- **api**: create set-jwt-token use case ([92dd861](https://github.com/drackp2m/playsetonline/commit/92dd8613c7d781ae5a585e3f635cd049e7cfcaf9)) by Marc Jovaní González
- **api**: editable-date specs ([ff91ab2](https://github.com/drackp2m/playsetonline/commit/ff91ab2e99979262798f88ad0c46ac6fde57b926)) by Marc Jovaní González
- **api**: enable and fix all api tests :) ([e472734](https://github.com/drackp2m/playsetonline/commit/e4727342bde3278494ea266d08f918069d5b2317)) by Marc Jovaní González
- **api**: finish join-game use-case specs ([bf1a70b](https://github.com/drackp2m/playsetonline/commit/bf1a70b7b78867c9d809c230556e09bfc84aec11)) by Marc Jovaní González
- **api**: finish join-game use-case specs ([19924d1](https://github.com/drackp2m/playsetonline/commit/19924d139e60ace8760aadef62af592f6493233b)) by Marc Jovaní González
- **api**: finish tests for extract-cookies-from-raw-hehaders use-case ([3186353](https://github.com/drackp2m/playsetonline/commit/3186353cc5db27724ab748d69d6d51c4ad8ef84b)) by Marc Jovaní González
- **api**: fix AuthServiceSpec ([bd50cf6](https://github.com/drackp2m/playsetonline/commit/bd50cf65235ea015e717c392f3376f3e781b9c96)) by Marc Jovaní González
- **api**: fix login test ([b40121d](https://github.com/drackp2m/playsetonline/commit/b40121daf6227cb4f40af718a357b8484baf02dd)) by Marc Jovaní González
- **api**: fix tests and faker deprecations ([acd073d](https://github.com/drackp2m/playsetonline/commit/acd073dd72532e38106176fc28ba23712862e5b4)) by Marc Jovaní González
- **api**: fix tests with ConfigurationService dep, and salt with length 11 ([6ecf03d](https://github.com/drackp2m/playsetonline/commit/6ecf03d02c54bb358b6d874caf43c3c6a6793aa6)) by Marc Jovaní González
- **api**: fix tests! ([a141524](https://github.com/drackp2m/playsetonline/commit/a141524fa57c3140cf833bc674c3bb864b9ca958)) by Marc Jovaní González
- **api**: fixed tests related with config and jwt tokens ([e1a6c8d](https://github.com/drackp2m/playsetonline/commit/e1a6c8d59788fa8716be99819357c49b57e45037)) by Marc Jovaní González
- **api**: improve appService spec ([d657043](https://github.com/drackp2m/playsetonline/commit/d65704345c0465993a600ab1fa54874caae8f12e)) by Marc Jovaní González
- **api**: improve editable-data spec to user util variable instead new instance ([f081953](https://github.com/drackp2m/playsetonline/commit/f0819530e861066b0cdd4ff3664470c1f5d22441)) by Marc Jovaní González
- **api**: improve integration tests (test-setup and global-setups) ([c7a7280](https://github.com/drackp2m/playsetonline/commit/c7a7280c008da8b23767683a5bd3409a48ca45f8)) by Marc Jovaní González
- **api**: improve login use case specs ([cd2960f](https://github.com/drackp2m/playsetonline/commit/cd2960f8f93595d1705efa947f4d330b88032c33)) by Marc Jovaní González
- **api**: init MikroORM manually in join-game use-case to avoid db connection ([63b332a](https://github.com/drackp2m/playsetonline/commit/63b332affd0e10a18c939b8510e54997d0489a01)) by Marc Jovaní González
- **api**: mock tests with jest-mock-extended ([27b8830](https://github.com/drackp2m/playsetonline/commit/27b8830434445d009f043ad80bb213768c698e80)) by Marc Jovaní González
- **api**: remove MikroORM init on create-game use-case spec ([df4ac82](https://github.com/drackp2m/playsetonline/commit/df4ac82df00a887707a93e5b19eb8a56f3ada9ce)) by Marc Jovaní González
- **api**: simplify jwt-strategy-service spec ([9cf2221](https://github.com/drackp2m/playsetonline/commit/9cf2221c113c0c49ea061927fb0e9f6805d56ec3)) by Marc Jovaní González
- **api**: try to add integration tests, with global jest setup for mikro-orm migrations ([e020f55](https://github.com/drackp2m/playsetonline/commit/e020f55358e7d518c36df704358ca73d56ea8d7f)) by Marc Jovaní González
- **app**: fix app test ([a220cfe](https://github.com/drackp2m/playsetonline/commit/a220cfe7528f46e45ceef8c1b93d68e944893024)) by Marc Jovaní González
- **app**: import currentUserStore to appComponent spec ([c1dd437](https://github.com/drackp2m/playsetonline/commit/c1dd437b222309c0dbb3ea74659c788a63073f05)) by Marc Jovaní González
- **app**: remove title test ([553a85f](https://github.com/drackp2m/playsetonline/commit/553a85f1b1409fc174cb99599810c14557487e90)) by Marc Jovaní González
- **app**: skip app test ([00f2588](https://github.com/drackp2m/playsetonline/commit/00f2588e787c1030c3df4d9126c3705ddfd459cf)) by Marc Jovaní González
- **app**: skip AppComponent spec ([e3139fa](https://github.com/drackp2m/playsetonline/commit/e3139fa9fca40249d9fcc3671792e380fc6bc66e)) by Marc Jovaní González
- enable axios to trust self-signed certificate ([5cc3112](https://github.com/drackp2m/playsetonline/commit/5cc3112cc9609e31fbe038ea213f6236234e5589)) by Marc Jovaní González
- fix /api/app/hello test ([b31d6c3](https://github.com/drackp2m/playsetonline/commit/b31d6c3f4611b50b3d815f5eac42b0ce1fcb1e6d)) by Marc Jovaní González
- fix tests with mock ([4309690](https://github.com/drackp2m/playsetonline/commit/43096904142c98e03bc0cc9dee4c6ae4a2524917)) by Marc Jovaní González

### ♻️ Code Refactoring

- add tslint to use member-ordering rule ([7f00efb](https://github.com/drackp2m/playsetonline/commit/7f00efb0707df194b2ab8d9199e425fc8ee3ed0e)) by Marc Jovaní González
- **api-definitions**: rename lin interfaces to definitions ([0de019c](https://github.com/drackp2m/playsetonline/commit/0de019c7caad6db3ef3e28b6cf6e5650af3cf7e6)) by Marc Jovaní González
- **api-sdk,app-e2e,app,api,api-definitions,api-e2e**: use clean nx installation ([2e54ac2](https://github.com/drackp2m/playsetonline/commit/2e54ac233e6d547104b3e2ff4323a9a4e4066e5e)) by Marc Jovaní González
- **api,api-e2e,app,app-e2e,api-definitions**: lint json and gql files ([1d7343e](https://github.com/drackp2m/playsetonline/commit/1d7343e3e855aff10a8d1c9b0a24049d04becb0e)) by Marc Jovaní González
- **api,api-e2e**: set new nx project (api) ([1ba9a83](https://github.com/drackp2m/playsetonline/commit/1ba9a8368cc90fb6286c2c016ebf9e36dfe07947)) by Marc Jovaní González
- **api,app**: add more rules on tsconfig to improve robustness (and fix code) ([6a5dab3](https://github.com/drackp2m/playsetonline/commit/6a5dab31ea607c27c987de4effb5152f43508737)) by Marc Jovaní González
- **api,app**: improve linters and use line length of 100 ([091f73f](https://github.com/drackp2m/playsetonline/commit/091f73f2b46ce95e920e6b209b6583cddde72b3c)) by Marc Jovaní González
- **api,app**: improve ws ([be81d1a](https://github.com/drackp2m/playsetonline/commit/be81d1ae1e7c9ff0c2f1e2ae20885c75e0b692e5)) by Marc Jovaní González
- **api,app**: remove all Enum suffix from imports and types ([418dc3a](https://github.com/drackp2m/playsetonline/commit/418dc3a834d26ab823334b66dbc0053792efa167)) by Marc Jovaní González
- **api**: add domain on CORS error ([5cbb7f1](https://github.com/drackp2m/playsetonline/commit/5cbb7f13bb8bcd80a6f6ee028ca3571be24e7206)) by Marc Jovaní González
- **api**: add modules for complex UseCases ([f24a086](https://github.com/drackp2m/playsetonline/commit/f24a086229d01b741c9adc2fadb2f0b1d34c7391)) by Marc Jovaní González
- **api**: autoload mikro-orm entities with tsNode ([0658bc3](https://github.com/drackp2m/playsetonline/commit/0658bc3c00c78c2ebbf5b212752983d78b74dd6d)) by Marc Jovaní González
- **api**: change module dependencies ([5899727](https://github.com/drackp2m/playsetonline/commit/58997274d7823a2e67302b35a4c302ce876686b1)) by Marc Jovaní González
- **api**: create bootstrap helper ([7ce4e4a](https://github.com/drackp2m/playsetonline/commit/7ce4e4a3de52b4ac36e30eeeaf2bb9a637b5a4c6)) by Marc Jovaní González
- **api**: improve configuration validation and usage ([f909f07](https://github.com/drackp2m/playsetonline/commit/f909f07e114bd4cde2a33517fc47053b33dc8b1c)) by Marc Jovaní González
- **api**: improve tests removing awaits and including extra cheks on exceptions ([699dfe3](https://github.com/drackp2m/playsetonline/commit/699dfe38d062e9abe9734fc3c33b89192bc96ec7)) by Marc Jovaní González
- **api**: refactor all tests (and code) to operate in typescript strict mode ([3398142](https://github.com/drackp2m/playsetonline/commit/339814221506ac1ad10b55e06671c17d4dd8e93d)) by Marc Jovaní González
- **api**: remove console log ([7a5a68c](https://github.com/drackp2m/playsetonline/commit/7a5a68cf7fdfdc87f34bdd2c4183b9ad3ffec198)) by Marc Jovaní González
- **api**: remove console logs on join-game use case, fix commitizen ([5f2e8f0](https://github.com/drackp2m/playsetonline/commit/5f2e8f0f5fc6a647e1683bf3dcce27609ea14d05)) by Marc Jovaní González
- **api**: remove console.log from create-jwt-refresh-token use-case ([308cafb](https://github.com/drackp2m/playsetonline/commit/308cafbadc6369e3305df926ddb6667f3d304050)) by Marc Jovaní González
- **api**: remove index.ts files ([b786ce0](https://github.com/drackp2m/playsetonline/commit/b786ce0d53cf221af0d91ff544c9f3ae39319fb2)) by Marc Jovaní González
- **api**: rename card interface enums ([e34ace8](https://github.com/drackp2m/playsetonline/commit/e34ace84dcea15bb69023c11a73c93984ff954b7)) by Marc Jovaní González
- **api**: rename common to share, add logout endpoint ([841de65](https://github.com/drackp2m/playsetonline/commit/841de656a35d01036e014263d08ad85e64c21dc9)) by Marc Jovaní González
- **api**: transform check-access-token to check-refresh-token use-case ([5383dee](https://github.com/drackp2m/playsetonline/commit/5383dee48154533a45892703c01ae02506a84636)) by Marc Jovaní González
- **api**: transform userService to loginUsecase ([e795a22](https://github.com/drackp2m/playsetonline/commit/e795a2269dd1fe9373fef8a9e2f9054c2a1e2b54)) by Marc Jovaní González
- **api**: try to fix api tests... ([f9ad028](https://github.com/drackp2m/playsetonline/commit/f9ad02846c2c5198347d0a57d27e650a88c15113)) by Marc Jovaní González
- **api**: update env.example, remove Dockerfile database, fix multiple db script ([d49e694](https://github.com/drackp2m/playsetonline/commit/d49e694a94abad2a661f35bf0cab8eb7205aa725)) by Marc Jovaní González
- **api**: use custom ConfigurationService ([114690d](https://github.com/drackp2m/playsetonline/commit/114690d5d71f87fbd46dc7bfb52c89a1ab76fa6c)) by Marc Jovaní González
- **api**: use multiple database to same docker container ([5a35756](https://github.com/drackp2m/playsetonline/commit/5a35756bd5c9b924e7e2852a37be301d25afb3bb)) by Marc Jovaní González
- **app**: angular parser for prettier html and fix all issues ([d6ef97d](https://github.com/drackp2m/playsetonline/commit/d6ef97d33022454806e9ccca8ac5e93395b681cf)) by Marc Jovaní González
- **app**: call to login request by api endpoint ([1b6e821](https://github.com/drackp2m/playsetonline/commit/1b6e8219d30ec2711654bee0d1d7113edae952a4)) by Marc Jovaní González
- **app**: color class names ([9bebff6](https://github.com/drackp2m/playsetonline/commit/9bebff6869ebe4adadfd880260192afcfd3844f8)) by Marc Jovaní González
- **app**: create card shape component ([1c93d71](https://github.com/drackp2m/playsetonline/commit/1c93d71e198c38f057d3fb91a2e7e4a66ef67593)) by Marc Jovaní González
- **app**: css variables in singular ([7d42367](https://github.com/drackp2m/playsetonline/commit/7d4236776ca411c0189074f060de6a0f6f4f2028)) by Marc Jovaní González
- **app**: improve "home" (game) page ([e36ab14](https://github.com/drackp2m/playsetonline/commit/e36ab147631e54ef7df06721fa90f7e519f62c5b)) by Marc Jovaní González
- **app**: improve auth interceptor ([cedcc52](https://github.com/drackp2m/playsetonline/commit/cedcc52ff434cd2947b7c763fe3d0fae3487a9d0)) by Marc Jovaní González
- **app**: improve gaps on grid layouts ([9caef86](https://github.com/drackp2m/playsetonline/commit/9caef866087d5af15efb5e50e12dd2ee3634374c)) by Marc Jovaní González
- **app**: improve glitch effect ([f6290e3](https://github.com/drackp2m/playsetonline/commit/f6290e3065d772ab9b31cddb05fa192abbc2956f)) by Marc Jovaní González
- **app**: improve main layout menu ([e1f3528](https://github.com/drackp2m/playsetonline/commit/e1f35283340f955664a0276ca500424ffd5ee82a)) by Marc Jovaní González
- **app**: improve sdk ([1533670](https://github.com/drackp2m/playsetonline/commit/15336702e6f1a1908522e90dc416c4792d78d472)) by Marc Jovaní González
- **app**: improve shadows ([5ef5837](https://github.com/drackp2m/playsetonline/commit/5ef583776f451e5f0cb9f79b69f9ca1171bd0a56)) by Marc Jovaní González
- **app**: improve signals readability, remove empty scss ([a00d904](https://github.com/drackp2m/playsetonline/commit/a00d904e89873bc6d300bef7c6a998d8577fff89)) by Marc Jovaní González
- **app**: increase 0.5 line with of outlined SVGs ([52476ad](https://github.com/drackp2m/playsetonline/commit/52476ad876a73be2fefd22ec7bdd973fe9dc9f68)) by Marc Jovaní González
- **app**: remove all [ngClass], use [style.xxx] for remove methods on component ([9be53b8](https://github.com/drackp2m/playsetonline/commit/9be53b8b3f9119686d0907f47c45f1704cdd9e44)) by Marc Jovaní González
- **app**: remove all dist ([4c3dec0](https://github.com/drackp2m/playsetonline/commit/4c3dec09415f0ea9900ba2863ab608574f7f49d0)) by Marc Jovaní González
- **app**: remove initial slash on icons in game page (for confetti) ([5aec642](https://github.com/drackp2m/playsetonline/commit/5aec642803283011288b413edcbed5dec6c6e807)) by Marc Jovaní González
- **app**: remove logs and move prevent re-refresh check to auth interceptor ([dbd8a52](https://github.com/drackp2m/playsetonline/commit/dbd8a527b78c3adf70468d8d62b8ce6c39f353fa)) by Marc Jovaní González
- **app**: remove old current user store ([63d17cc](https://github.com/drackp2m/playsetonline/commit/63d17cc7bdcdee51eae890759fab0d362121e82d)) by Marc Jovaní González
- **app**: replace set- by app- ([c654d72](https://github.com/drackp2m/playsetonline/commit/c654d72e34114008e881c02925087c87ac8b2a78)) by Marc Jovaní González
- **app**: self close some html tags ([28af23d](https://github.com/drackp2m/playsetonline/commit/28af23d4bed9166aaf361f88c4135613e3f9816f)) by Marc Jovaní González
- **app**: self-close tags, signal inputs with transformations ([d43a899](https://github.com/drackp2m/playsetonline/commit/d43a899f595e62d7b3be84a511e8c544ffd43b2a)) by Marc Jovaní González
- **app**: update all html to zoneless directives ([c1cb5af](https://github.com/drackp2m/playsetonline/commit/c1cb5af05ab2798cab9ff820fb55d60117905200)) by Marc Jovaní González
- **app**: use environment as modern Angular projects ([521c7ff](https://github.com/drackp2m/playsetonline/commit/521c7ff4141cceab51af9432f6a829937dfeb832)) by Marc Jovaní González
- **app**: use signal inputs on card shape component ([a8c369f](https://github.com/drackp2m/playsetonline/commit/a8c369fb7a277c69cbe6d3f38625602bb5e2cb5e)) by Marc Jovaní González
- back to original class names ([3ce3f87](https://github.com/drackp2m/playsetonline/commit/3ce3f872b668038e4b24c3f8ae774068a4949bef)) by Marc Jovaní González
- create method to show messages on HTML ([fe54cd1](https://github.com/drackp2m/playsetonline/commit/fe54cd165e2ddf9bd186d260e86ccab3fcaaab90)) by Marc Jovaní González
- mock with value instead class ([f749f37](https://github.com/drackp2m/playsetonline/commit/f749f374e55b5b67011e663c5b91e4efb6718b67)) by Marc Jovaní González
- remove .env files from git ([aedf2f6](https://github.com/drackp2m/playsetonline/commit/aedf2f6634fb1934d6b78411f8266c51d94f7e2d)) by Marc Jovaní González
- remove jsx and tsx references on eslint files ([4b5480e](https://github.com/drackp2m/playsetonline/commit/4b5480e146b4ad2cda18878e01fb0255946bea6a)) by Marc Jovaní González
- remove jsx and tsx references on eslint files ([c247cb5](https://github.com/drackp2m/playsetonline/commit/c247cb5007864effafede2770d5a6426463acaf8)) by Marc Jovaní González
- remove max lines and lines per function on tests ([f9d7a15](https://github.com/drackp2m/playsetonline/commit/f9d7a15840f7e6d767b4091928d0652c3ea87ed0)) by Marc Jovaní González
- try to fix (again) github actions ([686b5f9](https://github.com/drackp2m/playsetonline/commit/686b5f9edf8a01be9eb9d8cc0780d0573df76bb8)) by Marc Jovaní González
- try to put emji left ([3f0790c](https://github.com/drackp2m/playsetonline/commit/3f0790c011c4c0df4ae45cd705d66326a1efa9a3)) by Marc Jovaní González
- use loops on border radius page ([8e1ca0c](https://github.com/drackp2m/playsetonline/commit/8e1ca0c354ae40bac47d7ee92c0de85d57a26db1)) by Marc Jovaní González
- use ngFor on colors ([8f87d21](https://github.com/drackp2m/playsetonline/commit/8f87d2103bf8c54f31e4e648f700d840813a99ca)) by Marc Jovaní González
- use ngFor on typografies pages ([fb66295](https://github.com/drackp2m/playsetonline/commit/fb66295ae16e40b8deca4260caee9c73de1f8d3e)) by Marc Jovaní González

### 🐛 Bug Fixes

- add check to execute release only if deploy is success ([ae9d19c](https://github.com/drackp2m/playsetonline/commit/ae9d19cec34b413b167a6efb30b33865ac8ea2da)) by Marc Jovaní González
- add is-unique-user-prop to register user request dto ([0c57944](https://github.com/drackp2m/playsetonline/commit/0c579447fe5e728212c22880d8ec977535c418a0)) by Marc Jovaní González
- add MIKRO_ORM_CLI env key to gh-pages ([53c2e4f](https://github.com/drackp2m/playsetonline/commit/53c2e4f4dd7a25542a0762a875974a7ab13829cb)) by Marc Jovaní González
- add types for cookie-parser ([a96af87](https://github.com/drackp2m/playsetonline/commit/a96af8712fef12c8625a7688433222f2649e5a42)) by Marc Jovaní González
- **api-definitions,api-sdk**: restore libs package.json ([7a46a96](https://github.com/drackp2m/playsetonline/commit/7a46a964af3f806c3ca058a5e4aa8463db642e40)) by Marc Jovaní González
- **api,api-e2e**: add fix to restore debug ([1a4961c](https://github.com/drackp2m/playsetonline/commit/1a4961c48976366adeb8f0bb61f04b6184d218ea)) by Marc Jovaní González
- **api,app**: dynamic origin on api CORS and add withCredentials interceptor in app ([320ce1e](https://github.com/drackp2m/playsetonline/commit/320ce1ed1ea57caa893248f9daf248310ffccb7f)) by Marc Jovaní González
- **api,app**: solve more eslint warnings ([7d8ff37](https://github.com/drackp2m/playsetonline/commit/7d8ff3733ca1b4ca1ceab2b5ed5225f6802939f6)) by Marc Jovaní González
- **api**: add cookie expiration date ([983c3e8](https://github.com/drackp2m/playsetonline/commit/983c3e847a8ae8e1771164ee3435b600b85ccee8)) by Marc Jovaní González
- **api**: add cookieDomain environment variable ([42707b9](https://github.com/drackp2m/playsetonline/commit/42707b9527ea0e84fffcac35ee5b70c65759d7d1)) by Marc Jovaní González
- **api**: add Injectable decorator to LoginUsecase ([be6118b](https://github.com/drackp2m/playsetonline/commit/be6118b545ab66936862f00849d85296c8c5ba78)) by Marc Jovaní González
- **api**: add ssh key and cert dynamicaly by API_PREFIX env variable ([a777d07](https://github.com/drackp2m/playsetonline/commit/a777d0768fca478272f0a4cb453890e4613b5014)) by Marc Jovaní González
- **api**: allwo origin when undefined ([86383ed](https://github.com/drackp2m/playsetonline/commit/86383edf8cced072325cccdba689b53121f00929)) by Marc Jovaní González
- **api**: check email on registerUseCase only when request contains it ([5dbe298](https://github.com/drackp2m/playsetonline/commit/5dbe298afb8f98800105604ba1c3690a5559bd29)) by Marc Jovaní González
- **api**: correct fork mikro-orm entityManagers in entityRepositories (thx [@adlacruzes](https://github.com/adlacruzes)) ([b27e281](https://github.com/drackp2m/playsetonline/commit/b27e281637242836be8262557cc878cdce838d03)) by Marc Jovaní González
- **api**: createGame and JoinGame Spec with provider overrided on import module ([827e0ff](https://github.com/drackp2m/playsetonline/commit/827e0ff5c15dc9c44d137db4837e004296e14eae)) by Marc Jovaní González
- **api**: fix specs to use cookieDomain ([97090e5](https://github.com/drackp2m/playsetonline/commit/97090e58cb203ccc4f8b8d1c2df236d3a17a2e27)) by Marc Jovaní González
- **api**: remove async property on getData method of AppController ([3c8caa0](https://github.com/drackp2m/playsetonline/commit/3c8caa05042669e5197f1a4467d15baca23c614c)) by Marc Jovaní González
- **api**: remove port on bootstrap message when environment is production ([059bf03](https://github.com/drackp2m/playsetonline/commit/059bf0382fe4b1748a359ff65bf6a148b67e7667)) by Marc Jovaní González
- **api**: remove port on production cron ([afc6741](https://github.com/drackp2m/playsetonline/commit/afc6741bcf302a33e62e1a40d88aa8782dff587d)) by Marc Jovaní González
- **api**: restore api debug, type GetPingsOutput (still does not work) ([8c085ec](https://github.com/drackp2m/playsetonline/commit/8c085ecf07584f3a1f11241b72597737e5e5caa6)) by Marc Jovaní González
- **api**: set sameSite to 'none' ([59ad795](https://github.com/drackp2m/playsetonline/commit/59ad795d5504556396bf877a9d2671b3bc769f75)) by Marc Jovaní González
- **api**: solved type error on GameParticipantRepository ([f1e604b](https://github.com/drackp2m/playsetonline/commit/f1e604bdea8b2e81b7270038705a7bdb49c43282)) by Marc Jovaní González
- **api**: use persistAndFlush instead insert on game-participant repository ([19a7bb3](https://github.com/drackp2m/playsetonline/commit/19a7bb3a5d957bcb88959ab943fb1783f1f93930)) by Marc Jovaní González
- **app,api**: exceptions and errores ([5d9e6db](https://github.com/drackp2m/playsetonline/commit/5d9e6dba1fa242851c9afa78f50677b947408e1c)) by Marc Jovaní González
- **app**: add apple icon and load src images without initial slash ([87db30b](https://github.com/drackp2m/playsetonline/commit/87db30b827b624bde7c28c67bcf5085f2108de47)) by Marc Jovaní González
- **app**: add certs and proxy configs ([7fff4af](https://github.com/drackp2m/playsetonline/commit/7fff4af03cf6c76d47b9320a7f02a967d5f6b57c)) by Marc Jovaní González
- **app**: add manifest to src ([2f7bcaf](https://github.com/drackp2m/playsetonline/commit/2f7bcaf58ba06c25cefd2a8d81388958092a4f9d)) by Marc Jovaní González
- **app**: add mask with webkit ([4f051d6](https://github.com/drackp2m/playsetonline/commit/4f051d60fcbf680f4492dfa9c762369ad1735a10)) by Marc Jovaní González
- **app**: add maskPath to glitchSvgComponent, only apply effect on focus ([0d83bc6](https://github.com/drackp2m/playsetonline/commit/0d83bc61ea0d085ccc7e9878965cbcb5b7114f57)) by Marc Jovaní González
- **app**: add shortcut to root path in `Sets found` message on game section ([074980d](https://github.com/drackp2m/playsetonline/commit/074980dc303572ba18cc44051ed8f8f8423d1569)) by Marc Jovaní González
- **app**: allow defining card sizes in any dimension and rotation ([cf73c4a](https://github.com/drackp2m/playsetonline/commit/cf73c4a007eb6f755e396a71a160ae0a993d4707)) by Marc Jovaní González
- **app**: back to port 3000 on wss environment url ([4996ee8](https://github.com/drackp2m/playsetonline/commit/4996ee8ccf193bc428d46fc4a6e62023920f0179)) by Marc Jovaní González
- **app**: comment ping ws request to server ([10a46f5](https://github.com/drackp2m/playsetonline/commit/10a46f56abe3e096f51ccfd1bcd035c42f6b14b6)) by Marc Jovaní González
- **app**: enable debug on Angular with SSL ([e7f20bb](https://github.com/drackp2m/playsetonline/commit/e7f20bbda8ab1b6c4784edb4c2dc806f7ce406ae)) by Marc Jovaní González
- **app**: finish authInterceptor logic ([78899ab](https://github.com/drackp2m/playsetonline/commit/78899ab4442903a6ac010aca9c07fc937fe5ac51)) by Marc Jovaní González
- **app**: firefox debugger works, zone.js removed, update deps and husky hooks ([50c8212](https://github.com/drackp2m/playsetonline/commit/50c82125a6fbc65431ee91c7eebe628ed9c4458e)) by Marc Jovaní González
- **app**: fix problems with currentUserStore, migrate to new eslint config ([e6d37a4](https://github.com/drackp2m/playsetonline/commit/e6d37a4992fa0853b8450b61b82b01823dc05391)) by Marc Jovaní González
- **app**: fix shape height ([629289d](https://github.com/drackp2m/playsetonline/commit/629289d22c24f6265638c294017d3a3794cbb0dc)) by Marc Jovaní González
- **app**: highlight now works fine ([ea404b6](https://github.com/drackp2m/playsetonline/commit/ea404b6381ee3b10410f33d1c9aa6db1b86bd177)) by Marc Jovaní González
- **app**: improve hability to rotate card shape component ([3edef16](https://github.com/drackp2m/playsetonline/commit/3edef16835c562a4f3176726d46a91bb554fb960)) by Marc Jovaní González
- **app**: improve order of mixins in scss loops ([1c07bc8](https://github.com/drackp2m/playsetonline/commit/1c07bc84a31576614a8e38ce5ae84b9c17744fab)) by Marc Jovaní González
- **app**: make register and login forms responsive ([e777b7e](https://github.com/drackp2m/playsetonline/commit/e777b7ee93f60deaba6453d9600c1a134d7eccfa)) by Marc Jovaní González
- **app**: make responsive sections border-radius, shadow and spacing ([814ac00](https://github.com/drackp2m/playsetonline/commit/814ac00a8ef1e5219a13bb74a3b8fb699a75f5af)) by Marc Jovaní González
- **app**: mock LoginGQL ([075d5da](https://github.com/drackp2m/playsetonline/commit/075d5daf8352d70209ed12a78c9f80bb0c771c6e)) by Marc Jovaní González
- **app**: remove error of logout button ([a9872eb](https://github.com/drackp2m/playsetonline/commit/a9872eb48aef2e613d7632270f72fbfcacfd75ea)) by Marc Jovaní González
- **app**: remove not used injection ([e9afa79](https://github.com/drackp2m/playsetonline/commit/e9afa79f66137cdf0dbd8c805363d7afd1aec28a)) by Marc Jovaní González
- **app**: remove ultra cheats on init ([7a9a8de](https://github.com/drackp2m/playsetonline/commit/7a9a8de7cafe5fecc97cd54a21aa2e4c2aab6d3b)) by Marc Jovaní González
- **app**: replace more set- with app- :S ([20c297d](https://github.com/drackp2m/playsetonline/commit/20c297d0fce2868356a5ce32414c366cc434a803)) by Marc Jovaní González
- **app**: replace set-_ to app-_ on scss files ([a4482ea](https://github.com/drackp2m/playsetonline/commit/a4482eae9b84832f8df757287905b42f5dec67c5)) by Marc Jovaní González
- **app**: solve some bugs ([f127b6f](https://github.com/drackp2m/playsetonline/commit/f127b6fd0558a772ee54d1b39f940e7a9b39f793)) by Marc Jovaní González
- **app**: solve won component height ([a3a6740](https://github.com/drackp2m/playsetonline/commit/a3a6740cc3a399453fdd82582472f0bbb0d741fe)) by Marc Jovaní González
- **app**: solved the problem with authInterceptor making requests without info ([74ab2f6](https://github.com/drackp2m/playsetonline/commit/74ab2f61c76915a20cc1638e40b09e9381073545)) by Marc Jovaní González
- **app**: try to load typography relatively ([0844e85](https://github.com/drackp2m/playsetonline/commit/0844e8521cd3b446e911dc60d1d33d0199045544)) by Marc Jovaní González
- **app**: try to use proxy ([2ea429f](https://github.com/drackp2m/playsetonline/commit/2ea429f4b19bc00b50888b0bb037a54537c105cb)) by Marc Jovaní González
- **app**: update add card message when there are Sets on the table ([3c72b0d](https://github.com/drackp2m/playsetonline/commit/3c72b0d8f0be03d68adf1cd831f163668626e7e0)) by Marc Jovaní González
- **app**: update deps and add navigation with hash on Angular ([3859d65](https://github.com/drackp2m/playsetonline/commit/3859d654413aaa6e48fd8915f7ddf7b5d8bea574)) by Marc Jovaní González
- **app**: upgrade apple icon, add apple app capable to true ([b9c6fab](https://github.com/drackp2m/playsetonline/commit/b9c6fab86b81ebb6f456ffc270f026bac16229e0)) by Marc Jovaní González
- **app**: user api.playsetonline.com on environment ([07ca554](https://github.com/drackp2m/playsetonline/commit/07ca5549ab78dbe9387d2e429fcf80b12b352c65)) by Marc Jovaní González
- **app**: vertical cards now look good in Safari ([4c6f709](https://github.com/drackp2m/playsetonline/commit/4c6f709d40085033a636180d0b487e0c55910cd1)) by Marc Jovaní González
- **app**: wip: try to rebuild old project ([f2d4023](https://github.com/drackp2m/playsetonline/commit/f2d4023de21372c818172934e23835207bd15f02)) by Marc Jovaní González
- fix app tests and update test package command for run all tests ([22cf05c](https://github.com/drackp2m/playsetonline/commit/22cf05cc8c67d8df5f1cf97ce5eea37dc41f34f9)) by Marc Jovaní González
- fix emoji left? ([d219658](https://github.com/drackp2m/playsetonline/commit/d219658c0546072898af41060410341d60fec249)) by Marc Jovaní González
- github actions from main ([65fc8b4](https://github.com/drackp2m/playsetonline/commit/65fc8b4b5fa0d471e0f421da280e948fafebd9c0)) by Marc Jovaní González
- improve tsconfig's to run MikroOrm migrations ([a0930ce](https://github.com/drackp2m/playsetonline/commit/a0930ce2d8f3e36dc50a57e213f49591383a2838)) by Marc Jovaní González
- release not needs any other job ([91a6f5f](https://github.com/drackp2m/playsetonline/commit/91a6f5fdb948f9a9023e521bf94e3ab0ea6d3818)) by Marc Jovaní González
- remove release configuration from package.json, rename release file ([469df13](https://github.com/drackp2m/playsetonline/commit/469df134b79943a94e3120fa5f08cc05613c35f3)) by Marc Jovaní González
- remove release from deploy ([80bcfdf](https://github.com/drackp2m/playsetonline/commit/80bcfdf3231fc00eafb311fc8a1c0a23b0c74f6e)) by Marc Jovaní González
- remove slash from url ([5a276b1](https://github.com/drackp2m/playsetonline/commit/5a276b17048e18e178d8eb117b25e642f54a71f4)) by Marc Jovaní González
- rename docker stages ([14f4008](https://github.com/drackp2m/playsetonline/commit/14f40087feee0430179280654903c9dbd2b4e639)) by Marc Jovaní González
- rename docker stages ([424ea30](https://github.com/drackp2m/playsetonline/commit/424ea30350c7e77545fc66f496a3c8f4839eda88)) by Marc Jovaní González
- rename workflows and execute release after deploy finish ([b3c4875](https://github.com/drackp2m/playsetonline/commit/b3c48754ddabd4b844bdfb905dcd4de213c40f6e)) by Marc Jovaní González
- try to fix release on ci ([4dbbe44](https://github.com/drackp2m/playsetonline/commit/4dbbe44644c1216a0566144d0e5ac89a7d8dfa87)) by Marc Jovaní González
- update package-lock ([b0a6aa5](https://github.com/drackp2m/playsetonline/commit/b0a6aa56b387ea36c3ce79853452a6a35e3c9411)) by Marc Jovaní González
- update yarn.lock ([77d4748](https://github.com/drackp2m/playsetonline/commit/77d474820390d57dcbd9380e240579c6125646a2)) by Marc Jovaní González

### 📚 Documentation

- update README ([be42334](https://github.com/drackp2m/playsetonline/commit/be42334ef4b9c7695d2929fd4f686a15d1994126)) by Marc Jovaní González

### 💻 Continuous Integration

- add cache with yarn ([09d0f1d](https://github.com/drackp2m/playsetonline/commit/09d0f1d426a94a3c0ecf704eb702e644d7cb2f5f)) by Marc Jovaní González
- add deps again and fix typography asset load ([a46df2f](https://github.com/drackp2m/playsetonline/commit/a46df2f9a8f8c32ef4745dbae3eebb34e912572f)) by Marc Jovaní González
- add permissions and pages setup ([cf59d6b](https://github.com/drackp2m/playsetonline/commit/cf59d6b95052334eaec9a0aa2c059ce4b133926a)) by Marc Jovaní González
- add quotes (again) ([b848d2a](https://github.com/drackp2m/playsetonline/commit/b848d2a1b2e6c800b0836e782d30607cb0b6ec9d)) by Marc Jovaní González
- add quotes to build url ([84f1c63](https://github.com/drackp2m/playsetonline/commit/84f1c6396815d9e38d0bd643245624c3e1f29dd2)) by Marc Jovaní González
- add semantic release config file ([33c45e4](https://github.com/drackp2m/playsetonline/commit/33c45e4fc51332a26896011b0ffded87d02faebe)) by Marc Jovaní González
- add slash at end T_T ([1ba4725](https://github.com/drackp2m/playsetonline/commit/1ba4725f1747cf36945327bcd263ad37110944ad)) by Marc Jovaní González
- add tests to ci ([f45945b](https://github.com/drackp2m/playsetonline/commit/f45945bab52d59a306131192f0240c650a50558e)) by Marc Jovaní González
- **app**: add /browser to build upload artifact ([a2827fd](https://github.com/drackp2m/playsetonline/commit/a2827fdb6f5b7b0c7000403466acd469e1dd23f3)) by Marc Jovaní González
- **app**: build using yarn ([bd78515](https://github.com/drackp2m/playsetonline/commit/bd785158d5d9da8337a9275343e8ea09d54de0f5)) by Marc Jovaní González
- **app**: try to run nx from node_modules ([5cb51cb](https://github.com/drackp2m/playsetonline/commit/5cb51cb289d4fb99382011805fb54144ebace56f)) by Marc Jovaní González
- **app**: update yarn lock ([32e1f9b](https://github.com/drackp2m/playsetonline/commit/32e1f9b3c01b355fae48ef9b0dd909685bd87b00)) by Marc Jovaní González
- change base href of app build ([c3c20f8](https://github.com/drackp2m/playsetonline/commit/c3c20f8b80a8b7627622ab46e8ad7f42c6244fa5)) by Marc Jovaní González
- change trigger to merge on main branch ([94a324b](https://github.com/drackp2m/playsetonline/commit/94a324b5cd33d20a138f1c5e343db22d521fe6a0)) by Marc Jovaní González
- fix github pages commands ([873552c](https://github.com/drackp2m/playsetonline/commit/873552c397f66fdc5291a2037aac4ffdb56b6abb)) by Marc Jovaní González
- fix step name =) ([dfdd2df](https://github.com/drackp2m/playsetonline/commit/dfdd2dfa772a3f6eb1fb95a74f4ac22b94dc0a04)) by Marc Jovaní González
- remove deps and add install to other steps ([83e6b44](https://github.com/drackp2m/playsetonline/commit/83e6b44f8839428abaa85a060a4e120d713bed2d)) by Marc Jovaní González
- remove deps on deploy (again) ([5dc9c9e](https://github.com/drackp2m/playsetonline/commit/5dc9c9e0fb87fa986826d1e0ab4f23c3eaa2efaf)) by Marc Jovaní González
- test github actions ([841804e](https://github.com/drackp2m/playsetonline/commit/841804ea9dcfd72922bd918a75e366d6e7b6d1d8)) by Marc Jovaní González
- try to fix ci ([3a5d180](https://github.com/drackp2m/playsetonline/commit/3a5d1802e137cabe010df81a3df3bbb4729ab741)) by Marc Jovaní González
- try to lauch deploy on push to main ([5b2151f](https://github.com/drackp2m/playsetonline/commit/5b2151fcb2badf928c877dca329b8f7e860acb36)) by Marc Jovaní González
- try to use base_url ([176fb2b](https://github.com/drackp2m/playsetonline/commit/176fb2b6d3b9064d15390cbc4586bab25372527d)) by Marc Jovaní González
- try to use new account to semantic release ([a6792b1](https://github.com/drackp2m/playsetonline/commit/a6792b1f15a89e10a1e8cad1ff77f26aec978bf0)) by Marc Jovaní González
- try to use npm ([1472be0](https://github.com/drackp2m/playsetonline/commit/1472be0db506f0345196dba4391d4af11baa30ec)) by Marc Jovaní González
- try to use npm ([be85e93](https://github.com/drackp2m/playsetonline/commit/be85e93da614e41de18aded519aacc0b5324a5eb)) by Marc Jovaní González
- update main branch changes detection ([a324d3e](https://github.com/drackp2m/playsetonline/commit/a324d3e4fe014ef1b3e96005e89eb556e62d7cb9)) by Marc Jovaní González
- use page url instead base url ([214d2b4](https://github.com/drackp2m/playsetonline/commit/214d2b49e61c68508158b56142f1d8e70b7ff5ad)) by Marc Jovaní González

### 🎒 Chores

- add "run" to Dockerfile npm commands ([6294fe6](https://github.com/drackp2m/playsetonline/commit/6294fe60cde4701b051e9fece58392a5fb061fcd)) by Marc Jovaní González
- add comment ([d52721f](https://github.com/drackp2m/playsetonline/commit/d52721f7548c6dc634575c45bd595cbfa2bb46c6)) by Marc Jovaní González
- add npm cache to github pages, improve package commands, fix nx many ([1bd8706](https://github.com/drackp2m/playsetonline/commit/1bd870690a679acc79be7821ebc65aa74d53a9f2)) by Marc Jovaní González
- add repository on package.json ([59cffe4](https://github.com/drackp2m/playsetonline/commit/59cffe41021b25e88b6d6c79b27c40d68693f31a)) by Marc Jovaní González
- add slash to base href ([9842f1b](https://github.com/drackp2m/playsetonline/commit/9842f1be253ce27a1b6b938ec38281146be53caa)) by Marc Jovaní González
- **api,api-e2e,app,app-e2e**: enable eslint rules ([7a74e7f](https://github.com/drackp2m/playsetonline/commit/7a74e7f1a7e631bd4911fd145606f499c04eea32)) by Marc Jovaní González
- **api,app**: update deps ([902dfc2](https://github.com/drackp2m/playsetonline/commit/902dfc2274a735a67399d6db58740716ded62b48)) by Marc Jovaní González
- **api,app**: upgrade nx and other deps ([46689a0](https://github.com/drackp2m/playsetonline/commit/46689a03693449bf9d0b3788ed88062057ebbcad)) by Marc Jovaní González
- **app**: artifacts to v3 again ([5d517a9](https://github.com/drackp2m/playsetonline/commit/5d517a9b07528b33375a447a9c12d62e9fcfdbf0)) by Marc Jovaní González
- **app**: back to ubuntu-latest ([72d6aaa](https://github.com/drackp2m/playsetonline/commit/72d6aaa220a411ff9cc42d227a189cb2d7261a37)) by Marc Jovaní González
- **app**: build app on dist/set-online ([88495fc](https://github.com/drackp2m/playsetonline/commit/88495fc41763a53237d5fbea3b209f4c04ea0277)) by Marc Jovaní González
- **app**: build to docs ([0585734](https://github.com/drackp2m/playsetonline/commit/058573490c7de12e400f78093b446425181a392e)) by Marc Jovaní González
- **app**: configure mikro-orm for autoload entities ([03bdfae](https://github.com/drackp2m/playsetonline/commit/03bdfae57c5289b38514d1a0e6a2feccc2b9f1d6)) by Marc Jovaní González
- **app**: ignore dist app to try github pages ([df18734](https://github.com/drackp2m/playsetonline/commit/df187341635b7921347e253a42766bf87260dee5)) by Marc Jovaní González
- **app**: increase budgets component style maximumError to 8kb ([f7c4b8c](https://github.com/drackp2m/playsetonline/commit/f7c4b8c993b067e8c8d0a401e63df92014fd3de8)) by Marc Jovaní González
- **app**: try actions v4 ([3428a56](https://github.com/drackp2m/playsetonline/commit/3428a560525d19b04e04873bc645d2834cd1d48b)) by Marc Jovaní González
- **app**: upgrade all deploy steps to v3 ([2c1fbb9](https://github.com/drackp2m/playsetonline/commit/2c1fbb9df0c918539f4675bcb02abfa15aa0603c)) by Marc Jovaní González
- back to env port on main.ts (api) ([44a76f2](https://github.com/drackp2m/playsetonline/commit/44a76f2e8838ee52615437cde1532bd03ce53219)) by Marc Jovaní González
- back to run all tests in gh-pages action ([ab60e59](https://github.com/drackp2m/playsetonline/commit/ab60e59df0fc547813b8d8e3fc6a927e80433c7b)) by Marc Jovaní González
- chmod with sudo ([19a4bc4](https://github.com/drackp2m/playsetonline/commit/19a4bc4bc298287613a0f10d21b77551dc68f4a7)) by Marc Jovaní González
- create Dockerfile for production ([8d744ea](https://github.com/drackp2m/playsetonline/commit/8d744eac0f1ce771e7c090f0c8f66b3c85dd6f24)) by Marc Jovaní González
- enable lint on html files ([cf4d17c](https://github.com/drackp2m/playsetonline/commit/cf4d17cba84f5062bbf79fadfec8066ad543dded)) by Marc Jovaní González
- expose port 10_000 ([e20241c](https://github.com/drackp2m/playsetonline/commit/e20241c81860c5d26dd237a8b02f8fed711cee12)) by Marc Jovaní González
- fix devcontainer and update nx to 19.8 ([0e1c5ff](https://github.com/drackp2m/playsetonline/commit/0e1c5ff9f33c7e1daf79a7985867d4f27582c15a)) by Marc Jovaní González
- fix eslint config for all projects ([f108c2c](https://github.com/drackp2m/playsetonline/commit/f108c2c4e5672bb2153a673e7a86ed3b2a80f1d6)) by Marc Jovaní González
- fix yarn lock ([78dcfc6](https://github.com/drackp2m/playsetonline/commit/78dcfc69654a07e36b47e3b914fe60ca3b07ba20)) by Marc Jovaní González
- gh-pages add permissions to write ([efddb84](https://github.com/drackp2m/playsetonline/commit/efddb841f6199260392c428dca9ec155be1826d9)) by Marc Jovaní González
- ignore definitions file ([56aac5f](https://github.com/drackp2m/playsetonline/commit/56aac5f93368a436101f0dcf3ebf33b9a60e7163)) by Marc Jovaní González
- ignore devcontainer docker compose, and remove from git ([fdf8a7f](https://github.com/drackp2m/playsetonline/commit/fdf8a7f13205af7c599134ae008ae647531914fd)) by Marc Jovaní González
- improve production port debug and dockerfile with dynamic port expose ([20b0ad6](https://github.com/drackp2m/playsetonline/commit/20b0ad6e0f24cab7e83012c057103e952a4bfe83)) by Marc Jovaní González
- improve production port debug and dockerfile with dynamic port expose ([ac71822](https://github.com/drackp2m/playsetonline/commit/ac71822a767652fda0df96f891ef6c4275490023)) by Marc Jovaní González
- improve release commit message and skip this on husky ([69e4949](https://github.com/drackp2m/playsetonline/commit/69e4949af5c34eff957766a0cfafd0274ac50026)) by Marc Jovaní González
- migrate nx ([69bc159](https://github.com/drackp2m/playsetonline/commit/69bc159394258a7bfa68c5c638f865d2ebae9159)) by Marc Jovaní González
- migrate nx to 16.5.2 ([df3732f](https://github.com/drackp2m/playsetonline/commit/df3732f698e922dcb7749481e4a97064d7c8b8fd)) by Marc Jovaní González
- nx to 18.1.1 ([1ca5ba6](https://github.com/drackp2m/playsetonline/commit/1ca5ba6abfee5fb65d1ac53616e0c572869a15ba)) by Marc Jovaní González
- nx to 18.1.1 ([0316cf1](https://github.com/drackp2m/playsetonline/commit/0316cf15852eec330e87235015442c5525d5d1df)) by Marc Jovaní González
- prepare devcontainer ([9a1a048](https://github.com/drackp2m/playsetonline/commit/9a1a0482df8e3a047f9df188a565391d9015f2b1)) by Marc Jovaní González
- reduce max commit chars to 70 ([1684894](https://github.com/drackp2m/playsetonline/commit/16848944effb5d522e2e33e6e10fe0d168f4432d)) by Marc Jovaní González
- remove .env ([353e329](https://github.com/drackp2m/playsetonline/commit/353e329bf069576eafe65f94aa041ebdbe7bfbdf)) by Marc Jovaní González
- remove cache from gh-pages node setup ([294778b](https://github.com/drackp2m/playsetonline/commit/294778b526b0674626ec7ce892480352f6e47434)) by Marc Jovaní González
- remove chmod on .env ([d8121e1](https://github.com/drackp2m/playsetonline/commit/d8121e14df0c9998fb9b90eb474b420c244a94e3)) by Marc Jovaní González
- remove copy of readme and remove prettier in html ([5b97df0](https://github.com/drackp2m/playsetonline/commit/5b97df08089aebb03831abed0ef79a434cfef4c0)) by Marc Jovaní González
- remove debug on lint-staged ([06e34fd](https://github.com/drackp2m/playsetonline/commit/06e34fd24a3847409535ea94bf42728dcf18bdbd)) by Marc Jovaní González
- remove host 0.0.0.0 ([217c884](https://github.com/drackp2m/playsetonline/commit/217c884893c3ef8ef4a74b62e6addfe850882ecb)) by Marc Jovaní González
- remove host on main api bootstrap ([33fb7f3](https://github.com/drackp2m/playsetonline/commit/33fb7f31204a55a7ca1c4eb4bdf2eb2ca72b01a1)) by Marc Jovaní González
- remove husky prepare command ([011d7c6](https://github.com/drackp2m/playsetonline/commit/011d7c6c96dfb05d6de05920577a1369f8f04e0e)) by Marc Jovaní González
- remove hyphwn ([2cfc015](https://github.com/drackp2m/playsetonline/commit/2cfc015c27378ebeeb5b0c4c90ada9d0a2919029)) by Marc Jovaní González
- remove nx workspace data from git ([5514116](https://github.com/drackp2m/playsetonline/commit/5514116ce7f9483d3210469ad6f94f91905bb4c4)) by Marc Jovaní González
- remove scss replaces :( ([54ce1ef](https://github.com/drackp2m/playsetonline/commit/54ce1ef4261a73976fa6c0c89e253864caeb1507)) by Marc Jovaní González
- remove unneeded ocnfiguration of settings.json ([89d9a35](https://github.com/drackp2m/playsetonline/commit/89d9a3557b4d29269fb6bb9b912e9da7954764dc)) by Marc Jovaní González
- run install with npm ci ([a867b64](https://github.com/drackp2m/playsetonline/commit/a867b6429e8e77cc376806b4d84ef1a85bdb73ea)) by Marc Jovaní González
- run ls -la and id ([6d9e261](https://github.com/drackp2m/playsetonline/commit/6d9e26136fc7d6214d1fc3893fbd0e30eae26864)) by Marc Jovaní González
- run only app tests ([07fbe72](https://github.com/drackp2m/playsetonline/commit/07fbe727a57afcde43970feca23e4adc17cc383c)) by Marc Jovaní González
- set api url to localhost and update Angular prod backend url ([b9af53d](https://github.com/drackp2m/playsetonline/commit/b9af53d22500b4e60195d3b29957228532a087fd)) by Marc Jovaní González
- test new deploy ([5f231ae](https://github.com/drackp2m/playsetonline/commit/5f231ae467411849a8be248bf920bd532bc57ab6)) by Marc Jovaní González
- try new deploy ([ac6414c](https://github.com/drackp2m/playsetonline/commit/ac6414c88f8081d7608331a99264f5259e3020bf)) by Marc Jovaní González
- try to add mikro-orm environment variables ([3001bfb](https://github.com/drackp2m/playsetonline/commit/3001bfb318330f6238d2eb1122009237b3737fae)) by Marc Jovaní González
- try to add permissions to .env file (of Render) ([4aa29e7](https://github.com/drackp2m/playsetonline/commit/4aa29e7fb171e9e67987e694cc4a2c51962df06e)) by Marc Jovaní González
- try to back to npm ([dfd5c31](https://github.com/drackp2m/playsetonline/commit/dfd5c3166af96aa29b4d5b2094cbdbcb5fba7345)) by Marc Jovaní González
- try to execute prod docker commands with yarn ([f091863](https://github.com/drackp2m/playsetonline/commit/f0918636805a702cabed707ecebcc29fac2583f5)) by Marc Jovaní González
- try to fix github actions ([d26f7cb](https://github.com/drackp2m/playsetonline/commit/d26f7cb3dfa5ea522d10601c9306d86c8c24d50c)) by Marc Jovaní González
- try to fix path from artifacts upload ([ca08a5f](https://github.com/drackp2m/playsetonline/commit/ca08a5f9c02f6caa8c467a4422c1cfe1992a9215)) by Marc Jovaní González
- try to restore type-enum rule on commitizen ([a743fba](https://github.com/drackp2m/playsetonline/commit/a743fba763d31b638c90ffb8725a6fad7689eab5)) by Marc Jovaní González
- try to use alpine by Carlos Aragón ([8d7b74c](https://github.com/drackp2m/playsetonline/commit/8d7b74c95679d1cbfcaf47d63cd214e8b425080c)) by Marc Jovaní González
- try to use semantic release (again) ([7d3c6d2](https://github.com/drackp2m/playsetonline/commit/7d3c6d2c5ecf70bad488c5d4ed20380903478b04)) by Marc Jovaní González
- update .env.example ([5b86619](https://github.com/drackp2m/playsetonline/commit/5b86619eecd2b5da8c1c15293f7953378fc0b7d2)) by Marc Jovaní González
- update all dependencies ([beff13b](https://github.com/drackp2m/playsetonline/commit/beff13b74c89f9b5efc4d1b5ccac52149dbf5de5)) by Marc Jovaní González
- update all deps ([2d7a78a](https://github.com/drackp2m/playsetonline/commit/2d7a78a253acadb009180a7b5318537f861d10a3)) by Marc Jovaní González
- update all deps to latest compatible version ([89262a7](https://github.com/drackp2m/playsetonline/commit/89262a7714096d1d1e2e13903e601feab0898901)) by Marc Jovaní González
- update deploy to node 18 ([a3c62eb](https://github.com/drackp2m/playsetonline/commit/a3c62ebd748b633486954f76004d707abc069dea)) by Marc Jovaní González
- update deps ([6d5c417](https://github.com/drackp2m/playsetonline/commit/6d5c4175a2a88e8153b051582ed7421824f91a88)) by Marc Jovaní González
- update docker node image, add jest global setup to unit tests ([90c37a1](https://github.com/drackp2m/playsetonline/commit/90c37a1c063ce90704fbbe441f315bbda3d67045)) by Marc Jovaní González
- update Dockerfile ([55f2be2](https://github.com/drackp2m/playsetonline/commit/55f2be28e32ebeff105b79acad293e6810da8d67)) by Marc Jovaní González
- update Dockerfile ([5f5cf63](https://github.com/drackp2m/playsetonline/commit/5f5cf63749ce309b5b394bf5879a2e261bfba9b8)) by Marc Jovaní González
- update Dockerfile to test build on Render ([186c7ae](https://github.com/drackp2m/playsetonline/commit/186c7aea5f59503530815c0d9eeacf53308eae2b)) by Marc Jovaní González
- update nx to 19.6.4 ([4ad3eb5](https://github.com/drackp2m/playsetonline/commit/4ad3eb5d50a455989b175f7332aaf855a4e72a75)) by Marc Jovaní González
- update nx to 19.6.4 ([522e49d](https://github.com/drackp2m/playsetonline/commit/522e49d4f6bd9223cbdae07adc942d80b524c57a)) by Marc Jovaní González
- update package-lock ([6de8635](https://github.com/drackp2m/playsetonline/commit/6de863520332bf083920629d5238dba3e251c50b)) by Marc Jovaní González
- upgrade all deps to last version (except ts-morph) ([65942dd](https://github.com/drackp2m/playsetonline/commit/65942dd308d92231c5c0b2aedf343fa7a1eba8f6)) by Marc Jovaní González
- upgrade deps ([55fd3c5](https://github.com/drackp2m/playsetonline/commit/55fd3c53ecdb55221801e51dba3dd613e12f8f1f)) by Marc Jovaní González
- upgrade deps ([419b44f](https://github.com/drackp2m/playsetonline/commit/419b44f287b9be16a7262da8e5e49c7edd943f48)) by Marc Jovaní González
- upgrade deps ([0459936](https://github.com/drackp2m/playsetonline/commit/0459936c2e0abde9f6277f1bf5686130538c54a6)) by Marc Jovaní González
- upgrade deps ([ed81449](https://github.com/drackp2m/playsetonline/commit/ed81449520678f7e6573208701bd2e377b059da3)) by Marc Jovaní González
- upgrade deps ([4409917](https://github.com/drackp2m/playsetonline/commit/44099175bf0cd9e3b513ed154afc9b4d75ad5056)) by Marc Jovaní González
- upgrade deps ([5be53c5](https://github.com/drackp2m/playsetonline/commit/5be53c51e052387dd122bc2984987376304de620)) by Marc Jovaní González
- upgrade deps (except typescript 5.1.6 => 5.2.2 ([5e61347](https://github.com/drackp2m/playsetonline/commit/5e613476a8103ec0e46241e0dceca43cf4f01b4e)) by Marc Jovaní González
- upgrade deps and add all env keys to gh-pages ([d5cf65f](https://github.com/drackp2m/playsetonline/commit/d5cf65f9135127244741584398772663a3d5c5e0)) by Marc Jovaní González
- upgrade deps to last version ([218ed70](https://github.com/drackp2m/playsetonline/commit/218ed70bcd806f971f85201b4e566689505a3ae2)) by Marc Jovaní González
- upgrade node to 22.7 ([0b3326e](https://github.com/drackp2m/playsetonline/commit/0b3326e1c6dcce4718b3b3ae20e900d0aad1d80e)) by Marc Jovaní González
- upgrade npm deps ([adccb8d](https://github.com/drackp2m/playsetonline/commit/adccb8d4ebb285955269893b53acabf57261a651)) by Marc Jovaní González
- upgrade nx from 19.4.1 to 19.5.0 ([aaba67a](https://github.com/drackp2m/playsetonline/commit/aaba67a857571237f6e6b8819ba2a3e9942c1465)) by Marc Jovaní González
- upgrade nx to 18.1.3 and add node-cache dep ([dbf4ced](https://github.com/drackp2m/playsetonline/commit/dbf4cedb1ee1505737e2f5d9b04da5dc53072402)) by Marc Jovaní González
- upgrade nx to 20.0.1 ([ad762cf](https://github.com/drackp2m/playsetonline/commit/ad762cffd12d89e3049200617824ecbdfd1feba6)) by Marc Jovaní González
- upgrade nx version ([b41e186](https://github.com/drackp2m/playsetonline/commit/b41e186d1957c3c85394154e8246ea6fe3d3c7b6)) by Marc Jovaní González
- upgrade nx, remove react webpack plugin and svgr webpack ([c04e1ec](https://github.com/drackp2m/playsetonline/commit/c04e1ece77f7919f61c9f56f2df1a37bd102de6e)) by Marc Jovaní González
- upgrade package deps ([43a7ace](https://github.com/drackp2m/playsetonline/commit/43a7ace22d429d0a5efeedf8c90f587963ff4ee4)) by Marc Jovaní González
- upgrade some deps ([8dfb0e9](https://github.com/drackp2m/playsetonline/commit/8dfb0e9e5784d6bee921ab0f1894593eb142c58d)) by Marc Jovaní González
- upgrade some deps ([e9c1259](https://github.com/drackp2m/playsetonline/commit/e9c125949fe39c1d59ee1712adb0a19f483770a0)) by Marc Jovaní González
- upgrade to node 22.9 and postgres 17.0 (with alpine 3.20) ([e2617f0](https://github.com/drackp2m/playsetonline/commit/e2617f0db48d59babcdd363cb0ef322b91385dd3)) by Marc Jovaní González
- upgrade to nx 17 and use npm in all places ([d99a01e](https://github.com/drackp2m/playsetonline/commit/d99a01e83ee165246e3c9436998b03463243e0a1)) by Marc Jovaní González
- upgrade to nx 20.0.3 ([6d68f5f](https://github.com/drackp2m/playsetonline/commit/6d68f5f8f62504bb2d36efe8a03eaf8a4d5322fc)) by Marc Jovaní González
- use node 20.8 in github actions ([2df6063](https://github.com/drackp2m/playsetonline/commit/2df60633b177307a52851b3e05ed2ff032725727)) by Marc Jovaní González

**Full Changelog**: https://github.com/drackp2m/playsetonline/compare/...v1.0.0

# v1.0.0 (2024-11-15)

## What's Changed

### ✨ Features

- add manifest ([9e353ce](https://github.com/drackp2m/playsetonline/commit/9e353cefee6b0bac47b6256b58f924294644e668)) by Marc Jovaní González
- add other commit of type feat ([ddc4750](https://github.com/drackp2m/playsetonline/commit/ddc4750ba3da9c684bea5fddb7795752433f3dcc)) by Marc Jovaní González
- add spaces page ([1bd7e59](https://github.com/drackp2m/playsetonline/commit/1bd7e5929c0a9b6175078e4c63614b1f4367f609)) by Marc Jovaní González
- **api,app**: add root api endpoint with status, add cron on appService ([3e3b0fb](https://github.com/drackp2m/playsetonline/commit/3e3b0fb7a8ea5bcd560e952ca13a93572babc1d9)) by Marc Jovaní González
- **api,app**: add selfsigned ssl ([5668765](https://github.com/drackp2m/playsetonline/commit/56687659c4fa1eb50bfd70285f9798a5fc6ad6f1)) by Marc Jovaní González
- **api,app**: add subscriptions to graphQL ([0d39442](https://github.com/drackp2m/playsetonline/commit/0d39442ba809e06dd67db2c6464740a02ca6f348)) by Marc Jovaní González
- **api,app**: add user store and getUserInfo query on userResolver ([5ed472f](https://github.com/drackp2m/playsetonline/commit/5ed472ff918ba0d70d0fbdcd20d2f5a05857e1f2)) by Marc Jovaní González
- **api,app**: create fake login from angular to nestjs-graphql ([7b2a616](https://github.com/drackp2m/playsetonline/commit/7b2a616466155384fe35d9565b0719831d18c770)) by Marc Jovaní González
- **api,app**: create newGame use case ([b401ee4](https://github.com/drackp2m/playsetonline/commit/b401ee49ef7d0f21985caa45d0a13b79e3ba2e84)) by Marc Jovaní González
- **api,app**: implements jwt refresh token ([ba18496](https://github.com/drackp2m/playsetonline/commit/ba18496c3e700314b375ab870f2edc3ae675f969)) by Marc Jovaní González
- **api,app**: improve ping, upgrade to node 22, add @angular/build package ([d2aed64](https://github.com/drackp2m/playsetonline/commit/d2aed64f0464926d175c74bd49aa93285ad0b360)) by Marc Jovaní González
- **api,app**: improve subscriptions, convert to signals, show on html ([800a3a0](https://github.com/drackp2m/playsetonline/commit/800a3a0767cfa5b9f2edf2b9341749eee5305051)) by Marc Jovaní González
- **api,app**: list games waiting join players ([f33d39c](https://github.com/drackp2m/playsetonline/commit/f33d39c0e3ea3436010e8b87ddff152181abe945)) by Marc Jovaní González
- **api,app**: ping works!! ([ba6e314](https://github.com/drackp2m/playsetonline/commit/ba6e314914f09ddac9d9f7ee48882e798e9a96ed)) by Marc Jovaní González
- **api,app**: remove proxy on app and decrease salt to 11 on registerUseCase ([a06d168](https://github.com/drackp2m/playsetonline/commit/a06d168021780b305f7fde105855a89f6fa16108)) by Marc Jovaní González
- **api,app**: service workers and /api with alive message ([5d64df7](https://github.com/drackp2m/playsetonline/commit/5d64df71f5619c691906a9e83770a9ad34021c60)) by Marc Jovaní González
- **api**: add cascade delete on user or game deletion in game-participant entity ([481aab9](https://github.com/drackp2m/playsetonline/commit/481aab91ee9041e0efb3f8550810327854593759)) by Marc Jovaní González
- **api**: add check-jwt-access-token use-case ([a41b5dd](https://github.com/drackp2m/playsetonline/commit/a41b5dd264ca23a3239932c770b71247a8c9d45c)) by Marc Jovaní González
- **api**: add custom mikro-orm namig strategy ([21d0cb6](https://github.com/drackp2m/playsetonline/commit/21d0cb6c261fc487027a7410b55e72a1387b8e29)) by Marc Jovaní González
- **api**: add exception filter ([8c0f635](https://github.com/drackp2m/playsetonline/commit/8c0f6351a566d27759a281f191fed652761a4cc5)) by Marc Jovaní González
- **api**: add jwt access token validation to graphql ws connections ([f6cc2db](https://github.com/drackp2m/playsetonline/commit/f6cc2dba0d149f388e5547a36c082e1346c44523)) by Marc Jovaní González
- **api**: allow multiple origins on CORS ([77eab11](https://github.com/drackp2m/playsetonline/commit/77eab11fa158f0fad081233ed16b72c80ca1627a)) by Marc Jovaní González
- **api**: create generateGameCards UseCase ([680731a](https://github.com/drackp2m/playsetonline/commit/680731af7ba1e513a16ebfef1a994c43a96af3e6)) by Marc Jovaní González
- **api**: create register usecase ([c6c2559](https://github.com/drackp2m/playsetonline/commit/c6c25591649f9a6ce687d61ba2fa5fd0837989c8)) by Marc Jovaní González
- **api**: create userRepository ([fecdeba](https://github.com/drackp2m/playsetonline/commit/fecdebaac6d1378616253e0aad4c2939cab6f65a)) by Marc Jovaní González
- **api**: improve errors messages ([19902ab](https://github.com/drackp2m/playsetonline/commit/19902abaca06ea2b20a0ac322967ac82bee26dbc)) by Marc Jovaní González
- **api**: mikro orm update with repository aliases ([4778966](https://github.com/drackp2m/playsetonline/commit/4778966a30af0251c2629bc50cd3cc4b1e549f85)) by Marc Jovaní González
- **api**: skip props on cookies ([d50016d](https://github.com/drackp2m/playsetonline/commit/d50016df41426da536746d766c4b6f52c857017d)) by Marc Jovaní González
- **api**: try to disable graphQL csrfPrevention ([505f4e7](https://github.com/drackp2m/playsetonline/commit/505f4e73ddfa306424a19870f3ac8a5f4a99b031)) by Marc Jovaní González
- **api**: try to run specs with swc ([d99c5ce](https://github.com/drackp2m/playsetonline/commit/d99c5ce8319a319e8a4c00d9124709a551dfffcf)) by Marc Jovaní González
- **api**: update environment to call to api-set-online.onrender.com ([74b55b7](https://github.com/drackp2m/playsetonline/commit/74b55b7e9be48dd318073b37969f6cd01e1eadbd)) by Marc Jovaní González
- **api**: use check-refresh-token use-case on refresh-session use-case ([b86a861](https://github.com/drackp2m/playsetonline/commit/b86a86197ffd277736428f4637ce2d32fca07494)) by Marc Jovaní González
- **app,api-interfaces**: add register form ([8d1b056](https://github.com/drackp2m/playsetonline/commit/8d1b056bb965e9b3eab683827cf7a7a1dde42b37)) by Marc Jovaní González
- **app,api**: add join game mutation and improve graphql errors ([b29d257](https://github.com/drackp2m/playsetonline/commit/b29d257344b346df1c38ec248a39644f6a8d9dc7)) by Marc Jovaní González
- **app,api**: create joinGame use case, and improve entityRepository ([d6898a8](https://github.com/drackp2m/playsetonline/commit/d6898a821f3db749cadf7fda2bc096f829e94bcc)) by Marc Jovaní González
- **app,api**: improve auth app interceptor ([1d3438d](https://github.com/drackp2m/playsetonline/commit/1d3438dd25aaf7a4b30e37d0e72a8da9f94148a8)) by Marc Jovaní González
- **app**: `highlightSet` increases `Wrong sets` by 3 ([f5dac08](https://github.com/drackp2m/playsetonline/commit/f5dac0880b72823cb395e756febbde01a2e69cfb)) by Marc Jovaní González
- **app**: add border radius example page ([ce93dc9](https://github.com/drackp2m/playsetonline/commit/ce93dc9cadec1204e3c4fd4725e94a78b1b5aa42)) by Marc Jovaní González
- **app**: add box shadow sample page ([f73792f](https://github.com/drackp2m/playsetonline/commit/f73792f069f3d4bc4bab94695e8ac588c866c0c4)) by Marc Jovaní González
- **app**: add card component ([9cf0196](https://github.com/drackp2m/playsetonline/commit/9cf01960c9026e196e9fcfa329d9ec267b5a1390)) by Marc Jovaní González
- **app**: add card demo page with nice result!! ([51e44cb](https://github.com/drackp2m/playsetonline/commit/51e44cb0ab37b047433ba924b214b25ff3d20a9b)) by Marc Jovaní González
- **app**: add colors example page ([8ce8d77](https://github.com/drackp2m/playsetonline/commit/8ce8d77ea66de3be12acc8a99cf6344c97523bde)) by Marc Jovaní González
- **app**: add examples for all typographies ([b09d8ba](https://github.com/drackp2m/playsetonline/commit/b09d8badc2d5809e1d30bb5649b51a631d15f3f5)) by Marc Jovaní González
- **app**: add favicon ([3090ffa](https://github.com/drackp2m/playsetonline/commit/3090ffad5f34a6d46e80df5853df47fb00d9b348)) by Marc Jovaní González
- **app**: add game page ([cc6e3c5](https://github.com/drackp2m/playsetonline/commit/cc6e3c52fe1bf689aca925724a069ea5576f3b9f)) by Marc Jovaní González
- **app**: add get user info error type ([68919f0](https://github.com/drackp2m/playsetonline/commit/68919f0c0605560747ca67ae129c5440b6dcfb9c)) by Marc Jovaní González
- **app**: add glitch effect component for svg images ([998b4b3](https://github.com/drackp2m/playsetonline/commit/998b4b3bb6f23287db42df470c9cbbd3d48c7c75)) by Marc Jovaní González
- **app**: add other feature but with scope ([5505451](https://github.com/drackp2m/playsetonline/commit/550545101b65b0f19cfede61e3e819fbd44331a9)) by Marc Jovaní González
- **app**: add padding to game in full-screen ([c2b6d35](https://github.com/drackp2m/playsetonline/commit/c2b6d354e89ac87a59297f901e272af5143b5988)) by Marc Jovaní González
- **app**: add set icons ([1fb7c6d](https://github.com/drackp2m/playsetonline/commit/1fb7c6d5dbf4b07df37653b6d476c225f54fc23e)) by Marc Jovaní González
- **app**: add signal store and migrate to nx 18.1.2 ([2d73df5](https://github.com/drackp2m/playsetonline/commit/2d73df5f18eb235736af0ed7675a2367e3537683)) by Marc Jovaní González
- **app**: add sonar lint and fix some eslint issues ([3676496](https://github.com/drackp2m/playsetonline/commit/3676496bf6fde4bc8e87b17816aa565f5d280f3d)) by Marc Jovaní González
- **app**: add typographies url and menu ([756bb03](https://github.com/drackp2m/playsetonline/commit/756bb0304ac25ac3adb9403e86ddc22344c947c1)) by Marc Jovaní González
- **app**: all routes with lazzy loading ([6e87f41](https://github.com/drackp2m/playsetonline/commit/6e87f41f2cc5aeb1d2efd06a872b5f7e972137fc)) by Marc Jovaní González
- **app**: convert variables to signals ([ef2fe1b](https://github.com/drackp2m/playsetonline/commit/ef2fe1b9ae50d73cab3a86b75aa2d21643d0ef7f)) by Marc Jovaní González
- **app**: create apiSDK ([d84264b](https://github.com/drackp2m/playsetonline/commit/d84264bd0fc8020a85a725093e2f737c9a1533ef)) by Marc Jovaní González
- **app**: create basic authorization interceptor ([ed94941](https://github.com/drackp2m/playsetonline/commit/ed94941902e5516dd8bdf045b2219619d1df30af)) by Marc Jovaní González
- **app**: enable to put cards rotated ([2ae3953](https://github.com/drackp2m/playsetonline/commit/2ae39534bd76ca3c97935efb46b0b5ba7089953e)) by Marc Jovaní González
- **app**: finish flitch effect (fails on svg with gradients) ([47bd356](https://github.com/drackp2m/playsetonline/commit/47bd3561b03bf3727ffc080113da02d02ee0e977)) by Marc Jovaní González
- **app**: gameOnlineStore as class, add semantic-release ([77b3133](https://github.com/drackp2m/playsetonline/commit/77b313394b60c672db798a8c5f763dd754aa0de2)) by Marc Jovaní González
- **app**: implements sendPing mutation on AppComponent (need init subscription) ([5191467](https://github.com/drackp2m/playsetonline/commit/51914677591f6c9e39d9c684954c07237f096ba0)) by Marc Jovaní González
- **app**: improve game experience ([9f14a2c](https://github.com/drackp2m/playsetonline/commit/9f14a2c2d994a11667383a8ce22a014ddb5c8916)) by Marc Jovaní González
- **app**: improve the HTTP interceptor to handle both GraphQL and httpError errors. ([a4188bb](https://github.com/drackp2m/playsetonline/commit/a4188bbaa8deda00df347e15203e1a0775480700)) by Marc Jovaní González
- **app**: move some game logic to store and use eslint flat config ([0f068f9](https://github.com/drackp2m/playsetonline/commit/0f068f93aedae3f17b3bef3fcfbe9728c8ddff1e)) by Marc Jovaní González
- **app**: now, confetti have game shapes ([db5cb7f](https://github.com/drackp2m/playsetonline/commit/db5cb7feb56b0213d81afc90753e8048a37c3b08)) by Marc Jovaní González
- **app**: pipe to get asset urls absolute ([abdf45b](https://github.com/drackp2m/playsetonline/commit/abdf45b8772b4b09f54008851f4650081c44d602)) by Marc Jovaní González
- **app**: prepare wpa with translucid status bar for iOS and add SET particles ([75b80e9](https://github.com/drackp2m/playsetonline/commit/75b80e9c8ec08c725a113cea225a2fe0e25083de)) by Marc Jovaní González
- **app**: register and login height ([762a403](https://github.com/drackp2m/playsetonline/commit/762a403dc8735b03e5d8254917f981b0add1e983)) by Marc Jovaní González
- **app**: remove start slash of [@font-face](https://github.com/font-face) css property ([7952c7e](https://github.com/drackp2m/playsetonline/commit/7952c7e60daca42918f688f5f34c7de986c8f44b)) by Marc Jovaní González
- **app**: remove url pipe and update manifest ([55d02dd](https://github.com/drackp2m/playsetonline/commit/55d02dd939fe7e4b701e60d47e648046ed3e4f2b)) by Marc Jovaní González
- **app**: restored ability to add cards to the board ([a3f7824](https://github.com/drackp2m/playsetonline/commit/a3f7824612f1cee34c2a0f9f6d2840665052ee66)) by Marc Jovaní González
- **app**: save current game to browser indexedDB ([a749da5](https://github.com/drackp2m/playsetonline/commit/a749da59e24706a3eadd6285761960818c9f6068)) by Marc Jovaní González
- **app**: set all graphql query types to fetch using network-only policy ([b762b7f](https://github.com/drackp2m/playsetonline/commit/b762b7f95aa8c1b2c9ff74fc8cc85f9d04434c38)) by Marc Jovaní González
- **app**: start game normally by default, click on `Wrong sets` cheat game ([cba62df](https://github.com/drackp2m/playsetonline/commit/cba62df8ba5d1c9fbce0ff551b5acd6e3eac4b98)) by Marc Jovaní González
- **app**: try to add service-worker to Angular project ([b673228](https://github.com/drackp2m/playsetonline/commit/b673228f8e9558b56f027cfe90fdd183bfc0437b)) by Marc Jovaní González
- **app**: try to load font-face from base project path ([6621a92](https://github.com/drackp2m/playsetonline/commit/6621a92860f7d744ef3faa4f50fcc1b6c49581d5)) by Marc Jovaní González
- **app**: use hash on Angular routes ([a70224f](https://github.com/drackp2m/playsetonline/commit/a70224f68aaab702e411c89f52f8c1a3fb1f1b53)) by Marc Jovaní González
- **app**: use relative route for font-face ([7f51edb](https://github.com/drackp2m/playsetonline/commit/7f51edb9ac7d8eb3894f25b1a9d38b36998ba1f3)) by Marc Jovaní González
- **app**: use zoneless, make some routes lazzy ([27cb8b6](https://github.com/drackp2m/playsetonline/commit/27cb8b6498ebce9e6f1e9abd68f3547883ebabc6)) by Marc Jovaní González
- deplois from dev!! ([17a7012](https://github.com/drackp2m/playsetonline/commit/17a7012e2faab204b74d8030c99969de6337d96e)) by Marc Jovaní González
- enable play game with cheats but end with error =S ([3d0e103](https://github.com/drackp2m/playsetonline/commit/3d0e103dfd13b546a6c392480bdcd0297536ffff)) by Marc Jovaní González
- improve AuthInterceptor ([51571d0](https://github.com/drackp2m/playsetonline/commit/51571d0007656737b18dfed692c7aa9c17a5f4a8)) by Marc Jovaní González
- improve manifest ([0d2116c](https://github.com/drackp2m/playsetonline/commit/0d2116c1ce3a5d3cb03d19cc7385a0c57e7d1238)) by Marc Jovaní González
- improve userRepository ([63cc547](https://github.com/drackp2m/playsetonline/commit/63cc5478a004e03cf998c4e34b6b734f2c9a1978)) by Marc Jovaní González
- prepare project to production ([9c7565d](https://github.com/drackp2m/playsetonline/commit/9c7565d0daceb60358f96c54749f9d721f1f878a)) by Marc Jovaní González
- update texts ([e68ac04](https://github.com/drackp2m/playsetonline/commit/e68ac040bb6aa0a803f4e141dd88b039bc74ce36)) by Marc Jovaní González

### 🎨 Styles

- add fonts to test ([7ff138a](https://github.com/drackp2m/playsetonline/commit/7ff138adbfd9d8413ce9101283e479222bf4a54e)) by Marc Jovaní González
- **api,app**: this change is of styles and it is nice ([65ca891](https://github.com/drackp2m/playsetonline/commit/65ca891e3f65f3706dc7e14af90c22bd33586ddc)) by Marc Jovaní González
- **app**: add scss abstracts and utilities ([4589754](https://github.com/drackp2m/playsetonline/commit/458975453acadde23661a2f9502517e5b14da20f)) by Marc Jovaní González
- **app**: add space to version number, fix elements gaps ([f8ffeb8](https://github.com/drackp2m/playsetonline/commit/f8ffeb8e34bdc1444d2167f4dea577bee5882d55)) by Marc Jovaní González
- **app**: change theme-color meta attr (green color) to enable it on Safari ([beddebe](https://github.com/drackp2m/playsetonline/commit/beddebeae8ce4703859471347b973f265a62560d)) by Marc Jovaní González
- **app**: complete rounded, colors and visibility ([099fe5d](https://github.com/drackp2m/playsetonline/commit/099fe5dc78050855a633ea2b01fac562fdd815ea)) by Marc Jovaní González
- **app**: create show / hide rules with media query ([702fa5a](https://github.com/drackp2m/playsetonline/commit/702fa5a932bfc977dd6ffce4389e4d11356b0b67)) by Marc Jovaní González
- **app**: generate variables and classes of font sizes ([67fdbd2](https://github.com/drackp2m/playsetonline/commit/67fdbd2e76d44f1f3b1585a3f9106d641ce4f77b)) by Marc Jovaní González
- **app**: improve buttons and links hover effects, glitch on mobile now works ([60af6b9](https://github.com/drackp2m/playsetonline/commit/60af6b9b776c3b4540d582ccfec0c5700b934eea)) by Marc Jovaní González
- **app**: improve general styles ([b6cb883](https://github.com/drackp2m/playsetonline/commit/b6cb883abe7fbb4334367cf6b396c0d11369a9c6)) by Marc Jovaní González
- **app**: improve scss functions for get rules ([480f26f](https://github.com/drackp2m/playsetonline/commit/480f26f18adb1d0a4a874ad037aef628aaabca28)) by Marc Jovaní González
- **app**: refactor spacing ([a2a4fe9](https://github.com/drackp2m/playsetonline/commit/a2a4fe9714f8f491772b599922ab8a409d159d0a)) by Marc Jovaní González
- **app**: remove initial slash of scss src ([de5a59c](https://github.com/drackp2m/playsetonline/commit/de5a59c32f476fb97f4797a52641f80314b8bdf8)) by Marc Jovaní González
- **app**: remove start slash on font assets ([b2ff660](https://github.com/drackp2m/playsetonline/commit/b2ff66082465b58b6a4aaadea36d3ccd11a95b5a)) by Marc Jovaní González
- **app**: set height as 100vh to html and body elements ([7d14799](https://github.com/drackp2m/playsetonline/commit/7d147998eca3fb1434e0a405c50cc62e9364a4ff)) by Marc Jovaní González
- **app**: try to load recursive-font with initial slash and using scss variable ([d21bc73](https://github.com/drackp2m/playsetonline/commit/d21bc73284c4ed1844be8e02168394a2e2d1aefb)) by Marc Jovaní González
- back to relative assets load ([3f368aa](https://github.com/drackp2m/playsetonline/commit/3f368aaec8c1f1dc16cbf8f2916b5ca1d082c837)) by Marc Jovaní González
- try to fix load scss urls ([788ae48](https://github.com/drackp2m/playsetonline/commit/788ae48c8d7f7be464dde39b920b6510683607b6)) by Marc Jovaní González
- try to load styles relatively ([32a7a8c](https://github.com/drackp2m/playsetonline/commit/32a7a8cb47cdf29db97976714285f7a9e0eb1740)) by Marc Jovaní González

### 🧪 Tests

- **api-e2e**: try to separate template ([1446b29](https://github.com/drackp2m/playsetonline/commit/1446b29b8879d95da4653caecd6f5842aec8ad04)) by Marc Jovaní González
- **api,app**: add currentUserStore and Apollo to AppComponent spec ([b21d817](https://github.com/drackp2m/playsetonline/commit/b21d8171715cabe62c26f3382df33ea50040992f)) by Marc Jovaní González
- **api**: add authController spec ([e3e44c6](https://github.com/drackp2m/playsetonline/commit/e3e44c65f5a600368b2e566961599969ec2dde9f)) by Marc Jovaní González
- **api**: add CheckPassword UseCase Spec ([3002955](https://github.com/drackp2m/playsetonline/commit/3002955f44c9716c0c5333406d615bd00c35cb55)) by Marc Jovaní González
- **api**: add create-game use-case spec ([0b54144](https://github.com/drackp2m/playsetonline/commit/0b54144ffc986ecb23af789a00114b82e67c9e90)) by Marc Jovaní González
- **api**: add create-game use-case spec ([62d47f7](https://github.com/drackp2m/playsetonline/commit/62d47f703cabbf3d4bc1dcddd1b95c50dda96aa6)) by Marc Jovaní González
- **api**: add GenerateNowDate UseCase Spec ([fcb021e](https://github.com/drackp2m/playsetonline/commit/fcb021e5fa678d4ac3979210d5eb4b932e080cd9)) by Marc Jovaní González
- **api**: add generateUuid UseCase Spec ([1890bed](https://github.com/drackp2m/playsetonline/commit/1890bed13a46eae16cad8d3cb711627af72cc9f3)) by Marc Jovaní González
- **api**: add HashPassword UseCase Spec ([ce0a27e](https://github.com/drackp2m/playsetonline/commit/ce0a27eaaf66fa6219d4df2fad2ab3d87b64fdef)) by Marc Jovaní González
- **api**: add integration tests ([c101ecb](https://github.com/drackp2m/playsetonline/commit/c101ecb68396589617ac9000be52ea447becc09e)) by Marc Jovaní González
- **api**: add modifiedAt and expiresOn tests to DateFaker ([581fdd9](https://github.com/drackp2m/playsetonline/commit/581fdd9c926e8a5e839c28ef2b9bf2391840ba35)) by Marc Jovaní González
- **api**: add semaphore spec ([86ed5a3](https://github.com/drackp2m/playsetonline/commit/86ed5a32a59d68a2db16edd02e7308e883338ed9)) by Marc Jovaní González
- **api**: add spec for BadRequestException ([9e6ed1b](https://github.com/drackp2m/playsetonline/commit/9e6ed1b1ab4b17099a194a55576f20d75b187159)) by Marc Jovaní González
- **api**: add spec to clean-jwt-access-token-cookie use-case ([3eb6df1](https://github.com/drackp2m/playsetonline/commit/3eb6df179a0e9e57e720cb05583fc4adc1f1d49e)) by Marc Jovaní González
- **api**: add spec to clean-jwt-access-token-cookie use-case ([c6d666a](https://github.com/drackp2m/playsetonline/commit/c6d666a3461d98e2b347117d57f9b27954533b7e)) by Marc Jovaní González
- **api**: add specs for BasicFaker, renamed some tests ([795d55c](https://github.com/drackp2m/playsetonline/commit/795d55c5cae64d90b3fbe67973d31ee533e6c929)) by Marc Jovaní González
- **api**: add specs for CacheManagerService ([d0dc508](https://github.com/drackp2m/playsetonline/commit/d0dc508e9224d620fbe4faea595cf82402508a68)) by Marc Jovaní González
- **api**: add specs for SemaphoreManagerService ([a53046a](https://github.com/drackp2m/playsetonline/commit/a53046a42de4f1ea7f765bccf7b377364e2d4a66)) by Marc Jovaní González
- **api**: add tests for all exceptions ([7bb6baf](https://github.com/drackp2m/playsetonline/commit/7bb6baf65456abcac1d4cb285a30453fbf11cf30)) by Marc Jovaní González
- **api**: add usecases for bcryptjs methods ([9b4101d](https://github.com/drackp2m/playsetonline/commit/9b4101daa346bb3c05fd37eeb8a1a00ed251b4fa)) by Marc Jovaní González
- **api**: create access and refresh token usecases tests ([5df1690](https://github.com/drackp2m/playsetonline/commit/5df1690e8a74c267f373d9895c95e7a0b1abde25)) by Marc Jovaní González
- **api**: create DateFaker Spec (only should defined and createdAt) ([c04aa76](https://github.com/drackp2m/playsetonline/commit/c04aa76ae85c02ac3e2c807336b49bac0e7aac05)) by Marc Jovaní González
- **api**: create list-game use-case spec, refactor factories ([e4a2796](https://github.com/drackp2m/playsetonline/commit/e4a279654cc6f0305d530205c560324053aa3f06)) by Marc Jovaní González
- **api**: create logout use-case spec ([c8fa27f](https://github.com/drackp2m/playsetonline/commit/c8fa27f3812d14a043438c86a3e3ea488626f2a9)) by Marc Jovaní González
- **api**: create nodeCacheService specs ([8db451f](https://github.com/drackp2m/playsetonline/commit/8db451f5faf1c4c98dfc414d681a3f13c38d1e56)) by Marc Jovaní González
- **api**: create refresh session useCase ([74e9fdb](https://github.com/drackp2m/playsetonline/commit/74e9fdba71609ce1ef6f64dd766442c881274499)) by Marc Jovaní González
- **api**: create register use case ([e54934c](https://github.com/drackp2m/playsetonline/commit/e54934cfd11dc1ed0a361a2eed0d28b694f8f420)) by Marc Jovaní González
- **api**: create set-jwt-token use case ([92dd861](https://github.com/drackp2m/playsetonline/commit/92dd8613c7d781ae5a585e3f635cd049e7cfcaf9)) by Marc Jovaní González
- **api**: editable-date specs ([ff91ab2](https://github.com/drackp2m/playsetonline/commit/ff91ab2e99979262798f88ad0c46ac6fde57b926)) by Marc Jovaní González
- **api**: enable and fix all api tests :) ([e472734](https://github.com/drackp2m/playsetonline/commit/e4727342bde3278494ea266d08f918069d5b2317)) by Marc Jovaní González
- **api**: finish join-game use-case specs ([bf1a70b](https://github.com/drackp2m/playsetonline/commit/bf1a70b7b78867c9d809c230556e09bfc84aec11)) by Marc Jovaní González
- **api**: finish join-game use-case specs ([19924d1](https://github.com/drackp2m/playsetonline/commit/19924d139e60ace8760aadef62af592f6493233b)) by Marc Jovaní González
- **api**: finish tests for extract-cookies-from-raw-hehaders use-case ([3186353](https://github.com/drackp2m/playsetonline/commit/3186353cc5db27724ab748d69d6d51c4ad8ef84b)) by Marc Jovaní González
- **api**: fix AuthServiceSpec ([bd50cf6](https://github.com/drackp2m/playsetonline/commit/bd50cf65235ea015e717c392f3376f3e781b9c96)) by Marc Jovaní González
- **api**: fix login test ([b40121d](https://github.com/drackp2m/playsetonline/commit/b40121daf6227cb4f40af718a357b8484baf02dd)) by Marc Jovaní González
- **api**: fix tests and faker deprecations ([acd073d](https://github.com/drackp2m/playsetonline/commit/acd073dd72532e38106176fc28ba23712862e5b4)) by Marc Jovaní González
- **api**: fix tests with ConfigurationService dep, and salt with length 11 ([6ecf03d](https://github.com/drackp2m/playsetonline/commit/6ecf03d02c54bb358b6d874caf43c3c6a6793aa6)) by Marc Jovaní González
- **api**: fix tests! ([a141524](https://github.com/drackp2m/playsetonline/commit/a141524fa57c3140cf833bc674c3bb864b9ca958)) by Marc Jovaní González
- **api**: fixed tests related with config and jwt tokens ([e1a6c8d](https://github.com/drackp2m/playsetonline/commit/e1a6c8d59788fa8716be99819357c49b57e45037)) by Marc Jovaní González
- **api**: improve appService spec ([d657043](https://github.com/drackp2m/playsetonline/commit/d65704345c0465993a600ab1fa54874caae8f12e)) by Marc Jovaní González
- **api**: improve editable-data spec to user util variable instead new instance ([f081953](https://github.com/drackp2m/playsetonline/commit/f0819530e861066b0cdd4ff3664470c1f5d22441)) by Marc Jovaní González
- **api**: improve integration tests (test-setup and global-setups) ([c7a7280](https://github.com/drackp2m/playsetonline/commit/c7a7280c008da8b23767683a5bd3409a48ca45f8)) by Marc Jovaní González
- **api**: improve login use case specs ([cd2960f](https://github.com/drackp2m/playsetonline/commit/cd2960f8f93595d1705efa947f4d330b88032c33)) by Marc Jovaní González
- **api**: init MikroORM manually in join-game use-case to avoid db connection ([63b332a](https://github.com/drackp2m/playsetonline/commit/63b332affd0e10a18c939b8510e54997d0489a01)) by Marc Jovaní González
- **api**: mock tests with jest-mock-extended ([27b8830](https://github.com/drackp2m/playsetonline/commit/27b8830434445d009f043ad80bb213768c698e80)) by Marc Jovaní González
- **api**: remove MikroORM init on create-game use-case spec ([df4ac82](https://github.com/drackp2m/playsetonline/commit/df4ac82df00a887707a93e5b19eb8a56f3ada9ce)) by Marc Jovaní González
- **api**: simplify jwt-strategy-service spec ([9cf2221](https://github.com/drackp2m/playsetonline/commit/9cf2221c113c0c49ea061927fb0e9f6805d56ec3)) by Marc Jovaní González
- **api**: try to add integration tests, with global jest setup for mikro-orm migrations ([e020f55](https://github.com/drackp2m/playsetonline/commit/e020f55358e7d518c36df704358ca73d56ea8d7f)) by Marc Jovaní González
- **app**: fix app test ([a220cfe](https://github.com/drackp2m/playsetonline/commit/a220cfe7528f46e45ceef8c1b93d68e944893024)) by Marc Jovaní González
- **app**: import currentUserStore to appComponent spec ([c1dd437](https://github.com/drackp2m/playsetonline/commit/c1dd437b222309c0dbb3ea74659c788a63073f05)) by Marc Jovaní González
- **app**: remove title test ([553a85f](https://github.com/drackp2m/playsetonline/commit/553a85f1b1409fc174cb99599810c14557487e90)) by Marc Jovaní González
- **app**: skip app test ([00f2588](https://github.com/drackp2m/playsetonline/commit/00f2588e787c1030c3df4d9126c3705ddfd459cf)) by Marc Jovaní González
- **app**: skip AppComponent spec ([e3139fa](https://github.com/drackp2m/playsetonline/commit/e3139fa9fca40249d9fcc3671792e380fc6bc66e)) by Marc Jovaní González
- enable axios to trust self-signed certificate ([5cc3112](https://github.com/drackp2m/playsetonline/commit/5cc3112cc9609e31fbe038ea213f6236234e5589)) by Marc Jovaní González
- fix /api/app/hello test ([b31d6c3](https://github.com/drackp2m/playsetonline/commit/b31d6c3f4611b50b3d815f5eac42b0ce1fcb1e6d)) by Marc Jovaní González
- fix tests with mock ([4309690](https://github.com/drackp2m/playsetonline/commit/43096904142c98e03bc0cc9dee4c6ae4a2524917)) by Marc Jovaní González

### ♻️ Code Refactoring

- add tslint to use member-ordering rule ([7f00efb](https://github.com/drackp2m/playsetonline/commit/7f00efb0707df194b2ab8d9199e425fc8ee3ed0e)) by Marc Jovaní González
- **api-definitions**: rename lin interfaces to definitions ([0de019c](https://github.com/drackp2m/playsetonline/commit/0de019c7caad6db3ef3e28b6cf6e5650af3cf7e6)) by Marc Jovaní González
- **api-e2e**: try to separate template ([712bf6c](https://github.com/drackp2m/playsetonline/commit/712bf6c27813b325ecd2b1e812343f029b204e65)) by Marc Jovaní González
- **api-sdk,app-e2e,app,api,api-definitions,api-e2e**: use clean nx installation ([2e54ac2](https://github.com/drackp2m/playsetonline/commit/2e54ac233e6d547104b3e2ff4323a9a4e4066e5e)) by Marc Jovaní González
- **api,api-e2e,app,app-e2e,api-definitions**: lint json and gql files ([1d7343e](https://github.com/drackp2m/playsetonline/commit/1d7343e3e855aff10a8d1c9b0a24049d04becb0e)) by Marc Jovaní González
- **api,api-e2e**: set new nx project (api) ([1ba9a83](https://github.com/drackp2m/playsetonline/commit/1ba9a8368cc90fb6286c2c016ebf9e36dfe07947)) by Marc Jovaní González
- **api,app**: add more rules on tsconfig to improve robustness (and fix code) ([6a5dab3](https://github.com/drackp2m/playsetonline/commit/6a5dab31ea607c27c987de4effb5152f43508737)) by Marc Jovaní González
- **api,app**: improve linters and use line length of 100 ([091f73f](https://github.com/drackp2m/playsetonline/commit/091f73f2b46ce95e920e6b209b6583cddde72b3c)) by Marc Jovaní González
- **api,app**: improve ws ([be81d1a](https://github.com/drackp2m/playsetonline/commit/be81d1ae1e7c9ff0c2f1e2ae20885c75e0b692e5)) by Marc Jovaní González
- **api,app**: remove all Enum suffix from imports and types ([418dc3a](https://github.com/drackp2m/playsetonline/commit/418dc3a834d26ab823334b66dbc0053792efa167)) by Marc Jovaní González
- **api**: add domain on CORS error ([5cbb7f1](https://github.com/drackp2m/playsetonline/commit/5cbb7f13bb8bcd80a6f6ee028ca3571be24e7206)) by Marc Jovaní González
- **api**: add modules for complex UseCases ([f24a086](https://github.com/drackp2m/playsetonline/commit/f24a086229d01b741c9adc2fadb2f0b1d34c7391)) by Marc Jovaní González
- **api**: autoload mikro-orm entities with tsNode ([0658bc3](https://github.com/drackp2m/playsetonline/commit/0658bc3c00c78c2ebbf5b212752983d78b74dd6d)) by Marc Jovaní González
- **api**: change module dependencies ([5899727](https://github.com/drackp2m/playsetonline/commit/58997274d7823a2e67302b35a4c302ce876686b1)) by Marc Jovaní González
- **api**: create bootstrap helper ([7ce4e4a](https://github.com/drackp2m/playsetonline/commit/7ce4e4a3de52b4ac36e30eeeaf2bb9a637b5a4c6)) by Marc Jovaní González
- **api**: improve configuration validation and usage ([f909f07](https://github.com/drackp2m/playsetonline/commit/f909f07e114bd4cde2a33517fc47053b33dc8b1c)) by Marc Jovaní González
- **api**: improve tests removing awaits and including extra cheks on exceptions ([699dfe3](https://github.com/drackp2m/playsetonline/commit/699dfe38d062e9abe9734fc3c33b89192bc96ec7)) by Marc Jovaní González
- **api**: refactor all tests (and code) to operate in typescript strict mode ([3398142](https://github.com/drackp2m/playsetonline/commit/339814221506ac1ad10b55e06671c17d4dd8e93d)) by Marc Jovaní González
- **api**: remove console log ([7a5a68c](https://github.com/drackp2m/playsetonline/commit/7a5a68cf7fdfdc87f34bdd2c4183b9ad3ffec198)) by Marc Jovaní González
- **api**: remove console logs on join-game use case, fix commitizen ([5f2e8f0](https://github.com/drackp2m/playsetonline/commit/5f2e8f0f5fc6a647e1683bf3dcce27609ea14d05)) by Marc Jovaní González
- **api**: remove console.log from create-jwt-refresh-token use-case ([308cafb](https://github.com/drackp2m/playsetonline/commit/308cafbadc6369e3305df926ddb6667f3d304050)) by Marc Jovaní González
- **api**: remove index.ts files ([b786ce0](https://github.com/drackp2m/playsetonline/commit/b786ce0d53cf221af0d91ff544c9f3ae39319fb2)) by Marc Jovaní González
- **api**: rename card interface enums ([e34ace8](https://github.com/drackp2m/playsetonline/commit/e34ace84dcea15bb69023c11a73c93984ff954b7)) by Marc Jovaní González
- **api**: rename common to share, add logout endpoint ([841de65](https://github.com/drackp2m/playsetonline/commit/841de656a35d01036e014263d08ad85e64c21dc9)) by Marc Jovaní González
- **api**: transform check-access-token to check-refresh-token use-case ([5383dee](https://github.com/drackp2m/playsetonline/commit/5383dee48154533a45892703c01ae02506a84636)) by Marc Jovaní González
- **api**: transform userService to loginUsecase ([e795a22](https://github.com/drackp2m/playsetonline/commit/e795a2269dd1fe9373fef8a9e2f9054c2a1e2b54)) by Marc Jovaní González
- **api**: try to fix api tests... ([f9ad028](https://github.com/drackp2m/playsetonline/commit/f9ad02846c2c5198347d0a57d27e650a88c15113)) by Marc Jovaní González
- **api**: update env.example, remove Dockerfile database, fix multiple db script ([d49e694](https://github.com/drackp2m/playsetonline/commit/d49e694a94abad2a661f35bf0cab8eb7205aa725)) by Marc Jovaní González
- **api**: use custom ConfigurationService ([114690d](https://github.com/drackp2m/playsetonline/commit/114690d5d71f87fbd46dc7bfb52c89a1ab76fa6c)) by Marc Jovaní González
- **api**: use multiple database to same docker container ([5a35756](https://github.com/drackp2m/playsetonline/commit/5a35756bd5c9b924e7e2852a37be301d25afb3bb)) by Marc Jovaní González
- **app**: angular parser for prettier html and fix all issues ([d6ef97d](https://github.com/drackp2m/playsetonline/commit/d6ef97d33022454806e9ccca8ac5e93395b681cf)) by Marc Jovaní González
- **app**: call to login request by api endpoint ([1b6e821](https://github.com/drackp2m/playsetonline/commit/1b6e8219d30ec2711654bee0d1d7113edae952a4)) by Marc Jovaní González
- **app**: color class names ([9bebff6](https://github.com/drackp2m/playsetonline/commit/9bebff6869ebe4adadfd880260192afcfd3844f8)) by Marc Jovaní González
- **app**: create card shape component ([1c93d71](https://github.com/drackp2m/playsetonline/commit/1c93d71e198c38f057d3fb91a2e7e4a66ef67593)) by Marc Jovaní González
- **app**: css variables in singular ([7d42367](https://github.com/drackp2m/playsetonline/commit/7d4236776ca411c0189074f060de6a0f6f4f2028)) by Marc Jovaní González
- **app**: improve "home" (game) page ([e36ab14](https://github.com/drackp2m/playsetonline/commit/e36ab147631e54ef7df06721fa90f7e519f62c5b)) by Marc Jovaní González
- **app**: improve auth interceptor ([cedcc52](https://github.com/drackp2m/playsetonline/commit/cedcc52ff434cd2947b7c763fe3d0fae3487a9d0)) by Marc Jovaní González
- **app**: improve gaps on grid layouts ([9caef86](https://github.com/drackp2m/playsetonline/commit/9caef866087d5af15efb5e50e12dd2ee3634374c)) by Marc Jovaní González
- **app**: improve glitch effect ([f6290e3](https://github.com/drackp2m/playsetonline/commit/f6290e3065d772ab9b31cddb05fa192abbc2956f)) by Marc Jovaní González
- **app**: improve main layout menu ([e1f3528](https://github.com/drackp2m/playsetonline/commit/e1f35283340f955664a0276ca500424ffd5ee82a)) by Marc Jovaní González
- **app**: improve sdk ([1533670](https://github.com/drackp2m/playsetonline/commit/15336702e6f1a1908522e90dc416c4792d78d472)) by Marc Jovaní González
- **app**: improve shadows ([5ef5837](https://github.com/drackp2m/playsetonline/commit/5ef583776f451e5f0cb9f79b69f9ca1171bd0a56)) by Marc Jovaní González
- **app**: improve signals readability, remove empty scss ([a00d904](https://github.com/drackp2m/playsetonline/commit/a00d904e89873bc6d300bef7c6a998d8577fff89)) by Marc Jovaní González
- **app**: increase 0.5 line with of outlined SVGs ([52476ad](https://github.com/drackp2m/playsetonline/commit/52476ad876a73be2fefd22ec7bdd973fe9dc9f68)) by Marc Jovaní González
- **app**: remove all [ngClass], use [style.xxx] for remove methods on component ([9be53b8](https://github.com/drackp2m/playsetonline/commit/9be53b8b3f9119686d0907f47c45f1704cdd9e44)) by Marc Jovaní González
- **app**: remove all dist ([4c3dec0](https://github.com/drackp2m/playsetonline/commit/4c3dec09415f0ea9900ba2863ab608574f7f49d0)) by Marc Jovaní González
- **app**: remove initial slash on icons in game page (for confetti) ([5aec642](https://github.com/drackp2m/playsetonline/commit/5aec642803283011288b413edcbed5dec6c6e807)) by Marc Jovaní González
- **app**: remove logs and move prevent re-refresh check to auth interceptor ([dbd8a52](https://github.com/drackp2m/playsetonline/commit/dbd8a527b78c3adf70468d8d62b8ce6c39f353fa)) by Marc Jovaní González
- **app**: remove not used imports, add version to "footer" ([7aa9f6b](https://github.com/drackp2m/playsetonline/commit/7aa9f6bc9302990c5573f418a55db7e1d4485929)) by Marc Jovaní González
- **app**: remove old current user store ([63d17cc](https://github.com/drackp2m/playsetonline/commit/63d17cc7bdcdee51eae890759fab0d362121e82d)) by Marc Jovaní González
- **app**: replace set- by app- ([c654d72](https://github.com/drackp2m/playsetonline/commit/c654d72e34114008e881c02925087c87ac8b2a78)) by Marc Jovaní González
- **app**: self close some html tags ([28af23d](https://github.com/drackp2m/playsetonline/commit/28af23d4bed9166aaf361f88c4135613e3f9816f)) by Marc Jovaní González
- **app**: self-close tags, signal inputs with transformations ([d43a899](https://github.com/drackp2m/playsetonline/commit/d43a899f595e62d7b3be84a511e8c544ffd43b2a)) by Marc Jovaní González
- **app**: update all html to zoneless directives ([c1cb5af](https://github.com/drackp2m/playsetonline/commit/c1cb5af05ab2798cab9ff820fb55d60117905200)) by Marc Jovaní González
- **app**: use environment as modern Angular projects ([521c7ff](https://github.com/drackp2m/playsetonline/commit/521c7ff4141cceab51af9432f6a829937dfeb832)) by Marc Jovaní González
- **app**: use signal inputs on card shape component ([a8c369f](https://github.com/drackp2m/playsetonline/commit/a8c369fb7a277c69cbe6d3f38625602bb5e2cb5e)) by Marc Jovaní González
- back to original class names ([3ce3f87](https://github.com/drackp2m/playsetonline/commit/3ce3f872b668038e4b24c3f8ae774068a4949bef)) by Marc Jovaní González
- create method to show messages on HTML ([fe54cd1](https://github.com/drackp2m/playsetonline/commit/fe54cd165e2ddf9bd186d260e86ccab3fcaaab90)) by Marc Jovaní González
- mock with value instead class ([f749f37](https://github.com/drackp2m/playsetonline/commit/f749f374e55b5b67011e663c5b91e4efb6718b67)) by Marc Jovaní González
- remove .env files from git ([aedf2f6](https://github.com/drackp2m/playsetonline/commit/aedf2f6634fb1934d6b78411f8266c51d94f7e2d)) by Marc Jovaní González
- remove jsx and tsx references on eslint files ([4b5480e](https://github.com/drackp2m/playsetonline/commit/4b5480e146b4ad2cda18878e01fb0255946bea6a)) by Marc Jovaní González
- remove jsx and tsx references on eslint files ([c247cb5](https://github.com/drackp2m/playsetonline/commit/c247cb5007864effafede2770d5a6426463acaf8)) by Marc Jovaní González
- remove max lines and lines per function on tests ([f9d7a15](https://github.com/drackp2m/playsetonline/commit/f9d7a15840f7e6d767b4091928d0652c3ea87ed0)) by Marc Jovaní González
- try to fix (again) github actions ([686b5f9](https://github.com/drackp2m/playsetonline/commit/686b5f9edf8a01be9eb9d8cc0780d0573df76bb8)) by Marc Jovaní González
- try to put emji left ([3f0790c](https://github.com/drackp2m/playsetonline/commit/3f0790c011c4c0df4ae45cd705d66326a1efa9a3)) by Marc Jovaní González
- use loops on border radius page ([8e1ca0c](https://github.com/drackp2m/playsetonline/commit/8e1ca0c354ae40bac47d7ee92c0de85d57a26db1)) by Marc Jovaní González
- use ngFor on colors ([8f87d21](https://github.com/drackp2m/playsetonline/commit/8f87d2103bf8c54f31e4e648f700d840813a99ca)) by Marc Jovaní González
- use ngFor on typografies pages ([fb66295](https://github.com/drackp2m/playsetonline/commit/fb66295ae16e40b8deca4260caee9c73de1f8d3e)) by Marc Jovaní González

### 🐛 Bug Fixes

- add check to execute release only if deploy is success ([ae9d19c](https://github.com/drackp2m/playsetonline/commit/ae9d19cec34b413b167a6efb30b33865ac8ea2da)) by Marc Jovaní González
- add is-unique-user-prop to register user request dto ([0c57944](https://github.com/drackp2m/playsetonline/commit/0c579447fe5e728212c22880d8ec977535c418a0)) by Marc Jovaní González
- add MIKRO_ORM_CLI env key to gh-pages ([53c2e4f](https://github.com/drackp2m/playsetonline/commit/53c2e4f4dd7a25542a0762a875974a7ab13829cb)) by Marc Jovaní González
- add types for cookie-parser ([a96af87](https://github.com/drackp2m/playsetonline/commit/a96af8712fef12c8625a7688433222f2649e5a42)) by Marc Jovaní González
- **api-definitions,api-sdk**: restore libs package.json ([7a46a96](https://github.com/drackp2m/playsetonline/commit/7a46a964af3f806c3ca058a5e4aa8463db642e40)) by Marc Jovaní González
- **api,api-e2e**: add fix to restore debug ([1a4961c](https://github.com/drackp2m/playsetonline/commit/1a4961c48976366adeb8f0bb61f04b6184d218ea)) by Marc Jovaní González
- **api,app**: dynamic origin on api CORS and add withCredentials interceptor in app ([320ce1e](https://github.com/drackp2m/playsetonline/commit/320ce1ed1ea57caa893248f9daf248310ffccb7f)) by Marc Jovaní González
- **api,app**: solve more eslint warnings ([7d8ff37](https://github.com/drackp2m/playsetonline/commit/7d8ff3733ca1b4ca1ceab2b5ed5225f6802939f6)) by Marc Jovaní González
- **api**: add cookie expiration date ([983c3e8](https://github.com/drackp2m/playsetonline/commit/983c3e847a8ae8e1771164ee3435b600b85ccee8)) by Marc Jovaní González
- **api**: add cookieDomain environment variable ([42707b9](https://github.com/drackp2m/playsetonline/commit/42707b9527ea0e84fffcac35ee5b70c65759d7d1)) by Marc Jovaní González
- **api**: add Injectable decorator to LoginUsecase ([be6118b](https://github.com/drackp2m/playsetonline/commit/be6118b545ab66936862f00849d85296c8c5ba78)) by Marc Jovaní González
- **api**: add ssh key and cert dynamicaly by API_PREFIX env variable ([a777d07](https://github.com/drackp2m/playsetonline/commit/a777d0768fca478272f0a4cb453890e4613b5014)) by Marc Jovaní González
- **api**: allwo origin when undefined ([86383ed](https://github.com/drackp2m/playsetonline/commit/86383edf8cced072325cccdba689b53121f00929)) by Marc Jovaní González
- **api**: check email on registerUseCase only when request contains it ([5dbe298](https://github.com/drackp2m/playsetonline/commit/5dbe298afb8f98800105604ba1c3690a5559bd29)) by Marc Jovaní González
- **api**: correct fork mikro-orm entityManagers in entityRepositories (thx [@adlacruzes](https://github.com/adlacruzes)) ([b27e281](https://github.com/drackp2m/playsetonline/commit/b27e281637242836be8262557cc878cdce838d03)) by Marc Jovaní González
- **api**: createGame and JoinGame Spec with provider overrided on import module ([827e0ff](https://github.com/drackp2m/playsetonline/commit/827e0ff5c15dc9c44d137db4837e004296e14eae)) by Marc Jovaní González
- **api**: fix specs to use cookieDomain ([97090e5](https://github.com/drackp2m/playsetonline/commit/97090e58cb203ccc4f8b8d1c2df236d3a17a2e27)) by Marc Jovaní González
- **api**: import 'dotenv/config'; ([342dd6a](https://github.com/drackp2m/playsetonline/commit/342dd6a565d657d996e35ccab5b054ed43ef1f42)) by Marc Jovaní González
- **api**: remove async property on getData method of AppController ([3c8caa0](https://github.com/drackp2m/playsetonline/commit/3c8caa05042669e5197f1a4467d15baca23c614c)) by Marc Jovaní González
- **api**: remove port on bootstrap message when environment is production ([059bf03](https://github.com/drackp2m/playsetonline/commit/059bf0382fe4b1748a359ff65bf6a148b67e7667)) by Marc Jovaní González
- **api**: remove port on production cron ([afc6741](https://github.com/drackp2m/playsetonline/commit/afc6741bcf302a33e62e1a40d88aa8782dff587d)) by Marc Jovaní González
- **api**: restore api debug, type GetPingsOutput (still does not work) ([8c085ec](https://github.com/drackp2m/playsetonline/commit/8c085ecf07584f3a1f11241b72597737e5e5caa6)) by Marc Jovaní González
- **api**: set sameSite to 'none' ([59ad795](https://github.com/drackp2m/playsetonline/commit/59ad795d5504556396bf877a9d2671b3bc769f75)) by Marc Jovaní González
- **api**: solved type error on GameParticipantRepository ([f1e604b](https://github.com/drackp2m/playsetonline/commit/f1e604bdea8b2e81b7270038705a7bdb49c43282)) by Marc Jovaní González
- **api**: use persistAndFlush instead insert on game-participant repository ([19a7bb3](https://github.com/drackp2m/playsetonline/commit/19a7bb3a5d957bcb88959ab943fb1783f1f93930)) by Marc Jovaní González
- **app,api**: exceptions and errores ([5d9e6db](https://github.com/drackp2m/playsetonline/commit/5d9e6dba1fa242851c9afa78f50677b947408e1c)) by Marc Jovaní González
- **app**: add apple icon and load src images without initial slash ([87db30b](https://github.com/drackp2m/playsetonline/commit/87db30b827b624bde7c28c67bcf5085f2108de47)) by Marc Jovaní González
- **app**: add certs and proxy configs ([7fff4af](https://github.com/drackp2m/playsetonline/commit/7fff4af03cf6c76d47b9320a7f02a967d5f6b57c)) by Marc Jovaní González
- **app**: add manifest to src ([2f7bcaf](https://github.com/drackp2m/playsetonline/commit/2f7bcaf58ba06c25cefd2a8d81388958092a4f9d)) by Marc Jovaní González
- **app**: add mask with webkit ([4f051d6](https://github.com/drackp2m/playsetonline/commit/4f051d60fcbf680f4492dfa9c762369ad1735a10)) by Marc Jovaní González
- **app**: add maskPath to glitchSvgComponent, only apply effect on focus ([0d83bc6](https://github.com/drackp2m/playsetonline/commit/0d83bc61ea0d085ccc7e9878965cbcb5b7114f57)) by Marc Jovaní González
- **app**: add shortcut to root path in `Sets found` message on game section ([074980d](https://github.com/drackp2m/playsetonline/commit/074980dc303572ba18cc44051ed8f8f8423d1569)) by Marc Jovaní González
- **app**: allow defining card sizes in any dimension and rotation ([cf73c4a](https://github.com/drackp2m/playsetonline/commit/cf73c4a007eb6f755e396a71a160ae0a993d4707)) by Marc Jovaní González
- **app**: back to port 3000 on wss environment url ([4996ee8](https://github.com/drackp2m/playsetonline/commit/4996ee8ccf193bc428d46fc4a6e62023920f0179)) by Marc Jovaní González
- **app**: comment ping ws request to server ([10a46f5](https://github.com/drackp2m/playsetonline/commit/10a46f56abe3e096f51ccfd1bcd035c42f6b14b6)) by Marc Jovaní González
- **app**: enable debug on Angular with SSL ([e7f20bb](https://github.com/drackp2m/playsetonline/commit/e7f20bbda8ab1b6c4784edb4c2dc806f7ce406ae)) by Marc Jovaní González
- **app**: finish authInterceptor logic ([78899ab](https://github.com/drackp2m/playsetonline/commit/78899ab4442903a6ac010aca9c07fc937fe5ac51)) by Marc Jovaní González
- **app**: firefox debugger works, zone.js removed, update deps and husky hooks ([50c8212](https://github.com/drackp2m/playsetonline/commit/50c82125a6fbc65431ee91c7eebe628ed9c4458e)) by Marc Jovaní González
- **app**: fix problems with currentUserStore, migrate to new eslint config ([e6d37a4](https://github.com/drackp2m/playsetonline/commit/e6d37a4992fa0853b8450b61b82b01823dc05391)) by Marc Jovaní González
- **app**: fix shape height ([629289d](https://github.com/drackp2m/playsetonline/commit/629289d22c24f6265638c294017d3a3794cbb0dc)) by Marc Jovaní González
- **app**: highlight now works fine ([ea404b6](https://github.com/drackp2m/playsetonline/commit/ea404b6381ee3b10410f33d1c9aa6db1b86bd177)) by Marc Jovaní González
- **app**: improve hability to rotate card shape component ([3edef16](https://github.com/drackp2m/playsetonline/commit/3edef16835c562a4f3176726d46a91bb554fb960)) by Marc Jovaní González
- **app**: improve order of mixins in scss loops ([1c07bc8](https://github.com/drackp2m/playsetonline/commit/1c07bc84a31576614a8e38ce5ae84b9c17744fab)) by Marc Jovaní González
- **app**: make register and login forms responsive ([e777b7e](https://github.com/drackp2m/playsetonline/commit/e777b7ee93f60deaba6453d9600c1a134d7eccfa)) by Marc Jovaní González
- **app**: make responsive sections border-radius, shadow and spacing ([814ac00](https://github.com/drackp2m/playsetonline/commit/814ac00a8ef1e5219a13bb74a3b8fb699a75f5af)) by Marc Jovaní González
- **app**: mock LoginGQL ([075d5da](https://github.com/drackp2m/playsetonline/commit/075d5daf8352d70209ed12a78c9f80bb0c771c6e)) by Marc Jovaní González
- **app**: remove error of logout button ([a9872eb](https://github.com/drackp2m/playsetonline/commit/a9872eb48aef2e613d7632270f72fbfcacfd75ea)) by Marc Jovaní González
- **app**: remove not used injection ([e9afa79](https://github.com/drackp2m/playsetonline/commit/e9afa79f66137cdf0dbd8c805363d7afd1aec28a)) by Marc Jovaní González
- **app**: remove ultra cheats on init ([7a9a8de](https://github.com/drackp2m/playsetonline/commit/7a9a8de7cafe5fecc97cd54a21aa2e4c2aab6d3b)) by Marc Jovaní González
- **app**: replace more set- with app- :S ([20c297d](https://github.com/drackp2m/playsetonline/commit/20c297d0fce2868356a5ce32414c366cc434a803)) by Marc Jovaní González
- **app**: replace set-_ to app-_ on scss files ([a4482ea](https://github.com/drackp2m/playsetonline/commit/a4482eae9b84832f8df757287905b42f5dec67c5)) by Marc Jovaní González
- **app**: solve some bugs ([f127b6f](https://github.com/drackp2m/playsetonline/commit/f127b6fd0558a772ee54d1b39f940e7a9b39f793)) by Marc Jovaní González
- **app**: solve won component height ([a3a6740](https://github.com/drackp2m/playsetonline/commit/a3a6740cc3a399453fdd82582472f0bbb0d741fe)) by Marc Jovaní González
- **app**: solved the problem with authInterceptor making requests without info ([74ab2f6](https://github.com/drackp2m/playsetonline/commit/74ab2f61c76915a20cc1638e40b09e9381073545)) by Marc Jovaní González
- **app**: try to load typography relatively ([0844e85](https://github.com/drackp2m/playsetonline/commit/0844e8521cd3b446e911dc60d1d33d0199045544)) by Marc Jovaní González
- **app**: try to use proxy ([2ea429f](https://github.com/drackp2m/playsetonline/commit/2ea429f4b19bc00b50888b0bb037a54537c105cb)) by Marc Jovaní González
- **app**: update add card message when there are Sets on the table ([3c72b0d](https://github.com/drackp2m/playsetonline/commit/3c72b0d8f0be03d68adf1cd831f163668626e7e0)) by Marc Jovaní González
- **app**: update deps and add navigation with hash on Angular ([3859d65](https://github.com/drackp2m/playsetonline/commit/3859d654413aaa6e48fd8915f7ddf7b5d8bea574)) by Marc Jovaní González
- **app**: upgrade apple icon, add apple app capable to true ([b9c6fab](https://github.com/drackp2m/playsetonline/commit/b9c6fab86b81ebb6f456ffc270f026bac16229e0)) by Marc Jovaní González
- **app**: user api.playsetonline.com on environment ([07ca554](https://github.com/drackp2m/playsetonline/commit/07ca5549ab78dbe9387d2e429fcf80b12b352c65)) by Marc Jovaní González
- **app**: vertical cards now look good in Safari ([4c6f709](https://github.com/drackp2m/playsetonline/commit/4c6f709d40085033a636180d0b487e0c55910cd1)) by Marc Jovaní González
- **app**: wip: try to rebuild old project ([f2d4023](https://github.com/drackp2m/playsetonline/commit/f2d4023de21372c818172934e23835207bd15f02)) by Marc Jovaní González
- devcontainer docker-compose example service name ([b9837e4](https://github.com/drackp2m/playsetonline/commit/b9837e4b790e370f29a73f7a1c457788171025b5)) by Marc Jovaní González
- enable romantic-release-bot <3 ([ec9f9fe](https://github.com/drackp2m/playsetonline/commit/ec9f9fef866666e1b26d04bc6c2589b1d284ebc1)) by Marc Jovaní González
- enable romantic-release-bot <3 ([1c6a31f](https://github.com/drackp2m/playsetonline/commit/1c6a31ff13f81beeafb7ec94a8e8ce7571f0d7a1)) by Marc Jovaní González
- enable romantic-release-bot <3 ([6ab26ab](https://github.com/drackp2m/playsetonline/commit/6ab26ab3d486d22217dc082cdf2edc9301fb514f)) by Marc Jovaní González
- enable to use cert on database connection ([860e85f](https://github.com/drackp2m/playsetonline/commit/860e85f411353a54ff2784b0c1de1adb0dcfb3a8)) by Marc Jovaní González
- fix app tests and update test package command for run all tests ([22cf05c](https://github.com/drackp2m/playsetonline/commit/22cf05cc8c67d8df5f1cf97ce5eea37dc41f34f9)) by Marc Jovaní González
- fix emoji left? ([d219658](https://github.com/drackp2m/playsetonline/commit/d219658c0546072898af41060410341d60fec249)) by Marc Jovaní González
- github actions from main ([65fc8b4](https://github.com/drackp2m/playsetonline/commit/65fc8b4b5fa0d471e0f421da280e948fafebd9c0)) by Marc Jovaní González
- improve tsconfig's to run MikroOrm migrations ([a0930ce](https://github.com/drackp2m/playsetonline/commit/a0930ce2d8f3e36dc50a57e213f49591383a2838)) by Marc Jovaní González
- regenerate package-lock, improved Dockerfile, deply condition updated ([7423e75](https://github.com/drackp2m/playsetonline/commit/7423e750b8c5bea8d4503d9e565e99075091028b)) by Marc Jovaní González
- release not needs any other job ([91a6f5f](https://github.com/drackp2m/playsetonline/commit/91a6f5fdb948f9a9023e521bf94e3ab0ea6d3818)) by Marc Jovaní González
- remove release configuration from package.json, rename release file ([469df13](https://github.com/drackp2m/playsetonline/commit/469df134b79943a94e3120fa5f08cc05613c35f3)) by Marc Jovaní González
- remove release from deploy ([80bcfdf](https://github.com/drackp2m/playsetonline/commit/80bcfdf3231fc00eafb311fc8a1c0a23b0c74f6e)) by Marc Jovaní González
- remove slash from url ([5a276b1](https://github.com/drackp2m/playsetonline/commit/5a276b17048e18e178d8eb117b25e642f54a71f4)) by Marc Jovaní González
- rename docker stages ([14f4008](https://github.com/drackp2m/playsetonline/commit/14f40087feee0430179280654903c9dbd2b4e639)) by Marc Jovaní González
- rename docker stages ([424ea30](https://github.com/drackp2m/playsetonline/commit/424ea30350c7e77545fc66f496a3c8f4839eda88)) by Marc Jovaní González
- rename workflows and execute release after deploy finish ([b3c4875](https://github.com/drackp2m/playsetonline/commit/b3c48754ddabd4b844bdfb905dcd4de213c40f6e)) by Marc Jovaní González
- try to fix release on ci ([4dbbe44](https://github.com/drackp2m/playsetonline/commit/4dbbe44644c1216a0566144d0e5ac89a7d8dfa87)) by Marc Jovaní González
- update package-lock ([b0a6aa5](https://github.com/drackp2m/playsetonline/commit/b0a6aa56b387ea36c3ce79853452a6a35e3c9411)) by Marc Jovaní González
- update yarn.lock ([77d4748](https://github.com/drackp2m/playsetonline/commit/77d474820390d57dcbd9380e240579c6125646a2)) by Marc Jovaní González

### 📚 Documentation

- update README ([be42334](https://github.com/drackp2m/playsetonline/commit/be42334ef4b9c7695d2929fd4f686a15d1994126)) by Marc Jovaní González

### 💻 Continuous Integration

- add cache with yarn ([09d0f1d](https://github.com/drackp2m/playsetonline/commit/09d0f1d426a94a3c0ecf704eb702e644d7cb2f5f)) by Marc Jovaní González
- add deps again and fix typography asset load ([a46df2f](https://github.com/drackp2m/playsetonline/commit/a46df2f9a8f8c32ef4745dbae3eebb34e912572f)) by Marc Jovaní González
- add permissions and pages setup ([cf59d6b](https://github.com/drackp2m/playsetonline/commit/cf59d6b95052334eaec9a0aa2c059ce4b133926a)) by Marc Jovaní González
- add quotes (again) ([b848d2a](https://github.com/drackp2m/playsetonline/commit/b848d2a1b2e6c800b0836e782d30607cb0b6ec9d)) by Marc Jovaní González
- add quotes to build url ([84f1c63](https://github.com/drackp2m/playsetonline/commit/84f1c6396815d9e38d0bd643245624c3e1f29dd2)) by Marc Jovaní González
- add semantic release config file ([33c45e4](https://github.com/drackp2m/playsetonline/commit/33c45e4fc51332a26896011b0ffded87d02faebe)) by Marc Jovaní González
- add slash at end T_T ([1ba4725](https://github.com/drackp2m/playsetonline/commit/1ba4725f1747cf36945327bcd263ad37110944ad)) by Marc Jovaní González
- add tests to ci ([f45945b](https://github.com/drackp2m/playsetonline/commit/f45945bab52d59a306131192f0240c650a50558e)) by Marc Jovaní González
- **app**: add /browser to build upload artifact ([a2827fd](https://github.com/drackp2m/playsetonline/commit/a2827fdb6f5b7b0c7000403466acd469e1dd23f3)) by Marc Jovaní González
- **app**: build using yarn ([bd78515](https://github.com/drackp2m/playsetonline/commit/bd785158d5d9da8337a9275343e8ea09d54de0f5)) by Marc Jovaní González
- **app**: try to run nx from node_modules ([5cb51cb](https://github.com/drackp2m/playsetonline/commit/5cb51cb289d4fb99382011805fb54144ebace56f)) by Marc Jovaní González
- **app**: update yarn lock ([32e1f9b](https://github.com/drackp2m/playsetonline/commit/32e1f9b3c01b355fae48ef9b0dd909685bd87b00)) by Marc Jovaní González
- change base href of app build ([c3c20f8](https://github.com/drackp2m/playsetonline/commit/c3c20f8b80a8b7627622ab46e8ad7f42c6244fa5)) by Marc Jovaní González
- change trigger to merge on main branch ([94a324b](https://github.com/drackp2m/playsetonline/commit/94a324b5cd33d20a138f1c5e343db22d521fe6a0)) by Marc Jovaní González
- check semantic-release notes on github ([d698bfe](https://github.com/drackp2m/playsetonline/commit/d698bfec0b835d374992ef69d80fc6b2b4b6afc7)) by Marc Jovaní González
- fix github pages commands ([873552c](https://github.com/drackp2m/playsetonline/commit/873552c397f66fdc5291a2037aac4ffdb56b6abb)) by Marc Jovaní González
- fix step name =) ([dfdd2df](https://github.com/drackp2m/playsetonline/commit/dfdd2dfa772a3f6eb1fb95a74f4ac22b94dc0a04)) by Marc Jovaní González
- improve deploy workflow ([c8de193](https://github.com/drackp2m/playsetonline/commit/c8de193d22f74300b20fe532280932f019c3ee6b)) by Marc Jovaní González
- remove deps and add install to other steps ([83e6b44](https://github.com/drackp2m/playsetonline/commit/83e6b44f8839428abaa85a060a4e120d713bed2d)) by Marc Jovaní González
- remove deps on deploy (again) ([5dc9c9e](https://github.com/drackp2m/playsetonline/commit/5dc9c9e0fb87fa986826d1e0ab4f23c3eaa2efaf)) by Marc Jovaní González
- test github actions ([841804e](https://github.com/drackp2m/playsetonline/commit/841804ea9dcfd72922bd918a75e366d6e7b6d1d8)) by Marc Jovaní González
- try to fix ci ([3a5d180](https://github.com/drackp2m/playsetonline/commit/3a5d1802e137cabe010df81a3df3bbb4729ab741)) by Marc Jovaní González
- try to lauch deploy on push to main ([5b2151f](https://github.com/drackp2m/playsetonline/commit/5b2151fcb2badf928c877dca329b8f7e860acb36)) by Marc Jovaní González
- try to use base_url ([176fb2b](https://github.com/drackp2m/playsetonline/commit/176fb2b6d3b9064d15390cbc4586bab25372527d)) by Marc Jovaní González
- try to use new account to semantic release ([a6792b1](https://github.com/drackp2m/playsetonline/commit/a6792b1f15a89e10a1e8cad1ff77f26aec978bf0)) by Marc Jovaní González
- try to use npm ([1472be0](https://github.com/drackp2m/playsetonline/commit/1472be0db506f0345196dba4391d4af11baa30ec)) by Marc Jovaní González
- try to use npm ([be85e93](https://github.com/drackp2m/playsetonline/commit/be85e93da614e41de18aded519aacc0b5324a5eb)) by Marc Jovaní González
- update main branch changes detection ([a324d3e](https://github.com/drackp2m/playsetonline/commit/a324d3e4fe014ef1b3e96005e89eb556e62d7cb9)) by Marc Jovaní González
- use package-lock again, copy dist to src ([63cf611](https://github.com/drackp2m/playsetonline/commit/63cf6118267cdb70c1d44c49884396c698bcc4aa)) by Marc Jovaní González
- use page url instead base url ([214d2b4](https://github.com/drackp2m/playsetonline/commit/214d2b49e61c68508158b56142f1d8e70b7ff5ad)) by Marc Jovaní González

### 🎒 Chores

- add "run" to Dockerfile npm commands ([6294fe6](https://github.com/drackp2m/playsetonline/commit/6294fe60cde4701b051e9fece58392a5fb061fcd)) by Marc Jovaní González
- add comment ([d52721f](https://github.com/drackp2m/playsetonline/commit/d52721f7548c6dc634575c45bd595cbfa2bb46c6)) by Marc Jovaní González
- add npm cache to github pages, improve package commands, fix nx many ([1bd8706](https://github.com/drackp2m/playsetonline/commit/1bd870690a679acc79be7821ebc65aa74d53a9f2)) by Marc Jovaní González
- add repository on package.json ([59cffe4](https://github.com/drackp2m/playsetonline/commit/59cffe41021b25e88b6d6c79b27c40d68693f31a)) by Marc Jovaní González
- add slash to base href ([9842f1b](https://github.com/drackp2m/playsetonline/commit/9842f1be253ce27a1b6b938ec38281146be53caa)) by Marc Jovaní González
- add version and footer to release notes ([6c4ae34](https://github.com/drackp2m/playsetonline/commit/6c4ae3412fbc609652a81649037b7e70710ffc90)) by Marc Jovaní González
- **api,api-e2e,app,app-e2e**: enable eslint rules ([7a74e7f](https://github.com/drackp2m/playsetonline/commit/7a74e7f1a7e631bd4911fd145606f499c04eea32)) by Marc Jovaní González
- **api,app**: update deps ([902dfc2](https://github.com/drackp2m/playsetonline/commit/902dfc2274a735a67399d6db58740716ded62b48)) by Marc Jovaní González
- **api,app**: upgrade nx and other deps ([46689a0](https://github.com/drackp2m/playsetonline/commit/46689a03693449bf9d0b3788ed88062057ebbcad)) by Marc Jovaní González
- **app**: artifacts to v3 again ([5d517a9](https://github.com/drackp2m/playsetonline/commit/5d517a9b07528b33375a447a9c12d62e9fcfdbf0)) by Marc Jovaní González
- **app**: back to ubuntu-latest ([72d6aaa](https://github.com/drackp2m/playsetonline/commit/72d6aaa220a411ff9cc42d227a189cb2d7261a37)) by Marc Jovaní González
- **app**: build app on dist/set-online ([88495fc](https://github.com/drackp2m/playsetonline/commit/88495fc41763a53237d5fbea3b209f4c04ea0277)) by Marc Jovaní González
- **app**: build to docs ([0585734](https://github.com/drackp2m/playsetonline/commit/058573490c7de12e400f78093b446425181a392e)) by Marc Jovaní González
- **app**: configure mikro-orm for autoload entities ([03bdfae](https://github.com/drackp2m/playsetonline/commit/03bdfae57c5289b38514d1a0e6a2feccc2b9f1d6)) by Marc Jovaní González
- **app**: ignore dist app to try github pages ([df18734](https://github.com/drackp2m/playsetonline/commit/df187341635b7921347e253a42766bf87260dee5)) by Marc Jovaní González
- **app**: increase budgets component style maximumError to 8kb ([f7c4b8c](https://github.com/drackp2m/playsetonline/commit/f7c4b8c993b067e8c8d0a401e63df92014fd3de8)) by Marc Jovaní González
- **app**: try actions v4 ([3428a56](https://github.com/drackp2m/playsetonline/commit/3428a560525d19b04e04873bc645d2834cd1d48b)) by Marc Jovaní González
- **app**: upgrade all deploy steps to v3 ([2c1fbb9](https://github.com/drackp2m/playsetonline/commit/2c1fbb9df0c918539f4675bcb02abfa15aa0603c)) by Marc Jovaní González
- back to env port on main.ts (api) ([44a76f2](https://github.com/drackp2m/playsetonline/commit/44a76f2e8838ee52615437cde1532bd03ce53219)) by Marc Jovaní González
- back to run all tests in gh-pages action ([ab60e59](https://github.com/drackp2m/playsetonline/commit/ab60e59df0fc547813b8d8e3fc6a927e80433c7b)) by Marc Jovaní González
- chmod with sudo ([19a4bc4](https://github.com/drackp2m/playsetonline/commit/19a4bc4bc298287613a0f10d21b77551dc68f4a7)) by Marc Jovaní González
- create Dockerfile for production ([8d744ea](https://github.com/drackp2m/playsetonline/commit/8d744eac0f1ce771e7c090f0c8f66b3c85dd6f24)) by Marc Jovaní González
- enable lint on html files ([cf4d17c](https://github.com/drackp2m/playsetonline/commit/cf4d17cba84f5062bbf79fadfec8066ad543dded)) by Marc Jovaní González
- expose port 10_000 ([e20241c](https://github.com/drackp2m/playsetonline/commit/e20241c81860c5d26dd237a8b02f8fed711cee12)) by Marc Jovaní González
- fix devcontainer and update nx to 19.8 ([0e1c5ff](https://github.com/drackp2m/playsetonline/commit/0e1c5ff9f33c7e1daf79a7985867d4f27582c15a)) by Marc Jovaní González
- fix eslint config for all projects ([f108c2c](https://github.com/drackp2m/playsetonline/commit/f108c2c4e5672bb2153a673e7a86ed3b2a80f1d6)) by Marc Jovaní González
- fix yarn lock ([78dcfc6](https://github.com/drackp2m/playsetonline/commit/78dcfc69654a07e36b47e3b914fe60ca3b07ba20)) by Marc Jovaní González
- gh-pages add permissions to write ([efddb84](https://github.com/drackp2m/playsetonline/commit/efddb841f6199260392c428dca9ec155be1826d9)) by Marc Jovaní González
- ignore definitions file ([56aac5f](https://github.com/drackp2m/playsetonline/commit/56aac5f93368a436101f0dcf3ebf33b9a60e7163)) by Marc Jovaní González
- ignore devcontainer docker compose, and remove from git ([fdf8a7f](https://github.com/drackp2m/playsetonline/commit/fdf8a7f13205af7c599134ae008ae647531914fd)) by Marc Jovaní González
- improve production port debug and dockerfile with dynamic port expose ([20b0ad6](https://github.com/drackp2m/playsetonline/commit/20b0ad6e0f24cab7e83012c057103e952a4bfe83)) by Marc Jovaní González
- improve production port debug and dockerfile with dynamic port expose ([ac71822](https://github.com/drackp2m/playsetonline/commit/ac71822a767652fda0df96f891ef6c4275490023)) by Marc Jovaní González
- improve release commit message and skip this on husky ([69e4949](https://github.com/drackp2m/playsetonline/commit/69e4949af5c34eff957766a0cfafd0274ac50026)) by Marc Jovaní González
- migrate nx ([69bc159](https://github.com/drackp2m/playsetonline/commit/69bc159394258a7bfa68c5c638f865d2ebae9159)) by Marc Jovaní González
- migrate nx to 16.5.2 ([df3732f](https://github.com/drackp2m/playsetonline/commit/df3732f698e922dcb7749481e4a97064d7c8b8fd)) by Marc Jovaní González
- nx to 18.1.1 ([1ca5ba6](https://github.com/drackp2m/playsetonline/commit/1ca5ba6abfee5fb65d1ac53616e0c572869a15ba)) by Marc Jovaní González
- nx to 18.1.1 ([0316cf1](https://github.com/drackp2m/playsetonline/commit/0316cf15852eec330e87235015442c5525d5d1df)) by Marc Jovaní González
- prepare devcontainer ([9a1a048](https://github.com/drackp2m/playsetonline/commit/9a1a0482df8e3a047f9df188a565391d9015f2b1)) by Marc Jovaní González
- reduce max commit chars to 70 ([1684894](https://github.com/drackp2m/playsetonline/commit/16848944effb5d522e2e33e6e10fe0d168f4432d)) by Marc Jovaní González
- **release**: 0.0.1 [skip ci] ([7fed677](https://github.com/drackp2m/playsetonline/commit/7fed6774dc34bf1989423f0e788a137101c25b2e)) by romantic-release-bot
- **release**: 0.0.1 [skip ci] ([2867f03](https://github.com/drackp2m/playsetonline/commit/2867f03625ba0f0edd253ab5f9c1a44ed7648216)) by drackp2m-semantic-release-bot
- **release**: 0.1.0 [skip ci] ([cf9cf96](https://github.com/drackp2m/playsetonline/commit/cf9cf969a01889ceca16ffd664309fe3deb12b02)) by Marc Jovaní González
- **release**: 0.1.0 [skip ci] ([f8d0006](https://github.com/drackp2m/playsetonline/commit/f8d00065fd33c2017478a455287e9bbf28b85527)) by romantic-release-bot
- **release**: 0.1.1 [skip ci] ([7ae881e](https://github.com/drackp2m/playsetonline/commit/7ae881e13dd77a2b06c9ce63369674c70c60f2ac)) by romantic-release-bot
- **release**: v0.0.1 [skip ci] ([9e3a864](https://github.com/drackp2m/playsetonline/commit/9e3a864d8bb77c6381165e3775b305c04b1a1817)) by Marc Jovaní González
- remove .env ([353e329](https://github.com/drackp2m/playsetonline/commit/353e329bf069576eafe65f94aa041ebdbe7bfbdf)) by Marc Jovaní González
- remove cache from gh-pages node setup ([294778b](https://github.com/drackp2m/playsetonline/commit/294778b526b0674626ec7ce892480352f6e47434)) by Marc Jovaní González
- remove chmod on .env ([d8121e1](https://github.com/drackp2m/playsetonline/commit/d8121e14df0c9998fb9b90eb474b420c244a94e3)) by Marc Jovaní González
- remove copy of readme and remove prettier in html ([5b97df0](https://github.com/drackp2m/playsetonline/commit/5b97df08089aebb03831abed0ef79a434cfef4c0)) by Marc Jovaní González
- remove debug on lint-staged ([06e34fd](https://github.com/drackp2m/playsetonline/commit/06e34fd24a3847409535ea94bf42728dcf18bdbd)) by Marc Jovaní González
- remove host 0.0.0.0 ([217c884](https://github.com/drackp2m/playsetonline/commit/217c884893c3ef8ef4a74b62e6addfe850882ecb)) by Marc Jovaní González
- remove host on main api bootstrap ([33fb7f3](https://github.com/drackp2m/playsetonline/commit/33fb7f31204a55a7ca1c4eb4bdf2eb2ca72b01a1)) by Marc Jovaní González
- remove husky prepare command ([011d7c6](https://github.com/drackp2m/playsetonline/commit/011d7c6c96dfb05d6de05920577a1369f8f04e0e)) by Marc Jovaní González
- remove hyphwn ([2cfc015](https://github.com/drackp2m/playsetonline/commit/2cfc015c27378ebeeb5b0c4c90ada9d0a2919029)) by Marc Jovaní González
- remove nx workspace data from git ([5514116](https://github.com/drackp2m/playsetonline/commit/5514116ce7f9483d3210469ad6f94f91905bb4c4)) by Marc Jovaní González
- remove scss replaces :( ([54ce1ef](https://github.com/drackp2m/playsetonline/commit/54ce1ef4261a73976fa6c0c89e253864caeb1507)) by Marc Jovaní González
- remove unneeded ocnfiguration of settings.json ([89d9a35](https://github.com/drackp2m/playsetonline/commit/89d9a3557b4d29269fb6bb9b912e9da7954764dc)) by Marc Jovaní González
- run install with npm ci ([a867b64](https://github.com/drackp2m/playsetonline/commit/a867b6429e8e77cc376806b4d84ef1a85bdb73ea)) by Marc Jovaní González
- run ls -la and id ([6d9e261](https://github.com/drackp2m/playsetonline/commit/6d9e26136fc7d6214d1fc3893fbd0e30eae26864)) by Marc Jovaní González
- run only app tests ([07fbe72](https://github.com/drackp2m/playsetonline/commit/07fbe727a57afcde43970feca23e4adc17cc383c)) by Marc Jovaní González
- set api url to localhost and update Angular prod backend url ([b9af53d](https://github.com/drackp2m/playsetonline/commit/b9af53d22500b4e60195d3b29957228532a087fd)) by Marc Jovaní González
- test new deploy ([5f231ae](https://github.com/drackp2m/playsetonline/commit/5f231ae467411849a8be248bf920bd532bc57ab6)) by Marc Jovaní González
- try new deploy ([ac6414c](https://github.com/drackp2m/playsetonline/commit/ac6414c88f8081d7608331a99264f5259e3020bf)) by Marc Jovaní González
- try to add mikro-orm environment variables ([3001bfb](https://github.com/drackp2m/playsetonline/commit/3001bfb318330f6238d2eb1122009237b3737fae)) by Marc Jovaní González
- try to add permissions to .env file (of Render) ([4aa29e7](https://github.com/drackp2m/playsetonline/commit/4aa29e7fb171e9e67987e694cc4a2c51962df06e)) by Marc Jovaní González
- try to back to npm ([dfd5c31](https://github.com/drackp2m/playsetonline/commit/dfd5c3166af96aa29b4d5b2094cbdbcb5fba7345)) by Marc Jovaní González
- try to execute prod docker commands with yarn ([f091863](https://github.com/drackp2m/playsetonline/commit/f0918636805a702cabed707ecebcc29fac2583f5)) by Marc Jovaní González
- try to fix github actions ([d26f7cb](https://github.com/drackp2m/playsetonline/commit/d26f7cb3dfa5ea522d10601c9306d86c8c24d50c)) by Marc Jovaní González
- try to fix path from artifacts upload ([ca08a5f](https://github.com/drackp2m/playsetonline/commit/ca08a5f9c02f6caa8c467a4422c1cfe1992a9215)) by Marc Jovaní González
- try to restore type-enum rule on commitizen ([a743fba](https://github.com/drackp2m/playsetonline/commit/a743fba763d31b638c90ffb8725a6fad7689eab5)) by Marc Jovaní González
- try to use alpine by Carlos Aragón ([8d7b74c](https://github.com/drackp2m/playsetonline/commit/8d7b74c95679d1cbfcaf47d63cd214e8b425080c)) by Marc Jovaní González
- try to use semantic release (again) ([7d3c6d2](https://github.com/drackp2m/playsetonline/commit/7d3c6d2c5ecf70bad488c5d4ed20380903478b04)) by Marc Jovaní González
- update .env.example ([5b86619](https://github.com/drackp2m/playsetonline/commit/5b86619eecd2b5da8c1c15293f7953378fc0b7d2)) by Marc Jovaní González
- update all dependencies ([beff13b](https://github.com/drackp2m/playsetonline/commit/beff13b74c89f9b5efc4d1b5ccac52149dbf5de5)) by Marc Jovaní González
- update all deps ([2d7a78a](https://github.com/drackp2m/playsetonline/commit/2d7a78a253acadb009180a7b5318537f861d10a3)) by Marc Jovaní González
- update all deps to latest compatible version ([89262a7](https://github.com/drackp2m/playsetonline/commit/89262a7714096d1d1e2e13903e601feab0898901)) by Marc Jovaní González
- update all deps to latest version (except typescript) ([34a3e21](https://github.com/drackp2m/playsetonline/commit/34a3e2189a5b6d5813e57fe632cbe4b46d5c02e8)) by Marc Jovaní González
- update deploy to node 18 ([a3c62eb](https://github.com/drackp2m/playsetonline/commit/a3c62ebd748b633486954f76004d707abc069dea)) by Marc Jovaní González
- update deps ([6d5c417](https://github.com/drackp2m/playsetonline/commit/6d5c4175a2a88e8153b051582ed7421824f91a88)) by Marc Jovaní González
- update docker node image, add jest global setup to unit tests ([90c37a1](https://github.com/drackp2m/playsetonline/commit/90c37a1c063ce90704fbbe441f315bbda3d67045)) by Marc Jovaní González
- update Dockerfile ([55f2be2](https://github.com/drackp2m/playsetonline/commit/55f2be28e32ebeff105b79acad293e6810da8d67)) by Marc Jovaní González
- update Dockerfile ([5f5cf63](https://github.com/drackp2m/playsetonline/commit/5f5cf63749ce309b5b394bf5879a2e261bfba9b8)) by Marc Jovaní González
- update Dockerfile to test build on Render ([186c7ae](https://github.com/drackp2m/playsetonline/commit/186c7aea5f59503530815c0d9eeacf53308eae2b)) by Marc Jovaní González
- update nx to 19.6.4 ([4ad3eb5](https://github.com/drackp2m/playsetonline/commit/4ad3eb5d50a455989b175f7332aaf855a4e72a75)) by Marc Jovaní González
- update nx to 19.6.4 ([522e49d](https://github.com/drackp2m/playsetonline/commit/522e49d4f6bd9223cbdae07adc942d80b524c57a)) by Marc Jovaní González
- update package-lock ([6de8635](https://github.com/drackp2m/playsetonline/commit/6de863520332bf083920629d5238dba3e251c50b)) by Marc Jovaní González
- upgrade all deps to last version (except ts-morph) ([65942dd](https://github.com/drackp2m/playsetonline/commit/65942dd308d92231c5c0b2aedf343fa7a1eba8f6)) by Marc Jovaní González
- upgrade deps ([55fd3c5](https://github.com/drackp2m/playsetonline/commit/55fd3c53ecdb55221801e51dba3dd613e12f8f1f)) by Marc Jovaní González
- upgrade deps ([419b44f](https://github.com/drackp2m/playsetonline/commit/419b44f287b9be16a7262da8e5e49c7edd943f48)) by Marc Jovaní González
- upgrade deps ([0459936](https://github.com/drackp2m/playsetonline/commit/0459936c2e0abde9f6277f1bf5686130538c54a6)) by Marc Jovaní González
- upgrade deps ([ed81449](https://github.com/drackp2m/playsetonline/commit/ed81449520678f7e6573208701bd2e377b059da3)) by Marc Jovaní González
- upgrade deps ([4409917](https://github.com/drackp2m/playsetonline/commit/44099175bf0cd9e3b513ed154afc9b4d75ad5056)) by Marc Jovaní González
- upgrade deps ([5be53c5](https://github.com/drackp2m/playsetonline/commit/5be53c51e052387dd122bc2984987376304de620)) by Marc Jovaní González
- upgrade deps (except typescript 5.1.6 => 5.2.2 ([5e61347](https://github.com/drackp2m/playsetonline/commit/5e613476a8103ec0e46241e0dceca43cf4f01b4e)) by Marc Jovaní González
- upgrade deps and add all env keys to gh-pages ([d5cf65f](https://github.com/drackp2m/playsetonline/commit/d5cf65f9135127244741584398772663a3d5c5e0)) by Marc Jovaní González
- upgrade deps to last version ([218ed70](https://github.com/drackp2m/playsetonline/commit/218ed70bcd806f971f85201b4e566689505a3ae2)) by Marc Jovaní González
- upgrade node to 22.7 ([0b3326e](https://github.com/drackp2m/playsetonline/commit/0b3326e1c6dcce4718b3b3ae20e900d0aad1d80e)) by Marc Jovaní González
- upgrade npm deps ([adccb8d](https://github.com/drackp2m/playsetonline/commit/adccb8d4ebb285955269893b53acabf57261a651)) by Marc Jovaní González
- upgrade nx from 19.4.1 to 19.5.0 ([aaba67a](https://github.com/drackp2m/playsetonline/commit/aaba67a857571237f6e6b8819ba2a3e9942c1465)) by Marc Jovaní González
- upgrade nx to 18.1.3 and add node-cache dep ([dbf4ced](https://github.com/drackp2m/playsetonline/commit/dbf4cedb1ee1505737e2f5d9b04da5dc53072402)) by Marc Jovaní González
- upgrade nx to 20.0.1 ([ad762cf](https://github.com/drackp2m/playsetonline/commit/ad762cffd12d89e3049200617824ecbdfd1feba6)) by Marc Jovaní González
- upgrade nx version ([b41e186](https://github.com/drackp2m/playsetonline/commit/b41e186d1957c3c85394154e8246ea6fe3d3c7b6)) by Marc Jovaní González
- upgrade nx, remove react webpack plugin and svgr webpack ([c04e1ec](https://github.com/drackp2m/playsetonline/commit/c04e1ece77f7919f61c9f56f2df1a37bd102de6e)) by Marc Jovaní González
- upgrade package deps ([43a7ace](https://github.com/drackp2m/playsetonline/commit/43a7ace22d429d0a5efeedf8c90f587963ff4ee4)) by Marc Jovaní González
- upgrade some deps ([8dfb0e9](https://github.com/drackp2m/playsetonline/commit/8dfb0e9e5784d6bee921ab0f1894593eb142c58d)) by Marc Jovaní González
- upgrade some deps ([e9c1259](https://github.com/drackp2m/playsetonline/commit/e9c125949fe39c1d59ee1712adb0a19f483770a0)) by Marc Jovaní González
- upgrade to node 22.9 and postgres 17.0 (with alpine 3.20) ([e2617f0](https://github.com/drackp2m/playsetonline/commit/e2617f0db48d59babcdd363cb0ef322b91385dd3)) by Marc Jovaní González
- upgrade to nx 17 and use npm in all places ([d99a01e](https://github.com/drackp2m/playsetonline/commit/d99a01e83ee165246e3c9436998b03463243e0a1)) by Marc Jovaní González
- upgrade to nx 20.0.3 ([6d68f5f](https://github.com/drackp2m/playsetonline/commit/6d68f5f8f62504bb2d36efe8a03eaf8a4d5322fc)) by Marc Jovaní González
- use node 20.8 in github actions ([2df6063](https://github.com/drackp2m/playsetonline/commit/2df60633b177307a52851b3e05ed2ff032725727)) by Marc Jovaní González

**Full Changelog**: https://github.com/drackp2m/playsetonline/compare/...v1.0.0

# v1.0.2 (2024-11-13)

## What's Changed

### ♻️ Code Refactoring

- back to node 22.11, workflows tests > release > deploy ([a2edaa8](https://github.com/drackp2m/playsetonline/commit/a2edaa86b82aee357d67cb1f0567e4bf71b94a40)) by Marc Jovaní González
- back to node 22.11, workflows tests > release > deploy ([3f3d82b](https://github.com/drackp2m/playsetonline/commit/3f3d82b438628c04e147ba3914a126389a3a8993)) by Marc Jovaní González

**Full Changelog**: https://github.com/drackp2m/playsetonline/compare/v1.0.1...v1.0.2

# v1.0.1 (2024-11-13)

## What's Changed

### 🎨 Styles

- **app**: change theme-color meta attr (green color) to enable it on Safari ([beddebe](https://github.com/drackp2m/playsetonline/commit/beddebeae8ce4703859471347b973f265a62560d)) by Marc Jovaní González

### 💻 Continuous Integration

- try to deploy again from `dist/apps/api` ([1a688c0](https://github.com/drackp2m/playsetonline/commit/1a688c02c23ed58bd387815f1b90de70060f29f3)) by Marc Jovaní González

**Full Changelog**: https://github.com/drackp2m/playsetonline/compare/v1.0.0...v1.0.1

# v1.0.0 (2024-11-13)

## What's Changed

### ✨ Features

- add manifest ([9e353ce](https://github.com/drackp2m/playsetonline/commit/9e353cefee6b0bac47b6256b58f924294644e668)) by Marc Jovaní González
- add other commit of type feat ([ddc4750](https://github.com/drackp2m/playsetonline/commit/ddc4750ba3da9c684bea5fddb7795752433f3dcc)) by Marc Jovaní González
- add spaces page ([1bd7e59](https://github.com/drackp2m/playsetonline/commit/1bd7e5929c0a9b6175078e4c63614b1f4367f609)) by Marc Jovaní González
- **api,app**: add root api endpoint with status, add cron on appService ([3e3b0fb](https://github.com/drackp2m/playsetonline/commit/3e3b0fb7a8ea5bcd560e952ca13a93572babc1d9)) by Marc Jovaní González
- **api,app**: add selfsigned ssl ([5668765](https://github.com/drackp2m/playsetonline/commit/56687659c4fa1eb50bfd70285f9798a5fc6ad6f1)) by Marc Jovaní González
- **api,app**: add subscriptions to graphQL ([0d39442](https://github.com/drackp2m/playsetonline/commit/0d39442ba809e06dd67db2c6464740a02ca6f348)) by Marc Jovaní González
- **api,app**: add user store and getUserInfo query on userResolver ([5ed472f](https://github.com/drackp2m/playsetonline/commit/5ed472ff918ba0d70d0fbdcd20d2f5a05857e1f2)) by Marc Jovaní González
- **api,app**: create fake login from angular to nestjs-graphql ([7b2a616](https://github.com/drackp2m/playsetonline/commit/7b2a616466155384fe35d9565b0719831d18c770)) by Marc Jovaní González
- **api,app**: create newGame use case ([b401ee4](https://github.com/drackp2m/playsetonline/commit/b401ee49ef7d0f21985caa45d0a13b79e3ba2e84)) by Marc Jovaní González
- **api,app**: implements jwt refresh token ([ba18496](https://github.com/drackp2m/playsetonline/commit/ba18496c3e700314b375ab870f2edc3ae675f969)) by Marc Jovaní González
- **api,app**: improve ping, upgrade to node 22, add @angular/build package ([d2aed64](https://github.com/drackp2m/playsetonline/commit/d2aed64f0464926d175c74bd49aa93285ad0b360)) by Marc Jovaní González
- **api,app**: improve subscriptions, convert to signals, show on html ([800a3a0](https://github.com/drackp2m/playsetonline/commit/800a3a0767cfa5b9f2edf2b9341749eee5305051)) by Marc Jovaní González
- **api,app**: list games waiting join players ([f33d39c](https://github.com/drackp2m/playsetonline/commit/f33d39c0e3ea3436010e8b87ddff152181abe945)) by Marc Jovaní González
- **api,app**: ping works!! ([ba6e314](https://github.com/drackp2m/playsetonline/commit/ba6e314914f09ddac9d9f7ee48882e798e9a96ed)) by Marc Jovaní González
- **api,app**: remove proxy on app and decrease salt to 11 on registerUseCase ([a06d168](https://github.com/drackp2m/playsetonline/commit/a06d168021780b305f7fde105855a89f6fa16108)) by Marc Jovaní González
- **api,app**: service workers and /api with alive message ([5d64df7](https://github.com/drackp2m/playsetonline/commit/5d64df71f5619c691906a9e83770a9ad34021c60)) by Marc Jovaní González
- **api**: add cascade delete on user or game deletion in game-participant entity ([481aab9](https://github.com/drackp2m/playsetonline/commit/481aab91ee9041e0efb3f8550810327854593759)) by Marc Jovaní González
- **api**: add check-jwt-access-token use-case ([a41b5dd](https://github.com/drackp2m/playsetonline/commit/a41b5dd264ca23a3239932c770b71247a8c9d45c)) by Marc Jovaní González
- **api**: add custom mikro-orm namig strategy ([21d0cb6](https://github.com/drackp2m/playsetonline/commit/21d0cb6c261fc487027a7410b55e72a1387b8e29)) by Marc Jovaní González
- **api**: add exception filter ([8c0f635](https://github.com/drackp2m/playsetonline/commit/8c0f6351a566d27759a281f191fed652761a4cc5)) by Marc Jovaní González
- **api**: add jwt access token validation to graphql ws connections ([f6cc2db](https://github.com/drackp2m/playsetonline/commit/f6cc2dba0d149f388e5547a36c082e1346c44523)) by Marc Jovaní González
- **api**: allow multiple origins on CORS ([77eab11](https://github.com/drackp2m/playsetonline/commit/77eab11fa158f0fad081233ed16b72c80ca1627a)) by Marc Jovaní González
- **api**: create generateGameCards UseCase ([680731a](https://github.com/drackp2m/playsetonline/commit/680731af7ba1e513a16ebfef1a994c43a96af3e6)) by Marc Jovaní González
- **api**: create register usecase ([c6c2559](https://github.com/drackp2m/playsetonline/commit/c6c25591649f9a6ce687d61ba2fa5fd0837989c8)) by Marc Jovaní González
- **api**: create userRepository ([fecdeba](https://github.com/drackp2m/playsetonline/commit/fecdebaac6d1378616253e0aad4c2939cab6f65a)) by Marc Jovaní González
- **api**: improve errors messages ([19902ab](https://github.com/drackp2m/playsetonline/commit/19902abaca06ea2b20a0ac322967ac82bee26dbc)) by Marc Jovaní González
- **api**: mikro orm update with repository aliases ([4778966](https://github.com/drackp2m/playsetonline/commit/4778966a30af0251c2629bc50cd3cc4b1e549f85)) by Marc Jovaní González
- **api**: skip props on cookies ([d50016d](https://github.com/drackp2m/playsetonline/commit/d50016df41426da536746d766c4b6f52c857017d)) by Marc Jovaní González
- **api**: try to disable graphQL csrfPrevention ([505f4e7](https://github.com/drackp2m/playsetonline/commit/505f4e73ddfa306424a19870f3ac8a5f4a99b031)) by Marc Jovaní González
- **api**: try to run specs with swc ([d99c5ce](https://github.com/drackp2m/playsetonline/commit/d99c5ce8319a319e8a4c00d9124709a551dfffcf)) by Marc Jovaní González
- **api**: update environment to call to api-set-online.onrender.com ([74b55b7](https://github.com/drackp2m/playsetonline/commit/74b55b7e9be48dd318073b37969f6cd01e1eadbd)) by Marc Jovaní González
- **api**: use check-refresh-token use-case on refresh-session use-case ([b86a861](https://github.com/drackp2m/playsetonline/commit/b86a86197ffd277736428f4637ce2d32fca07494)) by Marc Jovaní González
- **app,api-interfaces**: add register form ([8d1b056](https://github.com/drackp2m/playsetonline/commit/8d1b056bb965e9b3eab683827cf7a7a1dde42b37)) by Marc Jovaní González
- **app,api**: add join game mutation and improve graphql errors ([b29d257](https://github.com/drackp2m/playsetonline/commit/b29d257344b346df1c38ec248a39644f6a8d9dc7)) by Marc Jovaní González
- **app,api**: create joinGame use case, and improve entityRepository ([d6898a8](https://github.com/drackp2m/playsetonline/commit/d6898a821f3db749cadf7fda2bc096f829e94bcc)) by Marc Jovaní González
- **app,api**: improve auth app interceptor ([1d3438d](https://github.com/drackp2m/playsetonline/commit/1d3438dd25aaf7a4b30e37d0e72a8da9f94148a8)) by Marc Jovaní González
- **app**: `highlightSet` increases `Wrong sets` by 3 ([f5dac08](https://github.com/drackp2m/playsetonline/commit/f5dac0880b72823cb395e756febbde01a2e69cfb)) by Marc Jovaní González
- **app**: add border radius example page ([ce93dc9](https://github.com/drackp2m/playsetonline/commit/ce93dc9cadec1204e3c4fd4725e94a78b1b5aa42)) by Marc Jovaní González
- **app**: add box shadow sample page ([f73792f](https://github.com/drackp2m/playsetonline/commit/f73792f069f3d4bc4bab94695e8ac588c866c0c4)) by Marc Jovaní González
- **app**: add card component ([9cf0196](https://github.com/drackp2m/playsetonline/commit/9cf01960c9026e196e9fcfa329d9ec267b5a1390)) by Marc Jovaní González
- **app**: add card demo page with nice result!! ([51e44cb](https://github.com/drackp2m/playsetonline/commit/51e44cb0ab37b047433ba924b214b25ff3d20a9b)) by Marc Jovaní González
- **app**: add colors example page ([8ce8d77](https://github.com/drackp2m/playsetonline/commit/8ce8d77ea66de3be12acc8a99cf6344c97523bde)) by Marc Jovaní González
- **app**: add examples for all typographies ([b09d8ba](https://github.com/drackp2m/playsetonline/commit/b09d8badc2d5809e1d30bb5649b51a631d15f3f5)) by Marc Jovaní González
- **app**: add favicon ([3090ffa](https://github.com/drackp2m/playsetonline/commit/3090ffad5f34a6d46e80df5853df47fb00d9b348)) by Marc Jovaní González
- **app**: add game page ([cc6e3c5](https://github.com/drackp2m/playsetonline/commit/cc6e3c52fe1bf689aca925724a069ea5576f3b9f)) by Marc Jovaní González
- **app**: add get user info error type ([68919f0](https://github.com/drackp2m/playsetonline/commit/68919f0c0605560747ca67ae129c5440b6dcfb9c)) by Marc Jovaní González
- **app**: add glitch effect component for svg images ([998b4b3](https://github.com/drackp2m/playsetonline/commit/998b4b3bb6f23287db42df470c9cbbd3d48c7c75)) by Marc Jovaní González
- **app**: add other feature but with scope ([5505451](https://github.com/drackp2m/playsetonline/commit/550545101b65b0f19cfede61e3e819fbd44331a9)) by Marc Jovaní González
- **app**: add padding to game in full-screen ([c2b6d35](https://github.com/drackp2m/playsetonline/commit/c2b6d354e89ac87a59297f901e272af5143b5988)) by Marc Jovaní González
- **app**: add set icons ([1fb7c6d](https://github.com/drackp2m/playsetonline/commit/1fb7c6d5dbf4b07df37653b6d476c225f54fc23e)) by Marc Jovaní González
- **app**: add signal store and migrate to nx 18.1.2 ([2d73df5](https://github.com/drackp2m/playsetonline/commit/2d73df5f18eb235736af0ed7675a2367e3537683)) by Marc Jovaní González
- **app**: add sonar lint and fix some eslint issues ([3676496](https://github.com/drackp2m/playsetonline/commit/3676496bf6fde4bc8e87b17816aa565f5d280f3d)) by Marc Jovaní González
- **app**: add typographies url and menu ([756bb03](https://github.com/drackp2m/playsetonline/commit/756bb0304ac25ac3adb9403e86ddc22344c947c1)) by Marc Jovaní González
- **app**: all routes with lazzy loading ([6e87f41](https://github.com/drackp2m/playsetonline/commit/6e87f41f2cc5aeb1d2efd06a872b5f7e972137fc)) by Marc Jovaní González
- **app**: convert variables to signals ([ef2fe1b](https://github.com/drackp2m/playsetonline/commit/ef2fe1b9ae50d73cab3a86b75aa2d21643d0ef7f)) by Marc Jovaní González
- **app**: create apiSDK ([d84264b](https://github.com/drackp2m/playsetonline/commit/d84264bd0fc8020a85a725093e2f737c9a1533ef)) by Marc Jovaní González
- **app**: create basic authorization interceptor ([ed94941](https://github.com/drackp2m/playsetonline/commit/ed94941902e5516dd8bdf045b2219619d1df30af)) by Marc Jovaní González
- **app**: enable to put cards rotated ([2ae3953](https://github.com/drackp2m/playsetonline/commit/2ae39534bd76ca3c97935efb46b0b5ba7089953e)) by Marc Jovaní González
- **app**: finish flitch effect (fails on svg with gradients) ([47bd356](https://github.com/drackp2m/playsetonline/commit/47bd3561b03bf3727ffc080113da02d02ee0e977)) by Marc Jovaní González
- **app**: gameOnlineStore as class, add semantic-release ([77b3133](https://github.com/drackp2m/playsetonline/commit/77b313394b60c672db798a8c5f763dd754aa0de2)) by Marc Jovaní González
- **app**: implements sendPing mutation on AppComponent (need init subscription) ([5191467](https://github.com/drackp2m/playsetonline/commit/51914677591f6c9e39d9c684954c07237f096ba0)) by Marc Jovaní González
- **app**: improve game experience ([9f14a2c](https://github.com/drackp2m/playsetonline/commit/9f14a2c2d994a11667383a8ce22a014ddb5c8916)) by Marc Jovaní González
- **app**: improve the HTTP interceptor to handle both GraphQL and httpError errors. ([a4188bb](https://github.com/drackp2m/playsetonline/commit/a4188bbaa8deda00df347e15203e1a0775480700)) by Marc Jovaní González
- **app**: move some game logic to store and use eslint flat config ([0f068f9](https://github.com/drackp2m/playsetonline/commit/0f068f93aedae3f17b3bef3fcfbe9728c8ddff1e)) by Marc Jovaní González
- **app**: now, confetti have game shapes ([db5cb7f](https://github.com/drackp2m/playsetonline/commit/db5cb7feb56b0213d81afc90753e8048a37c3b08)) by Marc Jovaní González
- **app**: pipe to get asset urls absolute ([abdf45b](https://github.com/drackp2m/playsetonline/commit/abdf45b8772b4b09f54008851f4650081c44d602)) by Marc Jovaní González
- **app**: prepare wpa with translucid status bar for iOS and add SET particles ([75b80e9](https://github.com/drackp2m/playsetonline/commit/75b80e9c8ec08c725a113cea225a2fe0e25083de)) by Marc Jovaní González
- **app**: register and login height ([762a403](https://github.com/drackp2m/playsetonline/commit/762a403dc8735b03e5d8254917f981b0add1e983)) by Marc Jovaní González
- **app**: remove start slash of [@font-face](https://github.com/font-face) css property ([7952c7e](https://github.com/drackp2m/playsetonline/commit/7952c7e60daca42918f688f5f34c7de986c8f44b)) by Marc Jovaní González
- **app**: remove url pipe and update manifest ([55d02dd](https://github.com/drackp2m/playsetonline/commit/55d02dd939fe7e4b701e60d47e648046ed3e4f2b)) by Marc Jovaní González
- **app**: restored ability to add cards to the board ([a3f7824](https://github.com/drackp2m/playsetonline/commit/a3f7824612f1cee34c2a0f9f6d2840665052ee66)) by Marc Jovaní González
- **app**: save current game to browser indexedDB ([a749da5](https://github.com/drackp2m/playsetonline/commit/a749da59e24706a3eadd6285761960818c9f6068)) by Marc Jovaní González
- **app**: set all graphql query types to fetch using network-only policy ([b762b7f](https://github.com/drackp2m/playsetonline/commit/b762b7f95aa8c1b2c9ff74fc8cc85f9d04434c38)) by Marc Jovaní González
- **app**: start game normally by default, click on `Wrong sets` cheat game ([cba62df](https://github.com/drackp2m/playsetonline/commit/cba62df8ba5d1c9fbce0ff551b5acd6e3eac4b98)) by Marc Jovaní González
- **app**: try to add service-worker to Angular project ([b673228](https://github.com/drackp2m/playsetonline/commit/b673228f8e9558b56f027cfe90fdd183bfc0437b)) by Marc Jovaní González
- **app**: try to load font-face from base project path ([6621a92](https://github.com/drackp2m/playsetonline/commit/6621a92860f7d744ef3faa4f50fcc1b6c49581d5)) by Marc Jovaní González
- **app**: use hash on Angular routes ([a70224f](https://github.com/drackp2m/playsetonline/commit/a70224f68aaab702e411c89f52f8c1a3fb1f1b53)) by Marc Jovaní González
- **app**: use relative route for font-face ([7f51edb](https://github.com/drackp2m/playsetonline/commit/7f51edb9ac7d8eb3894f25b1a9d38b36998ba1f3)) by Marc Jovaní González
- **app**: use zoneless, make some routes lazzy ([27cb8b6](https://github.com/drackp2m/playsetonline/commit/27cb8b6498ebce9e6f1e9abd68f3547883ebabc6)) by Marc Jovaní González
- deplois from dev!! ([17a7012](https://github.com/drackp2m/playsetonline/commit/17a7012e2faab204b74d8030c99969de6337d96e)) by Marc Jovaní González
- enable play game with cheats but end with error =S ([3d0e103](https://github.com/drackp2m/playsetonline/commit/3d0e103dfd13b546a6c392480bdcd0297536ffff)) by Marc Jovaní González
- improve AuthInterceptor ([51571d0](https://github.com/drackp2m/playsetonline/commit/51571d0007656737b18dfed692c7aa9c17a5f4a8)) by Marc Jovaní González
- improve manifest ([0d2116c](https://github.com/drackp2m/playsetonline/commit/0d2116c1ce3a5d3cb03d19cc7385a0c57e7d1238)) by Marc Jovaní González
- improve userRepository ([63cc547](https://github.com/drackp2m/playsetonline/commit/63cc5478a004e03cf998c4e34b6b734f2c9a1978)) by Marc Jovaní González
- prepare project to production ([9c7565d](https://github.com/drackp2m/playsetonline/commit/9c7565d0daceb60358f96c54749f9d721f1f878a)) by Marc Jovaní González
- update texts ([e68ac04](https://github.com/drackp2m/playsetonline/commit/e68ac040bb6aa0a803f4e141dd88b039bc74ce36)) by Marc Jovaní González

### 🎨 Styles

- add fonts to test ([7ff138a](https://github.com/drackp2m/playsetonline/commit/7ff138adbfd9d8413ce9101283e479222bf4a54e)) by Marc Jovaní González
- **api,app**: this change is of styles and it is nice ([65ca891](https://github.com/drackp2m/playsetonline/commit/65ca891e3f65f3706dc7e14af90c22bd33586ddc)) by Marc Jovaní González
- **app**: add scss abstracts and utilities ([4589754](https://github.com/drackp2m/playsetonline/commit/458975453acadde23661a2f9502517e5b14da20f)) by Marc Jovaní González
- **app**: complete rounded, colors and visibility ([099fe5d](https://github.com/drackp2m/playsetonline/commit/099fe5dc78050855a633ea2b01fac562fdd815ea)) by Marc Jovaní González
- **app**: create show / hide rules with media query ([702fa5a](https://github.com/drackp2m/playsetonline/commit/702fa5a932bfc977dd6ffce4389e4d11356b0b67)) by Marc Jovaní González
- **app**: generate variables and classes of font sizes ([67fdbd2](https://github.com/drackp2m/playsetonline/commit/67fdbd2e76d44f1f3b1585a3f9106d641ce4f77b)) by Marc Jovaní González
- **app**: improve buttons and links hover effects, glitch on mobile now works ([60af6b9](https://github.com/drackp2m/playsetonline/commit/60af6b9b776c3b4540d582ccfec0c5700b934eea)) by Marc Jovaní González
- **app**: improve general styles ([b6cb883](https://github.com/drackp2m/playsetonline/commit/b6cb883abe7fbb4334367cf6b396c0d11369a9c6)) by Marc Jovaní González
- **app**: improve scss functions for get rules ([480f26f](https://github.com/drackp2m/playsetonline/commit/480f26f18adb1d0a4a874ad037aef628aaabca28)) by Marc Jovaní González
- **app**: refactor spacing ([a2a4fe9](https://github.com/drackp2m/playsetonline/commit/a2a4fe9714f8f491772b599922ab8a409d159d0a)) by Marc Jovaní González
- **app**: remove initial slash of scss src ([de5a59c](https://github.com/drackp2m/playsetonline/commit/de5a59c32f476fb97f4797a52641f80314b8bdf8)) by Marc Jovaní González
- **app**: remove start slash on font assets ([b2ff660](https://github.com/drackp2m/playsetonline/commit/b2ff66082465b58b6a4aaadea36d3ccd11a95b5a)) by Marc Jovaní González
- **app**: try to load recursive-font with initial slash and using scss variable ([d21bc73](https://github.com/drackp2m/playsetonline/commit/d21bc73284c4ed1844be8e02168394a2e2d1aefb)) by Marc Jovaní González
- back to relative assets load ([3f368aa](https://github.com/drackp2m/playsetonline/commit/3f368aaec8c1f1dc16cbf8f2916b5ca1d082c837)) by Marc Jovaní González
- try to fix load scss urls ([788ae48](https://github.com/drackp2m/playsetonline/commit/788ae48c8d7f7be464dde39b920b6510683607b6)) by Marc Jovaní González
- try to load styles relatively ([32a7a8c](https://github.com/drackp2m/playsetonline/commit/32a7a8cb47cdf29db97976714285f7a9e0eb1740)) by Marc Jovaní González

### 🧪 Tests

- **api-e2e**: try to separate template ([1446b29](https://github.com/drackp2m/playsetonline/commit/1446b29b8879d95da4653caecd6f5842aec8ad04)) by Marc Jovaní González
- **api,app**: add currentUserStore and Apollo to AppComponent spec ([b21d817](https://github.com/drackp2m/playsetonline/commit/b21d8171715cabe62c26f3382df33ea50040992f)) by Marc Jovaní González
- **api**: add authController spec ([e3e44c6](https://github.com/drackp2m/playsetonline/commit/e3e44c65f5a600368b2e566961599969ec2dde9f)) by Marc Jovaní González
- **api**: add CheckPassword UseCase Spec ([3002955](https://github.com/drackp2m/playsetonline/commit/3002955f44c9716c0c5333406d615bd00c35cb55)) by Marc Jovaní González
- **api**: add create-game use-case spec ([0b54144](https://github.com/drackp2m/playsetonline/commit/0b54144ffc986ecb23af789a00114b82e67c9e90)) by Marc Jovaní González
- **api**: add create-game use-case spec ([62d47f7](https://github.com/drackp2m/playsetonline/commit/62d47f703cabbf3d4bc1dcddd1b95c50dda96aa6)) by Marc Jovaní González
- **api**: add GenerateNowDate UseCase Spec ([fcb021e](https://github.com/drackp2m/playsetonline/commit/fcb021e5fa678d4ac3979210d5eb4b932e080cd9)) by Marc Jovaní González
- **api**: add generateUuid UseCase Spec ([1890bed](https://github.com/drackp2m/playsetonline/commit/1890bed13a46eae16cad8d3cb711627af72cc9f3)) by Marc Jovaní González
- **api**: add HashPassword UseCase Spec ([ce0a27e](https://github.com/drackp2m/playsetonline/commit/ce0a27eaaf66fa6219d4df2fad2ab3d87b64fdef)) by Marc Jovaní González
- **api**: add integration tests ([c101ecb](https://github.com/drackp2m/playsetonline/commit/c101ecb68396589617ac9000be52ea447becc09e)) by Marc Jovaní González
- **api**: add modifiedAt and expiresOn tests to DateFaker ([581fdd9](https://github.com/drackp2m/playsetonline/commit/581fdd9c926e8a5e839c28ef2b9bf2391840ba35)) by Marc Jovaní González
- **api**: add semaphore spec ([86ed5a3](https://github.com/drackp2m/playsetonline/commit/86ed5a32a59d68a2db16edd02e7308e883338ed9)) by Marc Jovaní González
- **api**: add spec for BadRequestException ([9e6ed1b](https://github.com/drackp2m/playsetonline/commit/9e6ed1b1ab4b17099a194a55576f20d75b187159)) by Marc Jovaní González
- **api**: add spec to clean-jwt-access-token-cookie use-case ([3eb6df1](https://github.com/drackp2m/playsetonline/commit/3eb6df179a0e9e57e720cb05583fc4adc1f1d49e)) by Marc Jovaní González
- **api**: add spec to clean-jwt-access-token-cookie use-case ([c6d666a](https://github.com/drackp2m/playsetonline/commit/c6d666a3461d98e2b347117d57f9b27954533b7e)) by Marc Jovaní González
- **api**: add specs for BasicFaker, renamed some tests ([795d55c](https://github.com/drackp2m/playsetonline/commit/795d55c5cae64d90b3fbe67973d31ee533e6c929)) by Marc Jovaní González
- **api**: add specs for CacheManagerService ([d0dc508](https://github.com/drackp2m/playsetonline/commit/d0dc508e9224d620fbe4faea595cf82402508a68)) by Marc Jovaní González
- **api**: add specs for SemaphoreManagerService ([a53046a](https://github.com/drackp2m/playsetonline/commit/a53046a42de4f1ea7f765bccf7b377364e2d4a66)) by Marc Jovaní González
- **api**: add tests for all exceptions ([7bb6baf](https://github.com/drackp2m/playsetonline/commit/7bb6baf65456abcac1d4cb285a30453fbf11cf30)) by Marc Jovaní González
- **api**: add usecases for bcryptjs methods ([9b4101d](https://github.com/drackp2m/playsetonline/commit/9b4101daa346bb3c05fd37eeb8a1a00ed251b4fa)) by Marc Jovaní González
- **api**: create access and refresh token usecases tests ([5df1690](https://github.com/drackp2m/playsetonline/commit/5df1690e8a74c267f373d9895c95e7a0b1abde25)) by Marc Jovaní González
- **api**: create DateFaker Spec (only should defined and createdAt) ([c04aa76](https://github.com/drackp2m/playsetonline/commit/c04aa76ae85c02ac3e2c807336b49bac0e7aac05)) by Marc Jovaní González
- **api**: create list-game use-case spec, refactor factories ([e4a2796](https://github.com/drackp2m/playsetonline/commit/e4a279654cc6f0305d530205c560324053aa3f06)) by Marc Jovaní González
- **api**: create logout use-case spec ([c8fa27f](https://github.com/drackp2m/playsetonline/commit/c8fa27f3812d14a043438c86a3e3ea488626f2a9)) by Marc Jovaní González
- **api**: create nodeCacheService specs ([8db451f](https://github.com/drackp2m/playsetonline/commit/8db451f5faf1c4c98dfc414d681a3f13c38d1e56)) by Marc Jovaní González
- **api**: create refresh session useCase ([74e9fdb](https://github.com/drackp2m/playsetonline/commit/74e9fdba71609ce1ef6f64dd766442c881274499)) by Marc Jovaní González
- **api**: create register use case ([e54934c](https://github.com/drackp2m/playsetonline/commit/e54934cfd11dc1ed0a361a2eed0d28b694f8f420)) by Marc Jovaní González
- **api**: create set-jwt-token use case ([92dd861](https://github.com/drackp2m/playsetonline/commit/92dd8613c7d781ae5a585e3f635cd049e7cfcaf9)) by Marc Jovaní González
- **api**: editable-date specs ([ff91ab2](https://github.com/drackp2m/playsetonline/commit/ff91ab2e99979262798f88ad0c46ac6fde57b926)) by Marc Jovaní González
- **api**: enable and fix all api tests :) ([e472734](https://github.com/drackp2m/playsetonline/commit/e4727342bde3278494ea266d08f918069d5b2317)) by Marc Jovaní González
- **api**: finish join-game use-case specs ([bf1a70b](https://github.com/drackp2m/playsetonline/commit/bf1a70b7b78867c9d809c230556e09bfc84aec11)) by Marc Jovaní González
- **api**: finish join-game use-case specs ([19924d1](https://github.com/drackp2m/playsetonline/commit/19924d139e60ace8760aadef62af592f6493233b)) by Marc Jovaní González
- **api**: finish tests for extract-cookies-from-raw-hehaders use-case ([3186353](https://github.com/drackp2m/playsetonline/commit/3186353cc5db27724ab748d69d6d51c4ad8ef84b)) by Marc Jovaní González
- **api**: fix AuthServiceSpec ([bd50cf6](https://github.com/drackp2m/playsetonline/commit/bd50cf65235ea015e717c392f3376f3e781b9c96)) by Marc Jovaní González
- **api**: fix login test ([b40121d](https://github.com/drackp2m/playsetonline/commit/b40121daf6227cb4f40af718a357b8484baf02dd)) by Marc Jovaní González
- **api**: fix tests and faker deprecations ([acd073d](https://github.com/drackp2m/playsetonline/commit/acd073dd72532e38106176fc28ba23712862e5b4)) by Marc Jovaní González
- **api**: fix tests with ConfigurationService dep, and salt with length 11 ([6ecf03d](https://github.com/drackp2m/playsetonline/commit/6ecf03d02c54bb358b6d874caf43c3c6a6793aa6)) by Marc Jovaní González
- **api**: fix tests! ([a141524](https://github.com/drackp2m/playsetonline/commit/a141524fa57c3140cf833bc674c3bb864b9ca958)) by Marc Jovaní González
- **api**: fixed tests related with config and jwt tokens ([e1a6c8d](https://github.com/drackp2m/playsetonline/commit/e1a6c8d59788fa8716be99819357c49b57e45037)) by Marc Jovaní González
- **api**: improve appService spec ([d657043](https://github.com/drackp2m/playsetonline/commit/d65704345c0465993a600ab1fa54874caae8f12e)) by Marc Jovaní González
- **api**: improve editable-data spec to user util variable instead new instance ([f081953](https://github.com/drackp2m/playsetonline/commit/f0819530e861066b0cdd4ff3664470c1f5d22441)) by Marc Jovaní González
- **api**: improve integration tests (test-setup and global-setups) ([c7a7280](https://github.com/drackp2m/playsetonline/commit/c7a7280c008da8b23767683a5bd3409a48ca45f8)) by Marc Jovaní González
- **api**: improve login use case specs ([cd2960f](https://github.com/drackp2m/playsetonline/commit/cd2960f8f93595d1705efa947f4d330b88032c33)) by Marc Jovaní González
- **api**: init MikroORM manually in join-game use-case to avoid db connection ([63b332a](https://github.com/drackp2m/playsetonline/commit/63b332affd0e10a18c939b8510e54997d0489a01)) by Marc Jovaní González
- **api**: mock tests with jest-mock-extended ([27b8830](https://github.com/drackp2m/playsetonline/commit/27b8830434445d009f043ad80bb213768c698e80)) by Marc Jovaní González
- **api**: remove MikroORM init on create-game use-case spec ([df4ac82](https://github.com/drackp2m/playsetonline/commit/df4ac82df00a887707a93e5b19eb8a56f3ada9ce)) by Marc Jovaní González
- **api**: simplify jwt-strategy-service spec ([9cf2221](https://github.com/drackp2m/playsetonline/commit/9cf2221c113c0c49ea061927fb0e9f6805d56ec3)) by Marc Jovaní González
- **api**: try to add integration tests, with global jest setup for mikro-orm migrations ([e020f55](https://github.com/drackp2m/playsetonline/commit/e020f55358e7d518c36df704358ca73d56ea8d7f)) by Marc Jovaní González
- **app**: fix app test ([a220cfe](https://github.com/drackp2m/playsetonline/commit/a220cfe7528f46e45ceef8c1b93d68e944893024)) by Marc Jovaní González
- **app**: import currentUserStore to appComponent spec ([c1dd437](https://github.com/drackp2m/playsetonline/commit/c1dd437b222309c0dbb3ea74659c788a63073f05)) by Marc Jovaní González
- **app**: remove title test ([553a85f](https://github.com/drackp2m/playsetonline/commit/553a85f1b1409fc174cb99599810c14557487e90)) by Marc Jovaní González
- **app**: skip app test ([00f2588](https://github.com/drackp2m/playsetonline/commit/00f2588e787c1030c3df4d9126c3705ddfd459cf)) by Marc Jovaní González
- **app**: skip AppComponent spec ([e3139fa](https://github.com/drackp2m/playsetonline/commit/e3139fa9fca40249d9fcc3671792e380fc6bc66e)) by Marc Jovaní González
- enable axios to trust self-signed certificate ([5cc3112](https://github.com/drackp2m/playsetonline/commit/5cc3112cc9609e31fbe038ea213f6236234e5589)) by Marc Jovaní González
- fix /api/app/hello test ([b31d6c3](https://github.com/drackp2m/playsetonline/commit/b31d6c3f4611b50b3d815f5eac42b0ce1fcb1e6d)) by Marc Jovaní González
- fix tests with mock ([4309690](https://github.com/drackp2m/playsetonline/commit/43096904142c98e03bc0cc9dee4c6ae4a2524917)) by Marc Jovaní González

### ♻️ Code Refactoring

- add tslint to use member-ordering rule ([7f00efb](https://github.com/drackp2m/playsetonline/commit/7f00efb0707df194b2ab8d9199e425fc8ee3ed0e)) by Marc Jovaní González
- **api-definitions**: rename lin interfaces to definitions ([0de019c](https://github.com/drackp2m/playsetonline/commit/0de019c7caad6db3ef3e28b6cf6e5650af3cf7e6)) by Marc Jovaní González
- **api-e2e**: try to separate template ([712bf6c](https://github.com/drackp2m/playsetonline/commit/712bf6c27813b325ecd2b1e812343f029b204e65)) by Marc Jovaní González
- **api-sdk,app-e2e,app,api,api-definitions,api-e2e**: use clean nx installation ([2e54ac2](https://github.com/drackp2m/playsetonline/commit/2e54ac233e6d547104b3e2ff4323a9a4e4066e5e)) by Marc Jovaní González
- **api,api-e2e,app,app-e2e,api-definitions**: lint json and gql files ([1d7343e](https://github.com/drackp2m/playsetonline/commit/1d7343e3e855aff10a8d1c9b0a24049d04becb0e)) by Marc Jovaní González
- **api,api-e2e**: set new nx project (api) ([1ba9a83](https://github.com/drackp2m/playsetonline/commit/1ba9a8368cc90fb6286c2c016ebf9e36dfe07947)) by Marc Jovaní González
- **api,app**: add more rules on tsconfig to improve robustness (and fix code) ([6a5dab3](https://github.com/drackp2m/playsetonline/commit/6a5dab31ea607c27c987de4effb5152f43508737)) by Marc Jovaní González
- **api,app**: improve linters and use line length of 100 ([091f73f](https://github.com/drackp2m/playsetonline/commit/091f73f2b46ce95e920e6b209b6583cddde72b3c)) by Marc Jovaní González
- **api,app**: improve ws ([be81d1a](https://github.com/drackp2m/playsetonline/commit/be81d1ae1e7c9ff0c2f1e2ae20885c75e0b692e5)) by Marc Jovaní González
- **api,app**: remove all Enum suffix from imports and types ([418dc3a](https://github.com/drackp2m/playsetonline/commit/418dc3a834d26ab823334b66dbc0053792efa167)) by Marc Jovaní González
- **api**: add domain on CORS error ([5cbb7f1](https://github.com/drackp2m/playsetonline/commit/5cbb7f13bb8bcd80a6f6ee028ca3571be24e7206)) by Marc Jovaní González
- **api**: add modules for complex UseCases ([f24a086](https://github.com/drackp2m/playsetonline/commit/f24a086229d01b741c9adc2fadb2f0b1d34c7391)) by Marc Jovaní González
- **api**: autoload mikro-orm entities with tsNode ([0658bc3](https://github.com/drackp2m/playsetonline/commit/0658bc3c00c78c2ebbf5b212752983d78b74dd6d)) by Marc Jovaní González
- **api**: change module dependencies ([5899727](https://github.com/drackp2m/playsetonline/commit/58997274d7823a2e67302b35a4c302ce876686b1)) by Marc Jovaní González
- **api**: create bootstrap helper ([7ce4e4a](https://github.com/drackp2m/playsetonline/commit/7ce4e4a3de52b4ac36e30eeeaf2bb9a637b5a4c6)) by Marc Jovaní González
- **api**: improve configuration validation and usage ([f909f07](https://github.com/drackp2m/playsetonline/commit/f909f07e114bd4cde2a33517fc47053b33dc8b1c)) by Marc Jovaní González
- **api**: improve tests removing awaits and including extra cheks on exceptions ([699dfe3](https://github.com/drackp2m/playsetonline/commit/699dfe38d062e9abe9734fc3c33b89192bc96ec7)) by Marc Jovaní González
- **api**: refactor all tests (and code) to operate in typescript strict mode ([3398142](https://github.com/drackp2m/playsetonline/commit/339814221506ac1ad10b55e06671c17d4dd8e93d)) by Marc Jovaní González
- **api**: remove console log ([7a5a68c](https://github.com/drackp2m/playsetonline/commit/7a5a68cf7fdfdc87f34bdd2c4183b9ad3ffec198)) by Marc Jovaní González
- **api**: remove console logs on join-game use case, fix commitizen ([5f2e8f0](https://github.com/drackp2m/playsetonline/commit/5f2e8f0f5fc6a647e1683bf3dcce27609ea14d05)) by Marc Jovaní González
- **api**: remove console.log from create-jwt-refresh-token use-case ([308cafb](https://github.com/drackp2m/playsetonline/commit/308cafbadc6369e3305df926ddb6667f3d304050)) by Marc Jovaní González
- **api**: remove index.ts files ([b786ce0](https://github.com/drackp2m/playsetonline/commit/b786ce0d53cf221af0d91ff544c9f3ae39319fb2)) by Marc Jovaní González
- **api**: rename card interface enums ([e34ace8](https://github.com/drackp2m/playsetonline/commit/e34ace84dcea15bb69023c11a73c93984ff954b7)) by Marc Jovaní González
- **api**: rename common to share, add logout endpoint ([841de65](https://github.com/drackp2m/playsetonline/commit/841de656a35d01036e014263d08ad85e64c21dc9)) by Marc Jovaní González
- **api**: transform check-access-token to check-refresh-token use-case ([5383dee](https://github.com/drackp2m/playsetonline/commit/5383dee48154533a45892703c01ae02506a84636)) by Marc Jovaní González
- **api**: transform userService to loginUsecase ([e795a22](https://github.com/drackp2m/playsetonline/commit/e795a2269dd1fe9373fef8a9e2f9054c2a1e2b54)) by Marc Jovaní González
- **api**: try to fix api tests... ([f9ad028](https://github.com/drackp2m/playsetonline/commit/f9ad02846c2c5198347d0a57d27e650a88c15113)) by Marc Jovaní González
- **api**: update env.example, remove Dockerfile database, fix multiple db script ([d49e694](https://github.com/drackp2m/playsetonline/commit/d49e694a94abad2a661f35bf0cab8eb7205aa725)) by Marc Jovaní González
- **api**: use custom ConfigurationService ([114690d](https://github.com/drackp2m/playsetonline/commit/114690d5d71f87fbd46dc7bfb52c89a1ab76fa6c)) by Marc Jovaní González
- **api**: use multiple database to same docker container ([5a35756](https://github.com/drackp2m/playsetonline/commit/5a35756bd5c9b924e7e2852a37be301d25afb3bb)) by Marc Jovaní González
- **app**: angular parser for prettier html and fix all issues ([d6ef97d](https://github.com/drackp2m/playsetonline/commit/d6ef97d33022454806e9ccca8ac5e93395b681cf)) by Marc Jovaní González
- **app**: call to login request by api endpoint ([1b6e821](https://github.com/drackp2m/playsetonline/commit/1b6e8219d30ec2711654bee0d1d7113edae952a4)) by Marc Jovaní González
- **app**: color class names ([9bebff6](https://github.com/drackp2m/playsetonline/commit/9bebff6869ebe4adadfd880260192afcfd3844f8)) by Marc Jovaní González
- **app**: create card shape component ([1c93d71](https://github.com/drackp2m/playsetonline/commit/1c93d71e198c38f057d3fb91a2e7e4a66ef67593)) by Marc Jovaní González
- **app**: css variables in singular ([7d42367](https://github.com/drackp2m/playsetonline/commit/7d4236776ca411c0189074f060de6a0f6f4f2028)) by Marc Jovaní González
- **app**: improve "home" (game) page ([e36ab14](https://github.com/drackp2m/playsetonline/commit/e36ab147631e54ef7df06721fa90f7e519f62c5b)) by Marc Jovaní González
- **app**: improve auth interceptor ([cedcc52](https://github.com/drackp2m/playsetonline/commit/cedcc52ff434cd2947b7c763fe3d0fae3487a9d0)) by Marc Jovaní González
- **app**: improve gaps on grid layouts ([9caef86](https://github.com/drackp2m/playsetonline/commit/9caef866087d5af15efb5e50e12dd2ee3634374c)) by Marc Jovaní González
- **app**: improve glitch effect ([f6290e3](https://github.com/drackp2m/playsetonline/commit/f6290e3065d772ab9b31cddb05fa192abbc2956f)) by Marc Jovaní González
- **app**: improve main layout menu ([e1f3528](https://github.com/drackp2m/playsetonline/commit/e1f35283340f955664a0276ca500424ffd5ee82a)) by Marc Jovaní González
- **app**: improve sdk ([1533670](https://github.com/drackp2m/playsetonline/commit/15336702e6f1a1908522e90dc416c4792d78d472)) by Marc Jovaní González
- **app**: improve shadows ([5ef5837](https://github.com/drackp2m/playsetonline/commit/5ef583776f451e5f0cb9f79b69f9ca1171bd0a56)) by Marc Jovaní González
- **app**: improve signals readability, remove empty scss ([a00d904](https://github.com/drackp2m/playsetonline/commit/a00d904e89873bc6d300bef7c6a998d8577fff89)) by Marc Jovaní González
- **app**: increase 0.5 line with of outlined SVGs ([52476ad](https://github.com/drackp2m/playsetonline/commit/52476ad876a73be2fefd22ec7bdd973fe9dc9f68)) by Marc Jovaní González
- **app**: remove all [ngClass], use [style.xxx] for remove methods on component ([9be53b8](https://github.com/drackp2m/playsetonline/commit/9be53b8b3f9119686d0907f47c45f1704cdd9e44)) by Marc Jovaní González
- **app**: remove all dist ([4c3dec0](https://github.com/drackp2m/playsetonline/commit/4c3dec09415f0ea9900ba2863ab608574f7f49d0)) by Marc Jovaní González
- **app**: remove initial slash on icons in game page (for confetti) ([5aec642](https://github.com/drackp2m/playsetonline/commit/5aec642803283011288b413edcbed5dec6c6e807)) by Marc Jovaní González
- **app**: remove logs and move prevent re-refresh check to auth interceptor ([dbd8a52](https://github.com/drackp2m/playsetonline/commit/dbd8a527b78c3adf70468d8d62b8ce6c39f353fa)) by Marc Jovaní González
- **app**: remove not used imports, add version to "footer" ([7aa9f6b](https://github.com/drackp2m/playsetonline/commit/7aa9f6bc9302990c5573f418a55db7e1d4485929)) by Marc Jovaní González
- **app**: remove old current user store ([63d17cc](https://github.com/drackp2m/playsetonline/commit/63d17cc7bdcdee51eae890759fab0d362121e82d)) by Marc Jovaní González
- **app**: replace set- by app- ([c654d72](https://github.com/drackp2m/playsetonline/commit/c654d72e34114008e881c02925087c87ac8b2a78)) by Marc Jovaní González
- **app**: self close some html tags ([28af23d](https://github.com/drackp2m/playsetonline/commit/28af23d4bed9166aaf361f88c4135613e3f9816f)) by Marc Jovaní González
- **app**: self-close tags, signal inputs with transformations ([d43a899](https://github.com/drackp2m/playsetonline/commit/d43a899f595e62d7b3be84a511e8c544ffd43b2a)) by Marc Jovaní González
- **app**: update all html to zoneless directives ([c1cb5af](https://github.com/drackp2m/playsetonline/commit/c1cb5af05ab2798cab9ff820fb55d60117905200)) by Marc Jovaní González
- **app**: use environment as modern Angular projects ([521c7ff](https://github.com/drackp2m/playsetonline/commit/521c7ff4141cceab51af9432f6a829937dfeb832)) by Marc Jovaní González
- **app**: use signal inputs on card shape component ([a8c369f](https://github.com/drackp2m/playsetonline/commit/a8c369fb7a277c69cbe6d3f38625602bb5e2cb5e)) by Marc Jovaní González
- back to original class names ([3ce3f87](https://github.com/drackp2m/playsetonline/commit/3ce3f872b668038e4b24c3f8ae774068a4949bef)) by Marc Jovaní González
- create method to show messages on HTML ([fe54cd1](https://github.com/drackp2m/playsetonline/commit/fe54cd165e2ddf9bd186d260e86ccab3fcaaab90)) by Marc Jovaní González
- mock with value instead class ([f749f37](https://github.com/drackp2m/playsetonline/commit/f749f374e55b5b67011e663c5b91e4efb6718b67)) by Marc Jovaní González
- remove .env files from git ([aedf2f6](https://github.com/drackp2m/playsetonline/commit/aedf2f6634fb1934d6b78411f8266c51d94f7e2d)) by Marc Jovaní González
- remove jsx and tsx references on eslint files ([4b5480e](https://github.com/drackp2m/playsetonline/commit/4b5480e146b4ad2cda18878e01fb0255946bea6a)) by Marc Jovaní González
- remove jsx and tsx references on eslint files ([c247cb5](https://github.com/drackp2m/playsetonline/commit/c247cb5007864effafede2770d5a6426463acaf8)) by Marc Jovaní González
- remove max lines and lines per function on tests ([f9d7a15](https://github.com/drackp2m/playsetonline/commit/f9d7a15840f7e6d767b4091928d0652c3ea87ed0)) by Marc Jovaní González
- try to fix (again) github actions ([686b5f9](https://github.com/drackp2m/playsetonline/commit/686b5f9edf8a01be9eb9d8cc0780d0573df76bb8)) by Marc Jovaní González
- try to put emji left ([3f0790c](https://github.com/drackp2m/playsetonline/commit/3f0790c011c4c0df4ae45cd705d66326a1efa9a3)) by Marc Jovaní González
- use loops on border radius page ([8e1ca0c](https://github.com/drackp2m/playsetonline/commit/8e1ca0c354ae40bac47d7ee92c0de85d57a26db1)) by Marc Jovaní González
- use ngFor on colors ([8f87d21](https://github.com/drackp2m/playsetonline/commit/8f87d2103bf8c54f31e4e648f700d840813a99ca)) by Marc Jovaní González
- use ngFor on typografies pages ([fb66295](https://github.com/drackp2m/playsetonline/commit/fb66295ae16e40b8deca4260caee9c73de1f8d3e)) by Marc Jovaní González

### 🐛 Bug Fixes

- add check to execute release only if deploy is success ([ae9d19c](https://github.com/drackp2m/playsetonline/commit/ae9d19cec34b413b167a6efb30b33865ac8ea2da)) by Marc Jovaní González
- add is-unique-user-prop to register user request dto ([0c57944](https://github.com/drackp2m/playsetonline/commit/0c579447fe5e728212c22880d8ec977535c418a0)) by Marc Jovaní González
- add MIKRO_ORM_CLI env key to gh-pages ([53c2e4f](https://github.com/drackp2m/playsetonline/commit/53c2e4f4dd7a25542a0762a875974a7ab13829cb)) by Marc Jovaní González
- add types for cookie-parser ([a96af87](https://github.com/drackp2m/playsetonline/commit/a96af8712fef12c8625a7688433222f2649e5a42)) by Marc Jovaní González
- **api-definitions,api-sdk**: restore libs package.json ([7a46a96](https://github.com/drackp2m/playsetonline/commit/7a46a964af3f806c3ca058a5e4aa8463db642e40)) by Marc Jovaní González
- **api,api-e2e**: add fix to restore debug ([1a4961c](https://github.com/drackp2m/playsetonline/commit/1a4961c48976366adeb8f0bb61f04b6184d218ea)) by Marc Jovaní González
- **api,app**: dynamic origin on api CORS and add withCredentials interceptor in app ([320ce1e](https://github.com/drackp2m/playsetonline/commit/320ce1ed1ea57caa893248f9daf248310ffccb7f)) by Marc Jovaní González
- **api,app**: solve more eslint warnings ([7d8ff37](https://github.com/drackp2m/playsetonline/commit/7d8ff3733ca1b4ca1ceab2b5ed5225f6802939f6)) by Marc Jovaní González
- **api**: add cookie expiration date ([983c3e8](https://github.com/drackp2m/playsetonline/commit/983c3e847a8ae8e1771164ee3435b600b85ccee8)) by Marc Jovaní González
- **api**: add cookieDomain environment variable ([42707b9](https://github.com/drackp2m/playsetonline/commit/42707b9527ea0e84fffcac35ee5b70c65759d7d1)) by Marc Jovaní González
- **api**: add Injectable decorator to LoginUsecase ([be6118b](https://github.com/drackp2m/playsetonline/commit/be6118b545ab66936862f00849d85296c8c5ba78)) by Marc Jovaní González
- **api**: add ssh key and cert dynamicaly by API_PREFIX env variable ([a777d07](https://github.com/drackp2m/playsetonline/commit/a777d0768fca478272f0a4cb453890e4613b5014)) by Marc Jovaní González
- **api**: allwo origin when undefined ([86383ed](https://github.com/drackp2m/playsetonline/commit/86383edf8cced072325cccdba689b53121f00929)) by Marc Jovaní González
- **api**: check email on registerUseCase only when request contains it ([5dbe298](https://github.com/drackp2m/playsetonline/commit/5dbe298afb8f98800105604ba1c3690a5559bd29)) by Marc Jovaní González
- **api**: correct fork mikro-orm entityManagers in entityRepositories (thx [@adlacruzes](https://github.com/adlacruzes)) ([b27e281](https://github.com/drackp2m/playsetonline/commit/b27e281637242836be8262557cc878cdce838d03)) by Marc Jovaní González
- **api**: createGame and JoinGame Spec with provider overrided on import module ([827e0ff](https://github.com/drackp2m/playsetonline/commit/827e0ff5c15dc9c44d137db4837e004296e14eae)) by Marc Jovaní González
- **api**: fix specs to use cookieDomain ([97090e5](https://github.com/drackp2m/playsetonline/commit/97090e58cb203ccc4f8b8d1c2df236d3a17a2e27)) by Marc Jovaní González
- **api**: remove async property on getData method of AppController ([3c8caa0](https://github.com/drackp2m/playsetonline/commit/3c8caa05042669e5197f1a4467d15baca23c614c)) by Marc Jovaní González
- **api**: remove port on bootstrap message when environment is production ([059bf03](https://github.com/drackp2m/playsetonline/commit/059bf0382fe4b1748a359ff65bf6a148b67e7667)) by Marc Jovaní González
- **api**: remove port on production cron ([afc6741](https://github.com/drackp2m/playsetonline/commit/afc6741bcf302a33e62e1a40d88aa8782dff587d)) by Marc Jovaní González
- **api**: restore api debug, type GetPingsOutput (still does not work) ([8c085ec](https://github.com/drackp2m/playsetonline/commit/8c085ecf07584f3a1f11241b72597737e5e5caa6)) by Marc Jovaní González
- **api**: set sameSite to 'none' ([59ad795](https://github.com/drackp2m/playsetonline/commit/59ad795d5504556396bf877a9d2671b3bc769f75)) by Marc Jovaní González
- **api**: solved type error on GameParticipantRepository ([f1e604b](https://github.com/drackp2m/playsetonline/commit/f1e604bdea8b2e81b7270038705a7bdb49c43282)) by Marc Jovaní González
- **api**: use persistAndFlush instead insert on game-participant repository ([19a7bb3](https://github.com/drackp2m/playsetonline/commit/19a7bb3a5d957bcb88959ab943fb1783f1f93930)) by Marc Jovaní González
- **app,api**: exceptions and errores ([5d9e6db](https://github.com/drackp2m/playsetonline/commit/5d9e6dba1fa242851c9afa78f50677b947408e1c)) by Marc Jovaní González
- **app**: add apple icon and load src images without initial slash ([87db30b](https://github.com/drackp2m/playsetonline/commit/87db30b827b624bde7c28c67bcf5085f2108de47)) by Marc Jovaní González
- **app**: add certs and proxy configs ([7fff4af](https://github.com/drackp2m/playsetonline/commit/7fff4af03cf6c76d47b9320a7f02a967d5f6b57c)) by Marc Jovaní González
- **app**: add manifest to src ([2f7bcaf](https://github.com/drackp2m/playsetonline/commit/2f7bcaf58ba06c25cefd2a8d81388958092a4f9d)) by Marc Jovaní González
- **app**: add mask with webkit ([4f051d6](https://github.com/drackp2m/playsetonline/commit/4f051d60fcbf680f4492dfa9c762369ad1735a10)) by Marc Jovaní González
- **app**: add maskPath to glitchSvgComponent, only apply effect on focus ([0d83bc6](https://github.com/drackp2m/playsetonline/commit/0d83bc61ea0d085ccc7e9878965cbcb5b7114f57)) by Marc Jovaní González
- **app**: add shortcut to root path in `Sets found` message on game section ([074980d](https://github.com/drackp2m/playsetonline/commit/074980dc303572ba18cc44051ed8f8f8423d1569)) by Marc Jovaní González
- **app**: allow defining card sizes in any dimension and rotation ([cf73c4a](https://github.com/drackp2m/playsetonline/commit/cf73c4a007eb6f755e396a71a160ae0a993d4707)) by Marc Jovaní González
- **app**: back to port 3000 on wss environment url ([4996ee8](https://github.com/drackp2m/playsetonline/commit/4996ee8ccf193bc428d46fc4a6e62023920f0179)) by Marc Jovaní González
- **app**: comment ping ws request to server ([10a46f5](https://github.com/drackp2m/playsetonline/commit/10a46f56abe3e096f51ccfd1bcd035c42f6b14b6)) by Marc Jovaní González
- **app**: enable debug on Angular with SSL ([e7f20bb](https://github.com/drackp2m/playsetonline/commit/e7f20bbda8ab1b6c4784edb4c2dc806f7ce406ae)) by Marc Jovaní González
- **app**: finish authInterceptor logic ([78899ab](https://github.com/drackp2m/playsetonline/commit/78899ab4442903a6ac010aca9c07fc937fe5ac51)) by Marc Jovaní González
- **app**: firefox debugger works, zone.js removed, update deps and husky hooks ([50c8212](https://github.com/drackp2m/playsetonline/commit/50c82125a6fbc65431ee91c7eebe628ed9c4458e)) by Marc Jovaní González
- **app**: fix problems with currentUserStore, migrate to new eslint config ([e6d37a4](https://github.com/drackp2m/playsetonline/commit/e6d37a4992fa0853b8450b61b82b01823dc05391)) by Marc Jovaní González
- **app**: fix shape height ([629289d](https://github.com/drackp2m/playsetonline/commit/629289d22c24f6265638c294017d3a3794cbb0dc)) by Marc Jovaní González
- **app**: highlight now works fine ([ea404b6](https://github.com/drackp2m/playsetonline/commit/ea404b6381ee3b10410f33d1c9aa6db1b86bd177)) by Marc Jovaní González
- **app**: improve hability to rotate card shape component ([3edef16](https://github.com/drackp2m/playsetonline/commit/3edef16835c562a4f3176726d46a91bb554fb960)) by Marc Jovaní González
- **app**: improve order of mixins in scss loops ([1c07bc8](https://github.com/drackp2m/playsetonline/commit/1c07bc84a31576614a8e38ce5ae84b9c17744fab)) by Marc Jovaní González
- **app**: make register and login forms responsive ([e777b7e](https://github.com/drackp2m/playsetonline/commit/e777b7ee93f60deaba6453d9600c1a134d7eccfa)) by Marc Jovaní González
- **app**: make responsive sections border-radius, shadow and spacing ([814ac00](https://github.com/drackp2m/playsetonline/commit/814ac00a8ef1e5219a13bb74a3b8fb699a75f5af)) by Marc Jovaní González
- **app**: mock LoginGQL ([075d5da](https://github.com/drackp2m/playsetonline/commit/075d5daf8352d70209ed12a78c9f80bb0c771c6e)) by Marc Jovaní González
- **app**: remove error of logout button ([a9872eb](https://github.com/drackp2m/playsetonline/commit/a9872eb48aef2e613d7632270f72fbfcacfd75ea)) by Marc Jovaní González
- **app**: remove not used injection ([e9afa79](https://github.com/drackp2m/playsetonline/commit/e9afa79f66137cdf0dbd8c805363d7afd1aec28a)) by Marc Jovaní González
- **app**: remove ultra cheats on init ([7a9a8de](https://github.com/drackp2m/playsetonline/commit/7a9a8de7cafe5fecc97cd54a21aa2e4c2aab6d3b)) by Marc Jovaní González
- **app**: replace more set- with app- :S ([20c297d](https://github.com/drackp2m/playsetonline/commit/20c297d0fce2868356a5ce32414c366cc434a803)) by Marc Jovaní González
- **app**: replace set-_ to app-_ on scss files ([a4482ea](https://github.com/drackp2m/playsetonline/commit/a4482eae9b84832f8df757287905b42f5dec67c5)) by Marc Jovaní González
- **app**: solve some bugs ([f127b6f](https://github.com/drackp2m/playsetonline/commit/f127b6fd0558a772ee54d1b39f940e7a9b39f793)) by Marc Jovaní González
- **app**: solve won component height ([a3a6740](https://github.com/drackp2m/playsetonline/commit/a3a6740cc3a399453fdd82582472f0bbb0d741fe)) by Marc Jovaní González
- **app**: solved the problem with authInterceptor making requests without info ([74ab2f6](https://github.com/drackp2m/playsetonline/commit/74ab2f61c76915a20cc1638e40b09e9381073545)) by Marc Jovaní González
- **app**: try to load typography relatively ([0844e85](https://github.com/drackp2m/playsetonline/commit/0844e8521cd3b446e911dc60d1d33d0199045544)) by Marc Jovaní González
- **app**: try to use proxy ([2ea429f](https://github.com/drackp2m/playsetonline/commit/2ea429f4b19bc00b50888b0bb037a54537c105cb)) by Marc Jovaní González
- **app**: update add card message when there are Sets on the table ([3c72b0d](https://github.com/drackp2m/playsetonline/commit/3c72b0d8f0be03d68adf1cd831f163668626e7e0)) by Marc Jovaní González
- **app**: update deps and add navigation with hash on Angular ([3859d65](https://github.com/drackp2m/playsetonline/commit/3859d654413aaa6e48fd8915f7ddf7b5d8bea574)) by Marc Jovaní González
- **app**: upgrade apple icon, add apple app capable to true ([b9c6fab](https://github.com/drackp2m/playsetonline/commit/b9c6fab86b81ebb6f456ffc270f026bac16229e0)) by Marc Jovaní González
- **app**: user api.playsetonline.com on environment ([07ca554](https://github.com/drackp2m/playsetonline/commit/07ca5549ab78dbe9387d2e429fcf80b12b352c65)) by Marc Jovaní González
- **app**: vertical cards now look good in Safari ([4c6f709](https://github.com/drackp2m/playsetonline/commit/4c6f709d40085033a636180d0b487e0c55910cd1)) by Marc Jovaní González
- **app**: wip: try to rebuild old project ([f2d4023](https://github.com/drackp2m/playsetonline/commit/f2d4023de21372c818172934e23835207bd15f02)) by Marc Jovaní González
- devcontainer docker-compose example service name ([b9837e4](https://github.com/drackp2m/playsetonline/commit/b9837e4b790e370f29a73f7a1c457788171025b5)) by Marc Jovaní González
- enable romantic-release-bot <3 ([ec9f9fe](https://github.com/drackp2m/playsetonline/commit/ec9f9fef866666e1b26d04bc6c2589b1d284ebc1)) by Marc Jovaní González
- enable romantic-release-bot <3 ([1c6a31f](https://github.com/drackp2m/playsetonline/commit/1c6a31ff13f81beeafb7ec94a8e8ce7571f0d7a1)) by Marc Jovaní González
- enable romantic-release-bot <3 ([6ab26ab](https://github.com/drackp2m/playsetonline/commit/6ab26ab3d486d22217dc082cdf2edc9301fb514f)) by Marc Jovaní González
- enable to use cert on database connection ([860e85f](https://github.com/drackp2m/playsetonline/commit/860e85f411353a54ff2784b0c1de1adb0dcfb3a8)) by Marc Jovaní González
- fix app tests and update test package command for run all tests ([22cf05c](https://github.com/drackp2m/playsetonline/commit/22cf05cc8c67d8df5f1cf97ce5eea37dc41f34f9)) by Marc Jovaní González
- fix emoji left? ([d219658](https://github.com/drackp2m/playsetonline/commit/d219658c0546072898af41060410341d60fec249)) by Marc Jovaní González
- github actions from main ([65fc8b4](https://github.com/drackp2m/playsetonline/commit/65fc8b4b5fa0d471e0f421da280e948fafebd9c0)) by Marc Jovaní González
- improve tsconfig's to run MikroOrm migrations ([a0930ce](https://github.com/drackp2m/playsetonline/commit/a0930ce2d8f3e36dc50a57e213f49591383a2838)) by Marc Jovaní González
- release not needs any other job ([91a6f5f](https://github.com/drackp2m/playsetonline/commit/91a6f5fdb948f9a9023e521bf94e3ab0ea6d3818)) by Marc Jovaní González
- remove release configuration from package.json, rename release file ([469df13](https://github.com/drackp2m/playsetonline/commit/469df134b79943a94e3120fa5f08cc05613c35f3)) by Marc Jovaní González
- remove release from deploy ([80bcfdf](https://github.com/drackp2m/playsetonline/commit/80bcfdf3231fc00eafb311fc8a1c0a23b0c74f6e)) by Marc Jovaní González
- remove slash from url ([5a276b1](https://github.com/drackp2m/playsetonline/commit/5a276b17048e18e178d8eb117b25e642f54a71f4)) by Marc Jovaní González
- rename docker stages ([14f4008](https://github.com/drackp2m/playsetonline/commit/14f40087feee0430179280654903c9dbd2b4e639)) by Marc Jovaní González
- rename docker stages ([424ea30](https://github.com/drackp2m/playsetonline/commit/424ea30350c7e77545fc66f496a3c8f4839eda88)) by Marc Jovaní González
- rename workflows and execute release after deploy finish ([b3c4875](https://github.com/drackp2m/playsetonline/commit/b3c48754ddabd4b844bdfb905dcd4de213c40f6e)) by Marc Jovaní González
- try to fix release on ci ([4dbbe44](https://github.com/drackp2m/playsetonline/commit/4dbbe44644c1216a0566144d0e5ac89a7d8dfa87)) by Marc Jovaní González
- update package-lock ([b0a6aa5](https://github.com/drackp2m/playsetonline/commit/b0a6aa56b387ea36c3ce79853452a6a35e3c9411)) by Marc Jovaní González
- update yarn.lock ([77d4748](https://github.com/drackp2m/playsetonline/commit/77d474820390d57dcbd9380e240579c6125646a2)) by Marc Jovaní González

### 📚 Documentation

- update README ([be42334](https://github.com/drackp2m/playsetonline/commit/be42334ef4b9c7695d2929fd4f686a15d1994126)) by Marc Jovaní González

### 💻 Continuous Integration

- add cache with yarn ([09d0f1d](https://github.com/drackp2m/playsetonline/commit/09d0f1d426a94a3c0ecf704eb702e644d7cb2f5f)) by Marc Jovaní González
- add deps again and fix typography asset load ([a46df2f](https://github.com/drackp2m/playsetonline/commit/a46df2f9a8f8c32ef4745dbae3eebb34e912572f)) by Marc Jovaní González
- add permissions and pages setup ([cf59d6b](https://github.com/drackp2m/playsetonline/commit/cf59d6b95052334eaec9a0aa2c059ce4b133926a)) by Marc Jovaní González
- add quotes (again) ([b848d2a](https://github.com/drackp2m/playsetonline/commit/b848d2a1b2e6c800b0836e782d30607cb0b6ec9d)) by Marc Jovaní González
- add quotes to build url ([84f1c63](https://github.com/drackp2m/playsetonline/commit/84f1c6396815d9e38d0bd643245624c3e1f29dd2)) by Marc Jovaní González
- add semantic release config file ([33c45e4](https://github.com/drackp2m/playsetonline/commit/33c45e4fc51332a26896011b0ffded87d02faebe)) by Marc Jovaní González
- add slash at end T_T ([1ba4725](https://github.com/drackp2m/playsetonline/commit/1ba4725f1747cf36945327bcd263ad37110944ad)) by Marc Jovaní González
- add tests to ci ([f45945b](https://github.com/drackp2m/playsetonline/commit/f45945bab52d59a306131192f0240c650a50558e)) by Marc Jovaní González
- **app**: add /browser to build upload artifact ([a2827fd](https://github.com/drackp2m/playsetonline/commit/a2827fdb6f5b7b0c7000403466acd469e1dd23f3)) by Marc Jovaní González
- **app**: build using yarn ([bd78515](https://github.com/drackp2m/playsetonline/commit/bd785158d5d9da8337a9275343e8ea09d54de0f5)) by Marc Jovaní González
- **app**: try to run nx from node_modules ([5cb51cb](https://github.com/drackp2m/playsetonline/commit/5cb51cb289d4fb99382011805fb54144ebace56f)) by Marc Jovaní González
- **app**: update yarn lock ([32e1f9b](https://github.com/drackp2m/playsetonline/commit/32e1f9b3c01b355fae48ef9b0dd909685bd87b00)) by Marc Jovaní González
- change base href of app build ([c3c20f8](https://github.com/drackp2m/playsetonline/commit/c3c20f8b80a8b7627622ab46e8ad7f42c6244fa5)) by Marc Jovaní González
- change trigger to merge on main branch ([94a324b](https://github.com/drackp2m/playsetonline/commit/94a324b5cd33d20a138f1c5e343db22d521fe6a0)) by Marc Jovaní González
- check semantic-release notes on github ([d698bfe](https://github.com/drackp2m/playsetonline/commit/d698bfec0b835d374992ef69d80fc6b2b4b6afc7)) by Marc Jovaní González
- fix github pages commands ([873552c](https://github.com/drackp2m/playsetonline/commit/873552c397f66fdc5291a2037aac4ffdb56b6abb)) by Marc Jovaní González
- fix step name =) ([dfdd2df](https://github.com/drackp2m/playsetonline/commit/dfdd2dfa772a3f6eb1fb95a74f4ac22b94dc0a04)) by Marc Jovaní González
- remove deps and add install to other steps ([83e6b44](https://github.com/drackp2m/playsetonline/commit/83e6b44f8839428abaa85a060a4e120d713bed2d)) by Marc Jovaní González
- remove deps on deploy (again) ([5dc9c9e](https://github.com/drackp2m/playsetonline/commit/5dc9c9e0fb87fa986826d1e0ab4f23c3eaa2efaf)) by Marc Jovaní González
- test github actions ([841804e](https://github.com/drackp2m/playsetonline/commit/841804ea9dcfd72922bd918a75e366d6e7b6d1d8)) by Marc Jovaní González
- try to fix ci ([3a5d180](https://github.com/drackp2m/playsetonline/commit/3a5d1802e137cabe010df81a3df3bbb4729ab741)) by Marc Jovaní González
- try to lauch deploy on push to main ([5b2151f](https://github.com/drackp2m/playsetonline/commit/5b2151fcb2badf928c877dca329b8f7e860acb36)) by Marc Jovaní González
- try to use base_url ([176fb2b](https://github.com/drackp2m/playsetonline/commit/176fb2b6d3b9064d15390cbc4586bab25372527d)) by Marc Jovaní González
- try to use new account to semantic release ([a6792b1](https://github.com/drackp2m/playsetonline/commit/a6792b1f15a89e10a1e8cad1ff77f26aec978bf0)) by Marc Jovaní González
- try to use npm ([1472be0](https://github.com/drackp2m/playsetonline/commit/1472be0db506f0345196dba4391d4af11baa30ec)) by Marc Jovaní González
- try to use npm ([be85e93](https://github.com/drackp2m/playsetonline/commit/be85e93da614e41de18aded519aacc0b5324a5eb)) by Marc Jovaní González
- update main branch changes detection ([a324d3e](https://github.com/drackp2m/playsetonline/commit/a324d3e4fe014ef1b3e96005e89eb556e62d7cb9)) by Marc Jovaní González
- use package-lock again, copy dist to src ([63cf611](https://github.com/drackp2m/playsetonline/commit/63cf6118267cdb70c1d44c49884396c698bcc4aa)) by Marc Jovaní González
- use page url instead base url ([214d2b4](https://github.com/drackp2m/playsetonline/commit/214d2b49e61c68508158b56142f1d8e70b7ff5ad)) by Marc Jovaní González

### 🎒 Chores

- add "run" to Dockerfile npm commands ([6294fe6](https://github.com/drackp2m/playsetonline/commit/6294fe60cde4701b051e9fece58392a5fb061fcd)) by Marc Jovaní González
- add comment ([d52721f](https://github.com/drackp2m/playsetonline/commit/d52721f7548c6dc634575c45bd595cbfa2bb46c6)) by Marc Jovaní González
- add npm cache to github pages, improve package commands, fix nx many ([1bd8706](https://github.com/drackp2m/playsetonline/commit/1bd870690a679acc79be7821ebc65aa74d53a9f2)) by Marc Jovaní González
- add repository on package.json ([59cffe4](https://github.com/drackp2m/playsetonline/commit/59cffe41021b25e88b6d6c79b27c40d68693f31a)) by Marc Jovaní González
- add slash to base href ([9842f1b](https://github.com/drackp2m/playsetonline/commit/9842f1be253ce27a1b6b938ec38281146be53caa)) by Marc Jovaní González
- add version and footer to release notes ([6c4ae34](https://github.com/drackp2m/playsetonline/commit/6c4ae3412fbc609652a81649037b7e70710ffc90)) by Marc Jovaní González
- **api,api-e2e,app,app-e2e**: enable eslint rules ([7a74e7f](https://github.com/drackp2m/playsetonline/commit/7a74e7f1a7e631bd4911fd145606f499c04eea32)) by Marc Jovaní González
- **api,app**: update deps ([902dfc2](https://github.com/drackp2m/playsetonline/commit/902dfc2274a735a67399d6db58740716ded62b48)) by Marc Jovaní González
- **api,app**: upgrade nx and other deps ([46689a0](https://github.com/drackp2m/playsetonline/commit/46689a03693449bf9d0b3788ed88062057ebbcad)) by Marc Jovaní González
- **app**: artifacts to v3 again ([5d517a9](https://github.com/drackp2m/playsetonline/commit/5d517a9b07528b33375a447a9c12d62e9fcfdbf0)) by Marc Jovaní González
- **app**: back to ubuntu-latest ([72d6aaa](https://github.com/drackp2m/playsetonline/commit/72d6aaa220a411ff9cc42d227a189cb2d7261a37)) by Marc Jovaní González
- **app**: build app on dist/set-online ([88495fc](https://github.com/drackp2m/playsetonline/commit/88495fc41763a53237d5fbea3b209f4c04ea0277)) by Marc Jovaní González
- **app**: build to docs ([0585734](https://github.com/drackp2m/playsetonline/commit/058573490c7de12e400f78093b446425181a392e)) by Marc Jovaní González
- **app**: configure mikro-orm for autoload entities ([03bdfae](https://github.com/drackp2m/playsetonline/commit/03bdfae57c5289b38514d1a0e6a2feccc2b9f1d6)) by Marc Jovaní González
- **app**: ignore dist app to try github pages ([df18734](https://github.com/drackp2m/playsetonline/commit/df187341635b7921347e253a42766bf87260dee5)) by Marc Jovaní González
- **app**: increase budgets component style maximumError to 8kb ([f7c4b8c](https://github.com/drackp2m/playsetonline/commit/f7c4b8c993b067e8c8d0a401e63df92014fd3de8)) by Marc Jovaní González
- **app**: try actions v4 ([3428a56](https://github.com/drackp2m/playsetonline/commit/3428a560525d19b04e04873bc645d2834cd1d48b)) by Marc Jovaní González
- **app**: upgrade all deploy steps to v3 ([2c1fbb9](https://github.com/drackp2m/playsetonline/commit/2c1fbb9df0c918539f4675bcb02abfa15aa0603c)) by Marc Jovaní González
- back to env port on main.ts (api) ([44a76f2](https://github.com/drackp2m/playsetonline/commit/44a76f2e8838ee52615437cde1532bd03ce53219)) by Marc Jovaní González
- back to run all tests in gh-pages action ([ab60e59](https://github.com/drackp2m/playsetonline/commit/ab60e59df0fc547813b8d8e3fc6a927e80433c7b)) by Marc Jovaní González
- chmod with sudo ([19a4bc4](https://github.com/drackp2m/playsetonline/commit/19a4bc4bc298287613a0f10d21b77551dc68f4a7)) by Marc Jovaní González
- create Dockerfile for production ([8d744ea](https://github.com/drackp2m/playsetonline/commit/8d744eac0f1ce771e7c090f0c8f66b3c85dd6f24)) by Marc Jovaní González
- enable lint on html files ([cf4d17c](https://github.com/drackp2m/playsetonline/commit/cf4d17cba84f5062bbf79fadfec8066ad543dded)) by Marc Jovaní González
- expose port 10_000 ([e20241c](https://github.com/drackp2m/playsetonline/commit/e20241c81860c5d26dd237a8b02f8fed711cee12)) by Marc Jovaní González
- fix devcontainer and update nx to 19.8 ([0e1c5ff](https://github.com/drackp2m/playsetonline/commit/0e1c5ff9f33c7e1daf79a7985867d4f27582c15a)) by Marc Jovaní González
- fix eslint config for all projects ([f108c2c](https://github.com/drackp2m/playsetonline/commit/f108c2c4e5672bb2153a673e7a86ed3b2a80f1d6)) by Marc Jovaní González
- fix yarn lock ([78dcfc6](https://github.com/drackp2m/playsetonline/commit/78dcfc69654a07e36b47e3b914fe60ca3b07ba20)) by Marc Jovaní González
- gh-pages add permissions to write ([efddb84](https://github.com/drackp2m/playsetonline/commit/efddb841f6199260392c428dca9ec155be1826d9)) by Marc Jovaní González
- ignore definitions file ([56aac5f](https://github.com/drackp2m/playsetonline/commit/56aac5f93368a436101f0dcf3ebf33b9a60e7163)) by Marc Jovaní González
- ignore devcontainer docker compose, and remove from git ([fdf8a7f](https://github.com/drackp2m/playsetonline/commit/fdf8a7f13205af7c599134ae008ae647531914fd)) by Marc Jovaní González
- improve production port debug and dockerfile with dynamic port expose ([20b0ad6](https://github.com/drackp2m/playsetonline/commit/20b0ad6e0f24cab7e83012c057103e952a4bfe83)) by Marc Jovaní González
- improve production port debug and dockerfile with dynamic port expose ([ac71822](https://github.com/drackp2m/playsetonline/commit/ac71822a767652fda0df96f891ef6c4275490023)) by Marc Jovaní González
- improve release commit message and skip this on husky ([69e4949](https://github.com/drackp2m/playsetonline/commit/69e4949af5c34eff957766a0cfafd0274ac50026)) by Marc Jovaní González
- migrate nx ([69bc159](https://github.com/drackp2m/playsetonline/commit/69bc159394258a7bfa68c5c638f865d2ebae9159)) by Marc Jovaní González
- migrate nx to 16.5.2 ([df3732f](https://github.com/drackp2m/playsetonline/commit/df3732f698e922dcb7749481e4a97064d7c8b8fd)) by Marc Jovaní González
- nx to 18.1.1 ([1ca5ba6](https://github.com/drackp2m/playsetonline/commit/1ca5ba6abfee5fb65d1ac53616e0c572869a15ba)) by Marc Jovaní González
- nx to 18.1.1 ([0316cf1](https://github.com/drackp2m/playsetonline/commit/0316cf15852eec330e87235015442c5525d5d1df)) by Marc Jovaní González
- prepare devcontainer ([9a1a048](https://github.com/drackp2m/playsetonline/commit/9a1a0482df8e3a047f9df188a565391d9015f2b1)) by Marc Jovaní González
- reduce max commit chars to 70 ([1684894](https://github.com/drackp2m/playsetonline/commit/16848944effb5d522e2e33e6e10fe0d168f4432d)) by Marc Jovaní González
- **release**: 0.0.1 [skip ci] ([7fed677](https://github.com/drackp2m/playsetonline/commit/7fed6774dc34bf1989423f0e788a137101c25b2e)) by romantic-release-bot
- **release**: 0.0.1 [skip ci] ([2867f03](https://github.com/drackp2m/playsetonline/commit/2867f03625ba0f0edd253ab5f9c1a44ed7648216)) by drackp2m-semantic-release-bot
- **release**: 0.1.0 [skip ci] ([cf9cf96](https://github.com/drackp2m/playsetonline/commit/cf9cf969a01889ceca16ffd664309fe3deb12b02)) by Marc Jovaní González
- **release**: 0.1.0 [skip ci] ([f8d0006](https://github.com/drackp2m/playsetonline/commit/f8d00065fd33c2017478a455287e9bbf28b85527)) by romantic-release-bot
- **release**: 0.1.1 [skip ci] ([7ae881e](https://github.com/drackp2m/playsetonline/commit/7ae881e13dd77a2b06c9ce63369674c70c60f2ac)) by romantic-release-bot
- **release**: v0.0.1 [skip ci] ([9e3a864](https://github.com/drackp2m/playsetonline/commit/9e3a864d8bb77c6381165e3775b305c04b1a1817)) by Marc Jovaní González
- remove .env ([353e329](https://github.com/drackp2m/playsetonline/commit/353e329bf069576eafe65f94aa041ebdbe7bfbdf)) by Marc Jovaní González
- remove cache from gh-pages node setup ([294778b](https://github.com/drackp2m/playsetonline/commit/294778b526b0674626ec7ce892480352f6e47434)) by Marc Jovaní González
- remove chmod on .env ([d8121e1](https://github.com/drackp2m/playsetonline/commit/d8121e14df0c9998fb9b90eb474b420c244a94e3)) by Marc Jovaní González
- remove copy of readme and remove prettier in html ([5b97df0](https://github.com/drackp2m/playsetonline/commit/5b97df08089aebb03831abed0ef79a434cfef4c0)) by Marc Jovaní González
- remove debug on lint-staged ([06e34fd](https://github.com/drackp2m/playsetonline/commit/06e34fd24a3847409535ea94bf42728dcf18bdbd)) by Marc Jovaní González
- remove host 0.0.0.0 ([217c884](https://github.com/drackp2m/playsetonline/commit/217c884893c3ef8ef4a74b62e6addfe850882ecb)) by Marc Jovaní González
- remove host on main api bootstrap ([33fb7f3](https://github.com/drackp2m/playsetonline/commit/33fb7f31204a55a7ca1c4eb4bdf2eb2ca72b01a1)) by Marc Jovaní González
- remove husky prepare command ([011d7c6](https://github.com/drackp2m/playsetonline/commit/011d7c6c96dfb05d6de05920577a1369f8f04e0e)) by Marc Jovaní González
- remove hyphwn ([2cfc015](https://github.com/drackp2m/playsetonline/commit/2cfc015c27378ebeeb5b0c4c90ada9d0a2919029)) by Marc Jovaní González
- remove nx workspace data from git ([5514116](https://github.com/drackp2m/playsetonline/commit/5514116ce7f9483d3210469ad6f94f91905bb4c4)) by Marc Jovaní González
- remove scss replaces :( ([54ce1ef](https://github.com/drackp2m/playsetonline/commit/54ce1ef4261a73976fa6c0c89e253864caeb1507)) by Marc Jovaní González
- remove unneeded ocnfiguration of settings.json ([89d9a35](https://github.com/drackp2m/playsetonline/commit/89d9a3557b4d29269fb6bb9b912e9da7954764dc)) by Marc Jovaní González
- run install with npm ci ([a867b64](https://github.com/drackp2m/playsetonline/commit/a867b6429e8e77cc376806b4d84ef1a85bdb73ea)) by Marc Jovaní González
- run ls -la and id ([6d9e261](https://github.com/drackp2m/playsetonline/commit/6d9e26136fc7d6214d1fc3893fbd0e30eae26864)) by Marc Jovaní González
- run only app tests ([07fbe72](https://github.com/drackp2m/playsetonline/commit/07fbe727a57afcde43970feca23e4adc17cc383c)) by Marc Jovaní González
- set api url to localhost and update Angular prod backend url ([b9af53d](https://github.com/drackp2m/playsetonline/commit/b9af53d22500b4e60195d3b29957228532a087fd)) by Marc Jovaní González
- test new deploy ([5f231ae](https://github.com/drackp2m/playsetonline/commit/5f231ae467411849a8be248bf920bd532bc57ab6)) by Marc Jovaní González
- try new deploy ([ac6414c](https://github.com/drackp2m/playsetonline/commit/ac6414c88f8081d7608331a99264f5259e3020bf)) by Marc Jovaní González
- try to add mikro-orm environment variables ([3001bfb](https://github.com/drackp2m/playsetonline/commit/3001bfb318330f6238d2eb1122009237b3737fae)) by Marc Jovaní González
- try to add permissions to .env file (of Render) ([4aa29e7](https://github.com/drackp2m/playsetonline/commit/4aa29e7fb171e9e67987e694cc4a2c51962df06e)) by Marc Jovaní González
- try to back to npm ([dfd5c31](https://github.com/drackp2m/playsetonline/commit/dfd5c3166af96aa29b4d5b2094cbdbcb5fba7345)) by Marc Jovaní González
- try to execute prod docker commands with yarn ([f091863](https://github.com/drackp2m/playsetonline/commit/f0918636805a702cabed707ecebcc29fac2583f5)) by Marc Jovaní González
- try to fix github actions ([d26f7cb](https://github.com/drackp2m/playsetonline/commit/d26f7cb3dfa5ea522d10601c9306d86c8c24d50c)) by Marc Jovaní González
- try to fix path from artifacts upload ([ca08a5f](https://github.com/drackp2m/playsetonline/commit/ca08a5f9c02f6caa8c467a4422c1cfe1992a9215)) by Marc Jovaní González
- try to restore type-enum rule on commitizen ([a743fba](https://github.com/drackp2m/playsetonline/commit/a743fba763d31b638c90ffb8725a6fad7689eab5)) by Marc Jovaní González
- try to use alpine by Carlos Aragón ([8d7b74c](https://github.com/drackp2m/playsetonline/commit/8d7b74c95679d1cbfcaf47d63cd214e8b425080c)) by Marc Jovaní González
- try to use semantic release (again) ([7d3c6d2](https://github.com/drackp2m/playsetonline/commit/7d3c6d2c5ecf70bad488c5d4ed20380903478b04)) by Marc Jovaní González
- update .env.example ([5b86619](https://github.com/drackp2m/playsetonline/commit/5b86619eecd2b5da8c1c15293f7953378fc0b7d2)) by Marc Jovaní González
- update all dependencies ([beff13b](https://github.com/drackp2m/playsetonline/commit/beff13b74c89f9b5efc4d1b5ccac52149dbf5de5)) by Marc Jovaní González
- update all deps ([2d7a78a](https://github.com/drackp2m/playsetonline/commit/2d7a78a253acadb009180a7b5318537f861d10a3)) by Marc Jovaní González
- update all deps to latest compatible version ([89262a7](https://github.com/drackp2m/playsetonline/commit/89262a7714096d1d1e2e13903e601feab0898901)) by Marc Jovaní González
- update all deps to latest version (except typescript) ([34a3e21](https://github.com/drackp2m/playsetonline/commit/34a3e2189a5b6d5813e57fe632cbe4b46d5c02e8)) by Marc Jovaní González
- update deploy to node 18 ([a3c62eb](https://github.com/drackp2m/playsetonline/commit/a3c62ebd748b633486954f76004d707abc069dea)) by Marc Jovaní González
- update deps ([6d5c417](https://github.com/drackp2m/playsetonline/commit/6d5c4175a2a88e8153b051582ed7421824f91a88)) by Marc Jovaní González
- update docker node image, add jest global setup to unit tests ([90c37a1](https://github.com/drackp2m/playsetonline/commit/90c37a1c063ce90704fbbe441f315bbda3d67045)) by Marc Jovaní González
- update Dockerfile ([55f2be2](https://github.com/drackp2m/playsetonline/commit/55f2be28e32ebeff105b79acad293e6810da8d67)) by Marc Jovaní González
- update Dockerfile ([5f5cf63](https://github.com/drackp2m/playsetonline/commit/5f5cf63749ce309b5b394bf5879a2e261bfba9b8)) by Marc Jovaní González
- update Dockerfile to test build on Render ([186c7ae](https://github.com/drackp2m/playsetonline/commit/186c7aea5f59503530815c0d9eeacf53308eae2b)) by Marc Jovaní González
- update nx to 19.6.4 ([4ad3eb5](https://github.com/drackp2m/playsetonline/commit/4ad3eb5d50a455989b175f7332aaf855a4e72a75)) by Marc Jovaní González
- update nx to 19.6.4 ([522e49d](https://github.com/drackp2m/playsetonline/commit/522e49d4f6bd9223cbdae07adc942d80b524c57a)) by Marc Jovaní González
- update package-lock ([6de8635](https://github.com/drackp2m/playsetonline/commit/6de863520332bf083920629d5238dba3e251c50b)) by Marc Jovaní González
- upgrade all deps to last version (except ts-morph) ([65942dd](https://github.com/drackp2m/playsetonline/commit/65942dd308d92231c5c0b2aedf343fa7a1eba8f6)) by Marc Jovaní González
- upgrade deps ([55fd3c5](https://github.com/drackp2m/playsetonline/commit/55fd3c53ecdb55221801e51dba3dd613e12f8f1f)) by Marc Jovaní González
- upgrade deps ([419b44f](https://github.com/drackp2m/playsetonline/commit/419b44f287b9be16a7262da8e5e49c7edd943f48)) by Marc Jovaní González
- upgrade deps ([0459936](https://github.com/drackp2m/playsetonline/commit/0459936c2e0abde9f6277f1bf5686130538c54a6)) by Marc Jovaní González
- upgrade deps ([ed81449](https://github.com/drackp2m/playsetonline/commit/ed81449520678f7e6573208701bd2e377b059da3)) by Marc Jovaní González
- upgrade deps ([4409917](https://github.com/drackp2m/playsetonline/commit/44099175bf0cd9e3b513ed154afc9b4d75ad5056)) by Marc Jovaní González
- upgrade deps ([5be53c5](https://github.com/drackp2m/playsetonline/commit/5be53c51e052387dd122bc2984987376304de620)) by Marc Jovaní González
- upgrade deps (except typescript 5.1.6 => 5.2.2 ([5e61347](https://github.com/drackp2m/playsetonline/commit/5e613476a8103ec0e46241e0dceca43cf4f01b4e)) by Marc Jovaní González
- upgrade deps and add all env keys to gh-pages ([d5cf65f](https://github.com/drackp2m/playsetonline/commit/d5cf65f9135127244741584398772663a3d5c5e0)) by Marc Jovaní González
- upgrade deps to last version ([218ed70](https://github.com/drackp2m/playsetonline/commit/218ed70bcd806f971f85201b4e566689505a3ae2)) by Marc Jovaní González
- upgrade node to 22.7 ([0b3326e](https://github.com/drackp2m/playsetonline/commit/0b3326e1c6dcce4718b3b3ae20e900d0aad1d80e)) by Marc Jovaní González
- upgrade npm deps ([adccb8d](https://github.com/drackp2m/playsetonline/commit/adccb8d4ebb285955269893b53acabf57261a651)) by Marc Jovaní González
- upgrade nx from 19.4.1 to 19.5.0 ([aaba67a](https://github.com/drackp2m/playsetonline/commit/aaba67a857571237f6e6b8819ba2a3e9942c1465)) by Marc Jovaní González
- upgrade nx to 18.1.3 and add node-cache dep ([dbf4ced](https://github.com/drackp2m/playsetonline/commit/dbf4cedb1ee1505737e2f5d9b04da5dc53072402)) by Marc Jovaní González
- upgrade nx to 20.0.1 ([ad762cf](https://github.com/drackp2m/playsetonline/commit/ad762cffd12d89e3049200617824ecbdfd1feba6)) by Marc Jovaní González
- upgrade nx version ([b41e186](https://github.com/drackp2m/playsetonline/commit/b41e186d1957c3c85394154e8246ea6fe3d3c7b6)) by Marc Jovaní González
- upgrade nx, remove react webpack plugin and svgr webpack ([c04e1ec](https://github.com/drackp2m/playsetonline/commit/c04e1ece77f7919f61c9f56f2df1a37bd102de6e)) by Marc Jovaní González
- upgrade package deps ([43a7ace](https://github.com/drackp2m/playsetonline/commit/43a7ace22d429d0a5efeedf8c90f587963ff4ee4)) by Marc Jovaní González
- upgrade some deps ([8dfb0e9](https://github.com/drackp2m/playsetonline/commit/8dfb0e9e5784d6bee921ab0f1894593eb142c58d)) by Marc Jovaní González
- upgrade some deps ([e9c1259](https://github.com/drackp2m/playsetonline/commit/e9c125949fe39c1d59ee1712adb0a19f483770a0)) by Marc Jovaní González
- upgrade to node 22.9 and postgres 17.0 (with alpine 3.20) ([e2617f0](https://github.com/drackp2m/playsetonline/commit/e2617f0db48d59babcdd363cb0ef322b91385dd3)) by Marc Jovaní González
- upgrade to nx 17 and use npm in all places ([d99a01e](https://github.com/drackp2m/playsetonline/commit/d99a01e83ee165246e3c9436998b03463243e0a1)) by Marc Jovaní González
- upgrade to nx 20.0.3 ([6d68f5f](https://github.com/drackp2m/playsetonline/commit/6d68f5f8f62504bb2d36efe8a03eaf8a4d5322fc)) by Marc Jovaní González
- use node 20.8 in github actions ([2df6063](https://github.com/drackp2m/playsetonline/commit/2df60633b177307a52851b3e05ed2ff032725727)) by Marc Jovaní González

**Full Changelog**: https://github.com/drackp2m/playsetonline/compare/...v1.0.0

# v0.0.1 (2024-11-12)

## What's Changed

### ✨ Features

- add manifest ([9e353ce](https://github.com/drackp2m/playsetonline/commit/9e353cefee6b0bac47b6256b58f924294644e668)) by Marc Jovaní González
- add other commit of type feat ([ddc4750](https://github.com/drackp2m/playsetonline/commit/ddc4750ba3da9c684bea5fddb7795752433f3dcc)) by Marc Jovaní González
- add spaces page ([1bd7e59](https://github.com/drackp2m/playsetonline/commit/1bd7e5929c0a9b6175078e4c63614b1f4367f609)) by Marc Jovaní González
- **api,app**: add root api endpoint with status, add cron on appService ([3e3b0fb](https://github.com/drackp2m/playsetonline/commit/3e3b0fb7a8ea5bcd560e952ca13a93572babc1d9)) by Marc Jovaní González
- **api,app**: add selfsigned ssl ([5668765](https://github.com/drackp2m/playsetonline/commit/56687659c4fa1eb50bfd70285f9798a5fc6ad6f1)) by Marc Jovaní González
- **api,app**: add subscriptions to graphQL ([0d39442](https://github.com/drackp2m/playsetonline/commit/0d39442ba809e06dd67db2c6464740a02ca6f348)) by Marc Jovaní González
- **api,app**: add user store and getUserInfo query on userResolver ([5ed472f](https://github.com/drackp2m/playsetonline/commit/5ed472ff918ba0d70d0fbdcd20d2f5a05857e1f2)) by Marc Jovaní González
- **api,app**: create fake login from angular to nestjs-graphql ([7b2a616](https://github.com/drackp2m/playsetonline/commit/7b2a616466155384fe35d9565b0719831d18c770)) by Marc Jovaní González
- **api,app**: create newGame use case ([b401ee4](https://github.com/drackp2m/playsetonline/commit/b401ee49ef7d0f21985caa45d0a13b79e3ba2e84)) by Marc Jovaní González
- **api,app**: implements jwt refresh token ([ba18496](https://github.com/drackp2m/playsetonline/commit/ba18496c3e700314b375ab870f2edc3ae675f969)) by Marc Jovaní González
- **api,app**: improve ping, upgrade to node 22, add @angular/build package ([d2aed64](https://github.com/drackp2m/playsetonline/commit/d2aed64f0464926d175c74bd49aa93285ad0b360)) by Marc Jovaní González
- **api,app**: improve subscriptions, convert to signals, show on html ([800a3a0](https://github.com/drackp2m/playsetonline/commit/800a3a0767cfa5b9f2edf2b9341749eee5305051)) by Marc Jovaní González
- **api,app**: list games waiting join players ([f33d39c](https://github.com/drackp2m/playsetonline/commit/f33d39c0e3ea3436010e8b87ddff152181abe945)) by Marc Jovaní González
- **api,app**: ping works!! ([ba6e314](https://github.com/drackp2m/playsetonline/commit/ba6e314914f09ddac9d9f7ee48882e798e9a96ed)) by Marc Jovaní González
- **api,app**: remove proxy on app and decrease salt to 11 on registerUseCase ([a06d168](https://github.com/drackp2m/playsetonline/commit/a06d168021780b305f7fde105855a89f6fa16108)) by Marc Jovaní González
- **api,app**: service workers and /api with alive message ([5d64df7](https://github.com/drackp2m/playsetonline/commit/5d64df71f5619c691906a9e83770a9ad34021c60)) by Marc Jovaní González
- **api**: add cascade delete on user or game deletion in game-participant entity ([481aab9](https://github.com/drackp2m/playsetonline/commit/481aab91ee9041e0efb3f8550810327854593759)) by Marc Jovaní González
- **api**: add check-jwt-access-token use-case ([a41b5dd](https://github.com/drackp2m/playsetonline/commit/a41b5dd264ca23a3239932c770b71247a8c9d45c)) by Marc Jovaní González
- **api**: add custom mikro-orm namig strategy ([21d0cb6](https://github.com/drackp2m/playsetonline/commit/21d0cb6c261fc487027a7410b55e72a1387b8e29)) by Marc Jovaní González
- **api**: add exception filter ([8c0f635](https://github.com/drackp2m/playsetonline/commit/8c0f6351a566d27759a281f191fed652761a4cc5)) by Marc Jovaní González
- **api**: add jwt access token validation to graphql ws connections ([f6cc2db](https://github.com/drackp2m/playsetonline/commit/f6cc2dba0d149f388e5547a36c082e1346c44523)) by Marc Jovaní González
- **api**: allow multiple origins on CORS ([77eab11](https://github.com/drackp2m/playsetonline/commit/77eab11fa158f0fad081233ed16b72c80ca1627a)) by Marc Jovaní González
- **api**: create generateGameCards UseCase ([680731a](https://github.com/drackp2m/playsetonline/commit/680731af7ba1e513a16ebfef1a994c43a96af3e6)) by Marc Jovaní González
- **api**: create register usecase ([c6c2559](https://github.com/drackp2m/playsetonline/commit/c6c25591649f9a6ce687d61ba2fa5fd0837989c8)) by Marc Jovaní González
- **api**: create userRepository ([fecdeba](https://github.com/drackp2m/playsetonline/commit/fecdebaac6d1378616253e0aad4c2939cab6f65a)) by Marc Jovaní González
- **api**: improve errors messages ([19902ab](https://github.com/drackp2m/playsetonline/commit/19902abaca06ea2b20a0ac322967ac82bee26dbc)) by Marc Jovaní González
- **api**: mikro orm update with repository aliases ([4778966](https://github.com/drackp2m/playsetonline/commit/4778966a30af0251c2629bc50cd3cc4b1e549f85)) by Marc Jovaní González
- **api**: skip props on cookies ([d50016d](https://github.com/drackp2m/playsetonline/commit/d50016df41426da536746d766c4b6f52c857017d)) by Marc Jovaní González
- **api**: try to disable graphQL csrfPrevention ([505f4e7](https://github.com/drackp2m/playsetonline/commit/505f4e73ddfa306424a19870f3ac8a5f4a99b031)) by Marc Jovaní González
- **api**: try to run specs with swc ([d99c5ce](https://github.com/drackp2m/playsetonline/commit/d99c5ce8319a319e8a4c00d9124709a551dfffcf)) by Marc Jovaní González
- **api**: update environment to call to api-set-online.onrender.com ([74b55b7](https://github.com/drackp2m/playsetonline/commit/74b55b7e9be48dd318073b37969f6cd01e1eadbd)) by Marc Jovaní González
- **api**: use check-refresh-token use-case on refresh-session use-case ([b86a861](https://github.com/drackp2m/playsetonline/commit/b86a86197ffd277736428f4637ce2d32fca07494)) by Marc Jovaní González
- **app,api-interfaces**: add register form ([8d1b056](https://github.com/drackp2m/playsetonline/commit/8d1b056bb965e9b3eab683827cf7a7a1dde42b37)) by Marc Jovaní González
- **app,api**: add join game mutation and improve graphql errors ([b29d257](https://github.com/drackp2m/playsetonline/commit/b29d257344b346df1c38ec248a39644f6a8d9dc7)) by Marc Jovaní González
- **app,api**: create joinGame use case, and improve entityRepository ([d6898a8](https://github.com/drackp2m/playsetonline/commit/d6898a821f3db749cadf7fda2bc096f829e94bcc)) by Marc Jovaní González
- **app,api**: improve auth app interceptor ([1d3438d](https://github.com/drackp2m/playsetonline/commit/1d3438dd25aaf7a4b30e37d0e72a8da9f94148a8)) by Marc Jovaní González
- **app**: `highlightSet` increases `Wrong sets` by 3 ([f5dac08](https://github.com/drackp2m/playsetonline/commit/f5dac0880b72823cb395e756febbde01a2e69cfb)) by Marc Jovaní González
- **app**: add border radius example page ([ce93dc9](https://github.com/drackp2m/playsetonline/commit/ce93dc9cadec1204e3c4fd4725e94a78b1b5aa42)) by Marc Jovaní González
- **app**: add box shadow sample page ([f73792f](https://github.com/drackp2m/playsetonline/commit/f73792f069f3d4bc4bab94695e8ac588c866c0c4)) by Marc Jovaní González
- **app**: add card component ([9cf0196](https://github.com/drackp2m/playsetonline/commit/9cf01960c9026e196e9fcfa329d9ec267b5a1390)) by Marc Jovaní González
- **app**: add card demo page with nice result!! ([51e44cb](https://github.com/drackp2m/playsetonline/commit/51e44cb0ab37b047433ba924b214b25ff3d20a9b)) by Marc Jovaní González
- **app**: add colors example page ([8ce8d77](https://github.com/drackp2m/playsetonline/commit/8ce8d77ea66de3be12acc8a99cf6344c97523bde)) by Marc Jovaní González
- **app**: add examples for all typographies ([b09d8ba](https://github.com/drackp2m/playsetonline/commit/b09d8badc2d5809e1d30bb5649b51a631d15f3f5)) by Marc Jovaní González
- **app**: add favicon ([3090ffa](https://github.com/drackp2m/playsetonline/commit/3090ffad5f34a6d46e80df5853df47fb00d9b348)) by Marc Jovaní González
- **app**: add game page ([cc6e3c5](https://github.com/drackp2m/playsetonline/commit/cc6e3c52fe1bf689aca925724a069ea5576f3b9f)) by Marc Jovaní González
- **app**: add get user info error type ([68919f0](https://github.com/drackp2m/playsetonline/commit/68919f0c0605560747ca67ae129c5440b6dcfb9c)) by Marc Jovaní González
- **app**: add glitch effect component for svg images ([998b4b3](https://github.com/drackp2m/playsetonline/commit/998b4b3bb6f23287db42df470c9cbbd3d48c7c75)) by Marc Jovaní González
- **app**: add other feature but with scope ([5505451](https://github.com/drackp2m/playsetonline/commit/550545101b65b0f19cfede61e3e819fbd44331a9)) by Marc Jovaní González
- **app**: add padding to game in full-screen ([c2b6d35](https://github.com/drackp2m/playsetonline/commit/c2b6d354e89ac87a59297f901e272af5143b5988)) by Marc Jovaní González
- **app**: add set icons ([1fb7c6d](https://github.com/drackp2m/playsetonline/commit/1fb7c6d5dbf4b07df37653b6d476c225f54fc23e)) by Marc Jovaní González
- **app**: add signal store and migrate to nx 18.1.2 ([2d73df5](https://github.com/drackp2m/playsetonline/commit/2d73df5f18eb235736af0ed7675a2367e3537683)) by Marc Jovaní González
- **app**: add sonar lint and fix some eslint issues ([3676496](https://github.com/drackp2m/playsetonline/commit/3676496bf6fde4bc8e87b17816aa565f5d280f3d)) by Marc Jovaní González
- **app**: add typographies url and menu ([756bb03](https://github.com/drackp2m/playsetonline/commit/756bb0304ac25ac3adb9403e86ddc22344c947c1)) by Marc Jovaní González
- **app**: all routes with lazzy loading ([6e87f41](https://github.com/drackp2m/playsetonline/commit/6e87f41f2cc5aeb1d2efd06a872b5f7e972137fc)) by Marc Jovaní González
- **app**: convert variables to signals ([ef2fe1b](https://github.com/drackp2m/playsetonline/commit/ef2fe1b9ae50d73cab3a86b75aa2d21643d0ef7f)) by Marc Jovaní González
- **app**: create apiSDK ([d84264b](https://github.com/drackp2m/playsetonline/commit/d84264bd0fc8020a85a725093e2f737c9a1533ef)) by Marc Jovaní González
- **app**: create basic authorization interceptor ([ed94941](https://github.com/drackp2m/playsetonline/commit/ed94941902e5516dd8bdf045b2219619d1df30af)) by Marc Jovaní González
- **app**: enable to put cards rotated ([2ae3953](https://github.com/drackp2m/playsetonline/commit/2ae39534bd76ca3c97935efb46b0b5ba7089953e)) by Marc Jovaní González
- **app**: finish flitch effect (fails on svg with gradients) ([47bd356](https://github.com/drackp2m/playsetonline/commit/47bd3561b03bf3727ffc080113da02d02ee0e977)) by Marc Jovaní González
- **app**: gameOnlineStore as class, add semantic-release ([77b3133](https://github.com/drackp2m/playsetonline/commit/77b313394b60c672db798a8c5f763dd754aa0de2)) by Marc Jovaní González
- **app**: implements sendPing mutation on AppComponent (need init subscription) ([5191467](https://github.com/drackp2m/playsetonline/commit/51914677591f6c9e39d9c684954c07237f096ba0)) by Marc Jovaní González
- **app**: improve game experience ([9f14a2c](https://github.com/drackp2m/playsetonline/commit/9f14a2c2d994a11667383a8ce22a014ddb5c8916)) by Marc Jovaní González
- **app**: improve the HTTP interceptor to handle both GraphQL and httpError errors. ([a4188bb](https://github.com/drackp2m/playsetonline/commit/a4188bbaa8deda00df347e15203e1a0775480700)) by Marc Jovaní González
- **app**: move some game logic to store and use eslint flat config ([0f068f9](https://github.com/drackp2m/playsetonline/commit/0f068f93aedae3f17b3bef3fcfbe9728c8ddff1e)) by Marc Jovaní González
- **app**: now, confetti have game shapes ([db5cb7f](https://github.com/drackp2m/playsetonline/commit/db5cb7feb56b0213d81afc90753e8048a37c3b08)) by Marc Jovaní González
- **app**: pipe to get asset urls absolute ([abdf45b](https://github.com/drackp2m/playsetonline/commit/abdf45b8772b4b09f54008851f4650081c44d602)) by Marc Jovaní González
- **app**: prepare wpa with translucid status bar for iOS and add SET particles ([75b80e9](https://github.com/drackp2m/playsetonline/commit/75b80e9c8ec08c725a113cea225a2fe0e25083de)) by Marc Jovaní González
- **app**: register and login height ([762a403](https://github.com/drackp2m/playsetonline/commit/762a403dc8735b03e5d8254917f981b0add1e983)) by Marc Jovaní González
- **app**: remove start slash of [@font-face](https://github.com/font-face) css property ([7952c7e](https://github.com/drackp2m/playsetonline/commit/7952c7e60daca42918f688f5f34c7de986c8f44b)) by Marc Jovaní González
- **app**: remove url pipe and update manifest ([55d02dd](https://github.com/drackp2m/playsetonline/commit/55d02dd939fe7e4b701e60d47e648046ed3e4f2b)) by Marc Jovaní González
- **app**: restored ability to add cards to the board ([a3f7824](https://github.com/drackp2m/playsetonline/commit/a3f7824612f1cee34c2a0f9f6d2840665052ee66)) by Marc Jovaní González
- **app**: save current game to browser indexedDB ([a749da5](https://github.com/drackp2m/playsetonline/commit/a749da59e24706a3eadd6285761960818c9f6068)) by Marc Jovaní González
- **app**: set all graphql query types to fetch using network-only policy ([b762b7f](https://github.com/drackp2m/playsetonline/commit/b762b7f95aa8c1b2c9ff74fc8cc85f9d04434c38)) by Marc Jovaní González
- **app**: start game normally by default, click on `Wrong sets` cheat game ([cba62df](https://github.com/drackp2m/playsetonline/commit/cba62df8ba5d1c9fbce0ff551b5acd6e3eac4b98)) by Marc Jovaní González
- **app**: try to add service-worker to Angular project ([b673228](https://github.com/drackp2m/playsetonline/commit/b673228f8e9558b56f027cfe90fdd183bfc0437b)) by Marc Jovaní González
- **app**: try to load font-face from base project path ([6621a92](https://github.com/drackp2m/playsetonline/commit/6621a92860f7d744ef3faa4f50fcc1b6c49581d5)) by Marc Jovaní González
- **app**: use hash on Angular routes ([a70224f](https://github.com/drackp2m/playsetonline/commit/a70224f68aaab702e411c89f52f8c1a3fb1f1b53)) by Marc Jovaní González
- **app**: use relative route for font-face ([7f51edb](https://github.com/drackp2m/playsetonline/commit/7f51edb9ac7d8eb3894f25b1a9d38b36998ba1f3)) by Marc Jovaní González
- **app**: use zoneless, make some routes lazzy ([27cb8b6](https://github.com/drackp2m/playsetonline/commit/27cb8b6498ebce9e6f1e9abd68f3547883ebabc6)) by Marc Jovaní González
- deplois from dev!! ([17a7012](https://github.com/drackp2m/playsetonline/commit/17a7012e2faab204b74d8030c99969de6337d96e)) by Marc Jovaní González
- enable play game with cheats but end with error =S ([3d0e103](https://github.com/drackp2m/playsetonline/commit/3d0e103dfd13b546a6c392480bdcd0297536ffff)) by Marc Jovaní González
- improve AuthInterceptor ([51571d0](https://github.com/drackp2m/playsetonline/commit/51571d0007656737b18dfed692c7aa9c17a5f4a8)) by Marc Jovaní González
- improve manifest ([0d2116c](https://github.com/drackp2m/playsetonline/commit/0d2116c1ce3a5d3cb03d19cc7385a0c57e7d1238)) by Marc Jovaní González
- improve userRepository ([63cc547](https://github.com/drackp2m/playsetonline/commit/63cc5478a004e03cf998c4e34b6b734f2c9a1978)) by Marc Jovaní González
- prepare project to production ([9c7565d](https://github.com/drackp2m/playsetonline/commit/9c7565d0daceb60358f96c54749f9d721f1f878a)) by Marc Jovaní González
- update texts ([e68ac04](https://github.com/drackp2m/playsetonline/commit/e68ac040bb6aa0a803f4e141dd88b039bc74ce36)) by Marc Jovaní González

### 🎨 Styles

- add fonts to test ([7ff138a](https://github.com/drackp2m/playsetonline/commit/7ff138adbfd9d8413ce9101283e479222bf4a54e)) by Marc Jovaní González
- **api,app**: this change is of styles and it is nice ([65ca891](https://github.com/drackp2m/playsetonline/commit/65ca891e3f65f3706dc7e14af90c22bd33586ddc)) by Marc Jovaní González
- **app**: add scss abstracts and utilities ([4589754](https://github.com/drackp2m/playsetonline/commit/458975453acadde23661a2f9502517e5b14da20f)) by Marc Jovaní González
- **app**: complete rounded, colors and visibility ([099fe5d](https://github.com/drackp2m/playsetonline/commit/099fe5dc78050855a633ea2b01fac562fdd815ea)) by Marc Jovaní González
- **app**: create show / hide rules with media query ([702fa5a](https://github.com/drackp2m/playsetonline/commit/702fa5a932bfc977dd6ffce4389e4d11356b0b67)) by Marc Jovaní González
- **app**: generate variables and classes of font sizes ([67fdbd2](https://github.com/drackp2m/playsetonline/commit/67fdbd2e76d44f1f3b1585a3f9106d641ce4f77b)) by Marc Jovaní González
- **app**: improve buttons and links hover effects, glitch on mobile now works ([60af6b9](https://github.com/drackp2m/playsetonline/commit/60af6b9b776c3b4540d582ccfec0c5700b934eea)) by Marc Jovaní González
- **app**: improve general styles ([b6cb883](https://github.com/drackp2m/playsetonline/commit/b6cb883abe7fbb4334367cf6b396c0d11369a9c6)) by Marc Jovaní González
- **app**: improve scss functions for get rules ([480f26f](https://github.com/drackp2m/playsetonline/commit/480f26f18adb1d0a4a874ad037aef628aaabca28)) by Marc Jovaní González
- **app**: refactor spacing ([a2a4fe9](https://github.com/drackp2m/playsetonline/commit/a2a4fe9714f8f491772b599922ab8a409d159d0a)) by Marc Jovaní González
- **app**: remove initial slash of scss src ([de5a59c](https://github.com/drackp2m/playsetonline/commit/de5a59c32f476fb97f4797a52641f80314b8bdf8)) by Marc Jovaní González
- **app**: remove start slash on font assets ([b2ff660](https://github.com/drackp2m/playsetonline/commit/b2ff66082465b58b6a4aaadea36d3ccd11a95b5a)) by Marc Jovaní González
- **app**: try to load recursive-font with initial slash and using scss variable ([d21bc73](https://github.com/drackp2m/playsetonline/commit/d21bc73284c4ed1844be8e02168394a2e2d1aefb)) by Marc Jovaní González
- back to relative assets load ([3f368aa](https://github.com/drackp2m/playsetonline/commit/3f368aaec8c1f1dc16cbf8f2916b5ca1d082c837)) by Marc Jovaní González
- try to fix load scss urls ([788ae48](https://github.com/drackp2m/playsetonline/commit/788ae48c8d7f7be464dde39b920b6510683607b6)) by Marc Jovaní González
- try to load styles relatively ([32a7a8c](https://github.com/drackp2m/playsetonline/commit/32a7a8cb47cdf29db97976714285f7a9e0eb1740)) by Marc Jovaní González

### 🧪 Tests

- **api-e2e**: try to separate template ([1446b29](https://github.com/drackp2m/playsetonline/commit/1446b29b8879d95da4653caecd6f5842aec8ad04)) by Marc Jovaní González
- **api,app**: add currentUserStore and Apollo to AppComponent spec ([b21d817](https://github.com/drackp2m/playsetonline/commit/b21d8171715cabe62c26f3382df33ea50040992f)) by Marc Jovaní González
- **api**: add authController spec ([e3e44c6](https://github.com/drackp2m/playsetonline/commit/e3e44c65f5a600368b2e566961599969ec2dde9f)) by Marc Jovaní González
- **api**: add CheckPassword UseCase Spec ([3002955](https://github.com/drackp2m/playsetonline/commit/3002955f44c9716c0c5333406d615bd00c35cb55)) by Marc Jovaní González
- **api**: add create-game use-case spec ([0b54144](https://github.com/drackp2m/playsetonline/commit/0b54144ffc986ecb23af789a00114b82e67c9e90)) by Marc Jovaní González
- **api**: add create-game use-case spec ([62d47f7](https://github.com/drackp2m/playsetonline/commit/62d47f703cabbf3d4bc1dcddd1b95c50dda96aa6)) by Marc Jovaní González
- **api**: add GenerateNowDate UseCase Spec ([fcb021e](https://github.com/drackp2m/playsetonline/commit/fcb021e5fa678d4ac3979210d5eb4b932e080cd9)) by Marc Jovaní González
- **api**: add generateUuid UseCase Spec ([1890bed](https://github.com/drackp2m/playsetonline/commit/1890bed13a46eae16cad8d3cb711627af72cc9f3)) by Marc Jovaní González
- **api**: add HashPassword UseCase Spec ([ce0a27e](https://github.com/drackp2m/playsetonline/commit/ce0a27eaaf66fa6219d4df2fad2ab3d87b64fdef)) by Marc Jovaní González
- **api**: add integration tests ([c101ecb](https://github.com/drackp2m/playsetonline/commit/c101ecb68396589617ac9000be52ea447becc09e)) by Marc Jovaní González
- **api**: add modifiedAt and expiresOn tests to DateFaker ([581fdd9](https://github.com/drackp2m/playsetonline/commit/581fdd9c926e8a5e839c28ef2b9bf2391840ba35)) by Marc Jovaní González
- **api**: add semaphore spec ([86ed5a3](https://github.com/drackp2m/playsetonline/commit/86ed5a32a59d68a2db16edd02e7308e883338ed9)) by Marc Jovaní González
- **api**: add spec for BadRequestException ([9e6ed1b](https://github.com/drackp2m/playsetonline/commit/9e6ed1b1ab4b17099a194a55576f20d75b187159)) by Marc Jovaní González
- **api**: add spec to clean-jwt-access-token-cookie use-case ([3eb6df1](https://github.com/drackp2m/playsetonline/commit/3eb6df179a0e9e57e720cb05583fc4adc1f1d49e)) by Marc Jovaní González
- **api**: add spec to clean-jwt-access-token-cookie use-case ([c6d666a](https://github.com/drackp2m/playsetonline/commit/c6d666a3461d98e2b347117d57f9b27954533b7e)) by Marc Jovaní González
- **api**: add specs for BasicFaker, renamed some tests ([795d55c](https://github.com/drackp2m/playsetonline/commit/795d55c5cae64d90b3fbe67973d31ee533e6c929)) by Marc Jovaní González
- **api**: add specs for CacheManagerService ([d0dc508](https://github.com/drackp2m/playsetonline/commit/d0dc508e9224d620fbe4faea595cf82402508a68)) by Marc Jovaní González
- **api**: add specs for SemaphoreManagerService ([a53046a](https://github.com/drackp2m/playsetonline/commit/a53046a42de4f1ea7f765bccf7b377364e2d4a66)) by Marc Jovaní González
- **api**: add tests for all exceptions ([7bb6baf](https://github.com/drackp2m/playsetonline/commit/7bb6baf65456abcac1d4cb285a30453fbf11cf30)) by Marc Jovaní González
- **api**: add usecases for bcryptjs methods ([9b4101d](https://github.com/drackp2m/playsetonline/commit/9b4101daa346bb3c05fd37eeb8a1a00ed251b4fa)) by Marc Jovaní González
- **api**: create access and refresh token usecases tests ([5df1690](https://github.com/drackp2m/playsetonline/commit/5df1690e8a74c267f373d9895c95e7a0b1abde25)) by Marc Jovaní González
- **api**: create DateFaker Spec (only should defined and createdAt) ([c04aa76](https://github.com/drackp2m/playsetonline/commit/c04aa76ae85c02ac3e2c807336b49bac0e7aac05)) by Marc Jovaní González
- **api**: create list-game use-case spec, refactor factories ([e4a2796](https://github.com/drackp2m/playsetonline/commit/e4a279654cc6f0305d530205c560324053aa3f06)) by Marc Jovaní González
- **api**: create logout use-case spec ([c8fa27f](https://github.com/drackp2m/playsetonline/commit/c8fa27f3812d14a043438c86a3e3ea488626f2a9)) by Marc Jovaní González
- **api**: create nodeCacheService specs ([8db451f](https://github.com/drackp2m/playsetonline/commit/8db451f5faf1c4c98dfc414d681a3f13c38d1e56)) by Marc Jovaní González
- **api**: create refresh session useCase ([74e9fdb](https://github.com/drackp2m/playsetonline/commit/74e9fdba71609ce1ef6f64dd766442c881274499)) by Marc Jovaní González
- **api**: create register use case ([e54934c](https://github.com/drackp2m/playsetonline/commit/e54934cfd11dc1ed0a361a2eed0d28b694f8f420)) by Marc Jovaní González
- **api**: create set-jwt-token use case ([92dd861](https://github.com/drackp2m/playsetonline/commit/92dd8613c7d781ae5a585e3f635cd049e7cfcaf9)) by Marc Jovaní González
- **api**: editable-date specs ([ff91ab2](https://github.com/drackp2m/playsetonline/commit/ff91ab2e99979262798f88ad0c46ac6fde57b926)) by Marc Jovaní González
- **api**: enable and fix all api tests :) ([e472734](https://github.com/drackp2m/playsetonline/commit/e4727342bde3278494ea266d08f918069d5b2317)) by Marc Jovaní González
- **api**: finish join-game use-case specs ([bf1a70b](https://github.com/drackp2m/playsetonline/commit/bf1a70b7b78867c9d809c230556e09bfc84aec11)) by Marc Jovaní González
- **api**: finish join-game use-case specs ([19924d1](https://github.com/drackp2m/playsetonline/commit/19924d139e60ace8760aadef62af592f6493233b)) by Marc Jovaní González
- **api**: finish tests for extract-cookies-from-raw-hehaders use-case ([3186353](https://github.com/drackp2m/playsetonline/commit/3186353cc5db27724ab748d69d6d51c4ad8ef84b)) by Marc Jovaní González
- **api**: fix AuthServiceSpec ([bd50cf6](https://github.com/drackp2m/playsetonline/commit/bd50cf65235ea015e717c392f3376f3e781b9c96)) by Marc Jovaní González
- **api**: fix login test ([b40121d](https://github.com/drackp2m/playsetonline/commit/b40121daf6227cb4f40af718a357b8484baf02dd)) by Marc Jovaní González
- **api**: fix tests and faker deprecations ([acd073d](https://github.com/drackp2m/playsetonline/commit/acd073dd72532e38106176fc28ba23712862e5b4)) by Marc Jovaní González
- **api**: fix tests with ConfigurationService dep, and salt with length 11 ([6ecf03d](https://github.com/drackp2m/playsetonline/commit/6ecf03d02c54bb358b6d874caf43c3c6a6793aa6)) by Marc Jovaní González
- **api**: fix tests! ([a141524](https://github.com/drackp2m/playsetonline/commit/a141524fa57c3140cf833bc674c3bb864b9ca958)) by Marc Jovaní González
- **api**: fixed tests related with config and jwt tokens ([e1a6c8d](https://github.com/drackp2m/playsetonline/commit/e1a6c8d59788fa8716be99819357c49b57e45037)) by Marc Jovaní González
- **api**: improve appService spec ([d657043](https://github.com/drackp2m/playsetonline/commit/d65704345c0465993a600ab1fa54874caae8f12e)) by Marc Jovaní González
- **api**: improve editable-data spec to user util variable instead new instance ([f081953](https://github.com/drackp2m/playsetonline/commit/f0819530e861066b0cdd4ff3664470c1f5d22441)) by Marc Jovaní González
- **api**: improve integration tests (test-setup and global-setups) ([c7a7280](https://github.com/drackp2m/playsetonline/commit/c7a7280c008da8b23767683a5bd3409a48ca45f8)) by Marc Jovaní González
- **api**: improve login use case specs ([cd2960f](https://github.com/drackp2m/playsetonline/commit/cd2960f8f93595d1705efa947f4d330b88032c33)) by Marc Jovaní González
- **api**: init MikroORM manually in join-game use-case to avoid db connection ([63b332a](https://github.com/drackp2m/playsetonline/commit/63b332affd0e10a18c939b8510e54997d0489a01)) by Marc Jovaní González
- **api**: mock tests with jest-mock-extended ([27b8830](https://github.com/drackp2m/playsetonline/commit/27b8830434445d009f043ad80bb213768c698e80)) by Marc Jovaní González
- **api**: remove MikroORM init on create-game use-case spec ([df4ac82](https://github.com/drackp2m/playsetonline/commit/df4ac82df00a887707a93e5b19eb8a56f3ada9ce)) by Marc Jovaní González
- **api**: simplify jwt-strategy-service spec ([9cf2221](https://github.com/drackp2m/playsetonline/commit/9cf2221c113c0c49ea061927fb0e9f6805d56ec3)) by Marc Jovaní González
- **api**: try to add integration tests, with global jest setup for mikro-orm migrations ([e020f55](https://github.com/drackp2m/playsetonline/commit/e020f55358e7d518c36df704358ca73d56ea8d7f)) by Marc Jovaní González
- **app**: fix app test ([a220cfe](https://github.com/drackp2m/playsetonline/commit/a220cfe7528f46e45ceef8c1b93d68e944893024)) by Marc Jovaní González
- **app**: import currentUserStore to appComponent spec ([c1dd437](https://github.com/drackp2m/playsetonline/commit/c1dd437b222309c0dbb3ea74659c788a63073f05)) by Marc Jovaní González
- **app**: remove title test ([553a85f](https://github.com/drackp2m/playsetonline/commit/553a85f1b1409fc174cb99599810c14557487e90)) by Marc Jovaní González
- **app**: skip app test ([00f2588](https://github.com/drackp2m/playsetonline/commit/00f2588e787c1030c3df4d9126c3705ddfd459cf)) by Marc Jovaní González
- **app**: skip AppComponent spec ([e3139fa](https://github.com/drackp2m/playsetonline/commit/e3139fa9fca40249d9fcc3671792e380fc6bc66e)) by Marc Jovaní González
- enable axios to trust self-signed certificate ([5cc3112](https://github.com/drackp2m/playsetonline/commit/5cc3112cc9609e31fbe038ea213f6236234e5589)) by Marc Jovaní González
- fix /api/app/hello test ([b31d6c3](https://github.com/drackp2m/playsetonline/commit/b31d6c3f4611b50b3d815f5eac42b0ce1fcb1e6d)) by Marc Jovaní González
- fix tests with mock ([4309690](https://github.com/drackp2m/playsetonline/commit/43096904142c98e03bc0cc9dee4c6ae4a2524917)) by Marc Jovaní González

### ♻️ Code Refactoring

- add tslint to use member-ordering rule ([7f00efb](https://github.com/drackp2m/playsetonline/commit/7f00efb0707df194b2ab8d9199e425fc8ee3ed0e)) by Marc Jovaní González
- **api-definitions**: rename lin interfaces to definitions ([0de019c](https://github.com/drackp2m/playsetonline/commit/0de019c7caad6db3ef3e28b6cf6e5650af3cf7e6)) by Marc Jovaní González
- **api-e2e**: try to separate template ([712bf6c](https://github.com/drackp2m/playsetonline/commit/712bf6c27813b325ecd2b1e812343f029b204e65)) by Marc Jovaní González
- **api-sdk,app-e2e,app,api,api-definitions,api-e2e**: use clean nx installation ([2e54ac2](https://github.com/drackp2m/playsetonline/commit/2e54ac233e6d547104b3e2ff4323a9a4e4066e5e)) by Marc Jovaní González
- **api,api-e2e,app,app-e2e,api-definitions**: lint json and gql files ([1d7343e](https://github.com/drackp2m/playsetonline/commit/1d7343e3e855aff10a8d1c9b0a24049d04becb0e)) by Marc Jovaní González
- **api,api-e2e**: set new nx project (api) ([1ba9a83](https://github.com/drackp2m/playsetonline/commit/1ba9a8368cc90fb6286c2c016ebf9e36dfe07947)) by Marc Jovaní González
- **api,app**: add more rules on tsconfig to improve robustness (and fix code) ([6a5dab3](https://github.com/drackp2m/playsetonline/commit/6a5dab31ea607c27c987de4effb5152f43508737)) by Marc Jovaní González
- **api,app**: improve linters and use line length of 100 ([091f73f](https://github.com/drackp2m/playsetonline/commit/091f73f2b46ce95e920e6b209b6583cddde72b3c)) by Marc Jovaní González
- **api,app**: improve ws ([be81d1a](https://github.com/drackp2m/playsetonline/commit/be81d1ae1e7c9ff0c2f1e2ae20885c75e0b692e5)) by Marc Jovaní González
- **api,app**: remove all Enum suffix from imports and types ([418dc3a](https://github.com/drackp2m/playsetonline/commit/418dc3a834d26ab823334b66dbc0053792efa167)) by Marc Jovaní González
- **api**: add domain on CORS error ([5cbb7f1](https://github.com/drackp2m/playsetonline/commit/5cbb7f13bb8bcd80a6f6ee028ca3571be24e7206)) by Marc Jovaní González
- **api**: add modules for complex UseCases ([f24a086](https://github.com/drackp2m/playsetonline/commit/f24a086229d01b741c9adc2fadb2f0b1d34c7391)) by Marc Jovaní González
- **api**: autoload mikro-orm entities with tsNode ([0658bc3](https://github.com/drackp2m/playsetonline/commit/0658bc3c00c78c2ebbf5b212752983d78b74dd6d)) by Marc Jovaní González
- **api**: change module dependencies ([5899727](https://github.com/drackp2m/playsetonline/commit/58997274d7823a2e67302b35a4c302ce876686b1)) by Marc Jovaní González
- **api**: create bootstrap helper ([7ce4e4a](https://github.com/drackp2m/playsetonline/commit/7ce4e4a3de52b4ac36e30eeeaf2bb9a637b5a4c6)) by Marc Jovaní González
- **api**: improve configuration validation and usage ([f909f07](https://github.com/drackp2m/playsetonline/commit/f909f07e114bd4cde2a33517fc47053b33dc8b1c)) by Marc Jovaní González
- **api**: improve tests removing awaits and including extra cheks on exceptions ([699dfe3](https://github.com/drackp2m/playsetonline/commit/699dfe38d062e9abe9734fc3c33b89192bc96ec7)) by Marc Jovaní González
- **api**: refactor all tests (and code) to operate in typescript strict mode ([3398142](https://github.com/drackp2m/playsetonline/commit/339814221506ac1ad10b55e06671c17d4dd8e93d)) by Marc Jovaní González
- **api**: remove console log ([7a5a68c](https://github.com/drackp2m/playsetonline/commit/7a5a68cf7fdfdc87f34bdd2c4183b9ad3ffec198)) by Marc Jovaní González
- **api**: remove console logs on join-game use case, fix commitizen ([5f2e8f0](https://github.com/drackp2m/playsetonline/commit/5f2e8f0f5fc6a647e1683bf3dcce27609ea14d05)) by Marc Jovaní González
- **api**: remove console.log from create-jwt-refresh-token use-case ([308cafb](https://github.com/drackp2m/playsetonline/commit/308cafbadc6369e3305df926ddb6667f3d304050)) by Marc Jovaní González
- **api**: remove index.ts files ([b786ce0](https://github.com/drackp2m/playsetonline/commit/b786ce0d53cf221af0d91ff544c9f3ae39319fb2)) by Marc Jovaní González
- **api**: rename card interface enums ([e34ace8](https://github.com/drackp2m/playsetonline/commit/e34ace84dcea15bb69023c11a73c93984ff954b7)) by Marc Jovaní González
- **api**: rename common to share, add logout endpoint ([841de65](https://github.com/drackp2m/playsetonline/commit/841de656a35d01036e014263d08ad85e64c21dc9)) by Marc Jovaní González
- **api**: transform check-access-token to check-refresh-token use-case ([5383dee](https://github.com/drackp2m/playsetonline/commit/5383dee48154533a45892703c01ae02506a84636)) by Marc Jovaní González
- **api**: transform userService to loginUsecase ([e795a22](https://github.com/drackp2m/playsetonline/commit/e795a2269dd1fe9373fef8a9e2f9054c2a1e2b54)) by Marc Jovaní González
- **api**: try to fix api tests... ([f9ad028](https://github.com/drackp2m/playsetonline/commit/f9ad02846c2c5198347d0a57d27e650a88c15113)) by Marc Jovaní González
- **api**: update env.example, remove Dockerfile database, fix multiple db script ([d49e694](https://github.com/drackp2m/playsetonline/commit/d49e694a94abad2a661f35bf0cab8eb7205aa725)) by Marc Jovaní González
- **api**: use custom ConfigurationService ([114690d](https://github.com/drackp2m/playsetonline/commit/114690d5d71f87fbd46dc7bfb52c89a1ab76fa6c)) by Marc Jovaní González
- **api**: use multiple database to same docker container ([5a35756](https://github.com/drackp2m/playsetonline/commit/5a35756bd5c9b924e7e2852a37be301d25afb3bb)) by Marc Jovaní González
- **app**: angular parser for prettier html and fix all issues ([d6ef97d](https://github.com/drackp2m/playsetonline/commit/d6ef97d33022454806e9ccca8ac5e93395b681cf)) by Marc Jovaní González
- **app**: call to login request by api endpoint ([1b6e821](https://github.com/drackp2m/playsetonline/commit/1b6e8219d30ec2711654bee0d1d7113edae952a4)) by Marc Jovaní González
- **app**: color class names ([9bebff6](https://github.com/drackp2m/playsetonline/commit/9bebff6869ebe4adadfd880260192afcfd3844f8)) by Marc Jovaní González
- **app**: create card shape component ([1c93d71](https://github.com/drackp2m/playsetonline/commit/1c93d71e198c38f057d3fb91a2e7e4a66ef67593)) by Marc Jovaní González
- **app**: css variables in singular ([7d42367](https://github.com/drackp2m/playsetonline/commit/7d4236776ca411c0189074f060de6a0f6f4f2028)) by Marc Jovaní González
- **app**: improve "home" (game) page ([e36ab14](https://github.com/drackp2m/playsetonline/commit/e36ab147631e54ef7df06721fa90f7e519f62c5b)) by Marc Jovaní González
- **app**: improve auth interceptor ([cedcc52](https://github.com/drackp2m/playsetonline/commit/cedcc52ff434cd2947b7c763fe3d0fae3487a9d0)) by Marc Jovaní González
- **app**: improve gaps on grid layouts ([9caef86](https://github.com/drackp2m/playsetonline/commit/9caef866087d5af15efb5e50e12dd2ee3634374c)) by Marc Jovaní González
- **app**: improve glitch effect ([f6290e3](https://github.com/drackp2m/playsetonline/commit/f6290e3065d772ab9b31cddb05fa192abbc2956f)) by Marc Jovaní González
- **app**: improve main layout menu ([e1f3528](https://github.com/drackp2m/playsetonline/commit/e1f35283340f955664a0276ca500424ffd5ee82a)) by Marc Jovaní González
- **app**: improve sdk ([1533670](https://github.com/drackp2m/playsetonline/commit/15336702e6f1a1908522e90dc416c4792d78d472)) by Marc Jovaní González
- **app**: improve shadows ([5ef5837](https://github.com/drackp2m/playsetonline/commit/5ef583776f451e5f0cb9f79b69f9ca1171bd0a56)) by Marc Jovaní González
- **app**: improve signals readability, remove empty scss ([a00d904](https://github.com/drackp2m/playsetonline/commit/a00d904e89873bc6d300bef7c6a998d8577fff89)) by Marc Jovaní González
- **app**: increase 0.5 line with of outlined SVGs ([52476ad](https://github.com/drackp2m/playsetonline/commit/52476ad876a73be2fefd22ec7bdd973fe9dc9f68)) by Marc Jovaní González
- **app**: remove all [ngClass], use [style.xxx] for remove methods on component ([9be53b8](https://github.com/drackp2m/playsetonline/commit/9be53b8b3f9119686d0907f47c45f1704cdd9e44)) by Marc Jovaní González
- **app**: remove all dist ([4c3dec0](https://github.com/drackp2m/playsetonline/commit/4c3dec09415f0ea9900ba2863ab608574f7f49d0)) by Marc Jovaní González
- **app**: remove initial slash on icons in game page (for confetti) ([5aec642](https://github.com/drackp2m/playsetonline/commit/5aec642803283011288b413edcbed5dec6c6e807)) by Marc Jovaní González
- **app**: remove logs and move prevent re-refresh check to auth interceptor ([dbd8a52](https://github.com/drackp2m/playsetonline/commit/dbd8a527b78c3adf70468d8d62b8ce6c39f353fa)) by Marc Jovaní González
- **app**: remove old current user store ([63d17cc](https://github.com/drackp2m/playsetonline/commit/63d17cc7bdcdee51eae890759fab0d362121e82d)) by Marc Jovaní González
- **app**: replace set- by app- ([c654d72](https://github.com/drackp2m/playsetonline/commit/c654d72e34114008e881c02925087c87ac8b2a78)) by Marc Jovaní González
- **app**: self close some html tags ([28af23d](https://github.com/drackp2m/playsetonline/commit/28af23d4bed9166aaf361f88c4135613e3f9816f)) by Marc Jovaní González
- **app**: self-close tags, signal inputs with transformations ([d43a899](https://github.com/drackp2m/playsetonline/commit/d43a899f595e62d7b3be84a511e8c544ffd43b2a)) by Marc Jovaní González
- **app**: update all html to zoneless directives ([c1cb5af](https://github.com/drackp2m/playsetonline/commit/c1cb5af05ab2798cab9ff820fb55d60117905200)) by Marc Jovaní González
- **app**: use environment as modern Angular projects ([521c7ff](https://github.com/drackp2m/playsetonline/commit/521c7ff4141cceab51af9432f6a829937dfeb832)) by Marc Jovaní González
- **app**: use signal inputs on card shape component ([a8c369f](https://github.com/drackp2m/playsetonline/commit/a8c369fb7a277c69cbe6d3f38625602bb5e2cb5e)) by Marc Jovaní González
- back to original class names ([3ce3f87](https://github.com/drackp2m/playsetonline/commit/3ce3f872b668038e4b24c3f8ae774068a4949bef)) by Marc Jovaní González
- create method to show messages on HTML ([fe54cd1](https://github.com/drackp2m/playsetonline/commit/fe54cd165e2ddf9bd186d260e86ccab3fcaaab90)) by Marc Jovaní González
- mock with value instead class ([f749f37](https://github.com/drackp2m/playsetonline/commit/f749f374e55b5b67011e663c5b91e4efb6718b67)) by Marc Jovaní González
- remove .env files from git ([aedf2f6](https://github.com/drackp2m/playsetonline/commit/aedf2f6634fb1934d6b78411f8266c51d94f7e2d)) by Marc Jovaní González
- remove jsx and tsx references on eslint files ([4b5480e](https://github.com/drackp2m/playsetonline/commit/4b5480e146b4ad2cda18878e01fb0255946bea6a)) by Marc Jovaní González
- remove jsx and tsx references on eslint files ([c247cb5](https://github.com/drackp2m/playsetonline/commit/c247cb5007864effafede2770d5a6426463acaf8)) by Marc Jovaní González
- remove max lines and lines per function on tests ([f9d7a15](https://github.com/drackp2m/playsetonline/commit/f9d7a15840f7e6d767b4091928d0652c3ea87ed0)) by Marc Jovaní González
- try to fix (again) github actions ([686b5f9](https://github.com/drackp2m/playsetonline/commit/686b5f9edf8a01be9eb9d8cc0780d0573df76bb8)) by Marc Jovaní González
- try to put emji left ([3f0790c](https://github.com/drackp2m/playsetonline/commit/3f0790c011c4c0df4ae45cd705d66326a1efa9a3)) by Marc Jovaní González
- use loops on border radius page ([8e1ca0c](https://github.com/drackp2m/playsetonline/commit/8e1ca0c354ae40bac47d7ee92c0de85d57a26db1)) by Marc Jovaní González
- use ngFor on colors ([8f87d21](https://github.com/drackp2m/playsetonline/commit/8f87d2103bf8c54f31e4e648f700d840813a99ca)) by Marc Jovaní González
- use ngFor on typografies pages ([fb66295](https://github.com/drackp2m/playsetonline/commit/fb66295ae16e40b8deca4260caee9c73de1f8d3e)) by Marc Jovaní González

### 🐛 Bug Fixes

- add check to execute release only if deploy is success ([ae9d19c](https://github.com/drackp2m/playsetonline/commit/ae9d19cec34b413b167a6efb30b33865ac8ea2da)) by Marc Jovaní González
- add is-unique-user-prop to register user request dto ([0c57944](https://github.com/drackp2m/playsetonline/commit/0c579447fe5e728212c22880d8ec977535c418a0)) by Marc Jovaní González
- add MIKRO_ORM_CLI env key to gh-pages ([53c2e4f](https://github.com/drackp2m/playsetonline/commit/53c2e4f4dd7a25542a0762a875974a7ab13829cb)) by Marc Jovaní González
- add types for cookie-parser ([a96af87](https://github.com/drackp2m/playsetonline/commit/a96af8712fef12c8625a7688433222f2649e5a42)) by Marc Jovaní González
- **api-definitions,api-sdk**: restore libs package.json ([7a46a96](https://github.com/drackp2m/playsetonline/commit/7a46a964af3f806c3ca058a5e4aa8463db642e40)) by Marc Jovaní González
- **api,api-e2e**: add fix to restore debug ([1a4961c](https://github.com/drackp2m/playsetonline/commit/1a4961c48976366adeb8f0bb61f04b6184d218ea)) by Marc Jovaní González
- **api,app**: dynamic origin on api CORS and add withCredentials interceptor in app ([320ce1e](https://github.com/drackp2m/playsetonline/commit/320ce1ed1ea57caa893248f9daf248310ffccb7f)) by Marc Jovaní González
- **api,app**: solve more eslint warnings ([7d8ff37](https://github.com/drackp2m/playsetonline/commit/7d8ff3733ca1b4ca1ceab2b5ed5225f6802939f6)) by Marc Jovaní González
- **api**: add cookie expiration date ([983c3e8](https://github.com/drackp2m/playsetonline/commit/983c3e847a8ae8e1771164ee3435b600b85ccee8)) by Marc Jovaní González
- **api**: add cookieDomain environment variable ([42707b9](https://github.com/drackp2m/playsetonline/commit/42707b9527ea0e84fffcac35ee5b70c65759d7d1)) by Marc Jovaní González
- **api**: add Injectable decorator to LoginUsecase ([be6118b](https://github.com/drackp2m/playsetonline/commit/be6118b545ab66936862f00849d85296c8c5ba78)) by Marc Jovaní González
- **api**: add ssh key and cert dynamicaly by API_PREFIX env variable ([a777d07](https://github.com/drackp2m/playsetonline/commit/a777d0768fca478272f0a4cb453890e4613b5014)) by Marc Jovaní González
- **api**: allwo origin when undefined ([86383ed](https://github.com/drackp2m/playsetonline/commit/86383edf8cced072325cccdba689b53121f00929)) by Marc Jovaní González
- **api**: check email on registerUseCase only when request contains it ([5dbe298](https://github.com/drackp2m/playsetonline/commit/5dbe298afb8f98800105604ba1c3690a5559bd29)) by Marc Jovaní González
- **api**: correct fork mikro-orm entityManagers in entityRepositories (thx [@adlacruzes](https://github.com/adlacruzes)) ([b27e281](https://github.com/drackp2m/playsetonline/commit/b27e281637242836be8262557cc878cdce838d03)) by Marc Jovaní González
- **api**: createGame and JoinGame Spec with provider overrided on import module ([827e0ff](https://github.com/drackp2m/playsetonline/commit/827e0ff5c15dc9c44d137db4837e004296e14eae)) by Marc Jovaní González
- **api**: fix specs to use cookieDomain ([97090e5](https://github.com/drackp2m/playsetonline/commit/97090e58cb203ccc4f8b8d1c2df236d3a17a2e27)) by Marc Jovaní González
- **api**: remove async property on getData method of AppController ([3c8caa0](https://github.com/drackp2m/playsetonline/commit/3c8caa05042669e5197f1a4467d15baca23c614c)) by Marc Jovaní González
- **api**: remove port on bootstrap message when environment is production ([059bf03](https://github.com/drackp2m/playsetonline/commit/059bf0382fe4b1748a359ff65bf6a148b67e7667)) by Marc Jovaní González
- **api**: remove port on production cron ([afc6741](https://github.com/drackp2m/playsetonline/commit/afc6741bcf302a33e62e1a40d88aa8782dff587d)) by Marc Jovaní González
- **api**: restore api debug, type GetPingsOutput (still does not work) ([8c085ec](https://github.com/drackp2m/playsetonline/commit/8c085ecf07584f3a1f11241b72597737e5e5caa6)) by Marc Jovaní González
- **api**: set sameSite to 'none' ([59ad795](https://github.com/drackp2m/playsetonline/commit/59ad795d5504556396bf877a9d2671b3bc769f75)) by Marc Jovaní González
- **api**: solved type error on GameParticipantRepository ([f1e604b](https://github.com/drackp2m/playsetonline/commit/f1e604bdea8b2e81b7270038705a7bdb49c43282)) by Marc Jovaní González
- **api**: use persistAndFlush instead insert on game-participant repository ([19a7bb3](https://github.com/drackp2m/playsetonline/commit/19a7bb3a5d957bcb88959ab943fb1783f1f93930)) by Marc Jovaní González
- **app,api**: exceptions and errores ([5d9e6db](https://github.com/drackp2m/playsetonline/commit/5d9e6dba1fa242851c9afa78f50677b947408e1c)) by Marc Jovaní González
- **app**: add apple icon and load src images without initial slash ([87db30b](https://github.com/drackp2m/playsetonline/commit/87db30b827b624bde7c28c67bcf5085f2108de47)) by Marc Jovaní González
- **app**: add certs and proxy configs ([7fff4af](https://github.com/drackp2m/playsetonline/commit/7fff4af03cf6c76d47b9320a7f02a967d5f6b57c)) by Marc Jovaní González
- **app**: add manifest to src ([2f7bcaf](https://github.com/drackp2m/playsetonline/commit/2f7bcaf58ba06c25cefd2a8d81388958092a4f9d)) by Marc Jovaní González
- **app**: add mask with webkit ([4f051d6](https://github.com/drackp2m/playsetonline/commit/4f051d60fcbf680f4492dfa9c762369ad1735a10)) by Marc Jovaní González
- **app**: add maskPath to glitchSvgComponent, only apply effect on focus ([0d83bc6](https://github.com/drackp2m/playsetonline/commit/0d83bc61ea0d085ccc7e9878965cbcb5b7114f57)) by Marc Jovaní González
- **app**: add shortcut to root path in `Sets found` message on game section ([074980d](https://github.com/drackp2m/playsetonline/commit/074980dc303572ba18cc44051ed8f8f8423d1569)) by Marc Jovaní González
- **app**: allow defining card sizes in any dimension and rotation ([cf73c4a](https://github.com/drackp2m/playsetonline/commit/cf73c4a007eb6f755e396a71a160ae0a993d4707)) by Marc Jovaní González
- **app**: back to port 3000 on wss environment url ([4996ee8](https://github.com/drackp2m/playsetonline/commit/4996ee8ccf193bc428d46fc4a6e62023920f0179)) by Marc Jovaní González
- **app**: comment ping ws request to server ([10a46f5](https://github.com/drackp2m/playsetonline/commit/10a46f56abe3e096f51ccfd1bcd035c42f6b14b6)) by Marc Jovaní González
- **app**: enable debug on Angular with SSL ([e7f20bb](https://github.com/drackp2m/playsetonline/commit/e7f20bbda8ab1b6c4784edb4c2dc806f7ce406ae)) by Marc Jovaní González
- **app**: finish authInterceptor logic ([78899ab](https://github.com/drackp2m/playsetonline/commit/78899ab4442903a6ac010aca9c07fc937fe5ac51)) by Marc Jovaní González
- **app**: firefox debugger works, zone.js removed, update deps and husky hooks ([50c8212](https://github.com/drackp2m/playsetonline/commit/50c82125a6fbc65431ee91c7eebe628ed9c4458e)) by Marc Jovaní González
- **app**: fix problems with currentUserStore, migrate to new eslint config ([e6d37a4](https://github.com/drackp2m/playsetonline/commit/e6d37a4992fa0853b8450b61b82b01823dc05391)) by Marc Jovaní González
- **app**: fix shape height ([629289d](https://github.com/drackp2m/playsetonline/commit/629289d22c24f6265638c294017d3a3794cbb0dc)) by Marc Jovaní González
- **app**: highlight now works fine ([ea404b6](https://github.com/drackp2m/playsetonline/commit/ea404b6381ee3b10410f33d1c9aa6db1b86bd177)) by Marc Jovaní González
- **app**: improve hability to rotate card shape component ([3edef16](https://github.com/drackp2m/playsetonline/commit/3edef16835c562a4f3176726d46a91bb554fb960)) by Marc Jovaní González
- **app**: improve order of mixins in scss loops ([1c07bc8](https://github.com/drackp2m/playsetonline/commit/1c07bc84a31576614a8e38ce5ae84b9c17744fab)) by Marc Jovaní González
- **app**: make register and login forms responsive ([e777b7e](https://github.com/drackp2m/playsetonline/commit/e777b7ee93f60deaba6453d9600c1a134d7eccfa)) by Marc Jovaní González
- **app**: make responsive sections border-radius, shadow and spacing ([814ac00](https://github.com/drackp2m/playsetonline/commit/814ac00a8ef1e5219a13bb74a3b8fb699a75f5af)) by Marc Jovaní González
- **app**: mock LoginGQL ([075d5da](https://github.com/drackp2m/playsetonline/commit/075d5daf8352d70209ed12a78c9f80bb0c771c6e)) by Marc Jovaní González
- **app**: remove error of logout button ([a9872eb](https://github.com/drackp2m/playsetonline/commit/a9872eb48aef2e613d7632270f72fbfcacfd75ea)) by Marc Jovaní González
- **app**: remove not used injection ([e9afa79](https://github.com/drackp2m/playsetonline/commit/e9afa79f66137cdf0dbd8c805363d7afd1aec28a)) by Marc Jovaní González
- **app**: remove ultra cheats on init ([7a9a8de](https://github.com/drackp2m/playsetonline/commit/7a9a8de7cafe5fecc97cd54a21aa2e4c2aab6d3b)) by Marc Jovaní González
- **app**: replace more set- with app- :S ([20c297d](https://github.com/drackp2m/playsetonline/commit/20c297d0fce2868356a5ce32414c366cc434a803)) by Marc Jovaní González
- **app**: replace set-_ to app-_ on scss files ([a4482ea](https://github.com/drackp2m/playsetonline/commit/a4482eae9b84832f8df757287905b42f5dec67c5)) by Marc Jovaní González
- **app**: solve some bugs ([f127b6f](https://github.com/drackp2m/playsetonline/commit/f127b6fd0558a772ee54d1b39f940e7a9b39f793)) by Marc Jovaní González
- **app**: solve won component height ([a3a6740](https://github.com/drackp2m/playsetonline/commit/a3a6740cc3a399453fdd82582472f0bbb0d741fe)) by Marc Jovaní González
- **app**: solved the problem with authInterceptor making requests without info ([74ab2f6](https://github.com/drackp2m/playsetonline/commit/74ab2f61c76915a20cc1638e40b09e9381073545)) by Marc Jovaní González
- **app**: try to load typography relatively ([0844e85](https://github.com/drackp2m/playsetonline/commit/0844e8521cd3b446e911dc60d1d33d0199045544)) by Marc Jovaní González
- **app**: try to use proxy ([2ea429f](https://github.com/drackp2m/playsetonline/commit/2ea429f4b19bc00b50888b0bb037a54537c105cb)) by Marc Jovaní González
- **app**: update add card message when there are Sets on the table ([3c72b0d](https://github.com/drackp2m/playsetonline/commit/3c72b0d8f0be03d68adf1cd831f163668626e7e0)) by Marc Jovaní González
- **app**: update deps and add navigation with hash on Angular ([3859d65](https://github.com/drackp2m/playsetonline/commit/3859d654413aaa6e48fd8915f7ddf7b5d8bea574)) by Marc Jovaní González
- **app**: upgrade apple icon, add apple app capable to true ([b9c6fab](https://github.com/drackp2m/playsetonline/commit/b9c6fab86b81ebb6f456ffc270f026bac16229e0)) by Marc Jovaní González
- **app**: user api.playsetonline.com on environment ([07ca554](https://github.com/drackp2m/playsetonline/commit/07ca5549ab78dbe9387d2e429fcf80b12b352c65)) by Marc Jovaní González
- **app**: vertical cards now look good in Safari ([4c6f709](https://github.com/drackp2m/playsetonline/commit/4c6f709d40085033a636180d0b487e0c55910cd1)) by Marc Jovaní González
- **app**: wip: try to rebuild old project ([f2d4023](https://github.com/drackp2m/playsetonline/commit/f2d4023de21372c818172934e23835207bd15f02)) by Marc Jovaní González
- devcontainer docker-compose example service name ([b9837e4](https://github.com/drackp2m/playsetonline/commit/b9837e4b790e370f29a73f7a1c457788171025b5)) by Marc Jovaní González
- enable romantic-release-bot <3 ([ec9f9fe](https://github.com/drackp2m/playsetonline/commit/ec9f9fef866666e1b26d04bc6c2589b1d284ebc1)) by Marc Jovaní González
- enable romantic-release-bot <3 ([1c6a31f](https://github.com/drackp2m/playsetonline/commit/1c6a31ff13f81beeafb7ec94a8e8ce7571f0d7a1)) by Marc Jovaní González
- enable romantic-release-bot <3 ([6ab26ab](https://github.com/drackp2m/playsetonline/commit/6ab26ab3d486d22217dc082cdf2edc9301fb514f)) by Marc Jovaní González
- enable to use cert on database connection ([860e85f](https://github.com/drackp2m/playsetonline/commit/860e85f411353a54ff2784b0c1de1adb0dcfb3a8)) by Marc Jovaní González
- fix app tests and update test package command for run all tests ([22cf05c](https://github.com/drackp2m/playsetonline/commit/22cf05cc8c67d8df5f1cf97ce5eea37dc41f34f9)) by Marc Jovaní González
- fix emoji left? ([d219658](https://github.com/drackp2m/playsetonline/commit/d219658c0546072898af41060410341d60fec249)) by Marc Jovaní González
- github actions from main ([65fc8b4](https://github.com/drackp2m/playsetonline/commit/65fc8b4b5fa0d471e0f421da280e948fafebd9c0)) by Marc Jovaní González
- improve tsconfig's to run MikroOrm migrations ([a0930ce](https://github.com/drackp2m/playsetonline/commit/a0930ce2d8f3e36dc50a57e213f49591383a2838)) by Marc Jovaní González
- release not needs any other job ([91a6f5f](https://github.com/drackp2m/playsetonline/commit/91a6f5fdb948f9a9023e521bf94e3ab0ea6d3818)) by Marc Jovaní González
- remove release configuration from package.json, rename release file ([469df13](https://github.com/drackp2m/playsetonline/commit/469df134b79943a94e3120fa5f08cc05613c35f3)) by Marc Jovaní González
- remove release from deploy ([80bcfdf](https://github.com/drackp2m/playsetonline/commit/80bcfdf3231fc00eafb311fc8a1c0a23b0c74f6e)) by Marc Jovaní González
- remove slash from url ([5a276b1](https://github.com/drackp2m/playsetonline/commit/5a276b17048e18e178d8eb117b25e642f54a71f4)) by Marc Jovaní González
- rename docker stages ([14f4008](https://github.com/drackp2m/playsetonline/commit/14f40087feee0430179280654903c9dbd2b4e639)) by Marc Jovaní González
- rename docker stages ([424ea30](https://github.com/drackp2m/playsetonline/commit/424ea30350c7e77545fc66f496a3c8f4839eda88)) by Marc Jovaní González
- rename workflows and execute release after deploy finish ([b3c4875](https://github.com/drackp2m/playsetonline/commit/b3c48754ddabd4b844bdfb905dcd4de213c40f6e)) by Marc Jovaní González
- try to fix release on ci ([4dbbe44](https://github.com/drackp2m/playsetonline/commit/4dbbe44644c1216a0566144d0e5ac89a7d8dfa87)) by Marc Jovaní González
- update package-lock ([b0a6aa5](https://github.com/drackp2m/playsetonline/commit/b0a6aa56b387ea36c3ce79853452a6a35e3c9411)) by Marc Jovaní González
- update yarn.lock ([77d4748](https://github.com/drackp2m/playsetonline/commit/77d474820390d57dcbd9380e240579c6125646a2)) by Marc Jovaní González

### 📚 Documentation

- update README ([be42334](https://github.com/drackp2m/playsetonline/commit/be42334ef4b9c7695d2929fd4f686a15d1994126)) by Marc Jovaní González

### 💻 Continuous Integration

- add cache with yarn ([09d0f1d](https://github.com/drackp2m/playsetonline/commit/09d0f1d426a94a3c0ecf704eb702e644d7cb2f5f)) by Marc Jovaní González
- add deps again and fix typography asset load ([a46df2f](https://github.com/drackp2m/playsetonline/commit/a46df2f9a8f8c32ef4745dbae3eebb34e912572f)) by Marc Jovaní González
- add permissions and pages setup ([cf59d6b](https://github.com/drackp2m/playsetonline/commit/cf59d6b95052334eaec9a0aa2c059ce4b133926a)) by Marc Jovaní González
- add quotes (again) ([b848d2a](https://github.com/drackp2m/playsetonline/commit/b848d2a1b2e6c800b0836e782d30607cb0b6ec9d)) by Marc Jovaní González
- add quotes to build url ([84f1c63](https://github.com/drackp2m/playsetonline/commit/84f1c6396815d9e38d0bd643245624c3e1f29dd2)) by Marc Jovaní González
- add semantic release config file ([33c45e4](https://github.com/drackp2m/playsetonline/commit/33c45e4fc51332a26896011b0ffded87d02faebe)) by Marc Jovaní González
- add slash at end T_T ([1ba4725](https://github.com/drackp2m/playsetonline/commit/1ba4725f1747cf36945327bcd263ad37110944ad)) by Marc Jovaní González
- add tests to ci ([f45945b](https://github.com/drackp2m/playsetonline/commit/f45945bab52d59a306131192f0240c650a50558e)) by Marc Jovaní González
- **app**: add /browser to build upload artifact ([a2827fd](https://github.com/drackp2m/playsetonline/commit/a2827fdb6f5b7b0c7000403466acd469e1dd23f3)) by Marc Jovaní González
- **app**: build using yarn ([bd78515](https://github.com/drackp2m/playsetonline/commit/bd785158d5d9da8337a9275343e8ea09d54de0f5)) by Marc Jovaní González
- **app**: try to run nx from node_modules ([5cb51cb](https://github.com/drackp2m/playsetonline/commit/5cb51cb289d4fb99382011805fb54144ebace56f)) by Marc Jovaní González
- **app**: update yarn lock ([32e1f9b](https://github.com/drackp2m/playsetonline/commit/32e1f9b3c01b355fae48ef9b0dd909685bd87b00)) by Marc Jovaní González
- change base href of app build ([c3c20f8](https://github.com/drackp2m/playsetonline/commit/c3c20f8b80a8b7627622ab46e8ad7f42c6244fa5)) by Marc Jovaní González
- change trigger to merge on main branch ([94a324b](https://github.com/drackp2m/playsetonline/commit/94a324b5cd33d20a138f1c5e343db22d521fe6a0)) by Marc Jovaní González
- check semantic-release notes on github ([d698bfe](https://github.com/drackp2m/playsetonline/commit/d698bfec0b835d374992ef69d80fc6b2b4b6afc7)) by Marc Jovaní González
- fix github pages commands ([873552c](https://github.com/drackp2m/playsetonline/commit/873552c397f66fdc5291a2037aac4ffdb56b6abb)) by Marc Jovaní González
- fix step name =) ([dfdd2df](https://github.com/drackp2m/playsetonline/commit/dfdd2dfa772a3f6eb1fb95a74f4ac22b94dc0a04)) by Marc Jovaní González
- remove deps and add install to other steps ([83e6b44](https://github.com/drackp2m/playsetonline/commit/83e6b44f8839428abaa85a060a4e120d713bed2d)) by Marc Jovaní González
- remove deps on deploy (again) ([5dc9c9e](https://github.com/drackp2m/playsetonline/commit/5dc9c9e0fb87fa986826d1e0ab4f23c3eaa2efaf)) by Marc Jovaní González
- test github actions ([841804e](https://github.com/drackp2m/playsetonline/commit/841804ea9dcfd72922bd918a75e366d6e7b6d1d8)) by Marc Jovaní González
- try to fix ci ([3a5d180](https://github.com/drackp2m/playsetonline/commit/3a5d1802e137cabe010df81a3df3bbb4729ab741)) by Marc Jovaní González
- try to lauch deploy on push to main ([5b2151f](https://github.com/drackp2m/playsetonline/commit/5b2151fcb2badf928c877dca329b8f7e860acb36)) by Marc Jovaní González
- try to use base_url ([176fb2b](https://github.com/drackp2m/playsetonline/commit/176fb2b6d3b9064d15390cbc4586bab25372527d)) by Marc Jovaní González
- try to use new account to semantic release ([a6792b1](https://github.com/drackp2m/playsetonline/commit/a6792b1f15a89e10a1e8cad1ff77f26aec978bf0)) by Marc Jovaní González
- try to use npm ([1472be0](https://github.com/drackp2m/playsetonline/commit/1472be0db506f0345196dba4391d4af11baa30ec)) by Marc Jovaní González
- try to use npm ([be85e93](https://github.com/drackp2m/playsetonline/commit/be85e93da614e41de18aded519aacc0b5324a5eb)) by Marc Jovaní González
- update main branch changes detection ([a324d3e](https://github.com/drackp2m/playsetonline/commit/a324d3e4fe014ef1b3e96005e89eb556e62d7cb9)) by Marc Jovaní González
- use package-lock again, copy dist to src ([63cf611](https://github.com/drackp2m/playsetonline/commit/63cf6118267cdb70c1d44c49884396c698bcc4aa)) by Marc Jovaní González
- use page url instead base url ([214d2b4](https://github.com/drackp2m/playsetonline/commit/214d2b49e61c68508158b56142f1d8e70b7ff5ad)) by Marc Jovaní González

### 🎒 Chores

- add "run" to Dockerfile npm commands ([6294fe6](https://github.com/drackp2m/playsetonline/commit/6294fe60cde4701b051e9fece58392a5fb061fcd)) by Marc Jovaní González
- add comment ([d52721f](https://github.com/drackp2m/playsetonline/commit/d52721f7548c6dc634575c45bd595cbfa2bb46c6)) by Marc Jovaní González
- add npm cache to github pages, improve package commands, fix nx many ([1bd8706](https://github.com/drackp2m/playsetonline/commit/1bd870690a679acc79be7821ebc65aa74d53a9f2)) by Marc Jovaní González
- add repository on package.json ([59cffe4](https://github.com/drackp2m/playsetonline/commit/59cffe41021b25e88b6d6c79b27c40d68693f31a)) by Marc Jovaní González
- add slash to base href ([9842f1b](https://github.com/drackp2m/playsetonline/commit/9842f1be253ce27a1b6b938ec38281146be53caa)) by Marc Jovaní González
- add version and footer to release notes ([6c4ae34](https://github.com/drackp2m/playsetonline/commit/6c4ae3412fbc609652a81649037b7e70710ffc90)) by Marc Jovaní González
- **api,api-e2e,app,app-e2e**: enable eslint rules ([7a74e7f](https://github.com/drackp2m/playsetonline/commit/7a74e7f1a7e631bd4911fd145606f499c04eea32)) by Marc Jovaní González
- **api,app**: update deps ([902dfc2](https://github.com/drackp2m/playsetonline/commit/902dfc2274a735a67399d6db58740716ded62b48)) by Marc Jovaní González
- **api,app**: upgrade nx and other deps ([46689a0](https://github.com/drackp2m/playsetonline/commit/46689a03693449bf9d0b3788ed88062057ebbcad)) by Marc Jovaní González
- **app**: artifacts to v3 again ([5d517a9](https://github.com/drackp2m/playsetonline/commit/5d517a9b07528b33375a447a9c12d62e9fcfdbf0)) by Marc Jovaní González
- **app**: back to ubuntu-latest ([72d6aaa](https://github.com/drackp2m/playsetonline/commit/72d6aaa220a411ff9cc42d227a189cb2d7261a37)) by Marc Jovaní González
- **app**: build app on dist/set-online ([88495fc](https://github.com/drackp2m/playsetonline/commit/88495fc41763a53237d5fbea3b209f4c04ea0277)) by Marc Jovaní González
- **app**: build to docs ([0585734](https://github.com/drackp2m/playsetonline/commit/058573490c7de12e400f78093b446425181a392e)) by Marc Jovaní González
- **app**: configure mikro-orm for autoload entities ([03bdfae](https://github.com/drackp2m/playsetonline/commit/03bdfae57c5289b38514d1a0e6a2feccc2b9f1d6)) by Marc Jovaní González
- **app**: ignore dist app to try github pages ([df18734](https://github.com/drackp2m/playsetonline/commit/df187341635b7921347e253a42766bf87260dee5)) by Marc Jovaní González
- **app**: increase budgets component style maximumError to 8kb ([f7c4b8c](https://github.com/drackp2m/playsetonline/commit/f7c4b8c993b067e8c8d0a401e63df92014fd3de8)) by Marc Jovaní González
- **app**: try actions v4 ([3428a56](https://github.com/drackp2m/playsetonline/commit/3428a560525d19b04e04873bc645d2834cd1d48b)) by Marc Jovaní González
- **app**: upgrade all deploy steps to v3 ([2c1fbb9](https://github.com/drackp2m/playsetonline/commit/2c1fbb9df0c918539f4675bcb02abfa15aa0603c)) by Marc Jovaní González
- back to env port on main.ts (api) ([44a76f2](https://github.com/drackp2m/playsetonline/commit/44a76f2e8838ee52615437cde1532bd03ce53219)) by Marc Jovaní González
- back to run all tests in gh-pages action ([ab60e59](https://github.com/drackp2m/playsetonline/commit/ab60e59df0fc547813b8d8e3fc6a927e80433c7b)) by Marc Jovaní González
- chmod with sudo ([19a4bc4](https://github.com/drackp2m/playsetonline/commit/19a4bc4bc298287613a0f10d21b77551dc68f4a7)) by Marc Jovaní González
- create Dockerfile for production ([8d744ea](https://github.com/drackp2m/playsetonline/commit/8d744eac0f1ce771e7c090f0c8f66b3c85dd6f24)) by Marc Jovaní González
- enable lint on html files ([cf4d17c](https://github.com/drackp2m/playsetonline/commit/cf4d17cba84f5062bbf79fadfec8066ad543dded)) by Marc Jovaní González
- expose port 10_000 ([e20241c](https://github.com/drackp2m/playsetonline/commit/e20241c81860c5d26dd237a8b02f8fed711cee12)) by Marc Jovaní González
- fix devcontainer and update nx to 19.8 ([0e1c5ff](https://github.com/drackp2m/playsetonline/commit/0e1c5ff9f33c7e1daf79a7985867d4f27582c15a)) by Marc Jovaní González
- fix eslint config for all projects ([f108c2c](https://github.com/drackp2m/playsetonline/commit/f108c2c4e5672bb2153a673e7a86ed3b2a80f1d6)) by Marc Jovaní González
- fix yarn lock ([78dcfc6](https://github.com/drackp2m/playsetonline/commit/78dcfc69654a07e36b47e3b914fe60ca3b07ba20)) by Marc Jovaní González
- gh-pages add permissions to write ([efddb84](https://github.com/drackp2m/playsetonline/commit/efddb841f6199260392c428dca9ec155be1826d9)) by Marc Jovaní González
- ignore definitions file ([56aac5f](https://github.com/drackp2m/playsetonline/commit/56aac5f93368a436101f0dcf3ebf33b9a60e7163)) by Marc Jovaní González
- ignore devcontainer docker compose, and remove from git ([fdf8a7f](https://github.com/drackp2m/playsetonline/commit/fdf8a7f13205af7c599134ae008ae647531914fd)) by Marc Jovaní González
- improve production port debug and dockerfile with dynamic port expose ([20b0ad6](https://github.com/drackp2m/playsetonline/commit/20b0ad6e0f24cab7e83012c057103e952a4bfe83)) by Marc Jovaní González
- improve production port debug and dockerfile with dynamic port expose ([ac71822](https://github.com/drackp2m/playsetonline/commit/ac71822a767652fda0df96f891ef6c4275490023)) by Marc Jovaní González
- improve release commit message and skip this on husky ([69e4949](https://github.com/drackp2m/playsetonline/commit/69e4949af5c34eff957766a0cfafd0274ac50026)) by Marc Jovaní González
- migrate nx ([69bc159](https://github.com/drackp2m/playsetonline/commit/69bc159394258a7bfa68c5c638f865d2ebae9159)) by Marc Jovaní González
- migrate nx to 16.5.2 ([df3732f](https://github.com/drackp2m/playsetonline/commit/df3732f698e922dcb7749481e4a97064d7c8b8fd)) by Marc Jovaní González
- nx to 18.1.1 ([1ca5ba6](https://github.com/drackp2m/playsetonline/commit/1ca5ba6abfee5fb65d1ac53616e0c572869a15ba)) by Marc Jovaní González
- nx to 18.1.1 ([0316cf1](https://github.com/drackp2m/playsetonline/commit/0316cf15852eec330e87235015442c5525d5d1df)) by Marc Jovaní González
- prepare devcontainer ([9a1a048](https://github.com/drackp2m/playsetonline/commit/9a1a0482df8e3a047f9df188a565391d9015f2b1)) by Marc Jovaní González
- reduce max commit chars to 70 ([1684894](https://github.com/drackp2m/playsetonline/commit/16848944effb5d522e2e33e6e10fe0d168f4432d)) by Marc Jovaní González
- **release**: 0.0.1 [skip ci] ([7fed677](https://github.com/drackp2m/playsetonline/commit/7fed6774dc34bf1989423f0e788a137101c25b2e)) by romantic-release-bot
- **release**: 0.0.1 [skip ci] ([2867f03](https://github.com/drackp2m/playsetonline/commit/2867f03625ba0f0edd253ab5f9c1a44ed7648216)) by drackp2m-semantic-release-bot
- **release**: 0.1.0 [skip ci] ([cf9cf96](https://github.com/drackp2m/playsetonline/commit/cf9cf969a01889ceca16ffd664309fe3deb12b02)) by Marc Jovaní González
- **release**: 0.1.0 [skip ci] ([f8d0006](https://github.com/drackp2m/playsetonline/commit/f8d00065fd33c2017478a455287e9bbf28b85527)) by romantic-release-bot
- **release**: 0.1.1 [skip ci] ([7ae881e](https://github.com/drackp2m/playsetonline/commit/7ae881e13dd77a2b06c9ce63369674c70c60f2ac)) by romantic-release-bot
- remove .env ([353e329](https://github.com/drackp2m/playsetonline/commit/353e329bf069576eafe65f94aa041ebdbe7bfbdf)) by Marc Jovaní González
- remove cache from gh-pages node setup ([294778b](https://github.com/drackp2m/playsetonline/commit/294778b526b0674626ec7ce892480352f6e47434)) by Marc Jovaní González
- remove chmod on .env ([d8121e1](https://github.com/drackp2m/playsetonline/commit/d8121e14df0c9998fb9b90eb474b420c244a94e3)) by Marc Jovaní González
- remove copy of readme and remove prettier in html ([5b97df0](https://github.com/drackp2m/playsetonline/commit/5b97df08089aebb03831abed0ef79a434cfef4c0)) by Marc Jovaní González
- remove debug on lint-staged ([06e34fd](https://github.com/drackp2m/playsetonline/commit/06e34fd24a3847409535ea94bf42728dcf18bdbd)) by Marc Jovaní González
- remove host 0.0.0.0 ([217c884](https://github.com/drackp2m/playsetonline/commit/217c884893c3ef8ef4a74b62e6addfe850882ecb)) by Marc Jovaní González
- remove host on main api bootstrap ([33fb7f3](https://github.com/drackp2m/playsetonline/commit/33fb7f31204a55a7ca1c4eb4bdf2eb2ca72b01a1)) by Marc Jovaní González
- remove husky prepare command ([011d7c6](https://github.com/drackp2m/playsetonline/commit/011d7c6c96dfb05d6de05920577a1369f8f04e0e)) by Marc Jovaní González
- remove hyphwn ([2cfc015](https://github.com/drackp2m/playsetonline/commit/2cfc015c27378ebeeb5b0c4c90ada9d0a2919029)) by Marc Jovaní González
- remove nx workspace data from git ([5514116](https://github.com/drackp2m/playsetonline/commit/5514116ce7f9483d3210469ad6f94f91905bb4c4)) by Marc Jovaní González
- remove scss replaces :( ([54ce1ef](https://github.com/drackp2m/playsetonline/commit/54ce1ef4261a73976fa6c0c89e253864caeb1507)) by Marc Jovaní González
- remove unneeded ocnfiguration of settings.json ([89d9a35](https://github.com/drackp2m/playsetonline/commit/89d9a3557b4d29269fb6bb9b912e9da7954764dc)) by Marc Jovaní González
- run install with npm ci ([a867b64](https://github.com/drackp2m/playsetonline/commit/a867b6429e8e77cc376806b4d84ef1a85bdb73ea)) by Marc Jovaní González
- run ls -la and id ([6d9e261](https://github.com/drackp2m/playsetonline/commit/6d9e26136fc7d6214d1fc3893fbd0e30eae26864)) by Marc Jovaní González
- run only app tests ([07fbe72](https://github.com/drackp2m/playsetonline/commit/07fbe727a57afcde43970feca23e4adc17cc383c)) by Marc Jovaní González
- set api url to localhost and update Angular prod backend url ([b9af53d](https://github.com/drackp2m/playsetonline/commit/b9af53d22500b4e60195d3b29957228532a087fd)) by Marc Jovaní González
- test new deploy ([5f231ae](https://github.com/drackp2m/playsetonline/commit/5f231ae467411849a8be248bf920bd532bc57ab6)) by Marc Jovaní González
- try new deploy ([ac6414c](https://github.com/drackp2m/playsetonline/commit/ac6414c88f8081d7608331a99264f5259e3020bf)) by Marc Jovaní González
- try to add mikro-orm environment variables ([3001bfb](https://github.com/drackp2m/playsetonline/commit/3001bfb318330f6238d2eb1122009237b3737fae)) by Marc Jovaní González
- try to add permissions to .env file (of Render) ([4aa29e7](https://github.com/drackp2m/playsetonline/commit/4aa29e7fb171e9e67987e694cc4a2c51962df06e)) by Marc Jovaní González
- try to back to npm ([dfd5c31](https://github.com/drackp2m/playsetonline/commit/dfd5c3166af96aa29b4d5b2094cbdbcb5fba7345)) by Marc Jovaní González
- try to execute prod docker commands with yarn ([f091863](https://github.com/drackp2m/playsetonline/commit/f0918636805a702cabed707ecebcc29fac2583f5)) by Marc Jovaní González
- try to fix github actions ([d26f7cb](https://github.com/drackp2m/playsetonline/commit/d26f7cb3dfa5ea522d10601c9306d86c8c24d50c)) by Marc Jovaní González
- try to fix path from artifacts upload ([ca08a5f](https://github.com/drackp2m/playsetonline/commit/ca08a5f9c02f6caa8c467a4422c1cfe1992a9215)) by Marc Jovaní González
- try to restore type-enum rule on commitizen ([a743fba](https://github.com/drackp2m/playsetonline/commit/a743fba763d31b638c90ffb8725a6fad7689eab5)) by Marc Jovaní González
- try to use alpine by Carlos Aragón ([8d7b74c](https://github.com/drackp2m/playsetonline/commit/8d7b74c95679d1cbfcaf47d63cd214e8b425080c)) by Marc Jovaní González
- try to use semantic release (again) ([7d3c6d2](https://github.com/drackp2m/playsetonline/commit/7d3c6d2c5ecf70bad488c5d4ed20380903478b04)) by Marc Jovaní González
- update .env.example ([5b86619](https://github.com/drackp2m/playsetonline/commit/5b86619eecd2b5da8c1c15293f7953378fc0b7d2)) by Marc Jovaní González
- update all dependencies ([beff13b](https://github.com/drackp2m/playsetonline/commit/beff13b74c89f9b5efc4d1b5ccac52149dbf5de5)) by Marc Jovaní González
- update all deps ([2d7a78a](https://github.com/drackp2m/playsetonline/commit/2d7a78a253acadb009180a7b5318537f861d10a3)) by Marc Jovaní González
- update all deps to latest compatible version ([89262a7](https://github.com/drackp2m/playsetonline/commit/89262a7714096d1d1e2e13903e601feab0898901)) by Marc Jovaní González
- update all deps to latest version (except typescript) ([34a3e21](https://github.com/drackp2m/playsetonline/commit/34a3e2189a5b6d5813e57fe632cbe4b46d5c02e8)) by Marc Jovaní González
- update deploy to node 18 ([a3c62eb](https://github.com/drackp2m/playsetonline/commit/a3c62ebd748b633486954f76004d707abc069dea)) by Marc Jovaní González
- update deps ([6d5c417](https://github.com/drackp2m/playsetonline/commit/6d5c4175a2a88e8153b051582ed7421824f91a88)) by Marc Jovaní González
- update docker node image, add jest global setup to unit tests ([90c37a1](https://github.com/drackp2m/playsetonline/commit/90c37a1c063ce90704fbbe441f315bbda3d67045)) by Marc Jovaní González
- update Dockerfile ([55f2be2](https://github.com/drackp2m/playsetonline/commit/55f2be28e32ebeff105b79acad293e6810da8d67)) by Marc Jovaní González
- update Dockerfile ([5f5cf63](https://github.com/drackp2m/playsetonline/commit/5f5cf63749ce309b5b394bf5879a2e261bfba9b8)) by Marc Jovaní González
- update Dockerfile to test build on Render ([186c7ae](https://github.com/drackp2m/playsetonline/commit/186c7aea5f59503530815c0d9eeacf53308eae2b)) by Marc Jovaní González
- update nx to 19.6.4 ([4ad3eb5](https://github.com/drackp2m/playsetonline/commit/4ad3eb5d50a455989b175f7332aaf855a4e72a75)) by Marc Jovaní González
- update nx to 19.6.4 ([522e49d](https://github.com/drackp2m/playsetonline/commit/522e49d4f6bd9223cbdae07adc942d80b524c57a)) by Marc Jovaní González
- update package-lock ([6de8635](https://github.com/drackp2m/playsetonline/commit/6de863520332bf083920629d5238dba3e251c50b)) by Marc Jovaní González
- upgrade all deps to last version (except ts-morph) ([65942dd](https://github.com/drackp2m/playsetonline/commit/65942dd308d92231c5c0b2aedf343fa7a1eba8f6)) by Marc Jovaní González
- upgrade deps ([55fd3c5](https://github.com/drackp2m/playsetonline/commit/55fd3c53ecdb55221801e51dba3dd613e12f8f1f)) by Marc Jovaní González
- upgrade deps ([419b44f](https://github.com/drackp2m/playsetonline/commit/419b44f287b9be16a7262da8e5e49c7edd943f48)) by Marc Jovaní González
- upgrade deps ([0459936](https://github.com/drackp2m/playsetonline/commit/0459936c2e0abde9f6277f1bf5686130538c54a6)) by Marc Jovaní González
- upgrade deps ([ed81449](https://github.com/drackp2m/playsetonline/commit/ed81449520678f7e6573208701bd2e377b059da3)) by Marc Jovaní González
- upgrade deps ([4409917](https://github.com/drackp2m/playsetonline/commit/44099175bf0cd9e3b513ed154afc9b4d75ad5056)) by Marc Jovaní González
- upgrade deps ([5be53c5](https://github.com/drackp2m/playsetonline/commit/5be53c51e052387dd122bc2984987376304de620)) by Marc Jovaní González
- upgrade deps (except typescript 5.1.6 => 5.2.2 ([5e61347](https://github.com/drackp2m/playsetonline/commit/5e613476a8103ec0e46241e0dceca43cf4f01b4e)) by Marc Jovaní González
- upgrade deps and add all env keys to gh-pages ([d5cf65f](https://github.com/drackp2m/playsetonline/commit/d5cf65f9135127244741584398772663a3d5c5e0)) by Marc Jovaní González
- upgrade deps to last version ([218ed70](https://github.com/drackp2m/playsetonline/commit/218ed70bcd806f971f85201b4e566689505a3ae2)) by Marc Jovaní González
- upgrade node to 22.7 ([0b3326e](https://github.com/drackp2m/playsetonline/commit/0b3326e1c6dcce4718b3b3ae20e900d0aad1d80e)) by Marc Jovaní González
- upgrade npm deps ([adccb8d](https://github.com/drackp2m/playsetonline/commit/adccb8d4ebb285955269893b53acabf57261a651)) by Marc Jovaní González
- upgrade nx from 19.4.1 to 19.5.0 ([aaba67a](https://github.com/drackp2m/playsetonline/commit/aaba67a857571237f6e6b8819ba2a3e9942c1465)) by Marc Jovaní González
- upgrade nx to 18.1.3 and add node-cache dep ([dbf4ced](https://github.com/drackp2m/playsetonline/commit/dbf4cedb1ee1505737e2f5d9b04da5dc53072402)) by Marc Jovaní González
- upgrade nx to 20.0.1 ([ad762cf](https://github.com/drackp2m/playsetonline/commit/ad762cffd12d89e3049200617824ecbdfd1feba6)) by Marc Jovaní González
- upgrade nx version ([b41e186](https://github.com/drackp2m/playsetonline/commit/b41e186d1957c3c85394154e8246ea6fe3d3c7b6)) by Marc Jovaní González
- upgrade nx, remove react webpack plugin and svgr webpack ([c04e1ec](https://github.com/drackp2m/playsetonline/commit/c04e1ece77f7919f61c9f56f2df1a37bd102de6e)) by Marc Jovaní González
- upgrade package deps ([43a7ace](https://github.com/drackp2m/playsetonline/commit/43a7ace22d429d0a5efeedf8c90f587963ff4ee4)) by Marc Jovaní González
- upgrade some deps ([8dfb0e9](https://github.com/drackp2m/playsetonline/commit/8dfb0e9e5784d6bee921ab0f1894593eb142c58d)) by Marc Jovaní González
- upgrade some deps ([e9c1259](https://github.com/drackp2m/playsetonline/commit/e9c125949fe39c1d59ee1712adb0a19f483770a0)) by Marc Jovaní González
- upgrade to node 22.9 and postgres 17.0 (with alpine 3.20) ([e2617f0](https://github.com/drackp2m/playsetonline/commit/e2617f0db48d59babcdd363cb0ef322b91385dd3)) by Marc Jovaní González
- upgrade to nx 17 and use npm in all places ([d99a01e](https://github.com/drackp2m/playsetonline/commit/d99a01e83ee165246e3c9436998b03463243e0a1)) by Marc Jovaní González
- upgrade to nx 20.0.3 ([6d68f5f](https://github.com/drackp2m/playsetonline/commit/6d68f5f8f62504bb2d36efe8a03eaf8a4d5322fc)) by Marc Jovaní González
- use node 20.8 in github actions ([2df6063](https://github.com/drackp2m/playsetonline/commit/2df60633b177307a52851b3e05ed2ff032725727)) by Marc Jovaní González

**Full Changelog**: https://github.com/drackp2m/playsetonline/compare/...v0.0.1
