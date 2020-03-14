DROP TABLE IF EXISTS rankings;
CREATE TABLE rankings(
  rank INTEGER PRIMARY KEY,
  city VARCHAR(30) NOT NULL,
  state VARCHAR(2) NOT NULL
);

-- 'import' the .csv files
-- BE SURE TO UPDATE THE PATH TO YOUR FULLY QUALIFIED PATH
-- BE SURE TO UPDATE THE COLUMN NAMES TO MATCH YOUR TABLE
COPY rankings(rank, city, state) 
FROM '/Users/dines/git/DatavizClass/Project_2/flaskProject/dataanalysts/starter/rankings.csv' DELIMITER ',' CSV HEADER;


