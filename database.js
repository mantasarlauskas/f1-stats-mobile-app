import { SQLite } from 'expo';

const db = SQLite.openDatabase('favorites');

export const initializeDatabase = () => {
  db.transaction((tx) => {
    // tx.executeSql('DROP TABLE drivers');
    // tx.executeSql('DROP TABLE teams');
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS drivers(id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(255))',
    );
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS teams(id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(255))',
    );
  });
};

export const getFavoriteDrivers = () => new Promise(resolve => db.transaction(tx => tx.executeSql('SELECT * FROM drivers', [], (a, res) => resolve(res.rows._array))));

export const getFavoriteTeams = () => new Promise(resolve => db.transaction(tx => tx.executeSql('SELECT * FROM teams', [], (a, res) => resolve(res.rows._array))));

export const addFavoriteDriver = driverId => new Promise(resolve => db.transaction(tx => tx.executeSql('INSERT INTO drivers (name) VALUES (?)', [driverId], (a, res) => resolve(res))));

export const addFavoriteTeam = teamId => new Promise(resolve => db.transaction(tx => tx.executeSql('INSERT INTO teams (name) VALUES (?)', [teamId], (a, res) => resolve(res))));

export const deleteFavoriteDriver = driverId => new Promise(resolve => db.transaction(tx => tx.executeSql('DELETE FROM drivers WHERE name = ?', [driverId], (a, res) => resolve(res))));

export const deleteFavoriteTeam = teamId => new Promise(resolve => db.transaction(tx => tx.executeSql('DELETE FROM teams WHERE name = ?', [teamId], (a, res) => resolve(res))));
