import { Account, Client, Databases } from 'react-native-appwrite';

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject(''); // Your project ID

const account = new Account(client);
const databases = new Databases(client);

export { account, client, databases };
// The above code initializes the Appwrite client, account, and databases instances.
// The client is configured with the API endpoint and project ID.
// The account instance is used to manage user accounts, and the databases instance is used to interact with the Appwrite database.
// The client, account, and databases instances are exported for use in other parts of the application.
// The code is a simple setup for using Appwrite in a React Native application.