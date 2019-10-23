from flask import Flask, request, json, jsonify
from flaskext.mysql import MySQL
from flask_cors import CORS
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager
from flask_jwt_extended import create_access_token

app = Flask(__name__)

# MYSQL Configuration
app.config['MYSQL_DATABASE_USER'] = 'root'
app.config['MYSQL_DATABASE_PASSWORD'] = 'mysql'
app.config['MYSQL_DATABASE_DB'] = 'sbook_webstore'
app.config['MYSQL_DATABASE_HOST'] = 'localhost'
app.config['JWT_SECRET_KEY'] = 'secret'


mysql = MySQL()
mysql.init_app(app)
bcrypt = Bcrypt(app)
jwt = JWTManager(app)

CORS(app)

# Register function 
@app.route("/register", methods = ['POST'])
def register():

    # Connect database
    conn = mysql.connect()
    cursor = conn.cursor()

    #Read data from GUI
    data = request.get_json()["newUser"]
    
    # Saving values
    name = data['name']
    email = data['email']
    password = bcrypt.generate_password_hash(data['password']).decode('utf-8')

    #Save data in the database 
    cursor.execute("INSERT INTO users (name, email, password) VALUES ('" +
    str(name) + "', '" +
    str(email) + "', '" +
    str(password) + "')")

    conn.commit()

    return jsonify({'status': 'Registered'})

# Login function
@app.route("/login", methods = ['POST'])
def login():

    # Connect database
    conn = mysql.connect()
    cursor = conn.cursor()

    #Read data from GUI
    data = request.get_json()["user"]
    
    # Read the posted values from the GUI
    email = data['email']
    password = data['password']

    # Result variable
    result = ""

    #Get data from database 
    cursor.execute("SELECT * FROM users where email = '" + str(email) + "'")
    data = cursor.fetchone()

    if data != None and bcrypt.check_password_hash(data[3], password):

        access_token = create_access_token(identity = {
            'id': data[0],
            'name': data[1],
            'email': data[2]
        })

        result = access_token

    else:
        result = jsonify({"error" : "error"})

    return result

if __name__ == '__main__':
    app.run(debug = True)