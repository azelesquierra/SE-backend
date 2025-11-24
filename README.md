# 🩺 Clinic / Appointment System API

This RESTful API manages **patients**, **doctors**, and **appointments** for a clinic.  
Built with **MongoDB (Mongoose)**

---

## 🚀 Base URL

- Local: `http://localhost:3000`
- live : https://se-midterm-project-crudmongodb.onrender.com

## 📍 Endpoints Overview

| **Entity** | **Method** | **Endpoint** | **Description** |
|-------------|-------------|---------------|------------------|
| Patients 
|  |GET     | `/api/patients` | Get all patients |
|  | GET    | `/api/patients/:id` | Get a specific patient |
|  | POST   | `/api/patients` | Create a new patient |
|  | PUT    | `/api/patients/:id` | Update patient details |
|  | DELETE | `/api/patients/:id` | Delete a patient |
| Doctors 
|  | GET    | `/api/doctors` | Get all doctors |
|  | GET    | `/api/doctors/:id` | Get a specific doctor |
|  | POST   | `/api/doctors` | Create a new doctor |
|  | PUT    | `/api/doctors/:id` | Update doctor details |
|  | DELETE | `/api/doctors/:id` | Delete a doctor |
| Appointments
|  |GET     | `/api/appointments` | Get all appointments |
|  | GET    | `/api/appointments/:id` | Get a specific appointment |
|  | POST   | `/api/appointments` | Create a new appointment |
|  | PUT    | `/api/appointments/:id` | Update appointment details |
|  | DELETE | `/api/appointments/:id` | Delete an appointment |

---

## Example Request Bodies

**### Create Patient**
```json
{
  "name": "Azel Esquierra",
  "birthDate": "2003-11-18",
  "email": "azelesquierra@example.com",
  "phone": "0999999999"
}

**### Create doctor**
{
  "name": "Dr. John Doe",
  "specialty": "Cardiology"
}

**###create appointment**
{
  "patientId": "68f1d3a259cad447045b5e8e",
  "doctorId": "68f1daf2fc31f45ace8af216",
  "startAt": "2025-10-16T09:00:00Z",
  "endAt": "2025-10-16T09:30:00Z",
  "notes": "Routine check-up"
}
