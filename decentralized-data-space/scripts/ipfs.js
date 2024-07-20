const ipfsClient = require('i[fs-http-client');
const ipfs = ipfsClient({host: 'ipfs.infura.io', port:5001, protocol:'https'});

const uploadToIPFS = async (data) => {
    const result = await ipfs.add(data);
    return result.path;
};

module.exports = { uploadToIPFS}; 

