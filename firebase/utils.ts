import { Doctor, User } from "@/app/types/types";
import { db } from "@/firebase/firebase";
import {
  collection,
  doc,
  DocumentSnapshot,
  getDoc,
  getDocs,
} from "@firebase/firestore";

export const fetchUserData = async (userId: string): Promise<User> => {
  try {
    const userDoc = doc(collection(db, "users"), userId);
    const user = await getDoc(userDoc);

    if (user.exists()) {
      const data = user.data();
      return {
        id: user.id,
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        avatar: data.avatar,
        appointments: data.appointments,
      };
    } else {
      throw new Error(`No such user ${userId}`);
    }
  } catch (e) {
    const error = `Error getting document user, ${e}`;
    console.error(error);
    throw new Error(error);
  }
};

export const fetchDoctorsData = async (): Promise<Doctor[]> => {
  try {
    const doctors = await getDocs(collection(db, "doctors"));
    const doctorsData: Doctor[] = [];

    doctors.forEach((doc: DocumentSnapshot) => {
      const data = doc.data();

      if (!data) {
        return;
      }

      const doctorData: Doctor = {
        id: doc.id,
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        specialization: data.specialization,
        avatar: data.avatar,
      };

      doctorsData.push(doctorData);
      console.log(doc.id, " => ", doc.data());
    });
    return doctorsData;
  } catch (e) {
    const error = `Error getting document doctors, ${e}`;
    console.error(error);
    throw new Error(error);
  }
};
