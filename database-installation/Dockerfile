FROM mongo:latest

RUN apt-get update -yq \
    && apt-get install wget -yq \
    && wget https://static.openfoodfacts.org/data/openfoodfacts-mongodbdump.tar.gz \
    && tar -xvf openfoodfacts-mongodbdump.tar.gz 

COPY ./mongo-script-index.js .
COPY mongo-script.sh .

RUN chmod u+x mongo-script.sh