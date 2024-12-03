import {
  Account,
  Client as AppwriteClient,
  Databases,
  ID,
  Models,
  Query,
} from "appwrite";
import { Client, Client as ReactNativeClient } from "react-native-appwrite";

interface User {
  email: string;
  username: string;
  password: string;
}

type AppwriteType = {
  endpoint: string;
  platform: string;
  projectId: string;
  databaseId: string;
  userCollectionId: string;
  storageId: string;
};

export const config: AppwriteType = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.jsm.hospital_app",
  projectId: "674e0569002b48e2d567",
  databaseId: "674e07ba0033c2bfc728",
  userCollectionId: "674e07f60024480f52cf",
  storageId: "674e0a190025e05b0ece",
};

const client = new Client();
// @ts-ignore
const databases = new Databases(client);

client
  .setEndpoint(config.endpoint)
  .setProject(config.projectId)
  .setPlatform(config.platform);

type ClientType = ReactNativeClient & AppwriteClient;

const account = new Account(client as unknown as ClientType);

export const createAccount = async (
  username: string,
  password: string,
  email: string,
) => {
  try {
    const newAccount = await account.create(
      ID.unique(),
      email,
      username,
      password,
    );
    if (!newAccount) {
      new Error("Failed to create account");
    }
    await signIn(username, password);
  } catch (error: unknown) {
    console.error(error);
  }
};

export async function signIn(email: string, password: string) {
  try {
    let session: Models.Session;
    session = await account.createEmailPasswordSession(email, password);
    return session;
  } catch (error: unknown) {
    console.error(error);
  }
}

export const getCurrentUser = async () => {
  try {
    const currentAccount = await account.get();
    if (!currentAccount) {
      new Error("User not found");
    }
    const currentUser = await databases.listDocuments(
      config.databaseId,
      config.userCollectionId,
      [Query.equal("accountId", currentAccount.$id)],
    );

    if (!currentUser) {
      new Error("User not found");
    }
    return currentUser.documents[0];
  } catch (error: unknown) {
    console.error(error);
  }
};
