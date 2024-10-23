const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const cors = require("cors");
const app = express();
const { Types } = require("mongoose");
const ObjectId = Types.ObjectId;

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
  dogName: String,
  authTokens: String,
});

const InfosDogSchema = new mongoose.Schema({
  client_id: String,
  lastname: String,
  birthDate: { type: Date },
  breed: String,
  sex: { type: String, possibleValue: ["Male", "Femelle"] },
  microchip: { type: String, possibleValue: ["Oui", "Non"] },
  tatoo: { type: String, possibleValue: ["Oui", "Non"] },
  medical: { type: String, possibleValue: ["Oui", "Non"] },
  img: String,
});

const InfosClientSchema = new mongoose.Schema({
  client_id: String,
  name: String,
  lastname: String,
  email: String,
  address: String,
  tel: String,
  photo: String,
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
const InfosDog = mongoose.model("InfosDogS", InfosDogSchema);
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

    if (!usersInfos) {
      return res.status(404).json({ message: "Client introuvable" });
    }

    res.json(usersInfos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/api/user-dog-infos/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;
    const userDogInfos = await InfosDog.find({ client_id: userId });

    console.log(userDogInfos);
    res.json(userDogInfos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/api/user-dog-infos/:userId/:dogName", async (req, res) => {
  try {
    const userId = req.params.userId;
    const dogName = req.params.dogName;
    const userDogInfos = await InfosDog.findOne({
      client_id: userId,
      lastname: dogName,
    });

    console.log(userDogInfos);
    res.json(userDogInfos);
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

app.patch("/api/infos-dog/:dogId", async (req, res) => {
  const dogIdString = req.params.dogId;
  const updatedData = req.body;

  // Vérification de la validité de l'ObjectId
  if (!mongoose.Types.ObjectId.isValid(dogIdString)) {
    return res.status(400).json({ msg: "dogId invalide" });
  }

  const dogId = new mongoose.Types.ObjectId(dogIdString);

  console.log("ID du chien :", dogId);
  console.log("Données de mise à jour :", updatedData);

  try {
    // Vérifier que des données de mise à jour existent
    if (!updatedData || Object.keys(updatedData).length === 0) {
      return res.status(400).json({ msg: "Données de mise à jour requises" });
    }

    // Mise à jour des informations du chien
    const updatedInfosDog = await InfosDog.findByIdAndUpdate(
      dogId,
      updatedData,
      { new: true, runValidators: true }
    );

    if (!updatedInfosDog) {
      return res.status(404).json({ msg: "Chien non trouvé" });
    }

    // Réponse avec les informations mises à jour
    res.status(200).json(updatedInfosDog);
  } catch (error) {
    console.error("Erreur lors de la mise à jour du chien :", error);
    res.status(500).json({
      msg: "Erreur lors de la mise à jour du chien",
      error: error.message,
    });
  }
});

app.patch("/api/infos-client/:userId", async (req, res) => {
  const userIdString = req.params.userId;
  const updatedData = req.body;

  if (!mongoose.Types.ObjectId.isValid(userIdString)) {
    return res.status(400).json({ msg: "userId invalide" });
  }

  const userId = new mongoose.Types.ObjectId(userIdString);

  console.log("ID utilisateur :", userId);
  console.log("Données de mise à jour :", updatedData);

  try {
    // Vérifier que les données de mise à jour ne sont pas vides
    if (!updatedData || Object.keys(updatedData).length === 0) {
      return res.status(400).json({ msg: "Données de mise à jour requises" });
    }

    const updatedInfosClient = await InfosClient.findByIdAndUpdate(
      userId,
      updatedData,
      { new: true, runValidators: true } // Retourne l'objet mis à jour et applique les validateurs
    );

    if (!updatedInfosClient) {
      return res.status(404).json({ msg: "Client non trouvé" });
    }

    res.status(200).json(updatedInfosClient);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      msg: "Erreur lors de la mise à jour du client",
      error: error.message,
    });
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

app.post("/api/add-dog", async (req, res) => {
  console.log(req.body);
  const {
    client_id,
    lastname,
    birthDate,
    breed,
    sex,
    microchip,
    tatoo,
    medical,
    img,
  } = req.body;

  try {
    const newDog = await InfosDog.create({
      client_id: client_id, // Lier le chien au client
      lastname: lastname || "",
      birthDate: birthDate || "",
      breed: breed || "",
      sex: sex || "",
      microchip: microchip || "",
      tatoo: tatoo || "",
      medical: medical || "",
      img: img || "",
    });
    res.status(200).json({ message: "Ajout du nouveau chien réussi", newDog });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Une error est survenue durant l'inscription" });
  }
});

app.post("/api/register", async (req, res) => {
  const { email, password, dogName } = req.body;
  try {
    const existingClient = await Client.findOne({ email });
    if (existingClient) {
      return res.status(400).json({ message: "Ce mail existe déjà." });
    }
    const hashedPassword = await bcrypt.hash(password, 7);

    const newClient = new Client({
      email,
      password: hashedPassword,
      dogName,
    });

    const addedClientBySave = await newClient.save();
    console.log("save", addedClientBySave);
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
      lastname: dogName,
      birthDate: "",
      breed: "",
      sex: "",
      microchip: "",
      tatoo: "",
      medical: "",
      img: "",
    });

    console.log(InfosClient);

    res.status(200).json({ message: "Inscription réussie", clientId });
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
