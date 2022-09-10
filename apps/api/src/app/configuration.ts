export interface AppConfiguration {
    elastic: {
        username: string;
        password: string;
    }
}

export default (): AppConfiguration => ({
    elastic: {
        username: process.env.ELASTIC_USERNAME,
        password: process.env.ELASTIC_PASSWORD
    }
});