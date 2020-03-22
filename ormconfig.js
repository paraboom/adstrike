import {User} from 'src/entity/User'

module.exports = {
   "type": "mysql",
   "host": "database-1.c88m7rpg85t1.eu-west-1.rds.amazonaws.com",
   "port": 3306,
   "username": "admin",
   "password": "test1234",
   "database": "adstrike",
   "synchronize": true,
   "logging": false,
   "entities": [
      User
   ],
   "migrations": [
      "src/migration/**/*.ts"
   ],
   "subscribers": [
      "src/subscriber/**/*.ts"
   ],
   "cli": {
      "entitiesDir": "src/entity",
      "migrationsDir": "src/migration",
      "subscribersDir": "src/subscriber"
   }
}