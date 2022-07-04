import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData ={
    UserPoolId:"us-east-1_PnfdAJvsP",
    ClientId:"7cenps74eupbcbs65ui67j77fu"
}

export default new CognitoUserPool(poolData);