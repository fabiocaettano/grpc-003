ARG IMAGE_1=node:16.3-alpine

#Padrão
FROM $IMAGE_1 As builder
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
RUN npm install @grpc/grpc-js --ignore-scripts
RUN npm install @grpc/proto-loader --ignore-scripts
COPY . .

#Desenvolvimento
FROM builder as dev
CMD [""]