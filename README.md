# CVN chargen

[![CI and CD](https://github.com/rceuls/cvn-chargen/actions/workflows/ci-wf.yml/badge.svg)](https://github.com/rceuls/cvn-chargen/actions/workflows/ci-wf.yml)
[![codecov](https://codecov.io/gh/rceuls/cvn-chargen/branch/main/graph/badge.svg)](https://codecov.io/gh/rceuls/cvn-chargen)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=rceuls_cvn-chargen&metric=alert_status)](https://sonarcloud.io/dashboard?id=rceuls_cvn-chargen)

OSE character generator. [Github Page](https://rceuls.github.io/cvn-chargen/).

## Local installation

1. Get a recent node version and yarn.
2. `yarn install`
3. `yarn run start`

This is a standard `create-react-app`, original readme is at README.orig.md

## Usage

After running the project, the URL is displayed. Click on it, a random character is generated using my own houserules. Feel free to adjust.

### Houserules

1. 4d6 drop lowest, in order
2. prefer human classes (fighter, cleric, magic-user)

## Organisation

The entrypoint of the character generator is in `./src/services/character.generator.ts`. Best start from there. Rest of the code should be pretty readable.

### Contributing

Pull requests welcome. Before making big changes, feel free to file a ticket for improvement so we can talk this over.

## Sources

- Equipment packs from <https://basicfantasy.org/downloads.html>
- Names from <https://medium.com/@barelyharebooks/a-master-list-of-300-fantasy-names-characters-towns-and-villages-47c113f6a90b>
- Links a lot to OSE SRD @ <https://oldschoolessentials.necroticgnome.com/srd/index.php/Main_Page>
- Website Icon by [Lorc, Delapouite & contributors](https://game-icons.net/) is licensed under [(CC BY 3.0)](https://creativecommons.org/licenses/by/3.0/)
- Character portraits by [Jeff Preston](http://team-preston.com/), licensed under [(CC BY 3.0)](https://creativecommons.org/licenses/by/3.0/)
- Character traits from Maze Rats - "Version 4.3" is released under a Creative Commons Attribution 4.0 International (CC BY 4.0) license - <https://creativecommons.org/licenses/by/4.0/deed.ast>
