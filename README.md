# Employee Management Application (Spring + React + MySQL)
Simple CRUD application using java spring as backend, react js frontent and MySQL for managing user data. 


### Setup Guide
<hr>

### 1. Database - MySQL on Docker

Run MySQL on docker 
```
docker run --name mysql-db -e MYSQL_ROOT_PASSWORD=password -p 3333:3306 -d mysql:latest

```

sh into MySQL container 
```
docker exec -it <container-id> sh

```

To enter into MySQL CLI type this command and followed by the password. If you use above comand to setup MySQL, the use "password".
```
mysql -p

```

### 2. Backend Java Spring 
To run java spring boot application go to "employee" directory 
```
cd employee

```

Configure `application.properties` file with proper configueration from MySQL. 
```
spring.application.name=<db-name>
spring.datasource.url=jdbc:mysql://localhost:3333/employee
spring.datasource.username=<db-user>
spring.datasource.password=<db-password>
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

Run java spring application 
```
./mvnw spring-boot:run

```


### 3. Frontend - React Js

Enter frontend  "employeeweb"  directory
```
cd employeeweb

```
To run React application 
```
npm install
npm start

```







