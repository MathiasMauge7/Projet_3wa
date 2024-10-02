const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const cors = require("cors");
const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173", // Remplacez par l'URL de votre application cliente
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true, // Activer l'envoi de cookies
  })
);

mongoose
  .connect(
    "mongodb+srv://mathiasmauge:e9FpeSHuzZsiZbtl@clusterlcb.wlsb4tp.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true, // Cela indique à Mongoose d'utiliser le nouveau parseur d'URL MongoDB. C'était important avec les versions plus anciennes de MongoDB, mais les versions plus récentes peuvent souvent détecter automatiquement le parseur approprié.
      useUnifiedTopology: true, // Cela permet d'utiliser la nouvelle topologie unifiée du pilote MongoDB, ce qui est recommandé pour les applications modernes. Cette option remplace l'ancienne useNewUrlParser qui était utilisée pour la détection de la topologie.
    }
  )
  .then(() => {
    console.log("Connecté à MongoDB");
  })
  .catch((error) => {
    console.log("Erreur de connection à MongoDB", error);
  });

const ClientSchema = new mongoose.Schema({
  email: String,
  password: String,
  authTokens: String,
});

const InfosClientSchema = new mongoose.Schema({
  client_id: String,
  name: String,
  lastname: String,
  mail: String,
  address: String,
  tel: String,
  photo: String,
});

const InfosDogSchema = new mongoose.Schema({
  client_id: String,
  lastname: String,
  birthDate: Date,
  breed: String,
  sex: { type: String, possibleValue: ["Male", "Femelle"] },
  microchip: { type: String, possibleValue: ["Oui", "Non"] },
  tatoo: { type: String, possibleValue: ["Oui", "Non"] },
  medical: String,
  img: String,
});

const FormulaireContactSchema = new mongoose.Schema({
  name: String,
  mail: String,
  tel: String,
  sujet: String,
  message: String,
});

const Client = mongoose.model("Client", ClientSchema);
const InfosClient = mongoose.model("InfosClient", InfosClientSchema);
const InfosDog = mongoose.model("InfosDog", InfosDogSchema);
const FormulaireContact = mongoose.model(
  "FormulaireContact",
  FormulaireContactSchema
);

app.get("/cookie-test", async (req, res) => {
  const token = jwt.sign({ id: 1, name: "bobby" }, "secretKey");

  const tokenCookie = cookie.serialize("jwtoken", token, {
    httpOnly: true, // Empêche le JavaScript côté client d'accéder au cookie
    secure: false, // Utilisez true en production pour activer HTTPS
    maxAge: 3600, // Durée de validité du cookie en secondes (1 heure)
    path: "/", // Le chemin du cookie (peut être personnalisé)
  });

  res.setHeader("Set-Cookie", tokenCookie);
  res.send("Connecté avec succès");
});

