const app = require('./app');
const connectDB = require('./config/database');

const PORT = process.env.PORT || 3000;

async function iniciarServidor() {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`Servidor corriendo en el Puerto ${PORT}`);
        });
    } catch (error) {
        console.error('Error al iniciar el servidor:', error);
    }
}

iniciarServidor();