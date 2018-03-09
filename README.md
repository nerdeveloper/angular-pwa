 <h1 align="center">
  <img src="https://github.com/paypal/glamorous/raw/master/other/logo/full.png" alt="glamorous" title="glamorous" width="200">
  <br>
  glamorous 💄
  <br>
</h1>
<p align="center" style="font-size: 1.2rem;">Maintainable CSS with React</p>
   
   # Coffee App - An angular PWA

[![Greenkeeper badge](https://badges.greenkeeper.io/nerdeveloper/angular-pwa.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/nerdeveloper/angular-pwa.svg?branch=master)](https://travis-ci.org/nerdeveloper/angular-pwa)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/nerdeveloper/angular-pwa/blob/master/LICENSE)
[![dependencies Status](https://david-dm.org/nerdeveloper/angular-pwa/status.svg)](https://david-dm.org/nerdeveloper/angular-pwa)
[![devDependencies Status](https://david-dm.org/nerdeveloper/angular-pwa/dev-status.svg)](https://david-dm.org/nerdeveloper/angular-pwa?type=dev)

A Progressive web application built with Typescript to show performance and metrics and newer updates/releases in Angular. It has been tested and has hit the Progressive Web App Bench mark of 100% on **[Lighthouse.](https://developers.google.com/web/tools/lighthouse/)**

## Demonstration
The Angular PWA is hosted on **[Github Pages](https://nerdeveloper.github.io/angular-pwa)** and **[Microsoft Azure ](http://pwadb.azurewebsites.net)**

## Installations

This project assumes you have **[NodeJS v6](http://nodejs.org/)** or greater installed. You should
also have [npm v3](https://www.npmjs.com/) or greater installed as well (this comes packaged
with Node 8). You'll also need a recent version of **[Git](https://git-scm.com/)** installed
as well.

Install the npm pachages globally
```sh
npm i -g @angular/cli
npm i -g http-server
```

## Basic Usage

```bash
git clone https://github.com/nerdeveloper/angular-pwa.git
cd angular-pwa
npm i --save
ng serve --prod -o
```

## Advanced Usage
Install the dependencies and devDependencies and start the server.
```bash
git clone https://github.com/nerdeveloper/angular-pwa.git
cd angular-pwa
npm i --save
ng build --prod 
cd dist
http-server -p 8080
```



## Make me feel :heart: and appreciated

You can :star: the repo | Tell your friends about it | Fork it and make Pull Request.

You can also follow me on **[Twitter](https://twitter.com/_nerdeveloper)**

## License

The MIT License (MIT). Please see [License File](LICENSE) for more information..
## Other
- There is a new release that the [Microsoft Edge for Android and iOS ](https://blogs.windows.com/msedgedev/2018/02/06/welcoming-progressive-web-apps-edge-windows-10/) now run PWAs using [EgeHTML](https://blogs.windows.com/msedgedev/tag/edgehtml-17/) as an App Shell Wrapper. Feel free to use any Browser that Support **Add to Home Screen** feature.
- This Angular PWAs was developed following a course series on [Lynda.com](https://www.lynda.com/Angular-tutorials/Angular-Progressive-Web-Apps/590845-2.html?srchtrk=index%3a2%0alinktypeid%3a2%0aq%3aangular+pwa%0apage%3a1%0as%3arelevance%0asa%3atrue%0aproducttypeid%3a2)
