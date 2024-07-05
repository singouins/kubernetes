Required Grants:

CREATE USER 'exporter'@'localhost' IDENTIFIED BY 'XXXXXXXX';
GRANT PROCESS, REPLICATION CLIENT ON *.* TO 'exporter'@'localhost';
GRANT SLAVE MONITOR ON *.* TO 'exporter';
GRANT SELECT ON performance_schema.* TO 'exporter'@'localhost';
