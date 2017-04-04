# doubutsuGallery
This is a practice of react and redux.

# Installation
Here have two different ways to install the project.
## use npm to start service
clone this repo.
```bash
$ git clone https://github.com/masatora/doubutsuGallery.git
```
install npm package.
```bash
$ sudo npm install
```
if node-sass occured error.
```bash   
$ sudo npm install --unsafe-perm --save node-sass
```
start service.
```bash
$ sudo npm start
```
open the browser and visit http://localhost:8081/

## use Continuous integration to start service
### docker :
build a docker image, it may take 5 minutes.
```bash
$ docker build -t doubutsu ./docker
```
create a container.
```bash
$ docker run -d --name=doubutsu -p 8081:8081 doubutsu
```
wait 20 seconds for webpack then open the browser and visit http://localhost:8081/
### jenkins :
add the shell script in the jenkins job.
```bash
docker restart doubutsu
```
then trigger it and wait...
```bash
$ curl --user [user:passwd] -s http://localhost:8080/job/[job name]/build?token=[token]
```
