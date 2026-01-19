import admin from "firebase-admin";
import serviceAccount from "../../secondbrain-b5493-firebase-adminsdk-fbsvc-6f141e411e.json";

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as any),
});

export default admin;
