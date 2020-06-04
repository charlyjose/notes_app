API LIST
--------


REST API (ALL ARE POST REQUESTS)
--------------------------------

    USER, PROFILE CRUD OPS
    ----------------------

        CREATE USER: /signup
        --------------------
        REQUEST:
            {
                "email" : "... EMAIL ID HERE ...",
                "password": "... PASSWORD HERE ...",
                "firstname": "...",
                "lastname": "...",
                "address": "..."
            }

        GET API KEY: /getkey
        --------------------
        REQUEST:
            {
                "email" : "... EMAIL ID HERE ...",
                "password": "... PASSWORD HERE ..."
            }

        GET NEW PASSWORD: /newpassword
        ------------------------------
        REQUEST:
            {
                "email" : "... EMAIL ID HERE ...",
                "password": "... PASSWORD HERE ...",
                "newpassword": "... PASSWORD HERE ...",
                "api_key": "... API KEY HERE ..."
            }

        GET NEW API KEY: /newkey
        ------------------------
        REQUEST:
            {
                "email" : "... EMAIL ID HERE ...",
                "password": "... PASSWORD HERE ..."
            }



    NOTE CRUD OPS
    -------------

        CREATE NOTE: /note/create
        -------------------------
        REQUEST:
            {
                "api_key": "... API KEY HERE ...",
                "content": "YOUR CONTENT"
            }
            OR
            {
                "api_key": "... API KEY HERE ...",
                "content": "YOUR CONTENT",
                "access": [TRUE/FALSE]]
            }
            OR
            {
                "api_key": "... API KEY HERE ...",
                "content": "YOUR CONTENT",
                "access": [TRUE/FALSE]]
            }

        READ ALL NOTES: /note/read/all
        ------------------------------
        REQUEST:
            {
                "api_key": "... API KEY HERE ..."
            }

        READ SINGLE NOTE: /note/read
        ----------------------------
        REQUEST:
            {
                "api_key": "... API KEY HERE ...",
                "noteId": "... NOTE ID HERE ..."
            }

        READ SINGLE PUBLIC NOTE: /note/public/read
        ------------------------------------------
        REQUEST:
            {
                "noteId": "... NOTE ID HERE ..."
            }

        UPDATE NOTE: /note/update
        -------------------------
        REQUEST:
            {
                "api_key": "... API KEY HERE ...",
                "noteId": "... NOTE ID HERE ...",
                "content": "YOUR CONTENT",
                "access": [TRUE/FALSE]]
            }
            OR
            {
                "api_key": "... API KEY HERE ...",
                "noteId": "... NOTE ID HERE ...",
                "content": "YOUR CONTENT"
            }

        DELETE NOTE: /note/delete
        -------------------------
        REQUEST:
            {
                "api_key": "... API KEY HERE ...",
                "noteId": "... NOTE ID HERE ..."
            }



RPC API (RPC IMPLEMENTATION OF ALL THE ABOVE REST REQUESTS)
-----------------------------------------------------------

    SERVER_2
    --------
    signup
    getkey
    getuserid
    newkey
    newpassword
    authkey


    SERVER_3
    --------
    create
    read_one
    read_all
    public_read_one
    update
    delete

                                                                    
                           signup, getkey, newkey, newpassword, authkey
================== ------------------------------------------------------------> ==================
||   SERVER_1   ||                                                               ||   SERVER_2   ||
================== <------------------------------------------------------------ ==================
                                               reply


                    create, read_one, read_all, public_read_one, update, delete
================== ------------------------------------------------------------> ==================
||   SERVER_1   ||                                                               ||   SERVER_3   ||
================== <------------------------------------------------------------ ==================
                                               reply


                                             getuserid
================== ------------------------------------------------------------> ==================
||   SERVER_3   ||                                                               ||   SERVER_2   ||
================== <------------------------------------------------------------ ==================
                                               reply