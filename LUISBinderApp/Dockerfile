# Configuration for PREPROD

ARG USER

FROM node:10.15.0 AS PREPROD
ENV HOME=/Users/$USER/Projects/LUISBinderApp

# Create app directory for PREPROD
RUN mkdir -p $HOME/PREPROD/
WORKDIR $HOME/PREPROD/
COPY package*.json ./
COPY Gruntfile.js ./
RUN npm install --unsafe-perm
COPY . ./
RUN ls $HOME/PREPROD/
EXPOSE 7011
CMD grunt

FROM node:10.15.0 AS PROD
ENV HOME=/Users/$USER/Projects/LUISBinderApp

# Create app directory for PROD
RUN mkdir -p $HOME/PROD/
WORKDIR $HOME/PROD/
COPY --from=PREPROD $HOME/PREPROD/ ./
EXPOSE 7011
CMD npm start