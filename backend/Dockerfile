
FROM maven:3.2-jdk-8 as build
ARG project 
WORKDIR /app
COPY . /app
RUN mvn package

FROM maven:3.2-jdk-8 as client
ARG project 
WORKDIR /app
COPY client-service/ /app
RUN mvn package


FROM openjdk:8-jre-alpine
ARG artifactid
ARG version
ENV artifact fullstack-demo-client-service-0.0.1-SNAPSHOT.jar 
WORKDIR /app
COPY --from=app /app/target/${artifact} /app
EXPOSE 8081
EXPOSE 8082
ENTRYPOINT ["sh", "-c"]
CMD ["java -jar ${artifact}"]