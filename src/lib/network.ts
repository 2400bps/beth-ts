import axios from "axios";

export interface NetworkData {
    network: string;
    clientUrl: string;
}


// export const getGasPrice = async (): Promise<number | undefined> => {
//     const maxGasPrice = 60000000000;
//     try {
//         const resp = await axios.get("https://ethgasstation.info/json/ethgasAPI.json");
//         if (resp.data.fast) {
//             const gasPrice = resp.data.fast * Math.pow(10, 8);
//             return gasPrice > maxGasPrice ? maxGasPrice : gasPrice;
//         }
//         throw new Error("cannot retrieve gas price from ethgasstation");
//     } catch (error) {
//         console.error(error);
//     }
// };
