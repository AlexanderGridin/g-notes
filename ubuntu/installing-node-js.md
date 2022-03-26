# Installing NodeJS

## Installing using NVM (node version manager)

### CURL

```bash
# Checking curl version
$ curl -- version

# If curl not installed
$ sudo apt install curl
```

Download and install Node Version Manager as below.

```bash
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/master/install.sh | bash

$ source ~/.bashrc
$ nvm --version
# after this you will see the nvm version
```

Check the available Node.js versions.

```bash
$ nvm list-remote
```

Install node js

```bash
$ nvm install v16
```

Checking vestion of node js

```bash
$ node --version
```

Checking version of npm

```bash
$ npm --version
```

Switching to other version

```bash
$ nvm use v15.3.1
```