app.get("/api/users", async (req, res) => {
  try {
    const users = await Client.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/api/users-infos/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;
    const usersInfos = await InfosClient.findOne({ client_id: userId });

    res.json(usersInfos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/api/users-dog-infos/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;
    const usersDogInfos = await InfosDog.findOne({ client_id: userId });

    res.json(usersDogInfos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/api/formulaire-contact", async (req, res) => {
  try {
    const contactFormulaire = await FormulaireContact.find();
    res.json(contactFormulaire);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// app.post("/api/infos-client", async (req, res) => {
//   const { editedClientInfos } = req.body;
//   console.log(editedClientInfos);
//   try {
//     const newInfosClient = await InfosClient.create(editedClientInfos);
//     res.status(200).json({
//       msg: "Ajout des informations ok",
//       createdInfosClient: newInfosClient,
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json("Erreur serveur");
//   }
// });

app.patch("/api/infos-client/:clientId", async (req, res) => {
  const { clientId } = req.params.clientId; // Récupère le paramètre ID de l'URL
  const { editedClientInfos } = req.body;

  console.log(editedClientInfos);
  try {
    if (!clientId) {
      return res.status(400).json({ msg: "clientId requis" });
    }

    const updatedInfosClient = await InfosClient.findByIdAndUpdate(
      clientId, // On utilise l'id récupéré dans l'URL
      updatedData, // Données mises à jour
      { new: true }
    );

    if (!updatedInfosClient) {
      return res.status(404).json({ msg: "Client introuvable" });
    }

    res.status(200).json({
      msg: "Mise à jour des informations client réussie",
      updatedInfosClient,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json("Erreur serveur");
  }
});

app.post("/api/infos-dog", async (req, res) => {
  const { editedDogInfos } = req.body;
  console.log(editedDogInfos);
  try {
    const newInfosDog = await InfosDog.create(editedDogInfos);
    res.status(200).json({
      msg: "Ajout des informations ok",
      createdDogInfos: newInfosDog,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json("Erreur serveur");
  }
});

app.post("/api/formulaire-contact", async (req, res) => {
  const { name, mail, tel, sujet, message } = req.body;
  console.log(req.body);
  try {
    const newFormulaireContact = await FormulaireContact.create({
      name,
      mail,
      tel,
      sujet,
      message,
    });
    res.status(200).json({
      msg: "Ajout du nouveau formulaire de contact ok",
      createdDogInfos: newFormulaireContact,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json("Erreur serveur");
  }
});

app.delete("/api/formulaire-contact/:formulaireId", async (req, res) => {
  try {
    const formulaireId = req.params.formulaireId;
    const deleteFormulaire = await FormulaireContact.findByIdAndDelete(
      formulaireId
    );

    if (!deleteFormulaire) {
      return res.status(404).json({ message: "Élément non trouvé." });
    }

    res.status(200).json({ message: "Élément supprimé avec succès." });
  } catch (error) {
    console.error("Erreur lors de la suppression de l'élément :", error);
    res
      .status(500)
      .json({ message: "Erreur lors de la suppression de l'élément." });
  }
});

app.post("/api/register", async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingClient = await Client.findOne({ email });
    if (existingClient) {
      return res.status(400).json({ message: "Ce mail existe déjà." });
    }
    const hashedPassword = await bcrypt.hash(password, 7);

    const newClient = new Client({
      email: email,
      password: hashedPassword,
    });

    const addedClientBySave = await newClient.save();
    console.log(addedClientBySave);
    const clientId = addedClientBySave._id;

    await InfosClient.create({
      client_id: clientId,
      name: "",
      lastname: "",
      email: email,
      address: "",
      tel: "",
      photo: "",
    });

    await InfosDog.create({
      client_id: clientId,
      lastname: "",
      birthDate: "",
      breed: "",
      sex: "",
      tatoo: "",
      microchip: "",
      medical: "",
      img: "",
    });

    res.status(201).json({ message: "Inscription réussie", clientId });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Une error est survenue durant l'inscription" });
  }
});

app.post("/api/login", async (req, res) => {
  try {
    console.log(req.body);
    const user = await Client.findOne({ email: req.body.email });
    res.send({ user });
    console.log(user);
    const passwordCompare = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (passwordCompare) {
      // const token = jwt.sign(
      //   {
      //     id: user._id,
      //     email: user.email,
      //   }
      // process.env.JWT_SECRET,
      // { expiresIn: process.env.JWT_DURING }
      console.log("password identique");
      // );
      console.log("mdp identique");
      res.status(200);
      // console.log(token);
      // res.json({ acces_token: token });
    } else {
      res
        .status(401)
        .json({ message: "Vérifier votre adresse mail / mot de passe." });
    }
  } catch (error) {
    console.log("Test erreur " + error);
    res.status(500).json({ message: "Erreur serveur" });
  }
});

app.listen(PORT, () => {
  console.log(`Le serveur tourne sur le port ${PORT}`);
});
