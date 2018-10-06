def get_my_programs():
    print ("in get my programs")
    programs = [
        {
            'name': 'United',
            'points': 2000
        },
        {
            'name': 'hilton',
            'points': 1000
        }
    ]
    return programs

def make_transfer():
    print ('in transfer')
    print ('transfer complete')
    res = {
        'status': {
            'code': 'success',
            'message': ''
        }
    }
    return res