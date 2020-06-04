SYSTEM ARCHITECTURE
-------------------


<img src="https://github.com/charlyjose/notes_app/blob/master/architecture_diagram.png">



SERVER_1
--------
- HTTP REST SERVER
- LISTEN/SERVE REST REQUESTS
- LISTEN/SERVE CLIENT REQUESTS
- CONFIGURATION DETAILS IN SERVER_1/config
- APPLICATION SPECIFIC MODULES IN node_modules
- APPLICATION SPECIFIC DETAILS IN package.json
- API ENDPOINTS UNDER API.md DOCUMENT
- CONNECT VIA RPC TO SERVER_2 FOR USER, PROFILE QUERIES
- CONNECT VIA RPC TO SERVER_3 FOR NOTE QUERIES


SERVER_2
--------
- RPC SERVER
- LISTEN/SERVE RPC REQUESTS
- LISTEN/SERVE RPC REQUESTS FROM SERVER_1 AND SERVER_3
- SERVES USER DATA
- CONNECT TO MONGODB DATABASE FOR USER DATA


SERVER_3
--------
- RPC SERVER
- LISTEN/SERVE RPC REQUESTS
- LISTEN/SERVE RPC REQUESTS FROM SERVER_1
- SERVES NOTE DATA
- CONNECT TO MONGODB DATABASE FOR NOTE DATA


DATABASE SERVER
---------------
- 3 COLLECTIONS: USER, PROFILE, NOTE
- SCHEMA FOR EACH COLLECTIONS ARE CONFIGURED AT SERVER_[1/2]/models

    SCHEMA: USER
    ------------
        userId:
            type: String
            unique: true
            required: true
        email:
            type: String
            unique: true
            required: true
        password:
            type: String
            required: true
        api_key:
            type: String
            unique: true
            required: true
        created_at:
            type: Date
            default: Date.now

    SCHEMA: PROFILE
    ---------------
        userId:
            type: String
            required: true
        firstname:
            type: String
            required: true
        lastname:
            type: String
            required: true
        address:
            type: String
            required: true
        created_at:
            type: Date
            default: Date.now

    SCHEMA: NOTE
    ------------
        noteId:
            type: String
            required: true
            unique: true
        userId:
            type: String
            required: true
        content:
            type: String
            required: true
        access:
            type: Boolean
            required: true
            default: false
        created_at:
            type: Date
            default: Date.now