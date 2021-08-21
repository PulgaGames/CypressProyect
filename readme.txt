To construct the docker image

docker build -t my-cypress-image:1.0.0 .


Run the specific command using 
>docker run -i -v "%cd%"/cypress/report:/cypress/report -t my-cypress-image:1.0.0 --spec cypress/integration/pom/*.spec.js
docker run -i -v "%cd%":/my-cypress-project/cypress/report -t my-cypress-image:1.0.0 --spec cypress/integration/pom/*.spec.js
docker run -i -v $PWD/cypress/report:/cypress/report -t my-cypress-image:1.0.0 --spec cypress/integration/pom/*.spec.js


Additional material: Entry point & CMD difference -> https://www.youtube.com/watch?v=OYbEWUbmk90&t=437s&ab_channel=KodeKloud