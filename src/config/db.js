const mongoose = require ('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.ATLAS_URI);
        console.log('🟢 Connexion à MongoDB réussie !');
    } catch(error) {
        console.log('🔴 Connexion à MongoDB échouée !', error);
        process.exit(1);
    };
}

module.exports = connectDB;