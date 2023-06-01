FROM node:14
RUN apt-get update && apt-get install -y libnss3-dev libgdk-pixbuf2.0-dev libgtk-3-dev libxss-dev libasound2
RUN npm install -g @angular/cli@9.0.7
RUN npm install puppeteer@13.7.0
