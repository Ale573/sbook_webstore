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

    # Read data from GUI
    data = request.get_json()["newUser"]
    
    # Saving values
    username = data['username']
    password = bcrypt.generate_password_hash(data['password']).decode('utf-8')
    status = "new"

    # Save values in the database
    query="INSERT INTO users (username, password, status) VALUES(%s, %s, %s)"
    cursor.execute(query,(username, password, status))

    conn.commit()

    return jsonify({'status': 'Registered'}), 200

# Login function
@app.route("/login", methods = ['POST'])
def login():

    # Connect database
    conn = mysql.connect()
    cursor = conn.cursor()

    # Read data from GUI
    data = request.get_json()["user"]
    
    # Saving values
    username = data['username']
    password = data['password']

    # Get user from database 
    cursor.execute("SELECT * FROM users where username = '" + str(username) + "'")
    data = cursor.fetchone()

    if data != None and bcrypt.check_password_hash(data[2], password):

        access_token = create_access_token(identity = {
            'id': data[0],
            'username': data[1],
            'status': data[3]
        })

        return access_token, 200

    else:
        return jsonify({"msg" : "The users does not exist or the password is wrong."}), 401


# Update profile
@app.route("/updateProfile", methods = ['POST'])
def updateProfile():

    # Connect database
    conn = mysql.connect()
    cursor = conn.cursor()

    #Read data from GUI
    data = request.get_json()["profile"]

    # Saving values
    userId = data['userId']
    name = data['name']
    email = data['email']
    address = data['address']
    billing_address = data['billing_address']
    phone = data['phone']

    # Verify if it is a new user and save data in database
    cursor.execute("SELECT * FROM accounts where userID = '" + str(userId) + "'")
    data = cursor.fetchone()

    if(data == None):
        query="INSERT INTO accounts(userId, name, email, address, billing_address, phone) VALUES(%s, %s, %s, %s, %s, %s)"
        cursor.execute(query,(userId, name, email, address, billing_address, phone))
        conn.commit()

        # Change status value in database
        status= "active"

        cursor.execute("UPDATE users SET status = '"+ str(status) +"' WHERE id ='"+ str(userId) +"'")
        conn.commit()
    else:
        cursor.execute("UPDATE accounts SET name = '"+ str(name) +"' WHERE userId ='"+ str(userId) +"'")
        cursor.execute("UPDATE accounts SET email = '"+ str(email) +"' WHERE userId ='"+ str(userId) +"'")
        cursor.execute("UPDATE accounts SET address = '"+ str(address) +"' WHERE userId ='"+ str(userId) +"'")
        cursor.execute("UPDATE accounts SET billing_address = '"+ str(billing_address) +"' WHERE userId ='"+ str(userId) +"'")
        cursor.execute("UPDATE accounts SET phone = '"+ str(phone) +"' WHERE userId ='"+ str(userId) +"'")
        conn.commit()

    return jsonify({'status': 'Updated'}), 200


# Get Profile function
@app.route("/getProfile", methods = ['POST'])
def getProfile():

    # Connect database
    conn = mysql.connect()
    cursor = conn.cursor()

    # Read data from GUI
    id = request.get_json()["userId"]

    # Get data from database 
    cursor.execute("SELECT * FROM accounts where userId = '" + str(id) + "'")
    data = cursor.fetchone()

    cursor.execute("SELECT * FROM books where userId = '" + str(id) + "'")
    booksData = cursor.fetchall()

    data = data + booksData

    if data != None:
        return json.dumps(data), 200

    else:
        return jsonify({"msg" : "There is no profile."}), 401

# Get Books function
@app.route("/getBooks", methods = ['POST'])
def getBooks():

    # Connect database
    conn = mysql.connect()
    cursor = conn.cursor()

    # Read data from GUI
    data = request.get_json()["data"]

    # Saving values
    book1 = data['book1']
    book2 = data['book2']

    # Get data from database 
    cursor.execute("SELECT * FROM books where id = '" + str(book1) + "'")
    book1 = cursor.fetchone()

    cursor.execute("SELECT * FROM books where id = '" + str(book2) + "'")
    book2 = cursor.fetchone()

    data = []
    data.append(book1)
    data.append(book2)

    if data != None:
        return json.dumps(data), 200

    else:
        return jsonify({"msg" : "No recommended books."}), 401

# Selling book function
@app.route("/sellingBook", methods = ['POST'])
def sellingBook():

    # Connect database
    conn = mysql.connect()
    cursor = conn.cursor()

    #Read data from GUI
    data = request.get_json()["book"]
    
    # Saving values
    userId = data['userId']
    image = data['image']
    name = data['name']
    author = data['author']
    year = data['year']
    edition = data['edition']
    isbn = data['isbn']
    price = data['price']
    book_condition = data['condition']
    offer = data['offer']
    return_policy = data['return_policy']
    cash = data['cash']
    cards = data['cards']

    #Save values in the database 
    query="INSERT INTO books(userId, image, name, author, year, edition, isbn, price, book_condition, offer, return_policy, cash, cards) VALUES(%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"
    cursor.execute(query,(userId, image, name, author, year, edition, isbn, price, book_condition, offer, return_policy, cash, cards))

    conn.commit()

    return jsonify({'msg': 'Book submited!'}), 200

# Search function 
@app.route("/searchInput", methods = ["POST"])
def searchInput(): 

    # Connect database
    conn = mysql.connect()
    cursor = conn.cursor()

    #Read data from GUI
    data = request.get_json()["input"]
    data = "%" + data + "%"

    # Get data from database
    query = "SELECT * FROM books where name LIKE %s" 
    cursor.execute(query,(data))
    data = cursor.fetchall()
    data = list(data)

    if data != None and len(data) != 0:
        return json.dumps(data), 200

    else:
        return jsonify({"msg" : "*There is no match."}), 401

if __name__ == '__main__':
    app.run(debug = True)