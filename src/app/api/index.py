import json
from flask import Flask, request, jsonify
import pandas as pd
from flask_cors import CORS, cross_origin #comment this on deployment

app = Flask(__name__)
CORS(app) #comment this on deployment

@app.route('/api/upload', methods=['POST'])
@cross_origin()

def upload_file():
    file = request.files['file']

    # Save the uploaded file
    file.save('uploaded_file')

    df = pd.read_excel('uploaded_file')
    

    """
    # Select the relevant columns
    #selected_columns = ['Owner1 First Name', 'Owner1 Last Name', 'Phone 1', 'Phone 2', 'Phone 3', 'Phone 4', 'Phone 5',
                        #'Phone 6', 'Phone 7', 'Email 1', 'Email 2', 'Email 3']

    # Extract the names, email addresses, and phone numbers
    """
    """
    extracted_data = []
    for _, row in dataframe1[selected_columns].iterrows():
        name = f"{row['Owner1 First Name']} {row['Owner1 Last Name']}"
        email = [row['Email 1'], row['Email 2'], row['Email 3']]
        phones = [row['Phone 1'], row['Phone 2'], row['Phone 3'], row['Phone 4'], row['Phone 5'], row['Phone 6'],
                  row['Phone 7']]
        extracted_data.append({'Name': name, 'Email': email, 'Phones': phones})

    # Return the extracted data as JSON
    json_data = json.dumps(extracted_data)
    return json_data
    """
    json_Str = df.to_json(orient='records')
    return json_Str

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080, debug='True')
