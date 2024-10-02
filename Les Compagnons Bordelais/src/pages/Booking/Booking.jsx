import React, { useState } from "react";
import ScroolToTheTop from "../../component/ScrollToTheTop/ScroolToTheTop";
import Calendar from "rsuite/Calendar";
import moment from "moment";
import "./Booking.scss";

import "rsuite/Calendar/styles/index.css";

// Simuler la table des rendez-vous avec un objet
const appointments = {
  "2024-10-01": 5, // Plus de 4 rendez-vous => Rouge
  "2024-10-03": 3, // Entre 2 et 4 rendez-vous => Orange
  "2024-10-04": 0, // Aucun rendez-vous => Vert
  "2024-10-06": 2, // Entre 2 et 4 rendez-vous => Orange
  // Ajoute d'autres dates pour le test
  "2024-10-20": 0, // Pas de rendez-vous => Vert
  "2024-10-21": 4, // 4 rendez-vous => Orange
  "2024-10-22": 5, // Plus de 4 rendez-vous => Rouge
};

export default function Booking() {
  const [selectedDate, setSelectedDate] = useState(null);

  // Vérifie si un jour a plus de 4 rendez-vous
  const disableDateWithTooManyAppointments = (date) => {
    const formattedDate = moment(date).format("YYYY-MM-DD"); // Formate la date avec Moment.js
    return appointments[formattedDate] > 4; // Désactiver si > 4 rendez-vous
  };

  // Désactiver les jours antérieurs à aujourd'hui
  const disablePastDates = (date) => {
    return moment(date).isBefore(moment(), "day"); // Désactiver si la date est antérieure à aujourd'hui
  };

  // Appliquer une classe personnalisée en fonction du nombre de rendez-vous
  const getDayClass = (date) => {
    const formattedDate = moment(date).format("YYYY-MM-DD"); // Formate la date avec Moment.js
    const numAppointments = appointments[formattedDate] || 0;

    if (numAppointments > 4) {
      return "red-day"; // Plus de 4 rendez-vous => Rouge
    } else if (numAppointments >= 2 && numAppointments <= 4) {
      return "orange-day"; // Entre 2 et 4 rendez-vous => Orange
    } else if (numAppointments === 0) {
      return "green-day"; // Pas de rendez-vous => Vert
    }
    return "";
  };

  const handleDateSelect = (date) => {
    const formattedDate = moment(date).format("YYYY-MM-DD"); // Formate la date avec Moment.js
    console.log("Date sélectionnée:", formattedDate);
    setSelectedDate(date);
  };

  return (
    <div className="container" style={{ zIndex: 0 }}>
      <ScroolToTheTop />
      <Calendar
        onSelect={handleDateSelect}
        disabledDate={(date) =>
          disableDateWithTooManyAppointments(date) || disablePastDates(date)
        } // Désactiver les dates non sélectionnables
        renderCell={(date) => {
          const dayClass = getDayClass(date); // Récupère la classe CSS correspondant à la date
          const isDisabled = disablePastDates(date); // Vérifie si la date est désactivée

          return (
            <div
              className={`rs-calendar-table-cell-content ${dayClass}
              ${isDisabled ? "disabled-day" : ""}`} // Applique la classe disabled-day si la date est antérieure
              style={{
                textAlign: "center",
                lineHeight: "30px",
                pointerEvents: isDisabled ? "none" : "auto",
              }} // Empêche les événements de clic sur les jours désactivés
            ></div>
          );
        }}
      />
      <div className="text-center">
        {selectedDate && (
          <p>Date sélectionnée : {selectedDate.toLocaleDateString()}</p>
        )}
        <button className="button">Prendre rendez-vous</button>
      </div>
    </div>
  );
}
