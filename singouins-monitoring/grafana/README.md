Required Grants:

CREATE USER 'grafana'@'localhost' IDENTIFIED BY 'XXXXXXXX';
GRANT USAGE ON `grafana`.* to 'grafana'@'localhost' identified by 'XXXXXXXX';
GRANT ALL PRIVILEGES ON `grafana`.* to 'grafana'@'localhost';