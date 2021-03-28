# yourlogo
Docker Practice Project

node-modules are not included here;

# disclaimer

This is an early version of the project! Not ready for production by any means;

Currently running on Localhost Port 3000;

to view in browser, run "docker run --rm -it  -p 3000:3000/tcp yourlogo:latest <"
you might have to run "docker build -t yourlogo ." in the root folder first. I have had several issues with this before.

DISCLAIMER: I could not get Bind Mounts or docker-compose running on Win10 - there appear to be compatibility issues.

View "/src/app.js" in code editor to check the file structure;
