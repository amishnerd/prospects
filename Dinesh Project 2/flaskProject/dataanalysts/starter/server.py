from flask import Flask, jsonify, render_template
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import Session
from sqlalchemy import Column, Integer, String, create_engine, MetaData
from sqlalchemy.ext.automap import automap_base
import json

### create a flask instance
app = Flask(__name__)

### database Parameters
HOSTNAME="127.0.0.1"
PORT="5432"
USER="postgres"
PASSWORD="postgres"
DATABASE="UR"
SCHEMA = "Schema1"

def DatabaseConnection():
    ### Database connection
    global Matches, Players, engine
    rds_connection_string = f"{USER}:{PASSWORD}@{HOSTNAME}:{PORT}/{DATABASE}"
    print(rds_connection_string)
    engine = create_engine(f'postgresql://{rds_connection_string}')

    ### Map the engine to the Database
    Base = automap_base(bind=engine)
    Base.prepare(engine, reflect=True)
    keys = Base.classes.keys()
    print(Base.classes.keys())

    ### Get the database tables
    Matches = Base.classes.matches
    Players = Base.classes.players
    print("Connected")
 
@app.route("/api/salarydata")
def the_Method_for_DA_Salary_Data():
    return jsonify(theDataForSalaries)

### an api to get all the Matches from the database
@app.route("/api/matches")
def get_me_some_matches():
    global Matches, engine
    results = []
    session = Session(engine)
    query = session.query(Matches)
    rows = query.statement.execute().fetchall()
    for row in rows:
        match = dict(row)
        results.append(match)
    return jsonify(results)

@app.route("/api/salary")
def get_me_salary_data():
    global salary, engine
    results = []
    rows = engine.execute("select city, state, salary   as cnt from rankings)
    for row in rows:
        match = dict(row)
        results.append(match)
    return jsonify(results)

### the 'home' route. 
### NOTE: This allows sending data to the HTML through templating
## But you'll likely not need it since most of what you're doing is AJAX APIs
## @app.route("/")
## def home():
##     message = "Hello, World"
##     return render_template('index.html', message=message)


### A required way of saying "Start the server"
if __name__ == "__main__":
    DatabaseConnection()
    app.run(debug=True)
