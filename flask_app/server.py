from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

import loyal_points
import json
@app.route("/")
def main():
    return "Hello World!"

@app.route('/buyer/<string:address>', methods=['GET'])
def get_buyer(address):
    buyer = {
        'address': '0x84B0a26eFce6A3a4E60cF29e577392755D4D3673',
        'balance': 200,
        'ether': .001
    }
    return json.dumps(buyer)

@app.route('/seller/<string:address>', methods=['GET'])
def get_seller(address):
    seller = {
        'address': '0x243676e577A572226B66Ef0d4782Eb74Cb88e95C',
        'balance': 600
    }
    return json.dumps(seller)

@app.route('/contract/<string:address>', methods=['GET'])
def get_contract(address):
    contract = {
        'address': '0x5b1056e3EcC0f5dBFD332275A3d11D9d37422D42',
        'supply': 20000,
        'name': 'United Mileage Plus Token',
        'symbol': 'UMPT'
    }
    return json.dumps(contract)

@app.route('/review_transfer', methods=['POST'])
def review_transfer():
    #  TODO
    contract = {
        'address': '0x5b1056e3EcC0f5dBFD332275A3d11D9d37422D42',
        'supply': 20000,
        'name': 'United Mileage Plus Token',
        'symbol': 'UMPT'
    }
    transfer = {
        'contract': contract,
        'buyer': '0x84B0a26eFce6A3a4E60cF29e577392755D4D3673',
        'seller': '0x243676e577A572226B66Ef0d4782Eb74Cb88e95C',
        'value': 200,
        'ether': 0.0001
    }

    return json.dumps(transfer)


@app.route('/transfer', methods=['POST'])
def transfer():
    # TODO
    # contract_address, seller_address, buyer_address, amount
    status = {
        'code': 0,
        'message': 'success'
    }
    return json.dumps(status)
