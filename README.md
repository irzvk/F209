# Task Manager

Projekt wykonany w Node.js z dodatkowym użyciem Express oraz EJS.  
Aplikacja umożliwia zarządzanie zadaniami użytkownika po zalogowaniu i/lub utworzenie nowego użytkownika.

## Opis projektu

Aplikacja „Task Manager” pozwala na:
- zakładanie konta,
- logowanie do systemu,
- dodawanie, edytowanie oraz usuwanie zadań,
- przeglądanie listy zadań z możliwością filtrowania i sortowania danych.


## Funkcjonalności

- Rejestracja i logowanie użytkownika
- Sesje użytkownika (express-session)
- Hashowanie haseł za pomocą bcrypt
- Operacje CRUD na zadaniach:
  - tworzenie zadań
  - wyświetlanie listy
  - edycja
  - usuwanie
- Filtrowanie danych z użyciem parametrów GET
- Sortowanie danych po więcej niż jednym polu
- Dynamiczne routingi
- Obsługa błędów z własną stroną błędu
- Prosta stylizacja interfejsu (CSS)
- MongoDB uruchamiane w Dockerze


## Wykorzystane technologie

- Node.js
- Express
- EJS
- MongoDB
- Mongoose
- bcrypt
- express-session
- Docker
- HTML / CSS


## Instalacja i uruchomienie projektu

```bash
npm install

Uruchomienie bazy danych MongoDB (Docker)
docker run -d --name mongo-node -p 27017:27017 mongo

Uruchomienie aplikacji
npm start

Dostęp do aplikacji
Po uruchomieniu aplikacja jest dostępna pod adresem: 
http://localhost:3020


Prace wykonała Karolina Irzyk z 4F gr 1

