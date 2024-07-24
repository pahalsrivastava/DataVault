/* interacts with the backend of the smartcontract */
const Web3 = require('web3');

const web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID'));

const contractAddress = 'YOUR_CONTRACT_ADDRESS';


const contract = new web3.eth.Contract(contractAddress);

async function updateMessage(newMessage, privateKey) {
    const account = web3.eth.accounts.privateKeyToAccount(privateKey);
    const tx = {
        to: contractAddress,
        gas: 2000000,
        data: contract.methods.updateMessage(newMessage).encodeABI()
    };
    const signedTx = await web3.eth.accounts.signTransaction(tx, account.privateKey);
    const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
    return receipt;
}

async function getMessage() {
    const message = await contract.methods.getMessage().call();
    return message;
}


const express = require('express');
const app = express();
app.use(express.json());

app.get('/message', async (req, res) => {
    const message = await getMessage();
    res.json({ message });
});

app.post('/message', async (req, res) => {
    const { newMessage, privateKey } = req.body;
    try {
        const receipt = await updateMessage(newMessage, privateKey);
        res.json({ receipt });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
