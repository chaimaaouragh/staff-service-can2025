&nbsp;Staff Availability Service - CAN2025



&nbsp;Description

Service Node.js pour gérer la disponibilité des bénévoles dans le cadre du projet CAN2025. 

Déployé sur \*\*Azure App Service (Linux, Node.js 18 LTS)\*\*.



Endpoints

\- `GET /health` : Vérifie que le service tourne.

\- `GET /availability` : Récupère la liste des disponibilités des bénévoles.

\- `POST /availability` : Ajoute une disponibilité.

&nbsp;Exemple POST

```json

{

&nbsp; "name": "Sara",

&nbsp; "status": "Available"

}

Exemple GET /availability

\[

&nbsp; {

&nbsp;   "name": "Sara",

&nbsp;   "status": "Available",

&nbsp;   "receivedAt": "2025-11-27T12:47:27.207Z"

&nbsp; }

Usage



Cloner le repo :



git clone https://github.com/chaimaaouragh/staff-service-can2025.git





Installer les dépendances :



npm install





Lancer localement :



node index.js





Tester sur Azure :



URL : https://staff-service-can2025-auapbhf5hbh0bkew.francecentral-01.azurewebsites.net/



Notes



Les données sont stockées en mémoire pour le test.



Pour la production, connecter une base de données (Azure SQL / AWS RDS / Cloud SQL).



L’endpoint est prêt pour une future interconnexion multi-cloud.





