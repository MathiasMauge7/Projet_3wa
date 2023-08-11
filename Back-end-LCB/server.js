const express = require("express")
const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const app = express()
const PORT = process.env.PORT || 4200;

mongoose.connect("mongodb://localhost:27017/les_compagnons_bordelais", {
    useNewUrlParser: true, // Cela indique à Mongoose d'utiliser le nouveau parseur d'URL MongoDB. C'était important avec les versions plus anciennes de MongoDB, mais les versions plus récentes peuvent souvent détecter automatiquement le parseur approprié.
    useUnifiedTopology: true // Cela permet d'utiliser la nouvelle topologie unifiée du pilote MongoDB, ce qui est recommandé pour les applications modernes. Cette option remplace l'ancienne useNewUrlParser qui était utilisée pour la détection de la topologie.
})

const ClientSchema = new mongoose.Schema({
    email: String,
    password: String
})

const Client = mongoose.model("Client", ClientSchema)

app.use(express.json())

app.post("/register", async (req, res) => {
    const { email, password } = req.body
    try {
        const existingClient = await Client.findOne({ email })
        if (existingClient) {
            return res.status(400).json({ message: "Ce mail existe déjà." })
        }


        const hashedPassword = await bcrypt.hash(password, 7)
        const newClient = new Client({
            email,
            password: hashedPassword
        })

        await newClient.save()

        res.status(201).json({ message: "Inscription réussie" })
    } catch (error) {
        res.status(500).json({ message: "Une error est survenue durant l'inscription" })
    }
})

app.listen(PORT, () => {
    console.log(`Le serveur tourne sur le port ${PORT}`);
})